import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  catConditionDefaultState,
  catConditionStandard,
  catConditionState,
  catModalState,
  moneyState,
  purchasedProductState,
} from "../../recoilAtom/language";
import {
  AddCatCondition,
  resetEverything,
  useEffectCatModule,
} from "../ComponentModules";
import { ResetButton, StatusMoney, StatusWrapper } from "./StyledProduct";

const Status = () => {
  const [money, setMoney] = useRecoilState(moneyState);
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);
  const [purchasedProduct, setPurchasedProduct] = useRecoilState(
    purchasedProductState
  );

  useEffect(() => {
    useEffectCatModule;
  }, [setCatCondition]);

  return (
    <>
      <StatusWrapper>
        <StatusMoney
          onClick={() =>
            AddCatCondition(
              "richCat",
              catCondition,
              setCatCondition,
              catConditionStandard,
              setCatModalInfo
            )
          }
        >
          ${money}
        </StatusMoney>
        <ResetButton
          onClick={() =>
            resetEverything(setCatCondition, setPurchasedProduct, setMoney)
          }
        >
          안녕
        </ResetButton>
      </StatusWrapper>
    </>
  );
};

export default Status;
