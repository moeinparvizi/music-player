import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import Player from "@/components/Player";
import { useEffect, useState } from "react";

const SearchContent = ({ value }) => {
  const [val, setVal] = useState("");
  const [songs, setSongs] = useState([]);
  const [onPlay, setOnPlay] = useState({
    status: "off",
    song: "",
  });

  const url = "/text.JSON";

  async function fetchSongs() {
    const res = await fetch(url);
    const song = await res.json();
    setSongs(song);
  }

  useEffect(() => {
    setVal(value);
    fetchSongs();
  }, [value]);

  const valCondition = (item) => {
    if (val != "") {
      const result = item.title.search(val);
      const result2 = item.artist.search(val);
      const result3 = item.albume.search(val);
      if (result == 0 || result2 == 0 || result3 == 0) {
        return (
          <div onClick={() => {
            setOnPlay({
              status: "on",
              song: item
            })
          }} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem song={item} onClick={() => {}} />
            </div>
            <LikeButton songId={item.id} />
          </div>
        );
      }
    }
  };

  // when empty input
  if (val == "") {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400 capitalize text-lg">
        you can search in input
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((item) => valCondition(item))}
      <Player
        songs={songs}
        song={onPlay.song}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
      />
    </div>
  );
};

export default SearchContent;
