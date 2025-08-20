import AnimeList from "@/components/AnimeList";
import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=8');
  const data = await res.json();

  return (
    <AnimeList animeList={data.data} />
  );
}
