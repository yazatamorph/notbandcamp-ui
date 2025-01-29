import { Button } from "@/components/ui/button.tsx";
import { LoaderCircle, Pause, Play } from "lucide-react";
import { Slider } from "@/components/ui/slider.tsx";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { usePlayer } from "@/features/player/context/PlayerContext.tsx";

export function PlayerControls() {
  const audioPlayer = useGlobalAudioPlayer();
  const { album, currentTrackIndex } = usePlayer();

  const handleClick = () => {
    if (audioPlayer.playing) {
      audioPlayer.togglePlayPause();
    } else {
      audioPlayer.play();
    }
  };

  const title = album?.tracks[currentTrackIndex].name || "Loading...";

  return (
    <div className="flex flex-row gap-4">
      <Button
        variant="secondary"
        disabled={!audioPlayer.isReady}
        onClick={handleClick}
      >
        {!audioPlayer?.isReady ? (
          <LoaderCircle className="animate-spin" />
        ) : audioPlayer?.playing ? (
          <Pause />
        ) : (
          <Play />
        )}
      </Button>
      <div className="flex-col justify-between align-top grow">
        <div>{title}</div>
        <Slider />
      </div>
    </div>
  );
}
