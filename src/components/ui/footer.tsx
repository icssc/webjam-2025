"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isWalkingAway, setIsWalkingAway] = useState(false);
  const [isHoppingAway, setIsHoppingAway] = useState(false);
  const [isSlidingAway, setIsSlidingAway] = useState(false);
  const [isWalkingLeft, setIsWalkingLeft] = useState(false);

  const handleMysteriousClick = () => {
    setIsWalkingAway(true);
  };

  const handleHoldingHandsClick = () => {
    setIsHoppingAway(true);
  };

  const handleGarbageManClick = () => {
    setIsSlidingAway(true);
  };

  const handleStandingClick = () => {
    setIsWalkingLeft(true);
  };

  return (
    <div className="relative h-[100vh] w-full bg-[#000112]">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/lower/background.svg"
          alt="Castle background"
          fill
          className="object-cover select-none"
          priority
        />

        <motion.div
          className="absolute bottom-[13%] left-[5%] lg:block hidden cursor-pointer z-10"
          style={{ pointerEvents: isSlidingAway ? "none" : "auto" }}
          animate={
            isSlidingAway
              ? {
                  x: "-200%",
                  transition: { duration: 8, ease: "easeInOut" },
                }
              : {}
          }
          onClick={handleGarbageManClick}
        >
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/lower/anteater-ecofriendly.svg"
              alt="Anteater taking out the trash"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 144px, (min-width: 768px) 108px, 72px"
            />
          </div>
        </motion.div>
        <div className="absolute bottom-[50%] left-[1%] lg:left-[10%] xl:left-[20%] md:block hidden">
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/lower/anteater-roof.svg"
              alt="Anteater on the roof"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 144px, (min-width: 768px) 108px, 72px"
            />
          </div>
        </div>
        <motion.div
          className="absolute bottom-[15%] sm:left-[15%] lg:left-[34%] hidden sm:block cursor-pointer"
          style={{ pointerEvents: isWalkingLeft ? "none" : "auto" }}
          animate={
            isWalkingLeft
              ? {
                  x: "-400%",
                  transition: {
                    scaleX: { duration: 0.8 },
                    x: { duration: 8, delay: 0.8, ease: "easeInOut" },
                  },
                }
              : {}
          }
          onClick={handleStandingClick}
        >
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/lower/anteater-standing.svg"
              alt="Anteater standing"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 164px, (min-width: 768px) 123px, 82px"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] left-[35%] sm:left-[53%] cursor-pointer z-10"
          style={{ pointerEvents: isHoppingAway ? "none" : "auto" }}
          animate={
            isHoppingAway
              ? {
                  x: "400%",
                  y: [0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0],
                  transition: {
                    x: { duration: 8, ease: "easeInOut" },
                    y: { duration: 8, ease: "easeInOut" },
                  },
                }
              : {}
          }
          onClick={handleHoldingHandsClick}
        >
          <div className="relative h-[190px] w-[250px]">
            <Image
              src="/lower/anteater-holding-hands.svg"
              alt="Anteater holding hands"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 180px, (min-width: 768px) 135px, 90px"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[12%] left-[78%] lg:block hidden cursor-pointer"
          style={{ pointerEvents: isWalkingAway ? "none" : "auto" }}
          animate={
            isWalkingAway
              ? {
                  scaleX: -1,
                  x: "200%",
                  transition: {
                    scaleX: { duration: 0.8 },
                    x: { duration: 6, delay: 0.3, ease: "easeInOut" },
                  },
                }
              : {}
          }
          onClick={handleMysteriousClick}
        >
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/lower/anteater-mysterious.svg"
              alt="Mysterious anteater"
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
