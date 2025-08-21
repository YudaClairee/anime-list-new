export const getAnimeResponse = async (resource: string, query: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAnimeResponseWithoutQuery = async (resource: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/${resource}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAnimeDetail = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNestedAnime = async (resource: string) => {
  const data = await getAnimeResponseWithoutQuery(resource);

  // Biasanya error "not a function" di flatMap itu karena data yang di-return bukan array, bisa jadi object.
  // Cek dulu data?.data itu array atau bukan
  if (!data || !Array.isArray(data.data)) {
    // Kalau bukan array, balikin array kosong aja biar aman
    return [];
  }

  // Baru bisa flatMap
  return data.data.flatMap(
    (item: {
      entry: {
        mal_id: string;
        title: string;
        url: string;
        images: { webp: { image_url: string } };
      }[];
    }) => item.entry
  );
};
