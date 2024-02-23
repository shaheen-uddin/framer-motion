import { motion } from "framer-motion";
import { useState } from "react";
export default function Box() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className=" w-11/12 mx-auto my-5">
      <motion.div
        className="w-64 h-64 border border-orange-400 bg-sky-400 "
        animate={{
          x: animate ? "100rem" : 0,
          opacity: animate ? 1 : 0.3,
          rotate: animate ? 360 : 0,
          scale: animate ? 2 : 0.3,
        }}
        initial={{ opacity: 0.5, scale: 0.3 }}
        transition={{ type: "spring", stiffness: 30 }}
        onClick={() => setAnimate(!animate)}
      ></motion.div>
    </div>
  );
}
