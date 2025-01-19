export type Track = {
  id: number;
  number: number;
  name: string;
  length: string;
};

export type Album = {
  id: number;
  owner_id: number;
  name: string;
  artist: string;
  tracks: Track[];
  released: Date;
  cover: string;
  description: string;
};
