"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SPONSORS } from "@/data/sponsors";

export function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center my-24 mb-48 relative">
      <div className="z-10 w-[80%] space-y-8">
        <motion.div
          className="flex text-7xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sponsors
        </motion.div>
        <motion.span
          className="block text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thank you to our amazing sponsors!
        </motion.span>

        <div className="flex flex-row flex-wrap justify-center items-center gap-12 pt-8">
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  src={sponsor.img}
                  alt={sponsor.alt}
                  width={200}
                  height={120}
                  className="h-[120px] w-[200px] object-contain pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
