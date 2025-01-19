import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { sumPlayback } from "@/lib/utils.ts";
import { Album, Track } from "@/shared.types.ts";

export function TrackList({ album }: { album: Album }) {
  const totalDuration = sumPlayback(album.tracks);
  const dateString = album.released.toLocaleDateString(undefined, {
    localeMatcher: "best fit",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <Table>
        <TableHeader>
          <TableHead className="text-lg text-primary">
            {`${album.name} by ${album.artist}`}
          </TableHead>
        </TableHeader>
        <TableBody>
          {album.tracks.map((track: Track) => (
            <TableRow key={track.id}>
              <TableCell>{track.name}</TableCell>
              <TableCell className="text-right">{track.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-muted-foreground">
            <TableCell>Released {dateString}</TableCell>
            <TableCell className="text-right">
              Total duration {totalDuration}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
