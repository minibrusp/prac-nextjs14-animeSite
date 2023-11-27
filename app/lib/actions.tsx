'use server';

import Link from 'next/link';
import AnimeCard from '../components/AnimeCard';
import { Anime } from './type';

const LIMIT_PER_PAGE = 10;
const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchAnime = async (
  page: number,
  type: string,
  search?: string
) => {
  // console.log('Fetching anime...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  let searchURL = search === '' ? `${BASE_URL}/top/anime` : `${BASE_URL}/anime`;

  try {
    const result = await fetch(
      `${searchURL}?page=${page}&limit=${LIMIT_PER_PAGE}
      ${type !== 'all' ? '&type=' + type : ''}
      ${search !== '' ? '&q=' + search : ''}
      `
    );

    const animes = await result.json();

    // console.log(
    //   '***********************************************************************************'
    // );
    console.log(animes.data);
    // console.log(
    //   '***********************************************************************************'
    // );

    if (result.ok) {
      return animes.data?.map((anime: Anime, index: number) => (
        <Link key={`${anime.mal_id}-${index}`} href={`/anime/${anime.mal_id}`}>
          <AnimeCard anime={anime} index={index} />
        </Link>
      ));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeById = async (id: string) => {
  const result = await fetch(`https://shikimori.one/api/animes/${id}`);

  const data = await result.json();

  console.log(data);

  return data;
};
