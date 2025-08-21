import { getAnimeResponse } from "@/services/getAnimeResponse";
import AnimeList from "@/components/AnimeList";
import React from "react";

const SearchedAnime = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = await params;

  const decodedKeyword = decodeURI(keyword);

  const data = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search Results Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            🔍 Hasil Pencarian untuk{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              &quot;{decodedKeyword}&quot;
            </span>
          </h1>
          <p className="text-white/70">Ditemukan {data.data.length} anime</p>
        </div>

        {/* Search Results Grid */}
        <AnimeList animeList={data.data} />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {data.data.map((anime: Anime) => (
            <Link 
              key={anime.mal_id} 
              href={`/detail/${anime.mal_id}`}
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
            </Link>
          ))}
        </div> */}

        {/* No Results Message */}
        {data.data.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Tidak ada anime yang ditemukan
            </h2>
            <p className="text-white/70">
              Coba kata kunci yang berbeda atau periksa ejaan kamu
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchedAnime;
