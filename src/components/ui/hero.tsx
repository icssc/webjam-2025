"use client";

import Image from "next/image";
import { CalendarIcon, MapPinnedIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [sunglassesClicks, setSunglassesClicks] = useState(0);
  const [dumplingClicks, setDumplingClicks] = useState(0);
  const [pairClicks, setPairClicks] = useState(0);
  const [peppyClicks, setPeppyClicks] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isDancing, setIsDancing] = useState(false);

  const floatingAnimation = {
    y: [0, -2, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const handleDumplingClick = () => {
    if (isWalking) return;
    setIsWalking(true);
    setDumplingClicks(dumplingClicks + 1);
    setTimeout(() => setIsWalking(false), 3000);
  };

  const handlePairClick = () => {
    setPairClicks(pairClicks + 1);
    if ((pairClicks + 1) % 3 === 0) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 2100);
    }
  };

  const handleSunglassesClick = () => {
    setSunglassesClicks(sunglassesClicks + 1);
    if ((sunglassesClicks + 1) % 3 === 0) {
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 600);
    }
  };

  const handlePeppyClick = () => {
    setPeppyClicks(peppyClicks + 1);
    if ((peppyClicks + 1) % 3 === 0) {
      setIsDancing(true);
      setTimeout(() => setIsDancing(false), 1200);
    }
  };

  return (
    <div className="relative h-[100vh] w-full bg-[#000237] flex justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/upper/background.svg"
          alt="Castle background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center top-[14%] space-y-8 px-4">
        <div className="relative flex flex-col items-center space-y-8 w-full max-w-3xl">
          <div className="relative text-center p-2 backdrop-blur-[5px]">
            <h1 className="font-bold tracking-tight text-[clamp(3rem,10vw,8rem)] leading-none whitespace-nowrap text-white drop-shadow-lg">
              WebJam 2025
            </h1>
            <p className="mt-2 text-center font-semibold w-[90%] md:w-[75%] lg:w-[75%] text-[clamp(1rem,2.5vw,1.25rem)] text-white/95 drop-shadow-md mx-auto">
              ICS Student Council&apos;s week-long web application competition
            </p>

            <div className="flex flex-col items-center justify-center gap-x-8 gap-y-2 md:flex-row mt-4">
              <div className="flex min-w-fit items-center space-x-2 font-semibold text-[clamp(0.875rem,2vw,1.125rem)] text-white/90 drop-shadow">
                <CalendarIcon className="w-5 h-5" />
                <p className="whitespace-nowrap">Nov. 3-7</p>
              </div>

              <div className="flex min-w-fit items-center space-x-2 font-semibold text-[clamp(0.875rem,2vw,1.125rem)] text-white/90 drop-shadow">
                <MapPinnedIcon className="w-5 h-5" />
                <p className="whitespace-nowrap">
                  Donald Bren Hall + Student Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 select-none">
        <motion.div
          className="absolute bottom-[2%] left-[5%] lg:left-[-5%] xl:left-[5%] lg:block hidden cursor-pointer"
          style={{ pointerEvents: isFlipping ? "none" : "auto" }}
          key={Math.floor(sunglassesClicks / 3)}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
          animate={isFlipping ? { rotate: [0, 360] } : floatingAnimation}
          transition={{ rotate: { duration: 0.6, ease: "easeInOut" } }}
          onClick={handleSunglassesClick}
        >
          <div className="relative h-[280px] w-[280px]">
            <Image
              src="/upper/anteater-sunglasses.svg"
              alt="Anteater with sunglasses"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 144px, (min-width: 768px) 108px, 72px"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[2%] left-[4%] lg:left-[18%] xl:left-[25%] hidden sm:block cursor-pointer"
          style={{ pointerEvents: isWalking ? "none" : "auto" }}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          animate={
            isWalking
              ? {
                  x: ["0%", "20%", "20%", "0%"],
                  rotate: [0, 1, -1, 1, -1, 1, -1, 0],
                  transition: {
                    duration: 3,
                    times: [0, 0.45, 0.55, 1],
                    ease: "easeInOut",
                  },
                }
              : floatingAnimation
          }
          onClick={handleDumplingClick}
        >
          <div className="relative h-[35vh] w-[35vh]">
            <Image
              src="/upper/anteater-dumpling.svg"
              alt="Anteater with dumpling"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 164px, (min-width: 768px) 123px, 82px"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[2%] left-[40%] sm:left-[55%] md:left-[55%] cursor-pointer"
          style={{ pointerEvents: isWalking || isJumping ? "none" : "auto" }}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
          animate={
            isJumping
              ? {
                  y: [0, -60, 0, -60, 0, -60, 0],
                  transition: {
                    duration: 2.1,
                    times: [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
                    ease: [
                      [0.33, 0, 0.67, 1],
                      [0.33, 0, 0.67, 1],
                      [0.33, 0, 0.67, 1],
                      [0.33, 0, 0.67, 1],
                      [0.33, 0, 0.67, 1],
                      [0.33, 0, 0.67, 1],
                    ],
                  },
                }
              : isWalking
              ? {
                  x: ["0%", "-20%", "-20%", "0%"],
                  rotate: [0, -1, 1, -1, 1, -1, 1, 0],
                  transition: {
                    duration: 3,
                    times: [0, 0.45, 0.55, 1],
                    ease: "easeInOut",
                  },
                }
              : floatingAnimation
          }
          onClick={handlePairClick}
        >
          <div className="relative h-[35vh] w-[35vh]">
            <Image
              src="/upper/anteater-pair.svg"
              alt="Anteater pair"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 180px, (min-width: 768px) 135px, 90px"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[8%] left-[88%] xl:left-[82%] lg:block hidden cursor-pointer"
          style={{ pointerEvents: isDancing ? "none" : "auto" }}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
          animate={
            isDancing
              ? {
                  rotate: [0, -5, 5, -5, 5, -5, 5, 0],
                  y: [0, -5, 0, -5, 0],
                  transition: { duration: 1.2, ease: "easeInOut" },
                }
              : floatingAnimation
          }
          onClick={handlePeppyClick}
        >
          <div className="relative h-[240px] w-[240px]">
            <Image
              src="/upper/anteater-peppy.svg"
              alt="Peppy anteater"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 152px, (min-width: 768px) 114px, 76px"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
