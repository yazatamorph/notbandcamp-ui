import { getDateString, sumPlayback } from "@/lib/utils.ts";
import { useAlbum } from "@/routes/AlbumPage/hooks/AlbumPageContext.tsx";

export function AlbumInfoHeader() {
  const { album } = useAlbum();
  const dateString = album ? getDateString(album.released) : "";
  const totalDuration = album ? sumPlayback(album.tracks) : "";

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src={album?.cover} alt="album artwork" className="grid-col" />
      <div className="flex flex-col justify-center py-0">
        <p className="text-4xl text-primary font-medium my-0">
          {album?.name || ""}
        </p>
        <p className="text-3xl text-muted-foreground font-medium my-0">
          {album?.artist || ""}
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
