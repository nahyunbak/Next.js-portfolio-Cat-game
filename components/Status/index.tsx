import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  catCollectionState,
  catConditionDefaultState,
  catConditionStandard,
  catConditionState,
  catModalState,
  collectedCatState,
  moneyState,
  purchasedProductState,
} from "../../recoilAtom/language";
import {
  AddCatCondition,
  resetEverything,
  useEffectCatModule,
} from "../ComponentModules";

import {
  CatCollectionBook,
  OldCatModalArea,
  OldCatModalCloseButton,
  OldCatModalContents,
  OldCatModalImg,
  OldCatModalLeftArrow,
  OldCatModalPlace,
  OldCatModalRightArrow,
  OldCatModalTitle,
  OldCatModalWrapper,
  ResetButton,
  StatusArea,
  StatusDetail,
  StatusMoney,
  StatusWrapper,
} from "./StyledProduct";

const Status = () => {
  const [money, setMoney] = useRecoilState(moneyState);
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);
  const [purchasedProduct, setPurchasedProduct] = useRecoilState(
    purchasedProductState
  );
  const [collectedCat, setCollectedCat] = useRecoilState(collectedCatState);

  useEffect(() => {
    useEffectCatModule;
  }, [setCatCondition]);

  return (
    <>
      <StatusWrapper>
        <StatusArea>
          <StatusMoney
            onClick={() =>
              AddCatCondition(
                "richCat",
                catCondition,
                setCatCondition,
                catConditionStandard,
                setCatModalInfo,
                setCollectedCat
              )
            }
          >
            ${money}
          </StatusMoney>
          <StatusDetail>
            <CatCollectionBook src="/catTower.png"></CatCollectionBook>
            <ResetButton
              onClick={() =>
                resetEverything(setCatCondition, setPurchasedProduct, setMoney)
              }
            >
              리셋
            </ResetButton>
          </StatusDetail>
        </StatusArea>
        <OldCatModalWrapper>
          <OldCatModalPlace>
            <OldCatModalLeftArrow />
            <OldCatModalArea>
              <OldCatModalTitle>npcCat</OldCatModalTitle>
              <OldCatModalImg src="/npcCat.png" />
              <OldCatModalContents>안녕하시게</OldCatModalContents>
              <OldCatModalCloseButton
                onClick={() =>
                  AddCatCondition(
                    catModalInfo.catType,
                    catCondition,
                    setCatCondition,
                    catConditionStandard,
                    setCatModalInfo,
                    setCollectedCat
                  )
                }
              >
                닫기
              </OldCatModalCloseButton>
            </OldCatModalArea>
            <OldCatModalRightArrow />
          </OldCatModalPlace>
        </OldCatModalWrapper>
      </StatusWrapper>
    </>
  );
};

export default Status;
