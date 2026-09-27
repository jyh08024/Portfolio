import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PrintPortfolio from "./components/Print/PrintPortfolio";
import Gallery from "./components/Gallery/Gallery";
import reportWebVitals from "./reportWebVitals";

import { GlobalStyled } from "./styled";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

// 주소에 ?print 가 붙으면 인쇄용 포트폴리오 페이지,
// ?gallery=프로젝트id 가 붙으면 해당 프로젝트의 이미지 갤러리 페이지를 표시
const searchParams = new URLSearchParams(window.location.search);
const isPrintMode = searchParams.has("print");
const galleryId = searchParams.get("gallery");

const renderPage = () => {
  if (isPrintMode) return <PrintPortfolio />;
  if (galleryId) return <Gallery projectId={galleryId} />;
  return <App />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      {renderPage()}
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
