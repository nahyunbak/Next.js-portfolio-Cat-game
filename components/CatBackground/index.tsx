// 움직이는 고양이와 배경 추가

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { catConditionState } from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";
import {
  CatBackgroundArea,
  CatBackgroundDog,
  CatBackgroundFence,
  CatBackgroundHouse,
  CatBackgroundSun,
  CatBackgroundTree,
  CatBackgroundWrapper,
} from "./StyledCatBackground";

// 배경은, 클릭할 때마다 무언가 효과가 있다.
const CatBackground = () => {
  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  useEffect(() => {
    useEffectCatModule;
  }, [setCatCondition]);

  return (
    <>
      <CatBackgroundWrapper>
        <CatBackgroundArea>
          <CatBackgroundHouse
            onClick={() =>
              AddCatCondition("houseCat", catCondition, setCatCondition)
            }
            src="/house.png"
          />
          <CatBackgroundTree src="/tree.png" />
          <CatBackgroundDog src="/dog.png" />
          <CatBackgroundSun src="/sun.png" />
        </CatBackgroundArea>
      </CatBackgroundWrapper>
    </>
  );
};

export default CatBackground;

/**
 * 
 * 
 * export const CatBackgroundArea = styled.div`
  width: 1300px;
  height: 1300px;
  position: relative;
`;

export const CatImg = styled.img`
  width: 200px;
  position: absolute;
`;

export const CatBackgroundHouse = styled.img`
  width: 600px;
  position: absolute;
`;

export const CatBackgroundTree = styled.img`
  width: 500px;
  position: absolute;
`;

export const CatBackgroundDog = styled.img`
  width: 300px;
  position: absolute;
`;

export const CatBackgroundSun = styled.img`
  width: 200px;
  position: absolute;
`;

 */
