import styled from "styled-components";
import {
  CenterCenterStyle,
  horizontalCenterStyle,
  verticalCenterStyle,
} from "../GlobalStyle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const GameGuideWrapper = styled.div`
  width: 100vw;
  height: 700px;
  ${CenterCenterStyle};
`;

export const GameGuideArea = styled.div`
  width: 1200px;
  height: 600px;
  ${verticalCenterStyle};
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  border-radius: 10px;
  padding-bottom: 50px;
`;

export const GameGuideTitle = styled.div`
  border-radius: 10px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  width: 500px;
  height: 80px;
  font-size: 2.5rem;
  font-weight: 700;
  ${CenterCenterStyle};
`;

export const GameGuideContentsWrapper = styled.div`
  width: 1000px;
  height: 400px;
  ${horizontalCenterStyle};
`;

export const GameGuideLeftArrow = styled(IoIosArrowBack)`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const GameGuideRightArrow = styled(IoIosArrowForward)`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const GameGuideGuideWrapper = styled.div`
  padding-top: 50px;
  width: 800px;
  height: 300px;
  ${horizontalCenterStyle};
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  border-radius: 10px;
  align-items: flex-start;
`;

export const GameGuideImg = styled.img`
  width: 100px;
`;

export const GameGuideText = styled.div`
  font-size: 2rem;
  ${CenterCenterStyle};
`;
/**
 * 
 * 
 * <GameGuideWrapper>
        <GameGuideArea>
          <GameGuideTitle></GameGuideTitle>
          <GameGuideContentsWrapper>
            <GameGuideLeftArrow />
            <GameGuideGuideWrapper>
                <GameGuideImg/>
                <GameGuideText></GameGuideText>
            </GameGuideGuideWrapper>
            <GameGuideRightArrow />
          </GameGuideContentsWrapper>
        </GameGuideArea>
      </GameGuideWrapper>
 */
