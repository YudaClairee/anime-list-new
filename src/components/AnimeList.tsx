import Image from 'next/image';
import React from 'react'

interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

interface AnimeListProps {
  animeList: Anime[];
}

const AnimeList = ({ animeList }: AnimeListProps) => {
  
  return (
    <div className="grid grid-cols-4 gap-4 w-full p-8">
      {animeList.map((anime) => (
        <div key={anime.mal_id} className="flex flex-col justify-center items-center gap-2 bg-gray-200 p-2 rounded-md">
          <Image src={anime.images.webp.image_url} alt={anime.title} width={300} height={400} />
          <h2 className="text-lg font-bold">{anime.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default AnimeList