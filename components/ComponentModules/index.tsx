import { useRecoilState } from "recoil";
import { catConditionState, catModalState } from "../../recoilAtom/language";

export const useEffectCatModule = () => {
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const savedCatCondition = localStorage.getItem("catCondition");
  if (savedCatCondition) {
    setCatCondition(JSON.parse(savedCatCondition));
  }
};

export const AddCatCondition = (
  catName,
  catCondition,
  setCatCondition,
  catConditionStandard,
  setCatModalInfo
) => {
  const temp = catCondition[catName];
  if (catCondition === catConditionStandard[catName]) {
    setCatModalInfo({ catType: catName, catDisplay: true });
  } else {
    setCatModalInfo({ catType: catName, catDisplay: false });
  }
  console.log(catModalState, catConditionStandard);

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
