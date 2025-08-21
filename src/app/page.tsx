import AnimeList from "@/components/AnimeList";
import { getAnimeResponse, getNestedAnime } from "@/services/getAnimeResponse";
import { getRandomIndexes } from "@/services/getRandomNumber";
import Link from "next/link";

export default async function Home() {
  const data = await getAnimeResponse("top/anime", "limit=8");
  let rekomendasi = await getNestedAnime("recommendations/anime");
  const randomIndexes = getRandomIndexes(rekomendasi.length, 8);
  rekomendasi = {
    data: randomIndexes.map((index: number) => rekomendasi[index]),
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Selamat Datang di{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              AnimeList
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
            Jelajahi koleksi anime terbaik sepanjang masa. Temukan anime
            kesukaanmu dan nikmati perjalanan menakjubkan di dunia anime!
          </p>
        </div>
      </section>

      {/* Top Anime Section */}
      <section className="px-6 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              🏆 Top Anime Terpopuler
            </h2>
            <Link
              href="/popular"
              className="text-lg text-white/80 hover:text-white hover:underline"
            >
              Lihat Semua
            </Link>
          </div>
          <AnimeList animeList={data.data} />
        </div>
      </section>
      <section className="px-6 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              ⌛ Rekomendasi Anime
            </h2>
          </div>
          <AnimeList animeList={rekomendasi.data} />
        </div>
      </section>
    </div>
  );
}
