"use client";

const Library = () => {
  const onClick = () => {
    console.log('click ahahaha')
  }

  return (
    <div onClick={onClick}>library</div>
  );
}

export default Library;