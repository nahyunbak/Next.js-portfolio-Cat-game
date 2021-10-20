import styled, { css } from "styled-components";
import {
  CenterCenterStyle,
  horizontalCenterStyle,
  newCatModalAreaStyle,
  newCatModalCloseButtonStyle,
  newCatModalContentsStyle,
  newCatModalImgStyle,
  newCatModalTitleStyle,
  newCatModalWrapperStyle,
  verticalCenterStyle,
} from "../GlobalStyle";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const StatusWrapper = styled.div`
  width: 100vw;
  height: 800px;
  ${verticalCenterStyle}
  justify-content: flex-start;
`;

export const StatusArea = styled.div`
  width: 1300px;
  height: 800px;
  position: relative;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  overflow: hidden;
  border: 5px solid black;
`;
export const StatusMoney = styled.div`
  width: 1000px;
  height: 300px;
  ${CenterCenterStyle}
  font-size: 8rem;
  background: #83c283;
  border-radius: 10px;
`;

export const StatusDetail = styled.div`
  ${horizontalCenterStyle};
  margin-top: 100px;
  width: 500px;
`;

export const ResetButton = styled.div`
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  color: red;
  ${CenterCenterStyle};
  font-size: 2rem;
  font-weight: 700;
  width: 150px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
`;

export const CatCollectionBook = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

//모달창

export const OldCatModalWrapper = styled.div<any>`
  ${newCatModalWrapperStyle}
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.catHistory ? "flex" : "none")};
  margin-top: -2500px;
`;

export const OldCatModalPlace = styled.div`
  width: 600px;
  height: 560px;
  ${horizontalCenterStyle}
`;
export const OldCatModalArea = styled.div`
  ${newCatModalAreaStyle};
`;
export const OldCatModalTitle = styled.div`
  ${newCatModalTitleStyle}
`;

export const OldCatModalImg = styled.img`
  ${newCatModalImgStyle}
`;

export const OldCatModalContents = styled.div`
  ${newCatModalContentsStyle}
`;

export const OldCatModalCloseButton = styled.div`
  ${newCatModalCloseButtonStyle}
`;

// 모달창 화살표

export const OldCatModalLeftArrow = styled(IoIosArrowBack)`
  font-size: 3rem;

  color: white;
  cursor: pointer;
`;

export const OldCatModalRightArrow = styled(IoIosArrowForward)`
  font-size: 3rem;

  color: white;
  cursor: pointer;
`;
