
import React from "react"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { Component } from "react";

const activeChain = "sepolia";

export default function MyApp(){
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <Navbar/>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

