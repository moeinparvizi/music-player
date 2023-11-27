const Player = ({ onPlay, setOnPlay }) => {
  if (onPlay.status == "on") {
    return (
      <div className="fixed bottom-0 right-0 w-full h-[80px] bg-black py-2 px-4">
        <PlayerContent />
      </div>
    );
  } else {
    console.log("not on");
  }
};

export default Player;
