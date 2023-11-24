"use client";

import SongsItem from "@/components/SongsItem";
import { useEffect, useRef, useState } from "react";

const PageContent = ({ songs }) => {
  const [data, setData] = useState([])
    // {
    // id : 1,
    // title : "Like You Do",
    // artist : "joji",
    // audio : "/audios/like-you-do.mp3",
    // image : "/images/songs/joji-nectar.png"
    // },
    // {
    // id : 1,
    // title : "Like You Do",
    // artist : "joji",
    // audio : "/audios/like-you-do.mp3",
    // image : "/images/songs/joji-nectar.png"
    // }


  // const [songsitem, setSongsitem] = useState();

  // const ref = useRef();

  const url = "/text.JSON";

  // const url = {
  //   "id" : 1,
  //   "title" : "Like You Do",
  //   "artist" : "joji",
  //   "audio" : "/audios/like-you-do.mp3",
  //   "image" : "/images/songs/joji-nectar.png"
  // }

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

  // const returnData = () => {
  //   if (data !== null || data !== "") {
  //     console.log(data);
  //     data?.map((val) => {
  //       <p>khodam</p>
  //     });
  //   }
  //   console.log(songsitem);
  //   return songsitem;
  // };
  return (
    <div
      id="martike"
      // ref={ref}
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
      {/* {returnData()} */}
      {console.log(data)}
      {data.map(val => <div key={val.id}><SongsItem song={val} onClick={'slam'} /></div>)}
    </div>
  );
};

export default PageContent;
