import { motion } from "framer-motion";
import { useState } from "react";
export default function Box1() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className=" w-11/12 mx-auto my-5">
      <motion.div
        className="w-64 h-64 border border-orange-400 bg-orange-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        dragConstraints={{ right: 200, left: -10, top: 100, bottom: 10 }}
        drag
      ></motion.div>
    </div>
  );
}
