import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table.tsx";
import { Track } from "@/shared.types.ts";
import { useAlbum } from "@/routes/AlbumPage/hooks/AlbumPageContext.tsx";

export function TrackList() {
  const { album } = useAlbum();
  return (
    <div>
      <Table>
        <TableBody>
          {album?.tracks.map((track: Track) => (
            <TableRow key={track.id}>
              <TableCell>{track.name}</TableCell>
              <TableCell className="text-right">{track.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
