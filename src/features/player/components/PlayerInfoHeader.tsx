import { Skeleton } from "@/components/ui/skeleton.tsx";
import { getDateString } from "@/utils";
import { usePlayer } from "@/features/player/context/PlayerContext.tsx";
import { sumPlayback } from "@/features/player/utils";

export function PlayerInfoHeader() {
  const { album } = usePlayer();
  const dateString = album ? getDateString(album.released) : "";
  const totalDuration = album ? sumPlayback(album.tracks) : "";

  if (!album) return <PlayerInfoHeaderSkeleton />;

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src={album.cover} alt="album artwork" className="grid-col" />
      <div className="flex flex-col justify-center py-0">
        <p className="text-4xl text-primary font-medium my-0">{album.name}</p>
        <p className="text-3xl text-muted-foreground font-medium my-0">
          {album.artist}
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

function PlayerInfoHeaderSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Skeleton className="grid-col h-[20.4rem]" />
      <div className="flex flex-col justify-center py-0">
        <Skeleton className="h-10 w-[350px]" />
        <Skeleton className="h-9 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
