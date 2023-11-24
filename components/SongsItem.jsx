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
      {song}
    </div>
  );
}

export default SongsItem;