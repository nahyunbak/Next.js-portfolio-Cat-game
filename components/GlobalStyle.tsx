import styled, { css } from "styled-components";

import LinkN from "next/link";
import { Link as Links } from "react-scroll";

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

export const LiWrapper = styled(Links)`
  font-size: 1rem;
  list-style-type: none;
  cursor: pointer;
`;
