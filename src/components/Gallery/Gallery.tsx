import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  GalleryCard,
  GalleryGlobalStyle,
  GalleryGrid,
  GalleryHeader,
  GalleryStyle,
  Viewer,
} from "./styled";
import { projects, toAssetUrl } from "../../data/project";

interface GalleryProps {
  projectId: string;
}

const Gallery = ({ projectId }: GalleryProps) => {
  const project = projects.find((item) => item.id === projectId);
  const images = project?.gallery ?? [];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const viewerBodyRef = useRef<HTMLDivElement>(null);

  const typeClass = project?.galleryType === "mobile" ? "mobile" : undefined;

  const isOpen = openIndex !== null;
  const current = isOpen ? images[openIndex] : undefined;

  const move = (step: number) =>
    setOpenIndex((prev) =>
      prev === null ? prev : (prev + step + images.length) % images.length,
    );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Gallery`;
    }
  }, [project]);

  // 뷰어가 열려 있는 동안 배경 스크롤 막기, 키보드 조작
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // 다른 이미지로 넘기면 맨 위부터 보기
  useEffect(() => {
    viewerBodyRef.current?.scrollTo({ top: 0 });
  }, [openIndex]);

  if (!project || images.length === 0) {
    return (
      <>
        <GalleryGlobalStyle />
        <GalleryStyle>
          <GalleryHeader>
            <a className="back" href={`${process.env.PUBLIC_URL}/`}>
              ← 포트폴리오로 돌아가기
            </a>
            <h1>갤러리를 찾을 수 없습니다.</h1>
          </GalleryHeader>
        </GalleryStyle>
      </>
    );
  }

  return (
    <>
      <GalleryGlobalStyle />

      <GalleryStyle className={typeClass}>
        <GalleryHeader>
          <a className="back" href={`${process.env.PUBLIC_URL}/`}>
            ← 포트폴리오로 돌아가기
          </a>
          <p className="period">{project.period}</p>
          <h1>{project.title}</h1>
          <p className="desc">{project.descriptions.join(" ")}</p>
          {project.github && (
            <a
              className="github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              Github
            </a>
          )}
        </GalleryHeader>

        <GalleryGrid>
          {images.map((image, index) => (
            <GalleryCard key={image.src}>
              <button type="button" onClick={() => setOpenIndex(index)}>
                <div className="thumb">
                  <img
                    src={toAssetUrl(image.src)}
                    alt={image.caption}
                    loading="lazy"
                  />
                </div>
                <p className="caption">{image.caption}</p>
                {image.siteName && (
                  <p className="site_name">{image.siteName}</p>
                )}
              </button>
              {image.features && (
                <ul className="features">
                  {image.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
            </GalleryCard>
          ))}
        </GalleryGrid>
      </GalleryStyle>

      {current && (
        <Viewer
          className={typeClass}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="viewer_bar"
            onClick={(event) => event.stopPropagation()}
          >
            <p>
              {current.caption} ({(openIndex ?? 0) + 1} / {images.length})
            </p>
            <div className="controls">
              <button
                type="button"
                aria-label="이전 이미지"
                onClick={() => move(-1)}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="다음 이미지"
                onClick={() => move(1)}
              >
                →
              </button>
              <button
                type="button"
                aria-label="닫기"
                onClick={() => setOpenIndex(null)}
              >
                ✕
              </button>
            </div>
          </div>
          <div className="viewer_body" ref={viewerBodyRef}>
            <img
              src={toAssetUrl(current.src)}
              alt={current.caption}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </Viewer>
      )}
    </>
  );
};

export default Gallery;
