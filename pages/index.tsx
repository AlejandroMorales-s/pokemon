import { Layout } from "../components/layouts";
import Button from "@nextui-org/react/esm/button";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Layout title="Todos los Pokémons">
      <h1>Home</h1>
      <Button color={"warning"}>ola</Button>
    </Layout>
  );
};

export default Home;
