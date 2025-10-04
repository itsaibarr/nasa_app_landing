
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
    </div>
  );
}
