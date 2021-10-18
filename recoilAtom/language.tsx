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

export const moneyState = atom({
  key: "moneyState",
  default: 1000000000,
});

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
export const catCollectionState = atom({
  key: "catCollectionState",
  default: {
    collectedCat: ["npcCat"],
    npcCat: {
      title: "NPC 고양이",
      contents:
        "본인이 NPC라는 사실을 전혀 모르는 눈치의 고양이. 갑자기 등장한 나를 수상쩍게 쳐다보고 있다",
      img: "/npcCat.png",
    },
  },
});

// 고양이 콜렉션을 관리함
export const catModalState = atom({
  key: "catCollectionState",
  default: {
    catType: "npcCat",
    catDisplay: false,
  },
});
