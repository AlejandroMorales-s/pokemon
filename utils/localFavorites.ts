const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existsInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false; // This is for SSR (Server Side Rendering

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemonsInFavorites = (): number[] => {
  if (typeof window === "undefined") return []; // This is for SSR (Server Side Rendering
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existsInFavorites, pokemonsInFavorites };
