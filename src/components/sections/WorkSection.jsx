import SectionHeading from '../common/SectionHeading';
import VideoCard from '../VideoCard';

export default function WorkSection({ videos }) {
  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading title="Selected Works" />
          <p className="hidden md:block text-neutral-500 text-sm">Broadcast • Education • Digital</p>
        </div>
        <div className="flex flex-col gap-2">
          {videos.length ? videos.map((video) => <VideoCard key={video.id} video={video} />) : <p className="text-center text-neutral-500">No videos found.</p>}
        </div>
      </div>
    </section>
  );
}
