import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { catConditionState, moneyState } from "../../recoilAtom/language";
import { StatusMoney, StatusWrapper } from "./StyledProduct";

const Status = () => {
  const [money, setMoney] = useRecoilState(moneyState);
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  useEffect(() => {
    const savedCatCondition = localStorage.getItem("catCondition");

    if (savedCatCondition) {
      setCatCondition(JSON.parse(savedCatCondition));
    }
  }, [setCatCondition]);

  const createMoneyCatCondition = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    localStorage.setItem(
      "catCondition",
      JSON.stringify({
        ...catCondition,
        richCat: catCondition.richCat + 1,
      })
    );

    setCatCondition({
      ...catCondition,
      richCat: catCondition.richCat + 1,
    });
  };

  return (
    <>
      <StatusWrapper>
        <StatusMoney
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            createMoneyCatCondition(e)
          }
        >
          ${money}
        </StatusMoney>
      </StatusWrapper>
    </>
  );
};

export default Status;
