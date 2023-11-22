"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

const Sidebar = ({ children }) => {
  const pathname = usePathname();

  const items = useMemo(() => {
    return [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ];
  }, [pathname]);

  return (
    <div className="flex h-full">
      <div
        className="
          hidden
          md:flex
          flex-col
          gap-y-2
          bg-black
          h-full
          w-[300px]
          p-2
        "
      >
        <Box>
          Sidebar Navigation
        </Box>
        <Box>
          this is for test
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;
