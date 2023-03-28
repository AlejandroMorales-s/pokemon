import { FC, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { PokemonFullResponse, PokemonListResponse } from "@/interfaces";
import { getPokemonInfo, localFavorites } from "@/utils";
import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";

interface PokemonProps {
  pokemon: PokemonFullResponse;
}

const PokemonByName: FC<PokemonProps> = ({ pokemon }) => {
  const { name, sprites, id } = pokemon;

  const [inFavorites, setInFavorites] = useState(
    localFavorites.existsInFavorites(id)
  );

  const handleAddToFavorites = () => {
    localFavorites.toggleFavorite(id);
    setInFavorites(!inFavorites);
  };

  return (
    <Layout title={name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  sprites.other?.dream_world.front_default || "/no-image.png"
                }
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button
                onClick={handleAddToFavorites}
                color="gradient"
                ghost={!inFavorites}
              >
                {inFavorites ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  const pokemonsName = data.results.map(({ name }) => ({
    params: { name },
  }));

  return {
    paths: pokemonsName,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: { pokemon },
    revalidate: 86400, // 24 hours
  };
};

export default PokemonByName;
