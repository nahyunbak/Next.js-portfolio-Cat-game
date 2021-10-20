import { useEffect, useState } from "react";
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

  const [catHistory, setCatHistory] = useState(true);
  const [currentCatHistory, setCurrentCatHistory] = useState(0);
  useEffect(() => {
    useEffectCatModule(setCatCondition, setCollectedCat);
  }, [setCatCondition]);

  const hideHistory = () => {
    setCatHistory(false);
  };

  const revealHistory = () => {
    setCatHistory(true);
  };

  const increaseCurrentCat = () => {
    if (currentCatHistory === collectedCat.length - 1) {
      setCurrentCatHistory(0);
    } else {
      setCurrentCatHistory((oldState) => oldState + 1);
    }
  };

  const decreaseCurrentCat = () => {
    if (currentCatHistory === 0) {
      setCurrentCatHistory(collectedCat.length - 1);
    } else {
      setCurrentCatHistory((oldState) => oldState - 1);
    }
  };

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
              setCatModalInfo,
              collectedCat,
              setCollectedCat
            )
          }
        >
          ${money}
        </StatusMoney>
        <StatusDetail>
          <CatCollectionBook
            src="/catTower.png"
            onClick={revealHistory}
          ></CatCollectionBook>
          <ResetButton
            onClick={() =>
              resetEverything(
                setCatCondition,
                setPurchasedProduct,
                setMoney,
                setCollectedCat,
                setCurrentCatHistory
              )
            }
          >
            리셋
          </ResetButton>
        </StatusDetail>

        <OldCatModalWrapper catHistory={catHistory}>
          <OldCatModalPlace>
            <OldCatModalLeftArrow onClick={decreaseCurrentCat} />
            <OldCatModalArea>
              <OldCatModalTitle>
                {catCollectionState[collectedCat[currentCatHistory]].title}
              </OldCatModalTitle>
              <OldCatModalImg
                src={catCollectionState[collectedCat[currentCatHistory]].img}
              />
              <OldCatModalContents>
                {catCollectionState[collectedCat[currentCatHistory]].contents}
              </OldCatModalContents>
              <OldCatModalCloseButton onClick={hideHistory}>
                닫기
              </OldCatModalCloseButton>
            </OldCatModalArea>
            <OldCatModalRightArrow onClick={increaseCurrentCat} />
          </OldCatModalPlace>
        </OldCatModalWrapper>
      </StatusWrapper>
    </>
  );
};

export default Status;
