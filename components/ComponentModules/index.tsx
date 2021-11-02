import {
  catConditionDefaultState,
  collectedCatDefaultState,
  moneyDefaultState,
  PurchaseDefaultState,
} from "../../recoilAtom/language";

export const useEffectCatModule = (setCatCondition, setCollectedCat) => {
  const savedCatCondition = localStorage.getItem("catCondition");
  const savedCollectedCat = localStorage.getItem("collectedCat");

  if (savedCatCondition) {
    setCatCondition(JSON.parse(savedCatCondition));
  } else {
  }
  if (savedCollectedCat) {
    setCollectedCat(JSON.parse(savedCollectedCat));
  } else {
  }
};

export const resetEverything = (
  setCatCondition,
  setPurchasedProductState,
  setMoneyState,
  setCollectedCat,
  setCurrentCatHistory
) => {
  localStorage.clear();
  setCatCondition(catConditionDefaultState);
  setPurchasedProductState(PurchaseDefaultState);
  setMoneyState(moneyDefaultState);
  setCollectedCat(collectedCatDefaultState);
  setCurrentCatHistory(0);
};

export const AddCatCondition = (
  catName,
  catCondition,
  setCatCondition,
  catConditionStandard,
  setCatModalInfo,
  collectedCat,
  setCollectedCat
) => {
  const temp = catCondition[catName];

  if (catCondition[catName] === catConditionStandard[catName]) {
    setCatModalInfo({ catType: catName, catDisplay: true });
    setCollectedCat((oldState) => [...oldState, catName]);
    localStorage.setItem(
      "collectedCat",
      JSON.stringify([...collectedCat, catName])
    );
  } else {
    setCatModalInfo({ catType: catName, catDisplay: false });
  }

  localStorage.setItem(
    "catCondition",
    JSON.stringify({
      ...catCondition,
      [catName]: temp + 1,
    })
  );
  setCatCondition({
    ...catCondition,
    [catName]: temp + 1,
  });
};
