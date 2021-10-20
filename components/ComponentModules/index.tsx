import { useRecoilState } from "recoil";
import {
  catConditionDefaultState,
  catConditionState,
  catModalState,
  moneyDefaultState,
  PurchaseDefaultState,
} from "../../recoilAtom/language";

export const useEffectCatModule = () => {
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const savedCatCondition = localStorage.getItem("catCondition");
  if (savedCatCondition) {
    setCatCondition(JSON.parse(savedCatCondition));
  }
};

export const resetEverything = (
  setCatCondition,
  setPurchasedProductState,
  setMoneyState
) => {
  localStorage.clear();
  setCatCondition(catConditionDefaultState);
  setPurchasedProductState(PurchaseDefaultState);
  setMoneyState(moneyDefaultState);
};
export const AddCatCondition = (
  catName,
  catCondition,
  setCatCondition,
  catConditionStandard,
  setCatModalInfo,
  setCollectedCat
) => {
  const temp = catCondition[catName];
  if (catCondition[catName] === catConditionStandard[catName]) {
    setCatModalInfo({ catType: catName, catDisplay: true });
    setCollectedCat((oldState) => [...oldState, catName]);
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
