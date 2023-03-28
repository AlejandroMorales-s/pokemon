import { pokeApi } from "@/api";
import { PokemonFullResponse } from "@/interfaces";

const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFullResponse>(
      `/pokemon/${nameOrId}`
    );

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};

export default getPokemonInfo;
