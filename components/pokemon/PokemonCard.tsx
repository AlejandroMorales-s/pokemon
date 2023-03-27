import { SmallPokemon } from "@/interfaces";
import { FC } from "react";
import { Card, Row, Text, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card onClick={onClick} hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image width="100%" height={140} src={img} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>#{id}</Text>
            <Text transform="capitalize">{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
