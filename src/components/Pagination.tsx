'use client'

import React, { useEffect, useState } from 'react'
import AnimeList from './AnimeList';

const Pagination = () => {

  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
        const data = await res.json();
        setAnimeList(data.data);
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
            <AnimeList animeList={animeList} />
        )}
        <div className='flex justify-center items-center gap-4'>
            <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed' disabled={page === 20} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    </div>
  )
}

export default Pagination