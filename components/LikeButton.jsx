"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({ songId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success("Successfully");
    }
  };
  return (
    <button onClick={handleLike} className="hover:opacity-75 transition">
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </button>
  );
};

export default LikeButton;
