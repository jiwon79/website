"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function WorkVideo({
  title,
  src,
  poster,
}: {
  title: string;
  src: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (reducedMotion.matches) video.pause();
      else void video.play().catch(() => {});
    };

    syncMotion();
    reducedMotion.addEventListener("change", syncMotion);
    return () => reducedMotion.removeEventListener("change", syncMotion);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <button
      className={styles.preview}
      type="button"
      aria-label={`${playing ? "Pause" : "Play"} ${title} video`}
      onClick={togglePlayback}
    >
      <video
        ref={videoRef}
        aria-hidden="true"
        className={styles.video}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        muted
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </button>
  );
}
