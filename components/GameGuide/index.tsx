import { useCallback, useEffect, useState } from "react";
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
  const [pageNum, setPageNum] = useState<number>(1);

  const maxNum = 4;
  const [portfolioImgNum, setPortfolioImgNum] = useState<number>(1);

  const increasePageNum = () => {
    if (pageNum !== maxNum) {
      setPageNum((oldState: number) => oldState + 1);
    } else {
      setPageNum(1);
    }
    console.log(pageNum);
  };

  const decreasePageNum = () => {
    if (pageNum !== 1) {
      setPageNum((oldState: number) => oldState - 1);
    } else {
      setPageNum(maxNum);
    }
  };

  return (
    <>
      <GameGuideWrapper>
        <GameGuideArea>
          <GameGuideTitle>게임 설명서</GameGuideTitle>
          <GameGuideContentsWrapper>
            <GameGuideLeftArrow onClick={decreasePageNum} />
            <GameGuideGuideWrapper>
              {pageNum === 1 ? (
                <>
                  <GameGuideImg src="/sun.png" />
                  <GameGuideText>
                    1. 아무 이미지나 여러 번 클릭한다 (간간히 화장품도 질러주자)
                  </GameGuideText>
                </>
              ) : (
                ""
              )}
              {pageNum === 2 ? (
                <>
                  <GameGuideImg src="/npcCat.png" />
                  <GameGuideText>
                    2. 귀여운 야생의 고양이가 등장한다!
                  </GameGuideText>
                </>
              ) : (
                ""
              )}
              {pageNum === 3 ? (
                <>
                  <GameGuideImg src="/catTower.png" />
                  <GameGuideText>
                    3. 캣타워를 누르면 그간 모은 고양이를 확인할 수 있다
                  </GameGuideText>
                </>
              ) : (
                ""
              )}
              {pageNum === 4 ? (
                <>
                  <GameGuideImg src="/reset.jpg" />
                  <GameGuideText>
                    4. 리셋 버튼을 누르면 그간 진행을 리셋시킬 수 있다
                  </GameGuideText>
                </>
              ) : (
                ""
              )}
            </GameGuideGuideWrapper>

            <GameGuideRightArrow onClick={increasePageNum} />
          </GameGuideContentsWrapper>
        </GameGuideArea>
      </GameGuideWrapper>
    </>
  );
};
export default GameGuide;
