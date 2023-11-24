"use client";

const PageContent = ({songs}) => {
  if(songs.length !== 0){
    return(
      <div className="mt-4 text-neutral-400">No songs available</div>
    )
  }
  return (
    <div>
      page content
    </div>
  );
}

export default PageContent;