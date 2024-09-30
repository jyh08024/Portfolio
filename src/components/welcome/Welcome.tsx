import React, { useEffect, useState } from "react";
import {
  WelcomeStyle,
  WelcomeTitle,
  TypingArea,
  WelcomeContent,
} from "./styled";
import useInterval from "../../hooks/useInterval";

interface WelcomeTypes {
  titleAnimation: boolean;
  titleAnimationData: string[];
  normalTitle: string;
}

export const WelcomeComponents = ({
  titleAnimation,
  titleAnimationData,
  normalTitle,
}: WelcomeTypes) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [dataIndex, setDataIndex] = useState<number>(0);
  const [curIndex, setCurIndex] = useState<number>(0);
  const [backspace, setBackspace] = useState<boolean>(false);

  useInterval(() => {
    if (!titleAnimation || !titleAnimationData?.length) {
      return;
    }

    if (dataIndex == titleAnimationData?.length) {
      setDataIndex(0);
      return;
    }

    const fullText = titleAnimationData?.[dataIndex];

    if (backspace) {
      if (curIndex === 0) {
        setDataIndex((prevState) => prevState + 1);
        setBackspace(false);
      } else {
        setDisplayText((prevState) => prevState.slice(0, -1));
        setCurIndex((prevState) => prevState - 1);
      }
      return;
    }

    if (curIndex < fullText.length) {
      setDisplayText((prevState) => prevState + fullText[curIndex]);
      setCurIndex((prevState) => prevState + 1);
    } else if (curIndex === fullText.length) {
      setBackspace(true);
    }
  }, 200);

  return (
    <WelcomeStyle>
      <WelcomeTitle>
        <h1>안녕하세요!</h1>
        {/*<h1>개발자 장영훈입니다.</h1>*/}
      </WelcomeTitle>

      <TypingArea>
        {titleAnimation ? (
          <>
            <p>저는</p>
            <p className="marker_text">{displayText}</p>
            <p>를 다루는 개발자입니다.</p>
          </>
        ) : (
          <p>{normalTitle}</p>
        )}
      </TypingArea>

      <WelcomeContent>
        <p>초보자도 알아보기 쉬운 코드를 작성하는 것을 지향합니다.</p>
        <p>고등학교 시절부터 다양한 기능을 개발한 경험을 가지고 있습니다.</p>
        <p>
          프론트 뿐만 아니라 백, 모바일 등 다양한 분야를 목표로 하고 있습니다.
        </p>
        <p>
          신규 서비스가 시장에 잘 자리잡을 수 있도록 리딩할 수 있는 개발자로
          성장하고 싶습니다.
        </p>
      </WelcomeContent>
    </WelcomeStyle>
  );
};
