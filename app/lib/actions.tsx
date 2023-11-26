'use server';

import AnimeCard from '../components/AnimeCard';
import { Anime } from './type';

const LIMIT_PER_PAGE = 10;

export const fetchAnime = async (page: number) => {
  // console.log('Fetching anime...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const newLimit = page * LIMIT_PER_PAGE;
  // const result = await fetch(
  //   `https://shikimori.one/api/animes?page=${1}&limit=${newLimit}&order=popularity`
  // );

  const result = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${LIMIT_PER_PAGE}&order=popularity`
  );

  const animes = await result.json();

  return animes?.map((anime: Anime, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};
