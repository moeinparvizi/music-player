"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import  useDebounce  from "@/hooks/useDebounce";
import qs from "query-string"
import Input from "./Input";
import SearchContent from "@/app/search/components/SearchContent";

const SerachInput = ({value, setValue}) => {
  const router = useRouter()
  const debouncedValue = useDebounce(value, 500)
  const ref = useRef()

  useEffect(() => {
    const query = {
      title: debouncedValue
    }
    const url = qs.stringifyUrl({
      url: '/search',
      query: query
    });

    router.push(url)
  }, [debouncedValue, router]);

  // console.log(value);

  return (
    <div>
      <Input
        type="text"
        placeholder="what do you want to listen to?"
        ref={ref}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
    // <SearchContent />
  );
}

export default SerachInput;