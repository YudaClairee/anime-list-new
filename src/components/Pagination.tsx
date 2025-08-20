'use client'

import React, { useEffect, useState } from 'react'
import AnimeList from './AnimeList';
import { getAnimeResponse } from '@/services/getAnimeResponse';

interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

const Pagination = () => {

  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [pagination, setPagination] = useState({ last_visible_page: 1, has_next_page: false });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        setIsLoading(true);
        const data = await getAnimeResponse('top/anime', `page=${page}`);
        setAnimeList(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnimeList();
  }, [page]);



  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {error && <div className='text-red-500'>Error fetching anime list</div>}
      
        {isLoading ? (
            <div className='flex justify-center items-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500'></div>
            </div>
        ) : (
            animeList.length > 0 && <AnimeList animeList={animeList} />
        )}
        <div className='flex justify-center items-center gap-4'>
            <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <span className='text-white'>{page} / {pagination.last_visible_page}</span>
            <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed' disabled={!pagination.has_next_page} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    </div>
  )
}

export default Pagination