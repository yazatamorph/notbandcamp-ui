import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table.tsx";
import { Track } from "@/shared.types.ts";

export function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <div>
      <Table>
        <TableBody>
          {tracks.map((track: Track) => (
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
