// SPDX-License-Identifier: AGPL-3.0-only
(function () {
  "use strict";

  const catalog = window.TEA_CATALOG;
  const vendorsById = new Map(catalog.vendors.map((vendor) => [vendor.id, vendor]));
  const boothsById = new Map(catalog.booths.map((booth) => [booth.id, booth]));
  const SVG_NS = "http://www.w3.org/2000/svg";
  const HALL = Object.freeze({ x: 48, y: 70, width: 899, height: 540 });
  const STAGE = Object.freeze({ x: 70, y: 210, width: 96, height: 76 });
  const SUPPORTS = Object.freeze([
    { x: 185, y: 250, labelX: 199, labelY: 264 },
    { x: 190, y: 428, labelX: 204, labelY: 442 },
  ]);
  const MAP_VIEW_WIDTH = 958;
  const MAP_VIEW_HEIGHT = 585;
  const MAP_FRAME_RATIO = HALL.width / HALL.height;
  const MAP_BASE_WIDTH = 1680;
  const MAP_BASE_HEIGHT = Math.round((MAP_BASE_WIDTH * MAP_VIEW_HEIGHT) / MAP_VIEW_WIDTH);
  const MAP_MIN_ZOOM_FALLBACK = 0.15;
  const MAP_MAX_ZOOM = 3;
  const MAP_ZOOM_STEP = 1.2;
  const MAP_DRAG_THRESHOLD = 5;

  const state = {
    query: "",
    section: "all",
    selectedBoothId: null,
    showGrid: false,
    tagMode: "or",
    selectedTags: new Set(),
    mapZoom: 1,
    boothSort: "booth",
  };

  const els = {
    eventDate: document.getElementById("eventDate"),
    eventVenue: document.getElementById("eventVenue"),
    eventSource: document.getElementById("eventSource"),
    searchInput: document.getElementById("searchInput"),
    sectionFilter: document.getElementById("sectionFilter"),
    clearButton: document.getElementById("clearButton"),
    gridToggle: document.getElementById("gridToggle"),
    tagChips: document.getElementById("tagChips"),
    tagModeOr: document.getElementById("tagModeOr"),
    tagModeAnd: document.getElementById("tagModeAnd"),
    stats: document.getElementById("stats"),
    zoomOutButton: document.getElementById("zoomOutButton"),
    zoomResetButton: document.getElementById("zoomResetButton"),
    zoomInButton: document.getElementById("zoomInButton"),
    zoomValue: document.getElementById("zoomValue"),
    mapScroll: document.getElementById("mapScroll"),
    map: document.getElementById("boothMap"),
    inspector: document.querySelector(".inspector"),
    detailsPanel: document.getElementById("detailsPanel"),
    resultCount: document.getElementById("resultCount"),
    boothSort: document.getElementById("boothSort"),
    boothList: document.getElementById("boothList"),
  };

  const mapPointers = new Map();
  const mapGesture = {
    mode: "idle",
    lastX: 0,
    lastY: 0,
    lastPinchCenter: null,
    dragDistance: 0,
    startDistance: 0,
    startZoom: 1,
    suppressClick: false,
    tapBoothId: null,
  };
  let mapResizeFrame = 0;
  let mapResizeObserver = null;

  const TAG_GROUPS = [
    {
      id: "tea",
      label: "차",
      tags: [
        "#한국차",
        "#중국차",
        "#대만차",
        "#일본차",
        "#보이차",
        "#우롱차",
        "#녹차",
        "#홍차",
        "#백차",
        "#황차",
        "#흑차",
        "#발효차",
        "#말차",
        "#호지차",
        "#야생차",
        "#대용차",
      ],
    },
    {
      id: "ware",
      label: "기물",
      tags: ["#도예", "#보관용기", "#공예", "#목공", "#옻칠"],
    },
    {
      id: "food",
      label: "다식",
      tags: ["#다식", "#전통디저트"],
    },
  ];

  function captureScrollState() {
    return {
      pageScrollX: window.scrollX,
      pageScrollY: window.scrollY,
      boothListScrollTop: els.boothList ? els.boothList.scrollTop : 0,
      inspectorScrollTop: els.inspector ? els.inspector.scrollTop : 0,
      mapScrollLeft: els.mapScroll ? els.mapScroll.scrollLeft : 0,
      mapScrollTop: els.mapScroll ? els.mapScroll.scrollTop : 0,
    };
  }

  function restoreScrollState(options = {}) {
    if (Number.isFinite(options.boothListScrollTop)) {
      els.boothList.scrollTop = options.boothListScrollTop;
    }
    if (Number.isFinite(options.inspectorScrollTop) && els.inspector) {
      els.inspector.scrollTop = options.inspectorScrollTop;
    }
    if (Number.isFinite(options.mapScrollLeft)) {
      els.mapScroll.scrollLeft = options.mapScrollLeft;
    }
    if (Number.isFinite(options.mapScrollTop)) {
      els.mapScroll.scrollTop = options.mapScrollTop;
    }
    if (Number.isFinite(options.pageScrollX) && Number.isFinite(options.pageScrollY)) {
      window.scrollTo(options.pageScrollX, options.pageScrollY);
      requestAnimationFrame(() => window.scrollTo(options.pageScrollX, options.pageScrollY));
    }
  }

  function scrollDetailsPanelToTop() {
    const target = els.detailsPanel || els.inspector;
    if (!target) {
      return;
    }
    if (els.inspector) {
      els.inspector.scrollTop = 0;
    }
    const pageTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 12);
    window.scrollTo(window.scrollX, pageTop);
    requestAnimationFrame(() => {
      if (els.inspector) {
        els.inspector.scrollTop = 0;
      }
      const nextTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 12);
      window.scrollTo(window.scrollX, nextTop);
    });
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function mapSize(zoom = state.mapZoom) {
    return {
      width: Math.round(MAP_BASE_WIDTH * zoom),
      height: Math.round(MAP_BASE_HEIGHT * zoom),
    };
  }

  function syncMapViewportFrame() {
    if (!els.mapScroll) {
      return;
    }
    const rect = els.mapScroll.getBoundingClientRect();
    const width = rect.width || els.mapScroll.clientWidth;
    if (width > 0) {
      els.mapScroll.style.height = `${Math.round(width / MAP_FRAME_RATIO)}px`;
    }
  }

  function mapMinZoom() {
    if (!els.mapScroll) {
      return MAP_MIN_ZOOM_FALLBACK;
    }
    const visibleWidth = els.mapScroll.clientWidth;
    if (!Number.isFinite(visibleWidth) || visibleWidth <= 0) {
      return MAP_MIN_ZOOM_FALLBACK;
    }
    return clamp(visibleWidth / MAP_BASE_WIDTH, MAP_MIN_ZOOM_FALLBACK, 1);
  }

  function syncMapZoomControls() {
    if (!els.zoomValue) {
      return;
    }
    const minZoom = mapMinZoom();
    els.zoomValue.textContent = `${Math.round(state.mapZoom * 100)}%`;
    els.zoomOutButton.disabled = state.mapZoom <= minZoom + 0.001;
    els.zoomInButton.disabled = state.mapZoom >= MAP_MAX_ZOOM - 0.001;
  }

  function applyMapZoom() {
    syncMapViewportFrame();
    const minZoom = mapMinZoom();
    if (state.mapZoom < minZoom) {
      state.mapZoom = minZoom;
    }
    const size = mapSize();
    els.map.style.width = `${size.width}px`;
    els.map.style.minWidth = `${size.width}px`;
    els.map.style.height = `${size.height}px`;
    syncMapZoomControls();
  }

  function setMapZoom(nextZoom, anchor = {}) {
    const previousZoom = state.mapZoom;
    const zoom = clamp(nextZoom, mapMinZoom(), MAP_MAX_ZOOM);
    if (Math.abs(zoom - previousZoom) < 0.001) {
      syncMapZoomControls();
      return;
    }

    const rect = els.mapScroll.getBoundingClientRect();
    const previousSize = mapSize(previousZoom);
    const anchorClientX = Number.isFinite(anchor.clientX) ? anchor.clientX : rect.left + rect.width / 2;
    const anchorClientY = Number.isFinite(anchor.clientY) ? anchor.clientY : rect.top + rect.height / 2;
    const anchorOffsetX = anchorClientX - rect.left;
    const anchorOffsetY = anchorClientY - rect.top;
    const anchorRatioX = (els.mapScroll.scrollLeft + anchorOffsetX) / previousSize.width;
    const anchorRatioY = (els.mapScroll.scrollTop + anchorOffsetY) / previousSize.height;

    state.mapZoom = zoom;
    applyMapZoom();

    const nextSize = mapSize();
    els.mapScroll.scrollLeft = anchorRatioX * nextSize.width - anchorOffsetX;
    els.mapScroll.scrollTop = anchorRatioY * nextSize.height - anchorOffsetY;
  }

  function zoomBy(factor, anchor) {
    setMapZoom(state.mapZoom * factor, anchor);
  }

  function resetMapZoom() {
    setMapZoom(1);
  }

  function syncMapZoomForViewport() {
    syncMapViewportFrame();
    setMapZoom(state.mapZoom);
    applyMapZoom();
  }

  function distanceBetween(points) {
    if (points.length < 2) {
      return 0;
    }
    const dx = points[0].clientX - points[1].clientX;
    const dy = points[0].clientY - points[1].clientY;
    return Math.hypot(dx, dy);
  }

  function centerOf(points) {
    const total = points.reduce(
      (memo, point) => ({
        clientX: memo.clientX + point.clientX,
        clientY: memo.clientY + point.clientY,
      }),
      { clientX: 0, clientY: 0 }
    );
    return {
      clientX: total.clientX / points.length,
      clientY: total.clientY / points.length,
    };
  }

  function mapPointerValues() {
    return Array.from(mapPointers.values());
  }

  function startPinchGesture() {
    const points = mapPointerValues();
    mapGesture.mode = "pinch";
    mapGesture.startDistance = distanceBetween(points);
    mapGesture.startZoom = state.mapZoom;
    mapGesture.lastPinchCenter = centerOf(points);
  }

  function boothTargetFromEvent(event) {
    const directTarget =
      event.target && event.target.closest ? event.target.closest(".booth[data-booth-id]") : null;
    if (directTarget) {
      return directTarget;
    }
    if (typeof document.elementFromPoint !== "function") {
      return null;
    }
    const pointTarget = document.elementFromPoint(event.clientX, event.clientY);
    return pointTarget && pointTarget.closest ? pointTarget.closest(".booth[data-booth-id]") : null;
  }

  function handleMapPointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    const boothTarget = boothTargetFromEvent(event);
    mapPointers.set(event.pointerId, {
      clientX: event.clientX,
      clientY: event.clientY,
    });
    if (els.mapScroll.setPointerCapture) {
      els.mapScroll.setPointerCapture(event.pointerId);
    }

    if (mapPointers.size === 1) {
      mapGesture.mode = "pan";
      mapGesture.lastX = event.clientX;
      mapGesture.lastY = event.clientY;
      mapGesture.dragDistance = 0;
      mapGesture.tapBoothId = boothTarget ? boothTarget.dataset.boothId : null;
    } else if (mapPointers.size === 2) {
      mapGesture.tapBoothId = null;
      startPinchGesture();
      event.preventDefault();
    }
  }

  function handleMapPointerMove(event) {
    if (!mapPointers.has(event.pointerId)) {
      return;
    }

    const previous = mapPointers.get(event.pointerId);
    const current = { clientX: event.clientX, clientY: event.clientY };
    mapPointers.set(event.pointerId, current);

    if (mapPointers.size >= 2) {
      const points = mapPointerValues();
      const distance = distanceBetween(points);
      if (mapGesture.mode !== "pinch" || mapGesture.startDistance <= 0) {
        startPinchGesture();
        return;
      }
      mapGesture.suppressClick = true;
      mapGesture.tapBoothId = null;
      els.mapScroll.classList.add("is-dragging");
      const center = centerOf(points);
      const previousCenter = mapGesture.lastPinchCenter || center;
      const dx = center.clientX - previousCenter.clientX;
      const dy = center.clientY - previousCenter.clientY;
      setMapZoom(mapGesture.startZoom * (distance / mapGesture.startDistance), center);
      els.mapScroll.scrollLeft -= dx;
      els.mapScroll.scrollTop -= dy;
      mapGesture.lastPinchCenter = center;
      event.preventDefault();
      return;
    }

    if (mapGesture.mode !== "pan") {
      return;
    }

    const dx = current.clientX - previous.clientX;
    const dy = current.clientY - previous.clientY;
    mapGesture.dragDistance += Math.abs(dx) + Math.abs(dy);

    if (mapGesture.dragDistance > MAP_DRAG_THRESHOLD) {
      mapGesture.suppressClick = true;
      mapGesture.tapBoothId = null;
      els.mapScroll.classList.add("is-dragging");
      els.mapScroll.scrollLeft -= dx;
      els.mapScroll.scrollTop -= dy;
      event.preventDefault();
    }
  }

  function handleMapPointerEnd(event) {
    const canSelectTap =
      mapPointers.size === 1 &&
      mapPointers.has(event.pointerId) &&
      mapGesture.mode === "pan" &&
      mapGesture.dragDistance <= MAP_DRAG_THRESHOLD &&
      mapGesture.tapBoothId;
    const tapBoothId = canSelectTap ? mapGesture.tapBoothId : null;

    if (mapPointers.has(event.pointerId)) {
      mapPointers.delete(event.pointerId);
    }
    if (els.mapScroll.releasePointerCapture) {
      try {
        els.mapScroll.releasePointerCapture(event.pointerId);
      } catch (error) {
        // Some browsers release capture before pointercancel.
      }
    }

    if (mapPointers.size === 1) {
      const point = mapPointerValues()[0];
      mapGesture.mode = "pan";
      mapGesture.lastX = point.clientX;
      mapGesture.lastY = point.clientY;
      mapGesture.lastPinchCenter = null;
      mapGesture.dragDistance = 0;
      return;
    }

    mapGesture.mode = "idle";
    mapGesture.tapBoothId = null;
    mapGesture.lastPinchCenter = null;
    els.mapScroll.classList.remove("is-dragging");
    if (tapBoothId) {
      mapGesture.suppressClick = true;
      selectBooth(tapBoothId, { source: "map" });
      clearMapFocus();
    }
    if (mapGesture.suppressClick) {
      window.setTimeout(() => {
        mapGesture.suppressClick = false;
      }, 140);
    }
  }

  function handleMapClick(event) {
    if (mapGesture.suppressClick) {
      event.preventDefault();
      return;
    }
    const boothTarget = boothTargetFromEvent(event);
    if (boothTarget && boothTarget.dataset.boothId) {
      selectBooth(boothTarget.dataset.boothId, { source: "map" });
      clearMapFocus();
    }
  }

  function clearMapFocus() {
    const active = document.activeElement;
    if (active && els.map && els.map.contains(active) && typeof active.blur === "function") {
      active.blur();
    }
  }

  function normalize(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, "");
  }

  function vendorsForBooth(booth) {
    return booth.vendorIds.map((id) => vendorsById.get(id)).filter(Boolean);
  }

  function tagsForBooth(booth) {
    return new Set(vendorsForBooth(booth).flatMap((vendor) => vendor.tags || []));
  }

  function boothMatchesTags(booth) {
    if (!state.selectedTags.size) {
      return true;
    }
    const boothTags = tagsForBooth(booth);
    const selectedTags = Array.from(state.selectedTags);
    return state.tagMode === "and"
      ? selectedTags.every((tag) => boothTags.has(tag))
      : selectedTags.some((tag) => boothTags.has(tag));
  }

  function boothSearchBlob(booth) {
    const vendors = vendorsForBooth(booth);
    return normalize(
      [
        booth.id,
        booth.section,
        ...vendors.flatMap((vendor) => [
          vendor.name,
          vendor.originalName,
          vendor.category,
          vendor.summary,
          ...(vendor.tags || []),
          ...(vendor.products || []),
          ...(vendor.fairEvents || []).flatMap((event) => [
            event.title,
            event.summary,
            event.period,
            event.location,
            ...(event.tags || []),
          ]),
          ...(vendor.aliases || []),
        ]),
      ].join(" ")
    );
  }

  function boothMatches(booth) {
    const sectionOk = state.section === "all" || booth.section === state.section;
    const queryOk = !state.query || boothSearchBlob(booth).includes(normalize(state.query));
    return sectionOk && queryOk && boothMatchesTags(booth);
  }

  function filteredBooths() {
    return catalog.booths.filter(boothMatches);
  }

  function boothSortKey(booth) {
    const key = vendorsForBooth(booth)
      .map((vendor) => vendor.name || vendor.originalName || "")
      .filter(Boolean)
      .join(" ");
    return key || "\uffff";
  }

  function sortBoothsForList(booths) {
    const sorted = [...booths];
    if (state.boothSort === "vendor") {
      sorted.sort((a, b) => {
        const nameCompare = boothSortKey(a).localeCompare(boothSortKey(b), "ko");
        if (nameCompare !== 0) {
          return nameCompare;
        }
        return boothNumberCompare(a, b);
      });
      return sorted;
    }
    sorted.sort(boothNumberCompare);
    return sorted;
  }

  function boothNumberCompare(a, b) {
    const sectionCompare = String(a.section || "").localeCompare(String(b.section || ""), "en");
    if (sectionCompare !== 0) {
      return sectionCompare;
    }
    return Number(a.number || 0) - Number(b.number || 0);
  }

  function escapeText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shorten(value, limit) {
    const text = String(value || "");
    if (text.length <= limit) {
      return text;
    }
    return `${text.slice(0, Math.max(0, limit - 1))}…`;
  }

  function displayNameForBooth(booth) {
    const vendors = vendorsForBooth(booth);
    if (vendors.length === 0) {
      return "미배정";
    }
    if (vendors.length > 1) {
      return `${vendors.length}개 업체`;
    }
    return vendors[0].name;
  }

  function createSvgNode(tagName, attributes = {}) {
    const node = document.createElementNS(SVG_NS, tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
    return node;
  }

  function appendText(node, text, attributes = {}) {
    const textNode = createSvgNode("text", attributes);
    textNode.textContent = text;
    node.appendChild(textNode);
    return textNode;
  }

  function splitTextLines(value, charsPerLine, maxLines) {
    const text = String(value || "").trim();
    if (!text) {
      return [""];
    }

    const lines = [];
    let remaining = text;
    const breakPattern = /[\s/・·,&()_-]/;

    while (remaining && lines.length < maxLines) {
      const slotsLeft = maxLines - lines.length;
      if (remaining.length <= charsPerLine || slotsLeft === 1) {
        lines.push(shorten(remaining, charsPerLine));
        break;
      }

      let breakIndex = -1;
      const end = Math.min(charsPerLine + 1, remaining.length);
      for (let index = end; index >= Math.max(2, Math.floor(charsPerLine * 0.55)); index -= 1) {
        if (breakPattern.test(remaining[index - 1])) {
          breakIndex = index;
          break;
        }
      }

      let sliceEnd = breakIndex > 0 ? breakIndex : charsPerLine;
      if (remaining.length - sliceEnd === 1 && sliceEnd > 3) {
        sliceEnd -= 1;
      }
      const line = remaining.slice(0, sliceEnd).trim();
      lines.push(line || remaining.slice(0, charsPerLine));
      remaining = remaining.slice(sliceEnd).trim();
    }

    return lines;
  }

  function boothNameLines(booth) {
    const { cellW } = catalog.layout.grid;
    const widthCells = Math.max(1, Math.round(booth.w / cellW));
    const maxLines = 2;
    const charsPerLine = Math.max(widthCells >= 2 ? 4 : 3, Math.floor(booth.w / 5.5));
    return splitTextLines(displayNameForBooth(booth), charsPerLine, maxLines);
  }

  function appendMultilineText(node, lines, attributes = {}, lineHeight = 5.8) {
    const { maxWidth, ...textAttributes } = attributes;
    const textNode = createSvgNode("text", textAttributes);
    lines.forEach((line, index) => {
      const tspanAttributes = {
        x: attributes.x,
        dy: index === 0 ? 0 : lineHeight,
      };
      if (maxWidth && line.length * 4.8 > maxWidth) {
        tspanAttributes.textLength = maxWidth;
        tspanAttributes.lengthAdjust = "spacingAndGlyphs";
      }
      const tspan = createSvgNode("tspan", tspanAttributes);
      tspan.textContent = line;
      textNode.appendChild(tspan);
    });
    node.appendChild(textNode);
    return textNode;
  }

  function renderMapBase(parent) {
    parent.appendChild(
      createSvgNode("rect", {
        class: "hall-outline",
        x: HALL.x,
        y: HALL.y,
        width: HALL.width,
        height: HALL.height,
        rx: 0,
      })
    );

    const stage = createSvgNode("g", { "aria-hidden": "true" });
    stage.appendChild(createSvgNode("rect", { class: "facility", ...STAGE }));
    appendText(stage, "무대", { class: "facility-label", x: 118, y: 248 });
    parent.appendChild(stage);

    const support = createSvgNode("g", { "aria-hidden": "true" });
    SUPPORTS.forEach((item) => {
      support.appendChild(
        createSvgNode("rect", { class: "support-zone", x: item.x, y: item.y, width: catalog.layout.grid.cellW, height: 20 })
      );
      appendText(support, "기둥", { class: "support-label", x: item.labelX, y: item.labelY });
    });
    parent.appendChild(support);

    appendText(parent, "입구   출구", { class: "entrance-label", x: 332, y: 628 });
    appendText(parent, "등록대", { class: "entrance-label", x: 591, y: 628 });
    appendText(parent, "입구   출구", { class: "entrance-label", x: 814, y: 628 });
  }

  function renderGridOverlay(parent) {
    if (!state.showGrid) {
      return;
    }

    const { x0, y0, cellW, cellH, columns, rows } = catalog.layout.grid;
    const grid = createSvgNode("g", {
      class: "grid-overlay",
      "aria-hidden": "true",
    });

    for (let col = 0; col <= columns; col += 1) {
      const x = x0 + col * cellW;
      grid.appendChild(
        createSvgNode("line", {
          x1: x,
          y1: y0,
          x2: x,
          y2: y0 + rows * cellH,
        })
      );
    }

    for (let row = 0; row <= rows; row += 1) {
      const y = y0 + row * cellH;
      grid.appendChild(
        createSvgNode("line", {
          x1: x0,
          y1: y,
          x2: x0 + columns * cellW,
          y2: y,
        })
      );
    }

    parent.appendChild(grid);
  }

  function renderMap() {
    const fragment = document.createDocumentFragment();
    renderMapBase(fragment);
    renderGridOverlay(fragment);
    const visible = new Set(filteredBooths().map((booth) => booth.id));
    const hasTagFilter = state.selectedTags.size > 0;

    catalog.booths.forEach((booth) => {
      const group = createSvgNode("g", {
        class: [
          "booth",
          visible.has(booth.id) ? "" : "is-dimmed",
          hasTagFilter && boothMatchesTags(booth) ? "is-tag-match" : "",
          booth.vendorIds.length ? "" : "is-empty",
          state.selectedBoothId === booth.id ? "is-selected" : "",
        ]
          .filter(Boolean)
          .join(" "),
        tabindex: "0",
        role: "button",
        "aria-label": `${booth.id} ${displayNameForBooth(booth)}`,
        "data-booth-id": booth.id,
      });

      const title = createSvgNode("title");
      title.textContent = `${booth.id} ${displayNameForBooth(booth)}`;
      group.appendChild(title);

      group.appendChild(
        createSvgNode("rect", {
          x: booth.x,
          y: booth.y,
          width: booth.w,
          height: booth.h,
          rx: 0,
          fill: booth.color,
        })
      );

      const nameLines = boothNameLines(booth);
      const isShortBooth = booth.h < 22;
      appendMultilineText(group, nameLines, {
        class: "booth-name",
        x: booth.x + booth.w / 2,
        y: booth.y + (nameLines.length > 1 ? (isShortBooth ? 6 : 9) : isShortBooth ? 7.3 : 11),
        maxWidth: Math.max(booth.w - 3, 8),
      });

      appendText(group, booth.id, {
        class: "booth-id",
        x: booth.x + booth.w / 2,
        y: booth.y + booth.h - (isShortBooth ? 3 : 4.5),
      });

      group.addEventListener("click", (event) => {
        if (mapGesture.suppressClick) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        selectBooth(booth.id, { source: "map" });
        clearMapFocus();
        event.stopPropagation();
      });
      group.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectBooth(booth.id, { source: "map" });
        }
      });
      fragment.appendChild(group);
    });
    els.map.replaceChildren(fragment);
  }

  function renderSectionOptions() {
    catalog.sections.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.id;
      option.textContent = `${section.id}구역 (${section.count})`;
      els.sectionFilter.appendChild(option);
    });
  }

  function renderStats() {
    const results = filteredBooths();
    const multi = catalog.diagnostics.multiVendorBooths.length;
    const empty = catalog.diagnostics.emptyBooths.length;
    const overlaps = catalog.diagnostics.layout.overlapCount;
    const tagLabel = state.selectedTags.size
      ? ` · 태그 ${state.tagMode.toUpperCase()} ${state.selectedTags.size}개`
      : "";
    els.stats.textContent =
      `부스 ${catalog.diagnostics.boothCount}개 · 업체 ${catalog.diagnostics.vendorCount}개 · ` +
      `현재 ${results.length}개 표시${tagLabel} · 복수 업체 ${multi}개 · 미배정 ${empty}개 · 겹침 ${overlaps}칸`;
  }

  function syncTagModeButtons() {
    els.tagModeOr.classList.toggle("is-active", state.tagMode === "or");
    els.tagModeAnd.classList.toggle("is-active", state.tagMode === "and");
  }

  function renderTagChips() {
    els.tagChips.replaceChildren();
    const allTags = catalog.tags || [];
    const grouped = new Set(TAG_GROUPS.flatMap((group) => group.tags));
    const groups = [
      ...TAG_GROUPS.map((group) => ({
        ...group,
        tags: group.tags.filter((tag) => allTags.includes(tag)),
      })),
      {
        id: "other",
        label: "기타",
        tags: allTags.filter((tag) => !grouped.has(tag)),
      },
    ].filter((group) => group.tags.length);

    const createTagButton = (tag) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = state.selectedTags.has(tag) ? "tag-chip is-active" : "tag-chip";
      button.textContent = tag;
      button.dataset.tag = tag;
      button.setAttribute("aria-pressed", String(state.selectedTags.has(tag)));
      button.addEventListener("click", (event) => {
        const scrollState = captureScrollState();
        if (state.selectedTags.has(tag)) {
          state.selectedTags.delete(tag);
        } else {
          state.selectedTags.add(tag);
        }
        event.currentTarget.classList.toggle("is-active", state.selectedTags.has(tag));
        event.currentTarget.setAttribute("aria-pressed", String(state.selectedTags.has(tag)));
        if (state.selectedBoothId && !boothMatches(boothsById.get(state.selectedBoothId))) {
          state.selectedBoothId = null;
        }
        render({ ...scrollState, preserveTagChips: true });
      });
      return button;
    };

    groups.forEach((group) => {
      const section = document.createElement("section");
      section.className = `tag-chip-group tag-chip-group-${group.id}`;
      section.setAttribute("aria-label", `${group.label} 태그`);

      const heading = document.createElement("h3");
      heading.textContent = group.label;

      const chipWrap = document.createElement("div");
      chipWrap.className = "tag-chip-group-list";
      group.tags.forEach((tag) => chipWrap.appendChild(createTagButton(tag)));

      section.append(heading, chipWrap);
      els.tagChips.appendChild(section);
    });
  }

  function syncTagChipsSelection() {
    els.tagChips.querySelectorAll(".tag-chip").forEach((button) => {
      const active = state.selectedTags.has(button.dataset.tag);
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderBoothList() {
    const results = sortBoothsForList(filteredBooths());
    els.resultCount.textContent = `${results.length}개 부스`;
    els.boothList.replaceChildren();

    results.forEach((booth) => {
      const vendors = vendorsForBooth(booth);
      const button = document.createElement("button");
      button.type = "button";
      button.className = state.selectedBoothId === booth.id ? "is-selected" : "";
      button.addEventListener("click", () => selectBooth(booth.id, { source: "list" }));

      const id = document.createElement("span");
      id.className = "list-booth-id";
      id.style.background = booth.color;
      id.textContent = booth.id;

      const text = document.createElement("span");
      text.className = "list-vendors";
      const title = document.createElement("strong");
      title.textContent = displayNameForBooth(booth);
      const meta = document.createElement("span");
      meta.textContent = vendors.length
        ? vendors.map((vendor) => [vendor.category, ...(vendor.tags || [])].join(" ")).join(" · ")
        : "업체명 미확인";
      text.append(title, meta);
      button.append(id, text);
      els.boothList.appendChild(button);
    });
  }

  function renderEmptyDetails() {
    els.detailsPanel.innerHTML = `
      <div class="empty-state">
        <h2>부스를 선택하세요</h2>
        <p>지도나 아래 부스 목록에서 부스를 누르면 업체 정보, 저장된 출처, 리뷰 근거 상태를 볼 수 있습니다.</p>
        <p>이 앱은 실행 중 외부 사이트를 읽지 않습니다. 링크는 직접 확인용으로만 열립니다.</p>
      </div>
    `;
  }

  function renderTheme(theme) {
    return `
      <div class="review-theme">
        <strong>${escapeText(theme.title)}</strong>
        <p>${escapeText(theme.summary)}</p>
        <small>언급 ${theme.mentions} · 신뢰도 ${escapeText(theme.confidence)} · 근거: ${escapeText(
          (theme.evidence || []).join(", ")
        )}</small>
      </div>
    `;
  }

  function renderReviewDetail(item) {
    const link = item.sourceUrl
      ? `<a href="${escapeText(item.sourceUrl)}" target="_blank" rel="noreferrer">${escapeText(
          item.sourceTitle || "출처 보기"
        )}</a>`
      : `<span>${escapeText(item.sourceTitle || "출처 미상")}</span>`;
    return `
      <div class="review-detail">
        <div class="review-detail-head">
          <strong>${escapeText(item.product || "제품명 미상")}</strong>
          <span>${escapeText(item.sentiment || "neutral")}</span>
        </div>
        <p>${escapeText(item.review || "")}</p>
        <small>신뢰도 ${escapeText(item.confidence || "unknown")}</small>
        <div class="review-detail-source">${link}</div>
      </div>
    `;
  }

  function socialIcon(type) {
    const iconClass = "social-icon";
    const icons = {
      instagram: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"></rect><circle cx="12" cy="12" r="3.2"></circle><circle cx="16.4" cy="7.6" r="0.9"></circle></svg>`,
      facebook: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.2h2.1V5.1c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.1v2.8H5v3.5h3.3V23h4v-6.7h3.3l.5-3.5h-3.8v-2.5c0-1 .3-2.1 1.9-2.1Z"></path></svg>`,
      youtube: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6.5" width="17" height="11" rx="3"></rect><path d="m10.5 9.5 5 2.5-5 2.5Z"></path></svg>`,
      kakao: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4C7 4 3.5 7 3.5 10.7c0 2.4 1.5 4.5 3.8 5.7l-.8 3.2 3.5-2.1c.6.1 1.3.2 2 .2 5 0 8.5-3 8.5-6.9S17 4 12 4Z"></path></svg>`,
      "naver-blog": `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="13" rx="3"></rect><path d="M8 9h4.2c1.4 0 2.4.8 2.4 2 0 .7-.3 1.2-.8 1.5.8.3 1.2.9 1.2 1.8 0 1.4-1.1 2.2-2.7 2.2H8Z"></path><path d="M10.2 11.7h1.6c.4 0 .7-.2.7-.6s-.3-.6-.7-.6h-1.6Zm0 3h1.9c.5 0 .8-.2.8-.7s-.3-.7-.8-.7h-1.9Z"></path></svg>`,
      "naver-cafe": `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h12v5.4a5.2 5.2 0 0 1-5.2 5.2H10A5 5 0 0 1 5 13.6Z"></path><path d="M17 9h1.2a2.8 2.8 0 0 1 0 5.6H17"></path><path d="M7.5 5.5h7"></path></svg>`,
      band: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4.5" width="16" height="15" rx="4"></rect><path d="M8 8h4.8c1.4 0 2.4.8 2.4 2 0 .7-.3 1.2-.8 1.5.9.3 1.4 1 1.4 2 0 1.5-1.2 2.4-2.9 2.4H8Z"></path><path d="M10.3 10.8h2c.4 0 .7-.2.7-.6s-.3-.6-.7-.6h-2Zm0 3.4h2.3c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-2.3Z"></path></svg>`,
      linktree: `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"></path><path d="m6.5 8.5 5.5-5.5 5.5 5.5"></path><path d="m6.5 13 5.5-5.5 5.5 5.5"></path><path d="m7.5 17 4.5-4.5 4.5 4.5"></path></svg>`,
    };
    return icons[type] || `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.1-2.1a4 4 0 0 0-5.7-5.7l-1.2 1.2"></path><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.1 2.1a4 4 0 0 0 5.7 5.7l1.2-1.2"></path></svg>`;
  }

  function socialLabel(type) {
    return (
      {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        kakao: "Kakao",
        "naver-blog": "Naver Blog",
        "naver-cafe": "Naver Cafe",
        band: "BAND",
        linktree: "Linktree",
      }[type] || "Official"
    );
  }

  function searchIcon(type) {
    const iconClass = "search-icon";
    if (type === "naver-search") {
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4.2l3.6 6.4V5H18v14h-4.2l-3.6-6.4V19H6Z"></path></svg>`;
    }
    return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"></circle><path d="m16 16 4 4"></path></svg>`;
  }

  function renderSearchLink(link) {
    const type = link.type || "search";
    return `
      <a class="search-link search-${escapeText(type)}" href="${escapeText(link.url)}" target="_blank" rel="noreferrer" title="${escapeText(
      link.query || link.label
    )}">
        ${searchIcon(type)}
        <span>${escapeText(link.label)}</span>
        <small>${escapeText(link.query || "")}</small>
      </a>
    `;
  }

  function renderVendorLink(link) {
    const type = link.type || "official";
    const label = socialLabel(type);
    return `
      <a class="social-link social-${escapeText(type)}" href="${escapeText(link.url)}" target="_blank" rel="noreferrer" aria-label="${escapeText(label)}">
        ${socialIcon(type)}
        <span>${escapeText(label)}</span>
      </a>
    `;
  }

  function renderVendor(vendor) {
    const tags = (vendor.tags || [])
      .map((tag) => `<span class="tag-pill">${escapeText(tag)}</span>`)
      .join("");
    const products = (vendor.products || [])
      .map((product) => `<span class="product-pill">${escapeText(product)}</span>`)
      .join("");
    const links = (vendor.links || []).map(renderVendorLink).join("");
    const searchLinks = (vendor.searchLinks || []).map(renderSearchLink).join("");
    const sources = (vendor.sources || [])
      .map((source) => {
        if (source.url) {
          return `<a href="${escapeText(source.url)}" target="_blank" rel="noreferrer">${escapeText(source.title)}</a>`;
        }
        return `<span>${escapeText(source.title)}</span>`;
      })
      .join("");
    const themes = (vendor.reviewThemes || []).map(renderTheme).join("");
    const reviewDetails = (vendor.reviewDetails || []).map(renderReviewDetail).join("");
    const status = vendor.researchStatus || "deep-searched-no-public-match";

    return `
      <article class="vendor-block">
        <h3>${escapeText(vendor.name)}</h3>
        <span class="badge">${escapeText(vendor.category)}</span>
        <span class="status-pill">${escapeText(status)}</span>
        <div class="tag-row">${tags || '<span class="tag-pill">#태그보류</span>'}</div>
        <div class="product-row">${products}</div>
        <p class="summary">${escapeText(vendor.summary)}</p>
        ${links ? `<div class="link-row" aria-label="공식 SNS">${links}</div>` : ""}
        ${searchLinks ? `<div class="search-row" aria-label="검색 링크">${searchLinks}</div>` : ""}
        <div class="source-row">${sources}</div>
        <div class="review-grid">${themes}</div>
        ${
          reviewDetails
            ? `<section class="review-detail-section" aria-label="리뷰 상세"><h4>제품별 리뷰 상세</h4><div class="review-detail-grid">${reviewDetails}</div></section>`
            : ""
        }
      </article>
    `;
  }

  function renderDetails() {
    if (!state.selectedBoothId) {
      renderEmptyDetails();
      return;
    }

    const booth = boothsById.get(state.selectedBoothId);
    if (!booth) {
      renderEmptyDetails();
      return;
    }

    const vendors = vendorsForBooth(booth);
    const body = vendors.length
      ? vendors.map(renderVendor).join("")
      : `
        <div class="empty-state">
          <p>첨부 업체명 표에서 이 부스의 업체명을 확인하지 못했습니다.</p>
          <p>원본 이미지나 추가 자료가 있으면 스냅샷 데이터에 보강할 수 있습니다.</p>
        </div>
      `;

    els.detailsPanel.innerHTML = `
      <div class="detail-title">
        <h2>${escapeText(booth.id)}</h2>
        <span class="badge">${escapeText(booth.section)}구역 · ${escapeText(booth.confidence)}</span>
      </div>
      ${body}
    `;
  }

  function selectBooth(boothId, options = {}) {
    const scrollState = captureScrollState();
    state.selectedBoothId = boothId;
    if (options.source === "list") {
      render({ ...scrollState, inspectorScrollTop: 0, scrollToDetailsTop: true });
      return;
    }
    render(scrollState);
  }

  function render(options = {}) {
    if (options.preserveTagChips) {
      syncTagChipsSelection();
    } else {
      renderTagChips();
    }
    syncTagModeButtons();
    renderStats();
    renderMap();
    renderBoothList();
    renderDetails();
    restoreScrollState(options);
    if (options.scrollToDetailsTop) {
      scrollDetailsPanelToTop();
    }
  }

  function bindMapZoomEvents() {
    els.zoomOutButton.addEventListener("click", () => zoomBy(1 / MAP_ZOOM_STEP));
    els.zoomInButton.addEventListener("click", () => zoomBy(MAP_ZOOM_STEP));
    els.zoomResetButton.addEventListener("click", resetMapZoom);

    els.mapScroll.addEventListener(
      "wheel",
      (event) => {
        if (!event.ctrlKey && !event.metaKey) {
          return;
        }
        event.preventDefault();
        zoomBy(event.deltaY < 0 ? MAP_ZOOM_STEP : 1 / MAP_ZOOM_STEP, {
          clientX: event.clientX,
          clientY: event.clientY,
        });
      },
      { passive: false }
    );

    els.mapScroll.addEventListener("pointerdown", handleMapPointerDown);
    els.mapScroll.addEventListener("pointermove", handleMapPointerMove);
    els.mapScroll.addEventListener("pointerup", handleMapPointerEnd);
    els.mapScroll.addEventListener("pointercancel", handleMapPointerEnd);
    els.mapScroll.addEventListener("click", handleMapClick);
    els.mapScroll.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") {
        handleMapPointerEnd(event);
      }
    });

    const scheduleViewportSync = () => {
      if (mapResizeFrame) {
        cancelAnimationFrame(mapResizeFrame);
      }
      mapResizeFrame = requestAnimationFrame(() => {
        mapResizeFrame = 0;
        syncMapZoomForViewport();
      });
    };
    window.addEventListener("resize", scheduleViewportSync);
    if ("ResizeObserver" in window) {
      mapResizeObserver = new ResizeObserver(scheduleViewportSync);
      mapResizeObserver.observe(els.mapScroll);
    }
  }

  function bindEvents() {
    bindMapZoomEvents();

    els.searchInput.addEventListener("input", (event) => {
      const scrollState = captureScrollState();
      state.query = event.target.value;
      if (state.selectedBoothId && !boothMatches(boothsById.get(state.selectedBoothId))) {
        state.selectedBoothId = null;
      }
      render(scrollState);
    });

    els.sectionFilter.addEventListener("change", (event) => {
      const scrollState = captureScrollState();
      state.section = event.target.value;
      if (state.selectedBoothId && !boothMatches(boothsById.get(state.selectedBoothId))) {
        state.selectedBoothId = null;
      }
      render(scrollState);
    });

    els.clearButton.addEventListener("click", () => {
      state.query = "";
      state.section = "all";
      state.selectedBoothId = null;
      state.selectedTags.clear();
      state.tagMode = "or";
      state.boothSort = "booth";
      els.searchInput.value = "";
      els.sectionFilter.value = "all";
      els.boothSort.value = "booth";
      render();
    });

    els.boothSort.addEventListener("change", (event) => {
      state.boothSort = event.target.value === "vendor" ? "vendor" : "booth";
      render({ ...captureScrollState(), boothListScrollTop: 0 });
    });

    els.gridToggle.addEventListener("change", (event) => {
      const scrollState = captureScrollState();
      state.showGrid = event.target.checked;
      render(scrollState);
    });

    els.tagModeOr.addEventListener("click", () => {
      state.tagMode = "or";
      render({ ...captureScrollState(), preserveTagChips: true });
    });

    els.tagModeAnd.addEventListener("click", () => {
      state.tagMode = "and";
      render({ ...captureScrollState(), preserveTagChips: true });
    });
  }

  function init() {
    els.eventDate.textContent = [catalog.event.dateRange, catalog.event.hours].filter(Boolean).join(" · ");
    els.eventVenue.textContent = catalog.event.venue;
    els.eventSource.href = catalog.event.sourceUrl;
    renderSectionOptions();
    bindEvents();
    render();
    applyMapZoom();
  }

  init();
})();
