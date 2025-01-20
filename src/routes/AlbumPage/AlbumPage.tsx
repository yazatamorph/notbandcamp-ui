import { AlbumInfoHeader, TrackControls, TrackList } from "./components";
import { Album } from "@/shared.types.ts";

const sample: Album = {
  id: 100,
  owner_id: 1,
  name: "EP",
  artist: "Saints of the Knife",
  tracks: [
    {
      id: 10138,
      number: 1,
      name: "The Machine Sleeps",
      length: "3:57",
    },
    {
      id: 10139,
      number: 2,
      name: "A Seer",
      length: "2:47",
    },
    {
      id: 10140,
      number: 3,
      name: "Out Alive",
      length: "6:25",
    },
  ],
  released: new Date("2015-10-16"),
  cover: "sotk_ep.jpg",
  description:
    "Here's some information about the album. It was mainly recorded in Portland, OR, but vocals and finishing touches were tracked in Aldie, VA. Andy of Caïna said it was my best work to date, which was pretty nice of him. The last track is sort of a reharmonized cover of a Kesha b-side from her \"Warrior\" record; I'm not sure it's recognizable, though.",
};

export function AlbumPage() {
  const album = sample;
  // TODO: replace with real state
  const isLoading = false;
  const isPlaying = false;

  return (
    <main>
      <div className="flex flex-col gap-4">
        <AlbumInfoHeader
          cover={album.cover}
          name={album.name}
          artist={album.artist}
          released={album.released}
          tracks={album.tracks}
        />
        <TrackControls isLoading={isLoading} isPlaying={isPlaying} />
        <TrackList tracks={album.tracks} />
        <p className="text-md text-justify">{album.description}</p>
      </div>
    </main>
  );
}
