import { HeaderArea, HeaderWrapper } from "./StyledHeader";
import Axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoilAtom/language";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderArea>화장품으로 고양이를 꼬셔보겠습니다</HeaderArea>
      </HeaderWrapper>
    </>
  );
};

export default Header;
