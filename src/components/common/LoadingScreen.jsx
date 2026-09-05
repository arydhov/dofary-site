import { LoaderCircle } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
      <LoaderCircle className="animate-spin mr-2" />
      Loading...
    </div>
  );
}
