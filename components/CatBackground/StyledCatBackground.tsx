import styled from "styled-components";
import {
  CenterCenterStyle,
  glassStyle,
  verticalCenterStyle,
} from "../GlobalStyle";

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

export const NewCatModalWrapper = styled.div<any>`
  ${verticalCenterStyle};
  display: ${(props) => (props.catDisplay ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  margin-top: -1500px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const NewCatModalArea = styled.div`
  ${verticalCenterStyle};
  width: 450px;
  height: 560px;
  border-radius: 10px;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
  opacity: 1;
`;
export const NewCatModalTitle = styled.div`
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

export const NewCatModalImg = styled.img`
  height: 210px;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  padding: 10px;
  border-radius: 10px;
`;

export const NewCatModalContents = styled.div`
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

export const NewCatModalCloseButton = styled.div`
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
