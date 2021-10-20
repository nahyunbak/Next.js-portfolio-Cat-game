import styled, { css } from "styled-components";

import LinkN from "next/link";

// 글래스스타일
export const glassStyle = css`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
`;

//정중앙
export const CenterCenterStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//새로 중앙정렬
export const verticalCenterStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

//가로 중앙정렬

export const horizontalCenterStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//링크

export const GlobalLink = styled(LinkN)`
  text-decoration: none;
`;

// 제품 공통 스타일링
export const GlobalProductWrapper = css`
  width: 100vw;
  ${CenterCenterStyle};
`;

export const GlobalProductArea = css`
  display: grid;
  width: 1250px;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: minmax(250px, 300px);
  padding-bottom: 50px;
  grid-gap: 10px;
`;

export const GlobalProductLink = css`
  text-decoration: none;
`;

export const GlobalProductItemWrapper = css`
  ${verticalCenterStyle}
  padding: 10px;
`;

export const GlobalProductItemImg = css`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const GlobalProductItemName = css`
  color: black;
  font-size: 1rem;
  font-weight: 700;
  width: 100px;
  height: 30px;
  ${CenterCenterStyle}
`;

export const GlobalProductItemPrice = css`
  color: black;
  font-size: 1.4rem;
  font-weight: 700;
`;

export const GlobalProductItemButton = css`
  width: 90px;
  height: 35px;
  ${CenterCenterStyle};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px;
`;

//모달창

export const newCatModalWrapperStyle = css`
  ${verticalCenterStyle};
  width: 100%;
  height: 400vh;
  position: fixed;
  margin-top: -1500px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const newCatModalAreaStyle = css`
  ${verticalCenterStyle};
  width: 450px;
  height: 560px;
  border-radius: 10px;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
  opacity: 1;
`;
export const newCatModalTitleStyle = css`
  width: 300px;
  ${CenterCenterStyle}
  font-size: 1.5rem;
  color: black;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: 1s;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    letter-spacing: 2px;
    transform: scale(1.1);
  }
`;

export const newCatModalImgStyle = css`
  height: 210px;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  padding: 10px;
  border-radius: 10px;
`;

export const newCatModalContentsStyle = css`
  font-size: 1.05rem;
  padding: 10px;

  line-height: 25px;
  font-weight: 500;
  border-radius: 10px;
  color: black;
  width: 300px;
  height: 100px;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const newCatModalCloseButtonStyle = css`
  font-size: 1rem;
  color: black;
  width: 300px;
  height: 30px;
  ${CenterCenterStyle};
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 1s;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    letter-spacing: 2px;
    transform: scale(1.03);
  }
`;
