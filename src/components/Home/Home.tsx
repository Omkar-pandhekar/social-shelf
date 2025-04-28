import React from "react";
import HomeCarousel from "../ui/home-carousel";
import Stats from "../ui/stats";
import CountUp from "../TextAnimations/CountUp/CountUp";
import Feature from "../ui/feature";
import { MarqueeDemo } from "../ui/marquee";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HomeCarousel />
      <Feature />
      <Stats />
      <MarqueeDemo />

      {/* CountUp Section */}
      <div className="flex justify-center items-center py-12">
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={2}
          className="count-up-text text-6xl font-bold"
        />
        <h1 className="text-5xl font-extrabold">+</h1>
      </div>
    </>
  );
}
