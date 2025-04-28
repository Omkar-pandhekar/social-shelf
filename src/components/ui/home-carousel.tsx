"use client";

import Image from "next/image";
import Carousel from "./carousel";

export default function HomeCarousel() {
  // Sample items for the carousel
  const carouselItems = [
    <div key="1" className="relative w-full h-[600px] md:h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
        alt="Books in a library"
        fill
        className="object-cover brightness-60"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Welcome to Social Shelf
        </h2>
        <p className="text-xl drop-shadow-lg">Your favorite online community</p>
      </div>
    </div>,
    <div key="2" className="relative w-full h-[600px] md:h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
        alt="Person reading a book"
        fill
        className="object-cover brightness-60"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Discover New Books
        </h2>
        <p className="text-xl drop-shadow-lg">Find your next favorite read</p>
      </div>
    </div>,
    <div key="3" className="relative w-full h-[600px] md:h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
        alt="People discussing in a book club"
        fill
        className="object-cover brightness-60"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Connect with Readers
        </h2>
        <p className="text-xl drop-shadow-lg">
          Join reading groups and discussions
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="w-full mb-16">
      <Carousel items={carouselItems} autoPlay={true} interval={5000} />
    </div>
  );
}
