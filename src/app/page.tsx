import CountUp from "@/components/TextAnimations/CountUp/CountUp";
import HomeCarousel from "@/components/ui/home-carousel";
import Stats from "@/components/ui/stats";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HomeCarousel />
      <Stats />

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
