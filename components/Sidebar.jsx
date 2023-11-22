"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";

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
          <div
            className="
              flex
              flex-col
              gap-y-4
              px-5
              py-4
            "
          >
            {items.map(val => (
              <SidebarItem
                key={val.label}
                {...val}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          Song Library
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;
