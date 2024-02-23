import { motion } from "framer-motion";
export default function Box3() {
  return (
    <div className=" w-11/12 mx-auto my-5">
      <motion.div
        className="w-64 h-64 border border-sky-400 bg-blue-400"
        animate={{
          scale: [1, 1.4, 0.4, 1, 3, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{ duration: 10 }}
      ></motion.div>
    </div>
  );
}
