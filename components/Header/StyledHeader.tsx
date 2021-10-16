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

export const HeaderArea = styled.div<Number>`
  width: 1100px;
  font-weight: 900;
  font-size: 7rem;
  text-align: center;
  cursor: pointer;
  ${CenterCenterStyle};
  ${HeaderTitleStyle1}
  border-radius: 10px;
  background-color: ${function (props: any) {
    if (props.currentNum === 0) {
      return "black";
    } else if (props.currentNum === 1) {
      return "red";
    } else if (props.currentNum === 2) {
      return "blue";
    } else if (props.currentNum === 3) {
      return "green";
    } else if (props.currentNum === 4) {
      return "purple";
    } else if (props.currentNum === 5) {
      return "orange";
    } else if (props.currentNum === 6) {
      return "yellow";
    } else if (props.currentNum === 7) {
      return "navy";
    }
  }};
  color: ${function (props: any) {
    if (props.currentNum === 0) {
      return "white";
    } else if (props.currentNum === 1) {
      return "black";
    } else if (props.currentNum === 2) {
      return "orange";
    } else if (props.currentNum === 3) {
      return "red";
    } else if (props.currentNum === 4) {
      return "pink";
    } else if (props.currentNum === 5) {
      return "navy";
    } else if (props.currentNum === 6) {
      return "purple";
    } else if (props.currentNum === 7) {
      return "yellow";
    }
  }};

  @media screen and (max-width: 1300px) {
    width: 90vw;
    font-size: 5rem;
  }

  @media screen and (max-width: 537px) {
    font-size: 3rem;
  }
`;
