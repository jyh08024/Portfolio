import styled, { createGlobalStyle } from "styled-components";

// 인쇄 페이지 전용 전역 스타일 (사이트 기본 폰트·줄바꿈 규칙 덮어쓰기)
// 사이트 전역 스타일(src/styled.ts)보다 늦게 주입된다는 보장이 없어 선택자 우선순위를 높여 둠
export const PrintGlobalStyle = createGlobalStyle`
  @page {
    size: A4;
    margin: 14mm 12mm;
  }

  html body {
    font-size: 13px;
    letter-spacing: -0.2px;
    background: #e9eaee;
  }

  html body * {
    font-family: "Pretendard", sans-serif;
    word-break: keep-all;
    overflow-wrap: break-word;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  @media print {
    html body {
      background: #fff;
    }
  }
`;

export const Toolbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 16px;
  background: #333;
  color: #f4f5fc;

  button,
  a {
    padding: 8px 16px;
    border: none;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }

  button {
    background: #febf00;
    color: #222;
  }

  a {
    background: #555;
    color: #f4f5fc;
  }

  p {
    font-size: 12px;
    opacity: 0.7;
  }

  @media print {
    display: none;
  }
`;

export const Sheet = styled.main`
  width: 210mm;
  max-width: 100%;
  margin: 24px auto;
  padding: 16mm 14mm;
  background: #fff;
  color: #222;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);

  @media print {
    width: auto;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }

  a {
    color: inherit;
  }

  /* 프로필 */
  .profile {
    padding-bottom: 20px;
    border-bottom: 2px solid #222;

    h1 {
      font-size: 30px;
      font-weight: 800;
      letter-spacing: 2px;
    }

    .role {
      margin-top: 4px;
      font-size: 15px;
      font-weight: 600;
      color: #232fa9;
    }

    .summary {
      margin-top: 14px;
      line-height: 1.7;
    }

    .contact {
      display: flex;
      flex-wrap: wrap;
      column-gap: 16px;
      row-gap: 4px;
      margin-top: 14px;
      font-size: 12px;
      color: #555;
    }
  }

  /* 섹션 */
  .section {
    margin-top: 28px;
  }

  .section + .section.page_break {
    break-before: page;
  }

  .section_title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 800;

    &::before {
      content: "";
      width: 6px;
      height: 20px;
      background: #febf00;
    }
  }

  .meta {
    font-size: 12px;
    color: #777;
  }

  ul.bullet {
    margin-top: 6px;

    li {
      position: relative;
      padding-left: 12px;
      line-height: 1.6;

      &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 0.7em;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #999;
      }
    }
  }

  /* 경력 */
  .company {
    margin-bottom: 24px;

    .company_head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #ddd;

      h3 {
        font-size: 17px;
        font-weight: 800;
      }
    }

    .company_desc {
      margin-top: 8px;
      color: #444;
      line-height: 1.6;
    }
  }

  .career_project {
    margin-top: 16px;
    padding-left: 12px;
    border-left: 3px solid #febf00;
    break-inside: avoid;

    .career_project_head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;

      h4 {
        font-size: 14px;
        font-weight: 700;
      }

      .meta {
        flex-shrink: 0;
      }
    }

    .desc {
      margin-top: 4px;
      color: #444;
      line-height: 1.6;
    }

    .stack {
      margin-top: 6px;
      font-size: 12px;
      color: #666;
    }
  }

  /* 프로젝트 */
  .project {
    display: flex;
    gap: 18px;
    padding: 16px 0;
    border-bottom: 1px solid #ddd;
    break-inside: avoid;

    &:first-of-type {
      padding-top: 0;
    }

    .project_image {
      flex: 0 0 38%;

      img {
        width: 100%;
        max-height: 240px;
        object-fit: cover;
        object-position: left top;
        border: 1px solid #ddd;
        border-radius: 6px;
      }
    }

    .project_info {
      flex: 1;
      min-width: 0;

      h3 {
        margin-top: 2px;
        font-size: 17px;
        font-weight: 800;
      }

      .type {
        margin-top: 2px;
        font-size: 12px;
        font-weight: 600;
        color: #232fa9;
      }

      .desc {
        margin-top: 8px;
        color: #444;
        line-height: 1.6;
      }

      .project_section {
        margin-top: 10px;

        h5 {
          font-size: 13px;
          font-weight: 700;
        }
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 12px;

        span {
          padding: 2px 10px;
          border-radius: 9999px;
          background: #fff3c4;
          font-size: 11px;
          font-weight: 700;
        }
      }

      .links {
        margin-top: 10px;
        font-size: 12px;
        color: #555;
      }
    }
  }

  /* 프로젝트 갤러리 */
  .project_gallery {
    padding: 16px 0;
    border-bottom: 1px solid #ddd;

    .gallery_title {
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
      break-after: avoid;
    }

    .gallery_grid {
      display: grid;
      gap: 14px 16px;
    }

    .gallery_item {
      margin: 0;
      break-inside: avoid;
    }

    .gallery_thumb {
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 6px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
      }
    }

    figcaption {
      margin-top: 6px;
      font-size: 12px;

      strong {
        display: block;
        font-weight: 700;
      }

      .site_name {
        display: block;
        color: #232fa9;
        font-weight: 600;
      }

      .bullet {
        margin-top: 2px;
        color: #444;
      }
    }

    /* 웹 캡처: 긴 페이지의 윗부분만 표시 */
    &.web .gallery_grid {
      grid-template-columns: repeat(2, 1fr);
    }

    &.web .gallery_thumb {
      height: 58mm;
    }

    /* 앱 화면: 한 줄에 화면 전체 표시 */
    &.mobile {
      break-inside: avoid;

      .gallery_grid {
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
      }

      .gallery_thumb {
        aspect-ratio: 9 / 19.5;
        border-radius: 10px;
      }

      figcaption {
        font-size: 11px;
        line-height: 1.4;
      }
    }
  }

  /* 활동 */
  .activity_category {
    margin-bottom: 20px;

    h3 {
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1px solid #ddd;
      font-size: 16px;
      font-weight: 800;
    }
  }

  .activity_item {
    padding: 8px 0;
    break-inside: avoid;

    .activity_head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;

      h4 {
        font-size: 13.5px;
        font-weight: 700;
      }

      .meta {
        flex-shrink: 0;
      }
    }

    p {
      margin-top: 4px;
      color: #444;
      line-height: 1.6;
    }
  }
`;
