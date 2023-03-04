"use client";

/**
  Teacher:
  show video of courses he teaches
 */

export const TeacherDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 to-green-500 animate-gradient-x">
          {"Learn with Lex"}
        </span>
      </span>
      <span className="flex flex-col text-3xl ">
        <span className="font-bold">{"Deep Learning"}</span>
        <span className="text-xl italic text-zinc-400 font-light">
          {"16 video lectures from 2017-2020"}
        </span>
        <span className="text-base text-zinc-600">
          {
            "Featuring Lex Fridman, Andrew Trask, Vivienne Sze, and Vladimir Vapnik."
          }
        </span>
      </span>
      <span className="flex flex-col text-3xl ">
        <span className="font-bold">{"Self-Driving Cars"}</span>
        <span className="text-xl italic text-zinc-400 font-light">
          {"10 video lectures from 2019"}
        </span>
        <span className="text-base text-zinc-600">
          {
            "Featuring Lex Fridman, Drago Anguelov, Oliver Cameron, Karl Iagnemma, Sacha Arnoud, Emilio Frazzoli, Sterling Anderson, Chris Gerdes, and Sertac Karaman."
          }
        </span>
      </span>
    </div>
  );
};
