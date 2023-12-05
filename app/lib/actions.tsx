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
      ${search !== '' ? '&q=' + search : ''}
      ${type !== 'all' ? '&type=' + type : ''}
      `
    );

    const animes = await result.json();

    if (result.ok) {
      return animes.data?.map((anime: Anime, index: number) => (
        <Link key={`${anime.mal_id}-${index}`} href={`/anime/${anime.mal_id}`}>
          <AnimeCard anime={anime} index={index} />
        </Link>
      ));
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchAnimeById = async (id: string) => {
  try {
    const result = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);

    const anime = await result.json();

    return anime.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime.');
  }
};

export const fetchAnimePhotosById = async (id: string) => {
  try {
    const result = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`);

    const animePhotos = await result.json();

    // console.log(animePhotos.data);

    return animePhotos.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime photos.');
  }
};

export const fetchAnimeTrailersById = async (id: string) => {
  try {
    const result = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`);

    const animeTrailers = await result.json();

    return animeTrailers.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime trailers.');
  }
};

export const fetchCharacterWithVActorByAnimeId = async (id: string) => {
  try {
    const result = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    );

    const animeChar = await result.json();

    return animeChar.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime characters.');
  }
};

export const fetchAnimeStaffs = async (id: string) => {
  try {
    const result = await fetch(`https://api.jikan.moe/v4/anime/${id}/staff`);

    const staffs = await result.json();

    return staffs.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime staffs.');
  }
};

export const fetchAnimeReviews = async (id: string) => {
  try {
    const result = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);

    const reviews = await result.json();

    return reviews.data;
  } catch (error: any) {
    console.error('api error:', error);
    throw new Error('Failed to fetch anime reviews.');
  }
};
