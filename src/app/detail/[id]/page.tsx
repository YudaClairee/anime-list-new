import { getAnimeDetail } from '@/services/getAnimeResponse';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {

  const { id } = await params;

  const data = await getAnimeDetail(id);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-4'>
          <div className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500'>
            <div className='bg-custom w-full h-full p-2'>
             <h3 className='text-white text-lg font-bold'>Tipe</h3> 
            <p className='text-white text-md font-semibold'>{data.data.type}</p>
            </div>
          </div>
          <div className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500'>
            <div className='bg-custom w-full h-full p-2'>
            <h3 className='text-white text-lg font-bold'>Status</h3>
            <p className='text-white text-md font-semibold'>{data.data.status}</p>
            </div>
          </div>
          <div className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500'>
            <div className='bg-custom w-full h-full p-2'>
            <h3 className='text-white text-lg font-bold'>Total Episode</h3>
            <p className='text-white text-md font-semibold'>{data.data.episodes}</p>
            </div>
          </div>
          <div className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500'>
            <div className='bg-custom w-full h-full p-2'>
            <h3 className='text-white text-lg font-bold'>Ranking</h3>
            <p className='text-white text-md font-semibold'>{data.data.rank}</p>
            </div>
          </div>
          <div className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500'>
            <div className='bg-custom w-full h-full p-2'>
            <h3 className='text-white text-lg font-bold'>Score</h3>
            <p className='text-white text-md font-semibold'>{data.data.score}</p>
            </div>
          </div>
        </div>
        <h1>Detail Anime</h1>
        <p>ID: {id}</p>
        <h2>Judul anime: {data.data.title}</h2>
      </div>
    </div>
  )
}

export default page