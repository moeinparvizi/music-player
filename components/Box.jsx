import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";


const Box = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
          bg-neutral-900
          rounded-lg
          h-fit
          w-full
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
