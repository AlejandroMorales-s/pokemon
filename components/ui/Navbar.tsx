import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "row",
        padding: "0x 20px",
        width: "100%",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Pokemon"
          width={70}
          height={70}
        />

        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </div>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};
