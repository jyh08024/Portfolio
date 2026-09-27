import { RefObject, useLayoutEffect, useState } from "react";

// 줄 간격 측정을 위해 최소 2줄은 렌더링
const MIN_LINE_COUNT = 2;

/**
 * 콘텐츠 높이를 줄 간격으로 나눠 에디터 줄번호 개수를 계산합니다.
 * 콘텐츠가 짧으면 에디터 화면 높이만큼 줄번호를 채웁니다.
 */
const useLineCount = (
  containerRef: RefObject<HTMLElement>,
  contentRef: RefObject<HTMLElement>,
  linesRef: RefObject<HTMLElement>,
  deps: unknown[]
) => {
  const [lineCount, setLineCount] = useState<number>(MIN_LINE_COUNT);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const lines = linesRef.current;

    if (!container || !content || !lines) {
      return;
    }

    const update = () => {
      const [first, second] = Array.from(lines.children) as HTMLElement[];
      if (!first || !second) {
        return;
      }

      const lineHeight = second.offsetTop - first.offsetTop;
      if (lineHeight <= 0) {
        return;
      }

      const paddingTop = parseFloat(getComputedStyle(container).paddingTop) || 0;
      const visibleHeight = container.clientHeight - paddingTop;

      setLineCount(
        Math.max(
          MIN_LINE_COUNT,
          Math.ceil(
            Math.max(content.offsetHeight, content.scrollHeight) / lineHeight
          ),
          Math.floor(visibleHeight / lineHeight)
        )
      );
    };

    update();

    // 창 크기 변경, 폰트·이미지 로딩으로 높이가 바뀌면 다시 계산
    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(content);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return lineCount;
};

export default useLineCount;
