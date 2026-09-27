import styled, { createGlobalStyle } from "styled-components";

// 갤러리 페이지 전용 전역 스타일
// 사이트 전역 스타일(src/styled.ts)보다 늦게 주입된다는 보장이 없어 선택자 우선순위를 높여 둠
export const GalleryGlobalStyle = createGlobalStyle`
  html body {
    background: #333;
  }

  html body * {
    font-family: "Pretendard", sans-serif;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

export const GalleryStyle = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  color: #f4f5fc;

  @media screen and (max-width: 640px) {
    padding: 32px 16px 64px;
  }

  /* 세로 앱 화면: 좁은 카드에 화면 전체를 잘리지 않게 표시 */
  &.mobile {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    }

    .thumb {
      height: auto;
      aspect-ratio: 9 / 19.5;
    }
  }
`;

export const GalleryHeader = styled.header`
  padding-bottom: 24px;
  border-bottom: 1px solid #f4f5fc30;

  .back {
    display: inline-block;
    margin-bottom: 24px;
    font-size: 14px;
    color: #f4f5fc;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .period {
    font-size: 14px;
    opacity: 0.7;
  }

  h1 {
    margin-top: 4px;
    font-size: 32px;
    font-weight: 800;
    color: #febf00;
  }

  .desc {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.85;
  }

  .github {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    padding: 10px 16px;
    border-radius: 9999px;
    background: skyblue;
    color: #222;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 24px;
  margin-top: 32px;
`;

export const GalleryCard = styled.li`
  min-width: 0;

  button {
    width: 100%;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    text-align: left;
    cursor: zoom-in;
  }

  .thumb {
    height: 320px;
    overflow: hidden;
    border-radius: 12px;
    background: #444;
    border: 2px solid transparent;
    transition: border-color 0.2s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      transition: transform 0.3s;
    }
  }

  button:hover .thumb,
  button:focus-visible .thumb {
    border-color: #febf00;

    img {
      transform: scale(1.03);
    }
  }

  .caption {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
  }

  .site_name {
    margin-top: 2px;
    font-size: 14px;
    color: #febf00;
  }

  .features {
    margin-top: 10px;

    li {
      position: relative;
      padding-left: 12px;
      font-size: 13px;
      line-height: 1.6;
      opacity: 0.8;

      &::before {
        content: "-";
        position: absolute;
        left: 0;
      }
    }
  }
`;

export const Viewer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.88);

  .viewer_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 20px;
    color: #f4f5fc;

    p {
      font-size: 15px;
      font-weight: 600;
    }

    .controls {
      display: flex;
      gap: 8px;
    }

    button {
      min-width: 40px;
      height: 40px;
      padding: 0 12px;
      border: none;
      border-radius: 9999px;
      background: #555;
      color: #f4f5fc;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background: #febf00;
        color: #222;
      }
    }
  }

  .viewer_body {
    flex: 1;
    overflow: auto;
    padding: 0 20px 20px;
    text-align: center;

    img {
      width: 100%;
      max-width: 1200px;
      border-radius: 8px;
    }
  }

  &.mobile .viewer_body img {
    max-width: 420px;
    border-radius: 24px;
  }
`;
