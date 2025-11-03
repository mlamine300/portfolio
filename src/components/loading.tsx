"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
}
