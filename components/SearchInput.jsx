"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import  useDebounce  from "@/hooks/useDebounce";
import qs from "query-string"
import Input from "./Input";

const SerachInput = () => {
  const router = useRouter()
  const [value, setValue] = useState("")
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

  return (
    <div>
      <Input
        type="text"
        placeholder="what do you want to listen to?"
        ref={ref}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    {/* <input
      className="
        flex
        w-full
        rounded-md
        bg-neutral-700
        border
        border-transparent
        px-3
        py-3
        text-sm
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none
        "
        type="text"
        placeholder="what do you want to listen to?"
        ref={ref}
        value={value}
        onChange={e => setValue(e.target.value)}
    /> */}
    </div>
  );
}

export default SerachInput;