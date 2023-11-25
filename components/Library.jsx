"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import MediaItem from "./MediaItem";
import { useEffect, useState } from "react";

const Library = () => {
  const onClick = () => {
    // handle upload later
    console.log("ai out line plus icon test");
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
      </div>
    </div>
  );
};

export default Library;
