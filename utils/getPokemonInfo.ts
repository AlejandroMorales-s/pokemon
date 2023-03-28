import { pokeApi } from "@/api";
import { PokemonFullResponse } from "@/interfaces";

const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<PokemonFullResponse>(
    `/pokemon/${nameOrId}`
  );

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};

export default getPokemonInfo;
