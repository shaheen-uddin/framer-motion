import React from "react";
import { motion } from "framer-motion";

export default function Simple() {
  return (
    <motion.div className="bg-red-400 border-slate-400 rounded-full w-64 h-64"
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 2}}
    />
  );
}
