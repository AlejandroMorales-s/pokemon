import React, { FC } from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alejandro Morales" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
