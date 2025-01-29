import { useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  PlayerInfoHeader,
  PlayerControls,
  PlayerTrackList,
  PlayerProvider,
  usePlayer,
  usePlayerDispatch,
} from "@/features/player";
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

export function Release() {
  return (
    <PlayerProvider>
      <ReleaseComponent />
    </PlayerProvider>
  );
}

function ReleaseComponent() {
  const { album } = usePlayer();
  const albumDispatch = usePlayerDispatch();
  // TODO: replace with router-path-derived state
  const audioPlayer = useGlobalAudioPlayer();

  useEffect(() => {
    // This timeout simulates loading album info from server (very slowly)
    setTimeout(() => {
      albumDispatch({
        type: "loaded_album",
        album: sample,
        currentTrackIndex: 0,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    audioPlayer.load(
      "https://rfcm.streamguys1.com/todayhits-mp3?aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1737406933&aw_0_1st.bundleId=tunein.com&lat=33.6194&lon=-111.9556&listenerid=89929a65f0ac2e2c5d761dccadd4cb1a&aw_0_1st.abtest=6263%2c6271&partnerId=RadioTime&aw_0_1st.stationId=s242677&aw_0_1st.premium=false&source=TuneIn&aw_0_req.gdpr=true&us_privacy=1YNY&aw_0_1st.platform=tunein&aw_0_1st.genre_id=g61&aw_0_1st.class=music&aw_0_1st.ads_partner_alias=dsk.Web&aw_0_azn.planguage=en&aw_0_1st.is_ondemand=false&aw_0_1st.topicId=na&aw_0_1st.affiliateIds=a39100%2ca39110%2ca39905%2ca40156%2ca40075&aw_0_1st.bandId=16",
      {
        html5: true,
        format: "mp3",
        autoplay: false,
      },
    );
  }, []);

  return (
    <main>
      <div className="flex flex-col gap-4">
        <PlayerInfoHeader />
        <PlayerControls />
        <PlayerTrackList />
        {album ? (
          <p className="text-md text-justify">{album.description}</p>
        ) : (
          <DescSkeleton />
        )}
      </div>
    </main>
  );
}

function DescSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 flex-grow" />
      <Skeleton className="h-4 flex-grow mt-3" />
      <Skeleton className="h-4 flex-grow mt-3" />
      <Skeleton className="h-4 w-1/2 mt-3" />
    </div>
  );
}
