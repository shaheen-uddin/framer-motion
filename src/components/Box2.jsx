import { motion } from "framer-motion";
import { useState } from "react";
export default function Box2() {
  const [boxes, setBoxes] = useState();
  const boxVariant = {
    hidden: {
      x: "-100vw",
      /*   scale: 1.5,
      backgroundColor: "black", */
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: "-10",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" w-11/12 mx-auto my-5">
      <motion.div
        className="w-64 h-64 border border-orange-400 bg-orange-400"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3, 4].map((box) => {
          return (
            <motion.p
              key={box}
              className="w-4 bg-white list-none mx-auto h-4 text-center p-2 m-2"
              variants={listVariant}
            ></motion.p>
          );
        })}
      </motion.div>
    </div>
  );
}
