export type Anime = {
  id: string;
  name: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
};

export type animeGenre = {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
};

export type animeScreenshot = {
  original: string;
  preview: string;
};
