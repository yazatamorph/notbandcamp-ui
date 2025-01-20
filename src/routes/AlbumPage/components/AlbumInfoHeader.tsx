import { Track } from "@/shared.types.ts";
import { getDateString, sumPlayback } from "@/lib/utils.ts";

interface IAlbumInfoHeaderProps {
  cover: string;
  name: string;
  artist: string;
  released: Date;
  tracks: Track[];
}

export function AlbumInfoHeader({
  cover,
  name,
  artist,
  released,
  tracks,
}: IAlbumInfoHeaderProps) {
  const dateString = getDateString(released);
  const totalDuration = sumPlayback(tracks);

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src={cover} alt="album artwork" className="grid-col" />
      <div className="flex flex-col justify-center py-0">
        <p className="text-4xl text-primary font-medium my-0">{name}</p>
        <p className="text-3xl text-muted-foreground font-medium my-0">
          {artist}
        </p>
        <p className="text-md text-muted-foreground font-normal my-0">
          Released {dateString}
        </p>
        <p className="text-md text-muted-foreground font-normal my-0">
          Total duration {totalDuration}
        </p>
      </div>
    </div>
  );
}
