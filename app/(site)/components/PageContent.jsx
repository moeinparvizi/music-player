"use client";

import Player from "@/components/Player";
import SongsItem from "@/components/SongsItem";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageContent = ({ songs }) => {
  const [data, setData] = useState([]);

  const [onPlay, setOnPlay] = useState({
    status: "off",
    song: "",
  });

  const url = "/text.JSON";

  async function imageSender() {
    const responsive = await fetch(url);
    const audio = await responsive.json();
    setData(audio);
  }

  useEffect(() => {
    imageSender();
  }, []);

  if (songs.length == 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }

  return (
    <div
      id="martike"
      className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-8
      gap-4
      mt-4
    "
    >
      {data.map((val, i) => (
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0 + i / 2 } }}
          key={val.id}
          onClick={() => {
            setOnPlay({
              status: "on",
              song: val,
            });
          }}
        >
          <SongsItem song={val} />
        </motion.div>
      ))}
      <Player
        songs={data}
        song={onPlay.song}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
      />
    </div>
  );
};

export default PageContent;
