import { FC } from "react";

import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";

export const FavoriteCardPokemon: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid onClick={handleClick} xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        hoverable
        clickable
        css={{
          padding: 10,
        }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
