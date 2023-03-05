"use client";

export const HumanDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500  to-orange-500 animate-gradient-x">
          {"Enjoyment"}
        </span>
      </span>
      <span className="flex flex-col text-2xl text-zinc-500 font-medium">
        {
          "In my free time I enjoy playing the guitar and practicing jiu jitsu and judo."
        }
      </span>

      <div className="rounded-3xl overflow-hidden">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bCA54RIkpTo?&mute=1&muted=1&controls=1&showinfo=0&modestbranding=1&loop=1"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
};
