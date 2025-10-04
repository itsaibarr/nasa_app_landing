"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface Slide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Overwhelming Amount of Data",
    description:
      "Every day, satellites generate petabytes of raw Earth imagery. Without automated tools, most of this information goes unused. Critical changes on the ground often remain unnoticed simply because the data volume is too massive for humans to analyze in time.",
    imageSrc: "/card-1.png",
    imageAlt: "Earth satellite imagery",
  },
  {
    id: 2,
    title: "Clouds Hide the Truth",
    description:
      "Traditional optical satellites cannot see through clouds, smoke, or darkness. During floods, storms, or wildfires, visibility is often at its worst—precisely when accurate information is needed most. This leaves emergency responders blind to real conditions on the ground.",
    imageSrc: "/card-2.png",
    imageAlt: "Disaster response team",
  },
  {
    id: 3,
    title: "Too Late to Respond",
    description:
      "Even when data is available, delays in analysis and reporting mean that emergency services act too slowly. By the time help arrives, damage has already escalated, resources are wasted, and human lives are put at greater risk.",
    imageSrc: "/card-3.png",
    imageAlt: "Real-time data visualization",
  },
];

export default function DisasterInfoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const changeSlide = (index: number) => {
    if (index === currentIndex) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });

    tl.to([textRef.current, imageRef.current], { opacity: 0, y: 20 })
      .call(() => setCurrentIndex(index))
      .to([textRef.current, imageRef.current], { opacity: 1, y: 0 });
  };

  const nextSlide = () => changeSlide((currentIndex + 1) % slides.length);
  const prevSlide = () => changeSlide((currentIndex - 1 + slides.length) % slides.length);

  return (
    <div id="problem" className="bg-[#000] w-full">
      <div className="container text-white">
        {/* Left side content */}
        <div className="flex flex-col w-[1420px] mt-[10vh]">
          <div ref={textRef}>
            <div className="flex items-center justify-between">
              <h3 className="main_title">What prevents you from noticing disasters in time?</h3>
                  {/* Right side buttons */}
              <div className="flex flex-row space-x-4">
                <button
                  onClick={prevSlide}
                  className="px-4 py-2 rounded-[5px] bg-white"
                  aria-label="Previous slide"
                >
                  <Image
                    src="/arrow-left-long.svg"
                    alt="Previous"
                    width={60}
                    height={14}
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="px-4 py-2 rounded-[5px] bg-white"
                  aria-label="Next slide"
                >
                  <Image
                    src="/arrow-right-long.svg"
                    alt="Next"
                    width={60}
                    height={14}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[5vh]">
              <div className="flex items-center gap-10">
                <h1 className="text-[120px] font-[500]">{slides[currentIndex].id + ')'}</h1>
                <h1 className="text-[60px] font-[500] max-w-[520px]">{slides[currentIndex].title}</h1>
              </div>
            <p className="text-base max-w-[440px]">{slides[currentIndex].description}</p>
            </div>
          </div>
          <div
            ref={imageRef}
            className="rounded-[15px] overflow-hidden mix-blend-difference shadow-[0_4px_100px_0_rgba(129,124,124,0.25)] mt-[5vh] mb-[10vh]"
          >
            <Image
              src={slides[currentIndex].imageSrc}
              alt={slides[currentIndex].imageAlt}
              width={1440}
              height={670}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
