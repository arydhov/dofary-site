import { useEffect, useRef } from 'react';

export function useVideoPlayback(src) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return undefined;

    video.muted = true;

    const play = () => video.play?.().catch(() => {});
    const pause = () => video.pause();

    if (!('IntersectionObserver' in window)) {
      play();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else pause();
      },
      { threshold: 0.1, rootMargin: '200px 0px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return ref;
}
