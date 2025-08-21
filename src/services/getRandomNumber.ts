// fungsi ini bakal ngasih array berisi 8 angka random unik dari rentang 0-200
export const getRandomIndexes = (max: number, count: number = 8): number[] => {
  const indexes: Set<number> = new Set();
  while (indexes.size < count) {
    const rand = Math.floor(Math.random() * (max + 1));
    indexes.add(rand);
  }
  return Array.from(indexes);
};
