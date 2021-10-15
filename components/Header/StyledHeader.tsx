import styled, { css } from "styled-components";
import { CenterCenterStyle } from "../GlobalStyle";

const HeaderTitleStyle1 = css`
  background: black;
  color: white;
`;
export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 600px;
  ${CenterCenterStyle};
`;

export const HeaderArea = styled.div`
  width: 1100px;
  font-weight: 900;
  font-size: 7rem;
  text-align: center;
  cursor: pointer;
  ${CenterCenterStyle};
  ${HeaderTitleStyle1}
`;
