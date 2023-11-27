"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import MediaItem from "./MediaItem";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Library = () => {
  const onClick = () => {
    // handle upload later
    toast.error('for next version')
  };

  const [data, setData] = useState([]);

  const url = "/text.JSON";

  async function imageSender() {
    const responsive = await fetch(url);
    const audio = await responsive.json();
    setData(audio);
  }

  useEffect(() => {
    imageSender();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {data.map((val) => (
          <div key={val.id}>
            <MediaItem song={val} onClick={() => {}} />
          </div>
        ))}
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
      </div>
    </div>
  );
};

export default Library;
