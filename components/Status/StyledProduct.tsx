import styled, { css } from "styled-components";
import { CenterCenterStyle, verticalCenterStyle } from "../GlobalStyle";

export const StatusWrapper = styled.div`
  width: 100vw;
  height: 600px;
  ${verticalCenterStyle}
  justify-content: flex-start;
`;

export const StatusMoney = styled.div`
  width: 1000px;
  height: 300px;
  ${CenterCenterStyle}
  font-size: 8rem;
  background: #83c283;
  border-radius: 10px;
`;

export const ResetButton = styled.div`
  background-color: black;
  width: 100px;
  height: 100px;
`;
