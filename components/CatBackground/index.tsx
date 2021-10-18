// 움직이는 고양이와 배경 추가

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  catConditionStandard,
  catConditionState,
  catModalState,
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
  NewCatModalArea,
  NewCatModalCloseButton,
  NewCatModalContents,
  NewCatModalImg,
  NewCatModalTitle,
  NewCatModalWrapper,
} from "./StyledCatBackground";

// 배경은, 클릭할 때마다 무언가 효과가 있다.
const CatBackground = () => {
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);

  useEffect(() => {
    console.log(catModalInfo);
    useEffectCatModule;
    return console.log(catModalInfo);
  }, [setCatCondition]);

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
                setCatModalInfo
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
                setCatModalInfo
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
                setCatModalInfo
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
                setCatModalInfo
              )
            }
            src="/sun.png"
          />
        </CatBackgroundArea>
        <NewCatModalWrapper>
          <NewCatModalArea>
            <NewCatModalTitle>NPC고양이</NewCatModalTitle>
            <NewCatModalImg src="/npcCat.png" />
            <NewCatModalContents>
              본인이 NPC라는 사실을 전혀 모르는 눈치의 고양이. 갑자기 등장한
              나를 수상한 눈으로 바라보고 있다.
            </NewCatModalContents>
            <NewCatModalCloseButton>닫기</NewCatModalCloseButton>
          </NewCatModalArea>
        </NewCatModalWrapper>
      </CatBackgroundWrapper>
    </>
  );
};

export default CatBackground;

//고양이 배열 + 각 배열의 아이템을 키값으로 가진 또다른 배열. 여기에는 제목과 파일명, 콘텐츠가 적혀 있다.을 가지고.. 제목도 만들고..

//bool 값과 고양이 이름을 한꺼번에 전달하면 될 듯하다?
//닫기를 누르면 1이 추가된다.
/**
 * 
 * export const NewCatModalWrapper = styled.div`
  ${verticalCenterStyle};
  width: 500px;
  height: 600px;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
`;

export const NewCatModalTitle = styled.div`
  font-size: 2rem;
  color: black;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
`;

export const NewCatModalImg = styled.img`
  width: 400px;
`;

export const NewCatModalContents = styled.div`
  font-size: 1.5rem;
  color: black;
`;

 */
