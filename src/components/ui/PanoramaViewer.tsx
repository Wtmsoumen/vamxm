"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  tourPath: string;
  title?: string;
}

export default function PanoramaViewer({ tourPath, title }: Props) {
  const [fullscreen, setFullscreen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onFSChange() {
      setFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFSChange);
    return () => document.removeEventListener("fullscreenchange", onFSChange);
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement && wrapRef.current) {
      wrapRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-2xl bg-black"
      style={{ aspectRatio: "16/9" }}
    >
      <iframe
        src={tourPath}
        title={title ?? "360° Virtual Tour"}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen; gyroscope; accelerometer"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-fullscreen"
        loading="lazy"
      />

      {/* Fullscreen button overlay */}
      <button
        onClick={toggleFullscreen}
        title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
      >
        {fullscreen ? (
          <svg viewBox="0 0 24 24" width="18" fill="currentColor">
            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" fill="currentColor">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
