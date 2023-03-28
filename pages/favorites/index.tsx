import { useState } from "react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritesContainer } from "@/components/pokemon";

const Favorites = () => {
  const [favorites] = useState(localFavorites.pokemonsInFavorites());

  return (
    <Layout title="Favorites">
      {favorites.length > 0 ? (
        <FavoritesContainer pokemonIds={favorites} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
