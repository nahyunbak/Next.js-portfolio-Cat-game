import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { catConditionState, moneyState } from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";
import { StatusMoney, StatusWrapper } from "./StyledProduct";

const Status = () => {
  const [money, setMoney] = useRecoilState(moneyState);
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  useEffect(() => {
    useEffectCatModule;
  }, [setCatCondition]);

  return (
    <>
      <StatusWrapper>
        <StatusMoney
          onClick={() =>
            AddCatCondition("richCat", catCondition, setCatCondition)
          }
        >
          ${money}
        </StatusMoney>
      </StatusWrapper>
    </>
  );
};

export default Status;
