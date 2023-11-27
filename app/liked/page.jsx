import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

const Liked = () => {
  return (
    <div className="bg-neutral-800 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:w-44 lg:h-44">
              <Image
                fill
                // placeholder="blur"
                alt="PlayList"
                className="object-cover"
                src="/images/liked.png"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block capitalize font-semibold text-sm">
                playlist
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold capitalize">
                liked songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent />
    </div>
  );
};

export default Liked;
