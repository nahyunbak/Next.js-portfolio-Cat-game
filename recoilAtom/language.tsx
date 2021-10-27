import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const productState = atom({
  key: "productState",
  default: [],
});

export const purchasedProductState = atom({
  key: "purchasedProductState",
  default: [],
});

// 구매목록 리셋
export const PurchaseDefaultState = [];

export const moneyState = atom({
  key: "moneyState",
  default: 1000000000,
});

// 돈 리셋
export const moneyDefaultState = 1000000000;

// 타이틀 모음
export const titleLanState = [
  "화장품으로 고양이를 꼬셔보았습니다",
  "Let's hook a cat with cosmetics",
  "用化妆品抓猫吧",
  "Attrapons le chat avec des cosmétiques",
  "มาจับแมวด้วยเครื่องสำอางกันเถอะ",
  "Lassen Sie uns Katze mit Kosmetika fangen.",
  "Давайте поймаем кошку с косметикой",
  "Hãy bắt mèo bằng mỹ phẩm",
];

export const titleState = atom({
  key: "titleState",
  default: 0,
});

// 타이틀 기본 상태
export const titleDefaultState = 0;

//고양이 이름 모음
export const catsCollection = [
  "npcCat",
  "shopperCat",
  "scroogeCat",
  "houseCat",
  "groomingCat",
  "stalkerCat",
  "richCat",
  "titleCat",
  "ghostCat",
  "woodCat",
  "bookCat",
];

//고양이별 컴포넌트 클릭 횟수 상태(=출현요구누적횟수)을  관리함.
// npc, 쇼퍼홀릭, 구두쇠, 집, 그루밍, 집착광공, 부자, 제목학원, 유령, 나무, 책벌레

export const catConditionState = atom({
  key: "catConditionState",
  default: {
    npcCat: 0,
    shopperCat: 0,
    scroogeCat: 0,
    houseCat: 0,
    stalkerCat: 0,
    richCat: 0,
    titleCat: 0,
    ghostCat: 0,
    woodCat: 0,
    bookCat: 0,
    sunCat: 0,
    treeCat: 0,
    dogCat: 0,
    loverCat: 0,
    dancerCat: 0,
  },
});

//고양이 출현조건 리셋하기
//다음에는 recoil의 리셋 이용하기
export const catConditionDefaultState = {
  npcCat: 0,
  shopperCat: 0,
  scroogeCat: 0,
  houseCat: 0,
  stalkerCat: 0,
  richCat: 0,
  titleCat: 0,
  ghostCat: 0,
  woodCat: 0,
  bookCat: 0,
  sunCat: 0,
  treeCat: 0,
  dogCat: 0,
  loverCat: 0,
  dancerCat: 0,
};

//고양이 출현조건 기준을 관리함
export const catConditionStandard = {
  npcCat: 0,
  shopperCat: 20,
  scroogeCat: 15,
  houseCat: 30,
  stalkerCat: 20,
  richCat: 14,
  titleCat: 10,
  ghostCat: 16,
  woodCat: 39,
  bookCat: 26,
  sunCat: 28,
  treeCat: 40,
  dogCat: 30,
  loverCat: 100,
  dancerCat: 100,
};

// 게임 리셋 컴포넌트도 추가하기

// 고양이 콜렉션을 관리함
export const catCollectionState = {
  npcCat: {
    title: "NPC 고양이",
    contents:
      "본인이 NPC라는 사실을 전혀 모르는 눈치의 고양이. 갑자기 등장한 나를 수상쩍게 쳐다보고 있다",
    img: "/npcCat.png",
  },
  bookCat: {
    title: "책벌레 고양이",
    contents:
      "책만 보면 즉시 식빵을 굽는 고양이. 늘 책 위에서만 잠드는 특이한 버릇이 있다.",
    img: "/bookCat.png",
  },
  dancerCat: {
    title: "딴따라 고양이",
    contents:
      "하도 집에만 있는 바람에 그만 춤바람이 난 고양이. 어쩐지 고양이가 아닌 것 같다.",
    img: "/dancerCat.png",
  },
  dogCat: {
    title: "개냥이",
    contents:
      "주인만 보면 멍멍 짖는 고양이. 존재 자체가 빛이라 수많은 팬을 몰고 다닌다(사랑해요, 개냥이!)",
    img: "/dogCat.png",
  },
  ghostCat: {
    title: "투명 고양이",
    contents:
      "아무것도 없는 곳을 클릭하면 불쑥 튀어나오는 고양이. 얌전한 외모와 달리 사람 놀래키기를 좋아한다.",
    img: "/ghostCat.png",
  },
  houseCat: {
    title: "집순이 고양이",
    contents:
      "이불 밖은 위험하다고 철썩같이 믿는 고양이. 스마트폰 대신 분홍색 공에 집착하고 있다.",
    img: "/houseCat.png",
  },
  richCat: {
    title: "재벌 고양이",
    contents:
      "사료 대신 츄르만 고집하는 고양이. 고양이 주제에 왠지 나보다 돈이 많아 보인다...",
    img: "/richCat.png",
  },
  scroogeCat: {
    title: "짠돌이 고양이",
    contents:
      "허구한 날 반품만 하는 블랙컨슈머 밑에서 자란 고양이. 오고가는 택배기사 탓에 늘 신경이 날카롭다.",
    img: "/scroogeCat.png",
  },
  shopperCat: {
    title: "쇼퍼홀릭 고양이",
    contents:
      "쇼핑을 즐기는 자본주의 고양이.  츄르를 잔뜩 사주지 않는 집사는 필요없어..! 라고 생각하는 듯하다.",
    img: "/shopperCat.png",
  },
  stalkerCat: {
    title: "스토커 고양이",
    contents:
      "왠지 주인을 보는 눈이 음흉한 고양이. 주인을 집요하게 따라다니며 괴롭힌다.",
    img: "/stalkerCat.png",
  },
  titleCat: {
    title: "제목학원 고양이",
    contents:
      "제목에 집착하는 고양이. 제목이 바뀔 때마다 멍하니 바라보는 게 취미다.",
    img: "/titleCat.png",
  },
  treeCat: {
    title: "산신령 고양이",
    contents:
      "츄르보다 나무를 좋아하는 고양이. 커다란 나무는 좋아하지만 올라가는 건 좀 귀찮은 모양이다.",
    img: "/treeCat.png",
  },
  resetCat: {
    title: "선넘는 고양이",
    contents:
      "개발자가 임의로 만들어놓은 구분선에 올라탄 고양이. 좀처럼 떨어지지 않는다. (이러라고 만든 구분선이 아닌데...)",
    img: "/woodCat.png",
  },
  sunCat: {
    title: "하품 고양이",
    contents:
      "해만 보면 하품을 하는 고양이. 하도 햇살을 쬐었더니 바람에 털색이 노랗게 바랬다.",
    img: "/sunCat.png",
  },
};

// 고양이 콜렉션을 관리함
export const catModalState = atom({
  key: "catCollectionState",
  default: {
    catType: "npcCat",
    catDisplay: false,
  },
});

export const collectedCatState = atom({
  key: "collectedCatState",
  default: ["npcCat"],
});

export const collectedCatDefaultState = ["npcCat"];
