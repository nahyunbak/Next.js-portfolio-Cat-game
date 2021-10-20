import { HeaderArea, HeaderWrapper } from "./StyledHeader";
import Axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  catConditionStandard,
  catConditionState,
  catModalState,
  collectedCatState,
  productState,
  titleLanState,
  titleState,
} from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";

const Header = () => {
  const [currentTitleLan, setCurrentTitleLan] = useRecoilState(titleState);
  const maxNum = titleLanState.length;

  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);
  const [collectedCat, setCollectedCat] = useRecoilState(collectedCatState);

  useEffect(() => {
    const savedCurrentTitleLan = localStorage.getItem("titleLan");
    if (savedCurrentTitleLan) {
      setCurrentTitleLan(JSON.parse(savedCurrentTitleLan));
    }
    useEffectCatModule(setCatCondition, setCollectedCat);
  }, [setCurrentTitleLan]);

  const toggleTitle = () => {
    if (currentTitleLan === maxNum - 1) {
      setCurrentTitleLan(0);
    } else {
      setCurrentTitleLan((oldState) => oldState + 1);
    }

    localStorage.setItem("titleLan", JSON.stringify(currentTitleLan));
    //제목학원 고양이 출현 + 로컬스토리지 저장
    AddCatCondition(
      "titleCat",
      catCondition,
      setCatCondition,
      catConditionStandard,
      setCatModalInfo,
      collectedCat,
      setCollectedCat
    );
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderArea onClick={toggleTitle} currentNum={currentTitleLan}>
          {titleLanState[currentTitleLan]}
        </HeaderArea>
      </HeaderWrapper>
    </>
  );
};

export default Header;
