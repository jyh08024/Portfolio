import { CSSProperties, useEffect, useState } from "react";

interface PrintImageProps {
  src: string;
  alt: string;
  maxWidth: number; // 인쇄용으로 줄일 최대 너비(px)
  maxHeightRatio?: number; // 너비 대비 최대 높이 비율. 넘치면 윗부분만 남기고 자름
  style?: CSSProperties;
}

/**
 * 원본 이미지를 캔버스로 줄이고 JPEG로 압축해서 표시합니다.
 * 긴 웹 캡처 원본(PNG)이 그대로 PDF에 들어가 파일이 커지는 것을 막기 위한 용도입니다.
 */
const PrintImage = ({
  src,
  alt,
  maxWidth,
  maxHeightRatio,
  style,
}: PrintImageProps) => {
  const [printSrc, setPrintSrc] = useState<string>();

  useEffect(() => {
    let canceled = false;
    const image = new Image();

    image.onload = () => {
      const scale = Math.min(1, maxWidth / image.naturalWidth);
      const width = Math.round(image.naturalWidth * scale);
      const fullHeight = image.naturalHeight * scale;
      const height = Math.round(
        maxHeightRatio
          ? Math.min(fullHeight, width * maxHeightRatio)
          : fullHeight,
      );

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      if (!context) {
        setPrintSrc(src);
        return;
      }

      // 투명 PNG가 JPEG 변환 시 검게 나오지 않도록 흰 배경을 먼저 칠함
      context.fillStyle = "#fff";
      context.fillRect(0, 0, width, height);
      context.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        height / scale,
        0,
        0,
        width,
        height,
      );

      if (!canceled) {
        setPrintSrc(canvas.toDataURL("image/jpeg", 0.82));
      }
    };

    // 변환에 실패하면 원본을 그대로 사용
    image.onerror = () => !canceled && setPrintSrc(src);
    image.src = src;

    return () => {
      canceled = true;
    };
  }, [src, maxWidth, maxHeightRatio]);

  if (!printSrc) {
    return null;
  }

  return <img src={printSrc} alt={alt} style={style} />;
};

export default PrintImage;
