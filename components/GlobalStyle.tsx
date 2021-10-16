import styled, { css } from "styled-components";

import LinkN from "next/link";

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
