import { useRecoilState } from "recoil";
import { catConditionState } from "../../recoilAtom/language";

export const useEffectCatModule = () => {
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const savedCatCondition = localStorage.getItem("catCondition");
  if (savedCatCondition) {
    setCatCondition(JSON.parse(savedCatCondition));
  }
};

export const AddCatCondition = (catName, catCondition, setCatCondition) => {
  const temp = catCondition[catName];
  console.log(catName);
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
