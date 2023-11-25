import Image from "next/image";

const MediaItem = ({ song, onClick }) => {
  const handleClick = () => {
    return onClick(song.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-w-[48px] min-h-[48px] overflow-hidden">
        <Image
          src={song.image}
          fill
          alt={song.title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="truncate text-neutral-400 text-sm">{song.artist}</p>
      </div>
    </div>
  );
};

export default MediaItem;
