import { Button } from "@/components/ui/button.tsx";
import { LoaderCircle, Pause, Play } from "lucide-react";
import { Slider } from "@/components/ui/slider.tsx";

interface TrackControlsProps {
  isLoading: boolean;
  isPlaying: boolean;
}

export function TrackControls({ isLoading, isPlaying }: TrackControlsProps) {
  return (
    <div className="flex flex-row gap-4">
      <Button variant="secondary" disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className="animate-spin" />
        ) : isPlaying ? (
          <Pause />
        ) : (
          <Play />
        )}
      </Button>
      <div className="flex-col justify-between align-top grow">
        <div>The Machine Sleeps</div>
        <Slider />
      </div>
    </div>
  );
}
