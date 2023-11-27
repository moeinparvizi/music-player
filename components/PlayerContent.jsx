"use client";

import { useEffect, useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import { Slider } from "@mui/material";
import { motion } from "framer-motion";

const PlayerContent = ({ song, songs }) => {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState();

  const [music, setMusic] = useState(song)
  const [flag, setFlag] = useState()
  const [flagn, setFlagn] = useState()

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;

  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    console.log('next');
    songs.map(val => {
      if (val.id == song.id){
        setFlag(song.id + 1)
        handlePlay()
      }
      if (val.id == flag) {
        setMusic(val)
      }
    })
  }

  const onPlayPrevious = () => {
    console.log('prev');
    songs.map(val => {
      if (val.id == music){
        setFlag(song.id - 1)
      }
      if (val.id == flagn) {
        setMusic(val)
      }
    })
  }

  const handlePlay = () => {
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(()=> {
    handlePlay()
  },[song])

  const toggleMute = () => {
    if (ref.current.volume == '0') {
      ref.current.volume = '1'
      setVolume(1)
    } else {
      ref.current.volume = '0'
      setVolume(0)
    }
  }

  const handleVolume = (e) => {
    ref.current.volume = e.target.value / 100
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 300,
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className="grid grid-cols-2 md:grid-cols-3 h-full"
    >
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem song={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <audio ref={ref} src={song.audio}></audio>

      <div
        className="
            flex
            md:hidden
            col-auto
            w-full
            justify-end
            items-center
          "
      >
        <div
          onClick={handlePlay}
          className="
              h-10
              w-10
              flex
              items-center
              justify-center
              rounded-full
              bg-white
              p-1
              cursor-pointer
            "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div
        className="
            hidden
            h-full
            md:flex
            justify-center
            items-center
            w-full
            max-w-[722px]
            gap-x-6
          "
      >
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="
              text-neutral-400
              cursor-pointer
              hover:text-white
              transition
            "
        />
        <div
          onClick={handlePlay}
          className="
              flex
              items-center
              justify-center
              h-10
              w-10
              rounded-full
              bg-white
              p-1
              cursor-pointer
            "
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="
              text-neutral-400
              cursor-pointer
              hover:text-white
              transition
            "
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider min={0} max={100} defaultValue={100} value={volume} onChange={handleVolume} />
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerContent;
