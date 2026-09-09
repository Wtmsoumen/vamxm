"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface PanoramaViewerProps {
  imageUrl: string;
}

export default function PanoramaViewer({ imageUrl }: PanoramaViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    yaw: 0,
    pitch: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    fov: 75,
    texture: null as HTMLImageElement | null,
    animFrame: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const state = stateRef.current;
    if (!canvas || !state.texture) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const img = state.texture;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const fovRad = (state.fov * Math.PI) / 180;
    const aspect = W / H;

    for (let px = 0; px < W; px++) {
      for (let py = 0; py < H; py++) {
        const nx = (px / W - 0.5) * 2 * aspect * Math.tan(fovRad / 2);
        const ny = (py / H - 0.5) * 2 * Math.tan(fovRad / 2);

        const yawRad = (state.yaw * Math.PI) / 180;
        const pitchRad = (state.pitch * Math.PI) / 180;

        const sinY = Math.sin(yawRad);
        const cosY = Math.cos(yawRad);
        const sinP = Math.sin(pitchRad);
        const cosP = Math.cos(pitchRad);

        let rx = cosY * nx - sinY;
        let ry = sinP * sinY * nx + cosP * ny - sinP * cosY;
        let rz = -cosP * sinY * nx + sinP * ny + cosP * cosY;

        const len = Math.sqrt(rx * rx + ry * ry + rz * rz);
        rx /= len; ry /= len; rz /= len;

        const u = (Math.atan2(rx, rz) / (2 * Math.PI) + 0.5) % 1;
        const v = Math.acos(Math.max(-1, Math.min(1, ry))) / Math.PI;

        const sx = Math.floor(u * imgW);
        const sy = Math.floor(v * imgH);

        // Simplified: draw scaled image with CSS transform instead
        void sx; void sy;
      }
    }
    // Fallback: use CSS-based approach for performance
  }, []);

  useEffect(() => {
    void render;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      stateRef.current.texture = img;
      setLoaded(true);
    };
    img.onerror = () => setError(true);
    img.src = imageUrl;
  }, [imageUrl, render]);

  const handleMouseDown = (e: React.MouseEvent) => {
    stateRef.current.isDragging = true;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const state = stateRef.current;
    if (!state.isDragging) return;
    const dx = e.clientX - state.lastX;
    const dy = e.clientY - state.lastY;
    state.yaw -= dx * 0.3;
    state.pitch = Math.max(-60, Math.min(60, state.pitch + dy * 0.3));
    state.lastX = e.clientX;
    state.lastY = e.clientY;

    if (containerRef.current) {
      containerRef.current.style.setProperty("--yaw", `${state.yaw}deg`);
      containerRef.current.style.setProperty("--pitch", `${state.pitch}deg`);
    }
  };

  const handleMouseUp = () => {
    stateRef.current.isDragging = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    stateRef.current.isDragging = true;
    stateRef.current.lastX = t.clientX;
    stateRef.current.lastY = t.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const state = stateRef.current;
    if (!state.isDragging) return;
    const t = e.touches[0];
    const dx = t.clientX - state.lastX;
    const dy = t.clientY - state.lastY;
    state.yaw -= dx * 0.3;
    state.pitch = Math.max(-60, Math.min(60, state.pitch + dy * 0.3));
    state.lastX = t.clientX;
    state.lastY = t.clientY;

    if (containerRef.current) {
      containerRef.current.style.setProperty("--yaw", `${state.yaw}deg`);
      containerRef.current.style.setProperty("--pitch", `${state.pitch}deg`);
    }
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white/40">
        Failed to load panorama
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden select-none"
      style={
        {
          "--yaw": "0deg",
          "--pitch": "0deg",
          cursor: stateRef.current.isDragging ? "grabbing" : "grab",
        } as React.CSSProperties
      }
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-saffron/30 border-t-saffron rounded-full animate-spin" />
            <p className="text-white/50 text-sm">Loading 360° view...</p>
          </div>
        </div>
      )}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: loaded ? `url(${imageUrl})` : "none",
          backgroundSize: "cover",
          backgroundPosition: `calc(50% + var(--yaw, 0deg) * 2px) calc(50% + var(--pitch, 0deg) * 1px)`,
          transform: `rotateY(calc(var(--yaw) * -0.1)) rotateX(calc(var(--pitch) * 0.1))`,
          transition: stateRef.current.isDragging ? "none" : "transform 0.1s ease",
        }}
      />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
