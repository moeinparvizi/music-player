"use client";

import SongsItem from "@/components/SongsItem";

const PageContent = ({songs}) => {
  if(songs.length == 0){
    return(
      <div className="mt-4 text-neutral-400">No songs available</div>
    )
  }
  return (
    <div className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-8
      gap-4
      mt-4
    ">
      {/* {songs.map(val => {
        return <SongsItem key={val.id} onClick={() => {}} song={val} />
      })} */}
      {
        fetch('../../../text.json')
        .then(item => res.json())
        .then(item.map(val => {
          console.log(val);
          // return <SongsItem key={val.id} onClick={() => {}} song={val} />
        }))
      }
    </div>
  );
}

export default PageContent;