import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table.tsx";
import { Track } from "@/shared.types.ts";
import { usePlayer } from "@/features/player/context/PlayerContext.tsx";

export function PlayerTrackList() {
  const { album } = usePlayer();

  return (
    <div>
      <Table>
        <TableBody>
          {album?.tracks.map((track: Track) => (
            <TableRow key={track.id}>
              <TableCell>{track.name}</TableCell>
              <TableCell className="text-right">{track.length}</TableCell>
            </TableRow>
          )) ||
            [0, 1, 2, 3].map((i) => (
              <TableRow key={i} className="">
                <TableCell>
                  <Skeleton className="h-3.5 w-[150px]" />
                </TableCell>
                <TableCell className="flex flex-row-reverse">
                  <Skeleton className="h-3.5 w-[50px]" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
