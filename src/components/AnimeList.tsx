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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {animeList.map((anime) => (
        <div 
          key={anime.mal_id} 
          className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/15"
        >
          <div className="relative overflow-hidden">
            <Image 
              src={anime.images.webp.image_url} 
              alt={anime.title} 
              width={300} 
              height={400} 
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4">
            <h2 className="text-sm lg:text-base font-semibold text-white line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300">
              {anime.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimeList