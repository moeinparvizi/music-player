import { useState } from "react";

const SearchContent = ({value}) => {
  const [val, setVal] = useState(value)

  console.log(value);
  return (
    <div>your search is {value}</div>
  );
}

export default SearchContent;