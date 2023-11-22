"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

const Header = ({ children, className }) => {
  const router = useRouter();

  const logOut = () => {
    // handle logout for future
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <motion.div
          initial={{ overflow: 0, visibility: "hidden", x: 300 }}
          whileInView={{ overflow: 1, visibility: "visible", x: 0 }}
          className="hidden md:flex gap-x-2 items-center"
        >
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
