"use client";

import Header from "@/components/Header";
import SerachInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("")

  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white font-semibold text-3xl">Search</h1>
          <SerachInput value={value} setValue={setValue} />
        </div>
      </Header>
      <SearchContent value={value} />
    </div>
  );
};

export default Search;
