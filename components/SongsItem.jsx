import Image from "next/image";
import PlayButton from "./PlayButton";

const SongsItem = ({ song, onClick }) => {
  return (
    <div
      className="
        relative
        group
        flex
        flex-col
        justify-center
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
      "
    >
      <div
        className="
        relative
        aspect-square
        w-full
        h-full
        rounded-md
        overflow-hidden
      "
      >
      <Image
        className="object-cover"
        // width={300}
        // height={300}
        fill
        src={song.image}
        alt={song.title}
      />
      </div>
      <div className="flex flex-col items-start p-4 w-full gap-y1">
        <p className="font-semibold truncate w-full">
          {song.title}
        </p>
        <p className="w-full text-sm pb-4 truncate text-neutral-400">
          {song.artist}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongsItem;
