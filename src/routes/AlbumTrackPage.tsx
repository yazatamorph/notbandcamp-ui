import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Player } from "@/components";
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

export function AlbumTrackPage() {
  const album = sample;
  return (
    <main>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-8">
          <Player album={album} />
          <p className="text-md text-justify">{album.description}</p>
        </div>
        <div className="flex flex-col gap-8">
          <AspectRatio ratio={1} className="bg-muted">
            <img
              src={album.cover}
              alt="album artwork"
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </main>
  );
}
