import React from "react";
import Stats from "../ui/stats";
import Feature from "../ui/feature";
import Hero from "./hero";
import Slider from "./Slider";
import Books from "../ui/Books";

export default function Home() {
  return (
    <>
      <Slider />
      <Hero />
      <Stats />
      <Feature />
      {/* <Books /> */}
    </>
  );
}
