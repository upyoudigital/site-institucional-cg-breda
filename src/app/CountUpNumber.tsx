"use client";

import { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export function CountUpNumber({
  end,
  suffix = "",
  duration = 1000,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;
    let visibilityFrame = 0;
    let started = false;

    const animate = () => {
      const start = performance.now();
      setValue(0);

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setValue(Math.round(end * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        animate();
        observer.disconnect();
      },
      { threshold: 0.42 },
    );

    observer.observe(element);

    visibilityFrame = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isVisible || started) return;

      started = true;
      animate();
      observer.disconnect();
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(visibilityFrame);
      cancelAnimationFrame(frame);
    };
  }, [duration, end]);

  return (
    <span ref={ref} className="count-up">
      {value}
      {suffix}
    </span>
  );
}
