"use client";

import { useEffect, useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import { motion } from "framer-motion";
import Sliders from "./Slider";

const PlayerContent = ({ song, songs }) => {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState();
  const [timeLine, setTimeLine] = useState(0);
  const [durMusic, setDurMusic] = useState();
  const [songPlay, setSongPlay] = useState(song);
  // setSongPlay(song)

  const [count, setCount] = useState(song.id);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;

  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    songs.map((val) => {
      if (val.id == count + 1) {
        setSongPlay(val);
        setCount(val.id);
      }
    });
  };

  const onPlayPrevious = () => {
    songs.map((val) => {
      if (val.id == count - 1) {
        setSongPlay(val);
        setCount(val.id);
      }
    });
  };

  const handlePlay = () => {
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    handlePlay();
    setSongPlay(song);
  }, [song]);

  const toggleMute = () => {
    if (ref.current.volume == "0") {
      ref.current.volume = "1";
      setVolume(1);
    } else {
      ref.current.volume = "0";
      setVolume(0);
    }
  };

  const handleTime = (e) => {
    ref.current.currentTime = e.target.value;
    setTimeLine(ref.current.currentTime);
  };

  useEffect(() => {
    setDurMusic(ref.current.duration);
  },[isPlaying]);

  setInterval(() => {
    setDurMusic(ref.current.duration);
    setTimeLine(ref.current.currentTime);
  }, 200);

  const handleVolume = (e) => {
    ref.current.volume = e.target.value / 100;
  };


  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="grid grid-cols-2 md:grid-cols-3 h-full relative"
      >
        <div className="absolute top-[-38%] left-0 !w-screen timeline">
        <Sliders
          min={0}
          max={durMusic}
          value={timeLine}
          onChange={handleTime}
          // className="absolute top-[-38%] left-0 w-screen w-full timeline"
          className="w-full"
        />
        </div>
        <div className="flex absolute z-10 w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem song={songPlay} />
            <LikeButton songId={songPlay.id} />
          </div>
        </div>
        <audio ref={ref} src={songPlay.audio}></audio>

        <div
          className="
            flex
            md:hidden
            col-auto
            w-full
            justify-end
            items-center
            absolute
            z-50
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
            absolute
            z-50
            left-[80%]
            top-[20%]
            translate-y-[30%]
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
            absolute
            z-50
            left-[45%]
            -translate-x-[50%]
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
            absolute
            z-50
            left-[50%]
            top-[50%]
            -translate-x-[50%]
            -translate-y-[50%]
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
            absolute
            z-50
            left-[55%]
            -translate-x-[50%]
            "
          />
        </div>

        <div className="hidden absolute z-50 top-[50%] left-[80%] md:left-[85%] lg:left-[90%] xl:left-[94%] -translate-y-1/2 md:flex w-full pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <VolumeIcon
              onClick={toggleMute}
              className="cursor-pointer"
              size={34}
            />
            <Sliders
              min={0}
              max={100}
              defaultValue={100}
              value={volume}
              onChange={handleVolume}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PlayerContent;
