import { TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useVideoPlayback } from '../hooks/useVideoPlayback';
import { getYouTubeEmbedUrl, isYouTubeUrl } from '../utils/youtube';

export default function VideoCard({ video }) {
  const [unavailable, setUnavailable] = useState(false);
  const isYouTube = isYouTubeUrl(video?.src);
  const ref = useVideoPlayback(isYouTube ? null : video?.src);

  useEffect(() => setUnavailable(false), [video?.src]);

  if (!video?.src) {
    return (
      <div className="relative w-full aspect-video bg-neutral-800 flex items-center justify-center text-neutral-500 border-b border-white/10">
        <span className="text-sm">Video source not set</span>
      </div>
    );
  }

  if (isYouTube) {
    return (
      <div className="relative w-full aspect-video bg-black border-b border-white/10 shadow-2xl overflow-hidden">
        <iframe
          src={getYouTubeEmbedUrl(video.src)}
          title={video.title || 'Portfolio video'}
          className="absolute inset-0 w-full h-full pointer-events-none"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          tabIndex={-1}
        />
      </div>
    );
  }

  if (unavailable) {
    return (
      <div
        className="relative aspect-video w-full bg-neutral-800 flex flex-col items-center justify-center text-neutral-400 gap-2 border-b border-white/10"
        role="status"
      >
        <TriangleAlert size={32} className="text-red-500" aria-hidden="true" />
        <span className="text-sm font-medium">Video Unavailable</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black border-b border-white/10 shadow-2xl overflow-hidden">
      <video
        ref={ref}
        className="w-full h-full object-contain"
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        controlsList="nodownload"
        aria-label={video.title || 'Portfolio video'}
        onError={() => setUnavailable(true)}
        onContextMenu={(event) => event.preventDefault()}
      />
    </div>
  );
}
