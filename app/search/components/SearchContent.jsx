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
      let result = item.title.search(val);
      if (result == 0) {
        return <div>{item.title}</div>;
      }
    }
  };

  // when empty input
  if (val == "") {
    return <div>you can search in up input</div>;
  }

  return <div>{songs.map((item) => valCondition(item))}</div>;
};

export default SearchContent;
