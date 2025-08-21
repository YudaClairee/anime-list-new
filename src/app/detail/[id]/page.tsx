import { getAnimeDetail } from "@/services/getAnimeResponse";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data = await getAnimeDetail(id);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Header Section with Poster and Main Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Poster */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={
                  data.data.images?.jpg?.large_image_url ||
                  data.data.images?.jpg?.image_url ||
                  "/placeholder-anime.jpg"
                }
                alt={data.data.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Trailer Section */}
            {data.data.trailer?.youtube_id && (
              <div className="mt-6 w-full">
                <h3 className="text-xl font-bold text-white mb-3">
                  🎬 Trailer
                </h3>
                <div className="relative md:w-[800px] md:h-[400px] aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${data.data.trailer.youtube_id}`}
                    title={`${data.data.title} Trailer`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Title and Basic Info */}
          <div className="flex flex-row justify-between items-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {data.data.title}
              </h1>
              {data.data.title_english &&
                data.data.title_english !== data.data.title && (
                  <h2 className="text-xl text-gray-300 mb-2">
                    {data.data.title_english}
                  </h2>
                )}
              {data.data.title_japanese && (
                <h3 className="text-lg text-gray-400 mb-4">
                  {data.data.title_japanese}
                </h3>
              )}
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <Link href="/" className="text-white text-sm font-bold">
                Kembali
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500">
              <div className="bg-custom w-full h-full p-3 rounded-md">
                <h3 className="text-white text-sm font-bold mb-1">Tipe</h3>
                <p className="text-white text-lg font-semibold">
                  {data.data.type}
                </p>
              </div>
            </div>

            <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500">
              <div className="bg-custom w-full h-full p-3 rounded-md">
                <h3 className="text-white text-sm font-bold mb-1">Status</h3>
                <p className="text-white text-lg font-semibold">
                  {data.data.status}
                </p>
              </div>
            </div>

            <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500">
              <div className="bg-custom w-full h-full p-3 rounded-md">
                <h3 className="text-white text-sm font-bold mb-1">Episode</h3>
                <p className="text-white text-lg font-semibold">
                  {data.data.episodes || "N/A"}
                </p>
              </div>
            </div>

            <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500">
              <div className="bg-custom w-full h-full p-3 rounded-md">
                <h3 className="text-white text-sm font-bold mb-1">Ranking</h3>
                <p className="text-white text-lg font-semibold">
                  #{data.data.rank || "N/A"}
                </p>
              </div>
            </div>

            <div className="p-1 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
              <div className="bg-custom w-full h-full p-3 rounded-md">
                <h3 className="text-white text-sm font-bold mb-1">Score</h3>
                <p className="text-white text-lg font-semibold">
                  ⭐ {data.data.score || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                📅 Informasi Tayang
              </h3>
              <div className="space-y-2 text-gray-300">
                {data.data.aired?.string && (
                  <p>
                    <span className="font-semibold">Tayang:</span>{" "}
                    {data.data.aired.string}
                  </p>
                )}
                {data.data.season && data.data.year && (
                  <p>
                    <span className="font-semibold">Musim:</span>{" "}
                    {data.data.season} {data.data.year}
                  </p>
                )}
                {data.data.duration && (
                  <p>
                    <span className="font-semibold">Durasi:</span>{" "}
                    {data.data.duration}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                🏢 Studio & Info
              </h3>
              <div className="space-y-2 text-gray-300">
                {data.data.studios?.length > 0 && (
                  <p>
                    <span className="font-semibold">Studio:</span>{" "}
                    {data.data.studios[0].name}
                  </p>
                )}
                {data.data.source && (
                  <p>
                    <span className="font-semibold">Sumber:</span>{" "}
                    {data.data.source}
                  </p>
                )}
                {data.data.rating && (
                  <p>
                    <span className="font-semibold">Rating:</span>{" "}
                    {data.data.rating}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Genres */}
          {data.data.genres?.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3">🎭 Genre</h3>
              <div className="flex flex-wrap gap-2">
                {data.data.genres.map(
                  (genre: { mal_id: string; name: string }) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 bg-gradient-to-r from-orange-600 to-yellow-600 text-white text-sm font-medium rounded-full"
                    >
                      {genre.name}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Synopsis Section */}
      {data.data.synopsis && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">📖 Sinopsis</h3>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-justify">
              {data.data.synopsis}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
