import React, { createContext, useContext, useReducer } from "react";
import { Album } from "@/shared.types.ts";

interface IPlayerContentState {
  album: Album | null;
  currentTrackIndex: number;
}

interface IPlayerAction extends IPlayerContentState {
  type: "loaded_album" | "play_next" | "play_previous" | "default";
}

const PlayerContext = createContext<IPlayerContentState>({
  album: null,
  currentTrackIndex: -1,
});

const PlayerDispatchContext = createContext<React.Dispatch<IPlayerAction>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_v) => {},
);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [album, dispatch] = useReducer(playerStateReducer, {
    album: null,
    currentTrackIndex: -1,
  });

  return (
    <PlayerContext.Provider value={album}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}

export function usePlayerDispatch() {
  return useContext(PlayerDispatchContext);
}

function playerStateReducer(
  contentState: IPlayerContentState,
  action: IPlayerAction,
) {
  switch (action.type) {
    case "loaded_album": {
      return {
        ...contentState,
        album: action.album,
        currentTrackIndex: 0,
      };
    }
    case "play_next": {
      return {
        ...contentState,
        currentTrackIndex: contentState.currentTrackIndex + 1,
      };
    }
    case "play_previous": {
      return {
        ...contentState,
        currentTrackIndex: Math.max(contentState.currentTrackIndex - 1, 0),
      };
    }
    default: {
      throw new Error("Unknown action supplied: " + action?.type);
    }
  }
}
