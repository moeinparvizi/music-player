import { useState, useEffect } from "react";

function useDebounce(value,delay) {
  const [debouncedValue, setDebouncedValue] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500);
    return () => {
      clearTimeout(timer)
    };
  }, [value, delay]);

  return debouncedValue
}

export default useDebounce