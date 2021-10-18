import styled from "styled-components";
import { CenterCenterStyle } from "../GlobalStyle";

export const CatBackgroundWrapper = styled.div`
  width: 100vw;
  height: 1200px;

  ${CenterCenterStyle};
`;

export const CatBackgroundArea = styled.div`
  width: 1300px;
  height: 800px;
  position: relative;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  overflow: hidden;
  border: 5px solid black;
`;

export const CatImg = styled.img`
  width: 200px;
  position: absolute;
`;

export const CatBackgroundHouse = styled.img`
  width: 600px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CatBackgroundTree = styled.img`
  width: 1000px;
  position: absolute;
  bottom: 0;
  left: -300px;
`;

export const CatBackgroundDog = styled.img`
  width: 300px;
  position: absolute;
  bottom: 0px;
`;

export const CatBackgroundSun = styled.img`
  width: 250px;
  right: 380px;
  top: 30px;
  position: absolute;
`;

// 울타리는 없앰
export const CatBackgroundFence = styled.img`
  height: 200px;
  position: absolute;
  bottom: 0;
`;
