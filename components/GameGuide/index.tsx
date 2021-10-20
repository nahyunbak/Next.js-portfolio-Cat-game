import {
  GameGuideArea,
  GameGuideContentsWrapper,
  GameGuideGuideWrapper,
  GameGuideImg,
  GameGuideLeftArrow,
  GameGuideRightArrow,
  GameGuideText,
  GameGuideTitle,
  GameGuideWrapper,
} from "./StyledGameGuide";

const GameGuide = () => {
  return (
    <>
      <GameGuideWrapper>
        <GameGuideArea>
          <GameGuideTitle>게임 설명서</GameGuideTitle>
          <GameGuideContentsWrapper>
            <GameGuideLeftArrow />
            <GameGuideGuideWrapper>
              <GameGuideImg src="/sun.png" />
              <GameGuideText>1. 아무 이미지나 클릭한다</GameGuideText>
            </GameGuideGuideWrapper>
            <GameGuideRightArrow />
          </GameGuideContentsWrapper>
        </GameGuideArea>
      </GameGuideWrapper>
    </>
  );
};
export default GameGuide;
