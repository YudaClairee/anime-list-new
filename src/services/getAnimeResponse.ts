export const getAnimeResponse = async (resource: string, query: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getAnimeDetail = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}