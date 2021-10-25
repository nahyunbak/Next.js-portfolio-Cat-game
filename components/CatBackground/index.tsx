// 움직이는 고양이와 배경 추가

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  catCollectionState,
  catConditionStandard,
  catConditionState,
  catModalState,
  collectedCatState,
} from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";

import {
  CatBackgroundArea,
  CatBackgroundDog,
  CatBackgroundFence,
  CatBackgroundHouse,
  CatBackgroundSun,
  CatBackgroundTree,
  CatBackgroundWrapper,
  NewCatModalWrapper,
  NewCatModalArea,
  NewCatModalCloseButton,
  NewCatModalContents,
  NewCatModalImg,
  NewCatModalTitle,
} from "./StyledCatBackground";

// 배경은, 클릭할 때마다 무언가 효과가 있다.
const CatBackground = () => {
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);
  const [collectedCat, setCollectedCat] = useRecoilState(collectedCatState);

  useEffect(() => {
    useEffectCatModule(setCatCondition, setCollectedCat);
  }, [setCatCondition, catModalInfo]);

  return (
    <>
      <CatBackgroundWrapper>
        <CatBackgroundArea>
          <CatBackgroundHouse
            onClick={() =>
              AddCatCondition(
                "houseCat",
                catCondition,
                setCatCondition,
                catConditionStandard,
                setCatModalInfo,
                collectedCat,
                setCollectedCat
              )
            }
            src="/house.png"
          />
          <CatBackgroundTree
            onClick={() =>
              AddCatCondition(
                "treeCat",
                catCondition,
                setCatCondition,
                catConditionStandard,
                setCatModalInfo,
                collectedCat,
                setCollectedCat
              )
            }
            src="/tree.png"
          />
          <CatBackgroundDog
            onClick={() =>
              AddCatCondition(
                "dogCat",
                catCondition,
                setCatCondition,
                catConditionStandard,
                setCatModalInfo,
                collectedCat,
                setCollectedCat
              )
            }
            src="/dog.png"
          />
          <CatBackgroundSun
            onClick={() =>
              AddCatCondition(
                "sunCat",
                catCondition,
                setCatCondition,
                catConditionStandard,
                setCatModalInfo,
                collectedCat,
                setCollectedCat
              )
            }
            src="/sun.png"
          />
        </CatBackgroundArea>
        <NewCatModalWrapper catDisplay={catModalInfo.catDisplay}>
          <NewCatModalArea>
            <NewCatModalTitle>
              {catCollectionState[catModalInfo.catType].title}
            </NewCatModalTitle>
            <NewCatModalImg
              src={catCollectionState[catModalInfo.catType].img}
            />
            <NewCatModalContents>
              {catCollectionState[catModalInfo.catType].contents}
            </NewCatModalContents>
            <NewCatModalCloseButton
              onClick={() =>
                AddCatCondition(
                  catModalInfo.catType,
                  catCondition,
                  setCatCondition,
                  catConditionStandard,
                  setCatModalInfo,
                  collectedCat,
                  setCollectedCat
                )
              }
            >
              닫기
            </NewCatModalCloseButton>
          </NewCatModalArea>
        </NewCatModalWrapper>
      </CatBackgroundWrapper>
    </>
  );
};

export default CatBackground;
