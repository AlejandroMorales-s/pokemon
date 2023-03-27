import { GetStaticProps } from "next";
import { FC } from "react";

import { Grid } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface HomeProps {
  pokemons: SmallPokemon[];
}

const Home: FC<HomeProps> = ({ pokemons }) => {
  return (
    <Layout title="Todos los Pokémons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id: number = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      ...pokemon,
      id,
      img,
    };
  });

  return {
    props: { pokemons },
  };
};

export default Home;
