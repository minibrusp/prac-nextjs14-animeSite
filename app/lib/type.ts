export enum animeRating {
  'g' = 'G - All Ages',
  'pg' = 'PG - Children',
  'pg13' = 'PG-13 - Teens 13 or older',
  'r17' = 'R - 17+ (violence & profanity)',
  'r' = 'R+ - Mild Nudity',
  'rx' = 'Rx - Hentai',
}

export type animeImage = {
  jpg: {
    image_url: 'string';
    small_image_url: 'string';
    large_image_url: 'string';
  };
  webp: {
    image_url: 'string';
    small_image_url: 'string';
    large_image_url: 'string';
  };
};

export type date = {
  day: number;
  month: number;
  year: number;
};

export type animeType =
  | 'all'
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'ona'
  | 'music';

export type airingStatus =
  | 'Finished Airing'
  | 'Currently Airing'
  | 'Not yet aired';

export type animeSeason = 'summer' | 'winter' | 'spring' | 'fall';

export type Anime = {
  mal_id: number;
  url: 'string';
  images: animeImage;
  trailer: {
    youtube_id: 'string';
    url: 'string';
    embed_url: 'string';
  };
  approved: boolean;
  titles: [
    {
      type: 'string';
      title: 'string';
    }
  ];
  title: 'string';
  title_english: 'string';
  title_japanese: 'string';
  title_synonyms: ['string'];
  type: animeType;
  source: 'string';
  episodes: number;
  status: airingStatus;
  airing: boolean;
  aired: {
    from: 'string';
    to: 'string';
    prop: {
      from: date;
      to: date;
      string: 'string';
    };
  };
  duration: 'string';
  rating: animeRating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: 'string';
  background: 'string';
  season: animeSeason;
  year: number;
  broadcast: {
    day: 'string';
    time: 'string';
    timezone: 'string';
    string: 'string';
  };
  producers: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  studios: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  genres: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  themes: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: 'string';
      name: 'string';
      url: 'string';
    }
  ];
};
