import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
   <Container>
    <Heading> Marketplace</Heading>
   </Container>
  );
}


