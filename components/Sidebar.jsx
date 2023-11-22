"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'


const Sidebar = ({children}) => {
  const pathname = usePathname()

  const items = useMemo(()=>{
    return [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search'
      }
    ]
  },[pathname])

  return (
    <div className="flex h-full">
      <div
        className="
          hidden
        ">
      salame dobare
      </div>
    </div>
  );
}

export default Sidebar;