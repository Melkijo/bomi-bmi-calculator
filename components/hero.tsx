import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Navbar from "./navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <Button
          variant="secondary"
          className="mb-6 h-8 border px-3 font-medium sm:h-9 sm:px-4"
          asChild
        >
          <Link href="#" target="_blank">
            Just released the premium version <span>🎉</span>
          </Link>
        </Button>
        <h2 className="text-4xl leading-[1.2] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
        Bomi – Your Smart BMI Calculator
        </h2>
        <p className="text-muted-foreground mt-6 text-center text-xl tracking-normal text-balance sm:text-2xl sm:leading-normal md:text-3xl">
        Track your BMI, understand your health risks, and get simple tips for a healthier lifestyle.
        </p>
        <div className="mx-auto mt-14 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started <ArrowUpRight />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
