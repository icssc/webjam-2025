"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PRIZES } from "@/data/prizes";

const PrizeCard = ({
  prize,
  index,
}: {
  prize: (typeof PRIZES)[0];
  index: number;
}) => (
  <motion.div
    key={prize.label}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
  >
    <Card className="gap-3 p-3 w-[300px] h-[360px] border-2 border-amber-400/60 bg-gradient-to-br from-indigo-950 to-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-shadow duration-300 relative">
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-40 animate-pulse"
        style={{ animationDuration: "2s" }}
      />

      <CardContent className="px-0 relative z-10">
        <div className="bg-white/95 p-2 rounded-lg flex items-center justify-center">
          <Image
            src={prize.img}
            alt={prize.label}
            width={250}
            height={250}
            className="h-[250px] rounded-lg object-contain"
          />
        </div>
      </CardContent>

      <CardFooter className="justify-center relative z-10 h-full">
        <p className="text-lg font-bold text-amber-100 text-center drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
          {prize.label}
        </p>
      </CardFooter>
    </Card>
  </motion.div>
);

export function Prizes() {
  return (
    <div className="flex flex-col items-center my-24 mb-48 px-4">
      <div className="w-full max-w-[80%] space-y-8">
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Prizes
        </motion.div>
        <motion.span
          className="block text-lg sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Some of the featured prizes for outstanding projects!
        </motion.span>

        <div className="flex flex-col items-center gap-4 sm:hidden">
          {PRIZES.map((prize, index) => (
            <PrizeCard key={prize.label} prize={prize} index={index} />
          ))}
        </div>

        <div className="hidden sm:flex lg:hidden flex-col items-center gap-4 sm:gap-6">
          <div className="flex justify-center gap-4 sm:gap-6">
            {PRIZES.slice(0, 2).map((prize, index) => (
              <PrizeCard key={prize.label} prize={prize} index={index} />
            ))}
          </div>
          <div className="flex justify-center gap-4 sm:gap-6">
            {PRIZES.slice(2, 4).map((prize, index) => (
              <PrizeCard key={prize.label} prize={prize} index={index + 2} />
            ))}
          </div>
          <div className="flex justify-center gap-4 sm:gap-6">
            {PRIZES.slice(4).map((prize, index) => (
              <PrizeCard key={prize.label} prize={prize} index={index + 4} />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            {PRIZES.slice(0, 3).map((prize, index) => (
              <PrizeCard key={prize.label} prize={prize} index={index} />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {PRIZES.slice(3).map((prize, index) => (
              <PrizeCard key={prize.label} prize={prize} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
