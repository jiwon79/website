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
    <div className={styles.preview}>
      <video
        ref={videoRef}
        aria-label={`${title} demo video`}
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
      <button
        className={styles.playback}
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} ${title} video`}
        onClick={togglePlayback}
      >
        {playing ? (
          <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
            <rect x="6" y="4" width="2.5" height="12" rx=".5" />
            <rect x="11.5" y="4" width="2.5" height="12" rx=".5" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
            <path d="M7 4.5v11l9-5.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
