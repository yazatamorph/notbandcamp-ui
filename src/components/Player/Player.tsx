import { TrackControls, TrackList } from "./parts";
import { Album } from "@/shared.types.ts";

interface PlayerProps {
  album: Album;
}

export function Player({ album }: PlayerProps) {
  // replace with actual state
  const isLoading = false;
  const isPlaying = false;

  return (
    <div className="flex flex-col gap-4">
      <TrackControls isLoading={isLoading} isPlaying={isPlaying} />
      <TrackList album={album} />
    </div>
  );
}
