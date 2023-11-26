import MediaItem from "@/components/MediaItem";
import { useEffect, useState } from "react";

const SearchContent = ({ value }) => {
  const [val, setVal] = useState("");
  const [songs, setSongs] = useState([]);
  const [flag, setFlag] = useState(true);

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
          <div className="flex items-center gap-x-4 w-full">
            {/* {item.title} */}
            <MediaItem song={item} onClick={() => {}} />
          </div>
        );
      }
    }
  };

  // when empty input
  if (val == "") {
    return (
      // ? change this value in div
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400 capitalize text-lg">
        you can search in up input
      </div>
    );
  }

  return <div className="flex flex-col gap-y-2 w-full px-6">{songs.map((item) => valCondition(item))}</div>;
};

export default SearchContent;
