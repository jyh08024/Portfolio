import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import App from "./App";
import PrintPortfolio from "./components/Print/PrintPortfolio";
import Gallery from "./components/Gallery/Gallery";

// 예전 주소(?print, ?gallery=id)로 들어오면 새 경로로 이동
// (이미 제출한 인쇄물에 예전 주소가 남아 있어 유지)
const Home = () => {
  const [searchParams] = useSearchParams();
  const galleryId = searchParams.get("gallery");

  if (searchParams.has("print")) {
    return <Navigate to="/print" replace />;
  }
  if (galleryId) {
    return <Navigate to={`/gallery/${galleryId}`} replace />;
  }
  return <App />;
};

const GalleryPage = () => {
  const { id = "" } = useParams();
  return <Gallery projectId={id} />;
};

/**
 * 주소 체계
 * - /            WELCOME 탭
 * - /:tab        탭별 화면 (src/config/tabs.tsx의 path)
 * - /print       인쇄용 포트폴리오
 * - /gallery/:id 프로젝트 이미지 갤러리
 *
 * GitHub Pages는 /career 같은 경로로 바로 들어오면 해당 파일이 없어 404.html을 보여주므로,
 * 빌드 후 index.html을 404.html로 복사해 둠 (package.json의 postbuild)
 */
const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/print" element={<PrintPortfolio />} />
      <Route path="/gallery/:id" element={<GalleryPage />} />
      <Route path="/:tab" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
