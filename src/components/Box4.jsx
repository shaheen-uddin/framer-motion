import { motion, useAnimation } from "framer-motion";
export default function Box4() {
  const control = useAnimation();
  return (
    <div className=" w-11/12 mx-auto my-5">
      <p className="flex justify-center space-x-7">
        <button
          className="btn-orange"
          onClick={() => {
            control.start({
              x: 1500,
              transition: { duration: 2 },
            });
          }}
        >
          Move Right
        </button>
        <button
          className="btn-orange"
          onClick={() => {
            control.start({
              x: -150,
              transition: { duration: 2 },
            });
          }}
        >
          Move Left
        </button>
        <button
          className="btn-orange"
          onClick={() => {
            control.start({
              rotate: [20, 150, 270, 270, 20],
              borderRadius: "100%",
              transition: { duration: 5 },
            });
          }}
        >
          Circle
        </button>
        <button
          className="btn-orange"
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: { duration: 2 },
            });
          }}
        >
          Square
        </button>
        <button
          className="btn-orange"
          onClick={() => {
            control.stop();
          }}
        >
          Stop
        </button>
      </p>
      <motion.div
        className="w-64 h-64 border border-sky-400 bg-blue-400"
        animate={control}
      ></motion.div>
    </div>
  );
}
