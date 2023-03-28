import { FC } from "react";

import { Grid } from "@nextui-org/react";

import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritesContainer: FC<{ pokemonIds: number[] }> = ({
  pokemonIds,
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonIds.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
