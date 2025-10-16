"use client";

import { motion } from "framer-motion";
import { UserPlus, Users } from "lucide-react";

export function Apply() {
  return (
    <div className="relative bg-gradient-to-b from-[#000237] to-[#032b63] py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Join WebJam 2025
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSffwIeZdt4HgYfbhS4P57vAPbqJtDbzMk0S52lCrIbB8SWz9w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative block"
          >
            <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-lg shadow-2xl overflow-hidden p-8 h-full transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,159,64,0.4)] border-2 border-[#002457]/30">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #002457 0px,
                  #002457 1px,
                  transparent 1px,
                  transparent 8px
                )`,
                }}
              />

              <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                <div className="bg-[#002457] p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-12 h-12 text-amber-50" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#002457] uppercase tracking-wide text-center">
                  Apply as a Participant
                </h3>
                <div className="pt-4">
                  <span className="inline-block bg-[#002457] text-amber-50 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider group-hover:bg-[#003872] transition-colors duration-300">
                    Register Now →
                  </span>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMz5VCp3_ayOj9YSrAy9mBImCkCRAuj3GZrTomiNLbl33gng/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative block"
          >
            <div className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 rounded-lg shadow-2xl overflow-hidden p-8 h-full transition-all duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] border-2 border-[#002457]/30">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #002457 0px,
                    #002457 1px,
                    transparent 1px,
                    transparent 8px
                  )`,
                }}
              />

              <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                <div className="bg-[#002457] p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-blue-50" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#002457] uppercase tracking-wide text-center">
                  Apply as a Mentor
                </h3>

                <div className="pt-4">
                  <span className="inline-block bg-[#002457] text-blue-50 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider group-hover:bg-[#003872] transition-colors duration-300">
                    Mentor Now →
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Apply;
