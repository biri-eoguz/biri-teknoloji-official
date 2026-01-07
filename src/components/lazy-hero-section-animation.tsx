"use client";

import { useEffect, useState } from "react";

export default function LazyHeroSectionVideo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const run = () => setReady(true);

    if ("requestIdleCallback" in window) {
      requestIdleCallback(run);
    } else {
      setTimeout(run, 1200);
    }
  }, []);

  if (!ready) return null;

  return (
    <video
      className="absolute inset-0 -translate-y-[12%] opacity-15 size-[clamp(360px,72vw,720px)] object-cover"
      preload="none"
      muted
      loop
      playsInline
      autoPlay
    >
      <source src="/video/hero-section.webm" type="video/webm" />
      <source src="/video/hero-section.mp4" type="video/mp4" />
    </video>
  );
}
