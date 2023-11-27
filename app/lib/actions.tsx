'use server';

import Link from 'next/link';
import AnimeCard from '../components/AnimeCard';
import { Anime } from './type';

const LIMIT_PER_PAGE = 10;

export const fetchAnime = async (page: number, type: string) => {
  // console.log('Fetching anime...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const newLimit = page * LIMIT_PER_PAGE;
  // const result = await fetch(
  //   `https://shikimori.one/api/animes?page=${1}&limit=${newLimit}&order=popularity`
  // );

  const result = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${LIMIT_PER_PAGE}&kind=${type}&order=popularity`
  );

  const animes = await result.json();

  return animes?.map((anime: Anime, index: number) => (
    <Link key={anime.id} href={`/anime/${anime.id}`}>
      <AnimeCard anime={anime} index={index} />
    </Link>
  ));
};

export const fetchAnimeById = async (id: string) => {
  const result = await fetch(`https://shikimori.one/api/animes/${id}`);

  const data = await result.json();

  console.log(data);

  return data;
};
