import { Track } from "@/shared.types.ts";

export function sumPlayback(tracks: Track[]) {
  const sec = tracks.reduce((acc, { length }) => {
    const t = length.split(":");
    return acc + parseInt(t[0]) * 60 + parseInt(t[1]);
  }, 0);

  return `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, "0")}`;
}
