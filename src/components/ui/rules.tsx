"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Rules() {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="z-10 w-[80%] space-y-8">
        <motion.div
          className="flex text-7xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Rules & Code of Conduct
        </motion.div>

        <motion.span
          className="block text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          By participating in WebJam, you agree to abide by&nbsp;
          <Link
            href="https://drive.google.com/file/d/1_OfC_ZJatvuQHCF8C3rziFulZEso_m7c/view"
            target="_blank"
          >
            <span className="underline underline-offset-2">
              our rules & code of conduct
            </span>
          </Link>
          .
        </motion.span>
      </div>
    </div>
  );
}

export default Rules;
