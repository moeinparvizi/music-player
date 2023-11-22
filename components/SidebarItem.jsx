import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const SidebarItem = ({ IconType, label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
        active && "text-white"
      )}
    >
      link
    </Link>
  );
};

export default SidebarItem;
