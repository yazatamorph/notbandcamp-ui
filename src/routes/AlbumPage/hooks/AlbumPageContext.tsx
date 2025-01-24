import React, { createContext, useContext, useReducer } from "react";
import { Album } from "@/shared.types.ts";

interface IAlbumState {
  album: Album | null;
  currentTrackIndex: number;
}

interface IAlbumAction extends IAlbumState {
  type: "loaded_album" | "play_next" | "play_previous" | "default";
}

const AlbumContext = createContext<IAlbumState>({
  album: null,
  currentTrackIndex: -1,
});

const AlbumDispatchContext = createContext<React.Dispatch<IAlbumAction>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_v) => {},
);

export function AlbumProvider({ children }: { children: React.ReactNode }) {
  const [album, dispatch] = useReducer(albumStateReducer, {
    album: null,
    currentTrackIndex: -1,
  });

  return (
    <AlbumContext.Provider value={album}>
      <AlbumDispatchContext.Provider value={dispatch}>
        {children}
      </AlbumDispatchContext.Provider>
    </AlbumContext.Provider>
  );
}

export function useAlbum() {
  return useContext(AlbumContext);
}

export function useAlbumDispatch() {
  return useContext(AlbumDispatchContext);
}

function albumStateReducer(albumState: IAlbumState, action: IAlbumAction) {
  switch (action.type) {
    case "loaded_album": {
      return {
        ...albumState,
        album: action.album,
        currentTrackIndex: 0,
      };
    }
    case "play_next": {
      return {
        ...albumState,
        currentTrackIndex: albumState.currentTrackIndex + 1,
      };
    }
    case "play_previous": {
      return {
        ...albumState,
        currentTrackIndex: Math.max(albumState.currentTrackIndex - 1, 0),
      };
    }
    default: {
      throw new Error("Unknown action supplied: " + action?.type);
    }
  }
}
