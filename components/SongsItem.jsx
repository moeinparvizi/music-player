import Image from "next/image";

const SongsItem = ({song, onClick}) => {
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
      <div className="
        relative
        aspect-square
        w-full
        h-full
        rounded-md
        overflow-hidden
      ">

      </div>
        <Image className="absolute object-cover top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" width={300} height={300} src={song.image} alt={song.title} />
      {song.title}
    </div>
  );
}

export default SongsItem;