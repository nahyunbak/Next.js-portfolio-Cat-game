import { HeaderArea, HeaderWrapper } from "./StyledHeader";
import Axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  productState,
  titleLanState,
  titleState,
} from "../../recoilAtom/language";

const Header = () => {
  const [currentTitleLan, setCurrentTitleLan] = useRecoilState(titleState);
  const maxNum = titleLanState.length;

  useEffect(() => {
    const savedCurrentTitleLan = localStorage.getItem("titleLan");
    if (savedCurrentTitleLan) {
      setCurrentTitleLan(JSON.parse(savedCurrentTitleLan));
    }
  }, [setCurrentTitleLan]);

  const toggleTitle = () => {
    if (currentTitleLan === maxNum - 1) {
      setCurrentTitleLan(0);
    } else {
      setCurrentTitleLan((oldState) => oldState + 1);
    }

    localStorage.setItem("titleLan", JSON.stringify(currentTitleLan));
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
