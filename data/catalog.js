// SPDX-License-Identifier: AGPL-3.0-only
(function () {
  "use strict";

  const EVENT_SOURCE =
    "https://www.coex.co.kr/exhibitions/%EC%A0%9C23%ED%9A%8C-%EA%B5%AD%EC%A0%9C%EC%B0%A8%EB%AC%B8%ED%99%94%EB%8C%80%EC%A0%84/";
  const SOFTWARE_LICENSE = "AGPL-3.0-only";

  const VENDOR_ROWS = `
A7|(사)세계기독교차문화협회/ 일양차문화연구원 회원 티플라워(다화) 전시회
A48|(사)한국 싱잉볼 협회
A48|(주)젠테라피 네츄럴 힐링센터
H21|(주)차모아
F32|HaDa design(하다디자인)
F3|Tea진공밀폐용기 에스락
H11|도우공방 (덕화코리아)
G18|北京妙香缘贸易有限公司
G17|宜兴永盛陶艺茗壶堂
H16|宜兴知了文化创意有限公司
G21|尹茶人-YIN TEA
H19|森粹陶瓷公司
H13|茗扬天下 x 후코퍼레이션 x 복경도사
F14|가람도예
B24|가미공방
A17|가현아트
E4|경기한방꽃차협동조합
F2|경위복차 (가인갤러리)
A24|경주 남촌도예
H26|계절사이로(이오순 금침명인)
F15|고도산방
H25|고전문화
D2|곡천다원
D25|공림요
A9|공부차파크 복합치유공간 (과천 청계산점)
D12|관아수제차
F5|교문공방
A10|국제통상
A28|귀단요 성탄송운
G5|글림피스
D15|금향다원
E23|긍정공방
D33|기린공방
D29|김동인
E21|김무진
E2|김천방짜유기 명인 이운형
E15|김해예인요
F17|김해요
A40|꼬매
H23|나은크래프트
C1|나주
F9|날빛
C14|노전요
D22|녹주요
D13|농업회사법인 지리산 상선암차
C18|누보도예
G10|다견원
F18|다경요
E16|다솜공방
G25|다심헌
G7|다향연
B11|다채
B26|대광도요
A36|대림목공예
G1|대익코리아
E1|대통령 표창 수상. 꽃차 하늘바라기
E25|더세드
B27|도농도예
E28|도동요
E24|도예명장2023-01호 영산요
D23|도유가
C17|도자기마을(빛살)
D11|도재명차
B25|도정요
A16|동국대학교 불교대학원 차문화콘텐츠학과
G19|동심명차
A20|동원공방
G15|동정보이차 노반차품
F28|드내뜰(이종주의 도자기)
E7|따티 (뷰닉스테크)
B23|뚠델로공방
F16|라세라미스타
C27|라키모
G12|랑카티스(스리랑카 홍차)
C6|로전
A26|매원초가
D7|명성다원
A12|명인신광수차_ 무드를 즐기는차(moocha)
F25|모동도예
F31|모을 황선회도방
A13|모후실에서만난차
B21|몽탄갤러리
F4|묘차
B20|무결
E13|무무요
D14|무애(MUAE TEA)
F11|무유
A1|무유다원
A11|무유장작가마 살래요
C26|문경 경북요
A15|문경칠봉산농원
A23|문재필 옻칠갤러리
D20|민토(최민록)
H9|밀밀홍
G24|바이에드가
F24|박달요
H27|반길고리
E9|백산도예 연구소
E27|백암요
A14|백자일상
C12|백학제다
C21|보니다
G26|보림원목 공방
B7|보성(부광녹차)
B9|보성 영천다원
B4|보성 유기농 운해다원
B1|보성군 홍보관
B12|보성녹차 선다원
B2|보성제다
A41|보성천연염색협동조합 (자연담은 하늘수)
H1|보이차전문점 명가원
H6|복향명차
C29|봉정요
E20|부산광역시 공예협동조합 다솔도예
E18|부산광역시 공예협동조합 토산요
C13|붓당골제다
C25|삐딱한 도자기 황제요
G14|사계다향
D17|산도방
C19|산이리
D6|삼신차 (발효차 전문다원)
F12|삼정공방
H7|상명요
G22|상해구산지진차문화유한공사
H10|석가명차 오운산고차
H5|선묘당 (善妙堂) CHINA TEA
D18|설도예
B13|섬진다원
D24|소랑요
C24|소산도예
B10|소아다원
F26|소월백자
E29|송하요
F13|송화도예
E8|수니공방
E30|수도예
C11|수제차전수관
H24|수향(대광필공예협동조합)
A18|수천대학교 (사)고려천태국제선차 연구보존회
E6|스튜디오 세온
E19|슬우재
A44|승설재・무이성
F29|심곡요
G23|아람드리
H12|아망시 프리미엄 티라운지
A33|안동착한농장 프로폴리스 茶
D26|알천도예
A30|연담
F21|언양도예
E5|엄기순 금속전
E10|여송도예
G27|여원
F7|연세라믹
C2|연우제다
A27|연으로 만드는 힐링푸드 두레연 구품당
F20|연화도방
D31|영남요
E17|예인요
H4|예평
C20|오름오르다
A46|오차연각
A34|옻칠채
A35|와락공방
A2|완도 청해진다원
D21|우곡요
F8|우기세라믹
A32|우기원
E11|우림도예
C9|웃차
A49|원유전통
B5|유기농 원당제다원
E3|이아뜰리에
F23|이치헌도예연구소
D1|일구다&요산당
H17|일상차(壹叁荼) 武夷岩茶
F22|일의섬도예작업장
A37|자연으로 옹크씨
F1|자연을담다
A19|장흥청태전(장흥다원)
G4|재단법인 하동차&바이오진흥원
C8|자드리 TEA SHOP
A31|정가로이
G3|정산당
C23|정요
F19|정호요
A5|제주차농 JEJU CHANONG
C22|조선백자
D9|조태연가 죽로차
H20|주식회사 인센스월드
A38|주앤안 (이든갤러리)
D5|죽로은침
B8|죽림다원
H8|죽평
G9|지유명차
F27|진곡요
B6|징광잎차
A47|차문화협회
D16|차살림
G16|차세상(茶世上) / 유산차방(游山茶訪) 한국총판
H2|차우림, 오래된 미래
A6|차인연합회
C10|찻잎마술/소암 茶
C28|채담요
G6|천년보이차
B3|천보다원
A42|천연염색 미주사랑
F10|청기백기
E22|청담요
H22|청도 천연염색연구회 쪽빛나라
A39|최도천연염색연구회 감물드리
D30|청림도요
C5|청석골감로다원
E14|정목요
B19|청자 더 공유 / theOu
C15|청학도방
H14|취죽진여실
F30|침향나무
G13|틴지오브소울
G20|포담 티하우스
D32|포암요
A43|풍과빛 (청도군 천연염색 연구회)
H18|(주)실크로드티
D8|하동 휴심선차
C4|하동아낙(LADY HADONG)
A4|한국제다
A21|한국토기
B14|한국티산업경영연구원 - 차그리다
D10|한밭제다 차공간
B28|한세은 도예공방
H3|한차원
D19|해너울
A22|헬스베버리지
D27|현암요
A3|현암제다
D4|혜림茶. 혜림농원
E31|화경도요
C16|황매산다원 허굴산방
D3|황아차 용강 녹차
B18|황우요
E12|효원도예
B16|효월
E26|효향요
H15|휴다인
A8|위계차
A25|트임&김진욱도예원
A29|토라
A45|투다헌
B15|티팔레트
B17|토정가 (이조요) since1940
B22|욱산도헌
C3|차휴
G2|티하우스 나니
G11|향적당
`;

  const ORIGINAL_OCR_NAMES = {
    A1: "무우다원",
    A17: "가히아트",
    B15: "티 플래트",
    A21: "하녹토기",
    A11: "무우작가마 살래요",
    A26: "매원조가",
    A44: "송설재・무이성",
    B4: "보성 운기농원해다원",
    B6: "징광요차",
    G25: "다심현.AFTR",
    B10: "소이다원",
    B17: "도정차 (이조요) since1940",
    B22: "옥산도협",
    C3: "티휴",
    E20: "부산광역시 공예협동조합 다슬도예",
    E26: "후향요",
    E29: "송향요",
    F9: "달빛",
    C19: "사이리",
    C21: "보니더",
    H19: "茶樽陶瓷公司",
    F20: "영화도방",
    B3: "천보단원",
    C10: "찻잎마술/스암 茶",
    C13: "茶담골제다",
    C11: "수제차천수관",
    C18: "두보도예",
    C25: "삐딱한 도자기 황재요",
    C8: "차드리 TEA SHOP",
    C27: "라기모",
    D2: "녹주오",
    D6: "삼신차 (박홍차 전문다원)",
    D21: "우국요",
    D22: "녹주오",
    E11: "정목요",
    E13: "우림도예",
    F2: "경워복차 (가인갤러리)",
    F28: "도내뜰(이종주의 도자기)",
    F31: "모율 황선희도방",
    F29: "식곡요",
    F5: "교무공방",
    E5: "염기순 금속전",
    A27: "연으로 만드는 힐링푸드 두레연구당",
    A37: "자연으로 홍고씨",
    G7: "다연채",
    G5: "클림피스",
    G10: "다건원",
    G13: "틴지오브스웰",
    G15: "동정보이차 노바차포",
    H7: "상명",
    H1: "부산전문점 명가원",
    H5: "서모당 (壹妙堂) CHINA TEA",
    H10: "석가명차 오운선고차",
    H12: "야망시 프리미엄 티라운지",
    H17: "일상차(壹叁茶) 武夷岩茶",
    H18: "하나실크로드티",
  };

  const EXTERNAL_SOURCES = {
    jukro: {
      title: "조태연가 죽로차 공식 쇼핑몰",
      type: "official-store",
      url: "https://jukro.co.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jejuChanong: {
      title: "제주차농 공개 Linktree",
      type: "public-profile",
      url: "https://linktr.ee/jeju.chanong",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hankookTeaProduct: {
      title: "한국제다 녹차 상품 공개 판매 페이지",
      type: "public-product-page",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000017130206",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hankookTeaOfficial: {
      title: "한국제다 공식 홈페이지",
      type: "official-site",
      url: "http://www.hankooktea.co.kr",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hankookTeaSsgPowderReview: {
      title: "SSG.COM: 한국제다 가루녹차 100g 구매평",
      type: "public-store-review",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000017130206",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hankookTeaOfficialUjeon: {
      title: "한국제다 공식몰: 우전감로",
      type: "official-product-page",
      url: "https://hktmall.co.kr/product/%EC%9A%B0%EC%A0%84%EA%B0%90%EB%A1%9C%E9%9B%A8%E5%89%8D%E7%94%98%E9%9C%B2/32/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hankookTeaDcMatchaCompare: {
      title: "디시인사이드 차·음료 갤러리: 국산 말차 비교와 한국제다 감농 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=405168",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hankookTeaDcGamnon: {
      title: "디시인사이드 차·음료 갤러리: 한국제다 감농가루차 실사용 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=427049",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jukroUjeonOfficialReview: {
      title: "조태연가 죽로차 공식몰: 우전 80g 구매평",
      type: "official-store-review",
      url: "http://jukro.co.kr/shop/shopdetail.html?branduid=324113&xcode=001&mcode=001&scode=001&type=X&sort=order&current_category=001001&search=&GfDT=ZmZ3UQ%3D%3D",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jukroEnuriSejakReview: {
      title: "에누리: 조태연가 죽로차 세작 40g 리뷰",
      type: "public-store-review",
      url: "https://www.enuri.com/detail.jsp?modelno=10776952",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jukroInstagramHongchaMatcha: {
      title: "조태연가 죽로차 Instagram: 순수 홍차로 만든 말차",
      type: "public-sns-post",
      url: "https://www.instagram.com/chotaeyeon_ga/p/DTffOU2EQau/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jejuChanongFarmersLinktree: {
      title: "제주차농 공개 Linktree: 제주차농/차암숲",
      type: "public-profile",
      url: "https://linktr.ee/jeju_farmers_tea",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jejuChanongFarmersInstagram: {
      title: "제주차농 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/jeju_farmers_tea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jejuChanongTeaTourInstagram: {
      title: "제주차농 Instagram: 차암숲 티 투어",
      type: "public-sns-post",
      url: "https://www.instagram.com/jeju.chanong/p/DXGIYtWiZxz/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jejuChanongMooSangPost: {
      title: "Instagram 공개 언급: 제주차농 새순녹차/진피홍차",
      type: "public-sns-post",
      url: "https://www.instagram.com/p/DYKG3JFGIEc/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hadongAnakInstagram: {
      title: "하동아낙 Lady Hadong 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/lady_hadong/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hadongAnakLiquidProust: {
      title: "Liquid Proust: Lady Hadong 청귤·한국 홍차·중국 밀크우롱 상품/리뷰",
      type: "public-store-review",
      url: "https://www.liquidproust.com/listing/1849259683/2024-korean-black-chinese-milk-oolong",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ootchaBrownthingsWebzine: {
      title: "Brown Things 웹진: 웃차 마이클잭살/한국 차의 신세계",
      type: "public-webzine-review",
      url: "https://book.brownthings.kr/890",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ootchaInstagram: {
      title: "웃차 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/woot.cha/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ootchaInstagramShipping: {
      title: "웃차 Instagram: 오프라인 팝업 후 주문/검수/발송 공지",
      type: "public-sns-post",
      url: "https://www.instagram.com/woot.cha/p/DYZsIr7yYeA/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiLinktree: {
      title: "대익차 공식 Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/taetea_time",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiDaodaoLinktree: {
      title: "대익다도원 공식 Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/dayichadaoyuan",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYi7542Official: {
      title: "대익코리아 공식몰: 7542(2501) 357g",
      type: "official-product-page",
      url: "https://www.taetea.co.kr/shop/shopdetail.html?branduid=12304764&xcode=005&mcode=017&scode=&type=X&sort=regdate&cur_code=005&search=&GfDT=bm5%2BW1w%3D",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiDcCoin: {
      title: "디시인사이드 차·음료 갤러리: 대익 7542/7572 입문 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=318365",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiDc7542Compare: {
      title: "디시인사이드 차·음료 갤러리: 대익 7542 비교 평가",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=291705",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiTistoryTeacup: {
      title: "티스토리: 대익 보이차 찻잔 구매 후기",
      type: "public-blog-review",
      url: "https://todays-life.tistory.com/495",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chunnyunXiangzhulinReview: {
      title: "티스토리: 2010 천년보이차 향죽림 고수 첫물차 시음기",
      type: "public-blog-review",
      url: "https://kahn777.tistory.com/16117077",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chunnyunBingdoReview: {
      title: "티스토리: 천년보이차 2009 빙도 비교 시음",
      type: "public-blog-review",
      url: "https://kahn777.tistory.com/16117018",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chunnyunBexpoDirectory: {
      title: "대한민국불교문화엑스포 디렉토리: 천년보이차",
      type: "public-exhibitor-directory",
      url: "https://www.bexpodg.kr/files/2024_directory.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    guteaCoupangMuryangsan: {
      title: "쿠팡: 지유명차 무량산 보이차 티백 생차",
      type: "public-store-review",
      url: "https://www.coupang.com/vp/products/8769383555",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    guteaCoupangSamnyeon: {
      title: "쿠팡: 지유명차 삼년호합 보이차 티백 숙차",
      type: "public-store-review",
      url: "https://www.coupang.com/vp/products/8769417867",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    guteaTablingHwagok: {
      title: "테이블링: 지유명차 화곡점 리뷰",
      type: "public-review-page",
      url: "https://www.tabling.co.kr/place/677ccfe266de5f0698850d8c",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    guteaTablingSuwon: {
      title: "테이블링: 지유명차 수원영통점 리뷰",
      type: "public-review-page",
      url: "https://www.tabling.co.kr/place/677ccbcf66de5f06987deb8b",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    guteaTistoryVisit: {
      title: "티스토리: 차예사가 선보이는 보이차, 지유명차 방문기",
      type: "public-blog-review",
      url: "https://lara.tistory.com/entry/%EC%B0%A8%EC%98%88%EC%82%AC%EA%B0%80-%EC%84%A0%EB%B3%B4%EC%9D%B4%EB%8A%94-%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EC%A7%80%EC%9C%A0%EB%AA%85%EC%B0%A8",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seokgaOfficial: {
      title: "석가명차 오운산 본사 공식 사이트",
      type: "official-site",
      url: "https://www.seokga.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seokgaChawangsuOfficial: {
      title: "석가명차 서울점: 오운산 차왕수 10종 200g",
      type: "official-product-page",
      url: "https://www.seokgaseoul.com/product/%EC%98%A4%EC%9A%B4%EC%82%B0-%EC%B0%A8%EC%99%95%EC%88%98-10%EC%A2%85-200g/483/display/1/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seokgaStorageTistory: {
      title: "석우연담: 석가명차 오운산 보이차 저장고 방문 기록",
      type: "public-blog-review",
      url: "https://seoku.tistory.com/1534",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seokgaDcBlind: {
      title: "디시인사이드 차·음료 갤러리: 보이차 블라인드 테스트와 오운산 평가",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=291092",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chwijukBexpoDirectory: {
      title: "대한민국불교문화엑스포 디렉토리: 취죽진여실",
      type: "public-exhibitor-directory",
      url: "https://www.bexpodg.kr/files/2024_directory.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chwijukDcDomesticTop: {
      title: "디시인사이드 차·음료 갤러리: 중국차 및 다기 국내 강점 업체 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=425474",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chwijukBizKorea: {
      title: "BizKorea: 취죽진여실 업체 정보",
      type: "public-company-page",
      url: "https://www.bizkorea.org/company/view.asp?SEQ=1570428",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chwijukOpengo: {
      title: "Opengo: 취죽진여실 식품등 수입판매업 정보",
      type: "public-company-page",
      url: "https://opengo.kr/5601fae30e887edf2ccd2ebc",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seonmyodangDcAnhua: {
      title: "디시인사이드 차·음료 갤러리: 선묘당 안화흑차 가격/맛 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=436765&page=1",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seonmyodangDcYunchain: {
      title: "디시인사이드 차·음료 갤러리: 선묘당 윤차인 구매처 문의",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=434881&page=1",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seonmyodangDcExpo: {
      title: "디시인사이드 차·음료 갤러리: 선묘당 아포차/기문홍차/백차 박람회 후기",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=433326",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yoshanLinktree: {
      title: "YOSHAN TEA Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/yoshantea",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yoshanInstagram: {
      title: "YOSHAN TEA Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/yoshan_tea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yoshanRedditAgedOolong: {
      title: "Reddit r/tea: YOSHAN TEA 808 Aged Taiwan Oolong 리뷰",
      type: "public-community-review",
      url: "https://www.reddit.com/r/tea/comments/1qj9dni/yoshan_tea_808_aged_taiwan_oolong320g/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemDcJasmineReview: {
      title: "디시인사이드 차·음료 갤러리: 포담 자스민용주 후기",
      type: "public-community-review",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=441281",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulInstagram: {
      title: "틴지오브소울 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/tinge.of.soul/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulReviewPage: {
      title: "틴지오브소울 공식몰 Review",
      type: "official-store-review",
      url: "https://www.tingeofsoul.co.kr/review",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulWadizTeaAtti: {
      title: "와디즈: 틴지오브소울 TEA ATTI",
      type: "public-product-page",
      url: "https://www.wadiz.kr/funding/224526",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulKurlyOolong: {
      title: "Kurly: 틴지오브소울 우롱차 티백 4종",
      type: "public-store-page",
      url: "https://www.kurly.com/goods/1002037122",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulCoupangJinxuan: {
      title: "쿠팡: 틴지오브소울 금훤 티백",
      type: "public-store-page",
      url: "https://www.coupang.com/vp/products/8132341786",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    lankaSabaragamuwa: {
      title: "랑카티스 공식몰: 사바라 가무와 홍차 25g",
      type: "official-product-page",
      url: "https://lankateas.imweb.me/shop_view/183",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    lankaReviewPage: {
      title: "랑카티스 공식몰 Review",
      type: "official-store-review",
      url: "https://lankateas.imweb.me/review",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    teahouseNaniInstagram2026: {
      title: "티하우스 나니 Instagram: 2026 국제차문화대전 G2 부스 안내",
      type: "public-sns-post",
      url: "https://www.instagram.com/teahousenani/p/DYyalYZJiYh/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    boseongJedaProduct: {
      title: "보성제다 유기농 녹차 상품 공개 판매 페이지",
      type: "public-product-page",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000066037369",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    boseongJedaCompany: {
      title: "보성제다 기업/품목 공개 정보",
      type: "public-company-page",
      url: "https://cookiedeal.io/company-search/3538102935/%EC%98%81%EB%86%8D%EC%A1%B0%ED%95%A9%EB%B2%95%EC%9D%B8%20%EB%B3%B4%EC%84%B1%EC%A0%9C%EB%8B%A4",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    boseongJedaOfficial: {
      title: "보성제다 공식몰",
      type: "official-store",
      url: "https://www.bsjeda.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daYiNews: {
      title: "대익보이차/타이티 공개 기사",
      type: "public-news",
      url: "https://www.sportschosun.com/life/2017-03-13/201703140100118620008242",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gutea: {
      title: "지유명차 가맹본부 공개 페이지",
      type: "official-brand-page",
      url: "https://www.guteafc.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    guteaNews: {
      title: "지유명차 보이차 전문매장 공개 기사",
      type: "public-news",
      url: "https://www.segye.com/newsView/20100816003006",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    lankaProduct: {
      title: "랑카티스 스리랑카 홍차 상품 페이지",
      type: "official-store",
      url: "https://lankateas.imweb.me/shop_view/183",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    lankaFair: {
      title: "카페&베이커리페어 참가업체 공개 리스트",
      type: "public-exhibitor-list",
      url: "https://www.cafenbakeryfair.com/shop_contents/myboard_list.htm?category_idx=176056&myboard_code=st_lecture",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    myeongseongOfficial: {
      title: "명성다원 공식 상품 페이지",
      type: "official-store",
      url: "https://m.msgreentea.kr/product/list.html?cate_no=24",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    myeongseongTravel: {
      title: "명성다원 공개 관광/판매품목 정보",
      type: "public-place-page",
      url: "https://www.koreatriptips.com/shopping/1343601.html",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongseokTravel: {
      title: "청석골감로다원 공개 관광/차밭 정보",
      type: "public-place-page",
      url: "https://www.koreatriptips.com/accommodation/3102207.html",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongseokBexpo: {
      title: "청석골감로다원 공개 출품품목 정보",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=299",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chunnyunArticle: {
      title: "천년보이차 공개 인터뷰/소개 글",
      type: "public-article",
      url: "https://kahn777.tistory.com/16117160",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chawoorimBook: {
      title: "차우림 운영자/보이차 저서 공개 도서 정보",
      type: "public-book-page",
      url: "https://www.yes24.com/product/goods/125577052",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chawoorimBlog: {
      title: "차우림 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "http://blog.naver.com/cosmono3",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chawoorimYangju: {
      title: "양주시 농업기술센터 공개 소개: 차우림",
      type: "public-local-profile",
      url: "https://yjcc.yangju.go.kr/atc/selectBbsNttView.do?bbsNo=208&key=1726&nttNo=88169",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hanchawon: {
      title: "한차원 공개 지역업체 정보",
      type: "public-local-profile",
      url: "https://www.daangn.com/kr/local-profile/%ED%95%9C%EC%B0%A8%EC%9B%90-2020314/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seokgaEcoby: {
      title: "석가명차/오운산고차 공개 상품 정보",
      type: "public-product-page",
      url: "https://m.ecoby.kr/goods/goods_view.php?goodsNo=336",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seokgaSeoulOfficial: {
      title: "석가명차 서울점 공식몰",
      type: "official-store",
      url: "https://seokgaseoul.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    teaSeoulReport: {
      title: "서울카페쇼 공개 참가업체 리포트",
      type: "public-exhibitor-report",
      url: "https://kor.cafeshow.com/kor/brochure/CafeShow2023_report.pdf",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yoshanOfficial: {
      title: "YOSHAN TEA 공식 사이트: 대만 동정우롱/대만 우롱차 소개",
      type: "official-site",
      url: "https://www.yoshantea.com/pc/?lang=en",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yoshanClassicProducts: {
      title: "YOSHAN TEA 공식 상품군: 대만차 클래식 시리즈",
      type: "official-product-page",
      url: "https://www.yoshantea.com/pc/product.php?lang=en&s=2",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yoshanTaiwanOolongGuide: {
      title: "YOSHAN TEA 공식 글: 대만 우롱차 종류",
      type: "official-article",
      url: "https://www.yoshantea.com/pc/news.php?id=23042164424ca7269ac&lang=en",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverDaYiSpringCafe: {
      title: "네이버 카페 차닉골: 대익 봄 차회 ‘상춘남객’ 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/mbuna/148111",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverDaYiVicheDamCafe: {
      title: "네이버 카페 빛명상: 대익 공식 대리점 출처 보이차/자사호 수업 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/ucsviit/29313",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverDaYiChaulimCafe: {
      title: "네이버 카페 차울림: 대익코리아 14주년 관련 보이차 클래스 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/chaulim/57983",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverDaYi7542Cafe: {
      title: "네이버 카페 차닉골: 대익 7542 비교/시음 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/mbuna/146972",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverGuteaDunsanMomCafe: {
      title: "네이버 카페 대전 둔산맘: 문지동 지유명차 보이차 티타임 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/ksn82599/258100",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverGuteaDunsanMomCafe2: {
      title: "네이버 카페 대전 둔산맘: 지유명차 브런치/티타임 언급",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/ksn82599/262255",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverGuteaDieselCafe: {
      title: "네이버 카페 디젤매니아: 문지동 지유명차 추천 댓글",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/dieselmania/45268479",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChunnyunDaeseolsanCafe: {
      title: "네이버 카페 차닉골: 천년보이차 09년 임창 대설산 야생차 춘첨",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/mbuna/147173",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChunnyunAuctionCafe: {
      title: "네이버 카페 차닉골: 천년보이차 고수단주차 기부경매 설명",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/mbuna/137930",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverLankaCompareCafe: {
      title: "네이버 카페 오렌지페코: 랑카티스 실론티 7종 비교시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/537745",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverLankaUvaCafe: {
      title: "네이버 카페 오렌지페코: 랑카티스 우바 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/555020",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverSeokga2016Cafe: {
      title: "네이버 카페 차닉골: 오운산 석가명차 2016기념병 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/mbuna/139829",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverSeokgaGosuCafe: {
      title: "네이버 카페 다성보이차: 오운산 석가명차 고수병배 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/dasungtn/4117",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverSeokgaHongchaCafe: {
      title: "네이버 카페 오렌지페코: 오운산 봉경대수홍차 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/547941",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverSeokgaWhiteTeaCafe: {
      title: "네이버 카페 오리엔티: 오운산 석가백차 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/orienteacafe/525",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverDongjeongBoichaCafe: {
      title: "네이버 카페 보이차는 틴포: 노반차품 동정보이차 시음 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/teainfo/5510",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverCheongTaeJeonShareCafe: {
      title: "네이버 카페 차가마: 장흥 청태전 나눔/음용 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/tearich88888888/156316",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverCheongTaeJeonTearoomCafe: {
      title: "네이버 카페 차랑방: 장흥 청태전 찻자리 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/orienteacafe/6653",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverHyelimFestivalCafe: {
      title: "네이버 카페 차랑방: 하동야생차문화축제 혜림농원 차 시음 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/orienteacafe/9366",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChwijukDancongCafe: {
      title: "네이버 카페 차울림: 취죽진여실 봉황단총 야래향 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/chaulim/41834",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChwijukShareCafe: {
      title: "네이버 카페 보이차는 내친구: 취죽진여실 나눔 차 도착",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/munjakag/1704",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChwijukNobanjangCafe: {
      title: "네이버 카페 차닉골: 취죽진여실 15 병배 노반장",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/mbuna/138497",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChwijukGosanCafe: {
      title: "네이버 카페 차울림: 취죽진여실 고산유기두춘청병",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/chaulim/45833",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverChwijukSongchaCafe: {
      title: "네이버 카페 오리엔티: 취죽진여실 고수 송차왕",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/orienteacafe/3784",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mohusilOfficial: {
      title: "모후실에서 만난 차 공식 페이지",
      type: "official-site",
      url: "https://tea3557.co.kr/board/%EB%AA%A8%ED%9B%84%EC%8B%A4%EC%97%90%EC%84%9C-%EB%A7%8C%EB%82%9C-%EC%B0%A8/8/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mohusilDanawa: {
      title: "다나와: 모후실에서만난차 국화차 상품 정보",
      type: "public-product-page",
      url: "https://prod.danawa.com/info/?pcode=32608217",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naverJeongsandangCafe: {
      title: "네이버 카페 오렌지페코: 정산당 무이노총 정산소종 시음",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/533563",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jeongsandangDalinOfficial: {
      title: "LAPSANGSTORE: 정산당 서울 대림 차랑 입점/매장 안내",
      type: "official-site",
      url: "https://lapsangstore.com/pages/dalin",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    naverDongsimCafe: {
      title: "네이버 카페 차닉골: 동심명차 다하 구입/전시 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/mbuna/139342",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    podemPolle: {
      title: "뽈레: 포담 티하우스 대만차 전문 티룸 리뷰",
      type: "public-review-page",
      url: "https://polle.com/place/3wZFIX/%ED%8F%AC%EB%8B%B4",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chunghaejinNamdo: {
      title: "남도일보: 완도 청해진다원 차밭/우롱차 소개",
      type: "public-news",
      url: "https://www.namdonews.com/news/articleView.html?idxno=477767",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bugwangBexpo: {
      title: "서울국제불교박람회: 보성 부광녹차 출품 제품",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=118",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sundawonOfficial: {
      title: "보성녹차 선다원 공식몰",
      type: "official-store",
      url: "https://sundawon.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    worldChristianTeaMcst: {
      title: "문화체육관광부 법인 현황: 세계기독교차문화협회",
      type: "public-organization-page",
      url: "https://www.mcst.go.kr/kor/s_data/corpNaru/corpView.jsp?pSeq=103",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    worldChristianTeaKmib: {
      title: "국민일보: 세계기독교차문화협회 차문화 선교 소개",
      type: "public-news",
      url: "https://www.kmib.co.kr/article/view.asp?arcid=0924339762",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ilyangTeaBook: {
      title: "YES24: 일양차문화연구원 관련 차문화 도서 정보",
      type: "public-book-page",
      url: "https://www.yes24.com/Product/Goods/893772",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    koreanSingingBowlNews: {
      title: "네이트 뉴스: 한국싱잉볼협회 소개 기사",
      type: "public-news",
      url: "https://news.nate.com/view/20240102n20942",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    koreanSingingBowlEdaily: {
      title: "이데일리: 한국싱잉볼협회 프로그램/체험 기사",
      type: "public-news",
      url: "https://www.edaily.co.kr/News/Read?newsId=02574806642002664&mediaCodeNo=257",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gentherapyNews: {
      title: "이데일리: 젠테라피 네츄럴 힐링센터 사운드배스 기사",
      type: "public-news",
      url: "https://www.edaily.co.kr/News/Read?newsId=02574806642002664&mediaCodeNo=257",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gentherapyNaverBlog: {
      title: "네이버 블로그: 젠테라피 싱잉볼/명상 클래스 소개",
      type: "public-blog",
      url: "https://blog.naver.com/wlstjsdl2/223396505130",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baekhakBexpo: {
      title: "서울국제불교박람회: 백학제다 만송포 소개",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=313",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baekhakPressianAward: {
      title: "프레시안: 백학제다 우리차품평대회 대상 및 섬진다원 수상 기사",
      type: "public-news",
      url: "https://www.pressian.com/pages/articles/2020091719132037991",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baekhakPolle: {
      title: "뽈레: 백학제다 전통찻집 리뷰",
      type: "public-review-page",
      url: "https://polle.com/place/3dLWAr/%EB%B0%B1%ED%95%99%EC%A0%9C%EB%8B%A4",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    eslockOhouse: {
      title: "오늘의집: 에스락 진공 밀폐용기 상품 정보",
      type: "public-product-page",
      url: "https://ohou.se/productions/2305487/selling",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    eslockSsg: {
      title: "SSG: 에스락 진공 밀폐용기 상품 정보",
      type: "public-product-page",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000569261080",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nokjuyoNews1: {
      title: "뉴스1: 김해시공예품대전 녹주요 대상 수상 기사",
      type: "public-news",
      url: "https://www.news1.kr/local/busan-gyeongnam/4304717",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nokjuyoIdus: {
      title: "아이디어스: 녹주요 작가/작품 판매 페이지",
      type: "public-creator-shop",
      url: "https://www.idus.com/v2/artist/dd275063-e365-4552-8cff-baa9b5ca7ee2/product",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nouveauBizKorea: {
      title: "비즈한국: 누보도예 달항아리 소개 기사",
      type: "public-news",
      url: "https://www.bizhankook.com/bk/article/28574",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nouveauBexpo: {
      title: "서울국제불교박람회: 누보도예 제품 소개",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=337",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nouveauTeaCulture: {
      title: "차와문화: 누보도예 관련 작가/차문화 소개",
      type: "public-magazine-page",
      url: "https://www.teaculture.co.kr/people/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6NDt9&bmode=view&idx=12254215&t=board",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gyeonggiFlowerCafeShow: {
      title: "서울카페쇼 공개 참가/전시 정보: 경기한방꽃차협동조합",
      type: "public-exhibitor-page",
      url: "https://kor.cafeshow.com/kor/visitor/event-detail.asp?idx=901",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gyeonggiFlowerSuwon: {
      title: "수원문화재단 공개 아카이브: 경기한방꽃차협동조합",
      type: "public-archive-page",
      url: "https://www.swcf.or.kr/?p=113&page=1&viewMode=view&idx=25886",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gyeonggiFlowerInstagram: {
      title: "인스타그램 공개 프로필: 경기한방꽃차협동조합",
      type: "public-sns-profile",
      url: "https://www.instagram.com/ksh_flowertea/?hl=ko",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seasonSairoTextile: {
      title: "한국섬유신문: 이오순 금침 명인/계절사이로 소개",
      type: "public-news",
      url: "https://www.textile-news.co.kr/news/article.html?no=8276",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seasonSairoBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 계절사이로",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/home/info?cid=21",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seasonSairoOfficial: {
      title: "계절사이로 공식 홈페이지",
      type: "official-site",
      url: "https://seasoncock.com",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seasonSairoBlog: {
      title: "계절사이로 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/seasoncock",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    moochaFairContest: {
      title: "카페&베이커리페어 공개 전시품 정보: 무드를 즐기는 차, 무차",
      type: "public-exhibitor-page",
      url: "https://www.cafenbakeryfair.com/event/contest07.php?admin_mode=read&make=&no=102&page=4&search=",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    moochaSmartStore: {
      title: "명인신광수차/moocha 공식 스마트스토어",
      type: "official-store",
      url: "https://smartstore.naver.com/jagsul",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    moochaNaverBlog: {
      title: "네이버 블로그 공개 글: 무드를 즐기는 차, 무차 소개",
      type: "public-blog",
      url: "https://blog.naver.com/choyonggu/222855178813",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeonwooOfficialProduct: {
      title: "연우제다 공식몰 공개 상품 정보: 발효차",
      type: "official-store",
      url: "https://tea7606.cafe24.com/product/detail.html?cate_no=1&display_group=4&product_no=80",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeonwooChaye: {
      title: "차예마을 공개 상품 정보: 연우제다 지리산 발효차",
      type: "public-product-page",
      url: "https://www.chaye.kr/shop/shopdetail.html?branduid=812718",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hueSimBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 하동 휴심선차",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/home/info?cid=442",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hueSimHadong: {
      title: "하동군 공개 농특산물 정보: 휴심선차",
      type: "public-local-profile",
      url: "https://www.hadong.go.kr/02640.web?amode=view&idx=362&stype=title&sstring=%ED%95%98%EB%8F%99%ED%9C%B4%EC%8B%AC%EC%84%A0%EC%B0%A8",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    muaeGongboocha: {
      title: "공부차 공개 자료: 하동 무애산방 후발효 긴압차",
      type: "public-reference-page",
      url: "https://www.gongboocha.com/bbs/board.php?bo_table=gongboo_6&wr_id=5",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    muaeFacebook: {
      title: "페이스북 공개 페이지: MUAE TEA",
      type: "public-sns-profile",
      url: "https://ko-kr.facebook.com/people/MUAE-TEA/100063456889085/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gwanaHadong: {
      title: "하동군 공개 농특산물 정보: 관아수제차",
      type: "public-local-profile",
      url: "https://www.hadong.go.kr/02640.web?amode=view&idx=353",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dojaeBizw: {
      title: "비즈월드: 도재명차 공개 기사",
      type: "public-news",
      url: "https://www.bizw.kr/news/articleView.html?idxno=42863",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dojaeLinkonbiz: {
      title: "LinkonBiz 공개 기업/전시 정보: 도재명차",
      type: "public-exhibitor-page",
      url: "https://linkonbiz.com/en/seller/1468",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    geumhyangEgnmall: {
      title: "e경남몰 공개 상품 정보: 금향다원 발효차",
      type: "public-product-page",
      url: "https://egnmall.kr/kwa-ABS_goods_v-9413-1005003",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    geumhyangSaramin: {
      title: "사람인 공개 기업정보: 금향다원 발효차 제조",
      type: "public-company-profile",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/TUF2VWg4WFFObnh4ek84OWIvR1pHZz09/company_nm/%EA%B8%88%ED%96%A5%EB%8B%A4%EC%9B%90",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyowolGongboocha: {
      title: "공부차 공개 자료: 하동 효월 후발효차",
      type: "public-reference-page",
      url: "https://www.gongboocha.com/bbs/board.php?bo_table=gongboo_6&wr_id=6",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyowolGongboochaProduct: {
      title: "공부차 공개 상품 정보: 효월 청귤홍차/감귤떡차",
      type: "public-product-page",
      url: "https://www.gongboocha.com/shop/item.php?it_id=1686723974",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    samsinHadong: {
      title: "하동군 공개 농특산물 정보: 삼신차",
      type: "public-local-profile",
      url: "https://www.hadong.go.kr/02640.web?amode=view&idx=393",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongExpoFoodwalker: {
      title: "공개 블로그 정리: 2023 하동세계차엑스포 참가품목 목록",
      type: "public-blog",
      url: "https://foodwalker.tistory.com/entry/2023-%ED%95%98%EB%8F%99-%EC%84%B8%EA%B3%84%EC%B0%A8-%EC%97%91%EC%8A%A4%ED%8F%AC-%EC%A0%95%EB%B3%B4",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gokcheonFoodtalk: {
      title: "푸드톡 공개 업체 정보: 곡천다원",
      type: "public-local-profile",
      url: "https://www.foodtalk.co.kr/company/7041503325",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gokcheonDiningcode: {
      title: "다이닝코드 공개 장소 정보: 곡천다원",
      type: "public-review-page",
      url: "https://www.diningcode.com/profile.php?rid=BY28Rrdax8Yv",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangmaesanKoreatea: {
      title: "한국차문화협회 공개 자료: 황매산다원/허굴산방",
      type: "public-reference-page",
      url: "https://www.koreatea.or.kr/newdata/newdata3_46.asp",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    guidanyoBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 귀단요",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=20",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    guidanyoFairnews: {
      title: "더페어뉴스: 대한민국불교문화엑스포 공예 참가 정보",
      type: "public-news",
      url: "http://m.thefairnews.co.kr/news/articleView.html?idxno=21690",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gimhaeyoBeerich: {
      title: "차비리치 공개 상품 정보: 김해요 도예 작품",
      type: "public-product-page",
      url: "https://berich.kr/Product/?idx=1323",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    donongBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 도농도예",
      type: "public-exhibitor-page",
      url: "http://www.bexpo.kr/home/info?cid=94",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    garamBeerich: {
      title: "차비리치 공개 상품 정보: 가람도예 찻잔",
      type: "public-product-page",
      url: "https://berich.kr/Product/?idx=1222",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dehwaBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 덕화코리아",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/exhibition/2025corp2?ca_id=&wm_category1=02&wm_keyword=&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dehwaCafeBakery: {
      title: "카페&베이커리페어 공개 참가업체 목록: 덕화코리아",
      type: "public-exhibitor-page",
      url: "https://m.cafenbakeryfair.com/shop_contents/myboard_list.htm?category_idx=176056&myboard_code=st_lecture",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seonmyodangBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 선묘당",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=174",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seonmyodangOfficial: {
      title: "선묘당 공식 쇼핑몰 공개 상품 분류",
      type: "official-store",
      url: "https://shanmiaotang.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hudainBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 휴다인",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=&ord=desc&sort=wm_hit&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    myeonggawonSiksin: {
      title: "식신 공개 장소 정보: 보이차전문점 명가원",
      type: "public-review-page",
      url: "https://www.siksinhot.com/P/1221062",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    myeonggawonOrientea: {
      title: "오리엔티 공개 상품 정보: 명가원 보이차",
      type: "public-product-page",
      url: "https://orientea.co.kr/product/%EB%AA%85%EA%B0%80%EC%9B%90-1998%EB%85%84-%EA%B0%95%EC%84%B1%ED%98%B8-%EC%83%9D%EC%B0%A8/258/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    myeonggawonMencha: {
      title: "먼차/명가원 공식몰",
      type: "official-store",
      url: "https://mencha.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    myeonggawonInstagram: {
      title: "명가원 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/myeonggawen_official/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chalsalimBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 하동 차살림",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=&ord=asc&sort=wm_hit&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    skyFlowerOfficial: {
      title: "꽃차 하늘바라기 공식온라인몰",
      type: "official-store",
      url: "https://www.myflowertea.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    skyFlowerNongsaro: {
      title: "농사로 공개 체험농장 정보: 하늘바라기",
      type: "public-local-profile",
      url: "https://www.nongsaro.go.kr/portal/ps/psz/psza/contentSub.ps?cntntsNo=207032&menuId=PS03965",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    andongGoodFarmCyso: {
      title: "사이소 공개 상품 정보: 안동착한농장 프로폴리스",
      type: "public-product-page",
      url: "https://www.cyso.co.kr/shop/item.php?it_id=1570795947",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jeonggaroiDaeguNews: {
      title: "대구신문: 정가로이 김길산 작가/차도구 소개",
      type: "public-news",
      url: "https://www.idaegu.co.kr/news/articleView.html?idxno=388396",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jeonggaroiBusanNews: {
      title: "부산일보: 정가로이 참여 차도구 전시 소개",
      type: "public-news",
      url: "https://www.busan.com/view/busan/view.php?code=2022100210073748222",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teahouseNaniPolle: {
      title: "뽈레 공개 리뷰/장소 정보: 티하우스 나니",
      type: "public-review-page",
      url: "https://polle.com/place/3RDDoL/%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4%20%EB%82%98%EB%8B%88",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teahouseNaniDiningcode: {
      title: "다이닝코드 공개 장소 정보: 티하우스 나니",
      type: "public-review-page",
      url: "https://www.diningcode.com/profile.php?rid=pHCzZrkVzCAh",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ilgudaOfficial: {
      title: "일구다 공식몰 공개 브랜드/사업자 정보",
      type: "official-store",
      url: "https://ilguda.com/54",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ilgudaShop: {
      title: "일구다 공식몰 공개 상품 정보: 녹차·황차·홍차",
      type: "official-store",
      url: "https://ilguda.com/shop_view/?idx=37",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yosandangLinktree: {
      title: "요산당 공개 링크트리: 지리산 화개 차",
      type: "public-sns-link-page",
      url: "https://linktr.ee/yosandang",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    boseongNaturalDyeBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 보성천연염색협동조합",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/2025corp2?sort=wm_like&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mijusarangBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 천연염색 미주사랑",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=0504&sort=wm_like",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    kkomeBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 꼬매",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/exhibition/2025corp2?ca_id=&wm_category1=05&wm_keyword=&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongdoNaturalDyeBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 청도 천연염색/감물염색 업체",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=05&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baekjailsangTeut: {
      title: "티웃갤러리 공개 상품 정보: 백자일상 한국 차도구",
      type: "public-product-page",
      url: "https://gallery.t-eut.com/product/%EB%B0%B1%EC%9E%90%EC%9D%BC%EC%83%81-%EC%B2%AD%EC%B1%84-%EB%B0%B1%EC%9E%90-%EB%8B%A4%EA%B4%80%EA%B3%BC-%ED%98%B8%EC%8A%B9-%ED%95%9C%EA%B5%AD%EC%B0%A8%EB%8F%84%EA%B5%AC/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baekjailsangDoi: {
      title: "일상민예점 도이 공개 작가/상품 정보: 백자일상",
      type: "public-product-page",
      url: "https://doiminie.com/cml577iru2woq01tf2g9vb6yf",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    namchonKbmaeil: {
      title: "경북매일: 경주 남촌도예 서무성 도예가 소개",
      type: "public-news",
      url: "https://www.kbmaeil.com/871780",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    munkyeongCeramicTeaNews: {
      title: "네이트뉴스/데일리한국: 문경 도자기협동조합 차문화대전 참가",
      type: "public-news",
      url: "https://news.nate.com/view/20240527n03451",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    munkyeongTeaBowlNewsis: {
      title: "뉴시스: 문경 찻사발 공모전/경북요 입상 정보",
      type: "public-news",
      url: "https://www.newsis.com/view/NISX20201116_0001235734",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeongsanyoOfficialCup: {
      title: "영산요 공식몰 공개 상품 정보: 백자 세트 찻잔",
      type: "official-store",
      url: "https://yeongsanyo.com/product/%EB%B0%B1%EC%9E%90-%EC%84%B8%ED%8A%B8-%EC%B0%BB%EC%9E%94/37",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeongsanyoOfficialVase: {
      title: "영산요 공식몰 공개 상품 정보: 도예명장 분청 조각 화병",
      type: "official-product-page",
      url: "https://yeongsanyo.com/product/%EB%B6%84%EC%B2%AD-%EC%A1%B0%EA%B0%81-%ED%99%94%EB%B3%91/84/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    baegamNewswire: {
      title: "뉴스와이어: 백암요 초대전 소개",
      type: "public-news",
      url: "https://www.newswire.co.kr/newsRead.php?no=912347",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baegamEkn: {
      title: "에너지경제: 백암요 경북 공예품대전 대상 기사",
      type: "public-news",
      url: "https://m.ekn.kr/view.php?key=20230623010005756",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baegamMuseumInstagramSource: {
      title: "국립박물관 문화상품 페이지: 백암요 Instagram 출처 표기",
      type: "public-product-page",
      url: "https://www.museumshop.or.kr/kor/product/product_view.do?str_bcode=001008002&str_goodcode=202108120003",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongcheonBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 보성 영천다원",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=28",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    unhaeCoupang: {
      title: "쿠팡 공개 상품 정보: 운해다원 유기농 우전/보성녹차",
      type: "public-product-page",
      url: "https://www.coupang.com/vp/products/1925266635?itemId=3268518872&vendorItemId=71255546932",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    boseongTeaPressian: {
      title: "프레시안: 보성군 보성차 홍보관 운영 기사",
      type: "public-news",
      url: "https://www.pressian.com/pages/articles/251221",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chilbongBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 문경칠봉산농원",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=271",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chilbongOfficial: {
      title: "문경칠봉산농원 공식몰 공개 상품 정보",
      type: "official-store",
      url: "https://m.chbsfarm.kr/shop_goods/goods_list.htm",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    daerimTripTips: {
      title: "대한민국 구석구석: 대림목공예 쇼핑/목공예 소개",
      type: "public-travel-profile",
      url: "https://www.koreatriptips.com/shopping/132454.html",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    daerimSaramin: {
      title: "사람인 공개 기업정보: 대림목공예",
      type: "public-company-profile",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/U1NpL2lFcHJ5YWFNc2s1S3FuQ3Awdz09/company_nm/%EB%8C%80%EB%A6%BC%EB%AA%A9%EA%B3%B5%EC%98%88",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chamoreJobkorea: {
      title: "잡코리아 공개 기업정보: 주식회사 차모아",
      type: "public-company-profile",
      url: "https://www.jobkorea.co.kr/company/43469855",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chamoreOfficial: {
      title: "차모아 공식몰: 차 용품/전통차용품 분류",
      type: "official-store",
      url: "https://m.chamore.co.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chamoreBiz: {
      title: "차모아 B2B 공식 페이지",
      type: "official-site",
      url: "https://chamore.biz/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    teaLogicOfficial: {
      title: "티로직 공식몰: 차모아 운영 차도구몰",
      type: "official-store",
      url: "https://www.tealogic.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chamoreGyesuGlass: {
      title: "차모아비즈: 계수나무 내열유리컵 200, 코스터 2인 세트",
      type: "official-product-page",
      url: "https://chamore.biz/product/%EA%B3%84%EC%88%98%EB%82%98%EB%AC%B4-%EB%82%B4%EC%97%B4%EC%9C%A0%EB%A6%AC%EC%BB%B5-200-%EC%BD%94%EC%8A%A4%ED%84%B0-2%EC%9D%B8-%EC%84%B8%ED%8A%B8/1254/category/1/display/4/?icid=MAIN.product_listmain_3",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gongboochaPark: {
      title: "공부차 공식 페이지: 공부차파크 복합치유공간 청계산점",
      type: "official-site",
      url: "https://www.gongboocha.com/shop/content.php?co_id=gwacheon",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jingweiBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: JINGWEI FU TEA 경위복차",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=172",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jingweiCoupang: {
      title: "쿠팡 공개 상품 정보: 경위복차 복전차/흑차",
      type: "public-product-page",
      url: "https://www.coupang.com/vp/products/5820668515?itemId=10044648765&vendorItemId=77327562629",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gimhaeCeramicFestival: {
      title: "김해뉴스: 김해 분청도자기축제 참가 요장 목록",
      type: "public-news",
      url: "https://www.gimhaenews.co.kr/news/articleView.html?idxno=16712",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    kimcheonBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 김천방짜유기 명인 이운형",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=5",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    kimcheonYugiShop: {
      title: "김천방짜유기 공식 쇼핑몰",
      type: "official-store",
      url: "http://www.yugishop.co.kr",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    kimcheonKbmaeil: {
      title: "경북매일: 김천방짜유기 공방/이운형 명인 기사",
      type: "public-news",
      url: "https://www.kbmaeil.com/article/202011180292728",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    najuTeaWikitree: {
      title: "위키트리: 나주시문화재단 국제차문화대전 나주 야생차 홍보",
      type: "public-news",
      url: "https://www.wikitree.co.kr/articles/1056243",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    najuFoundation: {
      title: "나주문화재단: 국제차문화대전 나주 야생차/천연염색 홍보",
      type: "public-organization-page",
      url: "https://www.njcf.or.kr/www/community/press?idx=35&mode=view",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    naeunAving: {
      title: "에이빙뉴스: 나은크래프트 나전 칠기 공예 소개",
      type: "public-news",
      url: "https://kr.aving.net/news/articleView.html?idxno=177820",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    rozeonOfficial: {
      title: "로전 공식몰: 침향발효차/향차 브랜드 소개",
      type: "official-store",
      url: "https://m.rozeon.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    rozeonDonga: {
      title: "동아일보: 로전 능혜스님 전통 향차 브랜드 기사",
      type: "public-news",
      url: "https://www.donga.com/news/Economy/article/all/20250507/131555463/1",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jukrimBexpo: {
      title: "서울국제불교박람회 공개 참가 정보: 보성 죽림다원 말차",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=43",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    soamHappyDesign: {
      title: "행복이가득한집: 찻잎마술/소암제다 소개",
      type: "public-magazine-page",
      url: "https://happy.designhouse.co.kr/magazine/magazine_view/00010002/6641?c=0&call=list",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ilsangchaGcafeshow: {
      title: "글로벌 티&카페쇼 공개 현황판: 일상차 壹叁荼 武夷岩茶",
      type: "public-exhibitor-page",
      url: "https://g-cafeshow.com/post_file_download.cm?c=YTo1OntzOjEwOiJib2FyZF9jb2RlIjtzOjIyOiJiMjAyNTAzMTBjMzRmZTBlNzQyZmYwIjtzOjk6InBvc3RfY29kZSI7czoyMjoicDIwMjUwNTI2ZDRhZmFkZjI4MDc5MCI7czo5OiJmaWxlX2NvZGUiO3M6MjI6InAyMDI1MDUyNjY2MzExODVjY2I2YTMiO3M6MTk6InBvc3RfZG93bmxvYWRfdG9rZW4iO3M6MTM6IjZhMTJmMzYwOGNmZDYiO3M6MTE6Im1lbWJlcl9jb2RlIjtOO30%3D",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongBioNewspim: {
      title: "뉴스핌: 하동차&바이오진흥원 하동 말차 기반 제품 출시",
      type: "public-news",
      url: "https://www.newspim.com/news/view/20260211000995",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongBioTraining: {
      title: "대한경제: 하동차&바이오진흥원 차 전문가 양성",
      type: "public-news",
      url: "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202505211742348520143",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    incenseWorldOfficial: {
      title: "인센스월드 공식 사이트",
      type: "official-site",
      url: "https://www.incenseworld.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    incenseWorldButtumak: {
      title: "인센스월드 공식 사이트: 부뚜막 인센스 세트",
      type: "official-product-page",
      url: "https://incenseworld.kr/bbs/incense_holder/37?sca=%E7%81%B6%E5%8F%B0%E9%A6%99%E8%96%B0%E5%A5%97%E8%A3%85",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    incenseWorldKexpo: {
      title: "KOREA EXPO 공개 브랜드 정보: 인센스월드",
      type: "public-exhibitor-page",
      url: "https://fr.k-expo.org/brand-exhibition-2025/?bmode=view&idx=164189289&q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjc6ImtleXdvcmQiO3M6NToiaW5jZW4iO30%3D&t=board",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ootchaBrownthings: {
      title: "브라운띵스 공개 상품 정보: 웃차 마이클 잭살",
      type: "public-product-page",
      url: "https://brownthings.kr/product/%EC%9B%83%EC%B0%A8-%EB%A7%88%EC%9D%B4%ED%81%B4-%EC%9E%AD%EC%82%B4-4g-%ED%8B%B0%EB%B0%B1-%EC%9C%A0%EC%9E%90-%EB%8F%8C%EB%B0%B0-%EB%AA%A8%EA%B3%BC-%EC%9E%AD%EC%82%B4%EC%9D%B4-%EB%8B%B4%EA%B8%B4-%EC%B0%A8-%EC%86%8C%EB%B9%84%EA%B8%B0%ED%95%9C-2027%EB%85%84-5%EC%9B%94/178/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teaunionOfficial: {
      title: "한국차인연합회 공식 홈페이지",
      type: "official-site",
      url: "http://www.teaunion.or.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teaunionNaverTerms: {
      title: "네이버 지식백과: 한국차인연합회 차생활문화대전",
      type: "public-reference",
      url: "https://terms.naver.com/entry.naver?docId=1636512&cid=50346&categoryId=50346",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    donggukTeaContents: {
      title: "동국대학교 불교대학원 차문화콘텐츠학과 공식 소개",
      type: "official-academic-page",
      url: "https://gsbs.dongguk.edu/page/1107",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ktimiNaverBlog: {
      title: "한국티산업경영연구원 차그리다 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/elly_tea_lover",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ktimiSommelierTimes: {
      title: "소믈리에타임즈: 한국티산업경영연구원 우리차 패키지 디자인 공모전",
      type: "public-news",
      url: "https://www.sommeliertimes.com/news/articleView.html?idxno=16837",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ktimiSweetberriesReview: {
      title: "네이버 블로그: 차그리다 스윗베리즈 과일블렌딩티 리뷰",
      type: "public-blog-review",
      url: "https://blog.naver.com/healto/224252848410",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    wondangCafeShow: {
      title: "서울카페쇼: 서리꽃이 핀 차 보성원당제다원",
      type: "public-exhibitor-page",
      url: "https://kor.cafeshow.com/kor/cafeshow/result2020_comp_view.asp?idx=2750",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    wondangBoseongMall: {
      title: "보성몰: 보성원당제다원 우전·세작·홍차 세트",
      type: "public-product-page",
      url: "https://boseongmall.co.kr/product/%EB%B3%B4%EC%84%B1%EC%9B%90%EB%8B%B9%EC%A0%9C%EB%8B%A4%EC%9B%90-%EC%9A%B0%EC%A0%84-%EC%84%B8%EC%9E%91-%ED%99%8D%EC%B0%A8-%EC%84%B8%ED%8A%B8%EA%B5%AC%EC%84%B1-%EA%B1%B4%EA%B0%95%EC%B0%A8-3%EC%A2%85/1501/category/123/display/1/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tudahunOfficial: {
      title: "투다헌 공식 사이트: 중국차·다기 정보",
      type: "official-site",
      url: "https://xn--2j1b560dupc.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tudahunBexpo: {
      title: "서울국제불교박람회: 투다헌 출품 정보",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=257",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tudahunBlog: {
      title: "네이버 블로그: 투다헌 보이차·철관음·홍차·차도구 박람회 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/cantonet/224279989138",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tudahunNaverBlog: {
      title: "투다헌 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/tudateastore",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    wonyuDaumCafe: {
      title: "원유전통예절문화협회/다림헌 공개 카페: 차문화예절·다기·향도구",
      type: "public-community-page",
      url: "https://m.cafe.daum.net/jbj5202/Bjs/4613",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    busanCraftsOfficial: {
      title: "부산광역시 공예협동조합 공식 홈페이지",
      type: "official-site",
      url: "https://busanassociation.imweb.me/busancrafts",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    busanCraftsCulture: {
      title: "부산역사문화대전: 부산광역시 공예협동조합",
      type: "public-reference",
      url: "https://www.grandculture.net/busan/haeundaegu/toc/GC04214923",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangBand: {
      title: "복향명차 공개 밴드",
      type: "public-sns-profile",
      url: "https://band.us/@cxt",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangBlogBaekmodan: {
      title: "네이버 블로그: 복향명차 백모단 리뷰",
      type: "public-blog-review",
      url: "https://blog.naver.com/kidkiddy/223932201925",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangCafeLanhuaxiang: {
      title: "네이버 카페 오렌지페코: 복향명차 난화향 감로 25",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/547163",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangCafePuer1993: {
      title: "네이버 카페 오렌지페코: 복향명차 1993년 보이생산차",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/548326",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangCafeWildWhite: {
      title: "네이버 카페 오렌지페코: 복향명차 25년 야생백차",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/artcollection/546213",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bokhyangExpoReview: {
      title: "네이버 블로그: 차문화대전 복향명차 보이숙차 시음 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/jjm0ju/223890533670",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yixingYongshengPeachOolongBlog: {
      title: "네이버 블로그: 宜兴永盛陶艺茗壶堂 복숭아우롱차·표일배 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/antjm/223953780508",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yixingYongshengFairPreview: {
      title: "네이버 블로그: 2025 서울 티앤크래프트페어 참가 업체 목록",
      type: "public-exhibitor-preview",
      url: "https://blog.naver.com/showertata7/223801025642",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    gojeonCultureZisha: {
      title: "월간 차문화: 제17회 고전문화 특별전 자사호 전시",
      type: "public-news",
      url: "https://www.teaculture.co.kr/news/articleView.html?idxno=10337",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    geungjeongDaangn: {
      title: "당근 동네업체: 긍정공방 공예품 판매 후기",
      type: "public-local-review",
      url: "https://www.daangn.com/kr/local-profile/%EA%B8%8D%EC%A0%95%EA%B3%B5%EB%B0%A9-22990/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    geungjeongCarmap: {
      title: "카맵 소상공인 정보: 긍정공방",
      type: "public-business-directory",
      url: "http://carmap.co.kr/web/mplus/nbiz/nview.php?nid=MA010120220810694250&NCODE=G21802&sigun=6260000&gugun=3400000",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    girinNaverPlace: {
      title: "네이버 지도: 도예공방 기린공방",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/1699571094",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nojeonyoKilnBlog: {
      title: "네이버 블로그: 노전요 가마 불 들어가는 날",
      type: "public-blog",
      url: "http://blog.naver.com/janu0128/70179960668",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    nojeonyoTeawareBlog: {
      title: "네이버 블로그: 청오와 노전요 목다구·도자 전시",
      type: "public-blog",
      url: "http://blog.naver.com/teeliebe/130181311044",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dagyeongTeaculture: {
      title: "월간 차문화: 다경요·설도예·예인요·무무요 찻그릇 전시",
      type: "public-news",
      url: "https://www.teaculture.co.kr/news/articleView.html?idxno=1993",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dagyeongGimhaeProduct: {
      title: "김해분청도자전시판매관: 다경요 5방색잔세트",
      type: "public-product-page",
      url: "https://www.gimhae.go.kr/07288.web?amode=view&prodNum=PROD202202080017",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dasomNaverPlace: {
      title: "네이버 지도: 다솜공방 도자기",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/31442625",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dodongyoTeapotBlog: {
      title: "네이버 블로그: 도동요 흐름유 다관 후기",
      type: "public-blog-review",
      url: "http://blog.naver.com/choi_jisoo/222057253576",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dodongyoDawanCafe: {
      title: "네이버 카페 다완사랑: 도동요 김용석 백자 잔",
      type: "naver-cafe-review",
      url: "http://cafe.naver.com/dawan/15023",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    doyougaSmartStore: {
      title: "도유가 스마트스토어: 문찬석 여주시 도예명장 차그릇",
      type: "public-product-page",
      url: "https://smartstore.naver.com/doyouga",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dojeongyoIlgudaCup: {
      title: "일구다: 도정요 백자 찻잔세트",
      type: "public-product-page",
      url: "https://ilguda.com/all-ilguda/?idx=124",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dneDdeulSmartStore: {
      title: "드내뜰 스마트스토어: handcrafted ceramic studio",
      type: "public-product-page",
      url: "https://smartstore.naver.com/jjceramicstore",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ttatiExpoReview: {
      title: "네이버 블로그: 국제차문화대전 따티 머그워머 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/wowo7956/223463932908",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    maewonchogaNaverPlace: {
      title: "네이버 지도: 매원초가 도자기제조",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/19930959",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    modong114: {
      title: "114On: 모동도예 도자기제조",
      type: "public-business-directory",
      url: "https://www.114.co.kr/search/detail?comp_id=1611296&comp_tp_cd=INT&upjong_cd=142900",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    modongNewstown: {
      title: "뉴스타운: 경주 모동도예 윤관영 작가",
      type: "public-news",
      url: "http://www.newstown.co.kr/news/articleView.html?idxno=254762",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mongtanBexpo: {
      title: "서울국제불교박람회: 몽탄갤러리 차 도구 출품",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=368",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mongtanInstagram: {
      title: "몽탄갤러리 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/mongtangallery/",
      capturedAt: "2026-05-29T00:00:00+09:00",
    },
    myochaNaverPlace: {
      title: "네이버 지도: 묘차 차·커피",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/1134023834",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    moomooyoOfficial: {
      title: "무무요 공식 사이트",
      type: "official-site",
      url: "https://www.mmy.co.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    moomooyoSmartStore: {
      title: "무무요 스마트스토어",
      type: "public-product-page",
      url: "https://smartstore.naver.com/moomooyo",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    salraeyoIdusCup: {
      title: "아이디어스: 무유장작가마 살래요 흑토 무유찻잔",
      type: "public-product-page",
      url: "https://www.idus.com/v2/product/3a99f2ff-461d-4a00-81c2-39c5660bf081",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    moonJaepilBlog: {
      title: "네이버 블로그: 문재필 옻칠갤러리 소개",
      type: "public-blog",
      url: "https://blog.naver.com/nscity/223878049937",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    moonJaepilInstagram: {
      title: "문재필 옻칠갤러리 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/haesong_ottchil/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    mintoDelphicStrainer: {
      title: "델픽: 민토 최민록 Tea Strainer 리뷰",
      type: "public-product-review",
      url: "https://delphic.kr/accessories/?idx=56",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    mintoSmartStore: {
      title: "민토 최민록 공식 스마트스토어",
      type: "official-store",
      url: "https://smartstore.naver.com/ceraminto",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    byEdgarMoneypin: {
      title: "머니핀: 바이에드가(by Edgar) 목공방",
      type: "public-business-directory",
      url: "https://moneypin.biz/bizno/detail/8041200308/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bakdalyoNaverPlace: {
      title: "네이버 지도: 박달요 도자기제조",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/33338508",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    baeksan114: {
      title: "114On: 백산도예연구소 비내화 일반 도자기 제조",
      type: "public-business-directory",
      url: "https://www.114.co.kr/life/localBillStore/detail/323952",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    borimBexpo: {
      title: "서울국제불교박람회: 보림원목공방",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=464",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seoldoyeNaverPlace: {
      title: "네이버 지도: 설도예공방",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/1375852027",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sorangyoBlog: {
      title: "소랑요 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/ldhcij",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sosanTistory: {
      title: "티스토리: 소산 한호현 소산도예 소개",
      type: "public-profile",
      url: "https://spp5908.tistory.com/7948",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sowolbaekjaMoneypin: {
      title: "머니핀: 소월백자 전자상거래 소매업",
      type: "public-business-directory",
      url: "https://moneypin.biz/bizno/detail/5360802745/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    songhwaGimhaeProduct: {
      title: "김해분청도자전시판매관: 송화도예 나뭇잎 3절접시",
      type: "public-product-page",
      url: "https://www.gimhae.go.kr/07288.web?amode=view&prodNum=PROD202211200007",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    suniNaverPlace: {
      title: "네이버 지도: 수니공방",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/1324362355",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    goryeoSeonchaMoneypin: {
      title: "머니핀: 사단법인 고려천태국제선차 연구보존회",
      type: "public-business-directory",
      url: "https://moneypin.biz/bizno/detail/1318216520/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seungseoljaeReview: {
      title: "네이버 블로그: 승설재 무이성 육계 시음 언급",
      type: "public-blog-review",
      url: "https://blog.naver.com/sul_cheon/224226067945",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    alcheonSagimakgol: {
      title: "이천 사기막골 도예촌: 알천도예",
      type: "public-profile",
      url: "http://sagimakgol.com/?avada_portfolio=%EC%95%8C%EC%B2%9C%EB%8F%84%EC%98%88",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    eonyangNaverPlace: {
      title: "네이버 지도: 언양도예공방",
      type: "public-place-page",
      url: "https://map.naver.com/p/entry/place/16626295",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    eonyangTistory: {
      title: "울산의 빛: 언양도예 김춘헌 도예가 인터뷰",
      type: "public-profile",
      url: "https://thelightofulsan.tistory.com/247",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeosongGimhaeExhibition: {
      title: "김해시 블로그: 김해분청도자전시판매관 1인 차림전 참여업체",
      type: "public-exhibition-page",
      url: "https://blog.naver.com/gimhae4you/222668860730",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeosongGimhaeWomen: {
      title: "네이버 블로그: 김해여성 도예가전 여송도예",
      type: "public-exhibition-page",
      url: "https://blog.naver.com/gtour_guide/222926672346",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeonceramicBizno: {
      title: "비즈노: 연세라믹 Yeon_ceramic 스마트스토어 정보",
      type: "public-business-directory",
      url: "https://bizno.net/article/3831901944",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeongnamyoOfficial: {
      title: "영남요 1730 공식 사이트",
      type: "official-site",
      url: "http://baeksan-kimjungok.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeinyoDawanCafe: {
      title: "네이버 카페 다완사랑: 예인요 모란박지문 다관 후기",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/dawan/96206",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yepyeongOfficial: {
      title: "예평 공식 사이트",
      type: "official-site",
      url: "https://www.yepyeong.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yepyeongKoreanTea: {
      title: "예평 공식 사이트: 만수가 만든 차 백차·백우롱",
      type: "official-product-page",
      url: "https://www.yepyeong.com/krtea",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yepyeongInstagram: {
      title: "예평 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/yepyeong.tea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yepyeongKakao: {
      title: "예평 Kakao Channel",
      type: "public-sns-profile",
      url: "https://pf.kakao.com/_xcBbLb",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yepyeongYoutube: {
      title: "예평 YouTube",
      type: "public-sns-profile",
      url: "https://www.youtube.com/@YEPYEONG",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    oreumoreudaBlog: {
      title: "오름오르다 窯_그릇숨 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/amidemaison",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    oreumoreudaSmartStore: {
      title: "오름오르다_그릇숨 스마트스토어: 개완·다관·잔·차탁",
      type: "public-product-page",
      url: "https://smartstore.naver.com/oremoreda57",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ochilchaeCafeShow2022: {
      title: "서울카페쇼 2022: 옻칠채",
      type: "public-exhibitor-page",
      url: "https://kor.cafeshow.com/kor/cafeshow/result2022_comp_view.asp?idx=3775",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ochilchaeCafeShow2023: {
      title: "서울카페쇼 2023: 옻칠채",
      type: "public-exhibitor-page",
      url: "https://kor.cafeshow.com/kor/cafeshow/result2023_comp_view.asp?idx=4497",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    warakMoneypin: {
      title: "머니핀: 와락공방 가구·목공",
      type: "public-business-directory",
      url: "https://moneypin.biz/bizno/detail/7555900199/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    warakExhibitionReview: {
      title: "네이버 블로그: 인사동차공예박람회 와락공방 언급",
      type: "public-blog-review",
      url: "https://blog.naver.com/rococodiva/223603652614",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ugokyoMiryangBlog: {
      title: "밀양시 블로그: 우곡요 이종태 작가",
      type: "public-profile",
      url: "https://blog.naver.com/miryangsi/222658591120",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    woogiOfficial: {
      title: "우기세라믹 공식 사이트",
      type: "official-site",
      url: "https://woogiceramics.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    woogiAbout: {
      title: "우기세라믹 About us",
      type: "official-profile",
      url: "https://woogiceramics.com/shopinfo/company.html",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    urimIdus: {
      title: "아이디어스: 우림도예 판매 작품",
      type: "public-product-page",
      url: "https://www.idus.com/v2/artist/5faa367a-b8a6-48eb-8d3a-e56682440e32/product",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    urimArticle: {
      title: "경남도민일보: 김해 우림도예 백년소공인 선정",
      type: "public-news",
      url: "https://www.idomin.com/news/articleView.html?idxno=754351",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    urimProcessKProfile: {
      title: "Process K 공개 영상 정보: 우림도예 공식 홈페이지/Instagram",
      type: "public-profile",
      url: "https://heisme.skymoon.info/gb/bbs/board.php?bo_table=p_forum02&page=43&sca=%EC%98%81%EC%83%81&sod=desc&sop=and&sst=wr_good&wr_id=1821",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    eatelierBlog: {
      title: "이아뜰리에 공식 네이버 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/e-atelier",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    eatelierTeaFairCafe: {
      title: "네이버 카페 차닉골: 이아뜰리에 다식전문 업체 언급",
      type: "naver-cafe-review",
      url: "https://cafe.naver.com/mbuna/139165",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ichiheonIdus: {
      title: "아이디어스: 이치헌도예연구소 흙이야기 도예공방",
      type: "public-product-page",
      url: "https://www.idus.com/v2/feed/83559f9d-890a-4620-9e7f-57f3f86981a7",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ichiheonBizno: {
      title: "비즈노: 이치헌도예연구소",
      type: "public-business-directory",
      url: "https://bizno.net/article/4890601577",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongdoNaturalDyeNews: {
      title: "경북신문: 청도군 천연염색연구회 체험 프로그램 교육",
      type: "public-news",
      url: "https://www.kbsm.net/news/view.php?idx=4067033",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongdoNaturalDyeBiz: {
      title: "머니핀: 청도군 천연염색연구회",
      type: "public-business-directory",
      url: "https://moneypin.biz/bizno/detail/5158023962/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongrimReview: {
      title: "네이버 블로그: 청림도요 파란찻사발·빨간사과 작품 언급",
      type: "public-blog-review",
      url: "https://blog.naver.com/kptlord/224275262635",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    theouDesignpress: {
      title: "디자인프레스: 정성으로 빚은 모던 청자 더공유",
      type: "public-article",
      url: "https://blog.naver.com/designpress2016/221771637153",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheonghakCbw: {
      title: "청백원: 청학도방 송춘호",
      type: "public-product-page",
      url: "https://cbw.co.kr/category/%EC%B2%AD%ED%95%99%EB%8F%84%EB%B0%A9-%EC%86%A1%EC%B6%98%ED%98%B8/167/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheonghakTeawareBlog: {
      title: "네이버 블로그: 청학도방 다관 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/jamie818/224040134717",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadaDesignBiz: {
      title: "공개 사업자 정보: HADA Design(하다디자인)",
      type: "public-business-directory",
      url: "https://bizno.net/article/1371618841",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    beijingMiaoxiang2025Review: {
      title: "네이버 블로그: 北京妙香缘贸易有限公司 소분 차 구매 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/viagem_/223962887807",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    beijingMiaoxiang2024Review: {
      title: "네이버 블로그: 북경묘향연무역 중국차 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/wowo7956/223463932908",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yinTeaTaiwanReview: {
      title: "네이버 블로그: 윤차인 YIN TEA 대만차 시음 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/wowo7956/224173429836",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yinTeaGoldenOolongReview: {
      title: "네이버 블로그: 윤차인 황금우롱 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/yyyaaannn/223899121315",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    daegwangDesignFestival: {
      title: "서울디자인페스티벌: 대광도요",
      type: "public-exhibitor-page",
      url: "https://seoul.designfestival.co.kr/exhibition/daegwangdoyo/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    daegwangTeaFairEvent: {
      title: "네이버 블로그: 대광도요 찻잔 이벤트와 Instagram 계정",
      type: "public-blog",
      url: "https://blog.naver.com/alswn1825/224159465729",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    daegwangInstagram: {
      title: "대광도요 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/daegwangdoyo/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daegwangReview: {
      title: "네이버 블로그: 대광도요 기물 사용감 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/muhaeim_1/224174469177",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dongwonBexpo: {
      title: "서울국제불교박람회: 동원공방",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=244",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dongwonProfile: {
      title: "티스토리: 동원 정혜주 - 동원공방",
      type: "public-profile",
      url: "https://spp5908.tistory.com/9981",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    laceramistaShopping: {
      title: "네이버 쇼핑 공개 결과: 라세라미스타 하트 개완 세트",
      type: "public-shopping-result",
      url: "https://search.shopping.naver.com/search/all?query=%EB%9D%BC%EC%84%B8%EB%9D%BC%EB%AF%B8%EC%8A%A4%ED%83%80%20%EA%B0%9C%EC%99%84",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    laceramistaKcdf: {
      title: "공예트렌드페어 공예공방관: 라세라미스타",
      type: "public-exhibitor-page",
      url: "https://www.kcdf.kr/craftrendfair/trendFair/pavln/view.do?bsnsPssrpSn=172&menuNo=1100014&trendFairSn=65&type=01",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    laceramistaGimhaeTeapot: {
      title: "김해분청도자전시판매관: 라세라미스타 티 팟",
      type: "public-product-page",
      url: "https://www.gimhae.go.kr/07288.web?amode=view&prodNum=PROD202211200001",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    laceramistaInstagram: {
      title: "라세라미스타 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/laceramista/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    laceramistaSmartStore: {
      title: "라세라미스타 공식 Smartstore",
      type: "official-store",
      url: "https://smartstore.naver.com/laceramista/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    laceramistaReviewHtd: {
      title: "부산 홈테이블데코페어 공개 후기: 라세라미스타",
      type: "public-review",
      url: "https://fromswing.tistory.com/entry/%EB%B6%80%EC%82%B0-%ED%99%88%ED%85%8C%EC%9D%B4%EB%B8%94%EB%8D%B0%EC%BD%94%ED%8E%98%EC%96%B4-%ED%9B%84%EA%B8%B0%EC%99%80-%EC%86%8C%EB%B9%84%ED%85%9C-%EB%8C%80%EA%B3%B5%EA%B0%9C",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    koreaTeaCultureOfficial: {
      title: "한국 차문화협회 공식 홈페이지",
      type: "official-site",
      url: "https://www.koreatea.or.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    koreaTeaCultureProjects: {
      title: "한국 차문화협회 주요사업",
      type: "official-page",
      url: "https://www.koreatea.or.kr/about-us/projects/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongAnakBlog: {
      title: "하동아낙의 차 이야기 - LADY HADONG 블로그",
      type: "public-sns-profile",
      url: "https://blog.naver.com/pkykk365",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongAnakCheonggyulTea: {
      title: "하동아낙 블로그: 청귤병차·구증구포·녹차·백차·홍차",
      type: "public-blog",
      url: "https://blog.naver.com/pkykk365/223594152557",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hadongAnakApricotOolong: {
      title: "하동아낙 블로그: 살구홍차&우롱차·홍차 품은 청귤",
      type: "public-blog",
      url: "https://blog.naver.com/pkykk365/223587188989",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    koreanTogiReview: {
      title: "네이버 블로그: 한국토기 검은 토기 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/sanrt1204/224014423089",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyunamDanpoongMall: {
      title: "단풍미인몰: 현암제다 영농조합법인",
      type: "public-vendor-page",
      url: "https://danpoongmall.kr/vendors/dp036/?products_columns=3",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyunamDanpoongMallClean: {
      title: "단풍미인몰 현암제다 영농조합법인 판매자 페이지",
      type: "public-vendor-page",
      url: "https://danpoongmall.kr/vendors/dp036/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jukpyeongDiningCode: {
      title: "다이닝코드: 죽평 다관 전통차·보이차",
      type: "public-place-review",
      url: "https://www.diningcode.com/profile.php?rid=L6FKxkdCvHRo",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jingokyoMokryun: {
      title: "목련상점: 진곡요 분청퇴수기",
      type: "public-product-page",
      url: "https://www.mokryunstore.co.kr/product/%EC%A7%84%EA%B3%A1%EC%9A%94-%EB%B6%84%EC%B2%AD%ED%87%B4%EC%88%98%EA%B8%B0/4214/category/1/display/3/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    poamyoNews: {
      title: "문경인터넷뉴스: 포암요 이동규 도예 초대전",
      type: "public-news",
      url: "http://www.mginews.co.kr/ArticleView.asp?intNum=3625&ASection=001011",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangwooyoSmartStore: {
      title: "황우요 스마트스토어",
      type: "public-product-page",
      url: "https://smartstore.naver.com/hwangwooyo",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyowonSmartStore: {
      title: "효원도예 스마트스토어",
      type: "public-product-page",
      url: "https://smartstore.naver.com/pig-oppa",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sandobangStore: {
      title: "산도방 공개 쇼핑몰",
      type: "public-product-page",
      url: "https://sandobang.cafe24.com/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sandobangGaiwan: {
      title: "산도방 공식몰 상품: 산도방 개완",
      type: "official-product-page",
      url: "https://sandobang.cafe24.com/product/%EC%82%B0%EB%8F%84%EB%B0%A9-%EA%B0%9C%EC%99%84/53/category/1/display/7/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    mooyudawonBexpo2026: {
      title: "서울국제불교박람회 2026 온라인 전시관: 무유다원",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/2026corp2?ca_id=&wm_category1=&wm_keyword=%EB%AC%B4%EC%9C%A0&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    samjeongBexpo2026: {
      title: "서울국제불교박람회 2026 온라인 전시관: 삼정공방",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/2026corp2?ca_id=&wm_category1=&wm_keyword=%EC%82%BC%EC%A0%95%EA%B3%B5%EB%B0%A9&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    samjeongOrangePekoeCafe: {
      title: "네이버 카페 오렌지페코: 삼정공방 차도구 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/artcollection/525669",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    chimhyangnamuBexpo2026: {
      title: "서울국제불교박람회 2026 온라인 전시관: 침향나무",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/2026corp2?ca_id=&wm_category1=&wm_keyword=%EC%B9%A8%ED%96%A5%EB%82%98%EB%AC%B4&wm_option=wm_company_name",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    bitsalIdus: {
      title: "아이디어스: 빛살 임영주 도자기 작업",
      type: "public-product-page",
      url: "https://www.idus.com/v2/product/f52b3e79-e597-4ab4-93e7-e74a92336f5a",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ugiwonDelphicGaiwan: {
      title: "델픽: 우기원 키위새 개완",
      type: "public-product-page",
      url: "https://delphic.kr/teapotjug/?idx=627",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ugiwonTwlShop: {
      title: "TWL Shop: 우기원 작가 상품 카테고리",
      type: "public-product-page",
      url: "https://twl-shop.com/category/%EC%9A%B0%EA%B8%B0%EC%9B%90/1127/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ugiwonGaiwanPurchaseBlog: {
      title: "네이버 블로그: 우기원 개완 구매 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/sereniss3/224266100209",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangachaLinktree: {
      title: "황아차 공개 Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/yellowbud_tea",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangachaShoppingResult: {
      title: "네이버 쇼핑 공개 결과: 황아차 세작 녹차",
      type: "public-shopping-result",
      url: "https://search.shopping.naver.com/search/all?query=%ED%99%A9%EC%95%84%EC%B0%A8%20%EC%84%B8%EC%9E%91%20%EB%85%B9%EC%B0%A8",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dahyangyeonTeaFairList: {
      title: "네이버 블로그: 2025 서울 티앤크래프트페어 참가 업체 목록 다향연",
      type: "public-exhibitor-list",
      url: "https://blog.naver.com/jhealism/223810492748",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dahyangyeonOfficialSite: {
      title: "다향연 공식몰: 제품군 및 공식 SNS 링크",
      type: "official-site",
      url: "https://m.dahyangyeon.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dahyangyeonReviewBoard: {
      title: "다향연 공식몰: 주민들의 찐 리뷰 게시판",
      type: "official-review-board",
      url: "https://m.dahyangyeon.com/board/product/list.html?board_no=4",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    soidawonDcMatcha: {
      title: "디시인사이드 차·음료 갤러리: 소아다원 말차가루 구매 문의",
      type: "public-community-mention",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=243367",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    sudoYeSaramin: {
      title: "사람인: 수도예 가정용 및 장식용 도자기 제조업",
      type: "public-company-page",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/SXlEeE9BUFNGOURCSVJUc3pkQXozdz09/company_nm/%EC%88%98%EB%8F%84%EC%98%88",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheongdamyoDishList: {
      title: "공개 그릇 브랜드 소개: 청담요 프리미엄 식기",
      type: "public-article",
      url: "https://uplifestyle.tistory.com/m/141",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jueanSaraminNaturalDye: {
      title: "사람인: 주앤안 스카프 제작·천연염색",
      type: "public-company-page",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/Y2VNOUR1SklPUXMwWlJZeGN0S09TQT09/company_nm/%EC%A3%BC%EC%95%A4%EC%95%88",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jueanHandartyList: {
      title: "핸드아티코리아 공개 부스 리스트: 대구경북천연염색협동조합 주앤안",
      type: "public-exhibitor-list",
      url: "https://d2m30fi342zjti.cloudfront.net/wp-content/uploads/sites/2/2024/07/31145914/24-Handartykorea-booth-layout-list.pdf",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teumKoyaArticle: {
      title: "우리문화신문: 생활자기 트임(김진욱도예원)",
      type: "public-article-review",
      url: "https://www.koya-culture.com/news/article.html?no=112001",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    teumDaangn: {
      title: "당근 동네업체: 트임&김진욱도예원 차도구",
      type: "public-local-profile",
      url: "https://www.daangn.com/kr/local-profile/89qhvgojh7vx/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tojeonggaLife114: {
      title: "Life114: 토정가(구 이조요) 도자기제품 제조/도매",
      type: "public-company-page",
      url: "https://www.life114.co.kr/?M_SEQ=837433",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    tojeonggaTistory: {
      title: "티스토리: 토정 홍재표 - 이조요(현 토정가)",
      type: "public-profile",
      url: "https://spp5908.tistory.com/9881",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hanseeunWishbucketCup: {
      title: "위시버킷: 한세은(진세라믹) 푸른 봉오리 잔",
      type: "public-product-page",
      url: "https://www.wishbucket.io/items/2317865",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hanseeunWikitreeCheongja: {
      title: "위키트리: 한세은 작가 청자 다관과 호승 공모전 수상",
      type: "public-news",
      url: "https://www.wikitree.co.kr/articles/909982",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheonboOfficial: {
      title: "천보다원 공식 홈페이지",
      type: "official-site",
      url: "http://www.formay.co.kr/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    cheonboGreenTea: {
      title: "천보다원 공식 상품 카테고리: 녹차류",
      type: "official-product-page",
      url: "http://www.formay.co.kr/product/index.html?p_cate=1",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dachaeTeacultureAward: {
      title: "티문화뉴스: 다채 발효차 세계차품평대회 수상",
      type: "public-news",
      url: "https://www.teaculture.co.kr/news/articleView.html?idxno=2040",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    studioSeonTeaWorld2024: {
      title: "Tea World Festival 공개 SNS: 스튜디오 세온 참가업체 소개",
      type: "public-social-post",
      url: "https://www.instagram.com/p/C7LKgmsyIvJ/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    studioSeonTeaWorld2023: {
      title: "Tea World Festival 공개 SNS: 스튜디오 세온 차 스튜디오 소개",
      type: "public-social-post",
      url: "https://www.instagram.com/p/CsAjbL2L9BF/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seulwooBlogReview: {
      title: "네이버 블로그: 슬우재 팟/도예공방 후기",
      type: "public-blog-review",
      url: "https://blog.naver.com/hobak1218/223289807218",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seulwooCafeMention: {
      title: "네이버 카페: 슬우재 홍보/팟 언급",
      type: "naver-cafe-mention",
      url: "https://cafe.naver.com/druidcafe/102837",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    seulwooYoutubeShort: {
      title: "YouTube Shorts: 차문화대전 참새잔 슬우재도예공방",
      type: "public-video",
      url: "https://www.youtube.com/shorts/8s2xfXfaoRg",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    ochayeongakInstagram: {
      title: "오차연각 공식 Instagram",
      type: "official-social",
      url: "https://www.instagram.com/m_flower_teastory/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    haeneoulBrownthings2025: {
      title: "Brown Things: 2025 국제차문화대전 해너울 공방 리뷰",
      type: "public-blog-review",
      url: "https://brownthings.tistory.com/907",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    haeneoulIeumInterview: {
      title: "이음온라인: 충주 해너울공방 임병한 도예가 인터뷰",
      type: "public-interview",
      url: "https://ieum.or.kr/user/webzine/view.do?idx=598",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    healthBeverageInstagram: {
      title: "헬스베버리지 공식 Instagram",
      type: "official-social",
      url: "https://www.instagram.com/healthbeverage_official/",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    healthBeverageHmall: {
      title: "현대Hmall: 헬스베버리지 브랜드위크",
      type: "public-store-page",
      url: "https://www.hmall.com/md/dpa/searchSpexSectItem?sectId=2752067",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwagyeongDoyoProfile: {
      title: "공개 작가 프로필: 장병우 - 화경도요, 장병우 도예연구소",
      type: "public-profile",
      url: "https://spp5908.tistory.com/13565",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwagyeongDoyoAward: {
      title: "매일신문: 장병우(화경도요) 경상북도 공예품대전 대상",
      type: "public-news",
      url: "https://www.imaeil.com/page/view/2018070315505972715",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hyangjeokdangKSpirit: {
      title: "K스피릿: 향적당 대만 동방미인차·목책철관음 전시 언급",
      type: "public-news",
      url: "http://www.ikoreanspirit.com/news/articleView.html?idxno=72305",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    worldTeaExpo2025TeaList: {
      title: "명원세계차박람회 2025 참가업체 리스트: 차(tea) 카테고리",
      type: "public-exhibitor-list",
      url: "https://www.worldteaexpokorea.com/list/?category=t736O25D17&page=2&q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    butdanggolIdusHongcha: {
      title: "아이디어스: 붓당골제다 지리산 경남 하동 수제 홍차",
      type: "public-store-page",
      url: "https://www.idus.com/v2/product/4c62a8b1-a652-4a51-a0ae-eb95a55f7110",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    butdanggolIdusNoeul: {
      title: "아이디어스: 붓당골제다 하동 유기농 수제홍차 노을향기",
      type: "public-store-page",
      url: "https://www.idus.com/v2/product/cbfb0e80-ed8b-4f25-9e52-9ecdecdc173a",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    butdanggolIdusHutgae: {
      title: "아이디어스: 붓당골제다 하동 헛개잎차",
      type: "public-store-page",
      url: "https://www.idus.com/v2/product/83cb1614-a2f4-42e9-afb1-f2e60f846630",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    butdanggolIdusSet: {
      title: "아이디어스: 붓당골제다 하동 가마솥수제차 선물세트",
      type: "public-store-page",
      url: "https://www.idus.com/v2/product/fd0caf12-8325-42cc-920a-e8ec446c13cc",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    butdanggolLinktree: {
      title: "붓당골제다 공식 Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/bdgtea",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jadriCafeShow2020: {
      title: "Cafe Show Seoul 2020: JDDE:LEE TEA STORY / 자드리 茶 이야기",
      type: "public-exhibitor-report",
      url: "https://eng.cafeshow.com/eng/brochure/CafeShow2020_Show%20Report.pdf",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jadriCafeShow2019: {
      title: "Cafe Show Seoul 2019: JDDE:LEE TEA STORY / Black Tea",
      type: "public-exhibitor-page",
      url: "https://eng.cafeshow.com/eng/cafeshow/result2019_comp.asp?fst_name=J",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jeonghoyoKnnews: {
      title: "경남신문: 임만재 도예가와 김해 정호요",
      type: "public-news",
      url: "https://www.knnews.co.kr/news/articleView.php?idxno=1482255",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    jeonghoyoProfile: {
      title: "공개 도예 프로필: 정호요 임만재",
      type: "public-profile",
      url: "https://spp5908.tistory.com/6241",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeinyoSeokuDawan: {
      title: "석우연담: 예인요 임용택 다관·차도구 전시",
      type: "public-review",
      url: "https://seoku.tistory.com/1180",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeinyoDawanProfile: {
      title: "공개 도예 프로필: 예인요 임용택 다관·개완·차통",
      type: "public-profile",
      url: "https://spp5908.tistory.com/9770",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    yeinyoGimhaeNews: {
      title: "김해뉴스: 예인요 임용택 다관·찻잔·사발",
      type: "public-news",
      url: "https://www.gimhaenews.co.kr/news/articleView.html?idxno=16712",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangjeyoProfile: {
      title: "공개 도예 프로필: 이기호 - 황제요",
      type: "public-profile",
      url: "https://spp5908.tistory.com/7471",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    hwangjeyoWhabaeg: {
      title: "화백신문: 황제요 이기호 끽다거 경상북도 공예품대전 대상",
      type: "public-news",
      url: "https://www.whabaeg.com/news/articleView.html?idxno=7759",
      capturedAt: "2026-05-27T00:00:00+09:00",
    },
    dureyeonTeafair2025: {
      title: "2025 부산 차·공예박람회 참가업체: 연으로 만드는 힐링푸드 두레연 구품당",
      type: "public-exhibitor-page",
      url: "https://teafair.co.kr/board/view.php?c1=0&c2=0&c3=0&c4=0&c5=0&id=sub42&key=&opt=&p=0&uniq=93",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dureyeonSbs: {
      title: "SBS 모닝와이드: 두레연 구품당",
      type: "public-broadcast-page",
      url: "https://programs.sbs.co.kr/programTemplate/amp/vod/toyomorning/22000035894",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dureyeonSportsSeoul: {
      title: "스포츠서울: 두레연 건강 차·연 가공식품 소개",
      type: "public-news",
      url: "https://www.sportsseoul.com/news/read/1448630",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dureyeonMdJournalAnniv: {
      title: "엠디저널: 두레연 10주년 전병덕 대표 인터뷰",
      type: "public-news",
      url: "https://www.mdjournal.kr/news/articleView.html?idxno=41081",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dureyeonPopup2026: {
      title: "팝가: 두레연 향기백련 연심차 팝업",
      type: "public-popup-page",
      url: "https://popga.co.kr/popup/6619",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dureyeonReviewYeonsimcha: {
      title: "공개 블로그 후기: 연심차 두레연",
      type: "public-review",
      url: "https://simple-homecooker.tistory.com/entry/%EC%97%B0%EC%8B%AC%EC%B0%A8-%EB%91%90%EB%A0%88%EC%97%B0",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ongkeussiTeafair2025: {
      title: "2025 부산 차·공예박람회 참가업체: 자연으로 옹크씨",
      type: "public-exhibitor-list",
      url: "https://teafair.co.kr/board/?id=sub42&key=&opt=&p=3",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ongkeussiOfficial: {
      title: "옹크씨 공식 사이트",
      type: "official-site",
      url: "http://ongk-c.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ongkeussiOfficialIntro: {
      title: "옹크씨 공식 소개: 천연염색 의류·소품 제작",
      type: "official-site",
      url: "http://www.ongk-c.com/content/01introduction/01_01.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ongkeussiAvingMegashow: {
      title: "AVING: 옹크씨 천연재료 염색 의상",
      type: "public-news",
      url: "https://kr.aving.net/news/articleView.html?idxno=1412858",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ongkeussiBexpo2025: {
      title: "서울국제불교박람회 참가업체: 옹크씨 천연염색 의류·소품",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/exhibition/2025corp2?ca_id=&page=1&wm_category1=04&wm_keyword=&wm_option=wm_company_name",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    uksanDataGoKr: {
      title: "공공데이터포털 한국도자재단 요장 현황: 욱산도헌",
      type: "public-data-page",
      url: "https://www.data.go.kr/data/15062863/fileData.do",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    uksanKimSeokman: {
      title: "공개 도예 프로필: 욱산 김석만",
      type: "public-profile",
      url: "https://spp5908.tistory.com/10415",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    uksanTeaunionExhibition: {
      title: "한국차인연합회: 김석만 세 번째 차도구전",
      type: "public-exhibition-page",
      url: "http://www.teaunion.or.kr/bbs/board.php?bo_table=event&wr_id=161",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    uksanTeaunionAward: {
      title: "한국차인연합회: 명다기 품평대회 수상자명단",
      type: "public-award-page",
      url: "http://www.teaunion.kr/bbs/board.php?bo_table=event_teacup&wr_id=1",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hwangseonhoeJinju: {
      title: "진주시 관광: 황선회도방",
      type: "public-local-profile",
      url: "https://www.jinju.go.kr/02234/02351/04516.web",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hwangseonhoeHaenamAward: {
      title: "월간도예: 제6회 해남차도구전국공모전 황선회 대상",
      type: "public-news",
      url: "https://www.cerazine.co.kr/m/view.php?idx=32470",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    moeulTeaCulture2024: {
      title: "2024 국제차문화대전 참가업체 소개: 모을 황선회도방",
      type: "public-exhibitor-page",
      url: "https://mccartny.net/894",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    simgokyoCbw: {
      title: "청백원: 심곡요 안주현",
      type: "public-product-page",
      url: "https://cbw.co.kr/category/%EC%8B%AC%EA%B3%A1%EC%9A%94-%EC%95%88%EC%A3%BC%ED%98%84/96/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    simgokyoTeapot: {
      title: "청백원: 심곡요 백자다관",
      type: "public-product-page",
      url: "https://cbw.co.kr/product/%EC%8B%AC%EA%B3%A1%EC%9A%94-%EB%B0%B1%EC%9E%90%EB%8B%A4%EA%B4%80-1-5-120ml/2062/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    simgokyoMiryang: {
      title: "밀양시 관광 공예품: 심곡요",
      type: "public-local-profile",
      url: "https://www.miryang.go.kr/tur/index.do?mnNo=50401030000",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonhwadobangOfficial: {
      title: "연화도방 공식몰",
      type: "official-store",
      url: "https://www.yeonhwadobang.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonhwadobangCup: {
      title: "연화도방 곡선 투광잔",
      type: "official-product-page",
      url: "https://www.yeonhwadobang.com/shop_view/?idx=4",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonhwadobangHtd: {
      title: "홈테이블데코페어 2025 참가 브랜드: 연화도방",
      type: "public-exhibitor-page",
      url: "https://www.hometabledeco.com/ko-kr/whats-on/_.html?page=2",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonhwadobangInstagram: {
      title: "연화도방 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/yeonhwadobang/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    umGisunTeaCulture2022: {
      title: "2022 국제차문화대전 참가기업: 엄기순 금속 전",
      type: "public-exhibitor-list",
      url: "https://jang1001.tistory.com/entry/2022%EB%85%84-%EC%A0%9C-19%ED%9A%8C-%EA%B5%AD%EC%A0%9C-%EC%B0%A8%EB%AC%B8%ED%99%94-%EB%8C%80%EC%A0%84%EC%A3%BC%EB%A7%90-%EC%A0%84%EC%8B%9C%ED%9A%8C-%EC%B6%94%EC%B2%9C",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    umGisunBexpo: {
      title: "서울국제불교박람회 참가기업: 엄기순",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/2025corp2?ca_id=01&page=2&wm_category1=01&wm_option=wm_company_name",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    umGisunRoyalTea: {
      title: "ROYAL&CO. 전시: 엄기순 금속공예가와 차도구",
      type: "public-exhibition-page",
      url: "https://royalx.kr/experience/exhibitions?seq=89",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gyomunOfficial: {
      title: "교문공방 공식 홈페이지",
      type: "official-site",
      url: "http://www.silvermade.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gyomunTvProfile: {
      title: "동네 한 바퀴 공개 정리: 교문공방 은주전자 명인",
      type: "public-tv-summary",
      url: "https://cheongchun.tistory.com/entry/%EB%8F%99%EB%84%A4-%ED%95%9C-%EB%B0%94%ED%80%B4-%EA%B5%AC%EB%A6%AC-%EC%9D%80%EC%A3%BC%EC%A0%84%EC%9E%90-%EB%AA%85%EC%9D%B8-%EA%B3%B5",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gyomunCraftAward: {
      title: "경기도 공예품 경진대회: 교문공방 엄영민 작가 대상",
      type: "public-news",
      url: "https://theleader.mt.co.kr/articleView.html?no=2018062814487824344&sec=",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    kimDonginKcdfShop: {
      title: "공예정원 온라인숍: 김동인 결함의기록 차도구",
      type: "official-store",
      url: "https://kcdfshop.kr/category/%EA%B9%80%EB%8F%99%EC%9D%B8/617/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    kimDonginKcdfNews: {
      title: "KCDF 윈도우갤러리 보도: 김동인 도자 참여",
      type: "public-news",
      url: "https://www.newsis.com/view/NISX20240112_0002590372",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jayeoneulDamdaCafeBakery: {
      title: "카페&베이커리페어 참가품목: 자연을담다",
      type: "public-exhibitor-page",
      url: "https://www.cafenbakeryfair.com/page/point2",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jayeoneulDamdaMegaShow: {
      title: "메가쇼 참가업체 파일: 자연을담다 궁중떡·수제 찹쌀약과·생강젤리",
      type: "public-exhibitor-list",
      url: "https://biz.megashow.co.kr/file2023/setecmegashow2023_booth.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jayeoneulDamdaHadongExpo: {
      title: "2023 하동세계차엑스포 참가품목: 자연을담다",
      type: "public-exhibitor-list",
      url: "https://foodwalker.tistory.com/entry/2023-%ED%95%98%EB%8F%99-%EC%84%B8%EA%B3%84%EC%B0%A8-%EC%97%91%EC%8A%A4%ED%8F%AC-%EC%A0%95%EB%B3%B4",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    mingyangHongcha: {
      title: "虎窝淘/淘宝 상품: 宜兴市茗扬天下茶业 양선홍차",
      type: "public-product-page",
      url: "https://tao.hooos.com/goods_40587798701.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    aramdeuriBizMegashow: {
      title: "BIZ메가쇼 참가업체: 아람드리 생강원액/홍도라지 농축액",
      type: "public-exhibitor-page",
      url: "https://biz.megashow.co.kr/shop/new_detail.php?uid=47162",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    aramdeuriBexpoDirectory: {
      title: "불교문화엑스포 디렉터리: 아람드리 대추차 단서",
      type: "public-exhibitor-report",
      url: "https://bexpodg.kr/files/2024_directory.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeowonBulgyoNews: {
      title: "주간불교: 인사동 전통차도구 전문점 여원",
      type: "public-news",
      url: "https://m.bulgyonews.co.kr/news/36254",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sangmyeongKcdf: {
      title: "KCDF 공예트렌드페어: 상명요 이효림",
      type: "public-exhibitor-page",
      url: "https://www.kcdf.kr/craftrendfair/trendFair/pavln/view.do?bsnsPssrpSn=94&menuNo=1100014&trendFairSn=101&type=01",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sangmyeongMagpie: {
      title: "맥파이앤타이거: 상명요 분청 차도구전",
      type: "public-exhibition-page",
      url: "https://magpie-and-tiger.com/product/%EC%A2%85%EB%A3%8C-%EC%83%81%EB%AA%85%EC%9A%94-%EB%B6%84%EC%B2%AD-%EC%B0%A8%EB%8F%84%EA%B5%AC%EC%A0%84-1128/219/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    suhyangBexpo2024: {
      title: "2024 불교박람회 부스리스트: 수향",
      type: "public-exhibitor-list",
      url: "https://www.bexpo.kr/regist/2024mapnlist3",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    suhyangBexpo2022Directory: {
      title: "2022 불교박람회 디렉터리: 수향 맞춤형 찻자리",
      type: "public-exhibitor-report",
      url: "https://bexpo.kr/files/ebook/2022_%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    silkroadTeaSiksin: {
      title: "식신: 실크로드티 티하우스/전통차",
      type: "public-place-review",
      url: "https://www.siksinhot.com/P/1671314",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    silkroadTeaDiningCode: {
      title: "다이닝코드: 실크로드티",
      type: "public-place-review",
      url: "https://www.diningcode.com/profile.php?rid=LQpHhrHMwEI3",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    silkroadTeaMotie: {
      title: "산업통상자원부 외국인투자기업정보: (주)실크로드티",
      type: "public-company-registry",
      url: "https://insc.kisc.org/motie/cor2/cor_view.jsp?corp_id=K0312865&k_name=%EC%A4%91%EA%B5%AD",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    silkroadTeaInstagram: {
      title: "실크로드티 - 희락 喜樂 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/cafe7542_silkroadtea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    silkroadTeaGongfuPost: {
      title: "실크로드티 Instagram: 조주공부차/숯불 게시물",
      type: "public-sns-post",
      url: "https://www.instagram.com/cafe7542_silkroadtea/reel/DTE-aSrEqdd/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jeonggaroiInstagram: {
      title: "정가로이 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/jeong_garoi_pottery/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jeonggaroiSmartStore: {
      title: "정가로이 공식 스마트스토어",
      type: "official-store",
      url: "https://smartstore.naver.com/jeonggaroi_pottery",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dodongyoOfficial: {
      title: "도동요 공식 사이트",
      type: "official-site",
      url: "https://www.dodongyo.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    myochaOfficial: {
      title: "묘차 공식몰",
      type: "official-store",
      url: "https://m.myocha.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingweiModoo: {
      title: "경위복차 공식 Modoo 페이지",
      type: "official-site",
      url: "http://jingweifutea2016.modoo.at/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ichiheonOfficial: {
      title: "이치헌도예연구소 흙이야기 공식몰",
      type: "official-store",
      url: "https://xn--hq1bk06af5av7ou3j.com/shopinfo/company.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongnamyoGallery: {
      title: "영남요 1730 공식 갤러리",
      type: "official-page",
      url: "https://baeksan-kimjungok.com/gallery/index.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    glimpieceOfficial: {
      title: "글림피스 공식 홈페이지",
      type: "official-site",
      url: "https://glimpiece.com/about",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    glimpieceShopAll: {
      title: "글림피스 공식몰: ALL 상품/구매평",
      type: "official-store",
      url: "https://glimpiece.com/ALL",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    glimpieceInstagram: {
      title: "글림피스 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/glimpiece_official/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dageonwonLocalView: {
      title: "로컬뷰: 다견원 일본 말차·말차도구 소개",
      type: "public-local-profile",
      url: "https://www.localview.co.kr/store/detail.asp?seq=104688837",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dageonwonDadobang: {
      title: "다도방 공개 상품 페이지: 일본말차 다견원",
      type: "public-product-page",
      url: "https://dadobang.net/product/%EC%B2%AD%EB%B2%BD-%EB%A7%90%EC%B0%A820g/25/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    teahouseNaniInstagram: {
      title: "티하우스 나니 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/teahousenani/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulKr: {
      title: "틴지오브소울 국내 공식몰",
      type: "official-store",
      url: "https://www.tingeofsoul.co.kr/139",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulGlobal: {
      title: "TINGE OF SOUL 글로벌 공식몰",
      type: "official-store",
      url: "https://tingeofsoul.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    amansiTabling: {
      title: "테이블링: 전주 아망시 티룸/리뷰/매장 정보",
      type: "public-review-page",
      url: "https://www.tabling.co.kr/place/677cd8c266de5f069895134b",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    amangsiOfficial: {
      title: "아망시 공식몰: 중국차·다기 상품",
      type: "official-store",
      url: "https://amangsi.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dongjeongFairEvent2026: {
      title: "동정문화 공식 페이지: 2026 차문화대전 방문 예약 이벤트",
      type: "official-event-page",
      url: "https://dongjeong.kr/tea-world-festival-2026-visit-event-guide/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    lankaOfficialAbout: {
      title: "랑카티스 공식 소개 페이지",
      type: "official-site",
      url: "https://lankateas.imweb.me/about",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemInstagram: {
      title: "포담 티하우스 Instagram formosatea27",
      type: "public-sns-profile",
      url: "https://www.instagram.com/formosatea27/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    fodamTeahouseInstagram: {
      title: "포담 티하우스 Instagram fodamteahouse",
      type: "public-sns-profile",
      url: "https://www.instagram.com/fodamteahouse/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemDcGachaEvent2026: {
      title: "디시인사이드 차·음료 갤러리: 포담티하우스 2026 차문화대전 가차뽑기 이미지 캡처",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=441194&page=1&t=cv",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemOfficialGachaInstagram: {
      title: "포담 티하우스 공식 Instagram: 2026 국제차문화대전 포담가챠뽑기",
      type: "public-sns-post",
      url: "https://www.instagram.com/fodamteahouse/p/DYtykDqytjH/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemDcGachaReview2025: {
      title: "디시인사이드 차·음료 갤러리: 포담 가챠 관련 후기/기대 언급",
      type: "public-community-post",
      url: "https://gall.dcinside.com/board/view/?id=tea&no=430616",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    podemWadizTurtleSnack: {
      title: "와디즈: 포담 티하우스 거북이 차과자",
      type: "public-product-page",
      url: "https://www.wadiz.kr/funding/97080",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dongjeongShop: {
      title: "동정보이차 공식 쇼핑몰",
      type: "official-store",
      url: "https://www.djpuer.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dongjeongChunchu: {
      title: "동정보이차 춘추차관 소개",
      type: "official-article",
      url: "https://dongjeong.com/%EB%8F%99%EC%A0%95%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EC%B6%98%EC%B6%94%EC%B0%A8%EA%B4%80/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    tingeOfSoulLinktree: {
      title: "틴지오브소울 공식 Linktree: 코엑스 티월드페스티벌 예고 및 상품 링크",
      type: "public-sns-link-page",
      url: "https://linktr.ee/tingeofsoul",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    aramdeuriTeaFairReview2025: {
      title: "2025 차문화대전 후기 색인: 아람드리 생강원액 구매 언급",
      type: "public-review-index",
      url: "https://www.keyzard.cc/ho_ooon/nb/223891297372",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeowonTripReview: {
      title: "Trip.com: 여원 갤러리 카페/차도구 후기",
      type: "public-review-page",
      url: "https://uk.trip.com/moments/detail/seoul-234-126630170/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    suhyangBexpoCompany: {
      title: "서울국제불교박람회: 수향 참가업체 페이지",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/main?cid=356",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    suhyangBexpo2025List: {
      title: "2025 서울국제불교박람회: 수향 참가 목록",
      type: "public-exhibitor-list",
      url: "https://www.bexpo.kr/exhibition/2025corp2?ca_id=01&wm_category1=01&wm_option=wm_company_name",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    mingyangLongjing: {
      title: "茗扬天下 龙井茶 상품 정보",
      type: "public-product-page",
      url: "https://www.jianke.com/product/782132.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jiushanGuchajuReview: {
      title: "古茶居: 九山之臻 2019 春 刮风寨 生茶饼 품평",
      type: "public-review-page",
      url: "https://m.guchaju.com/cha/2221.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jiushanShanghaiTeaExpo2020: {
      title: "搜狐: 2020 上海茶博会 九山之臻 참가 언급",
      type: "public-exhibitor-article",
      url: "https://www.sohu.com/a/420643987_120167466",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daeguGukjeTongsangTasting: {
      title: "공부차 시음회 후기: 대구 국제통상 참가 언급",
      type: "public-review-page",
      url: "https://www.gongboocha.com/bbs/board.php?bo_table=gongboo_3&wr_id=182",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    parannabieInstagram: {
      title: "파란나비공방 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/parannabie_studio/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    parannabieInpock: {
      title: "파란나비공방 인포크 링크",
      type: "public-sns-link-page",
      url: "https://link.inpock.co.kr/parannabie",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    parannabieIdus: {
      title: "아이디어스: 파란나비공방 판매 작품",
      type: "official-store",
      url: "https://www.idus.com/v2/artist/ddff5377-002f-4a1f-a0de-8628ae557c1e/product",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    parannabieYoutube: {
      title: "파란나비공방 YouTube",
      type: "public-sns-profile",
      url: "https://www.youtube.com/channel/UCVd2918EumYfTQUZrUZH23g",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasoldoyeInstagram: {
      title: "다솔도예 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/dasoldoye/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasolScentInstagram: {
      title: "다솔센트 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/dasol.scent/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasoldoyeYangsan: {
      title: "양산신문: 김해도자미술연구회 정기전 다솔도예",
      type: "public-news",
      url: "https://www.yangsanilbo.com/news/articleView.html?idxno=111690",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasoldoyeAjunews: {
      title: "아주경제: 김용덕 다솔도예 경남찻사발 공모전 특별상",
      type: "public-news",
      url: "https://www.ajunews.com/view/20160907145253349",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hyohyangyoInstagram: {
      title: "효향요 이인수 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/hyohyangyo/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hyohyangyoGongboochaTeapot: {
      title: "공부차: 효향요 이인수 무유 매화 다관",
      type: "official-product-page",
      url: "https://www.gongboocha.com/shop/item.php?it_id=1746497598",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hyohyangyoGongboochaCup: {
      title: "공부차: 효향요 이인수 분청 무유 찻잔",
      type: "official-product-page",
      url: "https://www.gongboocha.com/shop/item.php?it_id=1746593110",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chahyuInstagram: {
      title: "차휴 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/cha.hyu_tea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    drgpCheonggiOfficial: {
      title: "Dr.GP by 강남약방 공식몰: 청기백기",
      type: "official-product-page",
      url: "https://drgp.kr/product/%EC%B2%AD%EA%B8%B0%EB%B0%B1%EA%B8%B0%EB%A1%9C-%EB%A7%91%EC%9D%80-%EB%AA%A9-%EC%A7%80%ED%82%A4%EA%B8%B0/11/category/42/display/1/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    drgpInstagram: {
      title: "Dr.GP Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/dr.gp_offical/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cheonggibaekgiBabytimes: {
      title: "베이비타임즈: 사대천황 청기백기·울화찻차 프로모션",
      type: "public-news",
      url: "https://www.babytimes.co.kr/news/articleView.html?idxno=56934",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cheonggibaekgiFnnews: {
      title: "파이낸셜뉴스: 청기백기 출시 보도",
      type: "public-news",
      url: "https://www.fnnews.com/news/202012311358229072",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangOfficial: {
      title: "징광문화 공식 사이트",
      type: "official-site",
      url: "https://jingkwang.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangLeafTea: {
      title: "징광문화: 징광잎차 브랜드 페이지",
      type: "official-site",
      url: "https://jingkwang.co.kr/brand/tea.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangTeaProduct: {
      title: "징광문화: 징광잎차 제품소개",
      type: "official-product-page",
      url: "https://jingkwang.co.kr/brand/tea_product.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangInstagram: {
      title: "징광문화 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/wonjingkwang/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangDailian: {
      title: "데일리안: 징광잎차 자연야생차 소개",
      type: "public-news",
      url: "https://www.dailian.co.kr/news/view/53546",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingkwangHankyung: {
      title: "한국경제: 징광차 무공해 차 소개",
      type: "public-news",
      url: "https://www.hankyung.com/article/1999062101611",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasimheonInstagram: {
      title: "다심헌 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/dasimheon/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasimheonHyundai: {
      title: "현대백화점 문화센터: 다심헌 차 강좌",
      type: "public-class-page",
      url: "https://www.ehyundai.com/newCulture/CT/CT010100_V.do?crsCd=203019&crsSqNo=512&proCustNo=P03955224&sqCd=003&stCd=400",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasimheon10x10: {
      title: "텐바이텐: 서촌 다심헌 티클래스",
      type: "public-class-review",
      url: "https://www.10x10.co.kr/shopping/category_prd.asp?itemid=2394356",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasimheonTastingReview: {
      title: "공개 블로그: 다심헌 보이차 다회 리뷰",
      type: "public-blog-review",
      url: "https://blasius.tistory.com/m/174",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dasimheonSiksin: {
      title: "식신: 다심헌 장소 정보",
      type: "public-place-profile",
      url: "https://www.siksinhot.com/P/760021",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yinteaBusiness: {
      title: "尹茶人製茶廠 사업자 자료",
      type: "public-business-profile",
      url: "https://www.findcompany.com.tw/%E5%B0%B9%E8%8C%B6%E4%BA%BA%E8%A3%BD%E8%8C%B6%E5%BB%A0",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jeongyoLife114: {
      title: "Life114: 정요 도자기제품 제조/도매",
      type: "public-business-profile",
      url: "https://www.life114.co.kr/?M_SEQ=822309",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jeongyoCeramicFoundationRepost: {
      title: "한국도자재단 요장 현황 재게시: 정요",
      type: "public-business-profile",
      url: "https://kaienpolice.tistory.com/entry/%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B2%BD%EA%B8%B0%EB%8F%84-%ED%95%9C%EA%B5%AD%EB%8F%84%EC%9E%90%EC%9E%AC%EB%8B%A8-%EC%9A%94%EC%9E%A5-%ED%98%84%ED%99%A9",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    teaNews2026BoothImage: {
      title: "티뉴스: 제23회 국제차문화대전 부스배치도/참가업체 이미지",
      type: "public-event-image",
      url: "http://www.teanews.com/attach/20260526/1779764692.jpg",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yixingZhiliaCompany: {
      title: "顺企网: 宜兴知了文化创意有限公司 업체 정보",
      type: "public-business-profile",
      url: "https://www.11467.com/qiye/47068146.htm",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    eslockOfficial: {
      title: "에스락 공식 홈페이지",
      type: "official-site",
      url: "https://www.slock.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    eslockInstagram: {
      title: "에스락 S-lock 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/smart.slock/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nalbitMakefolio: {
      title: "Makefolio: 날빛 NALBIT 브랜드/상품",
      type: "public-brand-shop",
      url: "https://www.makefolio.co.kr/nalbit",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nalbitWooyeonmot: {
      title: "우연못: 날빛 하늘빛 숙우 상품",
      type: "public-product-page",
      url: "https://wooyeonmot.co.kr/product/16708cc1-d43c-4d9a-945d-d5ea2c6aee93",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nalbitTwl: {
      title: "TWL: 날빛 숙우 상품 목록",
      type: "public-product-page",
      url: "https://twl-shop.com/category/%EC%88%99%EC%9A%B0/1055/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    songhayoProfile: {
      title: "송하요 공식 프로필: 우상욱 작가/도예연구소",
      type: "official-profile",
      url: "http://songhayo.co.kr/page_pcVO38",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    songhayoOfficial: {
      title: "송하요 공식 사이트",
      type: "official-site",
      url: "http://www.songhayo.com/index.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    songhayoInstagram: {
      title: "송하요 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/songhayo/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jeongmokEbayChawan: {
      title: "eBay: Kim Jeongmok Korean Pottery Matcha Chawan",
      type: "public-resale-product-page",
      url: "https://www.ebay.ca/itm/376641972586",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ilyangTeaFlowerYes24: {
      title: "YES24: The Flower / 일양차문화연구원",
      type: "public-book-page",
      url: "https://www.yes24.com/product/goods/126807938",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    saniriLinktree: {
      title: "도자공방 산이리 공식 Linktree",
      type: "public-sns-link-page",
      url: "https://linktr.ee/saniri_ceramics",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    saniriYespark: {
      title: "예스파크: 산이리 도자공방",
      type: "public-place-page",
      url: "https://2000yespark.or.kr/intro_2022/intro.php?mode=view&page=1&sp=star&store_idx=218",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    bonidaMarketbz: {
      title: "MarketBz: 세라믹 보니다 사업자 정보",
      type: "public-business-profile",
      url: "https://marketbz.com/companyDetail/6461802338",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    bonidaInterview: {
      title: "Shoutout LA: Jinsoo Lee / Bonida ceramic teaware interview",
      type: "public-interview",
      url: "https://shoutoutla.com/meet-jinsoo-lee-ceramic-artist/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gahyunOfficial: {
      title: "가현아트 공식 홈페이지",
      type: "official-site",
      url: "https://www.gahyunart.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gahyunOhouse: {
      title: "오늘의집: GahyunArt 판화 작품 판매 목록",
      type: "public-store-page",
      url: "https://ohou.se/store/goods?query=%EA%B0%80%ED%98%84%EC%95%84%ED%8A%B8",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hadaTscentOfficial: {
      title: "TSCENT Hada 공식 소개",
      type: "official-site",
      url: "https://en.tscenthada.com/pages/about",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hadaTscentInstagram: {
      title: "TSCENT Hada 공식 Instagram",
      type: "public-sns-profile",
      url: "https://www.instagram.com/tscent_tea/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hadaTistoryReview: {
      title: "티스토리: 하다 2급 티 후기",
      type: "public-blog-review",
      url: "https://okionnie.tistory.com/48",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gyeonggiFlowerCafeShowDirectory: {
      title: "카페쇼 디렉토리: 경기한방꽃차협동조합",
      type: "public-exhibitor-page",
      url: "https://www.cafeshow.com/kor/directory/exhibitor_view.asp?idx=1517",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gyeonggiFlowerYonsei: {
      title: "연세대학교 미래교육원: 꽃차/한방꽃차 과정",
      type: "public-education-page",
      url: "https://go.yonsei.ac.kr/fro_end/html/dep_02/2110.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gongboochaParkDiningCode: {
      title: "다이닝코드: 공부차파크 과천 청계산점 후기",
      type: "public-review-page",
      url: "https://www.diningcode.com/profile.php?rid=3F9y6tcIaG2J",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    semocaKimDongin: {
      title: "서울공예박물관 전시: 김동인 結莟",
      type: "public-exhibition-page",
      url: "https://semocaexhibition.com/2024-08-ba-05-kim-dongin/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seoulCultureKimDongin: {
      title: "서울문화포털: 김동인 작가 인터뷰",
      type: "public-interview",
      url: "https://culture.seoul.go.kr/culture/culture/cultureImage/view.do?menuNo=200014&pageIndex=306&youtubeId=13422",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    donongOfficial: {
      title: "도농도예 공식 홈페이지",
      type: "official-site",
      url: "https://donongceramic.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    donongChuidasun: {
      title: "취다선: 도농도예 백유 열매 3인 다기 세트",
      type: "public-product-page",
      url: "https://www.chuidasun.com/product/TeaUtensilsSet_009-238-349-351-352",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    gojeonSeokuZisha: {
      title: "석우연담: 고전문화 자사호 전시 언급",
      type: "public-community-post",
      url: "https://seoku.tistory.com/728",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seasonSairoKtnews: {
      title: "한국섬유신문: 계절사이로 이오순 금침명인 인터뷰",
      type: "public-news",
      url: "https://www.ktnews.com/news/articleView.html?idxno=132491",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    seasonSairoSaramin: {
      title: "사람인: 계절사이로 기업정보",
      type: "public-business-profile",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/bVgyandBeldUMFNPRVFCb1p4WlRFUT09/company_nm/%EA%B3%84%EC%A0%88%EC%82%AC%EC%9D%B4%EB%A1%9C",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daelimOfficial: {
      title: "대림목공예 공식 홈페이지",
      type: "official-site",
      url: "https://dl.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    daelimAbout: {
      title: "대림목공예 회사/작업 소개",
      type: "official-profile",
      url: "https://dl.co.kr/shopinfo/about.html",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    skyFlowerAsiaNews: {
      title: "아시아뉴스통신: 꽃차 하늘바라기 대통령 표창 보도",
      type: "public-news",
      url: "https://m.anewsa.com/article_sub3.php?number=2479773",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongsanyoCategory: {
      title: "영산요 공식몰 상품 카테고리",
      type: "official-store",
      url: "https://yeongsanyo.com/category/%241/63",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongsanyoNongchaSet: {
      title: "영산요 공식몰: 농차 다기세트",
      type: "official-product-page",
      url: "https://yeongsanyo.com/product/%EB%86%8D%EC%B0%A8-%EB%8B%A4%EA%B8%B0%EC%84%B8%ED%8A%B8/42/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    doyougaYeojuNews: {
      title: "여주신문: 도유가 문찬석 여주시 도예명장",
      type: "public-news",
      url: "https://www.yeojunews.co.kr/news/articleView.html?idxno=44084",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    doyougaSsanggyList: {
      title: "쌍계명차: 도유가 명장 다기 상품 목록",
      type: "public-product-page",
      url: "https://m.sktea.com/product/list.html?cate_no=206",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    bitsalProfile: {
      title: "티스토리: 도자공간 빛살 임영주 작가",
      type: "public-profile",
      url: "https://spp5908.tistory.com/10413",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dneDdeulKcdf: {
      title: "KCDF 공예트렌드페어: 드내뜰",
      type: "public-exhibitor-page",
      url: "https://www.kcdf.kr/craftrendfair/trendFair/pavln/view.do?bsnsPssrpSn=197&menuNo=1100014&trendFairSn=505&type=01",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dneDdeulBrunch: {
      title: "브런치: 양구백자 화병 사용 후기",
      type: "public-blog-review",
      url: "https://brunch.co.kr/%40%40AcK/57",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    rakimoWello: {
      title: "Wello: 문경 라키모 체험공간 소개",
      type: "public-local-profile",
      url: "https://www.welfarehello.com/community/hometownNews/%EA%B2%BD%EB%B6%81-%EC%B2%B4%ED%97%98-%ED%96%A5%EB%8F%84%EC%B2%B4%ED%97%98%EC%9D%84-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%8A%B9%EB%B3%84%ED%95%9C-%EA%B3%B5%EA%B0%84-%EB%9D%BC%ED%82%A4%EB%AA%A8--c77f14e1-db44-4841-8da3-d09550a13fee",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    rakimoFestivalWello: {
      title: "Wello: 문경찻사발축제 라키모 차도구 언급",
      type: "public-local-post",
      url: "https://www.welfarehello.com/community/hometownNews/87692612-9dec-4f0e-b895-c0f37badb95f",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    maewonYespark: {
      title: "예스파크: 매원초가",
      type: "public-place-page",
      url: "https://www.2000yespark.or.kr/intro_2022/intro.php?mode=view&page=1&sp=sabujak&store_idx=76",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    modongTripinfo: {
      title: "Tripinfo: 모동도예 축제/작품 언급",
      type: "public-review-like-page",
      url: "https://www.tripinfo.co.kr/info.html?content_id=127619&content_type_id=12",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    moeul2024Review: {
      title: "티스토리: 2024 국제차문화대전 모을 황선회도방 언급",
      type: "public-blog-review",
      url: "https://honeybee-home.tistory.com/entry/2024-%EA%B5%AD%EC%A0%9C%EC%B0%A8%EB%AC%B8%ED%99%94%EB%8C%80%EC%A0%84-%EC%BD%94%EC%97%91%EC%8A%A4-%EC%B0%A8%EB%B0%95%EB%9E%8C%ED%9A%8C-%ED%9B%84%EA%B8%B0",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cbwMoomooyo: {
      title: "청백원: 무무요 이용무 상품 카테고리",
      type: "public-product-page",
      url: "https://cbw.co.kr/category/%EB%AC%B4%EB%AC%B4%EC%9A%94-%EC%9D%B4%EC%9A%A9%EB%AC%B4/173/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    doiminieMoomooyo: {
      title: "도이: 무무요 분청다관/꼬마잔 상품",
      type: "public-product-page",
      url: "https://doiminie.com/product/eff87d5a-ae5d-4aa2-8d64-e822272d16bc",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    muaeParisTea: {
      title: "Paris Tea Festival: Muae Tea 참가 정보",
      type: "public-exhibitor-list",
      url: "https://www.paristeafestival.com/en",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    muaeLinkedin: {
      title: "LinkedIn 공개 프로필: Muae Tea workshop 언급",
      type: "public-profile",
      url: "https://fr.linkedin.com/in/adayon",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    muyuTeaculture: {
      title: "월간 차문화: 무유다원 심상남 대표",
      type: "public-news",
      url: "https://www.teaculture.co.kr/news/articleView.html?idxno=1901",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    zentherapyAbout: {
      title: "젠테라피 공식 소개",
      type: "official-site",
      url: "https://zentherapy.co.kr/about/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    zenhealingshopOfficial: {
      title: "젠힐링샵 공식몰",
      type: "official-store",
      url: "https://zenhealingshop.co.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    zentherapyBexpo: {
      title: "서울국제불교박람회: 젠테라피 출품 정보",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jingweiBrunch: {
      title: "브런치: 경위복차 페어링 언급",
      type: "public-blog-review",
      url: "https://brunch.co.kr/%40%405AcO/75",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    kimcheonFnNews: {
      title: "파이낸셜뉴스: 김천방짜유기 백년소공인 선정",
      type: "public-news",
      url: "https://www.fnnews.com/news/202108191053394276",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nojeonCiteaPeople: {
      title: "CITEA PEOPLE: 노전요 공개 SNS 핸들",
      type: "public-newsletter",
      url: "https://stibee.com/api/v1.0/emails/share/wxmxtCCWYnBsyreM8r96DTQhx1fyWA4",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nojeonDirtyLetter: {
      title: "더티레터: 노전요 짜이컵 행사 소개",
      type: "public-newsletter",
      url: "https://stibee.com/api/v1.0/emails/share/MWozeMgcSZ3rzHO2fSmJXxGRqXgmoFg",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sangseonBexpo: {
      title: "서울국제불교박람회: 지리산 상선암차",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/home/info?cid=66",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sangseonProducts: {
      title: "서울국제불교박람회: 지리산 상선암차 출품상품",
      type: "public-product-page",
      url: "https://www.bexpo.kr/home/main?cid=66",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nubodBexpo: {
      title: "서울국제불교박람회: 누보도예",
      type: "public-exhibitor-page",
      url: "https://www.bexpo.kr/library/view?bo_table=05_01&idx=903&mode=view&page=4&syear=2019",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nubodBiz: {
      title: "BizKorea: 누보도예 업체 정보",
      type: "public-business-profile",
      url: "https://www.bizkorea.org/company/view.asp?SEQ=1004086",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    nubodAward: {
      title: "월간 차문화: 누보도예 해남전국차도구공모전 대상",
      type: "public-news",
      url: "https://www.teaculture.co.kr/news/articleView.html?idxno=1803",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dagyeonDadobangMatcha: {
      title: "다도방: 다견원 청벽 말차 상품",
      type: "public-product-page",
      url: "https://dadobang.net/product/%EC%B2%AD%EB%B2%BD-%EB%A7%90%EC%B0%A820g/25",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dagyeonJaokSencha: {
      title: "세경다도방: 다견원 일본 센차 상품",
      type: "public-product-page",
      url: "https://jaok.co.kr/product/%EB%8B%A4%EA%B2%AC%EC%9B%90-%EC%9D%BC%EB%B3%B8%EB%85%B9%EC%B0%A8-%EC%84%BC%EC%B0%A8-100g%EC%9E%8E%EC%B0%A8%EC%A0%84%EC%B0%A8/150",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dagyeonCoupangHoji: {
      title: "쿠팡: 다견원 일본 호지차 상품평",
      type: "public-store-review",
      url: "https://www.coupang.com/vp/products/179529991",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    bugwangCafeBakeryInstagram: {
      title: "카페&베이커리페어: 보성 부광녹차 Instagram 표기",
      type: "public-exhibitor-page",
      url: "https://www.cafenbakeryfair.com/shop_contents/myboard_read.htm?idx=740176&myboard_code=st_port2&myboard_idx=104501",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongcheonOfficialModoo: {
      title: "영천다원 공식 Modoo",
      type: "official-site",
      url: "https://ycdawon.modoo.at/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeongcheonBoseongExpo: {
      title: "보성세계차엑스포: 영천다원 판매 품목",
      type: "public-exhibitor-page",
      url: "https://www.bsworldteaexpo.kr/sales/ex_detail?ca_id=c0",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    unhaeOrganicCert: {
      title: "친환경인증관리정보시스템: 운해다원 유기농 차 인증 품목",
      type: "public-certification-page",
      url: "https://www.enviagro.go.kr/portal/info/Info_certifi_spe.do?s_std_cert_no=15800303",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sundawonKakao: {
      title: "보성녹차 선다원 Kakao Channel",
      type: "public-sns-profile",
      url: "https://pf.kakao.com/_xaUzxmM",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sundawonSsgSejakReview: {
      title: "SSG.COM: 선다원 세작 녹차 40g 구매평",
      type: "public-store-review",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000173807300",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sundawonMugwortOfficialReview: {
      title: "선다원 공식몰: 쑥차 30g 상품후기",
      type: "official-store-review",
      url: "https://m.sundawon.com/product/25%EB%85%84-%ED%96%87%EC%B0%A8%EC%91%A5%EC%B0%A8-30g%EC%82%B0%EC%86%8D%EC%97%90%EC%84%9C-%EC%97%AC%EB%A6%B0%EC%91%A5%EB%A7%8C-%EC%B1%84%EC%B7%A8/165/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    boseongJedaCconmaReview: {
      title: "꽃마USA: 보성제다 유기농 아름다운 보성녹차 리뷰",
      type: "public-store-review",
      url: "https://www.cconmausa.com/products/7597412646998",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    wondangNewsworker: {
      title: "뉴스워커: 보성원당제다원 우전·홍차·서리꽃99차 소개",
      type: "public-news",
      url: "https://www.newsworker.co.kr/news/articleView.html?idxno=10306",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cheonboFormayPdf: {
      title: "서울국제불교박람회 자료: 천보다원 FORMAY Single Estate Tea",
      type: "public-exhibitor-pdf",
      url: "https://bexpo.kr/superboard/data/siteconfig/2020111114352316050729230380.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cheonboAwardArticle: {
      title: "아시아경제: 천보다원 보성 발효차 품평대회 최우수상",
      type: "public-news",
      url: "https://cm.asiae.co.kr/article/2013062010322821169",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sumjinGwangyangTour: {
      title: "광양시 관광정보: 섬진다원 녹차·발효차 체험",
      type: "public-place-page",
      url: "https://gwangyang.go.kr/tour/gallery.es?act=view&bid=0008&list_no=11036&mid=a30102000000",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sumjinSejakHongchaReview: {
      title: "Daily Tearoom: 섬진다원 세작홍차 시음 기록",
      type: "public-blog-review",
      url: "https://dailytearoom.tistory.com/30",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sumjinBaekchaReview: {
      title: "Tistory: 섬진다원 백차우전 언급",
      type: "public-blog-review",
      url: "https://ohnsan.tistory.com/6109724",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    sumjinDiningCode: {
      title: "다이닝코드: 섬진다원 티코스 방문 리뷰",
      type: "public-review-page",
      url: "https://www.diningcode.com/profile.php?rid=MfGD01xZgjMs",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonwooOfficialShop: {
      title: "연우제다 공식몰",
      type: "official-store",
      url: "https://xn--2j1b547aqqaq9b.com/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonwooVivaArticle: {
      title: "브릿지경제: 연우제다 하동 전통 제다 소개",
      type: "public-news",
      url: "https://www.viva100.com/article/20250416500572",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    yeonwooSsgJungjakReview: {
      title: "SSG.COM: 연우제다 녹차 중작 80g 구매평",
      type: "public-store-review",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000098451625",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    cheongseokJoongdoRecognized: {
      title: "중도일보: 하동세계차엑스포 청석골감로다원 5종 인정상품",
      type: "public-news",
      url: "https://m.joongdo.co.kr/view.php?key=20220421010005196",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    wandoSegyeOolong: {
      title: "세계일보: 완도 청해진다원 우롱차·재래종 차나무 소개",
      type: "public-news",
      url: "https://www.segye.com/newsView/20180612000807",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    myeonggawonTabling: {
      title: "테이블링: 보이차전문점 명가원 장소 정보",
      type: "public-place-page",
      url: "https://www.tabling.co.kr/place/677cd2fd66de5f06988abc34",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    myeonggawonOrientea1998: {
      title: "오리엔티: 명가원 1998년 강성호 생차",
      type: "public-product-page",
      url: "https://orientea.co.kr/product/%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EB%AA%85%EA%B0%80%EC%9B%90-1998%EB%85%84-%EA%B0%95%EC%84%B1%ED%98%B8-%EC%83%9D%EC%B0%A8/258/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    myeonggawonOrientea1999: {
      title: "오리엔티: 명가원 1999년 숙차",
      type: "public-product-page",
      url: "https://orientea.co.kr/product/%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EB%AA%85%EA%B0%80%EC%9B%90-1999%EB%85%84-%EC%88%99%EC%B0%A8/260",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chawoorimYes24Book: {
      title: "YES24: 오래된미래 보이차",
      type: "public-book-page",
      url: "https://www.yes24.com/product/goods/125577052",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    chawoorimYes24Author: {
      title: "YES24: 이원종 저자 소개/차우림 운영",
      type: "public-author-page",
      url: "https://www.yes24.com/product/author/256840",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hanchawonCoupangMokdanCup: {
      title: "쿠팡: 한차원 목단 전통문양 도자기 찻잔",
      type: "public-product-page",
      url: "https://www.coupang.com/vp/products/7837333909",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hanchawonCoupangGyeongdeokSet: {
      title: "쿠팡: 한차원 경덕진 찻잔세트 6P",
      type: "public-product-page",
      url: "https://www.coupang.com/vp/products/7837275347",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hudainIncruit: {
      title: "인크루트: 인티맥스-휴다인 기업 정보",
      type: "public-company-page",
      url: "https://www.incruit.com/company/10318694/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    hudainCoupangTeaMug: {
      title: "쿠팡: 휴다인 이루다 뚜껑 머그컵 거름망 티머그",
      type: "public-product-page",
      url: "https://www.coupang.com/vp/products/8534735811",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ilgudaAllProducts: {
      title: "일구다 공식몰: 요산당 차·다기·답례품 상품",
      type: "official-store",
      url: "https://ilguda.com/60",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    kkomeCraftPdf: {
      title: "공예트렌드페어 자료: 꼬매 KKOME",
      type: "public-exhibitor-pdf",
      url: "https://www.baesejin.com/_files/ugd/20cabf_e125dd985ab740698534f47db26f62a8.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    naeunOfficial: {
      title: "나은갤러리 공식 사이트",
      type: "official-site",
      url: "https://www.naungallery.com/default/company/overview.php",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    naeunMirrorAving: {
      title: "AVING: 나은크래프트 차꽂 거울",
      type: "public-news",
      url: "https://kr.aving.net/news/articleView.html?idxno=177820",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    haesongHomify: {
      title: "Homify: 문재필 옻칠갤러리 해송",
      type: "public-profile",
      url: "https://www.homify.co.kr/professionals/56905",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    haesongDesignFestival: {
      title: "서울디자인페스티벌: 옻칠갤러리 해송",
      type: "public-exhibitor-page",
      url: "https://seoul.designfestival.co.kr/?p=15503",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    haesongIdusReview: {
      title: "아이디어스: 옻칠갤러리 해송 상품/리뷰",
      type: "public-store-review",
      url: "https://www.idus.com/v2/artist/ef292f42-c02d-461e-acec-aaf044201b49/product",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    borimBexpo2024Pdf: {
      title: "2024 불교문화엑스포 디렉토리: 보림원목공방",
      type: "public-exhibitor-pdf",
      url: "https://bexpodg.kr/files/2024_directory.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    boseongNaturalDyeSaramin: {
      title: "사람인: 보성천연염색협동조합 사업내용",
      type: "public-company-page",
      url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/R2ZvMk5jYk0yQXIzZk1Ecm1zQktwdz09/company_nm/%EB%B3%B4%EC%84%B1%EC%B2%9C%EC%97%B0%EC%97%BC%EC%83%89%ED%98%91%EB%8F%99%EC%A1%B0%ED%95%A9",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    aramdeuriOasisJuice: {
      title: "오아시스: 아람드리 감귤주스 상품평",
      type: "public-store-review",
      url: "https://www.oasis.co.kr/product/detail/3624?categoryId=207",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    aramdeuriSsgPlum: {
      title: "SSG.COM: 아람농장 아람드리 자두",
      type: "public-product-page",
      url: "https://www.ssg.com/item/itemView.ssg?itemId=1000229752013",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    andongGoodFarmCysoPropolis: {
      title: "사이소: 안동착한농장 프로폴리스 50cc",
      type: "public-product-page",
      url: "https://www.cyso.co.kr/shop/item.php?it_id=1570795947",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dooreyeonBexpo2025: {
      title: "불교박람회 2025: 두레연 구품당",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/exhibition/2025corp2?ca_id=&page=4&wm_category1=04&wm_keyword=&wm_option=wm_company_name",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dooreyeonWorldTeaExpo: {
      title: "월드티엑스포코리아: 두레연 구품당 품목",
      type: "public-exhibitor-page",
      url: "https://www.worldteaexpokorea.com/list/?bmode=view&idx=167659764",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    dooreyeonMd2025: {
      title: "엠디저널: 2025 국제차문화대전 두레연 참가",
      type: "public-news",
      url: "https://www.mdjournal.kr/news/articleView.html?idxno=41448",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    jayeoneulDamdaBexpoFood: {
      title: "불교박람회 식품관: 착한먹거리 자연을담다",
      type: "public-exhibitor-page",
      url: "https://bexpo.kr/exhibition/industry_corp?ca_id=0602",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    ochilchaeOpengo: {
      title: "오픈고: 옻칠채 사업자 정보",
      type: "public-company-page",
      url: "https://opengo.kr/5601fa8d0e887edf2cb190d7",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    warakDirectory2024: {
      title: "2024 불교문화엑스포 디렉토리: 와락공방",
      type: "public-exhibitor-pdf",
      url: "https://bexpodg.kr/files/2024_directory.pdf",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
    warakBrownthings2025: {
      title: "Brown Things: 와락공방 2025 국제차문화대전 소개",
      type: "public-blog",
      url: "https://book.brownthings.kr/",
      capturedAt: "2026-05-28T00:00:00+09:00",
    },
  };

  const VENDOR_INFO_OVERRIDES = {
    A6: {
      tags: ["#한국차", "#교육", "#문화단체"],
      products: ["차문화 단체 활동", "차생활문화", "차문화 교육/행사"],
      summary:
        "한국차인연합회 공식 홈페이지와 차생활문화대전 공개 자료에서 국내 차문화 단체 활동이 확인되어 한국차/차문화 교육·단체 계열로 분류했습니다.",
      sources: ["teaunionOfficial", "teaunionNaverTerms"],
      researchStatus: "source-backed",
    },
    "A7|(사)세계기독교차문화협회/ 일양차문화연구원 회원 티플라워(다화) 전시회": {
      tags: ["#한국차", "#교육", "#문화단체", "#대용차"],
      products: ["차문화 교육", "차문화 선교", "티플라워/다화 전시"],
      summary:
        "세계기독교차문화협회는 문화체육관광부 법인 현황과 공개 기사에서 차문화 교육/선교 단체로 확인되고, 일양차문화연구원은 차문화 도서 저자/연구원 정보가 확인되어 문화단체/교육/한국차 계열로 분류했습니다.",
      sources: ["worldChristianTeaMcst", "worldChristianTeaKmib", "ilyangTeaBook"],
      researchStatus: "source-backed",
    },
    "A48|(사)한국 싱잉볼 협회": {
      tags: ["#싱잉볼", "#명상", "#문화단체", "#교육"],
      products: ["싱잉볼", "사운드테라피", "명상 교육"],
      summary:
        "한국 싱잉볼 협회는 공개 기사에서 싱잉볼과 사운드테라피, 체험/교육 프로그램이 확인되어 싱잉볼/명상/교육 계열로 분류했습니다.",
      sources: ["koreanSingingBowlNews", "koreanSingingBowlEdaily"],
      researchStatus: "source-backed",
    },
    "A48|(주)젠테라피 네츄럴 힐링센터": {
      tags: ["#싱잉볼", "#명상", "#공예", "#교육"],
      products: ["싱잉볼", "사운드배스", "명상 클래스", "힐링 프로그램"],
      summary:
        "젠테라피 네츄럴 힐링센터는 공개 기사와 네이버 블로그에서 싱잉볼 사운드배스, 명상 클래스, 힐링 프로그램이 확인되어 싱잉볼/명상 계열로 분류했습니다.",
      sources: ["gentherapyNews", "gentherapyNaverBlog"],
      researchStatus: "source-backed",
    },
    A45: {
      tags: ["#중국차", "#보이차", "#다기", "#차도구"],
      products: ["보이차", "중국차", "철관음", "홍차", "국화차", "차도구"],
      summary:
        "투다헌 공식 사이트의 중국차·다기 정보, 불교박람회 출품 정보, 공개 방문 후기에서 보이차와 철관음·홍차·국화차, 차도구 취급이 확인되어 중국차/보이차/차도구 계열로 분류했습니다.",
      sources: ["tudahunOfficial", "tudahunBexpo", "tudahunBlog", "tudahunNaverBlog"],
      researchStatus: "source-backed+sns+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "보이차·철관음 등 시음/상담 언급",
          summary:
            "공개 박람회 방문 후기에서 투다헌 부스에서 보이차와 철관음, 홍차, 국화차를 보고 시음·상담한 경험이 확인됩니다. 반복 데이터는 아직 적어 단일 후기 근거로 낮은 신뢰도로 저장합니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["투다헌 보이차·철관음·홍차·차도구 박람회 후기"],
        },
        {
          sentiment: "positive",
          title: "차도구 구매처 언급",
          summary:
            "여러 박람회 후기에서 투다헌이 차도구를 다양하고 비교적 접근 가능한 가격대로 판매했다는 언급이 확인됩니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["박람회 차도구 후기", "차도구 구매 언급"],
        },
      ],
    },
    F3: {
      tags: ["#차도구", "#보관용기"],
      products: ["S-lock 진공밀폐용기", "원두/식품/차 보관용기"],
      summary:
        "Tea진공밀폐용기 에스락은 공식 홈페이지와 공식 Instagram에서 회전 진공 방식의 S-lock 보관용기, 원두 산패 방지 용도, 전시 참가 이력이 확인되어 차/원두 보관용 차도구·보관용기 계열로 분류했습니다.",
      sources: ["eslockOfficial", "eslockInstagram"],
      researchStatus: "source-backed+sns",
    },
    H16: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["紫砂制品", "공예품", "조각", "문화창의 디자인"],
      summary:
        "宜兴知了文化创意有限公司는 공개 사업자 자료에서 이싱 소재 문화창의 회사로 확인되며, 영업범위에 紫砂制品·공예품·조각 판매가 포함되어 자사/도예 기반 차도구·공예 계열로 분류했습니다. 제품별 소비자 리뷰나 공식 SNS는 아직 확인하지 못했습니다.",
      sources: ["yixingZhiliaCompany"],
      researchStatus: "source-backed-business-profile",
    },
    E4: {
      tags: ["#한국차", "#대용차"],
      products: ["수제꽃차", "블렌딩 꽃차"],
      summary:
        "경기한방꽃차협동조합은 카페쇼 공개 전시 정보와 수원문화재단 아카이브, 인스타그램 공개 프로필에서 꽃차/수제꽃차 활동이 확인되어 취급품목 기준 한국차, 대용차 계열로 분류했습니다.",
      sources: ["gyeonggiFlowerCafeShow", "gyeonggiFlowerSuwon", "gyeonggiFlowerInstagram"],
      researchStatus: "source-backed+sns",
    },
    H26: {
      tags: ["#공예", "#명상"],
      products: ["한지사 금침", "명상방석", "한지사 생활소품"],
      summary:
        "계절사이로는 공식 홈페이지/블로그, 공개 기사, 불교박람회 참가 정보에서 이오순 금침 명인의 한지사 금침, 명상방석, 섬유 생활소품이 확인되어 명상/공예 계열로 분류했습니다.",
      sources: ["seasonSairoTextile", "seasonSairoBexpo", "seasonSairoOfficial", "seasonSairoBlog"],
      researchStatus: "source-backed+sns",
    },
    A49: {
      tags: ["#한국차", "#교육", "#문화단체", "#다기", "#차도구"],
      products: ["차문화예절", "전통문화교육", "생활다기", "향도구", "차 상담"],
      summary:
        "원유전통예절문화협회/다림헌 공개 카페에서 차문화예절, 전통문화교육, 명품다기·생활다기, 향도구, 차 상담 활동이 확인되어 차문화 교육/다기·차도구 계열로 분류했습니다.",
      sources: ["wonyuDaumCafe"],
      researchStatus: "source-backed",
    },
    A12: {
      tags: ["#한국차"],
      products: ["무드를 즐기는 차", "명인신광수차 기반 제품"],
      summary:
        "무드를 즐기는차(moocha)는 카페&베이커리페어 공개 전시품 정보, 공식 스마트스토어, 네이버 블로그 공개 글에서 명인신광수차를 기반으로 한 차 제품/브랜드 소개가 확인되어 한국차 계열로 분류했습니다.",
      sources: ["moochaFairContest", "moochaSmartStore", "moochaNaverBlog"],
      researchStatus: "source-backed+official-store+sns",
    },
    A16: {
      tags: ["#한국차", "#교육", "#문화단체"],
      products: ["차문화콘텐츠 교육", "동서양 차문화 연구", "불교 차문화 연구"],
      summary:
        "동국대학교 불교대학원 공식 학과 소개에서 차문화콘텐츠학과가 한국 차문화를 포함한 동서양 차문화와 불교 차문화를 연구·교육하는 전공으로 확인되어 교육/문화단체/한국차 계열로 분류했습니다.",
      sources: ["donggukTeaContents"],
      researchStatus: "source-backed",
    },
    G17: {
      tags: ["#중국차", "#우롱차", "#차도구"],
      products: ["복숭아우롱차", "청차", "표일배"],
      summary:
        "공개 후기에서 2025년 국제차문화대전 구매품으로 宜兴永盛陶艺茗壶堂 복숭아우롱차와 표일배가 확인되어 취급품목 기준 중국차/우롱차와 차도구 계열로 분류했습니다.",
      sources: ["yixingYongshengPeachOolongBlog", "yixingYongshengFairPreview"],
      researchStatus: "source-backed+review",
    },
    H25: {
      tags: ["#중국차", "#다기", "#차도구", "#교육"],
      products: ["자사호", "중국 차 도구", "자사호 전시/특강"],
      summary:
        "월간 차문화 기사에서 고전문화 특별전이 중국 대표 차 도구인 자사호를 주제로 전시와 특강을 진행한 것으로 확인되어 중국차 다기/차도구 계열로 분류했습니다.",
      sources: ["gojeonCultureZisha"],
      researchStatus: "source-backed",
    },
    E23: {
      tags: ["#공예", "#목공", "#옻칠"],
      products: ["공예품", "기념품/장식품"],
      summary:
        "당근 동네업체와 소상공인 공개 자료에서 긍정공방이 공예품·기념품 판매 업체로 확인되어 공예/목공/옻칠 계열로 분류했습니다.",
      sources: ["geungjeongDaangn", "geungjeongCarmap"],
      researchStatus: "source-backed+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "공예품 완성도 긍정 언급",
          summary:
            "당근 공개 후기에서 '잘 만든다', '만족스럽다'는 취지의 짧은 평가가 확인됩니다. 리뷰 수가 적어 낮은 신뢰도로 저장합니다.",
          mentions: 2,
          confidence: "low",
          evidence: ["당근 동네업체 긍정공방 후기"],
        },
      ],
    },
    D33: {
      tags: ["#도예", "#공예"],
      products: ["도예공방", "도자 작품"],
      summary:
        "네이버 지도 공개 결과에서 기린공방이 도예공방으로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["girinNaverPlace"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "국제차문화대전 초대권 DM 발송",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D33",
          summary:
            "공식 Instagram에서 방문 예정자 중 예매를 못 한 사람에게 DM으로 초대권을 보내겠다는 안내가 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [{ label: "기린공방 초대권 안내", url: "https://www.instagram.com/ceramicstudio_girin/p/DYzJJQkifQa/" }],
        },
      ],
    },
    C14: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["도예 작품", "목다구 결합 도자", "찻그릇"],
      summary:
        "공개 블로그 글에서 노전요 가마 작업과 목다구에 도자를 얹은 전시 언급이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["nojeonyoKilnBlog", "nojeonyoTeawareBlog"],
      researchStatus: "source-backed",
    },
    F18: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["찻그릇", "5방색잔세트", "다기"],
      summary:
        "월간 차문화 기사와 김해분청도자전시판매관 공개 상품에서 다경요 김학기 도예가의 찻그릇 전시와 5방색잔세트가 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["dagyeongTeaculture", "dagyeongGimhaeProduct"],
      researchStatus: "source-backed",
    },
    E16: {
      tags: ["#도예", "#공예"],
      products: ["도자기", "공방 작업"],
      summary:
        "네이버 지도 공개 결과에서 다솜공방이 도자기 공방으로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["dasomNaverPlace"],
      researchStatus: "source-backed",
    },
    E28: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["흐름유 다관", "백자 잔", "찻그릇"],
      summary:
        "도동요 공식 사이트와 공개 블로그/네이버 카페 글에서 도동요 흐름유 다관과 김용석 작가 백자 잔이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["dodongyoOfficial", "dodongyoTeapotBlog", "dodongyoDawanCafe"],
      researchStatus: "source-backed+review",
    },
    D23: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["차그릇", "달항아리", "도자기"],
      summary:
        "도유가 스마트스토어 공개 설명에서 문찬석 여주시 도예명장 부부가 차그릇과 달항아리를 빚는 도예 브랜드로 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["doyougaSmartStore"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 D23 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D23",
          summary:
            "공식 Instagram에서 D홀 D23 부스 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "도유가 참가 안내", url: "https://www.instagram.com/doyouga_/reel/DY06ZyUTmjn/" }],
        },
      ],
    },
    B25: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["백자 찻잔세트", "찻잔", "받침"],
      summary:
        "일구다 공개 상품 페이지에서 도정요 백자 찻잔세트가 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["dojeongyoIlgudaCup"],
      researchStatus: "source-backed",
    },
    F28: {
      tags: ["#도예", "#공예"],
      products: ["핸드크래프트 세라믹", "도자 작품"],
      summary:
        "드내뜰 스마트스토어 공개 설명에서 handcrafted ceramic studio로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["dneDdeulSmartStore"],
      researchStatus: "source-backed",
    },
    E7: {
      tags: ["#차도구"],
      products: ["스마트 머그워머", "원형 머그워머", "온도 유지 차 가전"],
      summary:
        "국제차문화대전 공개 방문 후기에서 따티/뷰닉스테크의 스마트 머그워머와 원형 머그워머가 확인되어 차 음용 보조 도구 계열로 분류했습니다.",
      sources: ["ttatiExpoReview"],
      researchStatus: "source-backed+review",
    },
    A26: {
      tags: ["#도예", "#공예"],
      products: ["도자기", "도자기 제조"],
      summary:
        "네이버 지도 공개 결과에서 매원초가가 도자기제조 업체로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["maewonchogaNaverPlace"],
      researchStatus: "source-backed",
    },
    F25: {
      tags: ["#도예", "#공예"],
      products: ["도자기", "나무 결합 도자 작품"],
      summary:
        "114On과 공개 기사에서 모동도예가 경주 기반 도자기 제조/도예 작업 업체로 확인되고, 윤관영 작가의 도자기와 자연 목재 결합 작업이 소개되어 도예/공예 계열로 분류했습니다.",
      sources: ["modong114", "modongNewstown"],
      researchStatus: "source-backed",
    },
    B21: {
      tags: ["#다기", "#차도구", "#공예"],
      products: ["차 도구"],
      summary:
        "서울국제불교박람회 공개 출품 정보에서 몽탄갤러리의 출품품목이 차 도구로 확인되어 다기/차도구 계열로 분류했습니다.",
      sources: ["mongtanBexpo"],
      researchStatus: "source-backed",
    },
    F4: {
      tags: ["#대만차", "#우롱차"],
      products: ["차", "티푸드", "우롱차 밀크티 베이스"],
      summary:
        "묘차 공식몰, 네이버 지도, 국제차문화대전 방문 후기에서 우롱차 밀크티 베이스와 우롱차 시음 부스 언급이 확인되어 취급품목 기준 대만차/우롱차 계열로 분류했습니다.",
      sources: ["myochaOfficial", "myochaNaverPlace", "ttatiExpoReview"],
      researchStatus: "source-backed+official-store+review",
    },
    E13: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["찻그릇", "도예 작품", "도자기"],
      summary:
        "무무요 공식 사이트·스마트스토어와 월간 차문화 기사에서 이용무 도예가의 찻그릇 전시 맥락이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["moomooyoOfficial", "moomooyoSmartStore", "dagyeongTeaculture"],
      researchStatus: "source-backed+sns",
    },
    A11: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["흑토 무유찻잔", "무유찻잔", "핀칭 찻잔"],
      summary:
        "아이디어스 공개 상품과 공식 Instagram 프로필에서 무유장작가마 살래요의 흑토 무유찻잔, 무유다관, 장작가마 도예 작업이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["salraeyoIdusCup"],
      researchStatus: "source-backed",
    },
    A23: {
      tags: ["#옻칠", "#공예"],
      products: ["옻칠예술", "칠화", "조형작품", "옻칠 가구", "옻칠 수저/테이블웨어", "판재·삼베·난각 옻칠 작품"],
      summary:
        "문재필 옻칠갤러리/옻칠갤러리 해송은 공개 프로필, 디자인페스티벌, Instagram, 아이디어스 채널에서 옻칠예술·칠화·조형작품·옻칠 가구·수저/테이블웨어가 확인되고, 문재필은 충남 무형문화재 칠장으로 소개됩니다.",
      sources: ["moonJaepilBlog", "moonJaepilInstagram", "haesongHomify", "haesongDesignFestival", "haesongIdusReview"],
      researchStatus: "source-backed+sns+store-review",
    },
    D20: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["티 스트레이너", "민토 개완", "다구"],
      summary:
        "민토 최민록 공식 스마트스토어와 델픽 공개 상품/리뷰 페이지에서 Tea Strainer, 민토 개완, 다구류가 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["mintoSmartStore", "mintoDelphicStrainer"],
      researchStatus: "source-backed+official-store+review",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "차문화대전 모바일 초대권 신청",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D20",
          summary:
            "공식 Instagram에서 성함과 연락처를 DM으로 보내면 차문화대전 모바일 초대권을 제공한다는 안내가 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [{ label: "민토 모바일 초대권 안내", url: "https://www.instagram.com/ceraminto/p/DYzNSJGzHrA/" }],
        },
      ],
    },
    G24: {
      tags: ["#목공", "#공예"],
      products: ["목공예", "원목 공방 작업"],
      summary:
        "공개 사업자 정보에서 바이에드가(by Edgar)가 목공방으로 확인되어 목공/공예 계열로 분류했습니다.",
      sources: ["byEdgarMoneypin"],
      researchStatus: "source-backed",
    },
    F24: {
      tags: ["#도예", "#공예"],
      products: ["도자기 제조", "도예 작품"],
      summary:
        "네이버 지도 공개 결과에서 박달요가 도자기제조 업체로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["bakdalyoNaverPlace"],
      researchStatus: "source-backed",
    },
    E9: {
      tags: ["#도예", "#공예"],
      products: ["도자기", "도예 연구소 작업"],
      summary:
        "114On 공개 자료에서 백산도예연구소가 비내화 일반 도자기 제조업으로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["baeksan114"],
      researchStatus: "source-backed",
    },
    G26: {
      tags: ["#목공", "#공예"],
      products: ["국내산 원목 공예품", "전통 옻칠 목공예", "주장자 지팡이", "원목 생활소품"],
      summary:
        "서울국제불교박람회 공개 출품 페이지와 2024 디렉토리에서 보림원목공방의 40년 전통 국내산 원목, 정통 옻칠 제작·판매, 주장자 지팡이 세트 단서가 확인되어 목공/옻칠/공예 계열로 보강했습니다.",
      sources: ["borimBexpo", "borimBexpo2024Pdf"],
      researchStatus: "source-backed",
    },
    D18: {
      tags: ["#도예", "#공예"],
      products: ["도예공방", "도자 작품"],
      summary:
        "네이버 지도 공개 결과와 월간 차문화 기사에서 설도예공방 및 설도예 최기영 도예가의 찻그릇 전시 맥락이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["seoldoyeNaverPlace", "dagyeongTeaculture"],
      researchStatus: "source-backed",
    },
    D24: {
      tags: ["#도예", "#공예"],
      products: ["도예 작품", "공방 작업"],
      summary:
        "소랑요 공식 네이버 블로그가 확인되어 도예/공예 계열로 분류했습니다. 세부 제품 리뷰는 아직 공개 자료가 부족합니다.",
      sources: ["sorangyoBlog"],
      researchStatus: "source-backed+sns",
    },
    C24: {
      tags: ["#도예", "#공예"],
      products: ["무광백자", "도자 작품", "장작가마 작업"],
      summary:
        "공개 프로필에서 소산 한호현 작가와 소산도예연구소, 전통 장작가마와 무광백자 작업 이력이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["sosanTistory"],
      researchStatus: "source-backed",
    },
    F26: {
      tags: ["#도예", "#공예"],
      products: ["백자", "도자기"],
      summary:
        "공개 사업자 정보에서 소월백자가 전자상거래 소매업으로 확인됩니다. 제품명 기준 백자/도자 계열로 분류하되 세부 상품 리뷰는 추가 근거가 부족합니다.",
      sources: ["sowolbaekjaMoneypin"],
      researchStatus: "source-backed",
    },
    F13: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["다구세트", "실용 도자", "나뭇잎 3절접시"],
      summary:
        "김해분청도자전시판매관 공개 상품 설명에서 송화도예가 다구세트와 실용성 도자를 작업하는 것으로 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["songhwaGimhaeProduct"],
      researchStatus: "source-backed",
    },
    E8: {
      tags: ["#공예"],
      products: ["공방 작업", "공예품"],
      summary:
        "네이버 지도 공개 결과에서 수니공방이 공방으로 확인되어 공예 계열로 분류했습니다. 세부 제품군은 추가 근거가 부족합니다.",
      sources: ["suniNaverPlace"],
      researchStatus: "source-backed",
    },
    A18: {
      tags: ["#한국차", "#교육", "#문화단체"],
      products: ["선차 연구", "차문화 보존 활동"],
      summary:
        "공개 사업자 정보에서 사단법인 고려천태국제선차 연구보존회가 확인되어 선차 연구/보존 관련 문화단체로 분류했습니다.",
      sources: ["goryeoSeonchaMoneypin"],
      researchStatus: "source-backed",
    },
    A44: {
      tags: ["#중국차", "#우롱차", "#무이암차"],
      products: ["무이성 육계", "무이암차", "대홍포"],
      summary:
        "공개 시음 후기에서 승설재·무이성의 육계와 대홍포 시음/교육 맥락이 확인되어 취급품목 기준 중국차/무이암차/우롱차 계열로 분류했습니다.",
      sources: ["seungseoljaeReview"],
      researchStatus: "source-backed+review",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "무이암차 20종 심평·품다회, 할인·증정",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D A44",
          summary:
            "공식 Instagram에서 티월드 기간 무이암차 20종 심평과 품다회, 39세 이하 청년 특별가, 참가자 전원 오향대홍포 증정, 티월드 기간 신청자 과정 할인 안내가 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [
            { label: "승설재 할인/심평 안내", url: "https://www.instagram.com/p/DX0zIcugBxw/" },
            { label: "승설재 A44 부스 안내", url: "https://www.instagram.com/p/DY2ay_ZhxX5/" },
          ],
        },
      ],
    },
    D26: {
      tags: ["#도예", "#공예"],
      products: ["수작업 도자", "도예 작품"],
      summary:
        "이천 사기막골 도예촌 공개 소개에서 알천도예가 전통과 현대를 조화시키는 수작업 공방으로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["alcheonSagimakgol"],
      researchStatus: "source-backed+sns",
    },
    F21: {
      tags: ["#도예", "#공예"],
      products: ["언양요", "도자 작품"],
      summary:
        "네이버 지도와 공개 인터뷰에서 언양도예공방 및 언양요 작업이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["eonyangNaverPlace", "eonyangTistory"],
      researchStatus: "source-backed",
    },
    E10: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["다기 세트", "도예 작품"],
      summary:
        "김해분청도자전시판매관 전시 자료와 김해여성 도예가전 공개 글에서 여송도예의 다기 세트 및 도예 작품이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["yeosongGimhaeExhibition", "yeosongGimhaeWomen"],
      researchStatus: "source-backed",
    },
    F7: {
      tags: ["#도예", "#공예"],
      products: ["세라믹 제품", "스마트스토어 판매품"],
      summary:
        "비즈노 공개 사업자 정보에서 연세라믹(Yeon_ceramic)과 스마트스토어 정보가 확인되어 세라믹/공예 계열로 분류했습니다.",
      sources: ["yeonceramicBizno"],
      researchStatus: "source-backed",
    },
    D31: {
      tags: ["#도예", "#공예"],
      products: ["문경 도자기", "영남요 도예 작품"],
      summary:
        "영남요 1730 공식 사이트와 공식 갤러리가 확인되어 문경 도예/공예 계열로 분류했습니다.",
      sources: ["yeongnamyoOfficial", "yeongnamyoGallery"],
      researchStatus: "source-backed",
    },
    E17: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["모란박지문 다관", "다관", "찻그릇"],
      summary:
        "네이버 카페 다완사랑 공개 글에서 예인요 이미진 작가의 모란박지문 다관 구입/사용 후기가 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["yeinyoDawanCafe", "dagyeongTeaculture"],
      researchStatus: "source-backed+review",
    },
    H4: {
      tags: ["#한국차", "#중국차", "#백차", "#우롱차"],
      products: ["만수가 만든 차 백차", "만수가 만든 차 백우롱"],
      summary:
        "예평 공식 사이트와 공식 SNS 채널에서 차와 공간, 문화 경험을 제안하는 브랜드 설명과 '만수가 만든 차' 백차·백우롱 상품이 확인되어 취급품목 기준 한국차/중국차/백차/우롱차 계열로 분류했습니다.",
      sources: ["yepyeongOfficial", "yepyeongKoreanTea", "yepyeongInstagram", "yepyeongKakao", "yepyeongYoutube"],
      researchStatus: "source-backed+sns",
    },
    C20: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["개완", "다관", "잔", "차탁", "찻그릇"],
      summary:
        "오름오르다 窯_그릇숨 공식 블로그와 스마트스토어 공개 설명에서 개완·다관·잔·차탁을 다루는 찻그릇 브랜드로 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["oreumoreudaBlog", "oreumoreudaSmartStore"],
      researchStatus: "source-backed+sns",
    },
    A34: {
      tags: ["#옻칠", "#공예"],
      products: ["옻칠 공예품", "생활 공예품"],
      summary:
        "서울카페쇼 2022·2023 참가 정보와 공개 사업자 정보에서 옻칠채 업체명과 인터넷 판매 사업자 정보가 확인되어 옻칠/공예 계열로 분류했습니다. 세부 상품 리뷰는 아직 확인되지 않았습니다.",
      sources: ["ochilchaeCafeShow2022", "ochilchaeCafeShow2023", "ochilchaeOpengo"],
      researchStatus: "source-backed",
    },
    A35: {
      tags: ["#목공", "#공예", "#차도구"],
      products: ["원목 차탁", "차반", "찻통", "다구보관함", "다관보관함", "다하/차시/차칙", "다식접시", "원목 트레이", "원목 소품"],
      summary:
        "와락공방은 공개 사업자 정보와 2024 디렉토리에서 원목 차탁, 차반, 찻통, 다구/다관보관함, 다하·차시·차칙, 다식접시 등 차도구와 원목 생활소품 제작이 확인되어 목공/차도구 계열로 보강했습니다.",
      sources: ["warakMoneypin", "warakExhibitionReview", "warakDirectory2024", "warakBrownthings2025"],
      researchStatus: "source-backed+review",
    },
    D21: {
      tags: ["#도예", "#공예"],
      products: ["달항아리", "장작가마 도예", "도자 작품"],
      summary:
        "밀양시 공개 블로그에서 우곡요 이종태 작가와 장작가마, 달항아리 작업이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["ugokyoMiryangBlog"],
      researchStatus: "source-backed",
    },
    F8: {
      tags: ["#도예", "#공예"],
      products: ["세라믹 제품", "생활 도자"],
      summary:
        "우기세라믹 공식 사이트와 About us 공개 페이지가 확인되어 세라믹/생활도자 공예 계열로 분류했습니다.",
      sources: ["woogiOfficial", "woogiAbout"],
      researchStatus: "source-backed",
    },
    E11: {
      tags: ["#도예", "#공예"],
      products: ["도예 작품", "도자문양 작품", "방울소리잔"],
      summary:
        "아이디어스 작가 페이지, 공개 기사, Process K 공개 영상 정보에서 우림도예 판매 작품, 백년소공인 선정 이력, 공식 홈페이지/Instagram 연결이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["urimIdus", "urimArticle", "urimProcessKProfile"],
      researchStatus: "source-backed+sns",
    },
    E3: {
      tags: ["#다식", "#전통디저트", "#교육"],
      products: ["다식", "화과자", "화과자 클래스"],
      summary:
        "이아뜰리에 공식 블로그와 차닉골 카페 공개 글에서 다식 전문 업체 및 화과자 수업/브랜드 활동이 확인되어 다식/전통디저트/교육 계열로 분류했습니다.",
      sources: ["eatelierBlog", "eatelierTeaFairCafe"],
      researchStatus: "source-backed+sns+review",
    },
    F23: {
      tags: ["#도예", "#공예"],
      products: ["도예 작품", "흙이야기 도예공방 작업"],
      summary:
        "이치헌도예연구소 흙이야기 공식몰, 아이디어스, 공개 사업자 정보에서 도예공방 작업이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["ichiheonOfficial", "ichiheonIdus", "ichiheonBizno"],
      researchStatus: "source-backed+official-store",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "티월드 F23 부스 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D F23",
          summary:
            "공식 Instagram에서 티월드 F23 부스번호와 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "이치헌도예연구소 티월드 부스 안내", url: "https://www.instagram.com/chiheonpotter/p/DYzDR9HmbSm/" }],
        },
      ],
    },
    F32: {
      tags: ["#디자인", "#공예"],
      products: ["디자인 작업", "전시 디자인/공예 관련 작업"],
      summary:
        "공개 사업자 정보에서 HADA Design(하다디자인) 상호가 확인됩니다. 차/다기 세부 제품 근거는 부족하지만 전시 상호와 연결되는 디자인 업체로 확인되어 디자인/공예 계열로 분류했습니다.",
      sources: ["hadaDesignBiz"],
      researchStatus: "source-backed-limited",
    },
    F9: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["숙우", "차합", "말차합", "작은 찻잔", "수공예 도자기"],
      summary:
        "원본 업체명은 '달빛'으로 입력되어 있었지만, 부스목록 이미지와 공개 상품 페이지에서 F9는 '날빛'으로 확인됩니다. Makefolio/TWL/우연못 공개 상품에서 숙우, 둥근 차합, 말차합, 작은 찻잔 등 도자 차도구가 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      sources: ["teaNews2026BoothImage", "nalbitMakefolio", "nalbitWooyeonmot", "nalbitTwl"],
      researchStatus: "source-backed+name-corrected+product-page",
    },
    E29: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["다기", "차도구", "도자 작품", "송하요 도예연구소"],
      summary:
        "원본 입력의 '송향요'는 부스목록 이미지 재확인과 공식 사이트/Instagram 기준 '송하요'로 교정했습니다. 송하요 공식 프로필에서 우상욱 작가의 다기전, 공부차 청담 티하우스 초대전, 국제 TEA EXPO/부산국제 차·공예 박람회 참가 이력과 송하요 도예연구소가 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      sources: ["teaNews2026BoothImage", "songhayoProfile", "songhayoOfficial", "songhayoInstagram"],
      researchStatus: "source-backed+sns+name-corrected",
    },
    E14: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["김정목 말차 다완", "찻사발", "차도구"],
      summary:
        "정목요 공식 채널은 아직 확인하지 못했지만, 공개 리셀 상품 페이지에서 Kim Jeongmok 명의의 한국 도자 말차 다완/차도구 상품이 확인됩니다. 부스명 '정목요'와 작가명 매칭 가능성이 있는 제한 근거이므로 공식 정보가 아니라 한정 근거로 표시합니다.",
      sources: ["jeongmokEbayChawan"],
      researchStatus: "source-backed-limited-resale",
    },
    B6: {
      tags: ["#한국차", "#녹차", "#야생차", "#발효차", "#차도구"],
      products: ["징광잎차", "프리미엄 징광잎차", "징광온차", "프리미엄 온차", "징광무차", "돼지감자차", "징광옹기"],
      summary:
        "원본 OCR의 '징광요차'는 정확 일치 근거가 없고, 공식 사이트에서 보성 징광문화의 브랜드명이 '징광잎차'로 확인되어 교정했습니다. 징광다원 야생차밭, 친환경 재배, 전통 고온 덖음차, 징광온차/무차/옹기 제품군이 확인되어 한국차/녹차/발효차/차도구 계열로 분류했습니다.",
      sources: ["jingkwangOfficial", "jingkwangLeafTea", "jingkwangTeaProduct", "jingkwangInstagram", "jingkwangDailian", "jingkwangHankyung"],
      researchStatus: "source-backed+sns+name-corrected",
    },
    F10: {
      tags: ["#대용차", "#도라지차", "#전통차"],
      products: ["청기백기", "울화찻차", "싸바싸바 슬림애플컷", "스틱형 건강식품"],
      summary:
        "청기백기는 Dr.GP by 강남약방 공식몰에서 판매되는 스틱형 목 건강 콘셉트 제품으로 확인됩니다. 공식몰에는 상품후기 143건과 투맘쇼 협찬 문구가 확인되며, 보도자료에서는 청기백기·울화찻차 프로모션과 출시 주체 변화 맥락이 확인됩니다. 질병 치료 효능은 단정하지 않고 대용차/건강식품성 전통차 계열로만 분류했습니다.",
      sources: ["drgpCheonggiOfficial", "drgpInstagram", "cheonggibaekgiBabytimes", "cheonggibaekgiFnnews"],
      researchStatus: "source-backed+sns+store+review",
    },
    G25: {
      tags: ["#중국차", "#보이차", "#우롱차", "#홍차", "#녹차", "#백차", "#황차", "#말차", "#티클래스", "#교육"],
      products: ["티클래스", "중국차 원데이 클래스", "녹차", "백차", "황차", "오룡차", "홍차", "보이생차", "보이숙차", "말차", "다도구 실습"],
      summary:
        "원본 OCR의 '다심현.AFTR'은 현대백화점 강좌, 10x10 티클래스, 공개 리뷰와 Instagram 계정이 일치하는 '다심헌'으로 교정했습니다. 서촌 차공간/티클래스에서 녹차·백차·황차·오룡차·홍차·보이생차·보이숙차·말차와 다도구 실습이 확인되어 중국차/보이차/티클래스 계열로 분류했습니다.",
      sources: ["dasimheonInstagram", "dasimheonHyundai", "dasimheon10x10", "dasimheonTastingReview", "dasimheonSiksin"],
      researchStatus: "source-backed+sns+class+review+name-corrected",
      incidentNotes: [
        {
          status: "class-policy-note",
          title: "클래스 환불 규정 확인",
          summary:
            "텐바이텐 다심헌 티클래스 페이지에서 신청 마감일 기준 환불 차감 및 당일/불참 환불 불가 규정이 확인됩니다. 구설수나 사건은 아니며, 수강형 상품 이용 시 확인할 운영 조건으로만 표시합니다.",
          confidence: "high",
          capturedAt: "2026-05-28T00:00:00+09:00",
          links: ["https://www.10x10.co.kr/shopping/category_prd.asp?itemid=2394356"],
        },
      ],
    },
    G18: {
      tags: ["#중국차", "#우롱차", "#녹차", "#홍차"],
      products: ["밀도우롱", "계화우롱", "모리화차/자스민녹차", "홍차", "소분 중국차"],
      summary:
        "공개 박람회 방문 후기에서 北京妙香缘贸易有限公司의 밀도우롱, 계화우롱, 자스민녹차, 홍차와 소분 판매가 확인되어 취급품목 기준 중국차/우롱차/녹차/홍차 계열로 분류했습니다.",
      sources: ["beijingMiaoxiang2025Review", "beijingMiaoxiang2024Review"],
      researchStatus: "source-backed+review",
    },
    G21: {
      tags: ["#대만차", "#우롱차", "#홍차"],
      products: ["대우령 고산우롱차", "삼림계 고산우롱차", "아리산 금훤고산우롱차", "동방미인", "일월담홍옥", "황금우롱"],
      summary:
        "공개 후기에서 尹茶人-YIN TEA가 대만 3대째 차농 브랜드로 소개되고 대우령·삼림계·아리산 금훤·동방미인·일월담홍옥, 황금우롱 등이 확인되어 취급품목 기준 대만차/우롱차/홍차 계열로 분류했습니다.",
      sources: ["yinTeaTaiwanReview", "yinTeaGoldenOolongReview"],
      researchStatus: "source-backed+review",
    },
    B26: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["찻잔", "개완", "도자 기물"],
      summary:
        "서울디자인페스티벌 공개 페이지, 공식 Instagram, 티앤크래프트페어 이벤트 글, 방문 후기에서 대광도요 찻잔과 개완, 도자 기물 사용감이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["daegwangDesignFestival", "daegwangInstagram", "daegwangTeaFairEvent", "daegwangReview"],
      researchStatus: "source-backed+sns+review",
    },
    A20: {
      tags: ["#도예", "#공예"],
      products: ["도예 작품", "공방 작업"],
      summary:
        "서울국제불교박람회 공개 출품 페이지와 동원공방 정혜주 작가 프로필성 공개 글이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["dongwonBexpo", "dongwonProfile"],
      researchStatus: "source-backed",
    },
    F16: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["개완", "티 팟", "세라믹 차도구", "하트 개완 세트", "풍선 개완 세트"],
      summary:
        "라세라미스타는 공식 Instagram, 공식 스마트스토어, 공예트렌드페어 공방관, 김해분청도자전시판매관 상품 페이지에서 세라믹 차도구와 티 팟/개완 계열 제품이 확인되어 도예/다기·차도구로 분류했습니다.",
      sources: ["laceramistaInstagram", "laceramistaSmartStore", "laceramistaKcdf", "laceramistaGimhaeTeapot", "laceramistaShopping", "laceramistaReviewHtd"],
      researchStatus: "source-backed+sns+store+review",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "차도구 시리즈 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D F16",
          summary:
            "공식 Instagram에서 차도구 시리즈로 국제차문화대전에 참가한다는 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "라세라미스타 참가 안내", url: "https://www.instagram.com/laceramista/reel/DWBFjV7E7l9/" }],
        },
      ],
      reviewThemes: [
        {
          sentiment: "screened",
          title: "세라믹 차도구/전시 후기 단서",
          summary:
            "공식/공공 상품 페이지에서 티 팟과 개완 계열 제품이 확인되고, 공개 전시 방문 후기에서 라세라미스타 소비품 언급이 확인됩니다. 반복 평가로 단정할 만큼의 독립 리뷰 수는 아직 부족합니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["라세라미스타 공식 Instagram", "김해분청도자전시판매관 티 팟", "부산 홈테이블데코페어 공개 후기"],
        },
      ],
    },
    A47: {
      tags: ["#한국차", "#교육", "#문화단체"],
      products: ["차문화 교육", "차문화 보급", "다례/차 생활 사업"],
      summary:
        "한국 차문화협회 공식 홈페이지와 주요사업 페이지에서 차문화 보급·교육 활동이 확인되어 한국차/교육/문화단체 계열로 분류했습니다.",
      sources: ["koreaTeaCultureOfficial", "koreaTeaCultureProjects"],
      researchStatus: "source-backed",
    },
    C4: {
      tags: ["#한국차", "#하동차", "#녹차", "#홍차", "#백차", "#황차", "#우롱차", "#대용차", "#청귤병차"],
      products: [
        "청귤병차",
        "구증구포 구기자차",
        "오미자차",
        "백차",
        "녹차",
        "황차",
        "우롱차",
        "홍차",
        "살구홍차&우롱차",
        "Korean Black & Chinese Milk Oolong Green Tangerine",
      ],
      summary:
        "하동아낙(LADY HADONG)은 공식 블로그와 Instagram에서 손으로 덖은 하동 백차·녹차·청차·황차·홍차, 청귤병차, 구기자차/오미자차가 확인됩니다. 해외 차 전문몰 Liquid Proust에서는 한국 홍차와 중국 밀크우롱을 청귤에 넣은 상품 및 구매평이 확인되어 한국차 중심 복합 차류와 대용차 계열로 보강했습니다.",
      sources: ["hadongAnakBlog", "hadongAnakInstagram", "hadongAnakCheonggyulTea", "hadongAnakApricotOolong", "hadongAnakLiquidProust"],
      researchStatus: "source-backed+sns+store-review",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "제23회 국제차문화대전 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C4",
          summary:
            "공식 Instagram에서 제23회 국제차문화대전 서울 코엑스 참가 언급이 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "하동아낙 참가 안내", url: "https://www.instagram.com/p/DYAsNr1k8I5/" }],
        },
      ],
    },
    A21: {
      tags: ["#도예", "#공예"],
      products: ["검은 토기", "토기 작품", "도자 작품"],
      summary:
        "공개 방문 후기에서 한국토기의 검은 토기 작품과 작가 설명, 차 한잔 권유 경험이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["koreanTogiReview"],
      researchStatus: "source-backed+review",
    },
    A3: {
      tags: ["#한국차", "#녹차", "#황차", "#대용차"],
      products: ["녹차", "쑥차", "황차"],
      summary:
        "단풍미인몰 공개 업체 페이지에서 현암제다 영농조합법인의 대표상품이 녹차·쑥차·황차로 확인되어 취급품목 기준 한국차/녹차/황차/대용차 계열로 분류했습니다.",
      sources: ["hyunamDanpoongMall", "hyunamDanpoongMallClean"],
      researchStatus: "source-backed",
    },
    H8: {
      tags: ["#중국차", "#보이차", "#전통찻집"],
      products: ["보이차", "전통차", "다관"],
      summary:
        "다이닝코드 공개 장소 정보에서 죽평 다관이 전통차·보이차 맛집으로 확인되어 취급품목 기준 중국차/보이차 계열로 분류했습니다.",
      sources: ["jukpyeongDiningCode"],
      researchStatus: "source-backed",
    },
    F27: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["분청퇴수기", "장작가마 기물", "차도구"],
      summary:
        "목련상점 공개 상품 페이지에서 진곡요 분청퇴수기와 장작가마 기물이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["jingokyoMokryun"],
      researchStatus: "source-backed",
    },
    D32: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["문경 도예", "찻그릇/도예 작품"],
      summary:
        "문경인터넷뉴스 기사에서 포암요 이동규 도예 초대전과 차문화공예연구가의 문경 백자/차인 선호 언급이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["poamyoNews"],
      researchStatus: "source-backed",
    },
    B18: {
      tags: ["#도예", "#공예"],
      products: ["이천 도자기", "황우요 도예 작품"],
      summary:
        "황우요 스마트스토어 공개 채널이 확인되어 이천 도자기/도예 계열로 분류했습니다. 세부 상품 리뷰는 추가 근거가 부족합니다.",
      sources: ["hwangwooyoSmartStore"],
      researchStatus: "source-backed-limited",
    },
    E12: {
      tags: ["#도예", "#공예"],
      products: ["도예 작품", "효원도예 판매품"],
      summary:
        "효원도예 스마트스토어 공개 채널이 확인되어 도예/공예 계열로 분류했습니다. 세부 제품 리뷰는 추가 근거가 부족합니다.",
      sources: ["hyowonSmartStore"],
      researchStatus: "source-backed-limited",
    },
    D17: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["개완", "도예 차도구", "공방 제작 기물"],
      summary:
        "산도방 공식몰과 개완 상품 페이지가 확인되어 도예/다기·차도구 계열로 분류했습니다. 공개 반복 리뷰는 아직 충분하지 않아 평가 요약은 보류합니다.",
      sources: ["sandobangStore", "sandobangGaiwan"],
      researchStatus: "source-backed+official-product",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "개완 상품 확인",
          summary:
            "공식몰 상품 페이지에서 산도방 개완이 확인됩니다. 공개 커뮤니티/블로그 반복 리뷰는 이번 확인 범위에서 충분히 확보하지 못했습니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["산도방 공식몰 개완 상품"],
        },
      ],
    },
    F11: {
      tags: ["#한국차"],
      products: ["덖음차", "무쇠솥 덖음차", "차나무 기반 차"],
      summary:
        "서울국제불교박람회 2026 온라인 전시관에서 무유다원이 '옛 방식으로 차를 덖는다'고 소개되고, 솔장작불과 무쇠솥 덖음 방식 및 차나무 재배 설명이 확인되어 취급품목 기준 한국차 계열로 분류했습니다. 부스명은 '무유'로 짧게 표기되어 있어 연결 신뢰도는 제한적으로 표시합니다.",
      sources: ["mooyudawonBexpo2026"],
      researchStatus: "source-backed-limited",
    },
    F12: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["수작업 차 도구", "생활 차 도구", "차도구 연구/제작"],
      summary:
        "서울국제불교박람회 2026 온라인 전시관에서 삼정공방이 전통 기법과 현대 디자인을 접목해 수작업 차 도구를 제작한다고 소개되어 도예/공예 계열로 분류했습니다.",
      sources: ["samjeongBexpo2026", "samjeongOrangePekoeCafe"],
      researchStatus: "source-backed+review",
    },
    F30: {
      tags: ["#공예", "#명상"],
      products: ["침향 합장주", "침향 염주", "침향 묵주", "향제품"],
      summary:
        "서울국제불교박람회 2026 온라인 전시관에서 침향나무가 침향 합장주, 염주, 묵주 및 향제품을 판매하는 업체로 확인되어 공예/명상 용품 계열로 분류했습니다.",
      sources: ["chimhyangnamuBexpo2026"],
      researchStatus: "source-backed",
    },
    C17: {
      tags: ["#도예", "#공예"],
      products: ["빛살 임영주 도자 작업", "도자기 작품"],
      summary:
        "아이디어스 공개 상품 페이지와 검색 결과에서 도자기마을(빛살)의 임영주 작가 도자 작업이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["bitsalIdus"],
      researchStatus: "source-backed-limited",
    },
    A32: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["키위새 개완", "백자 개완", "우기원 작가 다구"],
      summary:
        "델픽 공개 상품 페이지에서 우기원 작가의 키위새 개완이 1인용 다구로 확인되고, TWL 공개 카테고리에서도 우기원 작가 상품군이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["ugiwonDelphicGaiwan", "ugiwonTwlShop", "ugiwonGaiwanPurchaseBlog"],
      researchStatus: "source-backed+review",
    },
    D3: {
      tags: ["#한국차", "#녹차", "#황차"],
      products: ["황아차", "용강 녹차", "세작 녹차"],
      summary:
        "황아차 공개 Linktree와 네이버 쇼핑 공개 결과에서 황아차 및 세작 녹차 상품 노출이 확인되어 취급품목 기준 한국차/녹차/황차 계열로 분류했습니다.",
      sources: ["hwangachaLinktree", "hwangachaShoppingResult"],
      researchStatus: "source-backed-limited",
    },
    G7: {
      tags: ["#한국차", "#대용차", "#발효차", "#전통차"],
      products: [
        "법제차",
        "구증구포 구기자차",
        "생강숙성차",
        "돌배계피차",
        "호박차",
        "비트숙성차",
        "해풍쑥차",
        "유자병차",
        "연근발효차",
        "우엉숙성차",
        "맥문동발효차",
        "다향쌍화차",
        "홍도라지차",
        "연잎차",
        "작두콩차",
      ],
      summary:
        "원 표기 '다연채'는 공개 검색에서 차 관련 근거가 약했고, 2025 서울 티앤크래프트페어 공개 참가 업체 목록 및 다향연 공식몰에서 '다향연'이 확인되어 업체명을 다향연으로 교정했습니다. 공식몰 기준 왕군자 명인의 법제차 브랜드이며, 물·불·술·발효·흙 등 천연 법제법, 옹기발효차, 정기구독, 선물세트와 구증구포 구기자차·생강숙성차·돌배계피차·연근발효차·다향쌍화차 등 한국 전통차/대용차 제품군이 확인됩니다. 자체 리뷰 게시판에서 연근발효차와 구증구포 구기자차 후기도 확인했습니다.",
      sources: ["dahyangyeonTeaFairList", "dahyangyeonOfficialSite", "dahyangyeonReviewBoard"],
      researchStatus: "source-backed+official-store+official-review-board+sns",
    },
    B10: {
      tags: ["#녹차", "#말차"],
      products: ["말차가루", "호지차 말차가루", "고급말차"],
      summary:
        "디시인사이드 차·음료 갤러리 공개 글에서 소아다원 말차가루, 호지차 말차가루, 고급말차가 구매 후보로 언급되어 취급품목 기준 녹차/말차 계열로 분류했습니다. 보성몰 공개 상품 페이지에서 소아다원 말차/호지차/쑥차 제품명을 추가 확인했습니다.",
      sources: ["soidawonDcMatcha"],
      researchStatus: "source-backed-limited",
    },
    E30: {
      tags: ["#도예", "#공예"],
      products: ["가정용 도자기", "장식용 도자기", "도자 제품"],
      summary:
        "사람인 공개 기업 정보에서 수도예가 가정용 및 장식용 도자기 제조업으로 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["sudoYeSaramin"],
      researchStatus: "source-backed",
    },
    E22: {
      tags: ["#도예", "#공예"],
      products: ["프리미엄 식기", "도자 식기"],
      summary:
        "공개 그릇 브랜드 소개 글에서 청담요가 프리미엄 식기 브랜드로 언급되어 도예/공예 계열로 분류했습니다. 차도구 전용 제품 근거는 아직 부족합니다.",
      sources: ["cheongdamyoDishList"],
      researchStatus: "source-backed-limited",
    },
    A38: {
      tags: ["#천연염색", "#섬유공예", "#공예"],
      products: ["천연염색 스카프", "섬유 공예품", "이든갤러리 전시품"],
      summary:
        "사람인 공개 기업 정보에서 주앤안의 스카프 제작 및 천연염색이 확인되고, 핸드아티코리아 공개 부스 리스트에서 이든갤러리/주앤안 계열 전시가 확인되어 천연염색·섬유공예 계열로 분류했습니다.",
      sources: ["jueanSaraminNaturalDye", "jueanHandartyList"],
      researchStatus: "source-backed",
    },
    A25: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["생활자기", "차도구", "도자 소품"],
      summary:
        "우리문화신문 공개 글에서 트임(김진욱도예원)의 생활자기 작업이 소개되고, 당근 공개 프로필에서 차도구 판매/작업 맥락이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["teumKoyaArticle", "teumDaangn"],
      researchStatus: "source-backed+review",
    },
    B17: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["토정가 도자기", "이조요 도자 작품", "다기/찻그릇"],
      summary:
        "Life114 공개 업체 정보에서 토정가(구 이조요)가 도자기제품 제조/도매로 확인되고, 공개 작가 프로필 글에서 이조요/토정가 작업 이력이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["tojeonggaLife114", "tojeonggaTistory"],
      researchStatus: "source-backed",
    },
    B28: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["청자 다관", "호승", "푸른 봉오리 잔", "도자 작품"],
      summary:
        "위키트리 기사에서 한세은 작가의 청자 다관과 호승 작품 수상 이력이 확인되고, 공개 상품 페이지에서 한세은/진세라믹 잔 상품이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["hanseeunWikitreeCheongja", "hanseeunWishbucketCup"],
      researchStatus: "source-backed",
    },
    B3: {
      tags: ["#한국차", "#녹차"],
      products: ["녹차류", "천보다원 차 제품"],
      summary:
        "원 표기 '천보단원'은 공개 검색 결과와 공식 홈페이지 대조상 '천보다원'으로 교정했습니다. 천보다원 공식 홈페이지와 녹차류 상품 카테고리가 확인되어 취급품목 기준 한국차/녹차 계열로 분류했습니다.",
      sources: ["cheonboOfficial", "cheonboGreenTea"],
      researchStatus: "source-backed",
    },
    B11: {
      tags: ["#한국차", "#발효차"],
      products: ["다채 발효차", "한국 발효차"],
      summary:
        "티문화뉴스 공개 기사에서 세계차품평대회 홍차 부문에 다채의 다채 발효차가 수상작으로 언급되어 취급품목 기준 한국차/발효차 계열로 분류했습니다.",
      sources: ["dachaeTeacultureAward"],
      researchStatus: "source-backed",
    },
    H22: {
      tags: ["#천연염색", "#공예", "#교육", "#문화단체"],
      products: ["천연염색", "쪽빛 염색", "체험 프로그램"],
      summary:
        "공개 기사와 사업자 정보에서 청도군 천연염색연구회가 천연염색 체험 프로그램 교육을 진행한 단체로 확인되어 천연염색/공예/교육 계열로 분류했습니다.",
      sources: ["cheongdoNaturalDyeNews", "cheongdoNaturalDyeBiz"],
      researchStatus: "source-backed",
    },
    D30: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["파란찻사발", "도자 작품", "찻사발"],
      summary:
        "공개 블로그 글에서 청림도요 김학재 작가와 파란찻사발 등 작품 언급이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["cheongrimReview"],
      researchStatus: "source-backed+review",
    },
    B19: {
      tags: ["#도예", "#공예"],
      products: ["모던 청자", "청자 도자 작품"],
      summary:
        "디자인프레스 공개 글에서 청자 더공유가 모던 청자를 빚는 브랜드로 소개되어 도예/공예 계열로 분류했습니다.",
      sources: ["theouDesignpress"],
      researchStatus: "source-backed",
    },
    C15: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["다관", "옻칠 다관", "개완", "숙우"],
      summary:
        "청백원 상품 카테고리와 공개 블로그 후기에서 청학도방 송춘호의 다관/찻자리 도구가 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["cheonghakCbw", "cheonghakTeawareBlog"],
      researchStatus: "source-backed+review",
    },
    C2: {
      tags: ["#한국차", "#녹차", "#세작", "#발효차", "#호지차", "#대용차", "#티백"],
      products: ["녹차 세작", "녹차 티백", "발효차", "호지차", "쑥차", "국화차", "구기자차", "보리순차", "매화꽃차"],
      summary:
        "연우제다는 공식몰과 공개 판매/기사 자료에서 녹차 세작, 녹차 티백, 발효차, 호지차, 쑥차, 국화차, 구기자차 등 하동 차 제품군이 확인되고 일부 공개 구매평도 확인되어 한국차/녹차/발효차/대용차 계열로 보강했습니다.",
      sources: ["yeonwooOfficialProduct", "yeonwooChaye", "yeonwooOfficialShop", "yeonwooVivaArticle", "yeonwooSsgJungjakReview"],
      researchStatus: "source-backed+store-review",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 C2 참가와 찻자리 예고",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C2",
          summary:
            "공식 Instagram에서 C2 부스 참가와 찻자리 예고가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "연우제다 C2 안내", url: "https://www.instagram.com/p/DY1EXrMGb2O/" }],
        },
      ],
    },
    D8: {
      tags: ["#한국차", "#녹차", "#발효차"],
      products: ["하동 녹차", "엽차", "발효차"],
      summary:
        "하동 휴심선차는 하동군 농특산물 정보와 불교박람회 참가 정보에서 하동 차류가 확인되어 한국차, 녹차/발효차 계열로 분류했습니다.",
      sources: ["hueSimHadong", "hueSimBexpo"],
      researchStatus: "source-backed",
    },
    D14: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차"],
      products: ["하동 녹차", "수제 하동홍차", "후발효 긴압차"],
      summary:
        "무애(MUAE TEA)는 공부차 공개 자료와 페이스북 공개 페이지에서 하동 차, 수제 홍차, 후발효 긴압차 단서가 확인되어 한국차/녹차/홍차/발효차 계열로 분류했습니다.",
      sources: ["muaeGongboocha", "muaeFacebook"],
      researchStatus: "source-backed+sns",
    },
    D12: {
      tags: ["#한국차", "#녹차"],
      products: ["하동 수제차", "녹차"],
      summary:
        "관아수제차는 하동군 공개 농특산물 정보에서 수제차 업체로 확인되어 취급품목 기준 한국차/녹차 계열로 분류했습니다.",
      sources: ["gwanaHadong"],
      researchStatus: "source-backed",
    },
    D11: {
      tags: ["#한국차", "#녹차"],
      products: ["한국 녹차", "차밭 생산 차류"],
      summary:
        "도재명차는 공개 기사와 LinkonBiz 전시 정보에서 차밭 기반의 한국 차류, 녹차 상품 단서가 확인되어 취급품목 기준 한국차/녹차 계열로 분류했습니다.",
      sources: ["dojaeBizw", "dojaeLinkonbiz"],
      researchStatus: "source-backed",
    },
    D15: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차", "#떡차"],
      products: ["하동녹차", "홍차", "떡차", "발효차"],
      summary:
        "금향다원은 공개 상품/기업 정보에서 하동 녹차와 발효차 제조, 떡차·홍차류 단서가 확인되어 한국차 중심의 녹차/홍차/발효차 계열로 분류했습니다.",
      sources: ["geumhyangEgnmall", "geumhyangSaramin"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 D15 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D15",
          summary:
            "공식 Instagram에서 야생차와 마심병차 준비 및 D15 부스 방문 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "금향다원 참가 안내", url: "https://www.instagram.com/geumhyang_tea/reel/DYuL8QHzbVv/" }],
        },
      ],
    },
    B16: {
      tags: ["#한국차", "#녹차", "#홍차", "#황차", "#발효차", "#떡차"],
      products: ["하동 녹차", "홍차", "황차", "후발효차", "감귤떡차"],
      summary:
        "효월은 공부차 공개 자료와 공개 상품 정보에서 하동 전통차, 후발효차, 청귤홍차·감귤떡차가 확인되어 한국차/발효차/홍차 계열로 분류했습니다.",
      sources: ["hyowolGongboocha", "hyowolGongboochaProduct"],
      researchStatus: "source-backed",
    },
    D6: {
      tags: ["#한국차", "#녹차", "#발효차"],
      products: ["하동 차", "발효차", "녹차"],
      summary:
        "삼신차는 하동군 공개 농특산물 정보와 하동세계차엑스포 공개 정리 자료에서 하동 차류와 발효차 전문 단서가 확인되어 한국차/발효차 계열로 분류했습니다.",
      sources: ["samsinHadong", "hadongExpoFoodwalker"],
      researchStatus: "source-backed",
    },
    D2: {
      tags: ["#한국차", "#녹차", "#홍차", "#대용차"],
      products: ["녹차", "홍차", "국화차"],
      summary:
        "곡천다원은 공개 업체 정보와 다이닝코드 공개 장소 정보에서 녹차, 홍차, 국화차 등 차 메뉴가 확인되어 한국차/녹차/홍차/대용차 계열로 분류했습니다.",
      sources: ["gokcheonFoodtalk", "gokcheonDiningcode"],
      researchStatus: "source-backed",
    },
    C16: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차"],
      products: ["녹차", "홍차", "발효차", "쑥차"],
      summary:
        "황매산다원 허굴산방은 한국차문화협회 공개 자료에서 녹차, 홍차, 발효차, 쑥차 등 다류 생산 단서가 확인되어 한국차/발효차 계열로 분류했습니다.",
      sources: ["hwangmaesanKoreatea"],
      researchStatus: "source-backed",
    },
    A28: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["도예 작품", "다기/찻잔"],
      summary:
        "귀단요 성탄송운은 불교박람회 참가 정보와 공예 참가 기사에서 도예/공예 출품 단서가 확인되어 다기·도예 계열로 분류했습니다.",
      sources: ["guidanyoBexpo", "guidanyoFairnews"],
      researchStatus: "source-backed",
    },
    F17: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["도예 작품", "찻잔"],
      summary:
        "김해요는 차비리치 공개 상품 정보에서 도예 작품 판매가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["gimhaeyoBeerich"],
      researchStatus: "source-backed",
    },
    B27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["도예 작품", "다기/찻잔"],
      summary:
        "도농도예는 불교박람회 참가 정보와 공예 참가 기사에서 도예 공방 출품 단서가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["donongBexpo", "guidanyoFairnews"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "2026 티월드페스티벌 B27 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D B27",
          summary:
            "공식 Instagram에서 2026 티월드페스티벌 D홀 B27 참가 해시태그 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "도농도예 B27 안내", url: "https://www.instagram.com/p/DY1BM0JoE-s/" }],
        },
      ],
    },
    F14: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["찻잔", "도예 작품"],
      summary:
        "가람도예는 차비리치 공개 상품 정보에서 찻잔/도예 상품이 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["garamBeerich"],
      researchStatus: "source-backed",
    },
    H11: {
      tags: ["#중국차", "#백차"],
      products: ["중국 백차", "덕화 백자호백차"],
      summary:
        "도우공방(덕화코리아)은 불교박람회/카페&베이커리페어 공개 참가 정보에서 덕화코리아 차류와 백자호백차 단서가 확인되어 취급품목 기준 중국차/백차 계열로 분류했습니다.",
      sources: ["dehwaBexpo", "dehwaCafeBakery"],
      researchStatus: "source-backed",
    },
    H15: {
      tags: ["#중국차", "#보이차", "#녹차", "#다기", "#차도구", "#대용차"],
      products: ["보이차", "녹차", "차와 다구", "이루다 뚜껑 머그컵 거름망 티머그", "차거름망", "차우림기", "화차/대용차 우림 도구"],
      summary:
        "휴다인/인티맥스-휴다인은 공개 기업 정보에서 차와 다구 판매전문점으로 확인되고, 쿠팡 판매 페이지에서 거름망 티머그·차우림기·전통차/대용차/화차 우림용 도구가 확인되어 중국차/차도구/대용차 계열로 보강했습니다.",
      sources: ["hudainBexpo", "hudainIncruit", "hudainCoupangTeaMug"],
      researchStatus: "source-backed+public-product",
    },
    D16: {
      tags: ["#차도구", "#공예"],
      products: ["나무 차도구", "차생활 도구"],
      summary:
        "차살림은 불교박람회 공개 참가 정보에서 나무로 만든 차도구/차생활 도구 단서가 확인되어 차도구/공예 계열로 분류했습니다.",
      sources: ["chalsalimBexpo"],
      researchStatus: "source-backed",
    },
    E1: {
      tags: ["#한국차", "#대용차"],
      products: ["꽃차", "체험농장 꽃차"],
      summary:
        "꽃차 하늘바라기는 공식온라인몰과 농사로 공개 체험농장 정보에서 꽃차 판매/체험 단서가 확인되어 취급품목 기준 한국차/대용차 계열로 분류했습니다.",
      sources: ["skyFlowerOfficial", "skyFlowerNongsaro"],
      researchStatus: "source-backed",
    },
    A33: {
      tags: ["#대용차"],
      products: ["프로폴리스 50cc", "천연벌꿀", "밤꿀", "야생화꿀"],
      summary:
        "안동착한농장은 사이소 공개 상품 정보에서 프로폴리스 50cc와 천연벌꿀/밤꿀/야생화꿀 제품군이 확인되어 차 대체 음용·건강 식품 성격의 대용차 계열로 분류했습니다.",
      sources: ["andongGoodFarmCyso", "andongGoodFarmCysoPropolis"],
      researchStatus: "source-backed",
    },
    A31: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["다기", "차도구", "도예 작품"],
      summary:
        "정가로이는 공개 기사와 공식 Instagram/스마트스토어에서 김길산 작가의 다기·차도구 전시 및 판매 단서가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["jeonggaroiDaeguNews", "jeonggaroiBusanNews", "jeonggaroiInstagram", "jeonggaroiSmartStore"],
      researchStatus: "source-backed+sns+store",
    },
    G2: {
      tags: ["#홍차", "#우롱차", "#중국차", "#밀크티", "#교육", "#행사이벤트"],
      products: ["수제 밀크티", "얼그레이두쫀쿠/얼쫀쿠", "Premium Milk Tea", "홍차", "우롱차", "허브차", "중국차", "티클래스"],
      summary:
        "티하우스 나니는 뽈레·다이닝코드·공식 Instagram에서 수제 밀크티, 홍차, 우롱차, 허브차, 중국차, 티클래스 운영 단서가 확인됩니다. 공식 Instagram에서 2026 국제차문화대전 G2 부스와 정산당 G3 연계 안내가 확인되어 행사 이벤트 태그도 보강했습니다.",
      sources: ["teahouseNaniPolle", "teahouseNaniDiningcode", "teahouseNaniInstagram", "teahouseNaniInstagram2026"],
      researchStatus: "source-backed+sns+review",
      fairEventStatus: "confirmed-official-sns",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "2026 국제차문화대전 G2 부스 참가 안내",
          status: "confirmed-official-sns",
          period: "2026-06-04 - 2026-06-07",
          location: "COEX Hall D G2",
          summary: "티하우스 나니 공식 Instagram 게시물에서 G2 부스, 정산당 G3와 함께 배치, 밀크티와 중국차를 한 자리에서 안내한다는 내용이 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [{ label: "티하우스 나니 Instagram 2026 국제차문화대전 게시물", url: "https://www.instagram.com/teahousenani/p/DYyalYZJiYh/" }],
        },
      ],
    },
    G5: {
      tags: ["#대용차", "#루이보스", "#우롱차", "#홍차"],
      products: [
        "플러피 클라우드 - Fluffy Cloud",
        "브리지 릴트 - Breezy Lilt",
        "글림스 피아바 - Glimpse Fiaba",
        "엑스프레소 엠버 - Xspresso Ember",
        "블렌딩 루이보스티",
        "민트·과일향 블렌딩",
        "커피향 블렌딩 티",
      ],
      summary:
        "원본 OCR/기존 입력의 '클림피스'는 공식 홈페이지와 Instagram 계정에서 확인되는 GLIMPIECE/글림피스로 교정했습니다. 공식몰 상품 목록에서 플러피 클라우드, 브리지 릴트, 글림스 피아바, 엑스프레소 엠버 4종이 확인되며, 상품 구매평에서 루이보스·히비스커스, 민트/과일향, 커피향 블렌딩 평가가 반복 확인되어 취급품목 기준 대용차와 일부 우롱차·홍차 계열로 분류했습니다.",
      sources: ["glimpieceOfficial", "glimpieceShopAll", "glimpieceInstagram"],
      researchStatus: "source-backed+corrected+official-store+reviews+sns",
    },
    D1: {
      tags: ["#한국차", "#녹차", "#홍차", "#황차", "#다기", "#차도구", "#대용차"],
      products: ["지리산 화개 녹차", "황차", "홍차", "요산당 차", "순수생 유자차", "1인 다기 백자 쾌객배", "개완/숙우/찻잔 세트", "단체/기업 답례품"],
      summary:
        "일구다&요산당은 공식몰과 요산당 링크트리에서 지리산 화개 차, 녹차·황차·홍차, 유자차, 1인 백자 쾌객배, 개완·숙우·찻잔 세트와 답례품이 확인되어 한국차/차도구/대용차 계열로 보강했습니다.",
      sources: ["ilgudaOfficial", "ilgudaShop", "yosandangLinktree", "ilgudaAllProducts"],
      researchStatus: "source-backed+sns",
    },
    A41: {
      tags: ["#천연염색", "#섬유공예", "#공예", "#문화단체"],
      products: ["천연염색 제품", "천연염색 한복", "야생화 공예", "규방/퀼트", "한지공예", "체험학습"],
      summary:
        "보성천연염색협동조합/자연담은 하늘수는 불교박람회와 기업정보에서 천연염색 제품, 천연염색 한복, 야생화, 규방, 퀼트, 한지공예, 체험학습이 확인되어 천연염색/섬유공예/문화단체 계열로 보강했습니다.",
      sources: ["boseongNaturalDyeBexpo", "boseongNaturalDyeSaramin"],
      researchStatus: "source-backed",
    },
    A42: {
      tags: ["#천연염색", "#섬유공예", "#공예"],
      products: ["천연염색 섬유제품", "생활소품"],
      summary:
        "천연염색 미주사랑은 불교박람회 공개 참가 정보에서 천연염색 제품 출품 단서가 확인되어 천연염색/섬유공예 계열로 분류했습니다.",
      sources: ["mijusarangBexpo"],
      researchStatus: "source-backed",
    },
    A40: {
      tags: ["#천연염색", "#섬유공예", "#공예"],
      products: ["현대 한복/의류", "천연염색 패션소품", "오방색 셔츠", "모란도 블라우스", "신사임당 초충도 셔츠", "조각보 블라우스"],
      summary:
        "꼬매/KKOME는 불교박람회·공예트렌드페어 자료에서 서울 종로구 기반 의류 브랜드로 확인되며, 현대 한복형 패션과 천연염색/오방색·모란도·초충도·조각보 계열 의류가 확인되어 섬유공예/천연염색 계열로 보강했습니다.",
      sources: ["kkomeBexpo", "kkomeCraftPdf"],
      researchStatus: "source-backed",
    },
    A39: {
      tags: ["#천연염색", "#섬유공예", "#공예"],
      products: ["감물염색 제품", "천연염색 섬유소품"],
      summary:
        "최도천연염색연구회 감물드리는 공개 참가 정보에서 청도 감물염색/천연염색 업체 단서가 확인되어 천연염색/섬유공예 계열로 분류했습니다.",
      sources: ["cheongdoNaturalDyeBexpo"],
      researchStatus: "source-backed",
    },
    A43: {
      tags: ["#천연염색", "#섬유공예", "#공예"],
      products: ["천연염색 제품", "섬유공예품"],
      summary:
        "풍과빛(청도군 천연염색 연구회)은 공개 참가 정보에서 청도 천연염색 연구회 계열 업체로 확인되어 천연염색/섬유공예 계열로 분류했습니다.",
      sources: ["cheongdoNaturalDyeBexpo"],
      researchStatus: "source-backed",
    },
    A14: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["백자 다관", "찻잔", "한국 차도구"],
      summary:
        "백자일상은 공개 상품 페이지에서 백자 다관, 호승, 한국 차도구와 작가/도예 상품 정보가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["baekjailsangTeut", "baekjailsangDoi"],
      researchStatus: "source-backed",
    },
    A24: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["도예 작품", "찻사발/다기"],
      summary:
        "경주 남촌도예는 공개 기사에서 경주 도예가 서무성의 도예 작업 단서가 확인되어 다기/도예/공예 계열로 분류했습니다.",
      sources: ["namchonKbmaeil"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "2026 국제차문화대전 초대권 DM 신청",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D A24",
          summary:
            "공식 Instagram 게시물에서 성함과 연락처를 DM으로 보내면 차문화대전 초대권을 안내한다는 내용이 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [{ label: "경주 남촌도예 Instagram 초대권 안내", url: "https://www.instagram.com/p/DY1YheaTD_5/" }],
        },
      ],
    },
    D25: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["문경 도자기", "찻사발/다기"],
      summary:
        "공림요는 문경 도자기협동조합 차문화대전 참가 기사에서 문경 도자기 업체로 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongCeramicTeaNews"],
      researchStatus: "source-backed",
    },
    C27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["문경 도자기", "찻사발/다기"],
      summary:
        "라키모는 문경 도자기협동조합 차문화대전 참가 기사와 강창성 도예가 공식 SNS 근거로 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongCeramicTeaNews"],
      researchStatus: "source-backed",
    },
    C28: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["문경 도자기", "찻사발/다기"],
      summary:
        "채담요는 문경 도자기협동조합 차문화대전 참가 기사에서 문경 도자기 업체로 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongCeramicTeaNews"],
      researchStatus: "source-backed",
    },
    C29: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["문경 도자기", "찻사발/다기"],
      summary:
        "봉정요는 문경 도자기협동조합 차문화대전 참가 기사에서 문경 도자기 업체로 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongCeramicTeaNews"],
      researchStatus: "source-backed",
    },
    D27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["문경 도자기", "찻사발/다기"],
      summary:
        "현암요는 문경 도자기협동조합 차문화대전 참가 기사에서 문경 도자기 업체로 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongCeramicTeaNews"],
      researchStatus: "source-backed",
    },
    C26: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["경북요 도자기", "찻사발"],
      summary:
        "문경 경북요는 공개 기사에서 문경 찻사발 공모전/도예 입상 단서가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["munkyeongTeaBowlNewsis"],
      researchStatus: "source-backed",
    },
    E24: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["백자 찻잔", "분청 조각 화병", "도예 작품"],
      summary:
        "도예명장2023-01호 영산요는 공식몰 공개 상품 정보에서 백자 세트 찻잔과 분청 조각 화병이 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["yeongsanyoOfficialCup", "yeongsanyoOfficialVase"],
      researchStatus: "source-backed",
    },
    E27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["전통도예", "도자 작품"],
      summary:
        "백암요는 공개 기사에서 도예 초대전과 경북 공예품대전 대상 단서가 확인되고, 국립박물관 문화상품 페이지에서 Instagram 출처 표기가 확인되어 도예/공예/차도구 계열로 분류했습니다.",
      sources: ["baegamNewswire", "baegamEkn", "baegamMuseumInstagramSource"],
      researchStatus: "source-backed+sns",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 E27 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D E27",
          summary:
            "공식 Instagram에서 코엑스 D홀 E27 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "백암요 참가 안내", url: "https://www.instagram.com/beagamyo/reel/DY3mnC0PT8N/" }],
        },
      ],
    },
    B9: {
      tags: ["#한국차", "#녹차"],
      products: ["보성차", "녹차"],
      summary:
        "보성 영천다원은 불교박람회 공개 참가 정보에서 보성 차 업체로 확인되어 취급품목 기준 한국차/녹차 계열로 분류했습니다.",
      sources: ["yeongcheonBexpo"],
      researchStatus: "source-backed",
    },
    B4: {
      tags: ["#한국차", "#녹차"],
      products: ["보성 유기농 녹차", "우전"],
      summary:
        "보성 유기농 운해다원은 공개 상품 정보에서 유기농 우전/보성녹차 상품이 확인되어 취급품목 기준 한국차/녹차 계열로 분류했습니다.",
      sources: ["unhaeCoupang"],
      researchStatus: "source-backed",
    },
    B1: {
      tags: ["#한국차", "#녹차", "#문화단체"],
      products: ["보성차 홍보", "녹차"],
      summary:
        "보성군 홍보관은 보성차 홍보관 운영 기사에서 보성차 홍보 공간으로 확인되어 한국차/녹차 홍보 부스로 분류했습니다.",
      sources: ["boseongTeaPressian"],
      researchStatus: "source-backed",
    },
    A15: {
      tags: ["#대용차"],
      products: ["작두콩차", "건강차"],
      summary:
        "문경칠봉산농원은 공식몰과 불교박람회 공개 참가 정보에서 작두콩차 등 건강차 계열 제품 단서가 확인되어 대용차 계열로 분류했습니다.",
      sources: ["chilbongOfficial", "chilbongBexpo"],
      researchStatus: "source-backed",
    },
    A36: {
      tags: ["#공예"],
      products: ["목공예품", "전통 생활소품"],
      summary:
        "대림목공예는 대한민국 구석구석과 공개 기업정보에서 목공예 업체로 확인되어 공예/생활소품 계열로 분류했습니다.",
      sources: ["daerimTripTips", "daerimSaramin"],
      researchStatus: "source-backed",
    },
    H21: {
      tags: ["#다기", "#차도구", "#티웨어", "#도예"],
      products: ["티웨어", "머그", "찻잔", "티포트", "티워머", "티필터", "티포원", "본차이나/내열유리 차도구"],
      summary:
        "주식회사 차모아는 차모아/티로직 공식몰과 공개 SNS에서 티웨어, 머그, 찻잔, 티포트, 티워머, 티필터, 티포원 등 차도구 판매가 확인되어 다기/차도구 계열로 분류했습니다. 검색 결과에는 동명의 자동차용품 브랜드가 섞이므로 차모아/티로직 계정만 근거로 사용했습니다.",
      sources: ["chamoreJobkorea", "chamoreOfficial", "chamoreBiz", "teaLogicOfficial", "chamoreGyesuGlass"],
      researchStatus: "source-backed+sns+store",
    },
    A9: {
      tags: ["#중국차", "#보이차", "#교육"],
      products: ["보이차", "차문화 프로그램", "복합치유공간"],
      summary:
        "공부차파크 복합치유공간 과천 청계산점은 공부차 공식 페이지에서 공부차 브랜드 공간으로 확인되어 취급품목 기준 중국차/보이차 및 차문화 프로그램 계열로 분류했습니다.",
      sources: ["gongboochaPark"],
      researchStatus: "source-backed",
    },
    A10: {
      tags: [],
      products: ["차업체 시음회 참가 확인", "세부 취급 차종 추가 확인 필요"],
      category: "차/제다/다원",
      summary:
        "국제통상은 공부차 공개 시음회 후기에서 '대구 국제통상'이 차업체 시음회 참가사로 확인됩니다. 다만 공개 자료만으로 중국차/한국차 등 세부 취급 차종을 확정하기에는 부족해 취급품목 태그는 보류했습니다.",
      sources: ["daeguGukjeTongsangTasting"],
      researchStatus: "source-backed-name-match-tag-withheld",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "차업체 시음회 참가 확인",
          summary:
            "공부차 공개 시음회 후기에서 대구 국제통상 참가 사실은 확인되지만, 제품명과 반복 소비자 평가는 저장할 만큼 충분하지 않습니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["공부차 시음회 후기"],
        },
      ],
    },
    C3: {
      tags: ["#중국차", "#보이차", "#흑차", "#교육"],
      products: ["흑차/보이차 교육", "차마카세", "중국차 시음"],
      summary:
        "원본 OCR의 '티휴'는 정확 일치 공개 근거가 거의 없고, 직접 검색에서 흑차·보이차 전문교육기관/차마카세 '차휴' 공식 Instagram이 강하게 확인되어 차휴로 교정했습니다. 공개 프로필 기준 흑차·보이차 교육과 차마카세 중심으로 분류했습니다.",
      sources: ["chahyuInstagram"],
      researchStatus: "source-backed+sns+name-corrected-low-confidence",
    },
    C23: {
      tags: ["#도예", "#공예"],
      products: ["이천 도자기", "도자기제품 제조/도매", "요장"],
      summary:
        "정요는 Life114 업체 정보와 한국도자재단 요장 현황 재게시 자료에서 이천 기반 도자기제품 제조/도매 및 요장으로 확인되어 도예/공예 계열로 분류했습니다. 차도구/다기 전용 근거는 부족해 해당 태그는 붙이지 않았습니다.",
      sources: ["jeongyoLife114", "jeongyoCeramicFoundationRepost"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "도자기 요장 정보 확인",
          summary:
            "공개 사업자/요장 자료에서 정요의 도자기제품 제조·도매 단서가 확인됩니다. 제품별 소비자 반복 리뷰는 아직 충분하지 않습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["Life114 정요", "한국도자재단 요장 현황 재게시"],
        },
      ],
    },
    F2: {
      tags: ["#중국차", "#흑차", "#발효차"],
      products: ["경위복차", "복전차", "중국 흑차"],
      summary:
        "경위복차(가인갤러리)는 공식 Modoo 페이지, 불교박람회 공개 참가 정보와 공개 상품 페이지에서 JINGWEI FU TEA/복전차·흑차가 확인되어 중국차/흑차 계열로 분류했습니다. 업체명은 공개 출처 기준으로 '경위복차'로 바로잡았습니다.",
      sources: ["jingweiModoo", "jingweiBexpo", "jingweiCoupang"],
      researchStatus: "source-backed+official-site",
    },
    F15: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["김해 분청도자기", "도예 작품"],
      summary:
        "고도산방은 김해 분청도자기축제 참가 요장 목록에서 확인되어 도예/공예/차도구 계열로 분류했습니다.",
      sources: ["gimhaeCeramicFestival"],
      researchStatus: "source-backed",
    },
    E2: {
      tags: ["#차도구", "#공예"],
      products: ["방짜유기", "유기 차도구/생활기"],
      summary:
        "김천방짜유기 명인 이운형은 공식 쇼핑몰, 불교박람회 참가 정보와 공개 기사에서 방짜유기 공방/명인 단서가 확인되어 공예/차도구 계열로 분류했습니다.",
      sources: ["kimcheonYugiShop", "kimcheonBexpo", "kimcheonKbmaeil"],
      researchStatus: "source-backed+official-store",
    },
    C1: {
      tags: ["#한국차", "#녹차", "#천연염색", "#문화단체"],
      products: ["나주 야생차", "천연염색 홍보"],
      summary:
        "나주는 나주문화재단 공개 자료와 기사에서 국제차문화대전 나주 야생차 및 천연염색 홍보 부스로 확인되어 한국차/녹차 및 천연염색 홍보 계열로 분류했습니다.",
      sources: ["najuTeaWikitree", "najuFoundation"],
      researchStatus: "source-backed",
    },
    H23: {
      tags: ["#공예", "#나전칠기", "#옻칠"],
      products: ["나전칠기", "옻칠 주방용품", "전통가구", "차꽂 거울", "목단문 봉채함"],
      summary:
        "나은크래프트/나은갤러리는 공식 사이트와 AVING 기사에서 나전칠기, 옻칠 주방용품, 전통가구, 공방/전시장 예약 운영, 차꽂 거울과 목단문 봉채함이 확인되어 공예/나전칠기/옻칠 계열로 보강했습니다.",
      sources: ["naeunAving", "naeunOfficial", "naeunMirrorAving"],
      researchStatus: "source-backed",
    },
    C6: {
      tags: ["#한국차", "#발효차"],
      products: ["침향발효차", "향차"],
      summary:
        "로전은 공식몰과 공개 기사에서 침향발효차, 전통 향차 브랜드로 확인되어 한국차/발효차 계열로 분류했습니다.",
      sources: ["rozeonOfficial", "rozeonDonga"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "6월 티월드 행사 제품 예고",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C6",
          summary:
            "공식 Instagram에서 6월 티월드 준비용 침향홍차·침향병차 산차, 백차 수미 200개 포장 등 행사 판매/소개용 제품 준비 내용이 확인됩니다. 할인·증정 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [
            { label: "로전 침향홍차 준비 게시물", url: "https://www.instagram.com/p/DYLnrZ5kyH1/" },
            { label: "로전 백차 수미 준비 게시물", url: "https://www.instagram.com/p/DYT0w0kk8xH/" },
          ],
        },
      ],
    },
    B8: {
      tags: ["#한국차", "#녹차", "#말차"],
      products: ["보성 말차", "녹차"],
      summary:
        "죽림다원은 불교박람회 공개 참가 정보에서 보성 죽림다원 말차 제품 단서가 확인되어 한국차/녹차/말차 계열로 분류했습니다.",
      sources: ["jukrimBexpo"],
      researchStatus: "source-backed",
    },
    D5: {
      tags: ["#한국차", "#녹차"],
      products: ["죽로차", "녹차", "죽로은침"],
      summary:
        "죽로은침은 조태연가 죽로차 공식 쇼핑몰에서 죽로차/녹차 계열 상품이 확인되어 한국차/녹차 계열로 분류했습니다.",
      sources: ["jukro"],
      researchStatus: "source-backed",
    },
    C10: {
      tags: ["#한국차", "#녹차", "#발효차"],
      products: ["찻잎마술", "소암제다 차류"],
      summary:
        "찻잎마술/소암 茶는 공개 매거진 기사에서 소암제다와 찻잎마술 차 브랜드 단서가 확인되어 한국차 계열로 분류했습니다.",
      sources: ["soamHappyDesign"],
      researchStatus: "source-backed",
    },
    H17: {
      tags: ["#중국차", "#우롱차", "#암차"],
      products: ["무이암차", "중국 우롱차"],
      summary:
        "원 표기 '일상차(壹叁茶)'는 글로벌 티&카페쇼 공개 현황판에서 '壹叁荼® 武夷岩茶'로 확인되어 한자 표기를 교정했습니다. 취급품목은 무이암차로 확인되어 중국차/우롱차/암차 계열로 분류했습니다.",
      sources: ["ilsangchaGcafeshow"],
      researchStatus: "source-backed",
    },
    G4: {
      tags: ["#한국차", "#녹차", "#말차", "#교육", "#문화단체"],
      products: ["하동 차", "말차 기반 제품", "차 전문가 교육"],
      summary:
        "재단법인 하동차&바이오진흥원은 공개 기사에서 하동 말차 기반 제품 개발과 차 전문가 양성 활동이 확인되어 한국차/말차/교육·문화단체 계열로 분류했습니다.",
      sources: ["hadongBioNewspim", "hadongBioTraining"],
      researchStatus: "source-backed",
    },
    H20: {
      tags: ["#공예", "#생활소품", "#인센스", "#향"],
      products: [
        "인센스스틱",
        "인센스홀더",
        "부뚜막 인센스 세트",
        "백단향",
        "청솔 백단향",
        "매화향",
        "연꽃향",
        "한국 인센스스틱 10 컬렉션",
        "일본 인센스스틱 10 컬렉션",
        "OEM/ODM 향 제품",
      ],
      summary:
        "주식회사 인센스월드는 공식 사이트와 KOREA EXPO 공개 브랜드 정보에서 30년 전통의 인센스 전문 기업, OEM/ODM, R&D, 인센스스틱·인센스홀더 제품군이 확인되어 차 업체가 아닌 향/생활소품/공예 계열로 분류했습니다. 공식 제품 페이지에서 부뚜막 인센스 세트가 대한민국 관광기념품 프리미엄상 수상 제품으로 확인됩니다.",
      sources: ["incenseWorldOfficial", "incenseWorldButtumak", "incenseWorldKexpo"],
      researchStatus: "source-backed+official-site+official-product-page+sns",
    },
    C9: {
      tags: ["#한국차", "#잭살", "#홍차", "#발효차", "#대용차", "#티백", "#팝업"],
      products: ["마이클 잭살", "잭살 블렌딩 티백", "유자·돌배·모과 차", "집드링크", "뚱딴지차 디의사승", "비트앤런", "노블맨", "유자잭살"],
      summary:
        "웃차는 Brown Things 상품/웹진과 공식 Instagram에서 하동 잭살차, 유자껍질, 모과, 돌배를 섞은 마이클 잭살 티백과 팝업 시음 이력이 확인됩니다. 팝업 후 주문 증가와 재고/티백/포장 검수 공지도 확인되어 한국차/잭살/대용차 계열로 보강했습니다.",
      sources: ["ootchaBrownthings", "ootchaBrownthingsWebzine", "ootchaInstagram", "ootchaInstagramShipping"],
      researchStatus: "source-backed+sns+public-webzine",
    },
    A4: {
      tags: ["#한국차", "#녹차", "#말차", "#우전", "#작설차"],
      products: ["녹차", "가루녹차", "감농가루차", "우전감로", "작설차"],
      summary:
        "한국제다는 공식 홈페이지/공식몰과 공개 판매·커뮤니티 자료에서 녹차, 가루녹차/감농가루차, 우전감로가 확인됩니다. SSG 구매평과 디시인사이드 말차 비교/실사용 글까지 확인되어 한국차/녹차/말차/우전 계열로 보강했습니다.",
      sources: ["hankookTeaOfficial", "hankookTeaProduct", "hankookTeaSsgPowderReview", "hankookTeaOfficialUjeon", "hankookTeaDcMatchaCompare", "hankookTeaDcGamnon"],
      researchStatus: "source-backed+store-review+community-review",
    },
    A5: {
      tags: ["#한국차", "#제주차", "#녹차", "#홍차", "#교육", "#티투어"],
      products: ["제주 차", "녹차", "새순녹차", "진피홍차", "생태다원 차암숲", "티 투어", "채엽/제다/시음 프로그램"],
      summary:
        "제주차농은 Linktree와 Instagram에서 생태다원 차암숲 기반의 제주차 생산, 티 투어, 차밭 채엽, 제다와 시음 프로그램이 확인됩니다. 공개 SNS 언급에서 새순녹차와 진피홍차 제품 단서도 확인되어 제주차/녹차/홍차/교육 계열로 보강했습니다.",
      sources: ["jejuChanong", "jejuChanongFarmersLinktree", "jejuChanongFarmersInstagram", "jejuChanongTeaTourInstagram", "jejuChanongMooSangPost"],
      researchStatus: "source-backed+sns",
    },
    A2: {
      tags: ["#한국차", "#녹차", "#우롱차"],
      products: ["완도 차", "우롱차", "녹차", "재래종 차나무", "차밭/다원 체험"],
      summary:
        "완도 청해진다원은 공개 기사에서 전남 완도군 군외면 황진리 차밭, 지리산 재래종 차나무, 우롱차 재배 단서가 확인되어 취급품목 기준 한국차/우롱차 계열로 분류했습니다.",
      sources: ["chunghaejinNamdo", "wandoSegyeOolong"],
      researchStatus: "source-backed",
    },
    B2: {
      tags: ["#한국차", "#녹차", "#말차", "#우전", "#티백"],
      products: ["유기농 녹차", "우전", "곡우", "현미녹차", "말차/가루녹차", "무설탕 말차", "티백"],
      summary:
        "보성제다는 공식몰과 공개 판매 페이지에서 유기농 녹차, 우전/곡우, 가루녹차/말차, 티백 제품군이 확인됩니다. 공개 구매평까지 확인되어 취급품목 기준 한국차/녹차/말차 계열로 보강했습니다.",
      sources: ["boseongJedaOfficial", "boseongJedaProduct", "boseongJedaCompany", "boseongJedaCconmaReview"],
      researchStatus: "source-backed+store-review",
    },
    B4: {
      tags: ["#한국차", "#녹차", "#우전", "#세작", "#홍차", "#황차", "#청차", "#백차", "#호지차", "#말차"],
      products: ["보성 유기농 녹차", "우전", "세작", "홍차", "황차", "청차", "백차", "호지차", "말차/가루차"],
      summary:
        "보성 유기농 운해다원은 쿠팡 상품 페이지와 친환경 인증 품목에서 우전, 세작, 홍차, 황차, 청차, 백차, 호지차, 말차/가루차가 확인되어 한국차 전반으로 보강했습니다.",
      sources: ["unhaeCoupang", "unhaeOrganicCert"],
      researchStatus: "source-backed+certification",
    },
    B5: {
      tags: ["#한국차", "#녹차", "#홍차", "#우전", "#세작", "#대용차"],
      products: ["보성 우전", "보성 세작", "보성 홍차", "서리꽃99차", "우엉차", "돼지감자차", "건강차"],
      summary:
        "서울카페쇼 공개 전시 페이지, 보성몰, 기사 자료에서 보성원당제다원의 우전·세작·홍차 세트와 서리꽃99차, 우엉차, 돼지감자차 등이 확인되어 한국차/녹차/홍차/대용차 계열로 보강했습니다.",
      sources: ["wondangCafeShow", "wondangBoseongMall", "wondangNewsworker"],
      researchStatus: "source-backed",
    },
    B7: {
      tags: ["#한국차", "#녹차", "#우전", "#홍차", "#대용차"],
      products: ["자연의혼 우전", "청명한 하루 블렌딩", "향기의 마술사 홍차", "청보리순정", "아름다운 동행"],
      summary:
        "보성(부광녹차)은 BEXPO 출품 페이지에서 자연의혼 우전, 청명한 하루 블렌딩, 향기의 마술사 홍차, 청보리순정 등 제품명이 확인되고, 별도 페어 페이지에서 Instagram 계정이 확인되어 한국차/녹차/홍차와 대용차 계열로 보강했습니다.",
      sources: ["bugwangBexpo", "bugwangCafeBakeryInstagram"],
      researchStatus: "source-backed+sns",
    },
    B9: {
      tags: ["#한국차", "#녹차", "#홍차", "#황차", "#청차", "#말차", "#대용차"],
      products: ["수제덖음 첫물차", "두물차", "홍차", "황차", "청차", "흰민들레차", "새싹보리순가루", "백하수오 가루말차"],
      summary:
        "보성 영천다원은 공식 Modoo와 BEXPO/보성세계차엑스포 공개 자료에서 첫물차, 두물차, 홍차, 황차, 청차, 흰민들레차, 새싹보리순가루, 백하수오 가루말차가 확인되어 한국차와 대용차 계열로 보강했습니다.",
      sources: ["yeongcheonBexpo", "yeongcheonOfficialModoo", "yeongcheonBoseongExpo"],
      researchStatus: "source-backed",
    },
    B12: {
      tags: ["#한국차", "#녹차", "#말차", "#발효차", "#우전", "#세작", "#티백", "#대용차"],
      products: ["유기농 우전", "세작", "중작", "말차", "발효차", "첫물차 티백", "쑥차", "작두콩차"],
      summary:
        "보성녹차 선다원은 공식몰에서 유기농 우전, 세작, 중작, 말차, 발효차, 첫물차 티백, 쑥차/작두콩차가 확인되고 SSG·공식몰 구매평도 확인되어 한국차/녹차/말차/발효차/대용차 계열로 보강했습니다.",
      sources: ["sundawonOfficial", "sundawonKakao", "sundawonSsgSejakReview", "sundawonMugwortOfficialReview"],
      researchStatus: "source-backed+store-review",
    },
    B14: {
      tags: ["#한국차", "#대용차", "#교육"],
      products: ["티 전문 교육", "티블렌딩", "티 메뉴 컨설팅", "스윗베리즈 과일블렌딩티"],
      summary:
        "한국티산업경영연구원 차그리다는 공식 네이버 블로그에서 티전문교육, 티블렌딩, 티메뉴컨설팅, 제품개발 활동이 확인되고, 공개 리뷰에서 스윗베리즈 과일블렌딩티 제품 경험이 확인되어 한국차 교육/대용차 계열로 분류했습니다.",
      sources: ["ktimiNaverBlog", "ktimiSommelierTimes", "ktimiSweetberriesReview"],
      researchStatus: "source-backed+sns+review",
      reviewThemes: [
        {
          sentiment: "mixed",
          title: "스윗베리즈 과일블렌딩티 리뷰",
          summary:
            "공개 블로그 리뷰에서 스윗베리즈 과일블렌딩티가 병입 패키지 형태와 베리 계열 무카페인 아이스티로 언급되며, 차 자체는 흥미롭게 보되 구매처를 찾기 어렵다는 평가가 함께 확인됩니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["차그리다 스윗베리즈 과일블렌딩티 리뷰"],
        },
      ],
    },
    B13: {
      tags: ["#한국차", "#녹차", "#홍차", "#백차", "#우롱차", "#발효차", "#대용차"],
      products: ["우전", "세작홍차", "백차우전", "발효차", "쑥차", "티코스"],
      summary:
        "섬진다원은 광양시 관광 정보와 공개 시음/방문 기록에서 녹차, 발효차 만들기, 세작홍차, 백차우전, 우전·백차·홍차·쑥차 티코스가 확인되어 한국차/녹차/홍차/백차/발효차 계열로 보강했습니다.",
      sources: ["baekhakPressianAward", "sumjinGwangyangTour", "sumjinSejakHongchaReview", "sumjinBaekchaReview", "sumjinDiningCode"],
      researchStatus: "source-backed+public-review",
    },
    C5: {
      tags: ["#한국차", "#녹차", "#황차", "#대용차"],
      products: ["하동 작설차", "녹차", "황차", "쑥차"],
      summary:
        "청석골감로다원은 공개 관광/출품 정보에서 하동 작설차, 녹차, 황차, 쑥차와 200년 고차수·유기농 차밭·차 클래스/스테이 단서가 확인되어 한국차 계열로 보강했습니다.",
      sources: ["cheongseokTravel", "cheongseokBexpo", "cheongseokJoongdoRecognized"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "특별 시음·판매 라인업",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C5",
          summary:
            "공식 Instagram에서 우전급 찻잎 기반 홍차, 청차, 황차, 백차, 우전녹차, 잭살차 시음·판매 라인업과 전시회 한정 혜택 안내가 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [{ label: "청석골감로다원 특별 시음·판매 안내", url: "https://www.instagram.com/p/DY0OrdrE-Wg/" }],
        },
      ],
    },
    C12: {
      tags: ["#한국차", "#녹차", "#우롱차"],
      products: ["수제덖음녹차", "만송포", "청차/우롱차"],
      summary:
        "백학제다는 공개 전시 소개와 기사에서 만송포 청차/우롱차, 수제덖음녹차 수상 이력이 확인되어 취급품목 기준 한국차/녹차/우롱차 계열로 분류했습니다.",
      sources: ["baekhakBexpo", "baekhakPressianAward", "baekhakPolle"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "품평대회 수상/방문 후기",
          summary:
            "공개 기사에서 수제덖음녹차 부문 대상 이력이 확인되고, 공개 리뷰 페이지에서는 전통찻집 방문과 차 구매 후기가 확인됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["프레시안 우리차품평대회 기사", "뽈레 백학제다 리뷰"],
        },
      ],
    },
    C18: {
      tags: ["#다기", "#도예", "#차도구"],
      products: ["달항아리", "도자기", "다기/도예품"],
      summary:
        "누보도예는 공개 기사와 전시 페이지에서 달항아리 및 도자 제품이 확인되어 도예/다기 계열로 분류했습니다.",
      sources: ["nouveauBizKorea", "nouveauBexpo", "nouveauTeaCulture"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 C18 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C18",
          summary:
            "공식 Instagram에서 6월 4일-7일 코엑스 D홀 C18 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "누보도예 C18 안내", url: "https://www.instagram.com/p/DY3Ee4Jk0N5/" }],
        },
      ],
    },
    D22: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["도자기", "다기류", "식기류", "공예품"],
      summary:
        "녹주요는 공개 기사에서 김해시공예품대전 대상 수상 이력이 확인되고, 아이디어스 작가 페이지에서 다기류/식기류 작업이 확인되어 도예/차도구 계열로 분류했습니다.",
      sources: ["nokjuyoNews1", "nokjuyoIdus"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "공예품 수상/작가 판매 페이지",
          summary:
            "공개 기사에서 공예품대전 대상 수상 이력이 확인되고, 작가 판매 페이지에서 다기류와 식기류 작업 소개가 확인됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["뉴스1 김해시공예품대전 기사", "아이디어스 녹주요 작가 페이지"],
        },
      ],
    },
    D4: {
      tags: ["#한국차", "#녹차", "#홍차", "#우롱차"],
      products: ["녹차 우전", "호지홍", "청차", "계화홍차"],
      summary:
        "혜림茶. 혜림농원은 네이버 차 커뮤니티의 하동야생차문화축제 시음 후기에서 녹차 우전, 호지홍, 청차, 계화홍차가 언급되어 한국차 중심 복합 차류로 분류했습니다.",
      sources: ["naverHyelimFestivalCafe"],
      researchStatus: "source-backed+n-cafe-low",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "우전/청차/계화홍차 시음 언급",
          summary:
            "카페 시음 후기에서 혜림농원의 녹차 우전은 부드러움과 향, 밸런스가 좋았다는 평가가 보이며, 청차와 계화홍차도 향이 좋게 언급됩니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["차랑방 하동야생차문화축제 후기"],
        },
      ],
    },
    D7: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차"],
      products: ["하동녹차", "우전", "세작", "발효차", "홍차"],
      summary:
        "명성다원은 공개 상품/관광 정보에서 하동녹차, 우전, 세작, 발효차, 홍차 등이 확인되어 한국차 계열로 분류했습니다.",
      sources: ["myeongseongOfficial", "myeongseongTravel"],
      researchStatus: "source-backed",
    },
    D9: {
      tags: ["#한국차", "#녹차", "#우전", "#세작", "#홍차", "#백차", "#말차", "#발효차", "#대용차"],
      products: ["죽로차", "우전", "세작", "중작", "대작", "발효차", "봉다리 백차", "녹차가루차", "발효차가루차", "감잎차", "쑥차", "돌배차", "티콜렛"],
      summary:
        "조태연가 죽로차 공식몰에서 우전·세작·중작·대작, 발효차, 봉다리 백차, 녹차가루차/발효차가루차, 감잎차·쑥차·돌배차가 확인됩니다. 공식몰 우전 구매평, 에누리 세작 리뷰, Instagram 홍차 말차 게시물까지 확인되어 한국차 중심 복합 차류로 보강했습니다.",
      sources: ["jukro", "jukroUjeonOfficialReview", "jukroEnuriSejakReview", "jukroInstagramHongchaMatcha"],
      researchStatus: "source-backed+official-review+store-review+sns",
    },
    D10: {
      tags: ["#한국차", "#녹차", "#교육"],
      products: ["하동 차", "제다 체험/차공간"],
      summary: "하동 공개 차 관광 정보에서 한밭제다 차공간이 제다 체험형 공간으로 확인되어 한국차/교육 계열로 분류했습니다.",
      sources: ["cheongseokTravel"],
      researchStatus: "source-backed",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "한국 우롱차 행사 선공개",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D10",
          summary:
            "차도 협업 공식 Instagram 릴스에서 한밭제다가 차문화대전에 선보이기 위해 한국 우롱차를 제작한다는 홍보 내용이 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "한밭제다/차도 협업 릴스", url: "https://www.instagram.com/chado__tea/reel/DY4HlDltG3y/" }],
        },
      ],
    },
    D13: {
      tags: ["#한국차", "#녹차", "#발효차", "#대용차"],
      products: ["지리산 차", "녹차", "발효차", "꽃차"],
      summary:
        "지리산 상선암차는 공개 행사 리스트에서 녹차, 발효차, 감국차 등 차류 취급 단서가 확인되어 한국차 계열로 분류했습니다.",
      sources: ["lankaFair"],
      researchStatus: "source-backed",
    },
    A13: {
      tags: ["#한국차", "#대용차"],
      products: ["국화차", "모후실에서 만난 차"],
      summary:
        "모후실에서만난차는 공식 페이지와 공개 상품 정보에서 국화차 제품이 확인되어 취급품목 기준 한국차/대용차 계열로 분류했습니다.",
      sources: ["mohusilOfficial", "mohusilDanawa"],
      researchStatus: "source-backed",
    },
    A19: {
      tags: ["#한국차", "#발효차", "#청태전", "#떡차"],
      products: ["장흥 청태전", "떡차"],
      summary:
        "장흥청태전(장흥다원)은 부스명과 네이버 카페의 장흥 청태전 음용/나눔 후기에서 청태전 제품군 언급이 확인되어 취급품목 기준 한국차, 발효차, 떡차 계열로 분류했습니다.",
      sources: ["naverCheongTaeJeonShareCafe", "naverCheongTaeJeonTearoomCafe"],
      researchStatus: "source-backed+n-cafe",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "청태전 찻자리/나눔 언급",
          summary:
            "차 커뮤니티 카페에서 장흥 청태전 나눔과 찻자리 후기가 확인되며, 구워 마시거나 티백 형태로 편하게 마신다는 언급이 보입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["차가마 장흥 청태전 나눔", "차랑방 장흥 청태전 찻자리"],
        },
      ],
    },
    G1: {
      tags: ["#중국차", "#보이차", "#생차", "#숙차", "#대익", "#7542", "#7572", "#다기", "#차도구", "#티클래스"],
      products: ["대익 보이차", "7542", "7572", "생차", "숙차", "생차 소금전", "대익 찻잔", "자사호/다기"],
      summary:
        "대익코리아는 공식몰/Linktree, 공개 기사, 네이버 카페, DCInside, 티스토리 리뷰에서 대익 보이차 7542·7572, 생차/숙차, 차회, 대익 찻잔과 자사호 활용이 확인되어 취급품목 기준 중국차/보이차로 분류했습니다.",
      sources: [
        "daYiNews",
        "daYiLinktree",
        "daYiDaodaoLinktree",
        "daYi7542Official",
        "daYiDcCoin",
        "daYiDc7542Compare",
        "daYiTistoryTeacup",
        "naverDaYiSpringCafe",
        "naverDaYiVicheDamCafe",
        "naverDaYiChaulimCafe",
        "naverDaYi7542Cafe",
      ],
      researchStatus: "source-backed+n-cafe+community-review+blog-review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "대익 차회/시음 경험",
          summary:
            "차 커뮤니티 카페에서 대익코리아 차회, 공식 창고 보관 차품, 공작생태차와 7542 시음 관심이 반복 확인됩니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["차닉골 상춘남객 후기", "차울림 대익코리아 14주년 관련 글", "차닉골 7542 시음 언급"],
        },
        {
          sentiment: "positive",
          title: "보이차와 자사호 사용",
          summary:
            "공개 카페 글에서 대익 공식 대리점 출처와 함께 생차/숙차 구분, 자사호 사용법이 보이차 음용 맥락으로 언급됩니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["빛명상 공식 카페 차 수업 후기"],
        },
      ],
    },
    G3: {
      tags: ["#중국차", "#홍차", "#우롱차", "#녹차"],
      products: ["정산소종", "무이노총 정산소종", "홍차", "우롱차", "녹차", "재스민차"],
      summary:
        "정산당은 네이버 홍차 커뮤니티 시음 글에서 무이노총 정산소종 차품이 확인되고, LAPSANGSTORE 정산당 서울 대림 차랑 안내 페이지에서 홍차/녹차/암차/우롱차/백차/보이차/재스민차 계열 취급 맥락이 확인되어 취급품목 기준 중국차 중심으로 분류했습니다. 한국 내 차실은 차랑 계정과 별도 표기했습니다.",
      sources: ["naverJeongsandangCafe", "jeongsandangDalinOfficial"],
      researchStatus: "source-backed+official-site+n-cafe+sns",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "정산소종 시음 호평",
          summary:
            "공개 카페 시음 글에서 정산당 무이노총 정산소종의 달고 그윽한 맛, 시원함, 훈연향이 언급됩니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["오렌지페코 정산당 정산소종 시음"],
        },
      ],
    },
    G6: {
      tags: ["#중국차", "#보이차", "#생차", "#고수차", "#야생차", "#빙도", "#향죽림", "#아포차", "#교목차"],
      products: ["보이차", "교목차", "야생차", "아포차", "2009 빙도", "2010 향죽림 고수 첫물차", "임창 대설산 야생차", "야생고수차", "첫물차"],
      summary:
        "천년보이차는 공개 소개 글, 티스토리 시음기, 불교문화엑스포 디렉토리, 네이버 차 커뮤니티 글에서 운남 보이차, 교목차/야생차/아포차, 2009 빙도, 2010 향죽림 고수 첫물차, 임창 대설산 야생차가 확인되어 중국차/보이차로 보강했습니다.",
      sources: ["chunnyunArticle", "chunnyunXiangzhulinReview", "chunnyunBingdoReview", "chunnyunBexpoDirectory", "naverChunnyunDaeseolsanCafe", "naverChunnyunAuctionCafe"],
      researchStatus: "source-backed+n-cafe+blog-review+directory",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "첫물차와 야생차 특성",
          summary:
            "카페 시음 글에서 첫물차 정체성, 야생차의 향, 탕색, 부드러움과 내포성이 반복적으로 언급됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["차닉골 임창 대설산 야생차 춘첨", "차닉골 고수단주차 설명"],
        },
      ],
    },
    G9: {
      tags: ["#중국차", "#보이차", "#생차", "#숙차", "#우롱차", "#티백", "#자사호", "#다기", "#차도구"],
      products: ["정유무량춘", "98년 8582청병", "포랑대엽대숙병", "삼년호합15+", "무량산17", "무량산 보이차 티백 생차", "삼년호합 보이차 티백 숙차", "지유소타차", "자사호", "보이차 쿠키"],
      summary:
        "지유명차는 공식 브랜드 페이지/기사, 쿠팡 상품 페이지, 테이블링, 티스토리 방문기, 네이버 카페 후기에서 보이차 생차/숙차, 티백, 자사호, 차예사 설명, 지점 티타임 공간이 확인되어 취급품목 기준 중국차/보이차로 보강했습니다.",
      sources: [
        "gutea",
        "guteaNews",
        "guteaCoupangMuryangsan",
        "guteaCoupangSamnyeon",
        "guteaTablingHwagok",
        "guteaTablingSuwon",
        "guteaTistoryVisit",
        "naverGuteaDunsanMomCafe",
        "naverGuteaDunsanMomCafe2",
        "naverGuteaDieselCafe",
      ],
      researchStatus: "source-backed+n-cafe+public-review+store-review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "보이차 맛과 티타임 공간",
          summary:
            "지역 카페 후기에서 직접 내려 마시는 보이차, 차분한 분위기, 매장 인테리어와 보이차 쿠키가 긍정적으로 언급됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["대전 둔산맘 지유명차 후기", "디젤매니아 문지동 지유명차 추천"],
        },
        {
          sentiment: "mixed",
          title: "접근성 언급",
          summary:
            "일부 후기에서 둔산 기준 거리가 있다는 언급이 있어, 지점 방문 계획 시 위치 확인이 필요합니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["대전 둔산맘 지유명차 후기"],
        },
      ],
    },
    G12: {
      tags: ["#홍차", "#실론티", "#스리랑카홍차"],
      products: ["스리랑카 홍차", "실론티", "우바", "캔디", "딤불라", "누와라엘리야", "루후나"],
      summary:
        "랑카티스는 공식 상품/리뷰 페이지, 공개 참가업체 리스트, 네이버 홍차 커뮤니티 비교시음 글에서 누와라엘리야·우다 푸셀라와·딤볼라·캔디·우바·루후나·사바라 가무와 등 스리랑카 홍차/실론티 취급이 확인되어 홍차 전문 계열로 분류했습니다. 공식 Review 페이지와 일부 상품 페이지는 리뷰 본문이 비어 있어 그 상태도 함께 저장했습니다.",
      sources: ["lankaOfficialAbout", "lankaProduct", "lankaSabaragamuwa", "lankaReviewPage", "lankaFair", "naverLankaCompareCafe", "naverLankaUvaCafe"],
      researchStatus: "source-backed+n-cafe+official-store",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "실론티 지역별 비교시음",
          summary:
            "홍차 커뮤니티에서 루후나, 우바, 캔디, 딤불라, 누와라엘리야 등 랑카티스 7종을 비교 시음한 기록이 확인됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["오렌지페코 랑카티스 7종 비교시음", "오렌지페코 랑카티스 우바"],
        },
        {
          sentiment: "mixed",
          title: "지역차 구분 난이도",
          summary:
            "일부 시음기에서는 실론티 지역별 차이를 흥미롭게 보면서도 구별이 어렵거나 애매하게 느껴졌다는 평가가 함께 보입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["오렌지페코 랑카티스 7종 비교시음", "오렌지페코 랑카티스 우바 댓글 맥락"],
        },
      ],
    },
    G10: {
      tags: ["#일본차", "#말차", "#다기", "#차도구"],
      products: ["일본 말차", "말차도구", "다도구"],
      summary:
        "원본 OCR/기존 입력의 '다건원'은 공개 로컬 소개와 상품 페이지에서 확인되는 '다견원'으로 교정했습니다. 공개 자료 기준 일본 말차와 말차도구 취급 단서가 확인되어 취급품목 기준 일본차/말차/차도구 계열로 분류했습니다.",
      sources: ["dageonwonLocalView", "dageonwonDadobang"],
      researchStatus: "source-backed+corrected",
    },
    G13: {
      tags: ["#대만차", "#우롱차", "#사계춘", "#동방미인", "#금훤", "#호지차", "#말차", "#다기", "#차도구"],
      products: [
        "라이트 로스트 우롱 티백",
        "사계춘 티백",
        "동방미인 티백",
        "금훤 티백",
        "호지차 티백",
        "말차",
        "프리미엄 티 컬렉션",
        "Tea Pet",
        "유리머그 400mL",
      ],
      summary:
        "원본 OCR/기존 입력의 '틴지오브스웰'은 국내/글로벌 공식몰과 Linktree에서 확인되는 TINGE OF SOUL/틴지오브소울로 교정했습니다. 공식몰 리뷰, Instagram, 와디즈, Kurly/Coupang 공개 상품에서 라이트 로스트 우롱, 사계춘, 동방미인, 금훤, 호지차, 프리미엄 티 컬렉션, Tea Pet, 유리머그가 확인되어 대만차/우롱차와 말차·차도구 계열로 보강했습니다.",
      sources: [
        "tingeOfSoulKr",
        "tingeOfSoulGlobal",
        "tingeOfSoulLinktree",
        "tingeOfSoulInstagram",
        "tingeOfSoulReviewPage",
        "tingeOfSoulWadizTeaAtti",
        "tingeOfSoulKurlyOolong",
        "tingeOfSoulCoupangJinxuan",
      ],
      researchStatus: "source-backed+corrected+official-store+sns-link+review",
      fairEventStatus: "announced-official-linktree",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "6월 코엑스 티월드페스티벌 참가 예고",
          status: "announced-official-linktree",
          period: "2026-06",
          location: "COEX",
          summary:
            "틴지오브소울 공식 Linktree에 'COMING SOON : 6월 코엑스 티월드페스티벌' 문구와 티백/유리머그 상품 링크가 함께 노출됩니다. 구체 현장 이벤트 내용은 아직 공개 문구 기준 확인되지 않아 참가 예고로만 저장합니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "틴지오브소울 공식 Linktree", url: "https://linktr.ee/tingeofsoul" }],
        },
      ],
    },
    G15: {
      tags: ["#중국차", "#보이차", "#생차", "#숙차", "#고수차", "#백차", "#홍차"],
      products: ["노반차품", "맹해춘추차창", "보이생차", "보이숙차", "고수차", "운남백차", "홍차"],
      summary:
        "동정보이차 노반차품은 공식 방문 예약 이벤트 페이지, 공식 쇼핑몰/춘추차관 소개, 네이버 차 커뮤니티의 전시 시음 언급을 함께 확인해 취급품목 기준 중국차/보이차, 생차/숙차, 고수차, 백차, 홍차 계열로 분류했습니다.",
      sources: ["dongjeongFairEvent2026", "dongjeongShop", "dongjeongChunchu", "naverDongjeongBoichaCafe"],
      researchStatus: "source-backed+official-event+official-store+n-cafe-low",
      fairEventStatus: "confirmed-official",
      fairEventTags: ["#행사이벤트", "#현장증정", "#사전예약", "#현장시음"],
      fairEvents: [
        {
          title: "2026 차문화대전 방문 예약 이벤트",
          status: "confirmed-official",
          period: "2026-06-04 - 2026-06-07",
          location: "COEX Hall D",
          summary:
            "동정문화 공식 페이지 기준, 2026 보이차 공동구매 참여자가 사전예약 후 현장 방문하면 로고 찻잔, 2021 두춘 고수 홍차 50g, 춘추 소분 티케이스 증정 안내가 확인됩니다. 증정품은 소진 가능성이 있습니다.",
          tags: ["#행사이벤트", "#현장증정", "#사전예약", "#현장시음"],
          confidence: "high",
          links: [{ label: "동정문화 공식 이벤트 안내", url: "https://dongjeong.kr/tea-world-festival-2026-visit-event-guide/" }],
        },
      ],
      reviewThemes: [
        {
          sentiment: "positive",
          title: "전시 시음 경험 언급",
          summary:
            "차 커뮤니티 참가 후기에서 노반차품 동정보이차 부스에서 차를 시음했다는 언급이 확인됩니다. 독립 반복 출처는 아직 부족합니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["보이차는 틴포 2025 차문화대전 방문기"],
        },
      ],
    },
    G16: {
      tags: ["#대만차", "#우롱차"],
      products: [
        "Roasted Classic Dong Ding Oolong Tea",
        "Ten-Chih Oolong Tea",
        "Li-Chih Oolong Tea",
        "Aged Taiwan Oolong Tea",
        "Honey Gold Tea Bud",
        "Amber Muscatel Oolong Tea",
        "Rosy Cloud Red Oolong Tea",
      ],
      summary:
        "游山茶訪(YOSHAN TEA)은 공식 사이트에서 대만 동정우롱 계열로 출발한 브랜드이며, 공식 Classic Series 제품 페이지에서 Roasted Classic Dong Ding Oolong, Ten-Chih Oolong, Li-Chih Oolong, Aged Taiwan Oolong, Honey Gold Tea Bud, Amber Muscatel Oolong, Rosy Cloud Red Oolong 등 대만 우롱차 제품군이 확인됩니다. Reddit의 808 Aged Taiwan Oolong 리뷰까지 확인되어 취급품목 기준 대만차/우롱차로 정정했습니다.",
      sources: ["teaSeoulReport", "yoshanOfficial", "yoshanClassicProducts", "yoshanTaiwanOolongGuide", "yoshanLinktree", "yoshanInstagram", "yoshanRedditAgedOolong"],
      researchStatus: "source-backed-corrected+sns+community-review",
    },
    G19: {
      tags: ["#다기", "#차도구"],
      products: ["다하", "차도구"],
      summary:
        "동심명차는 네이버 차 커뮤니티의 차대전 방문 글에서 다하 구입/전시 언급이 확인되어 차도구 계열로 분류했습니다.",
      sources: ["naverDongsimCafe"],
      researchStatus: "source-backed+n-cafe-low",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "다하 전시/구입 언급",
          summary:
            "카페 방문 글에서 동심명차 부스의 다하와 전시 이미지가 인상적이었다는 단일 언급이 확인됩니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["차닉골 차대전 방문기"],
        },
      ],
    },
    G20: {
      tags: ["#대만차", "#중국차", "#우롱차", "#홍차", "#백차", "#자스민차", "#다식", "#행사이벤트", "#현장증정"],
      products: ["대만차", "중국차", "동방미인", "봉황단총", "백차", "청차", "우롱차", "자스민용주", "홍차", "월병/차과자", "차회", "티푸드", "차문화대전 가차뽑기"],
      summary:
        "포담 티하우스는 공개 리뷰 페이지, 공식 Instagram, DCInside, 와디즈에서 대만차/중국차, 동방미인, 봉황단총, 백차·청차·우롱차, 자스민용주, 홍차, 차회와 월병/차과자 운영 단서가 확인됩니다. 2026 국제차문화대전 포담가챠뽑기는 공식 Instagram과 커뮤니티 공유 글에서 확인되어 행사 이벤트로 저장했습니다.",
      sources: [
        "podemOfficialGachaInstagram",
        "podemDcGachaEvent2026",
        "podemPolle",
        "podemInstagram",
        "fodamTeahouseInstagram",
        "podemDcGachaReview2025",
        "podemDcJasmineReview",
        "podemWadizTurtleSnack",
      ],
      researchStatus: "source-backed+official-sns-event+community-review",
      fairEventStatus: "confirmed-official-sns",
      fairEventTags: ["#행사이벤트", "#현장증정"],
      fairEvents: [
        {
          title: "2026 국제차문화대전 포담가챠뽑기",
          status: "confirmed-official-sns",
          period: "2026-06-04 - 2026-06-07",
          location: "COEX Hall D",
          summary:
            "포담 티하우스 공식 Instagram 게시물 기준, 2026 국제차문화대전 기념 포담가챠뽑기 이벤트가 확인됩니다. 공개 게시물/커뮤니티 공유 맥락에서 차·다기류 경품, 사전 신청 마감, 꽝 없음 취지의 안내가 확인됩니다.",
          tags: ["#행사이벤트", "#현장증정"],
          confidence: "high",
          links: [
            { label: "포담 공식 Instagram 이벤트 게시물", url: "https://www.instagram.com/fodamteahouse/p/DYtykDqytjH/" },
            { label: "디시인사이드 후기/공유 게시물", url: "https://gall.dcinside.com/board/view/?id=tea&no=430616" },
            { label: "포담 Instagram formosatea27", url: "https://www.instagram.com/formosatea27/" },
          ],
        },
      ],
      reviewThemes: [
        {
          sentiment: "positive",
          title: "대만차 차회와 티푸드 언급",
          summary:
            "공개 리뷰에서 대만차 전문 티룸, 차회 참여, 차 설명, 월병/티푸드 경험이 긍정적으로 언급됩니다. 커뮤니티 글에서는 행사 가챠에 대한 기대와 꽝 없음 안내가 공유됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["뽈레 포담 티하우스 리뷰", "디시인사이드 차·음료 갤러리 포담 가챠 언급"],
        },
      ],
    },
    A27: {
      tags: ["#한국차", "#대용차", "#다식"],
      products: [
        "향기백련 순수연심차",
        "연심차",
        "연잎차",
        "연꽃차",
        "하옆초승차",
        "연근차",
        "황칠차",
        "구기자차",
        "연자육",
        "연자가루",
        "연근가루",
        "연잎가루",
      ],
      summary:
        "원본 OCR/기존 입력의 '두레연구당'은 공개 박람회 참가 목록과 기사에서 확인되는 '두레연 구품당' 계열 표기로 교정했습니다. 불교박람회·월드티엑스포·엠디저널 자료에서 연심차, 연꽃차, 연잎차, 하옆초승차, 연근차, 황칠차, 구기자차, 연자육/연가루류가 확인되어 한국차/대용차/다식 계열로 보강했습니다.",
      sources: [
        "dureyeonTeafair2025",
        "dureyeonSbs",
        "dureyeonSportsSeoul",
        "dureyeonMdJournalAnniv",
        "dureyeonPopup2026",
        "dureyeonReviewYeonsimcha",
        "dooreyeonBexpo2025",
        "dooreyeonWorldTeaExpo",
        "dooreyeonMd2025",
      ],
      researchStatus: "source-backed+corrected+product-review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "연심차/연잎차 제품 확인",
          summary:
            "공개 기사와 팝업 정보에서 향기백련 순수연심차, 연잎차, 연근차, 연자육·연가루류가 반복 확인됩니다. 공개 블로그 후기에서는 백화점 팝업 구매와 연심차 음용 경험이 확인됩니다.",
          mentions: 4,
          confidence: "medium",
          evidence: ["스포츠서울 두레연 기사", "팝가 두레연 팝업", "연심차 두레연 공개 후기"],
        },
      ],
    },
    A37: {
      tags: ["#공예", "#섬유공예", "#천연염색"],
      products: ["천연염색 의류", "천연염색 소품", "천연염색 원단/스카프"],
      summary:
        "원본 OCR/기존 입력의 '자연으로 홍고씨'는 공개 참가 목록과 공식 사이트에서 확인되는 '자연으로 옹크씨/옹크씨'로 교정했습니다. 공식 소개와 공개 전시 자료에서 자연 추출 염료를 사용한 의류·소품 제작이 확인되어 천연염색/섬유공예 계열로 분류했습니다.",
      sources: ["ongkeussiTeafair2025", "ongkeussiOfficial", "ongkeussiOfficialIntro", "ongkeussiAvingMegashow", "ongkeussiBexpo2025"],
      researchStatus: "source-backed+corrected+official-site",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "천연염색 브랜드 확인",
          summary:
            "공식 사이트와 전시 참가 자료에서 천연염색 의류·소품 브랜드로 확인됩니다. 차문화대전 한정 이벤트나 소비자 반복 리뷰는 공개 자료에서 아직 확인하지 못했습니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["옹크씨 공식 소개", "AVING 옹크씨 기사", "서울국제불교박람회 참가업체 페이지"],
        },
      ],
    },
    B22: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["청자 다기", "3~5인용 다기", "차도구", "도예 작품"],
      summary:
        "원본 OCR의 '옥산도협'은 공개 사업자/작가 정보와 한국차인연합회 자료에서 확인되는 '욱산도헌'으로 교정했습니다. 김석만 작가의 차도구전과 명다기 품평대회 다기 부문 단서가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["uksanDataGoKr", "uksanKimSeokman", "uksanTeaunionExhibition", "uksanTeaunionAward"],
      researchStatus: "source-backed+corrected+award",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "차도구전/명다기 수상 단서",
          summary:
            "한국차인연합회 공개 자료에서 김석만 차도구전과 명다기 품평대회 다기 부문 수상 단서가 확인됩니다. 제품별 소비자 리뷰보다는 작가/작품 검증 근거입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["한국차인연합회 김석만 차도구전", "한국차인연합회 명다기 품평대회"],
        },
      ],
    },
    F31: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["다기", "도예 작품", "차도구"],
      summary:
        "원본 OCR/기존 입력의 '모율 황선희도방'은 공개 전시·차문화 행사 자료에서 '모을 황선회도방/황선회도방' 표기로 확인되어 교정했습니다. 황선회 작가의 다기 전시와 해남차도구전국공모전 대상 단서가 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["hwangseonhoeJinju", "moeulTeaCulture2024", "hwangseonhoeHaenamAward"],
      researchStatus: "source-backed+corrected+award",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "차도구 공모전 수상 단서",
          summary:
            "월간도예 공개 기사에서 황선회 작가의 해남차도구전국공모전 대상 단서가 확인됩니다. 소비자 사용 리뷰가 아니라 작품/공모전 검증 근거로 저장했습니다.",
          mentions: 1,
          confidence: "medium",
          evidence: ["월간도예 해남차도구전국공모전 기사"],
        },
      ],
    },
    F29: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["백자 다관", "다기", "도예 작품"],
      summary:
        "원본 OCR/기존 입력의 '식곡요'는 공개 상품/전시 정보에서 확인되는 '심곡요'로 교정했습니다. 백자 다관과 도예 작품 단서가 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      sources: ["simgokyoCbw", "simgokyoTeapot", "simgokyoMiryang"],
      researchStatus: "source-backed+corrected+product-page",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "백자 다관 상품 단서 확인",
          summary:
            "공개 상품 페이지에서 심곡요 백자 다관이 확인됩니다. 독립 반복 리뷰는 아직 충분하지 않아 평가 요약은 보류합니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["심곡요 백자다관 상품 페이지"],
        },
      ],
    },
    D29: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["결함의기록 차도구", "도자 차도구", "도예 작품"],
      summary:
        "공예정원 온라인숍의 '김동인 결함의기록 차도구' 카테고리와 KCDF 윈도우갤러리 보도에서 김동인 도자 참여 단서가 확인되어 도예/다기·차도구로 분류했습니다. 동명이인 가능성을 줄이기 위해 차도구 상품과 도자 전시 근거만 반영했습니다.",
      sources: ["kimDonginKcdfShop", "kimDonginKcdfNews"],
      researchStatus: "source-backed+artist-match",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "2026 국제차문화대전 D29 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D29",
          summary:
            "공식 Instagram에서 준비 작품, 기간, 장소, D29 부스번호 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "김동인 참가 안내", url: "https://www.instagram.com/kim.ey/p/DY1D4JyAS19/" }],
        },
      ],
      reviewThemes: [
        {
          sentiment: "screened",
          title: "차도구 상품/도자 전시 확인",
          summary:
            "공예정원 온라인숍에서 '결함의기록 차도구' 카테고리가 확인되고, KCDF 보도에서 도자 전시 참여 단서가 확인됩니다. 공개 소비자 반복 리뷰는 아직 충분하지 않습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["공예정원 김동인 차도구 카테고리", "KCDF 윈도우갤러리 보도"],
        },
      ],
    },
    F20: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["백자 찻잔", "투광잔", "다기"],
      summary:
        "원본 OCR/기존 입력의 '영화도방'은 공식몰·공식 Instagram·공개 상품 정보에서 확인되는 '연화도방'으로 교정했습니다. 백자 찻잔·투광잔 등 차도구 상품이 확인되어 도예/다기/차도구 계열로 분류했습니다. Instagram 공개 프로필에서 2026 국제차문화대전 참가 예고는 확인되나, 별도 할인·증정 이벤트는 확인하지 못했습니다.",
      sources: ["yeonhwadobangOfficial", "yeonhwadobangCup", "yeonhwadobangHtd", "yeonhwadobangInstagram"],
      researchStatus: "source-backed+corrected+official-store+sns",
      fairEventStatus: "attendance-confirmed-only",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "국제차문화대전 F20 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D F20",
          summary:
            "공식 Instagram 프로필에서 2026 국제차문화대전 6월 4일-7일 참가 예고가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "연화도방 Instagram", url: "https://www.instagram.com/yeonhwadobang/" }],
        },
      ],
      reviewThemes: [
        {
          sentiment: "screened",
          title: "투광잔/찻잔 상품 확인",
          summary:
            "공식몰에서 곡선 투광잔 상품이 확인되고, 공식 Instagram 공개 프로필에서 2026 국제차문화대전 참가 예고가 확인됩니다. 별도 행사 한정 이벤트나 반복 소비자 평가는 확인하지 못했습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["연화도방 공식몰", "연화도방 공식 Instagram"],
        },
      ],
    },
    E5: {
      tags: ["#공예", "#차도구"],
      products: ["금속공예", "금속 차도구", "공예 전시품"],
      summary:
        "원본 OCR/기존 입력의 '염기순 금속전'은 공개 차문화 행사 자료와 불교박람회 참가기업, ROYAL&CO. 차도구 전시 자료에서 확인되는 '엄기순 금속전/엄기순'으로 교정했습니다. 금속공예 기반 차도구 전시 단서가 확인되어 공예/차도구로 분류했습니다.",
      sources: ["umGisunTeaCulture2022", "umGisunBexpo", "umGisunRoyalTea"],
      researchStatus: "source-backed+corrected+exhibition",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "금속공예 차도구 전시 확인",
          summary:
            "ROYAL&CO. 공개 전시 페이지에서 엄기순 금속공예가와 차도구 전시 단서가 확인됩니다. 공개 소비자 리뷰는 아직 충분하지 않습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["ROYAL&CO. 전시 페이지", "서울국제불교박람회 참가기업 페이지"],
        },
      ],
    },
    F5: {
      tags: ["#차도구", "#공예"],
      products: ["은주전자", "은다관", "금속 차도구", "금속공예"],
      summary:
        "원본 OCR/기존 입력의 '교무공방'은 공식 홈페이지와 공개 방송/공예 기사에서 확인되는 '교문공방'으로 교정했습니다. 은주전자·은다관 계열 금속 차도구와 공예 수상 단서가 확인되어 차도구/공예로 분류했습니다.",
      sources: ["gyomunOfficial", "gyomunTvProfile", "gyomunCraftAward"],
      researchStatus: "source-backed+corrected+official-site",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "은주전자/공예 수상 단서",
          summary:
            "공개 방송 정리와 경기도 공예품 경진대회 기사에서 교문공방의 은주전자·금속공예 및 수상 단서가 확인됩니다. 소비자 맛/사용 반복 리뷰는 아직 충분하지 않습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["동네 한 바퀴 공개 정리", "경기도 공예품 경진대회 기사"],
        },
      ],
    },
    F1: {
      tags: ["#다식"],
      products: ["궁중떡", "수제 찹쌀약과", "생강젤리", "대추칩", "전통 간식"],
      summary:
        "자연을담다는 하동세계차엑스포와 카페&베이커리페어, 메가쇼, 불교박람회 식품관 공개 참가 자료에서 궁중떡·수제 찹쌀약과·생강젤리·대추칩 계열 품목이 확인되어 차와 함께 소비되는 다식 계열로 분류했습니다. 차류 자체 취급 근거는 확인되지 않아 대용차 태그는 제외했습니다.",
      sources: ["jayeoneulDamdaHadongExpo", "jayeoneulDamdaCafeBakery", "jayeoneulDamdaMegaShow", "jayeoneulDamdaBexpoFood"],
      researchStatus: "source-backed+exhibitor-list",
      reviewThemes: [
        {
          sentiment: "screened",
          title: "다식류 참가품목 확인",
          summary:
            "공개 전시 참가 자료에서 궁중떡, 수제 찹쌀약과, 생강젤리, 대추칩 품목이 확인됩니다. 제품별 소비자 반복 리뷰는 아직 충분하지 않습니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["하동세계차엑스포 참가 목록", "카페&베이커리페어 참가품목", "메가쇼 참가업체 파일"],
        },
      ],
    },
    H13: {
      tags: ["#중국차", "#홍차"],
      products: ["양선홍차", "정산소종 계열 홍차"],
      summary:
        "H13 복수 표기 중 '茗扬天下'는 공개 판매 페이지에서 양선홍차/정산소종 계열 중국 홍차 단서가 확인되어 취급품목 기준 중국차/홍차로 분류했습니다. 후코퍼레이션·복경도사 개별 근거는 추가 검수 대상으로 남깁니다.",
      sources: ["mingyangHongcha", "mingyangLongjing"],
      researchStatus: "source-backed-partial-vendor-match-low-medium",
    },
    G23: {
      tags: ["#대용차", "#다식", "#주스"],
      products: ["아람드리 감귤주스", "과채음료", "자두", "포도", "사과", "샤인머스캣"],
      summary:
        "아람드리는 공개 판매 페이지에서 농업회사법인 아람농장㈜의 아람드리 감귤주스와 자두 등 과채류/과채음료가 확인됩니다. 기존 생강원액·홍도라지 단서는 동일 상호 혼동 가능성이 있어 우선 상품 페이지로 확인된 과채음료/과일 중심으로 정정했습니다.",
      sources: ["aramdeuriBizMegashow", "aramdeuriBexpoDirectory", "aramdeuriTeaFairReview2025", "aramdeuriOasisJuice", "aramdeuriSsgPlum"],
      researchStatus: "source-backed+store-review+corrected-scope",
    },
    G27: {
      tags: ["#다기", "#차도구", "#공예", "#말차"],
      products: ["전통 차도구", "다기", "차회 도구", "말차 관련 도구"],
      summary:
        "여원은 공개 보도와 여행 후기에서 전통 차도구, 일본 전통 다구, 차회 공간, 말차 관련 활동 단서가 확인되어 다기/차도구/공예 및 말차 관련 항목으로 분류했습니다.",
      sources: ["yeowonBulgyoNews", "yeowonTripReview"],
      researchStatus: "source-backed",
    },
    G22: {
      tags: ["#중국차", "#보이차", "#생차", "#고수차"],
      products: ["九山之臻 보이생차", "2019 春 刮风寨 200g 生茶饼", "운남 보이차"],
      summary:
        "원본 부스명 '상해구산지진차문화유한공사'는 공개 중국어 자료상 브랜드명 '九山之臻'과 연결되는 것으로 보입니다. 古茶居 품평과 2020 上海茶博会 참가 기사에서 운남 보이생차, 특히 2019 春 刮风寨 200g 生茶饼 단서가 확인되어 취급품목 기준 중국차/보이차/생차/고수차 계열로 분류했습니다.",
      sources: ["jiushanGuchajuReview", "jiushanShanghaiTeaExpo2020"],
      researchStatus: "source-backed-medium-confidence",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "보이생차 품평 확인",
          summary:
            "古茶居 품평에서 九山之臻 2019 春 刮风寨 生茶饼의 산야운, 회감, 생진, 내포감이 긍정적으로 언급됩니다. 단일 품평 근거라 신뢰도는 중간으로 표시합니다.",
          mentions: 1,
          confidence: "medium",
          evidence: ["古茶居 九山之臻 품평"],
        },
      ],
    },
    H7: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["분청 차도구", "다기", "도예 작품"],
      summary:
        "원본 부스명 '상명'은 공개 전시·상품 자료에서 확인되는 '상명요'로 교정했습니다. 분청 차도구 전시/판매 단서가 확인되어 다기/도예/차도구 계열로 분류했습니다.",
      sources: ["sangmyeongKcdf", "sangmyeongMagpie"],
      researchStatus: "source-backed+corrected",
    },
    H24: {
      tags: ["#차도구", "#공예"],
      products: ["맞춤형 찻자리", "티매트", "잔받침", "티코지", "다구집", "냅킨/냅킨홀더"],
      summary:
        "수향은 불교박람회 공개 페이지/목록과 디렉터리에서 맞춤형 찻자리, 티매트, 잔받침, 티코지, 다구집, 냅킨류 단서가 확인되어 차도구/공예 계열로 분류했습니다.",
      sources: ["suhyangBexpoCompany", "suhyangBexpo2025List", "suhyangBexpo2024", "suhyangBexpo2022Directory"],
      researchStatus: "source-backed",
    },
    H18: {
      tags: ["#홍차", "#전통찻집"],
      products: ["밀크티", "찻집 음료", "티하우스"],
      summary:
        "원본 입력의 '하나실크로드티'는 정확 일치 공개 근거가 약해, 산업통상자원부 외국인투자기업정보와 다이닝코드에서 확인되는 '(주)실크로드티/실크로드티'로 보수적으로 교정했습니다. 공개 법인 정보는 서울 강서구 방화대로8길 56의 상품 종합 도매업·무역업 법인으로 확인되고, 다이닝코드 장소 정보에서는 공항동 찻집, 밀크티 주문 리뷰가 확인됩니다. 중국 투자국가 정보만으로 취급품목을 중국차로 단정하지 않고, 현재 제품 근거는 밀크티/티하우스 음료 수준으로 표시합니다.",
      sources: ["silkroadTeaMotie", "silkroadTeaDiningCode"],
      researchStatus: "source-backed-corrected-low-product-depth",
    },
    E18: {
      tags: ["#공예", "#도예", "#문화단체"],
      products: ["부산 공예", "도자 공예", "조합 공예품"],
      summary:
        "부산광역시 공예협동조합 공식 홈페이지와 부산역사문화대전에서 부산 지역 공예 산업 계승·발전 목적의 공예조합임이 확인되어 공예/도예/문화단체 계열로 분류했습니다. 토산요 개별 작품 정보는 추가 확인 전까지 조합 단위 근거로만 표시합니다.",
      sources: ["busanCraftsOfficial", "busanCraftsCulture"],
      researchStatus: "source-backed-organization",
    },
    E20: {
      tags: ["#공예", "#도예", "#다기", "#차도구", "#교육"],
      products: ["미니 3인 다기", "찻잔", "도자기 수강/판매", "도자기 디퓨저", "도자 오브제"],
      summary:
        "원본 OCR의 '다슬도예'는 공개 Instagram 계정명과 출품 맥락을 대조해 '다솔도예'로 교정했습니다. 다솔도예 공식 Instagram에서 미니 3인 다기, 찻잔, 도자기 수강/판매, 도자기 디퓨저와 오브제 작업이 확인되어 도예/다기·차도구/교육 계열로 분류했습니다.",
      sources: ["busanCraftsOfficial", "busanCraftsCulture", "dasoldoyeInstagram", "dasolScentInstagram", "dasoldoyeYangsan", "dasoldoyeAjunews"],
      researchStatus: "source-backed+sns+name-corrected",
    },
    E21: {
      tags: ["#도예", "#공예", "#차도구"],
      products: ["주문제작 도자기", "반려동물 초상화 보석함/그릇", "도자기 오브제", "찻잔 겸용 기물", "원데이클래스"],
      summary:
        "김무진 명의는 파란나비공방 공개 Instagram 게시물의 작가/참여자 맥락과 연결되어 확인됩니다. 파란나비공방 Instagram, 인포크, 아이디어스에서 주문제작 도자기, 반려동물 초상화 보석함/그릇, 도자기·유리 오브제, 원데이클래스와 찻잔 겸용 기물이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["parannabieInstagram", "parannabieInpock", "parannabieIdus", "parannabieYoutube"],
      researchStatus: "source-backed+sns+store",
    },
    E26: {
      tags: ["#도예", "#다기", "#차도구", "#분청"],
      products: ["무유 매화 다관", "분청 무유 찻잔", "숙우", "다판/차판", "장작가마 분청 차도구"],
      summary:
        "원본 OCR의 '후향요'는 직접 검색 결과에서 같은 도예/다기 맥락의 '효향요 이인수' 공개 계정과 공부차 상품 페이지가 강하게 확인되어 효향요로 교정했습니다. 공부차 상품 설명에서 경북 칠곡 효향요, 장작가마 재날림, 무유 매화 다관, 분청 무유 찻잔과 다관 중심 차도구 제작이 확인됩니다.",
      sources: ["hyohyangyoInstagram", "hyohyangyoGongboochaTeapot", "hyohyangyoGongboochaCup"],
      researchStatus: "source-backed+sns+name-corrected-low-confidence",
    },
    H1: {
      tags: ["#중국차", "#보이차"],
      products: ["노보이차", "골동보이차", "강성호 생차", "숙차", "중차 황인", "차도구", "골동기물", "보이차 테이스팅"],
      summary:
        "보이차전문점 명가원은 공개 장소/상품 자료에서 1999년부터 운영된 보이차 전문점, 노보이차·골동보이차·차도구·골동기물, 강성호 생차/숙차/중차 황인 상품 단서가 확인되어 중국차/보이차 계열로 보강했습니다.",
      sources: ["myeonggawonMencha", "myeonggawonInstagram", "myeonggawonSiksin", "myeonggawonOrientea", "myeonggawonTabling", "myeonggawonOrientea1998", "myeonggawonOrientea1999"],
      researchStatus: "source-backed+sns+product-review",
    },
    H2: {
      tags: ["#중국차", "#보이차", "#흑차", "#교육"],
      products: ["보이차", "흑차", "보이차 인문학", "차문화 교육/체험"],
      summary:
        "차우림은 공개 블로그/장소 정보와 YES24 저서·저자 정보에서 이원종의 보이차 저술, 양주 차우림 운영, 보이차/흑차 인문학·교육 단서가 확인되어 중국차/보이차/교육 계열로 보강했습니다.",
      sources: ["chawoorimBlog", "chawoorimYangju", "chawoorimBook", "chawoorimYes24Book", "chawoorimYes24Author"],
      researchStatus: "source-backed+sns",
    },
    H3: {
      tags: ["#중국차", "#보이차", "#홍차", "#녹차", "#우롱차", "#다기", "#차도구"],
      products: ["중국차", "보이차", "홍차", "녹차", "대홍포", "설국차", "다기", "경덕진 찻잔세트", "자사잔", "개완", "찻잔"],
      summary:
        "한차원 공개 지역업체 정보와 쿠팡 판매 페이지에서 보이차·홍차·녹차·대홍포 등 중국차와 경덕진 찻잔세트, 자사잔, 개완, 찻잔류가 확인되어 중국차/차도구 계열로 보강했습니다.",
      sources: ["hanchawon", "hanchawonCoupangMokdanCup", "hanchawonCoupangGyeongdeokSet"],
      researchStatus: "source-backed+public-product",
    },
    H5: {
      tags: [
        "#중국차",
        "#보이차",
        "#생차",
        "#숙차",
        "#녹차",
        "#용정차",
        "#홍차",
        "#기문홍차",
        "#금준미",
        "#백차",
        "#우롱차",
        "#암차",
        "#대홍포",
        "#흑차",
        "#안화흑차",
        "#아포차",
        "#다기",
        "#자사호",
        "#청화백자",
        "#차도구",
      ],
      products: [
        "보이차",
        "시쌍판나/포랑산 고수차",
        "생차",
        "숙차",
        "용정차",
        "백차",
        "대홍포",
        "금준미",
        "기문홍차",
        "안화흑차",
        "아포차",
        "윤차인",
        "자사호",
        "청화백자다기",
      ],
      summary:
        "선묘당(善妙堂 CHINA TEA)은 공식몰, 서울국제불교박람회 참가 정보, DCInside 글에서 운남 시쌍판나/포랑산 고수차, 보이차 생차/숙차, 용정차, 백차, 대홍포, 금준미, 기문홍차, 안화흑차, 아포차, 윤차인, 자사호/청화백자다기 취급 단서가 확인되어 중국차 중심 복합 차류로 보강했습니다.",
      sources: ["seonmyodangBexpo", "seonmyodangOfficial", "seonmyodangDcAnhua", "seonmyodangDcYunchain", "seonmyodangDcExpo"],
      researchStatus: "source-backed+community-review",
    },
    H6: {
      tags: ["#중국차", "#보이차", "#홍차", "#백차", "#녹차"],
      products: ["백모단", "야생백차", "보이차", "야생홍차", "난화향 감로"],
      summary:
        "복향명차는 공개 밴드와 네이버 블로그/카페 리뷰에서 백모단·야생백차, 보이차, 야생홍차, 난화향 감로 등 중국차 계열 차품 시음/판매 언급이 확인되어 중국차/백차/보이차/홍차 계열로 분류했습니다.",
      sources: [
        "bokhyangBand",
        "bokhyangBlogBaekmodan",
        "bokhyangCafeLanhuaxiang",
        "bokhyangCafePuer1993",
        "bokhyangCafeWildWhite",
        "bokhyangExpoReview",
      ],
      researchStatus: "source-backed+sns+n-cafe+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "백차/백모단 시음 언급",
          summary:
            "공개 블로그와 차 커뮤니티에서 복향명차 백모단, 야생백차, 오래된 백차를 끓여 마신 경험과 백호·은은한 향에 대한 언급이 반복됩니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["복향명차 백모단 리뷰", "복향명차 25년 야생백차", "복향명차 백모단 2008"],
        },
        {
          sentiment: "positive",
          title: "보이차/녹차/홍차 제품군 시음",
          summary:
            "카페와 박람회 후기에서 난화향 감로, 1993년 보이생산차, 보이숙차, 야생홍차 등 여러 차품 시음 기록이 확인됩니다.",
          mentions: 4,
          confidence: "medium",
          evidence: ["복향명차 난화향 감로 25", "복향명차 1993년 보이생산차", "차문화대전 보이숙차 시음", "복향명차 야생홍차"],
        },
      ],
    },
    H10: {
      tags: ["#중국차", "#보이차", "#생차", "#숙차", "#고수차", "#홍차", "#백차", "#차고", "#티백", "#자사호", "#다기", "#차도구"],
      products: ["오운산고차", "보이차", "고수차", "차왕수 10종", "운남 홍차", "백차", "차고", "프리미엄 고수 보이차 티백", "고수황편", "자사호/차도구"],
      summary:
        "석가명차 오운산고차는 본사/서울점 공식몰, 공식 상품 정보, 티스토리 저장고 방문기, DCInside 블라인드 테스트, 네이버 차 커뮤니티 시음기에서 운남 보이차/고수차, 차왕수 10종, 봉경대수홍차, 석가백차, 차고, 티백, 자사호/차도구가 확인되어 중국차 중심 복합 차류로 보강했습니다.",
      sources: [
        "seokgaOfficial",
        "seokgaSeoulOfficial",
        "seokgaChawangsuOfficial",
        "seokgaEcoby",
        "seokgaStorageTistory",
        "seokgaDcBlind",
        "naverSeokga2016Cafe",
        "naverSeokgaGosuCafe",
        "naverSeokgaHongchaCafe",
        "naverSeokgaWhiteTeaCafe",
      ],
      researchStatus: "source-backed+n-cafe+community-review+blog-review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "오운산/석가명차 보이차 시음",
          summary:
            "차 커뮤니티에서 2016기념병, 고수병배 등 오운산 석가명차 차품의 시음기가 확인되며 꿀향, 꽃향, 부드러움, 달달함 같은 표현이 반복됩니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["차닉골 2016기념병 시음", "다성보이차 고수병배 시음"],
        },
        {
          sentiment: "positive",
          title: "홍차/백차 제품군 언급",
          summary:
            "별도 카페 글에서 오운산 봉경대수홍차와 석가백차 시음이 확인되어 보이차 외 중국 홍차/백차 제품군도 함께 태그했습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["오렌지페코 봉경대수홍차", "오리엔티 석가백차"],
        },
      ],
    },
    H14: {
      tags: ["#중국차", "#보이차", "#생차", "#고수차", "#우롱차", "#오룡차", "#봉황단총"],
      products: ["봉황단총", "오룡차", "보이차", "노반장 보이차", "생차 청병", "고수차"],
      summary:
        "취죽진여실은 불교문화엑스포 디렉토리, 사업자/인허가 정보, DCInside 커뮤니티, 네이버 차 커뮤니티 시음 글에서 보이차, 오룡차/봉황단총, 노반장 보이차, 고산유기두춘청병, 고수 송차왕 등이 확인되어 중국차/보이차/우롱차 계열로 보강했습니다.",
      sources: [
        "chwijukBexpoDirectory",
        "chwijukBizKorea",
        "chwijukOpengo",
        "chwijukDcDomesticTop",
        "naverChwijukDancongCafe",
        "naverChwijukShareCafe",
        "naverChwijukNobanjangCafe",
        "naverChwijukGosanCafe",
        "naverChwijukSongchaCafe",
      ],
      researchStatus: "source-backed+n-cafe+community-mention+directory",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "봉황단총/보이차 시음 호평",
          summary:
            "차 커뮤니티 글에서 봉황단총 야래향의 향과 맛, 고산유기두춘청병의 달큰함, 취죽진여실 차품에 대한 신뢰가 반복적으로 언급됩니다.",
          mentions: 4,
          confidence: "medium",
          evidence: ["차울림 봉황단총 야래향", "차울림 고산유기두춘청병", "오리엔티 고수 송차왕"],
        },
      ],
    },
    H17: {
      tags: ["#중국차", "#우롱차", "#암차"],
      products: ["무이암차", "중국 우롱차"],
      summary:
        "원 표기 '일상차(壹叁茶)'는 글로벌 티&카페쇼 공개 현황판에서 '壹叁荼® 武夷岩茶'로 확인되어 한자 표기를 교정했습니다. 취급품목은 무이암차로 확인되어 중국차/우롱차/암차 계열로 분류했습니다.",
      sources: ["ilsangchaGcafeshow"],
      researchStatus: "source-backed",
    },
    C8: {
      tags: ["#홍차"],
      products: ["Black Tea", "자드리 茶 이야기", "카페쇼 참가 홍차 브랜드"],
      summary:
        "기존 OCR/입력값의 '차드리 TEA SHOP'은 공개 전시 리포트에서 확인되는 '자드리 茶 이야기(JDDE:LEE TEA STORY)'로 교정했습니다. Cafe Show Seoul 공개 자료에서 Black Tea 품목으로 확인되어 취급품목 기준 홍차 계열로 분류했습니다.",
      sources: ["jadriCafeShow2020", "jadriCafeShow2019"],
      researchStatus: "source-backed-corrected",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "홍차 전시 브랜드 확인",
          summary:
            "공개 전시 리포트에서 자드리 茶 이야기/JDDE:LEE TEA STORY와 Black Tea 품목은 확인되지만, 독립 제품 리뷰가 반복 확인되지는 않았습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["Cafe Show Seoul 2020 리포트", "Cafe Show Seoul 2019 참가업체 페이지"],
        },
      ],
    },
    C11: {
      tags: ["#한국차"],
      products: ["수제차", "차(tea) 참가업체"],
      summary:
        "기존 OCR/입력값의 '수제차천수관'은 공개 전시 참가업체 목록에서 확인되는 '수제차전수관'으로 교정했습니다. 명원세계차박람회 공개 참가업체 목록의 차(tea) 카테고리에서 확인되어 한국차 계열로 보류 없이 분류했습니다.",
      sources: ["worldTeaExpo2025TeaList"],
      researchStatus: "source-backed-corrected-limited",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "차 참가업체명 교정",
          summary:
            "공개 전시 참가업체 목록에서 수제차전수관 이름과 차 카테고리는 확인되지만, 제품별 독립 리뷰는 반복 확인되지 않았습니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["명원세계차박람회 2025 참가업체 리스트"],
        },
      ],
    },
    C13: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차", "#대용차"],
      products: ["지리산 하동 수제 홍차", "하동 유기농 수제홍차 노을향기", "하동 헛개잎차", "하동 가마솥수제차 선물세트"],
      summary:
        "기존 OCR/입력값의 '붓담골제다'는 공개 쇼핑몰·링크 페이지에서 확인되는 '붓당골제다'로 교정했습니다. 아이디어스 공개 상품에서 하동 수제 홍차, 유기농 수제홍차, 헛개잎차, 가마솥수제차 선물세트가 확인되어 취급품목 기준 한국차/홍차/발효차/대용차 계열로 분류했습니다.",
      sources: ["butdanggolIdusHongcha", "butdanggolIdusNoeul", "butdanggolIdusHutgae", "butdanggolIdusSet", "butdanggolLinktree"],
      researchStatus: "source-backed-corrected+store",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "하동 수제 홍차/선물세트 판매 확인",
          summary:
            "공개 쇼핑몰에서 하동 수제 홍차와 수제차 선물세트 판매가 확인됩니다. 저장 가능한 독립 리뷰 반복 패턴은 제한적이어서 상품 확인 근거 중심으로 표시합니다.",
          mentions: 4,
          confidence: "medium",
          evidence: ["아이디어스 붓당골제다 상품 페이지", "붓당골제다 공식 Linktree"],
        },
      ],
    },
    C25: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["황제요 도예 작품", "끽다거", "무유다관", "자연유 찻잔"],
      summary:
        "공개 도예 프로필과 보도자료에서 삐딱한 도자기 황제요/이기호 작가의 도예 작업, 차도구 성격의 작품과 공예품대전 수상 이력이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["hwangjeyoProfile", "hwangjeyoWhabaeg"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "공예품대전 대상 수상 이력",
          summary:
            "황제요 이기호 작가의 끽다거 수상 이력과 도예 프로필이 공개 자료에서 확인됩니다. 소비자 제품 리뷰보다는 작가/작품 검증 근거입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["황제요 공개 도예 프로필", "화백신문 공예품대전 기사"],
        },
      ],
    },
    E15: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["예인요 임용택 다관", "개완", "차통", "찻잔", "사발"],
      summary:
        "김해 예인요/임용택 작가 공개 자료에서 다관, 개완, 차통, 찻잔, 사발 등 차도구 중심 도예 작업이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["yeinyoSeokuDawan", "yeinyoDawanProfile", "yeinyoGimhaeNews"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "다관·차도구 작업 확인",
          summary:
            "석우연담과 공개 프로필에서 예인요 임용택 작가의 다관, 개완, 차통 등 차도구 작업이 상세히 확인됩니다. 제품별 소비자 평점보다는 전시/작품 소개 근거입니다.",
          mentions: 3,
          confidence: "medium",
          evidence: ["석우연담 예인요 전시 글", "예인요 임용택 공개 프로필", "김해뉴스 기사"],
        },
      ],
    },
    F19: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["정호요 도예 작품", "임만재 작가 차도구", "빗살무늬 잔", "옻칠 다기세트"],
      summary:
        "경남신문과 공개 도예 프로필에서 김해 정호요/임만재 도예가의 작업 이력이 확인되고, 공개 자료에서 차도구·잔류 상품 언급이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["jeonghoyoKnnews", "jeonghoyoProfile"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "김해 정호요 도예 작업 확인",
          summary:
            "공개 기사와 프로필에서 정호요 임만재 작가의 도예 작업과 전시 이력이 확인됩니다. 저장 가능한 독립 소비자 리뷰 반복은 제한적입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["경남신문 정호요 기사", "정호요 임만재 공개 프로필"],
        },
      ],
    },
    H12: {
      tags: ["#중국차", "#보이차", "#생차", "#숙차", "#우롱차", "#암차", "#백차", "#홍차", "#흑차", "#다기", "#차도구"],
      products: [
        "18년 육계",
        "24년 우란갱 육계",
        "18년 국차 대홍포",
        "23년 봉황단총 송종/동방홍",
        "21년 백모단",
        "1990년대 소타차",
        "1990년대 7572 숙차",
        "11년 빙도",
        "1990년대 궁정보이",
        "차호/개완/공도배/호승",
      ],
      summary:
        "기존 OCR/입력값의 '야망시 프리미엄 티라운지'는 공식몰과 공개 전시 참가업체 목록에서 확인되는 '아망시 프리미엄 티라운지'로 교정했습니다. 공식몰 첫 화면과 카테고리에서 육계, 우란갱 육계, 대홍포, 봉황단총, 백모단, 1990년대 소타차/7572 숙차, 빙도, 궁정보이, 차호·개완·공도배 등 중국차와 다기류가 확인되어 취급품목 기준 중국차/보이차/생차/숙차/우롱차/암차/백차/홍차/흑차/차도구로 정정했습니다.",
      sources: ["amangsiOfficial", "worldTeaExpo2025TeaList", "amansiTabling"],
      researchStatus: "source-backed-corrected+official-store+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "공식몰 중국차·다기 상품 확인",
          summary:
            "아망시 공식몰에서 육계·대홍포·봉황단총·백모단·보이차와 차호·개완·공도배 등 다기류가 확인됩니다. 테이블링 공개 정보와 방문 리뷰에서도 티룸/보이차/홍차 및 티코스 경험이 확인됩니다.",
          mentions: 3,
          confidence: "high",
          evidence: ["아망시 공식몰", "테이블링 아망시 매장 정보", "아망시 공개 방문 후기"],
        },
      ],
    },
    E6: {
      tags: ["#한국차", "#교육"],
      products: ["예약제 티 스튜디오", "차 시음/차 경험 프로그램", "블렌딩 차"],
      summary:
        "Tea World Festival 공개 SNS에서 스튜디오 세온이 국제차문화대전 참가업체로 소개되고, 예약제로 운영되는 티 스튜디오와 세온만의 차를 선보인 맥락이 확인되어 취급품목 기준 한국차/교육 계열로 분류했습니다.",
      sources: ["studioSeonTeaWorld2024", "studioSeonTeaWorld2023"],
      researchStatus: "source-backed+sns",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "차 스튜디오 참가 이력 확인",
          summary:
            "공식 행사 SNS에서 스튜디오 세온의 참가와 차 스튜디오 운영 맥락은 확인되지만, 제품별 소비자 리뷰가 반복 확인되지는 않았습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["Tea World Festival 스튜디오 세온 공개 SNS"],
        },
      ],
    },
    E19: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["도예 팟", "참새잔", "동물 모티프 도자기", "수제 화분/찻자리 소품"],
      summary:
        "네이버 블로그, 네이버 카페, YouTube 공개 영상에서 슬우재의 도예공방/팟 작업, 차문화대전 참새잔, 동물 모티프 도자기 언급이 확인되어 도예/다기·차도구/공예 계열로 분류했습니다.",
      sources: ["seulwooBlogReview", "seulwooCafeMention", "seulwooYoutubeShort"],
      researchStatus: "source-backed+sns+n-cafe+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "도예 팟/동물 모티프 긍정 언급",
          summary:
            "공개 블로그와 카페에서 슬우재 팟의 조형감, 동물 모티프, 만족스럽다는 취지의 후기가 확인됩니다. 반복 수가 많지는 않아 중간 이하 신뢰도로 저장합니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["슬우재 팟 공개 블로그 후기", "슬우재 네이버 카페 홍보/후기"],
        },
        {
          sentiment: "neutral",
          title: "차문화대전 참새잔 확인",
          summary:
            "YouTube Shorts에서 차문화대전 슬우재도예공방 참새잔이 확인됩니다. 소비자 평가보다는 제품 존재 확인 근거입니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["차문화대전 참새잔 슬우재도예공방 영상"],
        },
      ],
    },
    A46: {
      tags: ["#한국차", "#대용차", "#교육"],
      products: ["차 이야기/차 교육", "새싹 차림", "차 시음/차문화 콘텐츠"],
      summary:
        "오차연각 공식 Instagram에서 차 이야기와 차문화 콘텐츠, 새싹 차림 관련 공개 게시물이 확인되어 취급품목 기준 한국차/대용차 및 차문화 교육 계열로 분류했습니다.",
      sources: ["ochayeongakInstagram"],
      researchStatus: "source-backed+sns",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "티월드 A46 부스 위치 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D A46",
          summary:
            "공식 Instagram에서 티월드 A46 부스 위치와 동선 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "오차연각 A46 안내", url: "https://www.instagram.com/p/DY1LDIwKnlR/" }],
        },
      ],
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "공식 SNS 운영 확인",
          summary:
            "공식 SNS에서 차문화 콘텐츠와 차 관련 게시물은 확인되지만, 제품별 독립 리뷰가 반복 확인되지는 않았습니다.",
          mentions: 1,
          confidence: "low",
          evidence: ["오차연각 공식 Instagram"],
        },
      ],
    },
    D19: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["무유소성 도자기", "호랑이 찻잔", "커피잔/머그컵", "차 거름망", "찻주전자"],
      summary:
        "Brown Things 2025 국제차문화대전 리뷰와 이음온라인 인터뷰에서 충주 해너울공방 임병한 도예가의 무유소성 도자기, 호랑이 찻잔, 차도구, 장작가마 작업이 확인되어 도예/다기·차도구 계열로 분류했습니다.",
      sources: ["haeneoulBrownthings2025", "haeneoulIeumInterview"],
      researchStatus: "source-backed+review",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "무유소성 호랑이 찻잔/차도구 주목",
          summary:
            "공개 리뷰에서 해너울 부스의 무유소성 호랑이 찻잔, 차 거름망, 찻주전자, 머그컵이 상세히 소개되고 독특한 문양과 장작가마 질감이 핵심 특징으로 언급됩니다.",
          mentions: 1,
          confidence: "medium",
          evidence: ["Brown Things 2025 국제차문화대전 해너울 리뷰"],
        },
      ],
    },
    A22: {
      tags: ["#대용차"],
      products: ["건강음료", "기능성 음료", "헬스베버리지 브랜드 상품"],
      summary:
        "헬스베버리지 공식 Instagram과 현대Hmall 브랜드위크 공개 페이지에서 건강음료/기능성 음료 브랜드 운영과 판매 채널이 확인되어 취급품목 기준 대용차 인접 건강음료 계열로 분류했습니다.",
      sources: ["healthBeverageInstagram", "healthBeverageHmall"],
      researchStatus: "source-backed+sns+store",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "공식 SNS/쇼핑 채널 확인",
          summary:
            "공식 SNS와 Hmall 브랜드 페이지는 확인되지만, 저장 가능한 독립 제품 리뷰가 반복 확인되지는 않았습니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["헬스베버리지 공식 Instagram", "현대Hmall 헬스베버리지 브랜드위크"],
        },
      ],
    },
    E31: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["화경도요 도예 작품", "장병우 도예연구소 작품", "공예품대전 수상작"],
      summary:
        "공개 작가 프로필과 매일신문 기사에서 장병우 화경도요/장병우 도예연구소의 도예 작업과 경상북도 공예품대전 대상 수상 이력이 확인되어 도예/공예 및 다기·차도구 계열로 분류했습니다.",
      sources: ["hwagyeongDoyoProfile", "hwagyeongDoyoAward"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "positive",
          title: "공예품대전 수상 이력",
          summary:
            "화경도요 장병우 작가의 공예품대전 대상 수상 이력과 도예연구소 운영 이력이 공개 자료에서 확인됩니다. 소비자 리뷰보다는 작가/작품 검증 근거입니다.",
          mentions: 2,
          confidence: "medium",
          evidence: ["장병우 화경도요 공개 프로필", "매일신문 공예품대전 수상 기사"],
        },
      ],
    },
    G11: {
      tags: ["#대만차", "#우롱차", "#홍차"],
      products: ["대만 동방미인차", "목책철관음", "시합차 전시"],
      summary:
        "K스피릿 국제차문화대전 기사에서 향적당의 대만 동방미인차와 목책철관음 시합차 전시가 확인되어 취급품목 기준 대만차/우롱차 계열로 분류했습니다.",
      sources: ["hyangjeokdangKSpirit"],
      researchStatus: "source-backed",
      reviewThemes: [
        {
          sentiment: "neutral",
          title: "대만차 전시 품목 확인",
          summary:
            "공개 기사에서 향적당의 동방미인차와 목책철관음 전시는 확인되지만, 제품별 소비자 리뷰는 반복 확인되지 않았습니다.",
          mentions: 1,
          confidence: "medium",
          evidence: ["K스피릿 국제차문화대전 향적당 언급"],
        },
      ],
    },
    B24: {
      manualVerified: true,
      tags: ["#도예", "#다기", "#차도구"],
      products: ["도예 공방", "다기/차도구"],
      summary:
        "공개 사업자 정보에서 가미공방 업체명과 사업자 기본 정보가 확인되었습니다. 공식 SNS·공식몰은 아직 확정하지 못했으나, 부스 성격상 도예/다기/차도구 계열로 임시 분류했습니다.",
      researchStatus: "source-backed-basic-profile",
    },
    H9: {
      manualVerified: true,
      tags: ["#한국차", "#중국차", "#녹차", "#청차", "#보이차", "#차도구"],
      products: ["녹차", "발효차", "청차", "보이차", "자사호", "차도구"],
      summary:
        "BEXPO 공개 전시관에서 업체명이 밀밀홍으로 확인되며, 출품품목으로 녹차와 발효차, 청차, 보이차, 자사호, 차도구가 확인되었습니다. 기존 입력의 '밀밀홈'은 공개 자료 기준 '밀밀홍'으로 교정했습니다.",
      researchStatus: "source-backed-name-corrected",
    },
    B20: {
      manualVerified: true,
      tags: ["#도예", "#다기", "#차도구"],
      products: ["도예 작품", "차도구"],
      summary:
        "공개 Instagram 및 Smartstore 링크에서 무결 스튜디오 계정과 도예/차도구 판매 채널이 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      researchStatus: "source-backed+sns",
    },
    C22: {
      manualVerified: true,
      tags: ["#도예", "#다기", "#차도구", "#백자"],
      products: ["조선백자", "백자 차도구", "도예 작품"],
      summary:
        "공식 홈페이지에서 조선백자 업체명이 확인되어 백자 기반 도예/다기/차도구 계열로 분류했습니다.",
      researchStatus: "source-backed",
    },
    F22: {
      manualVerified: true,
      tags: ["#도예", "#공예", "#차도구"],
      products: ["도예 작업", "차도구"],
      summary:
        "공개 작업장 링크에서 일의섬 도예작업장 관련 자료가 확인되어 도예/공예/차도구 계열로 분류했습니다.",
      researchStatus: "source-backed-basic-profile",
    },
    G14: {
      manualVerified: true,
      tags: ["#중국차", "#차도구"],
      products: ["중국차", "차도구"],
      summary:
        "Instagram 공개 프로필에서 四季茶香/사계다향 계정명이 확인되어 중국차 및 차도구 계열로 분류했습니다.",
      researchStatus: "source-backed+sns",
    },
    A29: {
      manualVerified: true,
      tags: ["#도예", "#다기", "#차도구"],
      products: ["토라세라믹", "개완", "숙우", "도예 차도구"],
      summary:
        "공개 Instagram 검색 결과와 프로필에서 토라세라믹 계정이 확인되며, 개완·숙우 등 차도구 게시물이 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      researchStatus: "source-backed+sns",
    },
    A1: {
      manualVerified: true,
      tags: ["#한국차", "#녹차", "#보이차", "#차도구"],
      products: ["녹차", "보이차", "차도구"],
      summary:
        "BEXPO 공개 전시관에서 업체명이 무유다원으로 확인되며, 출품품목으로 녹차, 보이차, 차도구가 확인되었습니다. 기존 입력의 '무우다원'은 공개 자료 기준 '무유다원'으로 교정했습니다.",
      researchStatus: "source-backed-name-corrected",
    },
    A17: {
      manualVerified: true,
      tags: ["#공예", "#디자인"],
      products: ["수작업 판화", "아트 상품", "갤러리 전시"],
      summary:
        "공개 Instagram 프로필에서 Gahyunart/가현판화공방 & 가현아트갤러리 계정이 확인되어 공예/디자인 계열로 분류했습니다. 기존 입력의 '가히아트'는 공개 계정 기준 '가현아트'로 교정했습니다.",
      researchStatus: "source-backed+sns-name-corrected",
    },
    B15: {
      manualVerified: true,
      tags: ["#홍차", "#녹차", "#우롱차", "#대용차"],
      products: ["티시럽", "홍차", "녹차", "우롱차", "허브티", "티백", "티웨어"],
      summary:
        "공개 Instagram 프로필과 공식몰에서 티팔레트 계정과 티시럽·홍차·녹차·우롱차·허브티·티백·티웨어 취급이 확인되었습니다. 기존 입력의 '티 플래트'는 공개 계정과 국제차문화대전 게시물 기준 '티팔레트'로 교정했습니다.",
      researchStatus: "source-backed+sns-name-corrected",
      fairEventTags: ["#행사이벤트"],
      fairEvents: [
        {
          title: "초대권 증정, 시음, 전제품 최대 15% 할인",
          status: "confirmed",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D B15",
          summary:
            "공식 Instagram에서 초대권 증정 이벤트가 확인되며 해당 댓글 이벤트는 마감되었습니다. 부스 안내 게시물에서는 밀크티/과일티 시음과 전제품 최대 15% 할인 행사가 확인됩니다.",
          tags: ["#행사이벤트"],
          confidence: "high",
          links: [
            { label: "티팔레트 초대권 이벤트", url: "https://www.instagram.com/p/DYlPQ16SRQZ/" },
            { label: "티팔레트 부스 할인 안내", url: "https://www.instagram.com/p/DY3wVMMBuhr/" },
          ],
        },
      ],
    },
    F32: {
      manualVerified: true,
      tags: ["#디자인"],
      products: ["브랜딩 디자인"],
      summary:
        "Google 검색 결과와 공개 Instagram 프로필에서 하다디자인 계정명이 확인되었습니다. 프로필 설명은 브랜딩 디자인으로, 차/도예 상품 근거는 아직 확인하지 못해 디자인 계열로만 분류했습니다.",
      researchStatus: "source-backed+sns-low-confidence",
    },
    "A7|(사)세계기독교차문화협회/ 일양차문화연구원 회원 티플라워(다화) 전시회": {
      tags: ["#한국차", "#교육", "#문화단체", "#대용차"],
      products: ["차문화 교육", "티플라워/다화 전시", "The Flower 도서"],
      summary:
        "세계기독교차문화협회는 문체부 법인 현황과 공개 기사에서 확인되고, 일양차문화연구원은 YES24 도서 페이지에서 The Flower/다화 자료가 확인됩니다. 소비자 상품 리뷰보다 차문화·다화 교육/전시 근거로 저장했습니다.",
      sources: ["worldChristianTeaMcst", "worldChristianTeaKmib", "ilyangTeaFlowerYes24"],
      researchStatus: "source-backed+book-page",
    },
    "A48|(사)한국 싱잉볼 협회": {
      tags: ["#싱잉볼", "#명상", "#교육", "#문화단체"],
      products: ["싱잉볼", "사운드테라피", "명상 교육", "체험 프로그램"],
      summary:
        "한국싱잉볼협회는 공개 기사와 젠테라피/BEXPO 공개 자료에서 싱잉볼, 사운드테라피, 명상/체험 교육이 확인됩니다. 2026 국제차문화대전 전용 프로모션은 아직 확인되지 않았습니다.",
      sources: ["koreanSingingBowlNews", "koreanSingingBowlEdaily", "zentherapyBexpo"],
      researchStatus: "source-backed+screened-event",
    },
    "A48|(주)젠테라피 네츄럴 힐링센터": {
      tags: ["#싱잉볼", "#명상", "#공예", "#교육"],
      products: ["싱잉볼", "크리스탈싱잉볼", "띵샤", "차임", "천연원석", "명상/힐링 교육"],
      summary:
        "젠테라피 공식 소개, 젠힐링샵, BEXPO 공개 자료에서 싱잉볼·크리스탈싱잉볼·띵샤·차임·천연원석과 명상/힐링 교육이 확인됩니다. 2026 국제차문화대전 전용 프로모션은 아직 확인되지 않았습니다.",
      sources: ["zentherapyAbout", "zenhealingshopOfficial", "zentherapyBexpo", "gentherapyNews", "gentherapyNaverBlog"],
      researchStatus: "source-backed+official-store+sns-screened-event",
    },
    A10: {
      tags: [],
      products: ["대구 국제통상 시음회 참가 기록", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "공부차 2025 한국 차산업 경영인 협회 초대 시음회 후기에서 '대구 국제통상' 참가가 확인됩니다. 공식 채널, 제품군, 원산지/차종은 공개 근거가 부족해 태그를 임의 부여하지 않았습니다.",
      sources: ["daeguGukjeTongsangTasting"],
      researchStatus: "source-backed-limited-no-product-tags",
    },
    F2: {
      tags: ["#중국차", "#흑차", "#차도구"],
      products: ["경위복차", "복차/복전차", "익생 티백 복차", "경전복방", "경전 1368", "전용 티메이커"],
      summary:
        "JINGWEI FU TEA 경위복차/가인갤러리는 BEXPO 공개 정보, 공식 Modoo, 공개 판매 페이지에서 중국 섬서 경위복차유한공사 복차·복전차와 전용 티메이커가 확인되어 중국 흑차 및 차도구 계열로 분류했습니다.",
      sources: ["jingweiBexpo", "jingweiModoo", "jingweiCoupang", "jingweiBrunch"],
      researchStatus: "source-backed+store+review",
    },
    E2: {
      tags: ["#차도구", "#공예"],
      products: ["방짜유기", "생활식기", "차도구", "연꽃 물다기", "찻잔 세트"],
      summary:
        "김천방짜유기 명인 이운형/김천방짜유기공방은 BEXPO 공개 정보와 유기샵, 백년소공인 보도에서 방짜유기 생활식기와 차도구·물다기·찻잔 세트가 확인되어 공예/차도구 계열로 분류했습니다.",
      sources: ["kimcheonBexpo", "kimcheonYugiShop", "kimcheonFnNews"],
      researchStatus: "source-backed+official-store+news",
    },
    F32: {
      manualVerified: true,
      tags: [],
      category: "정보 확인 필요",
      products: ["공개 자료 확인 필요"],
      summary:
        "F32 부스 참가 업체명은 HaDa design(하다디자인)으로 확인되지만, 공개 자료에서 해당 부스 업체의 공식 채널·제품군·리뷰를 특정할 수 없어 업체 설명을 보류합니다.",
      sources: [],
      researchStatus: "insufficient",
    },
    A17: {
      tags: ["#공예", "#디자인"],
      products: ["판화", "실크스크린 에디션", "아트 상품"],
      summary:
        "가현아트 공식 홈페이지와 오늘의집 공개 판매 목록에서 작가 협업 판화와 실크스크린 에디션 판매가 확인되어 공예/디자인 계열로 분류했습니다.",
      sources: ["gahyunOfficial", "gahyunOhouse"],
      researchStatus: "source-backed+official-store",
    },
    E4: {
      tags: ["#한국차", "#대용차"],
      products: ["한방꽃차", "꽃차 제다", "꽃차/잎차/뿌리차/열매차 교육"],
      summary:
        "경기한방꽃차협동조합은 카페쇼 디렉토리와 연세대 미래교육원 과정 자료에서 한방꽃차, 꽃차·잎차·뿌리차·열매차 제다 교육이 확인되어 취급품목 기준 한국차/대용차 계열로 분류했습니다.",
      sources: ["gyeonggiFlowerCafeShowDirectory", "gyeonggiFlowerYonsei", "gyeonggiFlowerInstagram"],
      researchStatus: "source-backed+sns+education",
    },
    A9: {
      tags: ["#중국차", "#보이차", "#차도구", "#교육"],
      products: ["중국차", "보이차", "1g 체험차", "다구", "차문화 체험"],
      summary:
        "공부차파크 과천 청계산점은 공부차 공식 페이지에서 100가지 이상 차와 1g 체험차가 확인되고, 다이닝코드 후기에서 다기류와 공간 만족 언급이 확인되어 중국차/보이차/차도구/체험 계열로 분류했습니다.",
      sources: ["gongboochaPark", "gongboochaParkDiningCode"],
      researchStatus: "source-backed+review",
    },
    D29: {
      tags: ["#도예", "#공예"],
      products: ["도자 화병", "도자 작품", "전시 작품"],
      summary:
        "김동인 작가는 서울공예박물관 전시 페이지와 서울문화포털 인터뷰에서 도자 작품과 FLAWER 2403V 등 전시 맥락이 확인되어 도예/공예 계열로 분류했습니다.",
      sources: ["semocaKimDongin", "seoulCultureKimDongin"],
      researchStatus: "source-backed+exhibition",
    },
    B27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["백자 다도구", "차그릇", "백유 열매 3인 다기 세트", "탕관"],
      summary:
        "도농도예는 공식 홈페이지와 취다선 상품 페이지에서 백자 다도구, 차그릇, 백유 열매 3인 다기 세트가 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      sources: ["donongOfficial", "donongChuidasun"],
      researchStatus: "source-backed+official-product",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "2026 티월드페스티벌 B27 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D B27",
          summary:
            "공식 Instagram에서 2026 티월드페스티벌 D홀 B27 참가 해시태그 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "도농도예 B27 안내", url: "https://www.instagram.com/p/DY1BM0JoE-s/" }],
        },
      ],
    },
    H25: {
      tags: ["#중국차", "#다기", "#차도구", "#교육"],
      products: ["자사호", "중국 차 도구", "자사호 전시/특강"],
      summary:
        "고전문화는 월간 차문화와 석우연담 공개 글에서 명·청·민국 시기 자사호와 중국차 다기 전시/특강이 확인되어 중국차 다기/차도구 계열로 분류했습니다.",
      sources: ["gojeonCultureZisha", "gojeonSeokuZisha"],
      researchStatus: "source-backed+community-event",
    },
    H26: {
      tags: ["#공예", "#명상", "#섬유공예"],
      products: ["한지사 금침", "모시/헴프 침구", "명상방석", "한지사 생활소품"],
      summary:
        "계절사이로는 한국섬유신문 인터뷰, 사람인 기업정보, 공식 홈페이지/블로그에서 이오순 금침 명인의 한지사 금침과 침구·명상방석·섬유 생활소품이 확인되어 공예/명상/섬유공예 계열로 분류했습니다.",
      sources: ["seasonSairoKtnews", "seasonSairoSaramin", "seasonSairoOfficial", "seasonSairoBlog"],
      researchStatus: "source-backed+sns+news",
    },
    A36: {
      tags: ["#공예", "#목공", "#차도구"],
      products: ["소반", "찻상", "원형호족반", "화형호족반", "나주반", "제기", "원목가구"],
      summary:
        "대림목공예 공식 홈페이지와 회사 소개에서 소반·찻상·호족반·나주반·제기·원목가구가 확인되어 목공예/차도구 계열로 보강했습니다.",
      sources: ["daelimOfficial", "daelimAbout"],
      researchStatus: "source-backed+official-site",
    },
    E1: {
      tags: ["#한국차", "#대용차"],
      products: ["꽃차세트", "다드림꽃차", "소드림꽃차", "티백", "식용꽃 체험"],
      summary:
        "꽃차 하늘바라기는 공식몰, 농사로 체험농장 정보, 대통령 표창 보도에서 유기농 꽃차와 식용꽃 재배·꽃차 가공·꽃차 만들기 체험이 확인되어 한국차/대용차 계열로 분류했습니다.",
      sources: ["skyFlowerOfficial", "skyFlowerNongsaro", "skyFlowerAsiaNews"],
      researchStatus: "source-backed+official-store+news",
    },
    E24: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["백자 찻잔", "농차 다기세트", "개완", "달항아리", "분청 조각 화병"],
      summary:
        "도예명장2023-01호 영산요는 공식몰에서 백자 찻잔, 농차 다기세트, 개완, 달항아리, 분청 조각 화병 등이 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["yeongsanyoCategory", "yeongsanyoOfficialCup", "yeongsanyoNongchaSet", "yeongsanyoOfficialVase"],
      researchStatus: "source-backed+official-store",
    },
    D23: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["차그릇", "다기", "달항아리", "고백자", "분청덤벙 백유자기"],
      summary:
        "도유가(문찬석/여산)는 여주신문·파이낸셜뉴스 보도와 쌍계명차 상품 목록에서 여주시 도예명장 차그릇·다기·달항아리 계열이 확인되어 도예/다기/차도구로 분류했습니다.",
      sources: ["doyougaYeojuNews", "doyougaSmartStore", "doyougaSsanggyList"],
      researchStatus: "source-backed+news+product",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 D23 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D D23",
          summary:
            "공식 Instagram에서 D홀 D23 부스 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "도유가 참가 안내", url: "https://www.instagram.com/doyouga_/reel/DY06ZyUTmjn/" }],
        },
      ],
    },
    C17: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["도자공간 빛살 임영주 작업", "덤벙분청다완", "달항아리", "미리내사발"],
      summary:
        "도자기마을(빛살)은 도자공간 빛살 임영주 작가 공개 자료와 아이디어스 상품 페이지에서 덤벙분청다완, 달항아리, 사발 등 도자 작업이 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["bitsalProfile", "bitsalIdus"],
      researchStatus: "source-backed+profile+product",
    },
    A20: {
      tags: ["#공예", "#차도구"],
      products: ["무쇠다구", "무쇠솥", "차덖음솥", "다로", "다정", "화로", "무쇠탕관"],
      summary:
        "동원공방/동원 정혜주는 공개 프로필과 차문화 행사 자료에서 무쇠다구, 무쇠솥, 차덖음솥, 다로·다정, 화로, 무쇠탕관이 확인되어 차도구/공예 계열로 보강했습니다.",
      sources: ["dongwonProfile", "dongwonBexpo"],
      researchStatus: "source-backed+profile",
    },
    F28: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["양구백자다기", "파란물결잔", "백색물결병", "생활도자기"],
      summary:
        "드내뜰(이종주의 도자기)은 KCDF 공예트렌드페어와 공개 프로필/후기에서 양구백자다기, 파란물결잔, 백색물결병 등 생활도자기와 차도구가 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["dneDdeulKcdf", "dneDdeulSmartStore", "dneDdeulBrunch"],
      researchStatus: "source-backed+exhibitor+review",
    },
    C27: {
      tags: ["#다기", "#도예", "#차도구", "#공예"],
      products: ["생활도자기", "차 관련 도자기", "향도/차 체험", "찻사발/다기"],
      summary:
        "라키모 RAKIMO는 Wello 문경 지역 기사와 문경찻사발축제 언급에서 생활도자기, 차 관련 도자기, 향도/차 체험이 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["rakimoWello", "rakimoFestivalWello", "munkyeongCeramicTeaNews"],
      researchStatus: "source-backed+local-review",
    },
    C6: {
      tags: ["#한국차", "#발효차", "#대용차"],
      products: ["침향발효차", "황장무밀", "무밀침향병차", "우전 노녹차"],
      summary:
        "로전 ROZEON은 공식몰과 동아일보 보도에서 침향발효차, 황장무밀, 무밀침향병차, 우전 노녹차가 확인되어 한국차/발효차/대용차 계열로 분류했습니다.",
      sources: ["rozeonOfficial", "rozeonDonga"],
      researchStatus: "source-backed+official-store+news",
    },
    A26: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["다기", "다도체험", "전통/현대 다기", "도자기"],
      summary:
        "매원초가는 예스파크 공개 업체 정보와 SNS 링크에서 다기, 다도체험, 전통/현대 다기, 도자기 작업이 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["maewonYespark", "maewonchogaNaverPlace"],
      researchStatus: "source-backed+place+sns",
    },
    D7: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차", "#대용차"],
      products: ["우전", "세작", "발효차", "감잎차", "산뽕잎차", "쑥차", "매실/산나물"],
      summary:
        "명성다원은 공식몰과 관광/판매품목 정보에서 우전, 세작, 발효차, 감잎차, 산뽕잎차, 쑥차 등 하동차와 대용차 제품군이 확인되어 한국차 중심으로 보강했습니다.",
      sources: ["myeongseongOfficial", "myeongseongTravel"],
      researchStatus: "source-backed+official-store",
    },
    A12: {
      tags: ["#한국차", "#녹차", "#홍차"],
      products: ["야생작설차 청향/순향", "무차 스틱/사각티백", "허니 블랙티"],
      summary:
        "명인신광수차/무드를 즐기는 차(moocha)는 공개 전시 정보와 스마트스토어에서 야생작설차, 무차 스틱/사각티백, 허니 블랙티가 확인되어 한국차·녹차·홍차 계열로 보강했습니다.",
      sources: ["moochaFairContest", "moochaSmartStore", "moochaNaverBlog"],
      researchStatus: "source-backed+official-store+sns",
    },
    F25: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["차도기", "도자기", "나무 손잡이 결합 도자기", "커피 도구"],
      summary:
        "모동도예는 공개 기사와 도자기 업체 정보에서 차도기, 나무 손잡이 결합 도자기, 커피 도구가 확인되어 도예/차도구/공예 계열로 보강했습니다.",
      sources: ["modong114", "modongNewstown", "modongTripinfo"],
      researchStatus: "source-backed+news+review-like",
    },
    F31: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["매화 다관", "다기", "도예 작품", "커피드립소반 협업"],
      summary:
        "모을 황선회도방은 공개 전시/수상 자료와 2024 국제차문화대전 후기에서 매화 다관과 차도구 공모전 수상 단서가 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["hwangseonhoeJinju", "moeulTeaCulture2024", "hwangseonhoeHaenamAward", "moeul2024Review"],
      researchStatus: "source-backed+corrected+award+review",
    },
    B21: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["차 도구", "공예품"],
      summary:
        "몽탄갤러리는 BEXPO 공개 전시관과 공식 Instagram에서 차 도구/공예 작업 맥락이 확인되어 도예/공예 계열로 분류했습니다. 제품별 독립 리뷰는 아직 확인되지 않았습니다.",
      sources: ["mongtanBexpo", "mongtanInstagram"],
      researchStatus: "source-backed+sns-limited",
    },
    E13: {
      tags: ["#도예", "#다기", "#차도구"],
      products: ["채색찻잔", "채색 개완", "숙우", "3인 다기세트", "분청 무무다관", "꼬마잔"],
      summary:
        "무무요 이용무는 청백원 카테고리와 도이 상품 페이지에서 채색찻잔, 개완, 숙우, 다기세트, 분청 무무다관/꼬마잔이 확인되어 도예/다기/차도구 계열로 보강했습니다.",
      sources: ["cbwMoomooyo", "doiminieMoomooyo", "dagyeongTeaculture"],
      researchStatus: "source-backed+product-page",
    },
    D14: {
      tags: ["#한국차", "#발효차", "#녹차", "#홍차"],
      products: ["Muae Tea", "동이차", "압착차", "하동 녹차", "수제 하동홍차", "후발효 긴압차"],
      summary:
        "무애(MUAE TEA)는 Paris Tea Festival 공개 참가 목록, 공부차 공개 자료, 페이스북/프로필 언급에서 한국차, 동이차/압착차, 하동 녹차·홍차·후발효 긴압차 근거가 확인되어 한국차 계열로 보강했습니다.",
      sources: ["muaeParisTea", "muaeLinkedin", "muaeGongboocha", "muaeFacebook"],
      researchStatus: "source-backed+festival+profile",
    },
    A1: {
      manualVerified: true,
      tags: ["#한국차", "#녹차", "#보이차", "#차도구"],
      products: ["녹차", "보이차", "차도구", "장작불/무쇠솥 덖음차"],
      summary:
        "무유다원은 BEXPO 공개 전시관에서 녹차, 보이차, 차도구가 확인되고 월간 차문화 기사에서 심상남 대표와 차 작업 맥락이 확인됩니다. 기존 입력 '무우다원'은 공개 자료 기준 '무유다원'으로 교정했습니다.",
      sources: ["muyuTeaculture"],
      researchStatus: "source-backed+name-corrected+profile",
    },
    H19: {
      tags: [],
      products: ["공식 부스명 확인: 森粹陶瓷公司", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "원본 입력의 茶樽陶瓷公司는 티뉴스 부스목록 이미지 기준 H19 森粹陶瓷公司로 교정했습니다. 해당 업체의 공식 채널, 제품군, 리뷰/논란은 공개 검색에서 연결 근거를 확보하지 못해 태그는 보류했습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-corrected-no-public-product-match",
    },
    C19: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["도자공방 산이리", "옹기", "분청", "차 도구", "도자체험"],
      summary:
        "원본 입력의 '사이리'는 부스목록 이미지와 도자공방 산이리 Linktree/예스파크 공개 정보 기준 '산이리'로 교정했습니다. 예스파크 자료에서 옹기·분청·차 도구 작업이 확인되어 도예/다기/차도구 계열로 분류했습니다.",
      sources: ["teaNews2026BoothImage", "saniriLinktree", "saniriYespark"],
      researchStatus: "source-backed+sns+name-corrected",
    },
    C21: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["세라믹 보니다", "functional teaware", "도자 차도구"],
      summary:
        "원본 입력의 '보니더'는 부스목록 이미지 기준 '보니다'로 교정했고, MarketBz의 세라믹 보니다 사업자 정보와 Jinsoo Lee 인터뷰의 Bonida ceramic teaware 브랜드 언급이 확인되어 도예/차도구 계열로 분류했습니다.",
      sources: ["teaNews2026BoothImage", "bonidaMarketbz", "bonidaInterview"],
      researchStatus: "source-backed+business-profile+sns+name-corrected",
    },
    C14: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["노전요 도예", "짜이컵", "도자 차도구"],
      summary:
        "노전요는 CITEA PEOPLE 공개 자료에서 SNS 핸들이 확인되고, 더티레터 공개 글에서 노전요 짜이컵 행사 소개가 확인되어 도예/차도구 계열로 보강했습니다.",
      sources: ["nojeonCiteaPeople", "nojeonDirtyLetter", "nojeonyoKilnBlog", "nojeonyoTeawareBlog"],
      researchStatus: "source-backed+sns+product-mention",
    },
    D13: {
      tags: ["#한국차", "#녹차", "#홍차", "#발효차", "#대용차"],
      products: ["상선차", "특우전", "우전", "금강나래 발효차", "감잎차", "백련잎차", "산뽕잎차", "야생국화차"],
      summary:
        "농업회사법인 지리산 상선암차는 BEXPO 공개 정보에서 상선차, 우전, 금강나래 발효차, 감잎차, 백련잎차, 산뽕잎차 등 한국차/대용차 제품군이 확인되어 보강했습니다.",
      sources: ["sangseonBexpo", "sangseonProducts"],
      researchStatus: "source-backed+product-page",
    },
    C18: {
      tags: ["#도예", "#다기", "#차도구", "#공예"],
      products: ["다기", "찻사발", "찻잔", "다화병", "다식접시", "백자 다기 풀세트", "개완"],
      summary:
        "누보도예/동천 이춘림은 BEXPO 2019, BizKorea 업체 정보, 해남전국차도구공모전 대상 보도에서 다기·찻사발·찻잔·다화병·백자 다기 풀세트·개완이 확인되어 도예/차도구 계열로 보강했습니다.",
      sources: ["nubodBexpo", "nubodBiz", "nubodAward"],
      researchStatus: "source-backed+award",
      fairEventTags: ["#행사이벤트"],
      fairEventStatus: "attendance-confirmed-only",
      fairEvents: [
        {
          title: "국제차문화대전 C18 참가 안내",
          status: "attendance-confirmed-only",
          period: "2026.06.04 - 2026.06.07",
          location: "COEX Hall D C18",
          summary:
            "공식 Instagram에서 6월 4일-7일 코엑스 D홀 C18 참가 안내가 확인됩니다. 할인·증정 등 별도 프로모션 문구는 확인되지 않았습니다.",
          tags: ["#행사이벤트"],
          confidence: "medium",
          links: [{ label: "누보도예 C18 안내", url: "https://www.instagram.com/p/DY3Ee4Jk0N5/" }],
        },
      ],
    },
    G10: {
      tags: ["#일본차", "#녹차", "#말차"],
      products: ["일본 말차", "청벽 말차", "신량 말차", "일본 센차", "일본 호지차"],
      summary:
        "다견원은 공식 채널은 아직 확인되지 않았지만 다도방/세경다도방/쿠팡 공개 판매처에서 제조원 다견원 표기의 일본 말차·센차·호지차가 확인되어 일본차/녹차/말차 계열로 분류했습니다.",
      sources: ["dagyeonDadobangMatcha", "dagyeonJaokSencha", "dagyeonCoupangHoji"],
      researchStatus: "source-backed-product-pages-no-official-site",
    },
    E25: {
      tags: [],
      products: ["공식 부스명 확인: 더세드", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "티뉴스 부스목록 이미지에서 E25 더세드 참가가 확인됩니다. 더세드/더시드/THE SED tea 등 공개 검색에서는 업체와 직접 연결되는 공식 채널, 제품군, 리뷰를 확인하지 못해 태그를 부여하지 않았습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-confirmed-no-public-product-match",
    },
    B23: {
      tags: [],
      products: ["공식 부스명 확인: 뚠델로공방", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "티뉴스 부스목록 이미지에서 B23 뚠델로공방 참가가 확인됩니다. 뚠델로/툰델로/둔델로/뚜델로 공방 조합의 공개 검색에서 업체와 직접 연결되는 공식 채널, 제품군, 리뷰를 확인하지 못해 태그를 부여하지 않았습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-confirmed-no-public-product-match",
    },
    H27: {
      tags: [],
      products: ["공식 부스명 확인: 반길고리", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "티뉴스 부스목록 이미지에서 H27 반길고리 참가가 확인됩니다. 반길고리/반짇고리와 국제차문화대전·공예·차도구·SNS 조합의 공개 검색에서 업체와 직접 연결되는 제품군/리뷰 근거를 확인하지 못해 태그를 부여하지 않았습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-confirmed-no-public-product-match",
    },
    A30: {
      tags: [],
      products: ["공식 부스명 확인: 연담", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "티뉴스 부스목록 이미지에서 A30 연담 참가가 확인됩니다. 연담/언담과 다기·도예·차도구·SNS 조합의 공개 검색 결과는 동명 음식점, 웹툰, 무관 상품이 섞여 있어 부스 업체로 확정하지 않았고 태그를 보류했습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-confirmed-no-public-product-match",
    },
    A8: {
      tags: [],
      products: ["공식 부스명 확인: 위계차", "세부 취급품목 공개 확인 필요"],
      category: "검증보류",
      summary:
        "티뉴스 부스목록 이미지에서 A8 위계차 참가가 확인됩니다. 위계차/우계차/雨季茶 조합의 공개 검색은 일반 용어·학술·보이차 계절 용어 결과와 혼재되어 부스 업체의 공식 채널이나 제품군으로 연결하지 않았습니다.",
      sources: ["teaNews2026BoothImage"],
      researchStatus: "source-backed-name-confirmed-no-public-product-match",
    },
  };

  const SECTION_COUNTS = {
    A: 49,
    B: 28,
    C: 29,
    D: 33,
    E: 31,
    F: 32,
    G: 27,
    H: 27,
  };

  const SECTION_COLORS = {
    A: "#8abf79",
    B: "#9eb7cf",
    C: "#e8c1a9",
    D: "#b9c2df",
    E: "#a9d8a6",
    F: "#efd37f",
    G: "#d7d7d2",
    H: "#acd0e7",
  };

  const GRID = {
    x0: 50,
    y0: 88,
    cellW: 28,
    cellH: 20,
    columns: 32,
    rows: 27,
  };

  const CATEGORY_RULES = [
    {
      category: "차/제다/다원",
      terms: [
        "차",
        "TEA",
        "제다",
        "다원",
        "명차",
        "보이",
        "홍차",
        "녹차",
        "티하우스",
        "TEASHOP",
        "TEA SHOP",
        "茶",
        "YIN TEA",
      ],
    },
    {
      category: "도자/다기",
      terms: ["도예", "도요", "도방", "백자", "청자", "토기", "요", "세라믹", "도자", "陶", "壶"],
    },
    {
      category: "공예/생활소품",
      terms: ["공방", "공예", "목공", "옻칠", "금속", "실크", "싱잉볼", "힐링", "인센스", "디자인"],
    },
    {
      category: "천연염색/대용차/식품",
      terms: ["염색", "꽃차", "프로폴리스", "힐링푸드", "하늘수", "감물"],
    },
    {
      category: "기관/협회/교육",
      terms: ["협회", "협동조합", "대학교", "연구원", "보존회", "진흥원", "홍보관", "문화협회"],
    },
  ];

  const VENDOR_SOCIAL_LINKS = {
    H1: [{ type: "instagram", label: "명가원 Instagram", url: "https://www.instagram.com/myeonggawen_official/" }],
    H2: [{ type: "naver-blog", label: "차우림 Naver Blog", url: "http://blog.naver.com/cosmono3" }],
    H4: [
      { type: "instagram", label: "예평 Instagram", url: "https://www.instagram.com/yepyeong.tea/" },
      { type: "kakao", label: "예평 Kakao Channel", url: "https://pf.kakao.com/_xcBbLb" },
      { type: "youtube", label: "예평 YouTube", url: "https://www.youtube.com/@YEPYEONG" },
    ],
    A31: [
      { type: "instagram", label: "정가로이 Instagram", url: "https://www.instagram.com/jeong_garoi_pottery/" },
      { type: "official", label: "정가로이 Smartstore", url: "https://smartstore.naver.com/jeonggaroi_pottery" },
    ],
    A14: [{ type: "instagram", label: "백자일상 이정현 Instagram", url: "https://www.instagram.com/dl_jeong_hyun/" }],
    A37: [{ type: "official", label: "옹크씨 공식 사이트", url: "http://ongk-c.com/" }],
    B26: [{ type: "instagram", label: "대광도요 Instagram", url: "https://www.instagram.com/daegwangdoyo/" }],
    A9: [{ type: "linktree", label: "공부차 Linktree", url: "https://linktr.ee/gongboocha" }],
    A12: [{ type: "instagram", label: "무차 moocha Instagram", url: "https://www.instagram.com/moocha20/" }],
    A13: [{ type: "instagram", label: "모후실에서만난차 Instagram", url: "https://www.instagram.com/tea_from_mohusil/" }],
    A20: [
      { type: "instagram", label: "동원공방 Yeunchoo Koh Instagram", url: "https://www.instagram.com/dongwon_gongbang/" },
      { type: "instagram", label: "동원공방 무쇠차도구 Instagram", url: "https://www.instagram.com/dongwon_castiron/" },
    ],
    A23: [{ type: "instagram", label: "문재필옻칠갤러리 Instagram", url: "https://www.instagram.com/haesong_ottchil/" }],
    A26: [{ type: "instagram", label: "매원초가 Instagram", url: "https://www.instagram.com/jeonghyi3040/" }],
    A32: [{ type: "instagram", label: "우기원 porcelain Instagram", url: "https://www.instagram.com/cosmos_porcelain/" }],
    A35: [{ type: "instagram", label: "와락공방 Instagram", url: "https://www.instagram.com/warack_gongbang/" }],
    A36: [{ type: "instagram", label: "대림목공예 Instagram", url: "https://www.instagram.com/daelim_woodcraft/" }],
    "A48|(사)한국 싱잉볼 협회": [
      { type: "youtube", label: "한국싱잉볼협회 YouTube", url: "https://www.youtube.com/channel/UC2i06Or84fHCfwoih2Yi-7Q" },
      { type: "facebook", label: "한국싱잉볼협회 Facebook", url: "https://www.facebook.com/koreasingingbowl" },
    ],
    A4: [
      { type: "official", label: "한국제다 공식 홈페이지", url: "http://www.hankooktea.co.kr" },
      { type: "official", label: "한국제다 공식몰", url: "https://hktmall.co.kr/" },
    ],
    A5: [
      { type: "linktree", label: "제주차농 Linktree", url: "https://linktr.ee/jeju.chanong" },
      { type: "instagram", label: "제주차농 Instagram", url: "https://instagram.com/jeju.chanong" },
      { type: "linktree", label: "제주차농/차암숲 Linktree", url: "https://linktr.ee/jeju_farmers_tea" },
      { type: "instagram", label: "제주차농 farmers tea Instagram", url: "https://www.instagram.com/jeju_farmers_tea/" },
    ],
    B12: [
      { type: "instagram", label: "선다원 Instagram", url: "https://www.instagram.com/sundawon_tea/" },
      { type: "naver-blog", label: "선다원 Naver Blog", url: "https://blog.naver.com/sundawon_jbw" },
    ],
    C2: [
      { type: "instagram", label: "연우제다 Instagram", url: "https://www.instagram.com/youn_woo_greentea_tea" },
      { type: "naver-blog", label: "연우제다 Naver Blog", url: "https://blog.naver.com/tea7606" },
    ],
    C18: [{ type: "naver-blog", label: "누보도예 Naver Blog", url: "https://blog.naver.com/nubopottery1996" }],
    C12: [{ type: "instagram", label: "백학제다 Instagram", url: "https://www.instagram.com/teamansong/" }],
    C13: [
      { type: "linktree", label: "붓당골제다 Linktree", url: "https://linktr.ee/bdgtea" },
      { type: "instagram", label: "붓당골제다 김종열 Instagram", url: "https://www.instagram.com/bu_tea_/" },
      { type: "instagram", label: "붓당골티하우스 Instagram", url: "https://www.instagram.com/bu_tea_teahouse/" },
    ],
    C4: [
      { type: "instagram", label: "하동아낙 Lady Hadong Instagram", url: "https://www.instagram.com/lady_hadong/" },
      { type: "naver-blog", label: "하동아낙 Naver Blog", url: "https://blog.naver.com/pkykk365" },
    ],
    C9: [
      { type: "instagram", label: "웃차 Instagram", url: "https://www.instagram.com/woot.cha/" },
      { type: "official", label: "웃차 공식 사이트", url: "https://wootcha.kr" },
    ],
    C6: [
      { type: "instagram", label: "로전 Instagram", url: "https://www.instagram.com/rozeon_tea/" },
      { type: "naver-blog", label: "로전 Naver Blog", url: "https://blog.naver.com/rozeon2000" },
    ],
    D5: [{ type: "instagram", label: "조태연가 죽로차 Instagram", url: "https://www.instagram.com/chotaeyeon_ga/" }],
    D1: [{ type: "instagram", label: "일구다 Instagram", url: "https://www.instagram.com/ilguda.tea/" }],
    D2: [{ type: "instagram", label: "곡천다원 Instagram", url: "https://www.instagram.com/gok_chun/" }],
    D7: [{ type: "instagram", label: "명성다원 Instagram", url: "https://www.instagram.com/myungsung_dawon/" }],
    D11: [{ type: "instagram", label: "도재명차 Instagram", url: "https://www.instagram.com/dojae_official/" }],
    D12: [{ type: "instagram", label: "관아수제차 Instagram", url: "https://www.instagram.com/gwana_tea_house/" }],
    D13: [{ type: "instagram", label: "지리산 상선암차 다연 Instagram", url: "https://www.instagram.com/dayeon_2178/" }],
    D15: [
      { type: "naver-blog", label: "금향다원 Naver Blog", url: "https://blog.naver.com/qqkmh0987" },
      { type: "instagram", label: "금향다원 Instagram", url: "https://www.instagram.com/geumhyang_tea/" },
    ],
    D9: [{ type: "instagram", label: "조태연가 죽로차 Instagram", url: "https://www.instagram.com/chotaeyeon_ga/" }],
    D20: [{ type: "official", label: "민토 최민록 스마트스토어", url: "https://smartstore.naver.com/ceraminto" }],
    D14: [
      { type: "facebook", label: "MUAE TEA Facebook", url: "https://ko-kr.facebook.com/people/MUAE-TEA/100063456889085/" },
      { type: "instagram", label: "무애산방 MUAE TEA Instagram", url: "https://www.instagram.com/muaesanbang/" },
    ],
    D17: [{ type: "official", label: "산도방 공식몰", url: "https://sandobang.cafe24.com/" }],
    D29: [{ type: "official", label: "김동인 공예정원 상품", url: "https://kcdfshop.kr/category/%EA%B9%80%EB%8F%99%EC%9D%B8/617/" }],
    D31: [{ type: "official", label: "영남요 공식 사이트", url: "http://baeksan-kimjungok.com/" }],
    D33: [{ type: "instagram", label: "기린공방 Instagram", url: "https://www.instagram.com/ceramicstudio_girin/" }],
    E24: [{ type: "official", label: "영산요 공식몰", url: "https://yeongsanyo.com/" }],
    E28: [
      { type: "official", label: "도동요 공식 사이트", url: "https://www.dodongyo.co.kr/" },
      { type: "instagram", label: "도동요 Instagram", url: "https://www.instagram.com/dodongyo/" },
    ],
    E30: [{ type: "instagram", label: "수도예공방 Instagram", url: "https://www.instagram.com/su_ceramic_studio/" }],
    F5: [{ type: "official", label: "교문공방 공식 홈페이지", url: "http://www.silvermade.co.kr/" }],
    F12: [{ type: "instagram", label: "삼정공방 김진홍 Instagram", url: "https://www.instagram.com/samjeong214/" }],
    F14: [{ type: "instagram", label: "가람도예 주은정 Instagram", url: "https://www.instagram.com/garam_ceramic/" }],
    F15: [{ type: "instagram", label: "고도산방 Instagram", url: "https://www.instagram.com/godosanbang/" }],
    F16: [
      { type: "instagram", label: "라세라미스타 Instagram", url: "https://www.instagram.com/laceramista/" },
      { type: "official", label: "라세라미스타 Smartstore", url: "https://smartstore.naver.com/laceramista/" },
    ],
    F2: [
      { type: "official", label: "경위복차 공식 Modoo", url: "http://jingweifutea2016.modoo.at/" },
      { type: "naver-blog", label: "경위복차 Naver Blog", url: "https://blog.naver.com/gain0405" },
    ],
    F4: [{ type: "official", label: "묘차 공식몰", url: "https://m.myocha.co.kr/" }],
    F8: [{ type: "official", label: "우기세라믹 공식 사이트", url: "https://woogiceramics.com/" }],
    F18: [{ type: "instagram", label: "다경요 김준백 Instagram", url: "https://www.instagram.com/k_joonback/" }],
    F20: [
      { type: "official", label: "연화도방 공식몰", url: "https://www.yeonhwadobang.com/" },
      { type: "instagram", label: "연화도방 Instagram", url: "https://www.instagram.com/yeonhwadobang/" },
    ],
    F23: [{ type: "official", label: "이치헌도예연구소 공식몰", url: "https://xn--hq1bk06af5av7ou3j.com/shopinfo/company.html" }],
    G1: [
      { type: "linktree", label: "대익차 Linktree", url: "https://linktr.ee/taetea_time" },
      { type: "linktree", label: "대익다도원 Linktree", url: "https://linktr.ee/dayichadaoyuan" },
      { type: "instagram", label: "대익차 Instagram", url: "https://www.instagram.com/taetea_official/" },
      { type: "facebook", label: "대익차 Facebook", url: "https://www.facebook.com/taetea.korea" },
      { type: "youtube", label: "대익차 YouTube", url: "https://www.youtube.com/channel/UCQc68n9KIHnG-_XvjeyrR_g" },
      { type: "naver-blog", label: "대익차 Naver Blog", url: "https://blog.naver.com/taetea_korea" },
    ],
    G2: [{ type: "instagram", label: "티하우스 나니 Instagram", url: "https://www.instagram.com/teahousenani/" }],
    G3: [
      { type: "official", label: "정산당 공식몰", url: "https://lapsangstore.com/" },
      { type: "instagram", label: "정산당 Instagram", url: "https://www.instagram.com/lapsangstore/" },
      { type: "instagram", label: "정산당 서울 대림 차랑 Instagram", url: "https://www.instagram.com/chalang.tea/" },
      { type: "naver-blog", label: "정산당 Naver Blog", url: "https://blog.naver.com/lapsangstorekr" },
      { type: "facebook", label: "정산당 Facebook", url: "https://www.facebook.com/lapsangstore" },
      { type: "youtube", label: "정산당 YouTube", url: "https://www.youtube.com/channel/UCoqatpMFvOFJo4xq5UM99XQ" },
    ],
    G5: [
      { type: "official", label: "글림피스 공식 홈페이지", url: "https://glimpiece.com/about" },
      { type: "instagram", label: "글림피스 Instagram", url: "https://www.instagram.com/glimpiece_official/" },
    ],
    G9: [
      { type: "naver-blog", label: "지유명차 종로점 Naver Blog", url: "https://blog.naver.com/gupuertea" },
      { type: "instagram", label: "지유명차 종로점 Instagram", url: "https://www.instagram.com/g.u_puerhtea_jongro/" },
      { type: "youtube", label: "우량보이차 YouTube", url: "https://www.youtube.com/channel/UC8_kYg4MtAOLdaS-qCU8k1w" },
    ],
    G12: [{ type: "official", label: "랑카티스 공식 페이지", url: "https://lankateas.imweb.me/about" }],
    G13: [
      { type: "official", label: "틴지오브소울 국내몰", url: "https://www.tingeofsoul.co.kr/139" },
      { type: "official", label: "TINGE OF SOUL 글로벌몰", url: "https://tingeofsoul.com/" },
      { type: "linktree", label: "틴지오브소울 Linktree", url: "https://linktr.ee/tingeofsoul" },
      { type: "instagram", label: "틴지오브소울 Instagram", url: "https://www.instagram.com/tinge.of.soul/" },
      { type: "official", label: "틴지오브소울 Smartstore", url: "https://smartstore.naver.com/tingeofsoul" },
      { type: "official", label: "틴지오브소울 Kurly", url: "https://www.kurly.com/goods/1002037122" },
      { type: "kakao", label: "틴지오브소울 Kakao Channel", url: "http://pf.kakao.com/_sixjpxj" },
    ],
    G15: [
      { type: "official", label: "동정보이차 2026 이벤트 안내", url: "https://dongjeong.kr/tea-world-festival-2026-visit-event-guide/" },
      { type: "official", label: "동정보이차 공식 쇼핑몰", url: "https://www.djpuer.com/" },
      { type: "naver-blog", label: "동정보이차 Naver Blog", url: "https://blog.naver.com/jwtai" },
    ],
    G16: [
      { type: "official", label: "YOSHAN TEA 공식 사이트", url: "https://www.yoshantea.com/" },
      { type: "instagram", label: "YOSHAN TEA Instagram", url: "https://www.instagram.com/yoshan_tea/" },
      { type: "linktree", label: "YOSHAN TEA Linktree", url: "https://linktr.ee/yoshantea" },
      { type: "youtube", label: "YOSHAN TEA YouTube", url: "https://www.youtube.com/channel/UCqMTt3BweaXHqrrTEiQKZ9Q" },
      { type: "official", label: "YOSHAN TEA Multifunctional Link", url: "https://yst1880.com/link" },
    ],
    G7: [
      { type: "official", label: "다향연 공식몰", url: "https://m.dahyangyeon.com/" },
      { type: "instagram", label: "다향연 Instagram", url: "https://www.instagram.com/dahyangyeon/" },
      { type: "naver-blog", label: "다향연 Naver Blog", url: "https://blog.naver.com/dkstlso25" },
    ],
    G20: [
      { type: "instagram", label: "포담 티하우스 Instagram formosatea27", url: "https://www.instagram.com/formosatea27/" },
      { type: "instagram", label: "포담 티하우스 Instagram fodamteahouse", url: "https://www.instagram.com/fodamteahouse/" },
      { type: "official", label: "포담 티하우스 Naver Place", url: "https://naver.me/xydziy8W" },
    ],
    E2: [{ type: "official", label: "김천방짜유기 공식 쇼핑몰", url: "http://www.yugishop.co.kr" }],
    E27: [{ type: "instagram", label: "백암요 Instagram", url: "https://www.instagram.com/beagamyo/" }],
    H5: [{ type: "official", label: "선묘당 공식몰", url: "https://shanmiaotang.com/" }],
    H10: [
      { type: "official", label: "석가명차 오운산 공식 사이트", url: "https://www.seokga.com/" },
      { type: "official", label: "석가명차 서울점 공식몰", url: "https://seokgaseoul.com/" },
      { type: "naver-blog", label: "석가명차 Naver Blog", url: "https://blog.naver.com/sacinamu" },
    ],
    H12: [{ type: "official", label: "아망시 공식몰", url: "https://amangsi.com/" }],
    H21: [
      { type: "instagram", label: "차모아 Instagram", url: "https://instagram.com/chamore_1987" },
      { type: "facebook", label: "차모아 Facebook", url: "https://www.facebook.com/chamore1987" },
      { type: "youtube", label: "차모아 YouTube", url: "https://www.youtube.com/@tealogic" },
      { type: "naver-blog", label: "차모아 Naver Blog", url: "http://blog.naver.com/chamore1987" },
    ],
    H20: [
      { type: "instagram", label: "인센스월드 Instagram", url: "https://www.instagram.com/incenseworld_official/" },
      { type: "facebook", label: "인센스월드 Facebook", url: "https://www.facebook.com/incenseworld.official" },
      { type: "youtube", label: "인센스월드 YouTube", url: "http://youtube.com/@incense_world" },
    ],
    H26: [{ type: "naver-blog", label: "계절사이로 Naver Blog", url: "https://blog.naver.com/seasoncock" }],
    A22: [{ type: "instagram", label: "헬스베버리지 Instagram", url: "https://www.instagram.com/healthbeverage_official/" }],
    A46: [{ type: "instagram", label: "오차연각 Instagram", url: "https://www.instagram.com/m_flower_teastory/" }],
    E11: [{ type: "instagram", label: "우림도예 Instagram", url: "https://www.instagram.com/woorimdoye/" }],
    E13: [{ type: "instagram", label: "무무요 이용무 Instagram", url: "https://www.instagram.com/moomoo_studio/" }],
    E15: [{ type: "instagram", label: "김해 예인요 이미진 Instagram", url: "https://www.instagram.com/yeinyo_mijin/" }],
    E16: [{ type: "instagram", label: "다솜공방 Instagram", url: "https://www.instagram.com/dasom9135/" }],
    E23: [{ type: "instagram", label: "긍정공방 Instagram", url: "https://www.instagram.com/geung.joung/" }],
    E19: [
      { type: "instagram", label: "슬우재 Instagram", url: "https://www.instagram.com/seulwoo_pot/" },
      { type: "naver-blog", label: "슬우재 Naver Blog", url: "https://blog.naver.com/seulwoo_ceramic" },
    ],
    A9: [{ type: "instagram", label: "공부차 Instagram", url: "https://www.instagram.com/gongboocha_md/" }],
    "A48|(사)한국 싱잉볼 협회": [
      { type: "instagram", label: "한국싱잉볼협회 Instagram", url: "https://www.instagram.com/koreasingingbowl/" },
      { type: "facebook", label: "한국싱잉볼협회 Facebook", url: "https://www.facebook.com/koreasingingbowl" },
      { type: "youtube", label: "한국싱잉볼협회 YouTube", url: "https://www.youtube.com/channel/UC2i06Or84fHCfwoih2Yi-7Q" },
    ],
    "A48|(주)젠테라피 네츄럴 힐링센터": [
      { type: "instagram", label: "젠테라피서울 Instagram", url: "https://www.instagram.com/zentherapyseoul/" },
    ],
    B1: [{ type: "instagram", label: "보성군 Instagram", url: "https://www.instagram.com/greenboseong/" }],
    B13: [{ type: "instagram", label: "섬진다원 Instagram", url: "https://www.instagram.com/teahouse_sumjin/" }],
    B27: [{ type: "instagram", label: "도농도예 Instagram", url: "https://www.instagram.com/donongceramic/" }],
    C27: [{ type: "instagram", label: "라키모 강창성 Instagram", url: "https://www.instagram.com/rakimo_ceramic/" }],
    F23: [
      { type: "official", label: "이치헌도예연구소 공식몰", url: "https://xn--hq1bk06af5av7ou3j.com/shopinfo/company.html" },
      { type: "instagram", label: "이치헌도예연구소 Instagram", url: "https://www.instagram.com/chiheonpotter/" },
    ],
    F24: [{ type: "instagram", label: "박달요 Instagram", url: "https://www.instagram.com/bakdal_ceramics/" }],
    F25: [{ type: "instagram", label: "모동도예 Instagram", url: "https://www.instagram.com/modongyo/" }],
    F26: [{ type: "instagram", label: "소월백자 박성미 Instagram", url: "https://www.instagram.com/park_sungmi_ceramist/" }],
    F27: [{ type: "instagram", label: "진곡요 황승욱 Instagram", url: "https://www.instagram.com/jingokyo_pottery/" }],
    F28: [{ type: "instagram", label: "드내뜰 Instagram", url: "https://www.instagram.com/shine_in_my_yard/" }],
    F31: [
      { type: "instagram", label: "모을 황선회도방 Instagram", url: "https://www.instagram.com/hwang_sunhoi/" },
      { type: "linktree", label: "모을 황선회도방 Linktree", url: "https://linktr.ee/hwang_sunhoi" },
    ],
    D17: [
      { type: "official", label: "산도방 공식몰", url: "https://sandobang.cafe24.com/" },
      { type: "instagram", label: "산도방 Instagram", url: "https://www.instagram.com/sandobang/" },
    ],
    D20: [
      { type: "official", label: "민토 최민록 스마트스토어", url: "https://smartstore.naver.com/ceraminto" },
      { type: "instagram", label: "민토 Cera Minto Instagram", url: "https://www.instagram.com/ceraminto/" },
    ],
    D21: [
      { type: "instagram", label: "우곡요 이부원 Instagram", url: "https://www.instagram.com/leeboowon/" },
      { type: "official", label: "우곡요 Smartstore", url: "https://smartstore.naver.com/guicha" },
    ],
    D24: [{ type: "naver-blog", label: "소랑요 Naver Blog", url: "https://blog.naver.com/ldhcij" }],
    D25: [{ type: "instagram", label: "공림요 Instagram", url: "https://www.instagram.com/gonglimyo/" }],
    D31: [
      { type: "official", label: "영남요 공식 사이트", url: "http://baeksan-kimjungok.com/" },
      { type: "instagram", label: "영남요 Instagram", url: "https://www.instagram.com/yeongnamyo/" },
    ],
    F7: [{ type: "instagram", label: "연세라믹 Instagram", url: "https://www.instagram.com/ceramist_yeon/" }],
    F8: [
      { type: "official", label: "우기세라믹 공식 사이트", url: "https://woogiceramics.com/" },
      { type: "instagram", label: "우기세라믹 한병욱 Instagram", url: "https://www.instagram.com/woogi__96/" },
    ],
    F19: [{ type: "instagram", label: "정호요 Instagram", url: "https://www.instagram.com/junghoyo/" }],
    F21: [
      { type: "instagram", label: "언양도예 김춘헌 Instagram", url: "https://www.instagram.com/eonyangyo/" },
      { type: "instagram", label: "언양도예 Instagram", url: "https://www.instagram.com/ey_pottery/" },
      { type: "youtube", label: "그릇쟁이김춘헌TV YouTube", url: "https://www.youtube.com/channel/UCqrIiS7_3z4qwGLfnT557sA" },
    ],
    F22: [{ type: "official", label: "임의섭도예작업장 Tumblr", url: "https://www.tumgik.com/imjak-blog1" }],
    G15: [
      { type: "official", label: "동정보이차 2026 이벤트 안내", url: "https://dongjeong.kr/tea-world-festival-2026-visit-event-guide/" },
      { type: "official", label: "동정보이차 공식 쇼핑몰", url: "https://www.djpuer.com/" },
      { type: "naver-blog", label: "동정보이차 Naver Blog", url: "https://blog.naver.com/jwtai" },
      { type: "youtube", label: "동정보이차 YouTube", url: "https://youtube.com/@teachunchu" },
    ],
    H7: [{ type: "instagram", label: "상명요 Instagram", url: "https://www.instagram.com/sangmyeongyo/" }],
    H10: [
      { type: "official", label: "석가명차 오운산 공식 사이트", url: "https://www.seokga.com/" },
      { type: "official", label: "석가명차 서울점 공식몰", url: "https://seokgaseoul.com/" },
      { type: "naver-blog", label: "석가명차 Naver Blog", url: "https://blog.naver.com/sacinamu" },
      { type: "instagram", label: "석가명차 오운산 Instagram", url: "https://www.instagram.com/owoonsan/" },
    ],
    H12: [
      { type: "official", label: "아망시 공식몰", url: "https://amangsi.com/" },
      { type: "instagram", label: "아망시 티하우스 Instagram", url: "https://www.instagram.com/amangsi.teahouse/" },
    ],
    A31: [
      { type: "official", label: "정가로이 Smartstore", url: "https://smartstore.naver.com/jeonggaroi_pottery" },
      { type: "instagram", label: "정가로이 김길산 Instagram", url: "https://www.instagram.com/jeong_garoi_pottery/" },
    ],
    A11: [{ type: "instagram", label: "무유장작가마 살래요 Instagram", url: "https://www.instagram.com/salraeyo/" }],
    A15: [{ type: "official", label: "문경칠봉산농원 공식몰", url: "https://m.chbsfarm.kr/shop_goods/goods_list.htm" }],
    A24: [
      { type: "instagram", label: "남촌도예 Instagram", url: "https://www.instagram.com/namchondoye/" },
      { type: "kakao", label: "남촌도예 Kakao Open Chat", url: "https://open.kakao.com/o/s7WFa20b" },
    ],
    A25: [
      { type: "instagram", label: "트임&김진욱도예원 Instagram", url: "https://www.instagram.com/t_im_ceramics/" },
      { type: "official", label: "트임 공식 사이트", url: "https://트임.kr" },
    ],
    A28: [{ type: "official", label: "귀단요 성탄송운 공식 사이트", url: "http://gwoidanyo.com/" }],
    A40: [{ type: "instagram", label: "꼬매 Instagram", url: "https://www.instagram.com/kkome_knit/" }],
    A44: [{ type: "instagram", label: "승설재 무이성 Instagram", url: "https://www.instagram.com/seungseoljae/" }],
    A45: [{ type: "naver-blog", label: "투다헌 Naver Blog", url: "https://blog.naver.com/tudateastore" }],
    A49: [{ type: "official", label: "원유전통예절문화협회 Daum Cafe", url: "https://m.cafe.daum.net/jbj5202/Bjs/4613" }],
    B7: [{ type: "instagram", label: "보성 부광녹차 Instagram", url: "https://www.instagram.com/bugwanggreentee/" }],
    B8: [
      { type: "instagram", label: "보성 죽림다원 Instagram", url: "https://www.instagram.com/tea_juklim/" },
      { type: "official", label: "죽림다원 Smartstore", url: "https://smartstore.naver.com/juklim" },
    ],
    B10: [{ type: "naver-blog", label: "소아다원 Naver Blog", url: "https://blog.naver.com/soadawontea" }],
    B2: [
      { type: "official", label: "보성제다 공식몰", url: "https://www.bsjeda.co.kr/" },
      { type: "instagram", label: "보성제다 Instagram", url: "https://www.instagram.com/bsjeda/" },
    ],
    B3: [{ type: "official", label: "천보다원 공식 사이트", url: "http://www.formay.co.kr/" }],
    B4: [{ type: "instagram", label: "보성운해다원 Instagram", url: "https://www.instagram.com/whgreentea/" }],
    B6: [
      { type: "official", label: "징광문화 공식 사이트", url: "https://jingkwang.co.kr/" },
      { type: "official", label: "징광잎차 브랜드 페이지", url: "https://jingkwang.co.kr/brand/tea.php" },
      { type: "instagram", label: "징광문화 Instagram", url: "https://www.instagram.com/wonjingkwang/" },
    ],
    B9: [
      { type: "instagram", label: "보성 영천다원 Instagram", url: "https://www.instagram.com/ycdawon/" },
      { type: "official", label: "영천다원 Modoo", url: "https://ycdawon.modoo.at/" },
    ],
    B11: [{ type: "official", label: "다채 공식 사이트", url: "https://www.dache.co.kr/experience-program/" }],
    B20: [
      { type: "instagram", label: "무결 이재훈 Instagram", url: "https://www.instagram.com/moogyeol_studio/" },
      { type: "official", label: "무결 Smartstore", url: "https://smartstore.naver.com/jhl9395" },
    ],
    C5: [{ type: "instagram", label: "청석골감로다원 Instagram", url: "https://www.instagram.com/isuyeongim/" }],
    C14: [{ type: "instagram", label: "노전요 Instagram", url: "https://www.instagram.com/nojeon_yo/" }],
    C17: [
      { type: "instagram", label: "도자공간 빛살 임영주 Instagram", url: "https://www.instagram.com/imyoungju_bitsal/" },
      { type: "naver-blog", label: "도자공간 빛살 Naver Blog", url: "https://blog.naver.com/swchina" },
    ],
    C18: [
      { type: "instagram", label: "누보도예 Instagram", url: "https://www.instagram.com/nubopottery1996/" },
      { type: "naver-blog", label: "누보도예 Naver Blog", url: "https://blog.naver.com/nubopottery1996" },
    ],
    C22: [{ type: "official", label: "조선백자 공식 사이트", url: "https://www.joseonbaekja.com/" }],
    C23: [
      { type: "instagram", label: "정요 김진완 Instagram", url: "https://www.instagram.com/jeongyo_jw/" },
      { type: "official", label: "정요 Smartstore", url: "https://smartstore.naver.com/jeongyo" },
    ],
    C24: [{ type: "instagram", label: "소산도예 한호현 Instagram", url: "https://www.instagram.com/sosandoye_hanhohyun/" }],
    C25: [{ type: "instagram", label: "황제요 이기호 Instagram", url: "https://www.instagram.com/_hwangjaeyo/" }],
    C28: [
      { type: "instagram", label: "채담요 최재욱 Instagram", url: "https://www.instagram.com/chaedam_yo/" },
      { type: "official", label: "채담요 공식 사이트", url: "https://www.chaedamyo.com/" },
    ],
    D4: [
      { type: "instagram", label: "혜림차 혜림농원 Instagram", url: "https://www.instagram.com/hyaelim__tea/" },
      { type: "official", label: "혜림농원 공식 사이트", url: "https://www.hyaelimfarm.com/" },
    ],
    D10: [
      { type: "instagram", label: "한밭제다 차공간 Instagram", url: "https://www.instagram.com/hanfarmtea/" },
      { type: "official", label: "한밭제다 Smartstore", url: "https://m.smartstore.naver.com/aa781878" },
    ],
    D6: [{ type: "instagram", label: "삼신차 주우림 Instagram", url: "https://www.instagram.com/sstea_8008/" }],
    D18: [{ type: "instagram", label: "설도예 Instagram", url: "https://www.instagram.com/seol_pottery/" }],
    D22: [
      { type: "instagram", label: "녹주요 서향태 Instagram", url: "https://www.instagram.com/nok_ju_yo/" },
      { type: "official", label: "녹주요 Smartstore", url: "https://naver.me/GtUT6UYd" },
    ],
    D23: [
      { type: "instagram", label: "도유가 Instagram", url: "https://www.instagram.com/doyouga_/" },
      { type: "official", label: "도유가 Smartstore", url: "https://smartstore.naver.com/doyouga" },
    ],
    E1: [{ type: "official", label: "꽃차 하늘바라기 공식몰", url: "https://www.myflowertea.com/" }],
    E6: [{ type: "instagram", label: "스튜디오 세온 Instagram", url: "https://www.instagram.com/studio_seon/" }],
    E17: [{ type: "instagram", label: "예인요 이미진 Instagram", url: "https://www.instagram.com/yeinyo_mijin/" }],
    F4: [
      { type: "official", label: "묘차 공식몰", url: "https://m.myocha.co.kr/" },
      { type: "instagram", label: "묘차 Instagram", url: "https://www.instagram.com/myo.cha/" },
      { type: "linktree", label: "묘차 Linktree", url: "https://linktr.ee/myocha" },
    ],
    F10: [
      { type: "official", label: "Dr.GP by 강남약방 청기백기", url: "https://drgp.kr/product/%EC%B2%AD%EA%B8%B0%EB%B0%B1%EA%B8%B0%EB%A1%9C-%EB%A7%91%EC%9D%80-%EB%AA%A9-%EC%A7%80%ED%82%A4%EA%B8%B0/11/category/42/display/1/" },
      { type: "instagram", label: "Dr.GP Instagram", url: "https://www.instagram.com/dr.gp_offical/" },
    ],
    F17: [{ type: "instagram", label: "김해요 김경수 Instagram", url: "https://www.instagram.com/kimkyungsu_ceramic/" }],
    G19: [{ type: "instagram", label: "동심명차 남당차방 Instagram", url: "https://www.instagram.com/dongsim_myeongcha/" }],
    G21: [
      { type: "instagram", label: "YIN TEA 윤차인 Instagram", url: "https://www.instagram.com/yintea_taiwan/" },
      { type: "official", label: "尹茶人製茶廠 사업자 자료", url: "https://www.findcompany.com.tw/%E5%B0%B9%E8%8C%B6%E4%BA%BA%E8%A3%BD%E8%8C%B6%E5%BB%A0" },
    ],
    H5: [
      { type: "instagram", label: "선묘당 Instagram", url: "https://www.instagram.com/shanmiaotang/" },
      { type: "official", label: "선묘당 공식 사이트", url: "https://shanmiaotang.com/" },
    ],
    H6: [
      { type: "instagram", label: "복향명차 Instagram", url: "https://www.instagram.com/jinhyangdang1315/" },
      { type: "band", label: "복향명차 Naver Band", url: "https://band.us/@cxt" },
    ],
    H11: [{ type: "official", label: "덕화코리아 Smartstore", url: "https://smartstore.naver.com/dehuakorea" }],
    H23: [
      { type: "instagram", label: "나은크라프트 Instagram", url: "https://www.instagram.com/nauncraft/" },
      { type: "official", label: "나은갤러리 공식 사이트", url: "https://naungallery.com/" },
    ],
    H25: [{ type: "instagram", label: "고전차문화연구원 Instagram", url: "https://www.instagram.com/gojeoncamunhwayeonguweon/" }],
    A2: [{ type: "instagram", label: "청해진다원 Instagram", url: "https://www.instagram.com/wando.teagarden/" }],
    A47: [
      { type: "instagram", label: "한국차문화협회 Instagram", url: "https://www.instagram.com/koreatea_/" },
      { type: "official", label: "한국차문화협회 공식 홈페이지", url: "https://www.koreatea.or.kr/" },
    ],
    "A48|(주)젠테라피 네츄럴 힐링센터": [
      { type: "instagram", label: "젠테라피그룹 Instagram", url: "https://www.instagram.com/zentherapygroup/" },
      { type: "instagram", label: "젠힐링샵 Instagram", url: "https://www.instagram.com/zenhealing_shop/" },
      { type: "official", label: "젠테라피 싱잉볼 공식 안내", url: "https://zentherapy.co.kr/2019/01/15/singingbowl3/" },
      { type: "official", label: "젠힐링샵 싱잉볼", url: "https://zenhealingshop.co.kr/category/%EC%8B%B1%EC%9E%89%EB%B3%BC/539" },
      { type: "naver-blog", label: "젠테라피 Naver Blog", url: "https://blog.naver.com/zenhealingu" },
    ],
    B27: [
      { type: "instagram", label: "도농도예 Instagram", url: "https://www.instagram.com/donongceramic/" },
      { type: "official", label: "도농도예 공식 홈페이지", url: "https://donongceramic.com/" },
      { type: "official", label: "도농도예 Smartstore", url: "https://m.smartstore.naver.com/donongceramic" },
    ],
    B28: [{ type: "instagram", label: "한세은 도예공방 Instagram", url: "https://www.instagram.com/jin._.ceramic/" }],
    C8: [
      { type: "instagram", label: "자드리 TEA SHOP Instagram", url: "https://www.instagram.com/hadong_tea_jadelee/" },
      { type: "official", label: "자드리 TEA SHOP Smartstore", url: "https://m.smartstore.naver.com/tea365" },
    ],
    C10: [
      { type: "instagram", label: "찻잎마술 Instagram", url: "https://www.instagram.com/dao.teafood/" },
      { type: "instagram", label: "소암차 Instagram 후보", url: "https://www.instagram.com/soam.tealeaf/" },
    ],
    C16: [
      { type: "instagram", label: "허굴산방 Instagram", url: "https://www.instagram.com/heogultae/" },
      { type: "naver-blog", label: "황매산다원 허굴산방 Naver Blog", url: "https://blog.naver.com/int05" },
      { type: "official", label: "합천군 황매산다원 허굴산방 안내", url: "https://www.hc.go.kr/06574/06590/06608.web?amode=view&idx=848" },
    ],
    G25: [
      { type: "instagram", label: "다심헌 Instagram", url: "https://www.instagram.com/dasimheon/" },
      { type: "official", label: "다심헌 티클래스 10x10", url: "https://www.10x10.co.kr/shopping/category_prd.asp?itemid=2394356" },
    ],
    D29: [
      { type: "instagram", label: "김동인 Instagram", url: "https://www.instagram.com/kim.ey/" },
      { type: "official", label: "김동인 KCDF 작가관", url: "https://kcdfshop.kr/category/%EA%B9%80%EB%8F%99%EC%9D%B8/617/" },
    ],
    F3: [
      { type: "instagram", label: "에스락 Instagram", url: "https://www.instagram.com/smart.slock/" },
      { type: "official", label: "에스락 공식 홈페이지", url: "https://www.slock.kr/" },
    ],
    F9: [
      { type: "official", label: "날빛 Makefolio", url: "https://www.makefolio.co.kr/nalbit" },
      { type: "official", label: "날빛 우연못 상품", url: "https://wooyeonmot.co.kr/product/16708cc1-d43c-4d9a-945d-d5ea2c6aee93" },
    ],
    E29: [
      { type: "instagram", label: "송하요 Instagram", url: "https://www.instagram.com/songhayo/" },
      { type: "official", label: "송하요 공식 사이트", url: "http://www.songhayo.com/index.html" },
      { type: "official", label: "송하요 작가 프로필", url: "http://songhayo.co.kr/page_pcVO38" },
    ],
    H15: [
      { type: "instagram", label: "휴다인 Instagram", url: "https://www.instagram.com/hudain_tea/" },
      { type: "youtube", label: "휴다인 YouTube", url: "https://www.youtube.com/@hudain_tea" },
    ],
    A33: [
      { type: "instagram", label: "안동착한농장 Instagram", url: "https://www.instagram.com/5honeyfarm/" },
      { type: "official", label: "안동착한농장 경북고향장터", url: "https://www.cyso.co.kr/shop/item.php?it_id=1570795947" },
    ],
    A41: [{ type: "official", label: "보성천연염색협동조합 BEXPO 전시관", url: "https://www.bexpo.kr/home/main?cid=47" }],
    C15: [{ type: "instagram", label: "청학도방 Instagram", url: "https://www.instagram.com/songchunho/" }],
    D16: [
      { type: "official", label: "하동 차살림 BEXPO 전시관", url: "https://bexpo.kr/home/main?cid=263" },
      { type: "instagram", label: "차살림 Instagram 후보", url: "https://www.instagram.com/cha.salrim/" },
    ],
    G4: [{ type: "official", label: "하동차&바이오진흥원 하동녹차 상품 안내", url: "https://www.hadong.go.kr/01781/01788/02550.web?amode=view&psno=14" }],
    A19: [{ type: "instagram", label: "장흥다원 Instagram", url: "https://www.instagram.com/jangheungdawon/" }],
    A38: [{ type: "instagram", label: "이든갤러리 Instagram", url: "https://www.instagram.com/edengallery2025/" }],
    H3: [
      { type: "instagram", label: "한차원 Instagram", url: "https://www.instagram.com/han_chawon/" },
      { type: "official", label: "한차원 Smartstore", url: "https://smartstore.naver.com/hanchwon" },
    ],
    H18: [{ type: "instagram", label: "실크로드티 희락 Instagram", url: "https://www.instagram.com/cafe7542_silkroadtea/" }],
    A6: [{ type: "official", label: "한국차인연합회 문체부 법인현황", url: "https://www.mcst.go.kr/web/s_data/corporation/corpView.jsp?pSeq=1828" }],
    A7: [
      { type: "official", label: "세계기독교차문화협회 문체부 법인현황", url: "https://www.mcst.go.kr/site/s_data/corporation/corpView.jsp?pSeq=4100" },
      { type: "official", label: "Tea Flower 도서 정보", url: "https://www.yes24.com/product/goods/126807938" },
    ],
    A16: [{ type: "official", label: "동국대학교 차문화콘텐츠 전공", url: "https://gsbs.dongguk.edu/page/1107" }],
    A18: [{ type: "official", label: "순천대·고려천태국제선차 연구보존회 보도자료", url: "https://www.yna.co.kr/view/AKR20260508128400054" }],
    A27: [{ type: "official", label: "두레연 구품당 연심차 기사", url: "https://www.mdjournal.kr/news/articleView.html?idxno=41037" }],
    A34: [{ type: "official", label: "호아랑 옻칠채 공식 홈페이지", url: "https://www.hoarang.com/" }],
    A39: [{ type: "official", label: "감물드리 BEXPO 전시관", url: "https://www.bexpo.kr/home/main?cid=358" }],
    A42: [{ type: "official", label: "천연염색 미주사랑 BEXPO 전시관", url: "https://www.bexpo.kr/exhibition/industry_corp2?ca_id=0504&sort=wm_like" }],
    F1: [{ type: "official", label: "자연을담다 전시 디렉토리", url: "https://jcexpo.kr/cn/theme/basic/file/cont02-1.pdf" }],
    F11: [{ type: "official", label: "무유 다관 상품", url: "https://www.idus.com/w/product/b6c17a10-9906-4f26-ba34-d260b0ba9715" }],
    F13: [{ type: "official", label: "송화도예 김해분청도자전시판매관", url: "https://www.gimhae.go.kr/07288.web?amode=view&prodNum=PROD202202090035" }],
    F29: [{ type: "official", label: "심곡요 백자다관 상품", url: "https://cbw.co.kr/product/%EC%8B%AC%EA%B3%A1%EC%9A%94-%EB%B0%B1%EC%9E%90%EB%8B%A4%EA%B4%80-1-5-120ml/2062/" }],
    F30: [{ type: "official", label: "침향나무 BEXPO 전시관", url: "https://www.bexpo.kr/exhibition/industry_corp2?ord=desc&sort=wm_like&wm_option=wm_company_name" }],
    B24: [{ type: "official", label: "가미공방 사업자 정보", url: "https://www.bizkorea.org/company/view.asp?SEQ=1665618" }],
    C1: [{ type: "official", label: "나주문화재단 국제차문화대전 자료", url: "https://www.njcf.or.kr/www/community/press?idx=35&mode=view" }],
    B25: [{ type: "official", label: "도정요 안창호 상품 목록", url: "https://cbw.co.kr/category/%EB%8F%84%EC%A0%95%EC%9A%94-%EC%95%88%EC%B0%BD%ED%98%B8/176/" }],
    B21: [
      { type: "official", label: "몽탄갤러리 BEXPO 전시관", url: "https://bexpo.kr/exhibition/industry_corp2?ca_id=01&ord=asc&sort=wm_hit&wm_option=wm_company_name" },
      { type: "instagram", label: "몽탄갤러리 Instagram", url: "https://www.instagram.com/mongtangallery/" },
    ],
    C26: [{ type: "official", label: "문경 경북요 김윤식 기사", url: "https://www.newsis.com/view/NISX20201116_0001235734" }],
    E9: [{ type: "official", label: "백산도예 연구소 상품 목록", url: "https://cbw.co.kr/category/%EB%B0%B1%EC%82%B0-%EA%B9%80%EC%A0%95%EC%98%A5%EC%9A%B0%EB%82%A8-%EA%B9%80%EA%B2%BD%EC%8B%9D/93/" }],
    C29: [{ type: "official", label: "봉정요 김학수 상품", url: "https://www.mgmurc1975-mag.co.kr/shop/shop.php?catcode=11110000&page=1&prdcode=2211150011&ptype=view" }],
    E18: [{ type: "naver-blog", label: "토산요 안기모 작가 자료", url: "https://spp5908.tistory.com/10225" }],
    C11: [{ type: "official", label: "수제차전수관 박람회 참가 목록", url: "https://www.worldteaexpokorea.com/list/?category=t736O25D17&page=2&q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9" }],
    D26: [{ type: "official", label: "알천도예 아이디어스 상품", url: "https://www.idus.com/v2/product/fd5413dc-ac7d-4ddf-9903-d2743d375b0c" }],
    E5: [{ type: "official", label: "엄기순 금속전 전시 자료", url: "https://www.jungle.co.kr/exhibit/1599" }],
    E10: [{ type: "official", label: "여송도예 김해시 전시 안내", url: "https://www.gimhae.go.kr/07252/07253.web?amode=view&gcode=2053&idx=2559076" }],
    D30: [{ type: "naver-blog", label: "청림도요 청전 김학재 자료", url: "https://spp5908.tistory.com/7590" }],
    E20: [
      { type: "instagram", label: "다솔도예 Instagram", url: "https://www.instagram.com/dasoldoye/" },
      { type: "instagram", label: "다솔센트 Instagram", url: "https://www.instagram.com/dasol.scent/" },
    ],
    E21: [
      { type: "instagram", label: "파란나비공방 Instagram", url: "https://www.instagram.com/parannabie_studio/" },
      { type: "linktree", label: "파란나비공방 인포크", url: "https://link.inpock.co.kr/parannabie" },
      { type: "official", label: "파란나비공방 아이디어스", url: "https://www.idus.com/v2/artist/ddff5377-002f-4a1f-a0de-8628ae557c1e/product" },
      { type: "youtube", label: "파란나비공방 YouTube", url: "https://www.youtube.com/channel/UCVd2918EumYfTQUZrUZH23g" },
    ],
    E26: [
      { type: "instagram", label: "효향요 이인수 Instagram", url: "https://www.instagram.com/hyohyangyo/" },
      { type: "official", label: "효향요 이인수 무유 매화 다관", url: "https://www.gongboocha.com/shop/item.php?it_id=1746497598" },
    ],
    C3: [{ type: "instagram", label: "차휴 Instagram", url: "https://www.instagram.com/cha.hyu_tea/" }],
    H13: [{ type: "official", label: "茗扬天下 상품 페이지", url: "https://tao.hooos.com/goods_40587798701.html" }],
    G10: [{ type: "official", label: "다견원 일본녹차 센차 상품", url: "https://jaok.co.kr/product/%EB%8B%A4%EA%B2%AC%EC%9B%90-%EC%9D%BC%EB%B3%B8%EB%85%B9%EC%B0%A8-%EC%84%BC%EC%B0%A8-100g%EC%9E%8E%EC%B0%A8%EC%A0%84%EC%B0%A8/150" }],
    H9: [{ type: "official", label: "밀밀홍 BEXPO 전시관", url: "https://www.bexpo.kr/home/main?cid=381" }],
    G23: [{ type: "official", label: "아람드리 메가쇼 참가 자료", url: "https://www.megashow.co.kr/shop/20ss/sshop/exhibitor_view.php?code=2020SS-G-134" }],
    G27: [{ type: "official", label: "여원 BEXPO 전시관", url: "https://bexpo.kr/exhibition/2025corp2?ca_id=05&page=5&wm_category1=05&wm_keyword=&wm_option=wm_company_name" }],
    H8: [{ type: "official", label: "죽평 보이차대전 기사", url: "https://www.tcnews.kr/news/article.html?no=20127" }],
    G6: [{ type: "official", label: "천년보이차 보이차대전 기사", url: "https://www.tcnews.kr/news/article.html?no=20127" }],
    H22: [{ type: "official", label: "쪽빛나라 BEXPO 전시관", url: "https://bexpo.kr/exhibition/2025corp2?ca_id=&page=2&wm_category1=02&wm_keyword=&wm_option=wm_company_name" }],
    H14: [{ type: "official", label: "취죽진여실 사업자 정보", url: "https://opengo.kr/5601fb340e887edf2ce0e139" }],
    H24: [{ type: "official", label: "수향 BEXPO 전시관", url: "https://bexpo.kr/exhibition/2025corp2?ca_id=05&wm_category1=05&wm_keyword=&wm_option=wm_company_name" }],
    G14: [
      { type: "instagram", label: "사계다향 Instagram", url: "https://www.instagram.com/sijichaxiang/" },
      { type: "instagram", label: "사계다향 Instagram 후보", url: "https://www.instagram.com/bella_ling59/" },
    ],
    A29: [{ type: "instagram", label: "토라세라믹 Instagram", url: "https://www.instagram.com/tora_ceramic_official/" }],
    A1: [{ type: "official", label: "무유다원 BEXPO 전시관", url: "https://www.bexpo.kr/home/main?cid=348" }],
    A17: [
      { type: "instagram", label: "가현아트 Instagram", url: "https://www.instagram.com/gahyun_art_studio/" },
      { type: "linktree", label: "가현아트 Linktree", url: "https://linktr.ee/gahyunart" },
      { type: "official", label: "가현아트 공식 홈페이지", url: "https://www.gahyunart.com/" },
      { type: "official", label: "가현아트 작품 판매", url: "https://www.gahyunart.com/shop" },
    ],
    B15: [
      { type: "instagram", label: "티팔레트 Instagram", url: "https://www.instagram.com/tea.palette.2019/" },
      { type: "official", label: "티팔레트 공식몰", url: "https://teapalette.cafe24.com/" },
      { type: "official", label: "티팔레트 리뷰 게시판", url: "https://teapalette.cafe24.com/board/review/4/" },
    ],
    F32: [{ type: "instagram", label: "하다디자인 Instagram", url: "https://www.instagram.com/h.a.d.a_design/" }],
    H19: [{ type: "official", label: "티뉴스 부스목록 원본", url: "http://www.teanews.com/attach/20260526/1779764692.jpg" }],
    C19: [
      { type: "linktree", label: "산이리 Linktree", url: "https://linktr.ee/saniri_ceramics" },
      { type: "instagram", label: "산이리 Instagram", url: "https://www.instagram.com/saniri_ceramics/" },
      { type: "official", label: "예스파크 산이리 도자공방", url: "https://2000yespark.or.kr/intro_2022/intro.php?mode=view&page=1&sp=star&store_idx=218" },
    ],
    C21: [
      { type: "instagram", label: "Bonida ceramic Instagram", url: "https://www.instagram.com/ceramic_bonida/" },
      { type: "official", label: "세라믹 보니다 사업자 정보", url: "https://marketbz.com/companyDetail/6461802338" },
    ],
    F32: [],
    A36: [
      { type: "official", label: "대림목공예 공식 홈페이지", url: "https://dl.co.kr/" },
      { type: "instagram", label: "대림목공예 Instagram", url: "https://www.instagram.com/daelim_woodcraft/" },
    ],
    E1: [{ type: "official", label: "꽃차 하늘바라기 공식몰", url: "https://www.myflowertea.com/" }],
    E24: [{ type: "official", label: "영산요 공식몰", url: "https://yeongsanyo.com/category/%241/63" }],
    C17: [
      { type: "instagram", label: "도자공간 빛살 임영주 Instagram", url: "https://www.instagram.com/imyoungju_bitsal/" },
      { type: "official", label: "도자공간 빛살 작가 자료", url: "https://spp5908.tistory.com/10413" },
    ],
    F28: [
      { type: "instagram", label: "드내뜰 Instagram", url: "https://www.instagram.com/shine_in_my_yard/" },
      { type: "official", label: "KCDF 드내뜰", url: "https://www.kcdf.kr/craftrendfair/trendFair/pavln/view.do?bsnsPssrpSn=197&menuNo=1100014&trendFairSn=505&type=01" },
    ],
    C27: [
      { type: "instagram", label: "라키모 Instagram", url: "https://www.instagram.com/rakimo_ceramic/" },
      { type: "official", label: "Wello 라키모 소개", url: "https://www.welfarehello.com/community/hometownNews/%EA%B2%BD%EB%B6%81-%EC%B2%B4%ED%97%98-%ED%96%A5%EB%8F%84%EC%B2%B4%ED%97%98%EC%9D%84-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%8A%B9%EB%B3%84%ED%95%9C-%EA%B3%B5%EA%B0%84-%EB%9D%BC%ED%82%A4%EB%AA%A8--c77f14e1-db44-4841-8da3-d09550a13fee" },
    ],
    E13: [
      { type: "instagram", label: "무무요 이용무 Instagram", url: "https://www.instagram.com/moomoo_studio/" },
      { type: "official", label: "청백원 무무요 이용무", url: "https://cbw.co.kr/category/%EB%AC%B4%EB%AC%B4%EC%9A%94-%EC%9D%B4%EC%9A%A9%EB%AC%B4/173/" },
    ],
    A48: [
      { type: "instagram", label: "젠테라피그룹 Instagram", url: "https://www.instagram.com/zentherapygroup/" },
      { type: "official", label: "젠테라피 공식 소개", url: "https://zentherapy.co.kr/about/" },
      { type: "official", label: "젠힐링샵", url: "https://zenhealingshop.co.kr/" },
    ],
    F2: [
      { type: "official", label: "경위복차 공식 Modoo", url: "http://jingweifutea2016.modoo.at/" },
      { type: "official", label: "경위복차 BEXPO", url: "https://www.bexpo.kr/home/info?cid=172" },
    ],
    E2: [
      { type: "official", label: "김천방짜유기 공식 쇼핑몰", url: "http://www.yugishop.co.kr" },
      { type: "official", label: "김천방짜유기 BEXPO", url: "https://www.bexpo.kr/home/info?cid=5" },
    ],
    G10: [
      { type: "official", label: "다견원 말차 판매처", url: "https://dadobang.net/product/%EC%B2%AD%EB%B2%BD-%EB%A7%90%EC%B0%A820g/25" },
      { type: "official", label: "다견원 센차 판매처", url: "https://jaok.co.kr/product/%EB%8B%A4%EA%B2%AC%EC%9B%90-%EC%9D%BC%EB%B3%B8%EB%85%B9%EC%B0%A8-%EC%84%BC%EC%B0%A8-100g%EC%9E%8E%EC%B0%A8%EC%A0%84%EC%B0%A8/150" },
    ],
  };

  const VENDOR_SEARCH_QUERY_OVERRIDES = {
    A6: "한국차인연합회 차문화",
    A5: "제주차농 JEJU CHANONG",
    A9: "공부차파크 과천 청계산점",
    A10: "대구 국제통상 차업체 시음회",
    A12: "무차 moocha 명인신광수차",
    A16: "동국대학교 불교대학원 차문화콘텐츠학과",
    A18: "고려천태국제선차 연구보존회 선차",
    A20: "동원공방 정혜주 도예",
    A3: "현암제다 녹차 쑥차 황차",
    A23: "문재필 옻칠갤러리 옻칠공예",
    A25: "트임 김진욱도예원 생활자기 차도구",
    A21: "한국토기 검은 토기",
    A26: "매원초가 도자기제조",
    A27: "두레연 구품당 연 힐링푸드",
    A32: "우기원 키위새 개완",
    A34: "옻칠채 서울카페쇼",
    A35: "와락공방 목공",
    A37: "자연으로 옹크씨 차공예박람회",
    A38: "주앤안 이든갤러리 천연염색 스카프",
    A44: "승설재 무이성 육계 대홍포",
    A45: "투다헌 보이차 중국차 다기",
    A47: "한국 차문화협회 주요사업",
    A49: "원유전통예절문화협회 다림헌 차문화예절",
    B5: "보성원당제다원 우전 세작 홍차",
    B12: "보성녹차 선다원",
    B14: "한국티산업경영연구원 차그리다 티블렌딩",
    B17: "토정가 이조요 도자기",
    B19: "청자 더공유 theOu 모던 청자",
    B18: "황우요 이천 도자기",
    B21: "몽탄갤러리 차 도구",
    B22: "욱산도헌 김석만 다기",
    B25: "도정요 백자 찻잔세트",
    B26: "대광도요 찻잔 개완",
    B28: "한세은 도예공방 청자 다관",
    B10: "소아다원 말차가루 고급말차 호지차",
    B3: "천보다원 녹차류",
    B11: "다채 발효차 세계차품평대회",
    C14: "노전요 도예 목다구",
    C15: "청학도방 송춘호 다관",
    C17: "도자기마을 빛살 임영주 도자기",
    C4: "하동아낙 LADY HADONG 청귤병차",
    C6: "로전 침향발효차",
    C20: "오름오르다 그릇숨 개완 다관",
    C21: "보니다 도예 차도구",
    C8: "자드리 TEA SHOP JDDE LEE TEA STORY 홍차",
    C11: "수제차전수관 수제차",
    C13: "붓당골제다 하동 수제홍차 헛개잎차",
    C22: "조선백자 도자기",
    C23: "정요 이천 도자기 요장",
    C25: "삐딱한 도자기 황제요 이기호 끽다거 무유다관",
    C24: "소산도예 한호현 무광백자",
    D1: "일구다 요산당 차",
    D14: "무애 MUAE TEA",
    D17: "산도방",
    D18: "설도예공방 최기영",
    D20: "민토 최민록 Tea Strainer",
    D21: "우곡요 이종태 달항아리",
    D23: "도유가 문찬석 차그릇",
    D24: "소랑요 권혁문",
    D26: "알천도예 이천 사기막골",
    D29: "김동인 결함의기록 차도구",
    D30: "청림도요 김학재 찻사발",
    D31: "영남요 1730 문경",
    D3: "황아차 세작 녹차 용강 녹차",
    D32: "포암요 이동규 도예",
    D33: "기린공방 도예공방",
    E3: "이아뜰리에 다식 화과자",
    E5: "엄기순 금속 전 국제차문화대전",
    E7: "따티 뷰닉스테크 머그워머",
    E8: "수니공방 공방",
    E9: "백산도예연구소 도자기",
    E10: "여송도예 다기 세트",
    E11: "우림도예 백년소공인",
    E12: "효원도예 스마트스토어",
    E13: "무무요 이용무 도예가",
    E15: "김해 예인요 임용택 다관 개완 차통",
    E16: "다솜공방 도자기",
    E17: "예인요 이미진 다관",
    E18: "부산광역시 공예협동조합 토산요",
    E20: "다솔도예 dasoldoye 도자기 다기",
    E21: "김무진 파란나비공방 도자기",
    E26: "효향요 이인수 무유 매화 다관",
    E14: "정목요 김정목 말차 다완",
    E29: "송하요 우상욱 차도구 다기",
    E4: "경기한방꽃차협동조합",
    E23: "긍정공방 공예품",
    E28: "도동요 김용석 다관",
    E22: "청담요 프리미엄 식기",
    E30: "수도예 가정용 장식용 도자기",
    F2: "경위복차 가인갤러리 복전차",
    F4: "묘차 우롱차 밀크티",
    F10: "Dr.GP 강남약방 청기백기",
    F7: "연세라믹 Yeon_ceramic",
    F8: "우기세라믹 공식",
    F11: "무유다원 덖음차 무쇠솥",
    F12: "삼정공방 수작업 차 도구",
    F13: "송화도예 다구세트",
    F5: "교문공방 은주전자 은다관",
    F16: "라세라미스타 개완 티팟",
    F18: "다경요 김학기 찻그릇",
    F19: "정호요 임만재 도예 김해 찻잔",
    F20: "연화도방 백자 찻잔 투광잔",
    F21: "언양도예공방 언양요",
    F23: "이치헌도예연구소 흙이야기 도예공방",
    F24: "박달요 도자기제조",
    F25: "모동도예 윤관영",
    F26: "소월백자",
    F28: "드내뜰 이종주의 도자기",
    F27: "진곡요 분청퇴수기",
    F29: "심곡요 안주현 백자다관",
    F30: "침향나무 침향 염주 향제품",
    F31: "모을 황선회도방 다기",
    F32: "HaDa design 하다디자인",
    F9: "날빛 NALBIT 숙우 차합 찻잔",
    F1: "자연을담다 궁중떡 찹쌀약과 생강젤리",
    G1: "대익코리아 보이차",
    G2: "티하우스 나니 홍차",
    G5: "글림피스 GLIMPIECE 블렌딩 티",
    G6: "천년보이차",
    G10: "다견원 일본 말차 말차도구",
    G7: "다향연 차 티앤크래프트페어",
    G9: "지유명차 보이차",
    G12: "랑카티스 스리랑카 홍차",
    G13: "틴지오브소울 TINGE OF SOUL 우롱차",
    G15: "동정보이차 노반차품",
    G16: "차세상 유산차방 YOSHAN TEA 대만 우롱차",
    G17: "宜兴永盛陶艺茗壶堂 복숭아우롱차 표일배",
    G18: "北京妙香缘贸易有限公司 밀도우롱 계화우롱",
    G20: "포담 티하우스 대만차 포담가챠뽑기",
    G21: "尹茶人 YIN TEA 대만차 황금우롱",
    G25: "다심헌 티클래스 보이차 말차",
    G22: "九山之臻 보이생차 刮风寨",
    G23: "아람드리 아람농장 감귤주스 과채음료",
    G24: "바이에드가 by Edgar 목공방",
    G26: "보림원목공방",
    G27: "여원 전통차도구 말차",
    H4: "예평 만수가 만든 차 백차 백우롱",
    H6: "복향명차 백모단 보이차 야생백차",
    H7: "상명요 분청 차도구 이효림",
    H8: "죽평 다관 보이차",
    H10: "석가명차 오운산고차",
    H12: "아망시 프리미엄 티라운지 차",
    H13: "茗扬天下 양선홍차 정산소종",
    H14: "취죽진여실 보이차",
    H17: "일상차 壹叁荼 武夷岩茶 무이암차",
    H18: "주식회사 실크로드티 공항동 찻집 밀크티",
    H20: "인센스월드 공식",
    H21: "차모아 티로직 차도구",
    H22: "청도 천연염색연구회 쪽빛나라",
    H24: "수향 맞춤형 찻자리",
    H25: "고전문화 자사호 특별전",
    H16: "宜兴知了文化创意有限公司 紫砂制品",
    H19: "森粹陶瓷公司 국제차문화대전",
    C19: "산이리 도예 차도구",
    C21: "세라믹 보니다 Bonida ceramic teaware",
    F32: "HaDa design 하다디자인",
    A17: "가현아트 판화 실크스크린",
    D29: "김동인 도자 結莟 FLAWER 2403V",
    A36: "대림목공예 찻상 소반",
    E1: "꽃차 하늘바라기 윤정자 대통령 표창",
    F28: "드내뜰 이종주 양구백자다기",
    G10: "다견원 일본 말차 센차 호지차",
    C3: "차휴 흑차 보이차 차마카세",
    B6: "징광문화 징광잎차 보성 야생차",
  };

  const REVIEW_DETAIL_OVERRIDES = {
    B2: [
      {
        product: "유기농 아름다운 보성녹차 25T",
        review:
          "꽃마USA 공개 상품 페이지에서 보성제다 유기농 아름다운 보성녹차 티백 1건의 5점 리뷰가 확인됩니다. 리뷰는 한국에서 자주 먹던 녹차라는 경험과 맛을 언급합니다.",
        sentiment: "positive",
        sourceTitle: "꽃마USA 보성제다 유기농 아름다운 보성녹차 리뷰",
        sourceUrl: "https://www.cconmausa.com/products/7597412646998",
        confidence: "medium",
      },
      {
        product: "유기농 보성 녹차 50티백",
        review:
          "SSG.COM 판매 페이지에서 보성제다 유기농 보성 녹차 50티백 상품과 생산자·유기농 가공식품 인증 정보가 확인됩니다. 구매평 본문은 제한적이라 제품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "SSG.COM 보성제다 유기농 녹차 상품",
        sourceUrl: "https://www.ssg.com/item/itemView.ssg?itemId=1000066037369",
        confidence: "medium",
      },
    ],
    B4: [
      {
        product: "운해다원 유기농 우전 40g x 2",
        review:
          "쿠팡 공개 상품 페이지에서 운해다원 유기농 우전 40g x 2 상품과 차나무잎 100%, 보성운해녹차/이순금 판매자 정보가 확인됩니다. 상품평 2건 표시는 확인되지만 본문은 공개 확인이 제한되어 제품·리뷰 수 단서로만 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 운해다원 유기농 우전",
        sourceUrl: "https://www.coupang.com/vp/products/1925266635?itemId=3268518872&vendorItemId=71255546932",
        confidence: "medium",
      },
      {
        product: "운해 우전·세작·홍차·황차·청차·백차·호지차·말차",
        review:
          "친환경인증관리정보시스템에서 운해다원의 우전, 세작, 중작, 대작, 홍차, 황차, 청차, 백차, 호지차, 말차/가루 제품군과 2026-03-12부터 2027-03-11까지의 유기농 인증 기간이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "친환경인증관리정보시스템 운해다원 인증 품목",
        sourceUrl: "https://www.enviagro.go.kr/portal/info/Info_certifi_spe.do?s_std_cert_no=15800303",
        confidence: "high",
      },
    ],
    B7: [
      {
        product: "자연의혼 우전 / 청명한 하루 블렌딩 / 향기의 마술사 홍차",
        review:
          "BEXPO 공개 전시관에서 보성 부광녹차의 자연의혼 우전, 청명한 하루 블렌딩, 향기의 마술사 홍차와 청보리순정·아름다운 동행 제품명이 확인됩니다. 소비자 리뷰 본문은 아직 확인되지 않아 출품 제품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "서울국제불교박람회 보성 부광녹차 출품 제품",
        sourceUrl: "https://www.bexpo.kr/home/main?cid=118",
        confidence: "medium",
      },
    ],
    B9: [
      {
        product: "수제덖음 첫물차 / 홍차 / 황차 / 청차 / 백하수오 가루말차",
        review:
          "BEXPO와 보성세계차엑스포 공개 자료에서 영천다원의 수제덖음 첫물차, 두물차, 홍차, 황차, 청차, 흰민들레차, 새싹보리순가루, 백하수오 가루말차 제품군이 확인됩니다. 제품별 소비자 리뷰는 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "보성세계차엑스포 영천다원 판매 품목",
        sourceUrl: "https://www.bsworldteaexpo.kr/sales/ex_detail?ca_id=c0",
        confidence: "medium",
      },
    ],
    B12: [
      {
        product: "세작 녹차 40g",
        review:
          "SSG.COM에서 선다원 세작 녹차 40g 구매평 1건과 5.0점 평점이 확인됩니다. 리뷰 본문 공개 범위는 제한적이어서 평점/건수 중심으로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "SSG.COM 선다원 세작 녹차 40g 구매평",
        sourceUrl: "https://www.ssg.com/item/itemView.ssg?itemId=1000173807300",
        confidence: "medium",
      },
      {
        product: "쑥차 30g",
        review:
          "선다원 공식 모바일 상품 페이지에서 2025년 햇차 쑥차 30g 상품과 상품후기 82건 표시가 확인됩니다. 본문 전체는 저장하지 않고 후기 수와 상품 근거로 반영했습니다.",
        sentiment: "neutral",
        sourceTitle: "선다원 공식몰 쑥차 30g 상품후기",
        sourceUrl: "https://m.sundawon.com/product/25%EB%85%84-%ED%96%87%EC%B0%A8%EC%91%A5%EC%B0%A8-30g%EC%82%B0%EC%86%8D%EC%97%90%EC%84%9C-%EC%97%AC%EB%A6%B0%EC%91%A5%EB%A7%8C-%EC%B1%84%EC%B7%A8/165/",
        confidence: "medium",
      },
    ],
    B13: [
      {
        product: "섬진다원 세작홍차",
        review:
          "공개 티스토리 시음 기록에서 섬진다원 세작홍차 제품명이 확인됩니다. 단일 시음 기록이라 반복 평가로 확장하지 않고 제품 경험 단서로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "Daily Tearoom 섬진다원 세작홍차",
        sourceUrl: "https://dailytearoom.tistory.com/30",
        confidence: "medium",
      },
      {
        product: "백차우전",
        review:
          "공개 블로그 글에서 섬진다원 백차우전 언급이 확인됩니다. 제품별 반복 리뷰 수는 부족하지만 백차 계열 취급 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "Tistory 섬진다원 백차우전 언급",
        sourceUrl: "https://ohnsan.tistory.com/6109724",
        confidence: "medium",
      },
      {
        product: "티코스: 우전·백차·홍차·쑥차",
        review:
          "다이닝코드 장소 리뷰에서 섬진다원 티코스와 우전, 백차, 홍차, 쑥차 구성이 언급됩니다. 장소 방문 리뷰 성격이므로 제품 판매평과 구분해 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "다이닝코드 섬진다원 방문 리뷰",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=MfGD01xZgjMs",
        confidence: "medium",
      },
    ],
    C2: [
      {
        product: "구기자차 80g",
        review:
          "연우제다 공식몰/Naver Pay 공개 구매평에서 구기자차 80g에 대해 진하고 구수한 맛이 언급됩니다. 단일 공개 리뷰라 반복 평가로 단정하지 않고 제품별 리뷰 단서로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "연우제다 공식몰 구기자차 구매평",
        sourceUrl: "https://xn--2j1b547aqqaq9b.com/",
        confidence: "medium",
      },
      {
        product: "쑥차 40g",
        review:
          "연우제다 공식몰 공개 구매평에서 쑥차 40g의 그윽한 맛이 언급됩니다. 제품별 공개 리뷰 단서로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "연우제다 공식몰 쑥차 구매평",
        sourceUrl: "https://xn--2j1b547aqqaq9b.com/",
        confidence: "medium",
      },
      {
        product: "녹차 중작 80g",
        review:
          "SSG.COM에서 연우제다 녹차 중작 80g 상품과 4.0점, 1건 구매평 표시가 확인됩니다. 본문은 제한적이라 평점/건수 중심으로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "SSG.COM 연우제다 녹차 중작 80g",
        sourceUrl: "https://www.ssg.com/item/itemView.ssg?itemId=1000098451625",
        confidence: "medium",
      },
    ],
    C5: [
      {
        product: "청석골감로다원 5종 / 하동 작설차",
        review:
          "하동세계차엑스포 인정상품 기사에서 청석골감로다원 5종이 확인되고, 관광 정보에서 200년 고차수와 전통 무쇠솥 덖음차, 차 클래스/스테이 운영이 확인됩니다. 소비자 제품 리뷰는 아직 충분하지 않습니다.",
        sentiment: "neutral",
        sourceTitle: "중도일보 하동세계차엑스포 인정상품",
        sourceUrl: "https://m.joongdo.co.kr/view.php?key=20220421010005196",
        confidence: "medium",
      },
    ],
    A23: [
      {
        product: "옻칠갤러리 해송 옻칠 수저/테이블웨어",
        review:
          "아이디어스 공개 작가 페이지에서 옻칠갤러리 해송 상품과 4.9점대 평점, 300건 이상 리뷰 수가 확인됩니다. 리뷰 본문은 공개 확인 범위가 제한되어 평점/건수와 상품 채널 근거로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "아이디어스 옻칠갤러리 해송 상품/리뷰",
        sourceUrl: "https://www.idus.com/v2/artist/ef292f42-c02d-461e-acec-aaf044201b49/product",
        confidence: "medium",
      },
    ],
    A27: [
      {
        product: "향기백련 순수연심차 / 연꽃차 / 연잎차",
        review:
          "엠디저널과 월드티엑스포 공개 자료에서 두레연 구품당의 연심차, 연꽃차, 연잎차, 연근차, 황칠차, 구기자차 제품군이 확인됩니다. 2024·2025 국제차문화대전 참가와 시음/교육/할인 안내도 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "엠디저널 두레연 구품당 국제차문화대전 참가",
        sourceUrl: "https://www.mdjournal.kr/news/articleView.html?idxno=41448",
        confidence: "medium",
      },
    ],
    A35: [
      {
        product: "원목 차도구 / 다구보관함 / 차반",
        review:
          "2024 불교문화엑스포 디렉토리에서 와락공방의 차탁, 차반, 찻통, 다구보관함, 다관보관함, 다하·차시·차칙 등 목공 차도구 품목이 확인됩니다. Brown Things 2025 차문화대전 색인에서도 와락공방 차도구 소개가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "2024 불교문화엑스포 디렉토리 와락공방",
        sourceUrl: "https://bexpodg.kr/files/2024_directory.pdf",
        confidence: "medium",
      },
    ],
    G23: [
      {
        product: "아람드리 감귤주스",
        review:
          "오아시스 공개 상품 페이지에서 아람드리 감귤주스가 무농약 감귤 기반 어린이 과채음료로 판매되며, 검색 결과 기준 5점 평점과 135건 리뷰 수가 확인됩니다. 제품 본문과 리뷰 전체는 공개 확인 범위가 제한되어 요약 정보로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "오아시스 아람드리 감귤주스",
        sourceUrl: "https://www.oasis.co.kr/product/detail/3624?categoryId=207",
        confidence: "medium",
      },
      {
        product: "아람드리 자두",
        review:
          "SSG.COM 공개 상품 페이지에서 농업회사법인 아람농장㈜ 생산자 정보와 아람드리 자두 상품이 확인됩니다. 차 제품 리뷰가 아니라 참가업체 식품/과채 상품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "SSG.COM 아람드리 자두",
        sourceUrl: "https://www.ssg.com/item/itemView.ssg?itemId=1000229752013",
        confidence: "medium",
      },
    ],
    H1: [
      {
        product: "나향소타차",
        review:
          "식신 명가원 공개 장소 페이지에서 나향소타차가 구수하고 부드러우며 데일리로 마시기 좋다는 취지의 방문자 리뷰 요약이 확인됩니다. 같은 페이지에서 식약처 정밀검사/정식통관 안내도 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "식신 보이차전문점 명가원 리뷰 요약",
        sourceUrl: "https://www.siksinhot.com/P/1221062",
        confidence: "medium",
      },
      {
        product: "1998년 강성호 생차 / 1999년 숙차 / 2001년 중차 황인",
        review:
          "오리엔티 상품 페이지에서 명가원 보이차 샘플 상품으로 1998년 강성호 생차, 1999년 숙차, 2001년 중차 황인이 확인됩니다. 소비자 리뷰라기보다 취급 제품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "오리엔티 명가원 보이차 상품",
        sourceUrl: "https://orientea.co.kr/product/%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EB%AA%85%EA%B0%80%EC%9B%90-1998%EB%85%84-%EA%B0%95%EC%84%B1%ED%98%B8-%EC%83%9D%EC%B0%A8/258/",
        confidence: "medium",
      },
    ],
    H3: [
      {
        product: "목단 전통문양 도자기 찻잔",
        review:
          "쿠팡 공개 상품 페이지에서 한차원 목단 전통문양 도자기 찻잔과 1건 리뷰 표시가 확인됩니다. 리뷰 본문은 제한적이라 상품/리뷰 수 단서로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 한차원 목단 전통문양 도자기 찻잔",
        sourceUrl: "https://www.coupang.com/vp/products/7837333909",
        confidence: "medium",
      },
      {
        product: "경덕진 찻잔 꽃무늬 칠보 도자기 찻잔세트 6P",
        review:
          "쿠팡 공개 상품 페이지에서 한차원 경덕진 찻잔세트 6P와 2건 리뷰 표시가 확인됩니다. 중국 차도구 취급 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 한차원 경덕진 찻잔세트 6P",
        sourceUrl: "https://www.coupang.com/vp/products/7837275347",
        confidence: "medium",
      },
    ],
    H7: [
      {
        product: "상명요 기명절지도 찻잔",
        review:
          "매그파이앤타이거 리뷰 페이지에서 상명요 기명절지도 찻잔에 대해 5점 리뷰와 '매력적'이라는 평가가 확인됩니다. 관련 리뷰 조각에서는 색감이 좋고 예쁘다는 반응도 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "Magpie & Tiger 상명요 찻잔 리뷰",
        sourceUrl: "https://magpie-and-tiger.com/article/review/4/3904/",
        confidence: "medium",
      },
    ],
    H15: [
      {
        product: "휴다인 이루다 뚜껑 머그컵 거름망 티머그",
        review:
          "쿠팡 공개 상품 페이지에서 인티맥스-휴다인의 이루다 뚜껑 머그컵 거름망 티머그가 확인됩니다. 도자기제 뚜껑/머그컵, 차거름망, 차우림기, 전통차·대용차·화차 우림용으로 소개되며 상품평은 0건으로 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 휴다인 이루다 티머그",
        sourceUrl: "https://www.coupang.com/vp/products/8534735811",
        confidence: "medium",
      },
    ],
    A2: [
      {
        product: "청해진다원 우롱차 / 완도 차밭",
        review:
          "세계일보 기사에서 완도 청해진다원이 재래종 차나무를 기반으로 우롱차를 재배한다는 내용과 차문화 소통 공간을 지향한다는 운영 방향이 확인됩니다. 소비자 리뷰가 아니라 다원/품목 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "세계일보 완도 청해진다원 우롱차 소개",
        sourceUrl: "https://www.segye.com/newsView/20180612000807",
        confidence: "medium",
      },
    ],
    A33: [
      {
        product: "프로폴리스 50cc",
        review:
          "사이소 공개 상품 페이지에서 안동착한농장 프로폴리스 50cc가 원산지 안동시 녹전면 녹래리, 판매가 40,000원/할인가 35,000원으로 확인됩니다. 소비자 리뷰는 확인되지 않아 상품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "사이소 안동착한농장 프로폴리스 50cc",
        sourceUrl: "https://www.cyso.co.kr/shop/item.php?it_id=1570795947",
        confidence: "medium",
      },
    ],
    A34: [
      {
        product: "옻칠채 옻칠 공예품",
        review:
          "서울카페쇼 참가 정보와 오픈고 사업자 정보에서 옻칠채 업체명, 인터넷 판매 사업자 정보가 확인됩니다. 상품별 리뷰나 공식 SNS는 아직 확인되지 않아 기본 업체 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "오픈고 옻칠채 사업자 정보",
        sourceUrl: "https://opengo.kr/5601fa8d0e887edf2cb190d7",
        confidence: "low",
      },
    ],
    A40: [
      {
        product: "꼬매 KKOME 오방색 셔츠 / 조각보 블라우스",
        review:
          "불교박람회 디렉토리와 공예트렌드페어 자료에서 꼬매 KKOME의 현대 한복형 의류, 오방색 셔츠, 모란도 블라우스, 초충도 셔츠, 조각보 블라우스 품목이 확인됩니다. 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "불교박람회 꼬매 KKOME 디렉토리",
        sourceUrl: "https://bexpo.kr/exhibition/2025corp2?ord=desc&page=7&sort=wm_hit&wm_option=wm_company_name",
        confidence: "medium",
      },
    ],
    A41: [
      {
        product: "천연염색 한복 / 규방·퀼트·한지공예",
        review:
          "불교박람회와 사람인 기업 정보에서 보성천연염색협동조합의 천연염색 제품, 천연염색 한복, 야생화, 규방, 퀼트, 한지공예, 체험학습이 확인됩니다. 상품별 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "사람인 보성천연염색협동조합 사업내용",
        sourceUrl: "https://www.saramin.co.kr/zf_user/company-info/view/csn/R2ZvMk5jYk0yQXIzZk1Ecm1zQktwdz09/company_nm/%EB%B3%B4%EC%84%B1%EC%B2%9C%EC%97%B0%EC%97%BC%EC%83%89%ED%98%91%EB%8F%99%EC%A1%B0%ED%95%A9",
        confidence: "medium",
      },
    ],
    B1: [
      {
        product: "보성차 홍보관",
        review:
          "공개 기사에서 보성군이 차 박람회에서 보성차 홍보관을 운영하며 시음, 홍보물, 보성 차·농특산품 전시를 진행한 이력이 확인됩니다. 지자체 홍보관 성격이라 제품별 소비자 리뷰는 적용하지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "보성군 보성차 홍보관 운영 기사",
        sourceUrl: "https://hsgnews.kr/article.php?aid=32995235",
        confidence: "medium",
      },
    ],
    B3: [
      {
        product: "FORMAY First Flush / Second Flush / Summer Flush / Autumnal Flush",
        review:
          "BEXPO 공개 자료에서 천보다원 FORMAY Single Estate Tea와 First Flush, Second Flush, Summer Flush, Autumnal Flush 제품군이 확인됩니다. 별도 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "BEXPO 천보다원 FORMAY 자료",
        sourceUrl: "https://bexpo.kr/superboard/data/siteconfig/2020111114352316050729230380.pdf",
        confidence: "medium",
      },
      {
        product: "보성 발효차",
        review:
          "아시아경제 기사에서 천보다원이 2013 보성 발효차 품평대회 최우수상을 받은 이력이 확인됩니다. 소비자 리뷰는 아니지만 품평 이력으로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "아시아경제 보성 발효차 품평대회",
        sourceUrl: "https://cm.asiae.co.kr/article/2013062010322821169",
        confidence: "medium",
      },
    ],
    B5: [
      {
        product: "보성 우전 / 보성 홍차 / 서리꽃99차",
        review:
          "뉴스워커 기사에서 보성원당제다원의 보성 우전 80g, 보성 홍차, 서리꽃99차, 우엉차, 돼지감자차가 소개됩니다. 공개 리뷰가 아니라 제품군·가격 이력 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "뉴스워커 보성원당제다원 제품 소개",
        sourceUrl: "https://www.newsworker.co.kr/news/articleView.html?idxno=10306",
        confidence: "medium",
      },
    ],
    D1: [
      {
        product: "요산당 차 / 일구다 1인 다기·유자차",
        review:
          "요산당 Linktree와 일구다 공식몰에서 지리산 화개 차, 순수생 유자차, 1인 백자 쾌객배, 개완·숙우·찻잔 세트, 답례품 구성이 확인됩니다. 소비자 리뷰는 확인되지 않아 공식 상품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "일구다 공식몰 요산당 차·다기 상품",
        sourceUrl: "https://ilguda.com/60",
        confidence: "medium",
      },
    ],
    D5: [
      {
        product: "조태연가 죽로차 우전 80g",
        review:
          "조태연가 공식몰 우전 80g 상품 페이지에서 5점 구매평 5건이 확인됩니다. 리뷰에는 해마다 찾는다, 다른 집 차와 맛이 다르다, 색·향·맛이 좋다는 취지의 평가가 보입니다.",
        sentiment: "positive",
        sourceTitle: "조태연가 죽로차 공식몰 우전 80g 구매평",
        sourceUrl: "http://jukro.co.kr/shop/shopdetail.html?branduid=324113&xcode=001&mcode=001&scode=001&type=X&sort=order&current_category=001001&search=&GfDT=ZmZ3UQ%3D%3D",
        confidence: "high",
      },
    ],
    F1: [
      {
        product: "궁중떡 / 수제 찹쌀약과 / 생강젤리 / 대추칩",
        review:
          "하동세계차엑스포, 카페&베이커리페어, 메가쇼, 불교박람회 식품관 공개 자료에서 자연을담다의 궁중떡, 수제 찹쌀약과, 생강젤리, 대추칩 품목이 확인됩니다. 소비자 리뷰는 확인되지 않아 전시 품목 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "불교박람회 식품관 착한먹거리 자연을담다",
        sourceUrl: "https://bexpo.kr/exhibition/industry_corp?ca_id=0602",
        confidence: "medium",
      },
    ],
    G24: [
      {
        product: "바이에드가 by Edgar 목공예품",
        review:
          "공개 사업자 디렉토리에서 바이에드가(by Edgar)가 경북 문경시의 나무제품 제조 업체로 확인됩니다. 공식 SNS·상품 리뷰는 확인되지 않아 기본 사업자/제품군 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "MarketBz 바이에드가 사업자 정보",
        sourceUrl: "https://marketbz.com/companyDetail/8041200308",
        confidence: "low",
      },
    ],
    G26: [
      {
        product: "국내산 원목 정통 옻칠 주장자 지팡이",
        review:
          "BEXPO와 2024 불교문화엑스포 디렉토리에서 보림원목공방의 40년 전통 국내산 원목, 정통 옻칠 제작, 주장자 지팡이 세트가 확인됩니다. 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "2024 불교문화엑스포 디렉토리 보림원목공방",
        sourceUrl: "https://bexpodg.kr/files/2024_directory.pdf",
        confidence: "medium",
      },
    ],
    H2: [
      {
        product: "오래된미래 보이차 / 차우림 보이차 교육",
        review:
          "YES24 도서 페이지와 저자 소개에서 이원종의 '오래된미래 보이차'와 양주 차우림 운영 사실이 확인됩니다. 제품 구매평이 아니라 보이차 교육·저술 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "YES24 오래된미래 보이차",
        sourceUrl: "https://www.yes24.com/product/goods/125577052",
        confidence: "medium",
      },
    ],
    H4: [
      {
        product: "예평 백차: 공미 / 수미 / 백호은침 / 백모단",
        review:
          "예평 공식 사이트에서 백차 중심 제품군과 2026년 선구매, 2026년 햇차 구매 안내 공지가 확인됩니다. 소비자 리뷰가 아니라 공식 상품·일정 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "예평 공식 사이트/공지",
        sourceUrl: "https://www.yepyeong.com/",
        confidence: "high",
      },
    ],
    H8: [
      {
        product: "죽평 보이생차 / 보이숙차 / 운남홍차",
        review:
          "다이닝코드 공개 장소 정보에서 죽평찻집/죽평의 대구 남구 용두길 위치와 보이생차, 보이숙차, 운남홍차, 중국차, 은다관/은주전자, 차강의·판매 단서가 확인됩니다. 블로그 조각 기반이라 낮은 신뢰도로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "다이닝코드 죽평 장소 정보",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=KnknWICUYfAD",
        confidence: "low",
      },
    ],
    H9: [
      {
        product: "밀밀홍 녹차·발효차·청차·보이차·자사호",
        review:
          "BEXPO 공개 전시관에서 밀밀홍의 녹차, 발효차, 청차, 보이차, 자사호 등 차와 차도구 일체가 확인됩니다. 공개 방문 기록에서는 중국홍차/스트레이트 홍차 전문점 성격과 과거 국제차문화대전 참가 이력이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "서울국제불교박람회 밀밀홍 출품 정보",
        sourceUrl: "https://www.bexpo.kr/home/main?cid=381",
        confidence: "medium",
      },
    ],
    F18: [
      {
        product: "천목금잎다식접시 / 5방색잔세트",
        review:
          "김해분청도자전시판매관 상품 페이지에서 다경요 천목금잎다식접시와 5방색잔세트가 확인됩니다. 부산일보 기사에서는 김준백 작가가 말차 찻사발 작업을 주로 한다는 전시 맥락이 확인됩니다. 소비자 리뷰 본문은 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "김해분청도자전시판매관 다경요 상품",
        sourceUrl: "https://www.gimhae.go.kr/07462/07276.web?amode=view&prodNum=PROD202202080016",
        confidence: "medium",
      },
    ],
    E16: [
      {
        product: "다솜공방 도자기",
        review:
          "공개 지역/기업 정보에서 다솜공방이 도자기 소매·공방으로 확인됩니다. 차도구 제품별 소비자 리뷰는 확인되지 않아 기본 업종 근거로만 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "LocalView 다솜공방 도자기",
        sourceUrl: "https://www.localview.co.kr/store/detail.asp?seq=200154897",
        confidence: "low",
      },
    ],
    A11: [
      {
        product: "무유찻잔 / 무유 숙우",
        review:
          "아이디어스 공개 페이지에서 무유장작가마 살래요의 무유찻잔과 무유 숙우 상품이 확인되고 작가 페이지에서 4.9점, 11건 리뷰 수가 확인됩니다. 리뷰 본문은 공개 확인 범위가 제한되어 평점/건수와 상품 근거로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "아이디어스 무유장작가마 살래요 작가/상품",
        sourceUrl: "https://www.idus.com/v2/artist/00ff7712-e944-419c-b100-fdebac63f613/review",
        confidence: "medium",
      },
    ],
    E9: [
      {
        product: "백산도예 문광수 천목 오목 다완",
        review:
          "중고나라 공개 판매 글에서 백산도예 문광수 천목 오목 다완과 오동나무 상자, 카탈로그, 크기와 상태 설명이 확인됩니다. 소비자 감상 리뷰가 아니라 유통/소장품 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "중고나라 백산도예 문광수 천목 오목 다완",
        sourceUrl: "https://web.joongna.com/product/81032347",
        confidence: "low",
      },
    ],
    E27: [
      {
        product: "백암요 은달 찻잔",
        review:
          "2024 국제차문화대전 공개 후기에서 백암요 은달 찻잔에 홍차를 담았을 때 노을 지는 풍광을 보는 듯한 재미가 있었다는 시음/사용 감상이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "2024 국제차문화대전 백암요 은달 찻잔 후기",
        sourceUrl: "https://honeybee-home.tistory.com/entry/2024-%EA%B5%AD%EC%A0%9C%EC%B0%A8%EB%AC%B8%ED%99%94%EB%8C%80%EC%A0%84-%EC%BD%94%EC%97%91%EC%8A%A4-%EC%B0%A8%EB%B0%95%EB%9E%8C%ED%9A%8C-%ED%9B%84%EA%B8%B0",
        confidence: "medium",
      },
      {
        product: "백암요 매화문 은달 찻잔",
        review:
          "중고나라 공개 글에서 백암요 매화문 은달 찻잔에 대해 좋아하는 조합이며 새 상품 구매 후 1~2회 사용·깨끗하게 보관했다는 판매자 설명이 확인됩니다. 중고 판매 글이므로 낮은 신뢰도로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "중고나라 백암요 매화문 은달 찻잔",
        sourceUrl: "https://web.joongna.com/product/142962668",
        confidence: "low",
      },
    ],
    A14: [
      {
        product: "백자일상 청채 백자 다관과 호승",
        review:
          "티웃갤러리 상품 페이지에서 백자일상 청채 백자 다관과 호승 상품과 Reviews 0 표시가 확인됩니다. 리뷰가 없다는 상태까지 함께 저장해 과장된 평가가 들어가지 않게 처리했습니다.",
        sentiment: "neutral",
        sourceTitle: "티웃갤러리 백자일상 청채 백자 다관과 호승",
        sourceUrl: "https://gallery.t-eut.com/product/%EB%B0%B1%EC%9E%90%EC%9D%BC%EC%83%81-%EC%B2%AD%EC%B1%84-%EB%B0%B1%EC%9E%90-%EB%8B%A4%EA%B4%80%EA%B3%BC-%ED%98%B8%EC%8A%B9-%ED%95%9C%EA%B5%AD%EC%B0%A8%EB%8F%84%EA%B5%AC/",
        confidence: "medium",
      },
    ],
    C26: [
      {
        product: "경북요 김윤식 찻사발",
        review:
          "뉴시스 기사에서 김윤식(경북요)이 문경지역 도예가 입상자 명단에 포함되고 찻사발 공모전 맥락이 확인됩니다. 제품별 소비자 리뷰는 확인되지 않아 작가/공모전 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "뉴시스 문경 찻사발 공모전 경북요 김윤식",
        sourceUrl: "https://www.newsis.com/view/NISX20201116_0001235734",
        confidence: "medium",
      },
    ],
    C29: [
      {
        product: "봉정요 김학수 청자연 찻사발",
        review:
          "광부아트갤러리 상품 페이지에서 봉정요 김학수 청자연 찻사발과 작가 이력, 중요무형문화재 사기장 전수문화 장학생 및 전국찻사발공모대전 특선 이력이 확인됩니다. 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "광부아트갤러리 봉정요 김학수 청자연 찻사발",
        sourceUrl: "https://www.mgmurc1975-mag.co.kr/shop/shop.php?catcode=11110000&page=1&prdcode=2211150011&ptype=view",
        confidence: "medium",
      },
    ],
    D17: [
      {
        product: "산도방 무유다관 / 개완",
        review:
          "산도방 공식몰과 아이디어스 상품 페이지에서 개완, 무유다관, 숙우, 차호 등 차도구가 확인됩니다. 아이디어스 상품에는 산도방 작가 5.0점 표시와 일부 상품 후기 0건 표시가 확인되어 상품 근거와 리뷰 상태를 함께 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "아이디어스 산도방 무유다관",
        sourceUrl: "https://www.idus.com/v2/product/8c9478d3-6dea-4f6a-8330-1d4e881dd672",
        confidence: "medium",
      },
    ],
    D18: [
      {
        product: "설도예 다기·식기류·오브제",
        review:
          "서울국제불교박람회와 작가 프로필, 신세계 센텀시티 팝업 기사에서 설도예 최기영의 다기, 식기류, 오브제 작업이 확인됩니다. 제품별 소비자 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "서울국제불교박람회 설도예 listing",
        sourceUrl: "https://www.bexpo.kr/library/view?bo_table=05_01&idx=217&mode=view&syear=2016",
        confidence: "medium",
      },
    ],
    A4: [
      {
        product: "가루녹차 100g",
        review:
          "SSG.COM에서 평점 4.7점과 412건 구매평이 확인됩니다. 공개 요약 기준 녹차 풍미, 적당한 쌉싸름함, 활용도, 가격, 포장, 넉넉한 유통기한이 긍정적으로 반복되며, 일부 사용자는 라떼용으로 기대한 질감과 달라 아쉬웠다고 남겼습니다.",
        sentiment: "mixed",
        sourceTitle: "SSG.COM 한국제다 가루녹차 100g 구매평",
        sourceUrl: "https://www.ssg.com/item/itemView.ssg?itemId=1000017130206",
        confidence: "high",
      },
      {
        product: "감농가루차",
        review:
          "디시인사이드 말차 비교 글에서 한국제다 감농이 국산 말차 비교 기준으로 언급되며, 다른 국산 말차보다 낫다는 취지의 평가가 확인됩니다. 별도 글에서는 분청다완 개시용으로 감농가루차를 사용한 실사용 기록이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "디시인사이드 차·음료 갤러리 감농가루차 언급",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=405168",
        confidence: "medium",
      },
      {
        product: "우전감로",
        review:
          "한국제다 공식몰 우전감로 페이지와 쿠팡 상품 페이지에서 제품 판매는 확인됩니다. 공식몰은 구매후기 본문이 없고, 쿠팡은 상품평 7건 표시는 확인되지만 본문 공개 확인이 제한되어 제품 확인 근거로만 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "한국제다 공식몰 우전감로",
        sourceUrl: "https://hktmall.co.kr/product/%EC%9A%B0%EC%A0%84%EA%B0%90%EB%A1%9C%E9%9B%A8%E5%89%8D%E7%94%98%E9%9C%B2/32/",
        confidence: "medium",
      },
    ],
    A5: [
      {
        product: "생태다원 차암숲 티 투어",
        review:
          "제주차농 공식 Instagram 게시물에서 예약제 티 투어가 확인됩니다. 코스는 자연유산센터 관람, 차밭 채엽, 제다와 시음으로 공지되어 있으며, 소비자 후기라기보다 공식 프로그램 안내입니다.",
        sentiment: "neutral",
        sourceTitle: "제주차농 Instagram 차암숲 티 투어 게시물",
        sourceUrl: "https://www.instagram.com/jeju.chanong/p/DXGIYtWiZxz/",
        confidence: "high",
      },
      {
        product: "새순녹차 / 진피홍차",
        review:
          "공개 Instagram 언급에서 제주차농 새순녹차 ONE bud TWO leaves와 진피홍차 JEJU MANDARIN PEEL with BLACK TEA 제품명이 확인됩니다. 소비자 구매평보다는 제품 노출/활동 단서로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "Instagram 공개 언급: 제주차농 새순녹차/진피홍차",
        sourceUrl: "https://www.instagram.com/p/DYKG3JFGIEc/",
        confidence: "medium",
      },
    ],
    C4: [
      {
        product: "청귤병차 / Korean Black & Chinese Milk Oolong Green Tangerine",
        review:
          "Liquid Proust 상품 페이지에서 초록 귤에 한국 홍차, 중국 밀크우롱 2종, 살구 조각을 넣은 상품과 리뷰 3건이 확인됩니다. 리뷰에서는 강한 향, 균형 잡힌 과일향, 여러 번 우러나는 잎, 선물용 반응, 오렌지 크림 계열 인상이 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "Liquid Proust Lady Hadong 청귤/홍차/밀크우롱 상품",
        sourceUrl: "https://www.liquidproust.com/listing/1849259683/2024-korean-black-chinese-milk-oolong",
        confidence: "high",
      },
      {
        product: "백차/녹차/청차/황차/홍차",
        review:
          "하동아낙 공식 Instagram 프로필에서 손으로 덖은 백차, 녹차, 청차, 황차, 홍차를 만드는 100% 수제 하동차 브랜드로 확인됩니다. 하이라이트에는 청귤병차, 하동아생차, 구기자차, 오미자차, 아낙단차, 홍차단차, 유자병차, 우전홍차, 김해장군차가 노출됩니다.",
        sentiment: "neutral",
        sourceTitle: "하동아낙 Lady Hadong 공식 Instagram",
        sourceUrl: "https://www.instagram.com/lady_hadong/",
        confidence: "high",
      },
    ],
    C9: [
      {
        product: "마이클 잭살 4g 티백",
        review:
          "Brown Things 상품 페이지에서 하동 잭살차, 유자껍질, 모과, 돌배를 섞은 티백으로 확인됩니다. 테이스팅 노트는 달지 않은, 상쾌한, 개운한, 묵직한으로 소개되며 상품사용후기 게시물은 없습니다.",
        sentiment: "neutral",
        sourceTitle: "Brown Things 웃차 마이클 잭살 상품 페이지",
        sourceUrl:
          "https://brownthings.kr/product/%EC%9B%83%EC%B0%A8-%EB%A7%88%EC%9D%B4%ED%81%B4-%EC%9E%AD%EC%82%B4-4g-%ED%8B%B0%EB%B0%B1-%EC%9C%A0%EC%9E%90-%EB%8F%8C%EB%B0%B0-%EB%AA%A8%EA%B3%BC-%EC%9E%AD%EC%82%B4%EC%9D%B4-%EB%8B%B4%EA%B8%B4-%EC%B0%A8-%EC%86%8C%EB%B9%84%EA%B8%B0%ED%95%9C-2027%EB%85%84-5%EC%9B%94/178/",
        confidence: "high",
      },
      {
        product: "마이클 잭살 / 집드링크 / 뚱딴지차 디의사승 / 비트앤런 / 노블맨 / 유자잭살",
        review:
          "Brown Things 웹진의 신세계 본점 한국 차의 신세계 팝업 기록에서 웃차 제품군과 시음 제공, 주원료 유자 실물 설명이 확인됩니다. 웹진은 웃차를 찻잎과 우리 농산물의 유쾌한 맛남으로 소개합니다.",
        sentiment: "positive",
        sourceTitle: "Brown Things 웹진: 웃차 마이클잭살/한국 차의 신세계",
        sourceUrl: "https://book.brownthings.kr/890",
        confidence: "medium",
      },
      {
        product: "웃차 티백 제품군",
        review:
          "웃차 공식 Instagram 공지에서 오프라인 팝업 반응으로 주문량이 늘어 재고, 티백, 포장 검수 후 일괄 발송한다고 안내한 내용이 확인됩니다. 제품 품질 관리와 팝업 이후 수요 증가 단서로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "웃차 Instagram 배송/품질 공지",
        sourceUrl: "https://www.instagram.com/woot.cha/p/DYZsIr7yYeA/",
        confidence: "medium",
      },
    ],
    D9: [
      {
        product: "우전(Wujeon) 80g",
        review:
          "조태연가 공식몰 우전 80g 상품 페이지에서 구매평 5건이 모두 5점으로 확인됩니다. 해마다 찾는다, 다른 집 차보다 맛이 다르다, 색·향·맛 어느 것 하나 나무랄 데 없다는 평가가 보입니다.",
        sentiment: "positive",
        sourceTitle: "조태연가 죽로차 공식몰 우전 80g 구매평",
        sourceUrl:
          "http://jukro.co.kr/shop/shopdetail.html?branduid=324113&xcode=001&mcode=001&scode=001&type=X&sort=order&current_category=001001&search=&GfDT=ZmZ3UQ%3D%3D",
        confidence: "high",
      },
      {
        product: "세작 40g",
        review:
          "에누리 세작 40g 리뷰 2건이 확인됩니다. 한 리뷰는 향이 은은하고 부드럽고 매끄러우며 달큰하다고 평가하고 우전도 마셔보고 싶다고 적었고, 다른 리뷰는 최고예요로 짧게 평가했습니다.",
        sentiment: "positive",
        sourceTitle: "에누리 조태연가 죽로차 세작 40g 리뷰",
        sourceUrl: "https://www.enuri.com/detail.jsp?modelno=10776952",
        confidence: "medium",
      },
      {
        product: "순수 홍차로 만든 말차",
        review:
          "조태연가 Instagram 게시물에서 순수 홍차로 만든 말차가 초콜릿 같은 아로마와 단맛으로 소개되고, 댓글에서 구매 가능 시점 문의가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "조태연가 죽로차 Instagram 홍차 말차 게시물",
        sourceUrl: "https://www.instagram.com/chotaeyeon_ga/p/DTffOU2EQau/",
        confidence: "medium",
      },
    ],
    G2: [
      {
        product: "수제 밀크티 / 얼그레이두쫀쿠",
        review:
          "뽈레 리뷰에서 제대로 된 찻잎을 우려내는 티룸, 직접 블렌딩, 밀크티 인기, 티팟 선택, 미니 티클래스 경험이 반복 확인됩니다. 다이닝코드는 4.5점/6건, 맛 5.0, 응대 4.7, 가격 3.3으로 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "뽈레/다이닝코드 티하우스 나니 리뷰",
        sourceUrl: "https://polle.com/place/3RDDoL/%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4%20%EB%82%98%EB%8B%88",
        confidence: "medium",
      },
      {
        product: "2026 국제차문화대전 G2 부스",
        review:
          "공식 Instagram에서 2026 국제차문화대전 G2 부스, 정산당 G3와 함께 배치, 밀크티와 중국차를 한번에 안내한다는 내용이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "티하우스 나니 Instagram 2026 국제차문화대전 게시물",
        sourceUrl: "https://www.instagram.com/teahousenani/p/DYyalYZJiYh/",
        confidence: "high",
      },
    ],
    G17: [
      {
        product: "복숭아우롱차",
        review:
          "공개 블로그 후기에서 2025년 국제차문화대전 구매 차로 언급되며, 복숭아 향이 뚜렷하고 맛있어서 구입했다는 내용이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "宜兴永盛陶艺茗壶堂 복숭아우롱차 + 표일배 후기",
        sourceUrl: "https://blog.naver.com/antjm/223953780508",
        confidence: "low",
      },
      {
        product: "표일배",
        review:
          "같은 후기에서 차호가 없어도 가볍게 우리는 용도로 표일배를 함께 장만했다는 사용 맥락이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "宜兴永盛陶艺茗壶堂 복숭아우롱차 + 표일배 후기",
        sourceUrl: "https://blog.naver.com/antjm/223953780508",
        confidence: "low",
      },
    ],
    G5: [
      {
        product: "플러피 클라우드 - Fluffy Cloud",
        review:
          "글림피스 공식몰 상품 페이지에서 구매평 32건이 확인됩니다. 공개 구매평은 루이보스 기반의 깔끔함, 히비스커스의 상큼함, 향이 진하고 선물용 패키지가 좋다는 반응이 반복됩니다.",
        sentiment: "positive",
        sourceTitle: "글림피스 공식몰 플러피 클라우드 구매평",
        sourceUrl: "https://glimpiece.com/ALL/?idx=28",
        confidence: "high",
      },
      {
        product: "브리지 릴트 - Breezy Lilt",
        review:
          "공식몰 상품 페이지에서 구매평 33건이 확인됩니다. 민트 베이스의 시원함, 과일향과 산미, 아이스티 적합성, 고급 포장과 선물용 만족도가 반복 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "글림피스 공식몰 브리지 릴트 구매평",
        sourceUrl: "https://glimpiece.com/ALL/?idx=29",
        confidence: "high",
      },
      {
        product: "글림스 피아바 - Glimpse Fiaba",
        review:
          "공식몰 상품 페이지에서 구매평 27건이 확인됩니다. 달콤하고 은은한 상큼함, 따뜻하게 마실 때 풍부한 향, 디저트와의 궁합, 선물용 패키지 만족도가 반복됩니다.",
        sentiment: "positive",
        sourceTitle: "글림피스 공식몰 글림스 피아바 구매평",
        sourceUrl: "https://glimpiece.com/ALL/?idx=30",
        confidence: "high",
      },
      {
        product: "엑스프레소 엠버 - Xspresso Ember",
        review:
          "공식몰 상품 페이지에서 구매평 26건이 확인됩니다. 커피향, 쌉싸름하고 스모키한 첫맛, 커피와 티를 함께 즐기는 듯한 특이성, 선물용 패키지 만족도가 반복됩니다.",
        sentiment: "positive",
        sourceTitle: "글림피스 공식몰 엑스프레소 엠버 구매평",
        sourceUrl: "https://glimpiece.com/ALL/?idx=31",
        confidence: "high",
      },
    ],
    G7: [
      {
        product: "연근발효차",
        review:
          "다향연 공식몰 자체 리뷰 게시판에서 연근발효차 재구매 후기가 확인됩니다. 차박람회 첫 구매 이후 공식몰 재구매가 이어졌고, 일부 회차는 더 진하게 느껴졌다는 제품별 평가가 남아 있습니다.",
        sentiment: "positive",
        sourceTitle: "다향연 주민들의 찐 리뷰: 맛있는 연근 발효차",
        sourceUrl:
          "https://m.dahyangyeon.com/article/%EB%8B%A4%ED%96%A5%EC%97%B0-%EC%A3%BC%EB%AF%BC%EB%93%A4%EC%9D%98-%EC%B0%90-%EB%A6%AC%EB%B7%B0/4/28/",
        confidence: "medium",
      },
      {
        product: "구증구포 구기자차",
        review:
          "다향연 공식몰 자체 리뷰 게시판에서 구증구포 구기자차 구매 후기가 확인됩니다. 백화점 시음/판매 행사에서 접한 뒤 선물용으로 반복 주문했다는 맥락과 배송 전 신뢰 경험이 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "다향연 주민들의 찐 리뷰: 감동입니다",
        sourceUrl:
          "https://m.dahyangyeon.com/article/%EB%8B%A4%ED%96%A5%EC%97%B0-%EC%A3%BC%EB%AF%BC%EB%93%A4%EC%9D%98-%EC%B0%90-%EB%A6%AC%EB%B7%B0/4/22/",
        confidence: "medium",
      },
      {
        product: "연근발효차/더덕차",
        review:
          "다향연 공식몰 자체 리뷰에서 부산 롯데백화점 시음행사 후 재구매한 사례가 확인됩니다. 연근발효차 선물 구매와 함께 동봉된 더덕차가 편안했다는 평가가 남아 있습니다.",
        sentiment: "positive",
        sourceTitle: "다향연 주민들의 찐 리뷰: 재구매 후기",
        sourceUrl:
          "https://m.dahyangyeon.com/article/%EB%8B%A4%ED%96%A5%EC%97%B0-%EC%A3%BC%EB%AF%BC%EB%93%A4%EC%9D%98-%EC%B0%90-%EB%A6%AC%EB%B7%B0/4/21/",
        confidence: "medium",
      },
    ],
    H18: [
      {
        product: "밀크티",
        review:
          "다이닝코드 실크로드티 장소 정보에서 공항동 찻집, 주문 메뉴 '밀크티'와 방문 리뷰 1건이 확인됩니다. 리뷰는 티 위주 매장과 고급스러운 분위기를 언급하지만, 응대 평가는 낮게 표시되어 혼합 평가로 저장했습니다.",
        sentiment: "mixed",
        sourceTitle: "다이닝코드: 실크로드티",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=LQpHhrHMwEI3",
        confidence: "medium",
      },
      {
        product: "(주)실크로드티 법인/무역업",
        review:
          "산업통상자원부 외국인투자기업정보에서 '(주)실크로드티', 영문명 SILKROADTEC.INC, 서울 강서구 방화대로8길 56, 상품 종합 도매업/무역업, 대표투자국가 중국이 확인됩니다. 제품 리뷰가 아니라 업체명 교정과 법인 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "산업통상자원부 외국인투자기업정보: (주)실크로드티",
        sourceUrl: "https://insc.kisc.org/motie/cor2/cor_view.jsp?corp_id=K0312865&k_name=%EC%A4%91%EA%B5%AD",
        confidence: "high",
      },
    ],
    H20: [
      {
        product: "인센스스틱/인센스홀더",
        review:
          "인센스월드 공식 사이트에서 인센스스틱, 인센스홀더, 백단향, 청솔 백단향, 매화향, 연꽃향, 한국/일본 인센스스틱 10 컬렉션, OEM/ODM과 R&D 운영이 확인됩니다. 차 제품 리뷰가 아니라 취급 제품 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "인센스월드 공식 사이트",
        sourceUrl: "https://www.incenseworld.kr/",
        confidence: "high",
      },
      {
        product: "부뚜막 인센스 세트",
        review:
          "인센스월드 공식 제품 페이지에서 부뚜막 인센스 세트가 한국 전통 부뚜막을 미니어처로 재현한 인센스홀더이며, 대한민국 관광기념품 프리미엄상 수상 제품으로 소개됩니다.",
        sentiment: "positive",
        sourceTitle: "인센스월드 공식 사이트: 부뚜막 인센스 세트",
        sourceUrl:
          "https://incenseworld.kr/bbs/incense_holder/37?sca=%E7%81%B6%E5%8F%B0%E9%A6%99%E8%96%B0%E5%A5%97%E8%A3%85",
        confidence: "high",
      },
    ],
    E23: [
      {
        product: "공예품",
        review:
          "당근 공개 후기에서 긍정공방 공예품에 대해 '잘 만든다', '만족스럽다'는 취지의 짧은 평가가 확인됩니다. 리뷰 수가 적어 참고 수준입니다.",
        sentiment: "positive",
        sourceTitle: "당근 동네업체 긍정공방 후기",
        sourceUrl: "https://www.daangn.com/kr/local-profile/%EA%B8%8D%EC%A0%95%EA%B3%B5%EB%B0%A9-22990/",
        confidence: "low",
      },
    ],
    E28: [
      {
        product: "흐름유 다관",
        review:
          "공개 블로그 글에서 도동요 흐름유 다관을 다룬 후기가 확인됩니다. 구체 평가는 단일 글 기준이라 낮은 신뢰도로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "도동요 흐름유 다관 후기",
        sourceUrl: "http://blog.naver.com/choi_jisoo/222057253576",
        confidence: "low",
      },
      {
        product: "백자 잔",
        review:
          "다완사랑 카페 글에서 도동요 김용석 작가의 백자 잔 거래/후기 맥락이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "도동요 김용석님의 백자 잔들",
        sourceUrl: "http://cafe.naver.com/dawan/15023",
        confidence: "low",
      },
    ],
    B25: [
      {
        product: "백자 찻잔세트",
        review:
          "일구다 공개 상품 페이지에서 도정요 백자 찻잔세트의 구성과 50ml 용량이 확인됩니다. 소비자 평가보다는 제품 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "도정요 백자 찻잔세트",
        sourceUrl: "https://ilguda.com/all-ilguda/?idx=124",
        confidence: "medium",
      },
    ],
    E7: [
      {
        product: "스마트 머그워머/원형 머그워머",
        review:
          "국제차문화대전 방문 후기에서 따티의 스마트 머그워머와 원형 머그워머가 현장 출시·전시품으로 언급되며, 티팟부터 머그잔까지 온도 유지가 가능하다는 취지의 설명이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "국제차문화대전 따티 머그워머 후기",
        sourceUrl: "https://blog.naver.com/wowo7956/223463932908",
        confidence: "low",
      },
    ],
    F4: [
      {
        product: "우롱차 밀크티 베이스",
        review:
          "국제차문화대전 방문 후기에서 묘차 부스의 우롱차 밀크티 베이스와 우롱차 시음이 언급됩니다. 세부 향미 평가는 저장된 공개 자료 기준 부족합니다.",
        sentiment: "neutral",
        sourceTitle: "국제차문화대전 방문 후기",
        sourceUrl: "https://blog.naver.com/wowo7956/223463932908",
        confidence: "low",
      },
    ],
    D20: [
      {
        product: "Tea Strainer 티 스트레이너",
        review:
          "델픽 공개 리뷰에서 민토 개완과 세트처럼 잘 맞고, 먹색과 빛에 비치는 반점 조합이 예쁘다는 평가가 확인됩니다. 일부 사용자는 첫 세척 뒤 얼룩처럼 보이는 점을 문의했습니다.",
        sentiment: "mixed",
        sourceTitle: "델픽 민토 최민록 Tea Strainer 리뷰",
        sourceUrl: "https://delphic.kr/accessories/?idx=56",
        confidence: "medium",
      },
    ],
    A44: [
      {
        product: "무이성 육계",
        review:
          "공개 시음 기록에서 승설재·무이성 육계를 마신 경험이 확인됩니다. 작성자는 향은 더 좋았지만 체감 차이는 크지 않았다는 취지로 적어 혼합 평가로 저장했습니다.",
        sentiment: "mixed",
        sourceTitle: "승설재 무이성 육계 시음 언급",
        sourceUrl: "https://blog.naver.com/sul_cheon/224226067945",
        confidence: "low",
      },
    ],
    E17: [
      {
        product: "모란박지문 다관",
        review:
          "다완사랑 카페 후기에서 예인요 이미진 작가의 모란박지문 다관을 추가로 구입했으며, 조각과 갈색톤이 매력적이고 우롱차를 우리니 차맛이 더 달콤하게 느껴졌다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "예인요 모란박지문 다관 후기",
        sourceUrl: "https://cafe.naver.com/dawan/96206",
        confidence: "medium",
      },
    ],
    D30: [
      {
        product: "파란찻사발",
        review:
          "공개 블로그 글에서 청림도요의 파란찻사발과 빨간사과 작품이 마음에 들어 기록해 두었다는 관람 후기가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "청림도요 파란찻사발 관람 후기",
        sourceUrl: "https://blog.naver.com/kptlord/224275262635",
        confidence: "low",
      },
    ],
    C15: [
      {
        product: "청학도방 다관",
        review:
          "공개 블로그 후기에서 청학도방 다관이 찻자리의 품격을 높인다는 취지로 언급됩니다. 세부 사용감은 단일 후기 기준입니다.",
        sentiment: "positive",
        sourceTitle: "청학도방 다관 후기",
        sourceUrl: "https://blog.naver.com/jamie818/224040134717",
        confidence: "low",
      },
    ],
    G18: [
      {
        product: "밀도우롱/계화우롱/모리화차",
        review:
          "국제차문화대전 방문 후기에서 북경묘향연무역의 밀도우롱, 계화우롱, 모리화차(자스민녹차), 홍차가 확인되며, 1회분 소분 패키지를 가볍게 즐기기 좋다고 언급했습니다.",
        sentiment: "positive",
        sourceTitle: "北京妙香缘贸易有限公司 소분 차 구매 후기",
        sourceUrl: "https://blog.naver.com/viagem_/223962887807",
        confidence: "low",
      },
    ],
    G21: [
      {
        product: "대우령 고산우롱차/삼림계/동방미인/일월담홍옥",
        review:
          "공개 후기에서 윤차인이 대만 3대째 차농 브랜드로 소개되고, 여러 대만차를 전부 시음·구매할 수 있었다고 기록되어 있습니다.",
        sentiment: "positive",
        sourceTitle: "윤차인 YIN TEA 대만차 시음 후기",
        sourceUrl: "https://blog.naver.com/wowo7956/224173429836",
        confidence: "medium",
      },
      {
        product: "황금우롱",
        review:
          "별도 공개 글에서 윤차인 황금우롱이 맛과 가격 모두 좋다는 취지로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "윤차인 황금우롱 후기",
        sourceUrl: "https://blog.naver.com/yyyaaannn/223899121315",
        confidence: "low",
      },
    ],
    H21: [
      {
        product: "계수나무 내열유리컵 200, 코스터 2인 세트",
        review:
          "차모아비즈 공식 상품 페이지에서 컵 2P와 코스터 2P 구성의 계수나무 내열유리컵 세트가 확인됩니다. 페이지에 리뷰 작성 영역은 있으나 공개 후기 본문은 확인되지 않아 제품 확인 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "차모아비즈 계수나무 내열유리컵 세트",
        sourceUrl: "https://chamore.biz/product/%EA%B3%84%EC%88%98%EB%82%98%EB%AC%B4-%EB%82%B4%EC%97%B4%EC%9C%A0%EB%A6%AC%EC%BB%B5-200-%EC%BD%94%EC%8A%A4%ED%84%B0-2%EC%9D%B8-%EC%84%B8%ED%8A%B8/1254/category/1/display/4/?icid=MAIN.product_listmain_3",
        confidence: "medium",
      },
    ],
    F3: [
      {
        product: "S-lock 진공밀폐용기",
        review:
          "에스락 공식 Instagram 프로필에서 3초 회전 진공, 원두·사료 산패 방지 용도가 확인됩니다. 2025 서울카페쇼·강릉커피축제·서울국제식품산업전 참가 게시물이 보이며, 소비자 반복 구매평보다는 공식 제품/행사 활동 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "에스락 S-lock 공식 Instagram",
        sourceUrl: "https://www.instagram.com/smart.slock/",
        confidence: "high",
      },
    ],
    F9: [
      {
        product: "하늘빛 숙우",
        review:
          "우연못 상품 페이지에서 [날빛] 하늘빛 숙우와 판매가 50,000원이 확인됩니다. 공개 후기 수는 0건으로 표시되어 제품 확인 근거로만 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "우연못 날빛 하늘빛 숙우 상품",
        sourceUrl: "https://wooyeonmot.co.kr/product/16708cc1-d43c-4d9a-945d-d5ea2c6aee93",
        confidence: "high",
      },
      {
        product: "둥근 차합 / 말차합 / 작은 찻잔",
        review:
          "Makefolio 날빛 브랜드 페이지에서 둥근 차합, 말차합, 작은 찻잔 등 수공예 도자 차도구 품목이 확인됩니다. 제품별 소비자 리뷰는 별도 확인 전까지 보류합니다.",
        sentiment: "neutral",
        sourceTitle: "Makefolio 날빛 NALBIT 브랜드/상품",
        sourceUrl: "https://www.makefolio.co.kr/nalbit",
        confidence: "high",
      },
    ],
    E29: [
      {
        product: "송하요 차도구/다기",
        review:
          "송하요 공식 프로필에서 우상욱 작가의 공부차 청담 티하우스 초대전, 우주를 담다·닮다 전시, 다기전, 국제 TEA EXPO 및 부산국제 차·공예 박람회 참가 이력이 확인됩니다. 제품별 소비자 반복 리뷰보다는 작가·전시·차도구 활동 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "송하요 공식 프로필",
        sourceUrl: "http://songhayo.co.kr/page_pcVO38",
        confidence: "high",
      },
      {
        product: "송하요 도자 작품",
        review:
          "공식 Instagram에서 찻잔, 다관, 도자 테이블웨어 이미지가 반복 노출되고 갤러리 다운재 전시 게시물이 확인됩니다. 공개 댓글/리뷰 본문은 수집하지 않아 제품 노출 근거로만 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "송하요 공식 Instagram",
        sourceUrl: "https://www.instagram.com/songhayo/",
        confidence: "high",
      },
    ],
    E14: [
      {
        product: "Kim Jeongmok Korean Pottery Matcha Chawan",
        review:
          "eBay 공개 리셀 페이지에서 Kim Jeongmok 명의 한국 도자 말차 다완/차도구 상품이 확인됩니다. 판매자 피드백은 판매자 서비스에 대한 평가이고 정목요 제품 자체의 반복 리뷰는 아니므로, 제품 존재 확인 근거로만 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "eBay Kim Jeongmok Korean Pottery Matcha Chawan",
        sourceUrl: "https://www.ebay.ca/itm/376641972586",
        confidence: "low",
      },
    ],
    B26: [
      {
        product: "찻잔/개완",
        review:
          "공개 후기에서 대광도요 기물은 가볍고 차를 마실 때 입에 닿는 느낌이 좋으며, 단순하지만 고급스럽다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "대광도요 기물 사용감 후기",
        sourceUrl: "https://blog.naver.com/muhaeim_1/224174469177",
        confidence: "low",
      },
    ],
    F16: [
      {
        product: "하트/풍선 개완 세트",
        review:
          "네이버 쇼핑 공개 결과에서 라세라미스타의 하트 개완 세트와 풍선 개완 세트가 확인됩니다. 소비자 리뷰보다는 제품 존재 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "라세라미스타 개완 세트 쇼핑 결과",
        sourceUrl: "https://search.shopping.naver.com/search/all?query=%EB%9D%BC%EC%84%B8%EB%9D%BC%EB%AF%B8%EC%8A%A4%ED%83%80%20%EA%B0%9C%EC%99%84",
        confidence: "low",
      },
    ],
    B14: [
      {
        product: "스윗베리즈 과일블렌딩티",
        review:
          "공개 블로그 리뷰에서 병입 형태 패키지의 베리 계열 무카페인 아이스티로 소개됩니다. 패키지와 간편 음용성은 눈에 띄지만, 작성자는 스마트스토어 등 구매처를 찾기 어렵다는 점도 함께 언급했습니다.",
        sentiment: "mixed",
        sourceTitle: "차그리다 스윗베리즈 과일블렌딩티 리뷰",
        sourceUrl: "https://blog.naver.com/healto/224252848410",
        confidence: "low",
      },
    ],
    A45: [
      {
        product: "보이차/철관음/홍차/국화차",
        review:
          "박람회 방문 후기에서 투다헌 부스의 보이차, 철관음, 홍차, 국화차 전시와 시음/상담 경험이 확인됩니다. 단일 후기라 맛 평가보다는 취급품목 확인 근거로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "투다헌 보이차·철관음·홍차·차도구 박람회 후기",
        sourceUrl: "https://blog.naver.com/cantonet/224279989138",
        confidence: "low",
      },
      {
        product: "차도구/다기",
        review:
          "여러 공개 박람회 후기에서 투다헌이 다양한 차도구를 판매했고, 현장에서 직접 보고 구매하기 좋다는 취지의 언급이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "투다헌 차도구 박람회 후기",
        sourceUrl: "https://blog.naver.com/thathom/224005243131",
        confidence: "low",
      },
    ],
    H6: [
      {
        product: "백모단/2008 백차",
        review:
          "공개 블로그와 카페 글에서 복향명차 백모단과 2008년 백차를 끓여 마신 경험이 확인됩니다. 저장된 리뷰 요약에는 은은한 향과 백호가 보인다는 표현이 반영되어 있습니다.",
        sentiment: "positive",
        sourceTitle: "복향명차 백모단 리뷰",
        sourceUrl: "https://blog.naver.com/kidkiddy/223932201925",
        confidence: "medium",
      },
      {
        product: "난화향 감로 25",
        review:
          "오렌지페코 카페 글에서 복향명차의 난화향 감로 25 시음 기록이 확인됩니다. 글 요약 기준 녹차 계열 차품으로 다뤄졌습니다.",
        sentiment: "positive",
        sourceTitle: "복향명차 난화향 감로 25",
        sourceUrl: "https://cafe.naver.com/artcollection/547163",
        confidence: "medium",
      },
      {
        product: "1993년 보이생산차",
        review:
          "오렌지페코 카페 글에서 복향명차 1993년 보이생산차 시음 기록이 확인되어 보이차 제품군 근거로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "복향명차 1993년 보이생산차",
        sourceUrl: "https://cafe.naver.com/artcollection/548326",
        confidence: "medium",
      },
      {
        product: "차문화대전 보이숙차",
        review:
          "차문화대전 방문 후기에서 복향명차 부스의 보이숙차 시음을 요청했고, 20년도 숙차가 1편 3만원대로 소개되며 숙미가 적당히 진하다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차문화대전 복향명차 보이숙차 시음 후기",
        sourceUrl: "https://blog.naver.com/jjm0ju/223890533670",
        confidence: "low",
      },
    ],
    A32: [
      {
        product: "우기원 개완",
        review:
          "공개 블로그 후기에서 현대백화점 무역센터 팝업에서 우기원 개완을 구매한 경험이 확인됩니다. 세부 향미가 아니라 다구 구매/소장 맥락의 리뷰입니다.",
        sentiment: "positive",
        sourceTitle: "우기원 개완 구매 후기",
        sourceUrl: "https://blog.naver.com/sereniss3/224266100209",
        confidence: "low",
      },
    ],
    A25: [
      {
        product: "트임 생활자기/차도구",
        review:
          "우리문화신문 공개 글에서 김진욱도예원의 트임 생활자기가 도자기의 실용성과 조형성을 함께 다루는 작업으로 소개됩니다. 소비자 리뷰보다는 작품 소개 성격입니다.",
        sentiment: "positive",
        sourceTitle: "생활자기 트임(김진욱도예원) 소개",
        sourceUrl: "https://www.koya-culture.com/news/article.html?no=112001",
        confidence: "medium",
      },
    ],
    B28: [
      {
        product: "청자 다관/호승",
        review:
          "공개 기사에서 한세은 작가의 청자 다관과 호승이 공모전 수상작으로 확인됩니다. 소비자 사용 후기라기보다 수상/작품 확인 근거입니다.",
        sentiment: "positive",
        sourceTitle: "한세은 청자 다관과 호승 공모전 수상",
        sourceUrl: "https://www.wikitree.co.kr/articles/909982",
        confidence: "medium",
      },
      {
        product: "푸른 봉오리 잔",
        review:
          "공개 상품 페이지에서 한세은/진세라믹의 푸른 봉오리 잔이 확인됩니다. 리뷰보다는 제품 존재 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "한세은 푸른 봉오리 잔",
        sourceUrl: "https://www.wishbucket.io/items/2317865",
        confidence: "low",
      },
    ],
    D22: [
      {
        product: "다기류/식기류 도예 작품",
        review: "김해시공예품대전 대상 수상 이력이 확인되고, 작가 판매 페이지에서 다기류와 식기류 작업이 확인됩니다. 소비자 맛 리뷰가 아니라 공예품 수상/작품 확인 성격입니다.",
        sentiment: "positive",
        sourceTitle: "뉴스1 김해시공예품대전 기사",
        sourceUrl: "https://www.news1.kr/local/busan-gyeongnam/4304717",
        confidence: "medium",
      },
      {
        product: "녹주요 작가 작품",
        review: "아이디어스 작가 페이지에서 판매 작품군과 작가 작업이 확인됩니다. 제품 상세 평가는 판매 페이지 확인 수준입니다.",
        sentiment: "neutral",
        sourceTitle: "아이디어스 녹주요 작가 페이지",
        sourceUrl: "https://www.idus.com/v2/artist/dd275063-e365-4552-8cff-baa9b5ca7ee2/product",
        confidence: "medium",
      },
    ],
    G1: [
      {
        product: "대익 봄 차회 ‘상춘남객’",
        review: "차닉골 카페 후기에서 대익 차회 참여와 시음 경험이 확인됩니다. 특정 맛 표현보다는 차회 경험과 차품 관심이 중심입니다.",
        sentiment: "positive",
        sourceTitle: "차닉골 상춘남객 후기",
        sourceUrl: "https://cafe.naver.com/mbuna/148111",
        confidence: "medium",
      },
      {
        product: "대익 공작생태차/7542 계열",
        review: "대익코리아 14주년 관련 글과 7542 비교/시음 언급에서 공작생태차와 7542에 대한 관심, 보관 출처, 시음 맥락이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차울림 대익코리아 14주년 관련 글",
        sourceUrl: "https://cafe.naver.com/chaulim/57983",
        confidence: "medium",
      },
      {
        product: "생차/숙차와 자사호",
        review: "빛명상 카페 차 수업 후기에서 대익 공식 대리점 출처의 보이차, 생차/숙차 구분, 자사호 사용법이 음용 맥락으로 언급됩니다.",
        sentiment: "neutral",
        sourceTitle: "빛명상 공식 카페 차 수업 후기",
        sourceUrl: "https://cafe.naver.com/ucsviit/29313",
        confidence: "low",
      },
      {
        product: "7542 / 7572",
        review:
          "DCInside 글에서 대익 7542와 7572는 입문자 기준 표준적이고 현금화가 쉬운 보이차로 언급됩니다. 같은 조사 범위에서 대익을 데일리차 성격으로 보고 특별한 맛에서는 오운산 등보다 낮게 보는 비교 평가도 확인됩니다.",
        sentiment: "mixed",
        sourceTitle: "디시인사이드 대익 7542/7572 입문·비교 언급",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=318365",
        confidence: "medium",
      },
      {
        product: "대익 찻잔 / 생차 소금전 샘플",
        review:
          "티스토리 구매 후기에서 대익 찻잔이 무사히 포장되어 도착했고, 생차 소금전 샘플과 보관법 안내지가 동봉되었다는 내용이 확인됩니다. 찻잔은 저렴하고 막 쓰기 좋은 기물로 평가되었습니다.",
        sentiment: "positive",
        sourceTitle: "티스토리 대익 보이차 찻잔 구매 후기",
        sourceUrl: "https://todays-life.tistory.com/495",
        confidence: "medium",
      },
    ],
    G19: [
      {
        product: "동심명차 다하",
        review: "차대전 방문기에서 동심명차 부스의 다하 전시와 구입/전시 이미지가 인상적이었다는 단일 언급이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차닉골 차대전 방문기",
        sourceUrl: "https://cafe.naver.com/mbuna/139342",
        confidence: "low",
      },
    ],
    G15: [
      {
        product: "노반차품 동정보이차",
        review: "차문화대전 방문기에서 해당 부스에서 차를 시음했다는 사실이 확인됩니다. 맛 표현이나 제품명 세부 리뷰는 저장된 글 기준 부족합니다.",
        sentiment: "neutral",
        sourceTitle: "보이차는 틴포 2025 차문화대전 방문기",
        sourceUrl: "https://cafe.naver.com/teainfo/5510",
        confidence: "low",
      },
    ],
    G12: [
      {
        product: "랑카티스 실론티 7종(루후나/우바/캔디/딤불라/누와라엘리야 등)",
        review: "오렌지페코 비교시음 글에서 지역별 실론티를 한 번에 비교한 기록이 확인됩니다. 지역별 향미 차이를 흥미롭게 보되 구분 난이도도 함께 언급됩니다.",
        sentiment: "mixed",
        sourceTitle: "오렌지페코 랑카티스 7종 비교시음",
        sourceUrl: "https://cafe.naver.com/artcollection/537745",
        confidence: "medium",
      },
      {
        product: "랑카티스 우바",
        review: "별도 우바 시음 글에서 우바 단일 제품 시음 경험이 확인됩니다. 실론티 지역차 비교 맥락의 참고 리뷰입니다.",
        sentiment: "positive",
        sourceTitle: "오렌지페코 랑카티스 우바 시음",
        sourceUrl: "https://cafe.naver.com/artcollection/555020",
        confidence: "medium",
      },
    ],
    C12: [
      {
        product: "백학제다 수제덖음녹차",
        review: "우리차품평대회 수제덖음녹차 부문 대상 이력이 확인됩니다. 소비자 리뷰가 아니라 대회 수상 근거입니다.",
        sentiment: "positive",
        sourceTitle: "프레시안 우리차품평대회 기사",
        sourceUrl: "https://www.pressian.com/pages/articles/2020091719132037991",
        confidence: "medium",
      },
      {
        product: "백학제다 전통찻집 차 구매/방문",
        review: "뽈레 공개 리뷰에서 전통찻집 방문과 차 구매 경험이 확인됩니다. 세부 차품명은 저장된 스냅샷 기준 특정하지 않았습니다.",
        sentiment: "positive",
        sourceTitle: "뽈레 백학제다 리뷰",
        sourceUrl: "https://polle.com/place/3dLWAr/%EB%B0%B1%ED%95%99%EC%A0%9C%EB%8B%A4",
        confidence: "medium",
      },
    ],
    H5: [
      {
        product: "보이차 / 시쌍판나·포랑산 고수차 / 용정차 / 백차 / 대홍포 / 금준미",
        review:
          "선묘당 공식몰과 서울국제불교박람회 참가 정보에서 중국 저장성 이우시 기반, 고산고수 콘셉트, 보이차·녹차·홍차·청차·백차·화차와 자사호/청화백자다기 취급이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "선묘당 공식몰 및 서울국제불교박람회 참가 정보",
        sourceUrl: "https://shanmiaotang.com/",
        confidence: "high",
      },
      {
        product: "안화흑차",
        review:
          "DCInside 글에서 선묘당 안화흑차는 맛있지만 가격이 비싸다는 평가가 확인됩니다. 단건 커뮤니티 평가이므로 참고 수준으로 저장했습니다.",
        sentiment: "mixed",
        sourceTitle: "디시인사이드 선묘당 안화흑차 언급",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=436765&page=1",
        confidence: "low",
      },
      {
        product: "아포차 / 기문 홍차 소포장 / 백차 시음용",
        review:
          "DCInside 박람회 후기에서 선묘당 아포차, 기문 홍차 소포장, 백차 시음용 구매/시음 맥락이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "디시인사이드 명원 차 박람회 2일차 선묘당 언급",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=433326",
        confidence: "medium",
      },
    ],
    H10: [
      {
        product: "오운산 석가명차 2016기념병",
        review: "차닉골 시음 글에서 2016기념병 시음 경험이 확인되며 꿀향, 꽃향, 부드러움, 달달함 같은 긍정 표현이 저장된 요약에 반영되어 있습니다.",
        sentiment: "positive",
        sourceTitle: "차닉골 2016기념병 시음",
        sourceUrl: "https://cafe.naver.com/mbuna/139829",
        confidence: "medium",
      },
      {
        product: "오운산 석가명차 고수병배",
        review: "다성보이차 카페 시음 글에서 고수병배 차품 시음 경험이 확인됩니다. 저장 요약 기준 부드러움과 달달함 계열 표현이 반복됩니다.",
        sentiment: "positive",
        sourceTitle: "다성보이차 고수병배 시음",
        sourceUrl: "https://cafe.naver.com/dasungtn/4117",
        confidence: "medium",
      },
      {
        product: "오운산 봉경대수홍차",
        review: "오렌지페코 글에서 봉경대수홍차 시음이 확인되어 보이차 외 중국 홍차 제품군으로 분류했습니다.",
        sentiment: "positive",
        sourceTitle: "오렌지페코 봉경대수홍차",
        sourceUrl: "https://cafe.naver.com/artcollection/547941",
        confidence: "medium",
      },
      {
        product: "석가백차",
        review: "오리엔티 글에서 석가백차 시음이 확인되어 백차 제품군으로 분류했습니다.",
        sentiment: "positive",
        sourceTitle: "오리엔티 석가백차",
        sourceUrl: "https://cafe.naver.com/orienteacafe/525",
        confidence: "medium",
      },
      {
        product: "오운산 차왕수 10종 / 차고 / 고수 보이차 티백",
        review:
          "석가명차 서울점 공식몰에서 오운산 차왕수 10종 200g, 차고, 프리미엄 고수 보이차 티백, 고수황편과 자사호/차도구 품목이 확인됩니다. 공식 상품 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "석가명차 서울점 오운산 차왕수 10종",
        sourceUrl: "https://www.seokgaseoul.com/product/%EC%98%A4%EC%9A%B4%EC%82%B0-%EC%B0%A8%EC%99%95%EC%88%98-10%EC%A2%85-200g/483/display/1/",
        confidence: "high",
      },
      {
        product: "오운산 생차 블라인드 테스트",
        review:
          "DCInside 보이차 블라인드 테스트에서 생차 부문 오운산을 1위로 평가한 글이 확인됩니다. 대익을 데일리차로 보며 오운산 쪽을 더 맛있게 평가한 맥락입니다.",
        sentiment: "positive",
        sourceTitle: "디시인사이드 보이차 블라인드 테스트",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=291092",
        confidence: "medium",
      },
      {
        product: "오운산 보이차 저장고",
        review:
          "석우연담 글에서 울산 본사 보이차 저장고 방문 기록이 확인되며, 강변 위치와 습도 관리 측면에서 보관 환경이 언급됩니다.",
        sentiment: "neutral",
        sourceTitle: "석우연담 석가명차 오운산 보이차 저장고",
        sourceUrl: "https://seoku.tistory.com/1534",
        confidence: "medium",
      },
    ],
    A19: [
      {
        product: "장흥 청태전",
        review: "차가마 글에서 청태전 나눔/음용 언급이 확인됩니다. 구워 마시기와 티백 형태처럼 음용 방식이 함께 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "차가마 장흥 청태전 나눔",
        sourceUrl: "https://cafe.naver.com/tearich88888888/156316",
        confidence: "medium",
      },
      {
        product: "장흥 청태전 찻자리",
        review: "차랑방 글에서 장흥 청태전 찻자리 후기가 확인됩니다. 특정 맛 평가는 저장된 요약 기준 제한적입니다.",
        sentiment: "positive",
        sourceTitle: "차랑방 장흥 청태전 찻자리",
        sourceUrl: "https://cafe.naver.com/orienteacafe/6653",
        confidence: "medium",
      },
    ],
    G3: [
      {
        product: "정산당 무이노총 정산소종",
        review: "오렌지페코 시음 글에서 달고 그윽한 맛, 시원함, 훈연향이 언급됩니다. 단일 출처라 신뢰도는 낮게 표시했습니다.",
        sentiment: "positive",
        sourceTitle: "오렌지페코 정산당 정산소종 시음",
        sourceUrl: "https://cafe.naver.com/artcollection/533563",
        confidence: "low",
      },
    ],
    G9: [
      {
        product: "지유명차 보이차",
        review: "대전 둔산맘 후기에서 직접 내려 마시는 보이차, 차분한 분위기, 티타임 공간이 긍정적으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "대전 둔산맘 지유명차 후기",
        sourceUrl: "https://cafe.naver.com/ksn82599/258100",
        confidence: "medium",
      },
      {
        product: "지유명차 보이차 쿠키/브런치",
        review: "지유명차 브런치/티타임 글에서 보이차 쿠키와 매장 인테리어가 방문 경험의 일부로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "대전 둔산맘 지유명차 브런치/티타임 언급",
        sourceUrl: "https://cafe.naver.com/ksn82599/262255",
        confidence: "medium",
      },
      {
        product: "지유명차 문지동 매장 접근성",
        review: "일부 후기에서 둔산 기준 거리가 있다는 언급이 있어 방문 계획 시 위치 확인이 필요합니다.",
        sentiment: "mixed",
        sourceTitle: "디젤매니아 문지동 지유명차 추천",
        sourceUrl: "https://cafe.naver.com/dieselmania/45268479",
        confidence: "low",
      },
      {
        product: "무량산 보이차 티백 생차 / 삼년호합 보이차 티백 숙차",
        review:
          "쿠팡 상품 페이지에서 무량산 보이차 티백 생차 11개 상품평, 삼년호합 보이차 티백 숙차 12개 상품평 수치가 확인됩니다. 공개 화면에서 본문 리뷰는 충분히 확인되지 않아 상품/리뷰 수 확인 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 지유명차 보이차 티백 상품평 수",
        sourceUrl: "https://www.coupang.com/vp/products/8769383555",
        confidence: "medium",
      },
      {
        product: "지유소타차 / 보이차 시음",
        review:
          "테이블링 화곡점과 수원영통점 리뷰에서 보이차·우롱차 시음과 설명, 차판/자사호 판매, 지유소타차 구매가 확인됩니다. 수원영통점 리뷰에는 보이차 구매처로 좋지만 보이차 외 차류는 상대적으로 약하다는 평가도 있습니다.",
        sentiment: "mixed",
        sourceTitle: "테이블링 지유명차 화곡점/수원영통점 리뷰",
        sourceUrl: "https://www.tabling.co.kr/place/677ccfe266de5f0698850d8c",
        confidence: "medium",
      },
      {
        product: "차예사 보이차 체험",
        review:
          "티스토리 방문기에서 우롱차·홍차·보이차 체험코스, 다기와 자사호 구경, 차예사의 설명 경험이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "티스토리 차예사가 선보이는 보이차, 지유명차",
        sourceUrl:
          "https://lara.tistory.com/entry/%EC%B0%A8%EC%98%88%EC%82%AC%EA%B0%80-%EC%84%A0%EB%B3%B4%EC%9D%B4%EB%8A%94-%EB%B3%B4%EC%9D%B4%EC%B0%A8-%EC%A7%80%EC%9C%A0%EB%AA%85%EC%B0%A8",
        confidence: "medium",
      },
    ],
    G6: [
      {
        product: "09년 임창 대설산 야생차 춘첨",
        review: "차닉골 시음 글에서 첫물차 정체성과 야생차의 향, 탕색, 부드러움, 내포성 관련 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차닉골 임창 대설산 야생차 춘첨",
        sourceUrl: "https://cafe.naver.com/mbuna/147173",
        confidence: "medium",
      },
      {
        product: "천년보이차 고수단주차",
        review: "차닉골 글에서 고수단주차 설명과 기부경매 맥락이 확인됩니다. 소비자 시음 평이라기보다 차품 설명/언급 성격입니다.",
        sentiment: "neutral",
        sourceTitle: "차닉골 고수단주차 설명",
        sourceUrl: "https://cafe.naver.com/mbuna/137930",
        confidence: "medium",
      },
      {
        product: "2010 향죽림 고수 첫물차",
        review:
          "티스토리 시음기에서 난향, 달고 시원한 구감, 깊은 회운, 황금색 탕색, 흠결을 찾기 어렵다는 강한 호평이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "티스토리 2010 천년보이차 향죽림 고수 첫물차 시음기",
        sourceUrl: "https://kahn777.tistory.com/16117077",
        confidence: "medium",
      },
      {
        product: "2009 빙도",
        review:
          "티스토리 비교 시음 글에서 10년 이상 숙성 후 밀향과 첨미는 일부 가라앉고 쓴맛이 깔끔해졌다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "티스토리 천년보이차 2009 빙도 비교 시음",
        sourceUrl: "https://kahn777.tistory.com/16117018",
        confidence: "medium",
      },
    ],
    H14: [
      {
        product: "취죽진여실 봉황단총 야래향",
        review: "차울림 시음 글에서 봉황단총 야래향의 향과 맛이 긍정적으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "차울림 봉황단총 야래향",
        sourceUrl: "https://cafe.naver.com/chaulim/41834",
        confidence: "medium",
      },
      {
        product: "취죽진여실 15 병배 노반장",
        review: "차닉골 글에서 15 병배 노반장 차품 언급이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차닉골 15 병배 노반장",
        sourceUrl: "https://cafe.naver.com/mbuna/138497",
        confidence: "medium",
      },
      {
        product: "취죽진여실 고산유기두춘청병",
        review: "차울림 시음 글에서 고산유기두춘청병의 달큰함이 긍정적으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "차울림 고산유기두춘청병",
        sourceUrl: "https://cafe.naver.com/chaulim/45833",
        confidence: "medium",
      },
      {
        product: "취죽진여실 고수 송차왕",
        review: "오리엔티 글에서 고수 송차왕 시음이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "오리엔티 고수 송차왕",
        sourceUrl: "https://cafe.naver.com/orienteacafe/3784",
        confidence: "medium",
      },
      {
        product: "봉황단총 / 보이차 / 오룡차",
        review:
          "대한민국불교문화엑스포 디렉토리에서 취죽진여실은 구리 소재 업체로 보이차와 오룡차를 취급하고, 지역별 차모임과 중국차 보급 활동을 한다고 설명됩니다.",
        sentiment: "neutral",
        sourceTitle: "대한민국불교문화엑스포 디렉토리 취죽진여실",
        sourceUrl: "https://www.bexpodg.kr/files/2024_directory.pdf",
        confidence: "medium",
      },
      {
        product: "봉황단총",
        review:
          "DCInside 글에서 봉황단총 분야 국내 강점 업체로 취죽진여실이 주관적으로 언급됩니다. 커뮤니티 단건 평판이므로 반복 검증된 평가가 아닌 인지도 단서로 저장했습니다.",
        sentiment: "positive",
        sourceTitle: "디시인사이드 중국차 및 다기 국내 강점 업체 언급",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=425474",
        confidence: "low",
      },
    ],
    G20: [
      {
        product: "포담 대만차/차회",
        review: "뽈레 리뷰에서 대만차 전문 티룸, 차회 참여, 친절한 차 설명과 월병/티푸드가 방문 경험으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "뽈레 포담 티하우스 리뷰",
        sourceUrl: "https://polle.com/place/3wZFIX/%ED%8F%AC%EB%8B%B4",
        confidence: "medium",
      },
      {
        product: "포담가챠뽑기",
        review:
          "공식 Instagram 게시물에서 2026 국제차문화대전 포담가챠뽑기 이벤트가 확인됩니다. 커뮤니티 공유 글에서는 사전 신청 마감과 꽝 없음 취지의 안내가 함께 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "포담 티하우스 공식 Instagram 이벤트 게시물",
        sourceUrl: "https://www.instagram.com/fodamteahouse/p/DYtykDqytjH/",
        confidence: "high",
      },
      {
        product: "거북이 차과자",
        review:
          "와디즈 공개 페이지에서 포담 티하우스의 거북이 차과자 펀딩 이력이 확인되어 차회/티푸드 제품군 참고 정보로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "와디즈 포담 티하우스 거북이 차과자",
        sourceUrl: "https://www.wadiz.kr/funding/97080",
        confidence: "medium",
      },
      {
        product: "자스민용주",
        review:
          "DCInside 후기에서 자스민 향이 매우 은은하고 백호은침 계열처럼 여리고 고소하지만, 강한 자스민향을 기대하면 다르게 느낄 수 있다는 혼합 평가가 확인됩니다.",
        sentiment: "mixed",
        sourceTitle: "디시인사이드 포담 자스민용주 후기",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=441281",
        confidence: "medium",
      },
    ],
    D4: [
      {
        product: "혜림농원 녹차 우전",
        review: "하동야생차문화축제 후기에서 녹차 우전의 부드러움, 향, 밸런스가 좋았다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "차랑방 하동야생차문화축제 후기",
        sourceUrl: "https://cafe.naver.com/orienteacafe/9366",
        confidence: "low",
      },
      {
        product: "혜림농원 청차/계화홍차",
        review: "같은 후기에서 청차와 계화홍차도 향이 좋게 언급됩니다. 단일 출처라 신뢰도는 낮게 표시했습니다.",
        sentiment: "positive",
        sourceTitle: "차랑방 하동야생차문화축제 후기",
        sourceUrl: "https://cafe.naver.com/orienteacafe/9366",
        confidence: "low",
      },
    ],
    C8: [
      {
        product: "자드리 茶 이야기 Black Tea",
        review:
          "Cafe Show Seoul 공개 자료에서 JDDE:LEE TEA STORY / 자드리 茶 이야기와 Black Tea 품목이 확인됩니다. 제품별 소비자 평가는 저장하지 않고 출품 품목 확인 근거로만 표시합니다.",
        sentiment: "neutral",
        sourceTitle: "Cafe Show Seoul 2019/2020 자드리 참가 자료",
        sourceUrl: "https://eng.cafeshow.com/eng/cafeshow/result2019_comp.asp?fst_name=J",
        confidence: "medium",
      },
    ],
    C11: [
      {
        product: "수제차전수관 차(tea)",
        review:
          "명원세계차박람회 공개 참가업체 목록에서 수제차전수관이 차(tea) 카테고리 참가업체로 확인됩니다. 제품별 리뷰는 반복 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "명원세계차박람회 2025 참가업체 리스트",
        sourceUrl: "https://www.worldteaexpokorea.com/list/?category=t736O25D17&page=2&q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9",
        confidence: "low",
      },
    ],
    C13: [
      {
        product: "지리산 하동 수제 홍차",
        review:
          "아이디어스 공개 상품에서 붓당골제다의 지리산 경남 하동 수제 홍차 판매가 확인됩니다. 공개 쇼핑몰 상품 확인 근거이며, 반복 리뷰 패턴은 제한적입니다.",
        sentiment: "neutral",
        sourceTitle: "아이디어스 붓당골제다 지리산 경남 하동 수제 홍차",
        sourceUrl: "https://www.idus.com/v2/product/4c62a8b1-a652-4a51-a0ae-eb95a55f7110",
        confidence: "medium",
      },
      {
        product: "하동 유기농 수제홍차 노을향기",
        review:
          "아이디어스 공개 상품에서 하동 유기농 수제홍차 노을향기 판매가 확인됩니다. 취급 차종 판단 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "아이디어스 붓당골제다 하동 유기농 수제홍차 노을향기",
        sourceUrl: "https://www.idus.com/v2/product/cbfb0e80-ed8b-4f25-9e52-9ecdecdc173a",
        confidence: "medium",
      },
      {
        product: "하동 헛개잎차",
        review:
          "아이디어스 공개 상품에서 하동 헛개잎차 판매가 확인되어 대용차 취급 근거로 반영했습니다.",
        sentiment: "neutral",
        sourceTitle: "아이디어스 붓당골제다 하동 헛개잎차",
        sourceUrl: "https://www.idus.com/v2/product/83cb1614-a2f4-42e9-afb1-f2e60f846630",
        confidence: "medium",
      },
    ],
    C25: [
      {
        product: "황제요 끽다거",
        review:
          "공개 기사에서 황제요 이기호 작가의 끽다거 작품이 경상북도 공예품대전 대상으로 확인됩니다. 소비자 리뷰가 아니라 작품 수상 이력 근거입니다.",
        sentiment: "positive",
        sourceTitle: "화백신문 황제요 이기호 끽다거 수상 기사",
        sourceUrl: "https://www.whabaeg.com/news/articleView.html?idxno=7759",
        confidence: "medium",
      },
      {
        product: "황제요 도예 작품",
        review:
          "공개 도예 프로필에서 황제요/이기호 작가 이력이 확인됩니다. 다기·차도구 성격의 작품군 판단 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "황제요 이기호 공개 도예 프로필",
        sourceUrl: "https://spp5908.tistory.com/7471",
        confidence: "medium",
      },
    ],
    E15: [
      {
        product: "예인요 임용택 다관",
        review:
          "석우연담 공개 글에서 예인요 임용택 작가의 다관과 차도구 전시가 확인됩니다. 제품 품평보다는 작품/전시 확인 근거입니다.",
        sentiment: "positive",
        sourceTitle: "석우연담 예인요 임용택 다관·차도구 전시",
        sourceUrl: "https://seoku.tistory.com/1180",
        confidence: "medium",
      },
      {
        product: "예인요 개완·차통·찻잔",
        review:
          "공개 작가 프로필에서 예인요 임용택 작가의 개완, 차통, 찻잔, 사발 작업이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "예인요 임용택 공개 도예 프로필",
        sourceUrl: "https://spp5908.tistory.com/9770",
        confidence: "medium",
      },
    ],
    F19: [
      {
        product: "정호요 임만재 도예 작품",
        review:
          "경남신문 공개 기사에서 김해 정호요 임만재 도예가의 작업 이력이 확인됩니다. 소비자 리뷰가 아니라 작가/작품 확인 근거입니다.",
        sentiment: "positive",
        sourceTitle: "경남신문 정호요 임만재 도예가 기사",
        sourceUrl: "https://www.knnews.co.kr/news/articleView.php?idxno=1482255",
        confidence: "medium",
      },
      {
        product: "정호요 차도구·잔류",
        review:
          "공개 프로필에서 정호요 임만재 작가 정보가 확인되어 차도구·도예 계열 판단 근거로 저장했습니다. 독립 제품 리뷰 반복은 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "정호요 임만재 공개 도예 프로필",
        sourceUrl: "https://spp5908.tistory.com/6241",
        confidence: "medium",
      },
    ],
    E19: [
      {
        product: "슬우재 팟/동물 모티프 도예",
        review:
          "공개 블로그와 카페에서 슬우재 팟, 개구리·참새 등 동물 모티프 도자기와 만족 언급이 확인됩니다. 반복 수가 많지 않아 중간 신뢰도로 표시합니다.",
        sentiment: "positive",
        sourceTitle: "네이버 블로그: 슬우재 팟/도예공방 후기",
        sourceUrl: "https://blog.naver.com/hobak1218/223289807218",
        confidence: "medium",
      },
      {
        product: "슬우재 참새잔",
        review:
          "YouTube Shorts에서 차문화대전 슬우재도예공방 참새잔이 확인됩니다. 소비자 평점보다는 제품 존재 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "YouTube Shorts: 차문화대전 참새잔 슬우재도예공방",
        sourceUrl: "https://www.youtube.com/shorts/8s2xfXfaoRg",
        confidence: "low",
      },
    ],
    D19: [
      {
        product: "해너울 호랑이 찻잔",
        review:
          "Brown Things 국제차문화대전 리뷰에서 해너울 공방의 무유소성 호랑이 찻잔과 장작가마 질감이 상세히 소개됩니다.",
        sentiment: "positive",
        sourceTitle: "Brown Things: 2025 국제차문화대전 해너울 공방 리뷰",
        sourceUrl: "https://brownthings.tistory.com/907",
        confidence: "medium",
      },
      {
        product: "해너울 차 거름망/찻주전자",
        review:
          "같은 공개 리뷰에서 차 거름망, 찻주전자, 찻잔, 커피잔 등 차도구 전시가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "Brown Things: 2025 국제차문화대전 해너울 공방 리뷰",
        sourceUrl: "https://brownthings.tistory.com/907",
        confidence: "medium",
      },
    ],
    E31: [
      {
        product: "화경도요 장병우 도예 작품",
        review:
          "공개 프로필과 매일신문 기사에서 화경도요 장병우 작가의 도예 작업과 경상북도 공예품대전 대상 수상 이력이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "공개 작가 프로필: 장병우 - 화경도요",
        sourceUrl: "https://spp5908.tistory.com/13565",
        confidence: "medium",
      },
    ],
    G11: [
      {
        product: "향적당 동방미인차/목책철관음",
        review:
          "K스피릿 기사에서 향적당의 대만 동방미인차와 목책철관음 시합차 전시가 확인됩니다. 소비자 리뷰가 아니라 전시 품목 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "K스피릿: 향적당 대만 동방미인차·목책철관음 전시",
        sourceUrl: "http://www.ikoreanspirit.com/news/articleView.html?idxno=72305",
        confidence: "medium",
      },
    ],
    G13: [
      {
        product: "라이트 로스트 우롱/사계춘/동방미인/금훤/호지차 티백",
        review:
          "틴지오브소울 공식 Linktree에서 라이트 로스트 우롱, 사계춘, 동방미인, 금훤, 호지차 티백 상품 링크와 가격, 네이버 스마트스토어/마켓컬리/국내몰/글로벌샵 링크가 확인됩니다. 소비자 평가라기보다는 공식 판매 제품 확인 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "틴지오브소울 공식 Linktree 상품 링크",
        sourceUrl: "https://linktr.ee/tingeofsoul",
        confidence: "high",
      },
      {
        product: "유리머그 400mL",
        review:
          "같은 공식 Linktree에서 유리머그 400mL 상품 링크가 확인되어 차도구/다기 태그 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "틴지오브소울 공식 Linktree 유리머그 상품",
        sourceUrl: "https://linktr.ee/tingeofsoul",
        confidence: "high",
      },
      {
        product: "사계춘 티백 / 프리미엄 티 컬렉션 / Tea Pet",
        review:
          "틴지오브소울 공식 리뷰에서 사계춘 티백은 박람회 시음 후 맛있었다는 구매 후기가 확인되고, 프리미엄 티 컬렉션은 여러 차를 마시며 취향 찾기 좋다는 평가가 확인됩니다. Tea Pet은 귀엽고 가격 대비 퀄리티가 좋다는 후기가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "틴지오브소울 공식몰 Review",
        sourceUrl: "https://www.tingeofsoul.co.kr/review",
        confidence: "medium",
      },
      {
        product: "우롱차 티백 4종 / 금훤 티백",
        review:
          "Kurly 우롱차 티백 4종은 후기 20건 수치와 상품 설명이 확인되지만 본문 후기는 노출되지 않았고, Coupang 금훤 티백은 상품평 0건으로 확인됩니다. 외부 쇼핑몰 판매/리뷰 상태 확인 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "Kurly/Coupang 틴지오브소울 상품 페이지",
        sourceUrl: "https://www.kurly.com/goods/1002037122",
        confidence: "medium",
      },
    ],
    G16: [
      {
        product: "YOSHAN TEA Classic Series 대만 우롱차",
        review:
          "YOSHAN TEA 공식 Classic Series 제품 페이지에서 Roasted Classic Dong Ding Oolong Tea, Ten-Chih Oolong Tea, Li-Chih Oolong Tea, Aged Taiwan Oolong Tea, Honey Gold Tea Bud, Amber Muscatel Oolong Tea, Rosy Cloud Red Oolong Tea가 확인됩니다. 공식 제품 확인 근거이며 소비자 리뷰는 아닙니다.",
        sentiment: "neutral",
        sourceTitle: "YOSHAN TEA Classic Series 공식 제품 페이지",
        sourceUrl: "https://www.yoshantea.com/pc/product.php?lang=en&s=2",
        confidence: "high",
      },
      {
        product: "808 Aged Taiwan Oolong",
        review:
          "Reddit r/tea 리뷰에서 로스팅감, 꿀빛 수색, 단맛, 가든니아/대추/쿨링감은 긍정적으로 언급되지만, 가격 대비 차체 깊이와 복합성이 부족하다는 혼합 평가가 확인됩니다.",
        sentiment: "mixed",
        sourceTitle: "Reddit r/tea: YOSHAN TEA 808 Aged Taiwan Oolong 리뷰",
        sourceUrl: "https://www.reddit.com/r/tea/comments/1qj9dni/yoshan_tea_808_aged_taiwan_oolong320g/",
        confidence: "medium",
      },
    ],
    D2: [
      {
        product: "2022 세작 발효차/우전 발효차/아델레이드 블렌딩",
        review:
          "공개 후기 모음에서 곡천다원 세작 발효차는 견과류, 볶은콩, 다크초콜릿, 쿠키 같은 건엽향과 맑은 갈색 수색, 쌉쌀하면서 달큰한 맛, 냉침 시 레모니한 단맛이 좋다는 시음기가 확인됩니다. 우전 발효차는 풋사과 같은 달큰한 향과 부드러운 목넘김, 아델레이드는 유자와 정향이 발효차와 어울리는 블렌딩으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "다이닝코드: 곡천다원 블로그 후기 모음",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=f0gAyG3sr1sD",
        confidence: "high",
      },
    ],
    D12: [
      {
        product: "수제차 티코스/녹차/홍차/쑥차/감잎차/무우차",
        review:
          "관아수제차 공개 리뷰 요약에서 녹차, 홍차, 구기자차 등을 티코스로 천천히 마실 수 있고, 쑥차는 은은한 쑥향과 고소한 맛, 감잎차와 무우차는 구수한 인상으로 언급됩니다. 차밭 피크닉 후기에서는 수제 녹차와 홍차, 다과 구성과 차밭 풍경을 함께 즐기는 경험이 긍정적으로 묘사됩니다.",
        sentiment: "positive",
        sourceTitle: "식신: 관아수제차 AI 하이라이트 리뷰",
        sourceUrl: "https://www.siksinhot.com/P/1005569",
        confidence: "medium",
      },
      {
        product: "차밭 피크닉 수제차",
        review:
          "다이닝코드 공개 후기 모음에서도 관아수제차의 차밭 피크닉과 수제차 체험이 반복 노출됩니다. 녹차와 홍차를 다과와 함께 마시는 방문 경험이 중심이고, 맛 평가보다는 공간·체험 만족도가 함께 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "다이닝코드: 관아수제차 블로그 후기 모음",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=tClZLVs7znjZ",
        confidence: "medium",
      },
    ],
    D15: [
      {
        product: "야생녹차/발효차/마심병차",
        review:
          "금향다원 공개 후기 모음에서 다원·찻집·숙박 공간 방문 경험과 그날 준비된 차를 다식과 함께 제공받는 경험이 확인됩니다. 마심병차와 발효차는 공개 쇼핑몰 상품으로 확인되지만 제품별 상세 소비자 리뷰는 많지 않아 낮은 신뢰도로 저장합니다.",
        sentiment: "positive",
        sourceTitle: "다이닝코드: 금향다원 블로그 후기 모음",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=ascZlsayzDSc",
        confidence: "low",
      },
    ],
    B11: [
      {
        product: "다채려홍차/다채 발효차",
        review:
          "소비자 리뷰보다는 품평회 기반 공개 평가가 반복 확인됩니다. 2018년 대한민국차품평대회 발효차 부문 금상 제품으로 다채려홍차가 언급되고, 2023년 대한민국차품평대회에서도 발효차 부문 금상 업체로 다채가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "석우연담: 제11회 대한민국차품평대회 수상자 명단",
        sourceUrl: "https://seoku.tistory.com/1453",
        confidence: "medium",
      },
      {
        product: "다채려홍차",
        review:
          "다채 공식 상품 페이지에서 다채려홍차가 판매 제품으로 확인됩니다. 소비자 후기라기보다는 제품 실재와 판매명 확인 근거이며, 품평회 수상 이력과 함께 발효차/홍차 제품군 판단에 반영했습니다.",
        sentiment: "neutral",
        sourceTitle: "다채 공식몰: 다채려홍차 상품",
        sourceUrl: "https://dache.kr/blank/?idx=62",
        confidence: "medium",
      },
    ],
    D11: [
      {
        product: "우전 녹차/백차/홍차/잭살차/스페셜홍차 티코스",
        review:
          "공개 리뷰 요약에서 도재명차 티코스는 우전 녹차, 백차, 홍차, 잭살차 등을 순서대로 마시며 산뜻함, 부드러움, 청량함, 은은한 단맛, 깊은 향, 구수한 여운을 즐길 수 있다고 정리됩니다. 쿠팡·아이디어스에는 우전 녹차와 백차 상품 노출이 확인되지만 상세 후기 텍스트는 제한적입니다.",
        sentiment: "positive",
        sourceTitle: "식신: 도재명차 AI 하이라이트 리뷰",
        sourceUrl: "https://www.siksinhot.com/P/1494958",
        confidence: "medium",
      },
      {
        product: "도재명차 티코스",
        review:
          "다이닝코드 공개 후기 모음에서 도재명차 티코스 방문 후기가 추가로 확인됩니다. 다양한 하동 차를 차례로 마시는 구성, 차 설명, 찻자리 경험이 긍정적으로 반복 노출됩니다.",
        sentiment: "positive",
        sourceTitle: "다이닝코드: 도재명차 블로그 후기 모음",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=uUR8v2m9ULFR",
        confidence: "medium",
      },
    ],
    A13: [
      {
        product: "국화차/유자홍차",
        review:
          "모후실에서만난차 국화차는 다나와 비교 페이지에서 별점 4.8점과 리뷰 21건이 노출되어 반복 구매·평가 흔적이 확인됩니다. 상세 문장 리뷰는 검색 노출에서 제한적이지만 쿠팡 상품 페이지에서도 국화차 상품평이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "다나와 VS검색: 모후실에서만난차 국화차",
        sourceUrl: "https://prod.danawa.com/vssearch/?productCodes=32608217",
        confidence: "medium",
      },
    ],
    F11: [
      {
        product: "무유다원 피아골암전차/화개골솔바람차/백운산죽로암차",
        review:
          "차와문화 기사에서 무유다원의 피아골암전차, 화개골솔바람차, 백운산죽로암차가 소개되며, 소나무 장작불과 자체 차솥으로 만든 차가 청향과 단맛, 여러 번 우려도 유지되는 맛으로 평가됩니다. 소비자 리뷰보다는 기사·전시 소개 기반 평가입니다.",
        sentiment: "positive",
        sourceTitle: "차와문화: 봄에는 녹차, 좋다",
        sourceUrl: "https://www.teaculture.co.kr/news/articleView.html?idxno=1901",
        confidence: "medium",
      },
    ],
    B10: [
      {
        product: "말차가루/호지차 말차가루/고급말차",
        review:
          "디시인사이드 차·음료 갤러리에서 소아다원 말차가루 구매 문의가 확인됩니다. 보성몰 공개 상품 페이지에는 말차 100g/500g, 호지차 분말, 쑥차 분말 상품이 노출됩니다. 제품 구매 관심은 확인되지만, 맛·품질을 평가한 신뢰 가능한 공개 제품 리뷰는 저장할 만큼 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "디시인사이드 차·음료 갤러리: 소아다원 말차가루 구매 문의",
        sourceUrl: "https://gall.dcinside.com/board/view/?id=tea&no=243367",
        confidence: "low",
      },
    ],
    C11: [
      {
        product: "수제차전수관 차(tea)",
        review:
          "명원세계차박람회 공개 참가업체 목록과 식품제조가공업체 목록에서 수제차전수관의 업체명과 차 카테고리는 확인됩니다. 다만 특정 차 제품에 대한 공개 소비자 리뷰나 시음 후기는 신뢰도 있게 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "명원세계차박람회 2025 참가업체 목록: 수제차전수관",
        sourceUrl: "https://www.worldteaexpokorea.com/list/?category=t736O25D17&page=2&q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9",
        confidence: "low",
      },
    ],
    E6: [
      {
        product: "예약제 티 스튜디오/차 경험 프로그램",
        review:
          "국제차문화대전 참가업체 목록에서 스튜디오 세온의 차 스튜디오 운영 맥락은 확인됩니다. SNS와 공개 검색에서 특정 판매 제품에 대한 반복 소비자 리뷰는 확인하지 못해 차 경험 프로그램 확인 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "2024 국제차문화대전 참가업체 목록 언급",
        sourceUrl: "https://mccartny.net/894",
        confidence: "low",
      },
    ],
    F14: [
      {
        product: "가야의 전설/쌍어문 이야기",
        review:
          "김해 가람도예 주은정 작가의 '가야의 전설'은 경남도 공예품대전 대상작으로 백토 판상기법과 금리작업, 가야 유물 문양 응용이 높게 평가됐고, '쌍어문 이야기'도 김해시 공예품대전 대상작으로 보도됩니다. 소비자 사용 리뷰는 확인하지 못했습니다.",
        sentiment: "positive",
        sourceTitle: "가람도예 주은정 작가 공예품대전 대상 보도",
        sourceUrl: "https://www.fnnews.com/news/202407021052539645",
        confidence: "medium",
      },
    ],
    B24: [
      {
        product: "가미공방 도예/다기 제품",
        review:
          "공개 검색에서 사업자·주소성 정보 외에 특정 도예·다기 제품에 대한 반복 가능한 공개 리뷰나 평가를 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "가미공방 사업자 정보",
        sourceUrl: "https://www.bizkorea.org/company/view.asp?SEQ=1665618",
        confidence: "low",
      },
    ],
    A24: [
      {
        product: "청화백자 차 세트",
        review:
          "공개 인터뷰 기사에서 남촌도예 서무성 도예가의 청화백자 차 세트가 전국적으로 알려진 대표 작업으로 소개됩니다. 순도 높은 백자와 코발트 안료, 환원염 소성 과정을 강조한 작품 소개 성격이며 소비자 리뷰는 아닙니다.",
        sentiment: "positive",
        sourceTitle: "천년역사 신라 도자 전통 세계에 알리고 싶어",
        sourceUrl: "https://www.kbmaeil.com/article/202103230302504",
        confidence: "medium",
      },
    ],
    F15: [
      {
        product: "생활도자기/다구",
        review:
          "김해 분청도자기축제 관련 공개 기사에서 고도산방은 생활도자기, 다구, 인테리어 소품을 다루며 분청의 투박하고 질박한 자연미를 살리는 작업으로 소개됩니다. 특정 제품 사용 후기는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "김해지역 76개 '요' 업체 참가…분청의 진수 선봬",
        sourceUrl: "https://www.gimhaenews.co.kr/news/articleView.html?idxno=10908",
        confidence: "low",
      },
    ],
    D25: [
      {
        product: "분청 다구들/분청 토끼 다관",
        review:
          "쇼핑몰 상품 설명 기준으로 공림요 홍진석 작가의 분청 다구는 두터운 분장, 갈라짐, 스펀지 질감이 특징이며 다관은 입구가 넓어 차를 넣고 빼기 편하고 숙우·잔은 손에 잡히는 형태와 사용감을 강조합니다. 해당 페이지 후기는 0건이라 소비자 리뷰로 보기는 어렵습니다.",
        sentiment: "neutral",
        sourceTitle: "[공림요 홍진석] 분청 다구들",
        sourceUrl: "https://doiminie.com/product/2ffb8072-7643-4fba-899b-2a20f64a69ea",
        confidence: "low",
      },
    ],
    F5: [
      {
        product: "은주전자/은다관/금속공예 죽향",
        review:
          "교문공방 엄영민 작가의 금속공예 '죽향'은 경기도 공예품 경진대회 대상작으로 은 소재의 전통미와 현대적 트렌드를 결합했다는 평가를 받았습니다. 방송 소개 글에서는 은주전자가 100% 수작업과 반복 망치질로 제작되는 고급 수공예품으로 언급됩니다.",
        sentiment: "positive",
        sourceTitle: "엄영민 ‘죽향’ 경기도공예품경진대회 대상 수상",
        sourceUrl: "https://www.fnnews.com/news/201806282056531267",
        confidence: "medium",
      },
    ],
    A28: [
      {
        product: "다관/찻잔/다기세트/자완",
        review:
          "서울국제불교박람회 공개 전시 정보에서 귀단요 성탄송운은 다양한 다관·찻잔·다기세트·자완을 출품하며, 직접 채취·정제한 고령토와 자연 유약, 전통가마 소성을 사용하는 차 도구 업체로 소개됩니다. 소비자 리뷰는 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "서울국제불교박람회 - 귀단요 성탄송운",
        sourceUrl: "https://bexpo.kr/home/info?cid=210",
        confidence: "low",
      },
    ],
    D33: [
      {
        product: "기린공방 도예/다기 제품",
        review:
          "동일명 비도예 자료가 다수 검색되며, 부스 업체의 도예·다기·공예 제품과 연결되는 반복 가능한 공개 리뷰를 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "Google 공개 검색: 기린공방 도자 다기 후기",
        sourceUrl: "https://www.google.com/search?q=%22%EA%B8%B0%EB%A6%B0%EA%B3%B5%EB%B0%A9%22+%EB%8F%84%EC%9E%90+%EB%8B%A4%EA%B8%B0+%ED%9B%84%EA%B8%B0",
        confidence: "low",
      },
    ],
    F17: [
      {
        product: "무유다관/분청·백자 다관/찻사발",
        review:
          "차도구 전문 공개 글에서 김해요 김경수 작가의 무유다관은 젊은 작가들의 롤모델로 언급되고, 백자·청화백자·분청다관은 균형감과 사용성이 좋다고 평가됩니다. 정호찻사발과 분청찻사발도 손에 잘 안기고 차를 마시기에 좋다는 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "우리 시대 즐김의 차 문화 _ 김해요 김경수 展",
        sourceUrl: "https://seoku.tistory.com/498262",
        confidence: "medium",
      },
    ],
    F24: [
      {
        product: "무유항아리 숙성 특홍차/발효차 숙성 항아리",
        review:
          "공개 블로그 미러 글에서 박달요 무유 차항아리 숙성 홍차와 일반 홍차를 비교 시음하며, 건엽보다 차탕에서 향과 맛의 차이가 더 크게 느껴졌다고 언급됩니다. 특정 도자기 자체의 구매 리뷰라기보다 항아리 숙성 차 체험 후기입니다.",
        sentiment: "positive",
        sourceTitle: "홍차 비교 시음 : 박달요 무유항아리 숙성 특홍차 잎차 티타임",
        sourceUrl: "https://www.keyzard.cc/trade05/nb/224036668229",
        confidence: "low",
      },
    ],
    H12: [
      {
        product: "18년 육계/24년 우란갱 육계/18년 국차 대홍포",
        review:
          "아망시 공식몰 첫 화면과 청차/암차 상품군에서 육계, 우란갱 육계, 국차 대홍포가 확인됩니다. 소비자 평가라기보다 공식 판매 제품 확인 근거이며, 암차/우롱차 태그의 직접 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "아망시 공식몰 TEA 상품",
        sourceUrl: "https://amangsi.com/",
        confidence: "high",
      },
      {
        product: "1990년대 소타차/1990년대 7572 숙차/11년 빙도/1990년대 궁정보이",
        review:
          "아망시 공식몰 GIFT/TEA 상품 영역에서 1990년대 소타차, 1990년대 7572 숙차, 11년 빙도, 1990년대 궁정보이가 확인됩니다. 보이차/생차/숙차 제품군 판단 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "아망시 공식몰 보이차 상품",
        sourceUrl: "https://amangsi.com/",
        confidence: "high",
      },
      {
        product: "차호/개완/공도배/호승",
        review:
          "아망시 공식몰 TEAWARE 카테고리에서 차호, 개완, 공도배, 호승, 퇴수기, 티 매트 등 차도구 판매가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "아망시 공식몰 TEAWARE 상품",
        sourceUrl: "https://amangsi.com/teaware",
        confidence: "high",
      },
      {
        product: "티코스/90년대 소타차/금화육보 등 중국차",
        review:
          "전주 티룸 방문 리뷰에서 티코스는 3가지 차를 충분히 마실 수 있고, 작은 자사호로 7~8번 우릴 수 있으며 물을 계속 제공해 만족도가 높다는 평가가 확인됩니다. 다른 공개 후기에서는 보이차 숙차 90년대 소타차를 주문했고, 차 내리는 법과 퇴수기 사용법을 안내받아 초심자도 이용하기 좋다는 언급이 있습니다.",
        sentiment: "positive",
        sourceTitle: "테이블링/다이닝코드: 아망시 방문 후기",
        sourceUrl: "https://www.tabling.co.kr/place/677cd8c266de5f069895134b",
        confidence: "medium",
      },
    ],
    G15: [
      {
        product: "노반차품 포랑왕/과운화향 보이생차",
        review:
          "공개 시음 기록에서 노반차품 2014 포랑왕 샘플을 마신 기록이 확인됩니다. 관련 상품 설명에는 포랑왕이 포랑산 고차수 생차로 화향, 고삽미, 회감이 좋고 후발효 소장용으로 추천된다고 소개되며, 과운화향은 열대과일 단맛과 꽃향을 연상시키는 입문용 고수차로 설명됩니다. 독립 소비자 리뷰 반복 확인은 제한적입니다.",
        sentiment: "positive",
        sourceTitle: "노반차품 2014 포랑왕 샘플 시음/동정문화 상품 설명",
        sourceUrl: "https://dongjeong.com/?kboard_content_redirect=6570",
        confidence: "low",
      },
    ],
    H11: [
      {
        product: "덕화요 달항아리/태덕 백자·요변블루 자기",
        review:
          "쿠팡 공개 상품 페이지에서 덕화코리아 판매의 수공예 덕화요 달항아리 제품은 확인되지만 상품평은 0건입니다. 불교박람회 공개 소개에서는 중국 복건성 덕화의 태덕(Taide) 브랜드, 35년 이상 장인의 고급 덕화요 자기 제품으로 설명됩니다.",
        sentiment: "neutral",
        sourceTitle: "쿠팡 덕화요 달항아리 상품 페이지/서울국제불교박람회 덕화코리아 소개",
        sourceUrl: "https://www.coupang.com/vp/products/8158457110",
        confidence: "low",
      },
    ],
    H13: [
      {
        product: "茗扬天下/후코퍼레이션/복경도사 차 제품",
        review:
          "茗扬天下는 중국어권에서 일반 문구·타 브랜드명으로 다수 검색되며, 후코퍼레이션/복경도사와 연결되는 특정 차 제품 공개 리뷰를 신뢰도 있게 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "공개 검색: 茗扬天下 후코퍼레이션 복경도사 차 리뷰",
        sourceUrl: "https://www.google.com/search?q=%22%E8%8C%97%E6%89%AC%E5%A4%A9%E4%B8%8B%22+%ED%9B%84%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98+%EB%B3%B5%EA%B2%BD%EB%8F%84%EC%82%AC+%EC%B0%A8+%EB%A6%AC%EB%B7%B0",
        confidence: "low",
      },
    ],
    C3: [
      {
        product: "흑차·보이차 교육 / 차마카세",
        review:
          "차휴 공식 Instagram 프로필에서 흑차·보이차 전문교육기관과 차마카세 운영이 확인됩니다. 현재 저장된 공개 근거는 공식 SNS 프로필 중심이라 소비자 반복 평가는 보류하고 제품/서비스 확인 사례로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "차휴 Instagram",
        sourceUrl: "https://www.instagram.com/cha.hyu_tea/",
        confidence: "medium",
      },
    ],
    B6: [
      {
        product: "징광잎차",
        review:
          "징광문화 공식 브랜드 페이지에서 보성 금화산 징광다원의 야생차밭, 친환경 재배, 손따기와 전통 고온 덖음차 제조가 확인됩니다. 설명에는 여러 번 우려도 맛과 향이 이어진다는 제품 특성이 포함되어 있습니다.",
        sentiment: "neutral",
        sourceTitle: "징광문화 징광잎차 브랜드 페이지",
        sourceUrl: "https://jingkwang.co.kr/brand/tea.php",
        confidence: "high",
      },
      {
        product: "징광잎차 / 가마금 잎차",
        review:
          "데일리안과 한국경제 공개 기사에서 징광잎차가 자연야생차/무공해 차로 소개되고, 손 덖음과 반복 비비기, 소량 생산 및 높은 가격대, 가마금 잎차 등 제품군이 언급됩니다.",
        sentiment: "neutral",
        sourceTitle: "징광잎차 공개 기사",
        sourceUrl: "https://www.dailian.co.kr/news/view/53546",
        confidence: "medium",
      },
    ],
    F10: [
      {
        product: "청기백기",
        review:
          "Dr.GP by 강남약방 공식몰에서 청기백기 상품후기 143건이 확인됩니다. 공개 제목 기준 미세먼지로 목이 칼칼할 때 한 포씩 챙겨 먹는다는 후기와 자기 전 기침/목 간질거림 관련 사용 경험이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "강남약방 청기백기 공식몰 상품후기",
        sourceUrl: "https://drgp.kr/product/%EC%B2%AD%EA%B8%B0%EB%B0%B1%EA%B8%B0%EB%A1%9C-%EB%A7%91%EC%9D%80-%EB%AA%A9-%EC%A7%80%ED%82%A4%EA%B8%B0/11/category/42/display/1/",
        confidence: "medium",
      },
      {
        product: "청기백기 / 울화찻차",
        review:
          "베이비타임즈 보도에서 2022년 가정의 달 청기백기·울화찻차 최대 50% 프로모션이 확인되고, 공식몰에서는 투맘쇼 X 청기백기 제품 협찬 문구가 확인됩니다. 행사 이력으로 저장하며 현재 차문화대전 현장 이벤트는 별도 확인 전까지 단정하지 않습니다.",
        sentiment: "neutral",
        sourceTitle: "청기백기 프로모션/협찬 공개 자료",
        sourceUrl: "https://www.babytimes.co.kr/news/articleView.html?idxno=56934",
        confidence: "medium",
      },
    ],
    G25: [
      {
        product: "서촌 다심헌 티클래스",
        review:
          "10x10 다심헌 티클래스 페이지에서 녹차, 백차, 황차, 민남/민북/광동/대만 오룡차, 중국홍차, 세계3대홍차, 보이생차, 보이숙차, 말차를 다루는 순환 강의가 확인됩니다. 후기에는 '좋은 경험', '진지하지만 가볍지 않은 수업'이라는 긍정 평가가 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "텐바이텐 서촌 다심헌 티클래스",
        sourceUrl: "https://www.10x10.co.kr/shopping/category_prd.asp?itemid=2394356",
        confidence: "high",
      },
      {
        product: "보이차 다회: 운남 백아차 / 경매고수생차 / 노반장차왕지 / 1985 맹해병차",
        review:
          "공개 블로그 다회 리뷰에서 운남 백아차는 꽃향과 부드러움, 2022 경매고수생차는 산뜻한 쌉쌀함, 2021 노반장차왕지는 난꽃향과 긴 여운, 1985 맹해병차는 오래된 향과 강한 감칠맛·단맛으로 기록되어 있습니다.",
        sentiment: "positive",
        sourceTitle: "다심헌 보이차 다회 리뷰",
        sourceUrl: "https://blasius.tistory.com/m/174",
        confidence: "medium",
      },
    ],
    E20: [
      {
        product: "미니 3인 다기",
        review:
          "다솔도예 공식 Instagram 게시물에서 미니 3인 다기 제품명이 확인됩니다. 댓글은 이모지/응원 중심이라 반복 소비자 평가는 보류하고 제품 확인 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "다솔도예 Instagram 미니 3인 다기",
        sourceUrl: "https://www.instagram.com/p/DTnLklYCbWO/",
        confidence: "medium",
      },
      {
        product: "회접시/꽂이, 용 스탠드, 도자기 디퓨저",
        review:
          "다솔도예 공개 Instagram 게시물들에서 회접시/꽂이, 용 스탠드, 도자기 디퓨저 작업과 긍정 댓글이 확인됩니다. 제품별 판매 리뷰보다는 SNS 공개 반응으로 낮은 신뢰도로 저장합니다.",
        sentiment: "positive",
        sourceTitle: "다솔도예 Instagram 작품 게시물",
        sourceUrl: "https://www.instagram.com/dasoldoye/",
        confidence: "low",
      },
    ],
    E21: [
      {
        product: "반려동물 육각 보석함",
        review:
          "아이디어스 파란나비공방 판매 페이지에서 반려동물 초상화 기반 주문제작 보석함/오브제 판매와 후기 탭이 확인됩니다. 공개 검색 결과상 평점 5.0과 후기 2건이 확인되지만, 본문 접근 범위가 제한적이라 제품 확인과 제한적 긍정 사례로 저장합니다.",
        sentiment: "positive",
        sourceTitle: "아이디어스 파란나비공방 판매 작품",
        sourceUrl: "https://www.idus.com/v2/artist/ddff5377-002f-4a1f-a0de-8628ae557c1e/product",
        confidence: "medium",
      },
      {
        product: "해주항아리 모티브 디저트볼/수저받침/찻잔 겸용 기물",
        review:
          "파란나비공방 공개 Instagram 공모전 게시물에서 해주항아리 모티브의 디저트볼, 수저받침, 찻잔 겸용 기물 설명과 긍정 댓글이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "파란나비공방 Instagram 공모전 게시물",
        sourceUrl: "https://www.instagram.com/p/CdN0E_DJYbB/",
        confidence: "low",
      },
    ],
    E26: [
      {
        product: "무유 매화 다관 150cc",
        review:
          "공부차 상품 페이지에서 효향요 이인수의 무유 매화 다관이 확인됩니다. 설명에는 경북 칠곡 효향요, 장작가마 40시간 내외 재날림, 매화 장식의 자연유 효과가 명시되어 있으며 리뷰는 0건으로 표시됩니다.",
        sentiment: "neutral",
        sourceTitle: "공부차 효향요 이인수 무유 매화 다관",
        sourceUrl: "https://www.gongboocha.com/shop/item.php?it_id=1746497598",
        confidence: "high",
      },
      {
        product: "분청 무유 찻잔",
        review:
          "공부차 상품 페이지에서 효향요 이인수 분청 무유 찻잔 판매가 확인됩니다. 제품 특성은 분청/무유 계열 차도구 확인 근거로 저장하고, 반복 소비자 평가는 별도 확인 전까지 보류합니다.",
        sentiment: "neutral",
        sourceTitle: "공부차 효향요 이인수 분청 무유 찻잔",
        sourceUrl: "https://www.gongboocha.com/shop/item.php?it_id=1746593110",
        confidence: "medium",
      },
    ],
    H16: [
      {
        product: "宜兴知了文化创意有限公司 다기/자사호 제품",
        review:
          "顺企网 공개 사업자 페이지에서 2015년 설립된 이싱 소재 업체로 확인되며, 영업범위에 문화창의 디자인과 紫砂制品·공예품·조각 판매가 포함됩니다. 제품별 소비자 리뷰나 공식 SNS는 아직 확인되지 않아 사업자/취급품목 확인 근거로만 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "顺企网 宜兴知了文化创意有限公司 업체 정보",
        sourceUrl: "https://www.11467.com/qiye/47068146.htm",
        confidence: "medium",
      },
    ],
    H19: [
      {
        product: "茶樽陶瓷公司 도자/다기 제품",
        review:
          "정확한 회사명 및 茶樽陶瓷 관련 키워드로 공개 검색했으나 특정 도자·다기 제품의 소비자 리뷰나 반복 언급을 확인하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "공개 검색: 茶樽陶瓷公司 다기 리뷰",
        sourceUrl: "https://www.google.com/search?q=%22%E8%8C%B6%E6%A8%BD%E9%99%B6%E7%93%B7%E5%85%AC%E5%8F%B8%22+%E8%8C%B6%E5%85%B7+%E8%AF%84%E4%BB%B7",
        confidence: "low",
      },
    ],
    B15: [
      {
        product: "화이트 밀크티 시럽 (300g)",
        review:
          "티팔레트 공식몰 REVIEW 게시판에서 화이트 밀크티 시럽에 대해 '이런 향의 밀크티는 처음이예요'라는 상품 사용후기가 확인됩니다. 리뷰 수가 적어 반복 평가로 일반화하지 않고 제품별 확인 사례로 저장합니다.",
        sentiment: "positive",
        sourceTitle: "티팔레트 공식몰 REVIEW",
        sourceUrl: "https://teapalette.cafe24.com/board/review/4/",
        confidence: "medium",
      },
      {
        product: "썸머티시럽세트 - 밀크티시럽 & 레몬애플티시럽",
        review:
          "티팔레트 공식몰 REVIEW 게시판에서 썸머티시럽세트에 대해 '티 뱅쇼 시럽' 제목의 상품 사용후기가 확인됩니다. 공개 게시판 기준 제품 사용 흔적은 있으나 본문 상세와 반복 언급은 제한적입니다.",
        sentiment: "neutral",
        sourceTitle: "티팔레트 공식몰 REVIEW",
        sourceUrl: "https://teapalette.cafe24.com/board/review/4/",
        confidence: "medium",
      },
    ],
    A7: [
      {
        product: "The Flower / 티플라워(다화) 도서·전시 자료",
        review:
          "YES24 상품 페이지에서 일양차문화연구원 저자, 다화일여의 찻자리 꽃, 348쪽, 판매가 44,100원, 리뷰/한줄평 0건이 확인됩니다. 소비자 리뷰가 아니라 티플라워/다화 자료 확인 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "YES24 The Flower 일양차문화연구원",
        sourceUrl: "https://www.yes24.com/product/goods/126807938",
        confidence: "high",
      },
    ],
    A48: [
      {
        product: "싱잉볼·크리스탈싱잉볼·명상 교육",
        review:
          "젠테라피 공식 소개와 젠힐링샵/BEXPO 공개 자료에서 싱잉볼, 크리스탈싱잉볼, 띵샤, 차임, 천연원석, 명상/힐링 교육이 확인됩니다. 2026 국제차문화대전 전용 이벤트는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "젠테라피 공식 소개 / 젠힐링샵",
        sourceUrl: "https://zentherapy.co.kr/about/",
        confidence: "high",
      },
    ],
    A10: [
      {
        product: "대구 국제통상 시음회 참가",
        review:
          "공부차 공개 시음회 후기에서 한국 차산업 경영인 협회 초대 시음회 참가 업체로 '대구 국제통상'이 확인됩니다. 공식 채널과 제품군은 확인되지 않아 태그와 리뷰 평가는 보류합니다.",
        sentiment: "neutral",
        sourceTitle: "공부차 시음회 후기",
        sourceUrl: "https://www.gongboocha.com/bbs/board.php?bo_table=gongboo_3&wr_id=182",
        confidence: "medium",
      },
    ],
    F2: [
      {
        product: "경위복차 / 복전차 / 티메이커",
        review:
          "BEXPO 공개 정보와 공식 Modoo에서 경위복차, 익생 티백 복차, 경전복방, 경전 1368, 수제 복전차와 전용 티메이커가 확인됩니다. Brunch 후기에서는 티 페어링 맥락에서 경위복차 맛 언급이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "경위복차 BEXPO / Brunch 후기",
        sourceUrl: "https://brunch.co.kr/%40%405AcO/75",
        confidence: "medium",
      },
    ],
    E2: [
      {
        product: "방짜유기 차도구 / 연꽃 물다기 / 찻잔 세트",
        review:
          "BEXPO와 유기샵에서 김천방짜유기 명인 이운형의 방짜유기 생활식기, 차도구, 물다기, 찻잔 세트가 확인됩니다. 파이낸셜뉴스 보도에서 백년소공인 선정 이력도 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "김천방짜유기 공식몰 / 백년소공인 보도",
        sourceUrl: "https://www.fnnews.com/news/202108191053394276",
        confidence: "high",
      },
    ],
    F32: [
      {
        product: "공개 자료 확인 필요",
        review:
          "HaDa design(하다디자인) 부스 업체로 확정 가능한 공식 채널, 제품군, 소비자 리뷰를 공개 자료에서 확인하지 못했습니다. 동명·유사 상호가 섞여 있어 근거 없는 업체 설명은 표시하지 않습니다.",
        sentiment: "neutral",
        sourceTitle: "공개 자료 부족",
        confidence: "low",
      },
    ],
    A17: [
      {
        product: "판화 / 실크스크린 에디션",
        review:
          "가현아트 공식 홈페이지에서 작가 협업 판화 작품을 기획·제작한다고 확인됩니다. 오늘의집 공개 목록에서는 김동유 작가 실크스크린 판화 판매가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "가현아트 공식 홈페이지 / 오늘의집",
        sourceUrl: "https://www.gahyunart.com/",
        confidence: "high",
      },
    ],
    E4: [
      {
        product: "한방꽃차 / 꽃차 제다 교육",
        review:
          "카페쇼 디렉토리에서 차/한방차 전시 품목이 확인되고, 연세대 미래교육원 과정에서 꽃차·잎차·뿌리차·열매차 제다 교육이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "카페쇼 디렉토리 / 연세대 미래교육원",
        sourceUrl: "https://www.cafeshow.com/kor/directory/exhibitor_view.asp?idx=1517",
        confidence: "high",
      },
    ],
    A9: [
      {
        product: "중국차 / 1g 체험차 / 다구",
        review:
          "공부차파크 공식 페이지에서 100가지 이상 차와 1g 체험차가 확인됩니다. 다이닝코드 후기에서는 다기류가 많고 공간 만족도가 높다는 방문자 언급이 확인됩니다.",
        sentiment: "positive",
        sourceTitle: "다이닝코드 공부차파크 과천 청계산점",
        sourceUrl: "https://www.diningcode.com/profile.php?rid=3F9y6tcIaG2J",
        confidence: "high",
      },
    ],
    D29: [
      {
        product: "FLAWER 2403V / 結莟 도자 작품",
        review:
          "서울공예박물관 전시 페이지와 서울문화포털 인터뷰에서 김동인 작가의 도자 작품과 결함을 작품 가치로 전환하는 작업 맥락이 확인됩니다. 소비자 리뷰가 아니라 전시/작가 근거입니다.",
        sentiment: "neutral",
        sourceTitle: "서울공예박물관 김동인 結莟",
        sourceUrl: "https://semocaexhibition.com/2024-08-ba-05-kim-dongin/",
        confidence: "high",
      },
    ],
    B27: [
      {
        product: "백자 다도구 / 백유 열매 3인 다기 세트",
        review:
          "도농도예 공식 홈페이지에서 백자소지 기반 다도구와 현대적 조선백자 디자인이 확인됩니다. 취다선 상품 페이지에서는 백유 열매 3인 다기 세트가 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "도농도예 공식 홈페이지 / 취다선",
        sourceUrl: "https://donongceramic.com/",
        confidence: "high",
      },
    ],
    H25: [
      {
        product: "자사호 / 중국 차 도구 전시",
        review:
          "석우연담과 월간 차문화 자료에서 명·청·민국 시기의 자사호와 중국차 다기 전시/특강 맥락이 확인됩니다. 제품별 구매후기라기보다 전시·교육 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "석우연담 고전문화 자사호 전시",
        sourceUrl: "https://seoku.tistory.com/728",
        confidence: "high",
      },
    ],
    H26: [
      {
        product: "한지사 금침 / 명상방석 / 침구",
        review:
          "한국섬유신문 인터뷰에서 계절사이로의 천연소재 침구와 오방 금침이 소개되고, 사람인 기업정보에서 침구 및 관련제품 제조업이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "한국섬유신문 계절사이로 인터뷰",
        sourceUrl: "https://www.ktnews.com/news/articleView.html?idxno=132491",
        confidence: "high",
      },
    ],
    A36: [
      {
        product: "소반 / 찻상 / 나주반",
        review:
          "대림목공예 공식 홈페이지에서 소반, 찻상, 호족반, 나주반, 제기, 원목가구가 확인됩니다. 제품 리뷰는 공식몰 내 일부 상품 리뷰 영역 기준으로 추가 확인이 필요합니다.",
        sentiment: "neutral",
        sourceTitle: "대림목공예 공식 홈페이지",
        sourceUrl: "https://dl.co.kr/",
        confidence: "high",
      },
    ],
    E1: [
      {
        product: "꽃차세트 / 티백 / 식용꽃 체험",
        review:
          "꽃차 하늘바라기 공식몰과 농사로 체험농장 정보에서 꽃차세트, 티백, 식용꽃 재배와 꽃차 만들기 체험이 확인됩니다. 공개 보도에서 대통령 표창 이력도 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "꽃차 하늘바라기 공식몰 / 농사로",
        sourceUrl: "https://myflowertea.com/_wg/import/sub/page_03.html",
        confidence: "high",
      },
    ],
    E24: [
      {
        product: "농차 다기세트 / 백자 찻잔 / 개완",
        review:
          "영산요 공식몰에서 도예명장 제2023-01호 박정규 명의의 백자 찻잔, 농차 다기세트, 개완, 달항아리, 화병 상품군이 확인됩니다. 제품별 독립 리뷰는 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "영산요 공식몰 농차 다기세트",
        sourceUrl: "https://yeongsanyo.com/product/%EB%86%8D%EC%B0%A8-%EB%8B%A4%EA%B8%B0%EC%84%B8%ED%8A%B8/42/",
        confidence: "high",
      },
    ],
    D23: [
      {
        product: "도유가 명장 2인기 / 차그릇",
        review:
          "여주신문 보도에서 도유가 문찬석 도예명장 맥락이 확인되고, 쌍계명차 상품 목록에서 도유가 명장 2인기 등 차도구 상품군이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "여주신문 도유가 문찬석",
        sourceUrl: "https://www.yeojunews.co.kr/news/articleView.html?idxno=44084",
        confidence: "high",
      },
    ],
    C17: [
      {
        product: "덤벙분청다완 / 달항아리 / 미리내사발",
        review:
          "도자공간 빛살 임영주 작가 자료에서 달항아리, 미리내사발, 덤벙분청다완, 무유항아리 등이 확인됩니다. '도자기마을'과 '빛살'의 관계는 추가 검증 대상으로 남겨둡니다.",
        sentiment: "neutral",
        sourceTitle: "도자공간 빛살 임영주",
        sourceUrl: "https://spp5908.tistory.com/10413",
        confidence: "medium",
      },
    ],
    A20: [
      {
        product: "무쇠다구 / 차덖음솥 / 무쇠탕관",
        review:
          "동원공방 정혜주 작가 공개 프로필에서 무쇠다구, 무쇠솥, 이동식 무쇠 차덖음솥, 다로·다정, 화로, 무쇠탕관 등이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "동원공방 정혜주 프로필",
        sourceUrl: "https://spp5908.tistory.com/9981",
        confidence: "high",
      },
    ],
    F28: [
      {
        product: "양구백자다기 / 파란물결잔 / 백색물결병",
        review:
          "KCDF 공예트렌드페어와 공개 프로필에서 드내뜰/이종주의 도자기 작업과 양구백자다기, 물결 계열 도자 제품이 확인됩니다. 브런치 후기에서는 양구백자 화병 사용 경험이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "KCDF 드내뜰 / 브런치 양구백자 후기",
        sourceUrl: "https://brunch.co.kr/%40%40AcK/57",
        confidence: "medium",
      },
    ],
    C27: [
      {
        product: "생활도자기 / 차 관련 도자기 / 향도체험",
        review:
          "Wello 문경 지역 기사에서 라키모가 생활도자기와 차 관련 도자기, 도자기·향도·차 체험 공간으로 소개됩니다. 문경찻사발축제 글에서도 라키모 차도구 언급이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "Wello 라키모 체험공간",
        sourceUrl: "https://www.welfarehello.com/community/hometownNews/%EA%B2%BD%EB%B6%81-%EC%B2%B4%ED%97%98-%ED%96%A5%EB%8F%84%EC%B2%B4%ED%97%98%EC%9D%84-%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%8A%B9%EB%B3%84%ED%95%9C-%EA%B3%B5%EA%B0%84-%EB%9D%BC%ED%82%A4%EB%AA%A8--c77f14e1-db44-4841-8da3-d09550a13fee",
        confidence: "high",
      },
    ],
    C6: [
      {
        product: "침향발효차 / 황장무밀 / 무밀침향병차",
        review:
          "로전 공식몰과 동아일보 보도에서 침향발효차, 황장무밀, 무밀침향병차, 우전 노녹차가 확인됩니다. 제품 리뷰보다 공식 제품군 확인 근거로 저장합니다.",
        sentiment: "neutral",
        sourceTitle: "로전 공식몰 / 동아일보",
        sourceUrl: "https://m.rozeon.com/",
        confidence: "high",
      },
    ],
    A26: [
      {
        product: "다기 / 다도체험 / 도자기",
        review:
          "예스파크 공개 업체 정보에서 매원초가의 다기, 다도체험, 전통/현대 다기, 도자기 작업이 확인됩니다. 백자다관 중고 판매 글은 제품 실재 참고 근거로만 보조 확인했습니다.",
        sentiment: "neutral",
        sourceTitle: "예스파크 매원초가",
        sourceUrl: "https://www.2000yespark.or.kr/intro_2022/intro.php?mode=view&page=1&sp=sabujak&store_idx=76",
        confidence: "high",
      },
    ],
    D7: [
      {
        product: "우전 / 세작 / 발효차 / 감잎차",
        review:
          "명성다원 공식몰과 관광/판매품목 정보에서 우전, 세작, 발효차, 감잎차, 산뽕잎차, 쑥차 등 하동차 제품군이 확인됩니다. 공개 제품별 리뷰 본문은 충분히 확보하지 못했습니다.",
        sentiment: "neutral",
        sourceTitle: "명성다원 공식 상품 페이지",
        sourceUrl: "https://m.msgreentea.kr/product/list.html?cate_no=24",
        confidence: "high",
      },
    ],
    A12: [
      {
        product: "야생작설차 / 무차 사각티백 / 허니 블랙티",
        review:
          "카페&베이커리페어 참가 정보와 스마트스토어에서 야생작설차 청향/순향, 무차 스틱/사각티백, 허니 블랙티가 확인됩니다. 쿠팡 공개 상품 페이지도 무차 상품 유통 근거로 확인했습니다.",
        sentiment: "neutral",
        sourceTitle: "무차 moocha 공개 전시 정보",
        sourceUrl: "https://m.cafenbakeryfair.com/shop_contents/myboard_list.htm?category_idx=176056&myboard_code=st_lecture",
        confidence: "high",
      },
    ],
    F25: [
      {
        product: "차도기 / 나무 결합 도자기",
        review:
          "모동도예 윤관영 작가 보도와 공개 업체 정보에서 차도기, 도자기, 나무 손잡이 결합 도자기, 커피 도구가 확인됩니다. Tripinfo 축제성 글은 작품 노출 보조 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "뉴스타운 모동도예 윤관영 작가",
        sourceUrl: "https://www.newstown.co.kr/news/articleView.html?idxno=254762",
        confidence: "high",
      },
    ],
    F31: [
      {
        product: "매화 다관 / 다기",
        review:
          "2024 국제차문화대전 후기에서 모을 황선회도방 매화 다관 언급이 확인됩니다. 기존 공개 전시/수상 자료와 함께 도예 차도구 근거로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "2024 국제차문화대전 후기",
        sourceUrl: "https://honeybee-home.tistory.com/entry/2024-%EA%B5%AD%EC%A0%9C%EC%B0%A8%EB%AC%B8%ED%99%94%EB%8C%80%EC%A0%84-%EC%BD%94%EC%97%91%EC%8A%A4-%EC%B0%A8%EB%B0%95%EB%9E%8C%ED%9A%8C-%ED%9B%84%EA%B8%B0",
        confidence: "medium",
      },
    ],
    B21: [
      {
        product: "몽탄갤러리 차 도구",
        review:
          "BEXPO 공개 전시관에서 몽탄갤러리의 출품품목이 차 도구로 확인되고, 공식 Instagram 채널이 확인됩니다. 제품별 독립 리뷰는 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "몽탄갤러리 BEXPO 전시관",
        sourceUrl: "https://www.bexpo.kr/home/main?cid=368",
        confidence: "medium",
      },
    ],
    E13: [
      {
        product: "채색찻잔 / 채색 개완 / 분청 무무다관",
        review:
          "청백원 카테고리에서 무무요 이용무의 채색찻잔, 채색 개완, 숙우, 3인 다기세트가 확인되고, 도이 상품 페이지에서 분청 무무다관과 꼬마잔이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "청백원 무무요 이용무",
        sourceUrl: "https://cbw.co.kr/category/%EB%AC%B4%EB%AC%B4%EC%9A%94-%EC%9D%B4%EC%9A%A9%EB%AC%B4/173/",
        confidence: "high",
      },
    ],
    D14: [
      {
        product: "Muae Tea / 동이차 / 압착차",
        review:
          "Paris Tea Festival 공개 참가 목록과 LinkedIn 공개 프로필에서 Muae Tea 및 compressed Dongi-cha workshop 언급이 확인됩니다. 공부차 공개 자료의 하동차/후발효 긴압차 근거와 함께 한국차 계열로 저장했습니다.",
        sentiment: "neutral",
        sourceTitle: "Paris Tea Festival / Muae Tea",
        sourceUrl: "https://www.paristeafestival.com/en",
        confidence: "medium",
      },
    ],
    A1: [
      {
        product: "녹차 / 보이차 / 차도구",
        review:
          "BEXPO 공개 전시관에서 무유다원의 녹차, 보이차, 차도구 출품품목이 확인됩니다. 월간 차문화 기사에서 심상남 대표와 장작불/무쇠솥 덖음차 맥락도 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "월간 차문화 무유다원 심상남 대표",
        sourceUrl: "https://www.teaculture.co.kr/news/articleView.html?idxno=1901",
        confidence: "high",
      },
    ],
    H19: [
      {
        product: "H19 공식 부스명: 森粹陶瓷公司",
        review:
          "티뉴스 부스목록 이미지에서 H19 업체명이 森粹陶瓷公司로 확인되어 기존 茶樽陶瓷公司 표기를 교정했습니다. 제품 상세, 공식 SNS, 소비자 리뷰, 논란 근거는 공개 검색에서 연결 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "high",
      },
    ],
    C19: [
      {
        product: "도자공방 산이리 / 옹기·분청·차 도구",
        review:
          "도자공방 산이리 Linktree와 예스파크 공개 정보에서 전통기법 기반 생활 도자기, 옹기, 분청, 차 도구 작업이 확인됩니다. 제품별 독립 소비자 리뷰는 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "예스파크 산이리 도자공방",
        sourceUrl: "https://2000yespark.or.kr/intro_2022/intro.php?mode=view&page=1&sp=star&store_idx=218",
        confidence: "high",
      },
    ],
    C21: [
      {
        product: "Bonida functional teaware",
        review:
          "MarketBz에서 세라믹 보니다 사업자 정보가 확인되고, Jinsoo Lee 인터뷰에서 Bonida가 functional teaware 브랜드이며 Instagram @ceramic_bonida를 운영한다고 확인됩니다. 제품별 소비자 리뷰는 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "Shoutout LA Jinsoo Lee / Bonida interview",
        sourceUrl: "https://shoutoutla.com/meet-jinsoo-lee-ceramic-artist/",
        confidence: "medium",
      },
    ],
    C14: [
      {
        product: "노전요 짜이컵",
        review:
          "CITEA PEOPLE 공개 자료에서 노전요 SNS 핸들이 확인되고, 더티레터 행사 소개에서 노전요 짜이컵이 확인됩니다. 공식몰과 반복 리뷰는 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "더티레터 노전요 짜이컵",
        sourceUrl: "https://stibee.com/api/v1.0/emails/share/MWozeMgcSZ3rzHO2fSmJXxGRqXgmoFg",
        confidence: "medium",
      },
    ],
    D13: [
      {
        product: "상선차 / 우전 / 금강나래 발효차 / 감잎차",
        review:
          "BEXPO 공개 정보에서 지리산 상선암차의 상선차, 특우전, 우전, 금강나래 발효차, 감잎차, 백련잎차, 산뽕잎차 등이 확인됩니다. 제품별 소비자 반복 리뷰는 아직 충분하지 않습니다.",
        sentiment: "neutral",
        sourceTitle: "지리산 상선암차 BEXPO 상품",
        sourceUrl: "https://www.bexpo.kr/home/main?cid=66",
        confidence: "high",
      },
    ],
    C18: [
      {
        product: "백자 다기 풀세트 / 개완 / 찻잔",
        review:
          "누보도예 BEXPO 자료와 업체 정보에서 다기, 찻사발, 찻잔, 다화병, 다식접시, 백자 다기 풀세트, 개완이 확인됩니다. 월간 차문화에서는 해남전국차도구공모전 대상 이력이 확인됩니다.",
        sentiment: "neutral",
        sourceTitle: "월간 차문화 누보도예 차도구공모전 대상",
        sourceUrl: "https://www.teaculture.co.kr/news/articleView.html?idxno=1803",
        confidence: "high",
      },
    ],
    G10: [
      {
        product: "다견원 일본 말차 / 센차 / 호지차",
        review:
          "다도방과 세경다도방 공개 상품에서 제조원 다견원 표기의 일본 말차와 센차가 확인되고, 쿠팡 다견원 일본 호지차 상품평 5건 표시가 확인됩니다. 공식 채널은 아직 확인되지 않았습니다.",
        sentiment: "neutral",
        sourceTitle: "다견원 일본 센차 상품",
        sourceUrl: "https://jaok.co.kr/product/%EB%8B%A4%EA%B2%AC%EC%9B%90-%EC%9D%BC%EB%B3%B8%EB%85%B9%EC%B0%A8-%EC%84%BC%EC%B0%A8-100g%EC%9E%8E%EC%B0%A8%EC%A0%84%EC%B0%A8/150",
        confidence: "medium",
      },
    ],
    E25: [
      {
        product: "E25 공식 부스명: 더세드",
        review:
          "티뉴스 부스목록 이미지에서 E25 더세드 참가가 확인됩니다. 더세드/더시드/THE SED tea 조합의 공개 검색에서는 업체와 직접 연결되는 공식 채널, 제품군, 리뷰를 확인하지 못했습니다.",
        sentiment: "screened",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "medium",
      },
    ],
    B23: [
      {
        product: "B23 공식 부스명: 뚠델로공방",
        review:
          "티뉴스 부스목록 이미지에서 B23 뚠델로공방 참가가 확인됩니다. 뚠델로/툰델로/둔델로/뚜델로 공방 조합의 공개 검색에서는 업체와 직접 연결되는 공식 채널, 제품군, 리뷰를 확인하지 못했습니다.",
        sentiment: "screened",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "medium",
      },
    ],
    H27: [
      {
        product: "H27 공식 부스명: 반길고리",
        review:
          "티뉴스 부스목록 이미지에서 H27 반길고리 참가가 확인됩니다. 반길고리/반짇고리와 공예·차도구·SNS 조합의 공개 검색에서는 업체와 직접 연결되는 제품군/리뷰 근거를 확인하지 못했습니다.",
        sentiment: "screened",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "medium",
      },
    ],
    A30: [
      {
        product: "A30 공식 부스명: 연담",
        review:
          "티뉴스 부스목록 이미지에서 A30 연담 참가가 확인됩니다. 연담/언담과 다기·도예·차도구·SNS 조합의 공개 검색 결과는 동명 무관 결과가 많아 부스 업체 제품/리뷰로 확정하지 않았습니다.",
        sentiment: "screened",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "medium",
      },
    ],
    A8: [
      {
        product: "A8 공식 부스명: 위계차",
        review:
          "티뉴스 부스목록 이미지에서 A8 위계차 참가가 확인됩니다. 위계차/우계차/雨季茶 검색 결과는 일반 용어와 보이차 계절 용어가 섞여 있어 부스 업체 제품/리뷰로 확정하지 않았습니다.",
        sentiment: "screened",
        sourceTitle: "티뉴스 국제차문화대전 부스목록 이미지",
        sourceUrl: "http://www.teanews.com/attach/20260526/1779764692.jpg",
        confidence: "medium",
      },
    ],
  };

  const TAG_RULES = [
    { tag: "#도예", terms: ["도예", "도요", "도방", "도자", "백자", "청자", "토기", "세라믹", "陶"] },
    { tag: "#차도구", terms: ["다기", "찻잔", "차공간", "차도구", "차문화콘텐츠", "茶具", "壶"] },
    { tag: "#보관용기", terms: ["진공밀폐", "밀폐용기", "보관통", "원두보관", "사료보관"] },
    { tag: "#한국차", terms: ["한국차", "제주", "보성", "하동", "청태전", "녹차", "다원", "제다", "차농"] },
    { tag: "#중국차", terms: ["중국", "CHINA", "北京", "宜兴", "普洱", "武夷", "YIN TEA", "尹茶人"] },
    { tag: "#대만차", terms: ["대만", "臺灣", "台湾", "TAIWAN"] },
    { tag: "#일본차", terms: ["일본차", "일본 말차", "일본말차", "MATCHA", "抹茶"] },
    { tag: "#보이차", terms: ["보이", "普洱", "푸얼"] },
    { tag: "#생차", terms: ["생차", "청병", "生茶"] },
    { tag: "#숙차", terms: ["숙차", "熟茶"] },
    { tag: "#고수차", terms: ["고수차", "고차수", "노반장", "반장", "古树", "古樹"] },
    { tag: "#우롱차", terms: ["우롱", "오룡", "烏龍", "乌龙", "무이", "武夷"] },
    { tag: "#암차", terms: ["암차", "岩茶", "武夷岩茶"] },
    { tag: "#녹차", terms: ["녹차", "그린티", "GREEN TEA"] },
    { tag: "#황차", terms: ["황차", "황아차"] },
    { tag: "#발효차", terms: ["발효차", "청태전"] },
    { tag: "#홍차", terms: ["홍차", "BLACK TEA", "스리랑카", "실론", "밀크티"] },
    { tag: "#실론티", terms: ["실론", "CEYLON", "LANKA TEAS"] },
    { tag: "#스리랑카홍차", terms: ["스리랑카", "랑카티스", "LANKA"] },
    { tag: "#흑차", terms: ["흑차", "黑茶"] },
    { tag: "#백차", terms: ["백차", "WHITE TEA"] },
    { tag: "#말차", terms: ["말차", "MATCHA", "抹茶"] },
    { tag: "#청태전", terms: ["청태전"] },
    { tag: "#떡차", terms: ["떡차", "청태전"] },
    { tag: "#대용차", terms: ["대용차", "꽃차", "화차", "花茶", "프로폴리스", "연잎차", "쑥차", "건강차", "과일차", "허브", "HERB", "루이보스", "히비스커스"] },
    { tag: "#생강차", terms: ["생강차", "생강원액", "생강"] },
    { tag: "#도라지차", terms: ["도라지차", "홍도라지", "도라지"] },
    { tag: "#행사이벤트", terms: ["행사이벤트", "차문화대전이벤트", "현장이벤트", "이벤트"] },
    { tag: "#현장시음", terms: ["현장시음", "시음"] },
    { tag: "#현장할인", terms: ["현장할인", "할인", "특가"] },
    { tag: "#현장증정", terms: ["현장증정", "증정", "사은품"] },
    { tag: "#사전예약", terms: ["사전예약", "예약"] },
    { tag: "#싱잉볼", terms: ["싱잉볼", "SINGING BOWL"] },
    { tag: "#명상", terms: ["명상", "힐링", "사운드배스", "요가"] },
    { tag: "#천연염색", terms: ["천연염색", "감물염색", "쪽빛", "염색"] },
    { tag: "#섬유공예", terms: ["섬유", "스카프", "한지사", "직물", "침구", "모자", "의류"] },
    { tag: "#공예", terms: ["공방", "공예", "목공", "옻칠", "금속", "실크", "싱잉볼", "힐링", "인센스", "디자인"] },
    { tag: "#교육", terms: ["대학교", "대학원", "연구원", "연구소", "보존회", "교육", "콘텐츠학과"] },
    { tag: "#문화단체", terms: ["협회", "협동조합", "문화협회", "진흥원", "홍보관", "문화", "공사"] },
  ];

  const PRODUCT_LABELS = [
    { label: "차", tags: ["#한국차", "#중국차", "#대만차", "#일본차", "#보이차", "#우롱차", "#녹차", "#홍차", "#백차", "#황차", "#흑차", "#발효차", "#말차", "#호지차", "#야생차", "#대용차"] },
    { label: "보관용기", tags: ["#보관용기"] },
    { label: "도예/공예품", tags: ["#도예", "#공예", "#싱잉볼", "#천연염색", "#섬유공예"] },
    { label: "명상/힐링 프로그램", tags: ["#명상"] },
    { label: "교육/문화 프로그램", tags: ["#교육", "#문화단체"] },
  ];

  const TEA_TAGS = new Set([
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
    "#보관용기",
    "#싱잉볼",
    "#명상",
  ]);

  const TAG_ALIASES = new Map([
    ["#오룡차", "#우롱차"],
    ["#무이암차", "#우롱차"],
    ["#암차", "#우롱차"],
    ["#대홍포", "#우롱차"],
    ["#봉황단총", "#우롱차"],
    ["#동방미인", "#우롱차"],
    ["#금훤", "#우롱차"],
    ["#사계춘", "#우롱차"],
    ["#청차", "#우롱차"],
    ["#우전", "#녹차"],
    ["#세작", "#녹차"],
    ["#작설차", "#녹차"],
    ["#용정차", "#녹차"],
    ["#제주차", "#한국차"],
    ["#하동차", "#한국차"],
    ["#전통차", "#한국차"],
    ["#실론티", "#홍차"],
    ["#스리랑카홍차", "#홍차"],
    ["#금준미", "#홍차"],
    ["#기문홍차", "#홍차"],
    ["#생차", "#보이차"],
    ["#숙차", "#보이차"],
    ["#고수차", "#보이차"],
    ["#빙도", "#보이차"],
    ["#교목차", "#보이차"],
    ["#대익", "#보이차"],
    ["#안화흑차", "#흑차"],
    ["#아포차", "#흑차"],
    ["#향죽림", "#흑차"],
    ["#청태전", "#발효차"],
    ["#떡차", "#발효차"],
    ["#잭살", "#발효차"],
    ["#청귤병차", "#대용차"],
    ["#자스민차", "#녹차"],
    ["#밀크티", "#홍차"],
    ["#루이보스", "#대용차"],
    ["#생강차", "#대용차"],
    ["#도라지차", "#대용차"],
    ["#주스", "#대용차"],
    ["#현장할인", "#행사이벤트"],
    ["#현장증정", "#행사이벤트"],
    ["#사전예약", "#행사이벤트"],
    ["#팝업", "#행사이벤트"],
    ["#티클래스", "#교육"],
    ["#티투어", "#교육"],
    ["#백자", "#도예"],
    ["#분청", "#도예"],
    ["#청화백자", "#도예"],
    ["#나전칠기", "#옻칠"],
    ["#생활소품", "#공예"],
  ]);

  const HIDDEN_TAGS = new Set([
    "#행사이벤트",
    "#다기",
    "#차도구",
    "#자사호",
    "#차고",
    "#티웨어",
    "#현장시음",
    "#현장할인",
    "#현장증정",
    "#사전예약",
    "#팝업",
    "#7542",
    "#7572",
    "#티백",
  ]);

  function normalizeTag(tag) {
    if (!tag || HIDDEN_TAGS.has(tag)) {
      return null;
    }
    const normalized = TAG_ALIASES.get(tag) || tag;
    return HIDDEN_TAGS.has(normalized) ? null : normalized;
  }

  function normalizeTags(tags) {
    return Array.from(new Set((tags || []).map(normalizeTag).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, "ko")
    );
  }

  function normalizeText(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  function guessCategory(name) {
    const upper = name.toUpperCase();
    const match = CATEGORY_RULES.find((rule) => rule.terms.some((term) => upper.includes(term.toUpperCase())));
    return match ? match.category : "기타/검수필요";
  }

  function parseRows() {
    const seen = new Set();
    return VENDOR_ROWS.trim()
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const delimiter = line.indexOf("|");
        return {
          boothId: line.slice(0, delimiter).trim(),
          name: normalizeText(line.slice(delimiter + 1)),
        };
      })
      .filter((row) => {
        const key = `${row.boothId}|${row.name}`;
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      });
  }

  function socialPlatformFor(url) {
    const value = String(url || "").toLowerCase();
    if (value.includes("instagram.com")) return "instagram";
    if (value.includes("facebook.com") || value.includes("fb.com")) return "facebook";
    if (value.includes("youtube.com") || value.includes("youtu.be")) return "youtube";
    if (value.includes("band.us")) return "band";
    if (value.includes("pf.kakao.com")) return "kakao";
    if (value.includes("blog.naver.com")) return "naver-blog";
    if (value.includes("cafe.naver.com")) return "naver-cafe";
    if (value.includes("linktr.ee") || value.includes("linktree")) return "linktree";
    return null;
  }

  function normalizeSearchQuery(value) {
    const original = normalizeText(value);
    const parenText = Array.from(original.matchAll(/\(([^)]+)\)|（([^）]+)）/g))
      .map((match) => match[1] || match[2])
      .map((segment) => segment.replace(/[^\p{Letter}\p{Number}\s.-]/gu, " ").replace(/\s+/g, " ").trim())
      .filter((segment) => segment && !/^(주|사|재|유)$/i.test(segment))
      .join(" ");
    const cleaned = original
      .replace(/\([^)]*\)|（[^）]*）/g, " ")
      .replace(/㈜|\(주\)|（주）/g, "주식회사 ")
      .replace(/[\/_+·・,&|]/g, " ")
      .replace(/[^\p{Letter}\p{Number}\s.-]/gu, " ")
      .replace(/\b[xX]\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return [cleaned, parenText.replace(/[^\p{Letter}\p{Number}\s.-]/gu, " ").trim()]
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function searchHintFor(tags) {
    const hints = [
      ["#보이차", "보이차"],
      ["#중국차", "중국차"],
      ["#대만차", "대만차"],
      ["#한국차", "한국차"],
      ["#녹차", "녹차"],
      ["#홍차", "홍차"],
      ["#우롱차", "우롱차"],
      ["#암차", "암차"],
      ["#백차", "백차"],
      ["#말차", "말차"],
      ["#대용차", "꽃차"],
      ["#도예", "도자기"],
      ["#공예", "공예"],
      ["#싱잉볼", "싱잉볼"],
      ["#천연염색", "천연염색"],
    ];
    const match = hints.find(([tag]) => tags.includes(tag));
    return match ? match[1] : "";
  }

  function createSearchQuery(row, tags) {
    const override = VENDOR_SEARCH_QUERY_OVERRIDES[`${row.boothId}|${row.name}`] || VENDOR_SEARCH_QUERY_OVERRIDES[row.boothId];
    if (override) {
      return override;
    }
    const base = normalizeSearchQuery(row.name);
    const hint = searchHintFor(tags);
    if (!hint || base.includes(hint)) {
      return base || row.name;
    }
    return `${base} ${hint}`.trim();
  }

  function createSearchLinks(row, tags) {
    const query = createSearchQuery(row, tags);
    const encoded = encodeURIComponent(query);
    return [
      {
        label: "네이버 통합검색",
        type: "naver-search",
        query,
        url: `https://search.naver.com/search.naver?where=nexearch&query=${encoded}`,
      },
      {
        label: "구글 검색",
        type: "google-search",
        query,
        url: `https://www.google.com/search?q=${encoded}`,
      },
    ];
  }

  function createVendorLinks(row, override, verified) {
    const links = [];
    const add = (link) => {
      if (!link || !link.url) return;
      const type = link.type || socialPlatformFor(link.url);
      if (!type) return;
      const url = link.url;
      if (links.some((item) => item.url === url)) return;
      links.push({
        label: link.label || type,
        type,
        url,
      });
    };

    const directLinks =
      VENDOR_SOCIAL_LINKS[`${row.boothId}|${row.name}`] || VENDOR_SOCIAL_LINKS[row.boothId] || [];
    directLinks.forEach(add);

    if (!verified || !override) {
      return links;
    }

    (override.socialLinks || []).forEach(add);
    (override.sources || [])
      .map((sourceKey) => EXTERNAL_SOURCES[sourceKey])
      .filter(Boolean)
      .forEach((source) => {
        const type = socialPlatformFor(source.url);
        const isAccountSource =
          source.type === "public-sns-profile" ||
          source.type === "public-sns-link-page" ||
          (source.type === "public-profile" && type === "linktree");
        if (type && isAccountSource) {
          add({
            label: source.title,
            type,
            url: source.url,
          });
        }
      });

    return links;
  }

  function hasVerifiedOverride(override) {
    if (override && override.manualVerified) {
      return true;
    }
    if (!override || !Array.isArray(override.sources) || !override.sources.length) {
      return false;
    }
    return override.sources.some((sourceKey) => EXTERNAL_SOURCES[sourceKey]);
  }

  function categoryFromTags(tags) {
    if (tags.some((tag) => TEA_TAGS.has(tag))) {
      return "차/제다/다원";
    }
    if (tags.some((tag) => ["#도예"].includes(tag))) {
      return "도자/다기";
    }
    if (tags.includes("#공예")) {
      return "공예/생활소품";
    }
    if (tags.some((tag) => ["#교육", "#문화단체"].includes(tag))) {
      return "기관/협회/교육";
    }
    return "심층검색-공개근거없음";
  }

  function reviewDetailsFor(row) {
    return REVIEW_DETAIL_OVERRIDES[`${row.boothId}|${row.name}`] || REVIEW_DETAIL_OVERRIDES[row.boothId] || [];
  }

  function createReviewDetailTheme(details) {
    if (!details.length) {
      return null;
    }
    const sourceTitles = details.map((item) => item.sourceTitle).filter(Boolean);
    const positiveCount = details.filter((item) => item.sentiment === "positive").length;
    const neutralCount = details.filter((item) => item.sentiment === "neutral").length;
    const mixedCount = details.filter((item) => item.sentiment === "mixed").length;
    const products = details.map((item) => item.product).filter(Boolean).slice(0, 4).join(", ");
    const confidence = details.some((item) => item.confidence === "high")
      ? "high"
      : details.some((item) => item.confidence === "medium")
        ? "medium"
        : "low";
    return {
      sentiment: positiveCount && !mixedCount ? "positive" : mixedCount ? "mixed" : "neutral",
      title: "제품별 공개 리뷰/언급 확인",
      summary:
        `${products || "제품"} 관련 공개 리뷰·후기·커뮤니티·쇼핑몰·전시/언론 근거 ${details.length}건을 저장했습니다. ` +
        `긍정 ${positiveCount}건, 중립/제품확인 ${neutralCount}건, 혼합 ${mixedCount}건이며 세부 문장과 링크는 제품별 리뷰 상세에 표시됩니다.`,
      mentions: details.length,
      confidence,
      evidence: sourceTitles.slice(0, 4),
    };
  }

  function createReviewThemes(row, override, verified) {
    const details = reviewDetailsFor(row);
    const detailTheme = createReviewDetailTheme(details);
    if (verified && override && override.reviewThemes) {
      if (detailTheme && !override.reviewThemes.some((theme) => theme.title === detailTheme.title)) {
        return [...override.reviewThemes, detailTheme];
      }
      return override.reviewThemes;
    }
    if (detailTheme) {
      return [detailTheme];
    }
    return [
      {
        sentiment: "screened",
        title: "반복 공개 리뷰 없음",
        summary:
          "2026-05-27 기준 업체명, 정제 검색어, 행사명, SNS/쇼핑몰, 네이버 카페/블로그, 디시인사이드 조합으로 검색했으나 독립적으로 반복 확인된 제품 리뷰는 저장되지 않았습니다. 소비자 참고용 스냅샷이며 부정 사실의 부존재를 단정하지 않습니다.",
        mentions: 0,
        confidence: "low",
        evidence: ["deep-scan-public-no-match-2026-05-27.json"],
      },
    ];
  }

  function createReviewDetails(row, override, verified) {
    const details = reviewDetailsFor(row);
    if (details.length) {
      return details;
    }
    const products = override && Array.isArray(override.products) && override.products.length
      ? override.products.slice(0, 5).join(" / ")
      : `${row.name} 공개 자료`;
    const sourceKey = override && Array.isArray(override.sources)
      ? override.sources.find((key) => EXTERNAL_SOURCES[key])
      : null;
    const source = sourceKey ? EXTERNAL_SOURCES[sourceKey] : null;
    return [
      {
        product: products,
        review:
          source
            ? `${source.title} 기준으로 ${products} 관련 공개 근거를 저장했습니다. 제품별 소비자 리뷰 본문까지는 공개 링크로 보존하지 않고, 확인 가능한 상품·출품·공식 자료 근거로 표시합니다.`
            : "공식/공개 검색 범위에서 업체명과 부스 등록 정보는 확인했지만, 제품별 소비자 리뷰 본문은 링크 보존 가능한 형태로 저장하지 않았습니다. 근거 없이 긍정/부정 평가를 생성하지 않습니다.",
        sentiment: "neutral",
        sourceTitle: source ? source.title : "공개 검색 스냅샷 2026-05-28",
        sourceUrl: source ? source.url : undefined,
        confidence: verified ? "medium" : "low",
      },
    ];
  }

  function createIncidentNotes(override, verified) {
    if (verified && override && override.incidentNotes) {
      return override.incidentNotes;
    }
    return [
      {
        status: "screened-no-public-issue",
        title: "심층 공개검색 특이사항 없음",
        summary:
          "2026-05-27 기준 업체명/정제 검색어와 논란·구설·사기·가짜차·짝퉁·피해·고소·디시/DCInside 조합으로 공개 검색 색인을 점검했으며, 링크로 보존할 만한 특이사항 후보가 저장되지 않았습니다. 이는 공개 검색 스냅샷 기준이며, 문제가 없다는 법적 단정은 아닙니다.",
        confidence: "medium",
        capturedAt: "2026-05-27T00:00:00+09:00",
        links: [],
      },
    ];
  }

  function createTags(override, verified) {
    if (!verified || !override || !override.tags) {
      return [];
    }
    return normalizeTags([...(override.tags || []), ...(override.fairEventTags || [])]);
  }

  function createFairEvents(override, verified) {
    if (!verified || !override || !Array.isArray(override.fairEvents)) {
      return [];
    }
    return override.fairEvents.map((event) => ({
      ...event,
      tags: normalizeTags(event.tags || []),
    }));
  }

  function fairEventStatusFor(override, verified) {
    if (verified && override && override.fairEventStatus) {
      return override.fairEventStatus;
    }
    return "screened-no-current-fair-event";
  }

  function createProducts(tags, override, verified) {
    if (verified && override && override.products) {
      return override.products;
    }
    const products = PRODUCT_LABELS.filter((item) => item.tags.some((tag) => tags.includes(tag))).map(
      (item) => item.label
    );
    return products.length ? Array.from(new Set(products)) : ["공개 자료 확인 필요"];
  }

  function createVendorSummary(row, tags, override, verified) {
    if (verified && override && override.summary) {
      return override.summary;
    }
    return `${row.boothId} 부스 참가 업체입니다. 2026-05-27 기준 공개 웹, SNS, 쇼핑몰, 네이버 카페/블로그, 디시인사이드 조합으로 심층 검색했으나 업체명과 연결되는 독립 공개 근거가 부족해 취급품목 태그는 임의 부여하지 않았습니다.`;
  }

  function createVendorSources(override) {
    const baseSources = [
      {
        title: "코엑스 제23회 국제차문화대전 공식 행사 정보",
        type: "official-event-page",
        url: EVENT_SOURCE,
        capturedAt: "2026-05-27T00:00:00+09:00",
      },
    ];
    const extraSources = (override && override.sources ? override.sources : [])
      .map((sourceKey) => EXTERNAL_SOURCES[sourceKey])
      .filter(Boolean);
    return [...baseSources, ...extraSources];
  }

  function researchStatusFor(override, verified) {
    if (verified && override && override.researchStatus) {
      return override.researchStatus;
    }
    return "deep-searched-no-public-match";
  }

  function createVendors() {
    const duplicateCounter = new Map();
    return parseRows().map((row) => {
      const count = (duplicateCounter.get(row.boothId) || 0) + 1;
      duplicateCounter.set(row.boothId, count);
      const boothOverride = VENDOR_INFO_OVERRIDES[row.boothId];
      const exactOverride = VENDOR_INFO_OVERRIDES[`${row.boothId}|${row.name}`];
      const override = boothOverride && boothOverride.manualVerified ? boothOverride : exactOverride || boothOverride;
      const verified = hasVerifiedOverride(override);
      const tags = createTags(override, verified);
      const category = verified && override && override.category ? override.category : categoryFromTags(tags);
      const id = `v-${row.boothId.toLowerCase()}-${count}`;
      const originalName = ORIGINAL_OCR_NAMES[row.boothId] || row.name;
      const corrected = originalName !== row.name;
      return {
        id,
        originalName,
        name: row.name,
        nameConfidence: corrected ? "manual-corrected-from-source-image" : "image-verified",
        boothIds: [row.boothId],
        aliases: corrected ? [originalName] : [],
        category,
        tags,
        products: createProducts(tags, override, verified),
        summary: createVendorSummary(row, tags, override, verified),
        searchQuery: createSearchQuery(row, tags),
        searchLinks: createSearchLinks(row, tags),
        links: createVendorLinks(row, override, verified),
        sources: createVendorSources(override),
        researchStatus: researchStatusFor(override, verified),
        fairEvents: createFairEvents(override, verified),
        fairEventStatus: fairEventStatusFor(override, verified),
        fairEventCapturedAt: "2026-05-28T00:00:00+09:00",
        capturedAt: "2026-05-27T00:00:00+09:00",
        reviewThemes: createReviewThemes(row, override, verified),
        reviewDetails: createReviewDetails(row, override, verified),
        incidentNotes: createIncidentNotes(override, verified),
      };
    });
  }

  const vendors = createVendors();

  function makeVendorIndex() {
    const index = new Map();
    vendors.forEach((vendor) => {
      vendor.boothIds.forEach((boothId) => {
        if (!index.has(boothId)) {
          index.set(boothId, []);
        }
        index.get(boothId).push(vendor.id);
      });
    });
    return index;
  }

  const vendorIdsByBooth = makeVendorIndex();

  function createLayout() {
    const layout = new Map();
    const put = (id, col, row, colSpan = 1, rowSpan = 1) =>
      layout.set(id, {
        x: GRID.x0 + col * GRID.cellW,
        y: GRID.y0 + row * GRID.cellH,
        w: colSpan * GRID.cellW,
        h: rowSpan * GRID.cellH,
      });
    const block2 = (ids, col, row) => {
      ids.forEach((id, index) => put(id, col + (index % 2), row + Math.floor(index / 2)));
    };
    const gBlock = (topLeft, topRight, bottomLeft, bottomRight, col, row) => {
      put(topLeft, col, row);
      put(topRight, col + 1, row, 2, 1);
      put(bottomLeft, col, row + 1);
      put(bottomRight, col + 1, row + 1, 2, 1);
    };
    const hBlock = (large, topRight, bottomRight, col, row) => {
      put(large, col, row, 2, 2);
      put(topRight, col + 2, row);
      put(bottomRight, col + 2, row + 1);
    };
    const putA = (id, col, finalRow, colSpan = 1, rowSpan = 1) =>
      put(id, col, finalRow >= 11 ? finalRow - 1 : finalRow, colSpan, rowSpan);
    const aBlock2 = (ids, col, finalRow) => {
      ids.forEach((id, index) => putA(id, col + (index % 2), finalRow + Math.floor(index / 2)));
    };

    putA("A27", 6, 0, 2, 1);
    putA("A28", 8, 0);
    putA("A29", 11, 0);
    putA("A30", 12, 0);
    putA("A31", 14, 0, 2, 1);
    putA("A32", 16, 0, 2, 1);
    putA("A33", 19, 0);
    putA("A34", 20, 0);
    putA("A35", 22, 0);
    putA("A36", 23, 0);
    putA("A37", 26, 0);
    putA("A38", 27, 0);
    putA("A39", 29, 0);
    putA("A40", 31, 0);

    putA("A26", 6, 2, 1, 2);
    putA("A25", 6, 4, 1, 2);
    putA("A24", 6, 6);
    putA("A23", 6, 7, 1, 2);

    putA("A8", 0, 11);
    putA("A20", 2, 11, 2, 1);
    aBlock2(["A21", "A22", "A18", "A19"], 5, 11);
    putA("A7", 0, 12, 1, 6);
    aBlock2(["A16", "A17"], 2, 12);
    putA("A10", 2, 14);
    putA("A11", 3, 14);
    putA("A9", 2, 15, 2, 1);
    aBlock2(["A14", "A15", "A12", "A13"], 5, 14);
    putA("A6", 1, 17, 4, 1);
    putA("A5", 6, 17);
    putA("A4", 6, 18, 1, 2);
    putA("A3", 6, 21);
    putA("A2", 6, 22);
    putA("A1", 6, 24);

    putA("A41", 31, 2);
    putA("A42", 31, 3);
    putA("A43", 31, 6);
    putA("A44", 31, 7, 1, 4);
    putA("A45", 31, 11);
    putA("A46", 31, 13);
    putA("A47", 31, 14, 1, 4);
    putA("A48", 31, 18, 1, 2);
    putA("A49", 31, 22, 1, 3);

    block2(["B27", "B28", "B25", "B26"], 8, 2);
    block2(["B23", "B24", "B21", "B22"], 8, 5);
    block2(["B19", "B20", "B17", "B18"], 8, 8);
    put("B16", 8, 10, 2, 2);
    block2(["B14", "B15", "B12", "B13"], 8, 13);
    block2(["B10", "B11", "B8", "B9"], 8, 16);
    block2(["B6", "B7", "B4", "B5"], 8, 19);
    put("B2", 8, 22);
    put("B3", 9, 22);
    put("B1", 8, 23, 2, 1);

    block2(["C28", "C29", "C26", "C27"], 11, 2);
    block2(["C24", "C25", "C22", "C23"], 11, 5);
    block2(["C20", "C21", "C18", "C19"], 11, 8);
    block2(["C16", "C17", "C14", "C15"], 11, 10);
    block2(["C12", "C13", "C10", "C11"], 11, 13);
    put("C8", 11, 16);
    put("C9", 12, 16);
    put("C6", 11, 17, 2, 1);
    block2(["C4", "C5", "C2", "C3"], 11, 19);
    put("C1", 11, 22, 2, 2);

    block2(["D32", "D33", "D30", "D31"], 14, 2);
    block2(["D27", "D29", "D25", "D26"], 14, 5);
    block2(["D23", "D24", "D21", "D22"], 14, 8);
    block2(["D19", "D20", "D17", "D18"], 14, 10);
    block2(["D15", "D16", "D13", "D14"], 14, 13);
    block2(["D11", "D12", "D9", "D10"], 14, 16);
    block2(["D7", "D8", "D5", "D6"], 14, 19);
    block2(["D3", "D4", "D1", "D2"], 14, 22);

    block2(["E30", "E31", "E28", "E29"], 17, 2);
    put("E26", 17, 5);
    put("E27", 18, 5, 1, 2);
    put("E25", 17, 6);
    block2(["E23", "E24", "E21", "E22"], 17, 8);
    block2(["E19", "E20", "E17", "E18"], 17, 10);
    block2(["E15", "E16", "E13", "E14"], 17, 13);
    block2(["E11", "E12", "E9", "E10"], 17, 16);
    block2(["E7", "E8", "E5", "E6"], 17, 19);
    block2(["E3", "E4", "E1", "E2"], 17, 22);

    block2(["F31", "F32", "F29", "F30"], 20, 2);
    block2(["F27", "F28", "F25", "F26"], 20, 5);
    block2(["F23", "F24", "F21", "F22"], 20, 8);
    block2(["F19", "F20", "F17", "F18"], 20, 10);
    block2(["F15", "F16", "F13", "F14"], 20, 13);
    block2(["F11", "F12", "F9", "F10"], 20, 16);
    block2(["F7", "F8", "F5", "F6"], 20, 19);
    block2(["F3", "F4", "F1", "F2"], 20, 22);

    gBlock("G26", "G27", "G24", "G25", 23, 2);
    put("G22", 23, 5);
    put("G23", 24, 5, 2, 1);
    put("G20", 23, 6, 2, 1);
    put("G21", 25, 6);
    put("G18", 23, 8);
    put("G19", 24, 8, 2, 2);
    put("G17", 23, 9);
    put("G15", 23, 10);
    put("G16", 24, 10, 2, 2);
    put("G14", 23, 11);
    gBlock("G12", "G13", "G10", "G11", 23, 13);
    put("G7", 23, 16);
    put("G9", 24, 16, 2, 2);
    put("G6", 23, 17);
    gBlock("G4", "G5", "G2", "G3", 23, 19);
    put("G1", 23, 22, 3, 2);

    put("H25", 27, 2);
    put("H26", 28, 2);
    put("H27", 29, 2);
    put("H23", 27, 3);
    put("H24", 28, 3, 2, 1);
    put("H21", 27, 5, 2, 1);
    put("H22", 29, 5);
    put("H19", 27, 6);
    put("H20", 28, 6, 2, 1);
    put("H17", 27, 8);
    put("H16", 27, 9);
    put("H18", 28, 8, 2, 2);
    hBlock("H13", "H15", "H14", 27, 10);
    hBlock("H10", "H12", "H11", 27, 13);
    hBlock("H7", "H9", "H8", 27, 16);
    hBlock("H4", "H6", "H5", 27, 19);
    hBlock("H1", "H3", "H2", 27, 22);

    layout.forEach((position) => {
      const row = Math.round((position.y - GRID.y0) / GRID.cellH);
      if (row >= 10) {
        position.y += GRID.cellH;
      }
    });

    return layout;
  }

  const boothLayout = createLayout();

  function createBooths() {
    return Array.from(boothLayout.entries())
      .map(([id, position]) => {
        const section = id[0];
        const number = Number(id.slice(1));
        return {
          id,
          section,
          number,
          color: SECTION_COLORS[section],
          vendorIds: vendorIdsByBooth.get(id) || [],
          confidence: vendorIdsByBooth.has(id) ? "image-verified" : "layout-only",
          ...position,
        };
      })
      .sort((a, b) => a.section.localeCompare(b.section) || a.number - b.number);
  }

  const booths = createBooths();
  const allTags = Array.from(new Set(vendors.flatMap((vendor) => vendor.tags || []))).sort((a, b) =>
    a.localeCompare(b, "ko")
  );
  const sectionSummaries = Object.keys(SECTION_COLORS).map((id) => ({
    id,
    count: booths.filter((booth) => booth.section === id).length,
    color: SECTION_COLORS[id],
  }));

  function createLayoutDiagnostics() {
    const occupied = new Map();
    booths.forEach((booth) => {
      const col = Math.round((booth.x - GRID.x0) / GRID.cellW);
      const row = Math.round((booth.y - GRID.y0) / GRID.cellH);
      const colSpan = Math.round(booth.w / GRID.cellW);
      const rowSpan = Math.round(booth.h / GRID.cellH);
      for (let y = row; y < row + rowSpan; y += 1) {
        for (let x = col; x < col + colSpan; x += 1) {
          const key = `${x},${y}`;
          if (!occupied.has(key)) {
            occupied.set(key, []);
          }
          occupied.get(key).push(booth.id);
        }
      }
    });

    const overlapCells = Array.from(occupied.entries())
      .filter(([, boothIds]) => boothIds.length > 1)
      .map(([cell, boothIds]) => ({ cell, boothIds }));

    return {
      grid: GRID,
      occupiedCellCount: occupied.size,
      overlapCells,
      overlapCount: overlapCells.length,
    };
  }

  function createDiagnostics() {
    const boothIds = new Set(booths.map((booth) => booth.id));
    const missingBoothIds = vendors
      .flatMap((vendor) => vendor.boothIds)
      .filter((boothId) => !boothIds.has(boothId));
    const emptyBooths = booths.filter((booth) => booth.vendorIds.length === 0).map((booth) => booth.id);
    const multiVendorBooths = booths
      .filter((booth) => booth.vendorIds.length > 1)
      .map((booth) => booth.id);

    return {
      vendorCount: vendors.length,
      boothCount: booths.length,
      missingBoothIds,
      emptyBooths,
      multiVendorBooths,
      layout: createLayoutDiagnostics(),
      notes: [
        "부스 좌표는 28x20 기본 격자를 기준으로 구성합니다.",
        "복도는 별도 도형 없이 흰색 빈 격자 공간으로 남깁니다.",
        "F6처럼 첨부 업체명 표에서 확인되지 않은 번호는 지도에 미배정으로 남깁니다.",
        "동일 부스에 여러 업체가 있는 경우 상세 패널에서 모두 표시합니다.",
      ],
    };
  }

  window.TEA_CATALOG = {
    license: {
      software: SOFTWARE_LICENSE,
      spdx: SOFTWARE_LICENSE,
      licenseFile: "LICENSE",
    },
    event: {
      title: "제23회 국제차문화대전",
      englishTitle: "TEA WORLD FESTIVAL 2026",
      dateRange: "2026.06.04 - 2026.06.07",
      hours: "10:00 - 18:00",
      venue: "COEX Hall D",
      sourceUrl: EVENT_SOURCE,
      capturedAt: "2026-05-27T00:00:00+09:00",
      snapshotPolicy:
        "앱 실행 중 외부 크롤링을 하지 않고, 접근 제한을 우회하지 않는 공개 자료와 사용자 제공 자료만 스냅샷으로 저장합니다.",
    },
    sections: sectionSummaries,
    tags: allTags,
    layout: {
      grid: GRID,
    },
    booths,
    vendors,
    diagnostics: createDiagnostics(),
  };
})();
