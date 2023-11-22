"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai"

const Library = () => {
  const onClick = () => {
    // handle upload later
    console.log('ai out line plus icon test');
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
          <AiOutlinePlus size={26} className="text-neutral-400" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Library;
