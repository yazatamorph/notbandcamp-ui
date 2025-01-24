import { AudioLoadOptions, useAudioPlayer } from "react-use-audio-player";

export function useAudio() {
  const player = useAudioPlayer();

  // set up some defaults for the load method
  player.load = (src: string, opts: AudioLoadOptions | undefined = {}) =>
    player.load(src, {
      loop: false,
      autoplay: false,
      initialVolume: 0.9,
      initialRate: 1,
      format: "mp3",
      html5: true,
      ...opts,
    });

  return player;
}
