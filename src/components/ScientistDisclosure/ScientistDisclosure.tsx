"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion, Transition } from "framer-motion";
import { ResearchItem, RESEARCH_ITEMS } from "../Research/data";

const slideAroundTransition: Transition = {
  repeat: Infinity,
  repeatType: "reverse",
  duration: 30,
  ease: "linear",
};

export const ScientistDisclosure = () => {
  return (
    <div className="relative flex flex-col h-min w-full rounded-3xl">
      <span className="flex flex-col">
        <span className="text-[clamp(40px,5vw,60px)] [line-height:1] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-500 to-purple-500 animate-gradient-x">
          {"Lex Fridman"}
        </span>
        <span className="font-extralight text-xl text-zinc-500">
          {"Pronounced /freed·man/"}
        </span>
      </span>
      <span className="whitespace-nowrap text-zinc-200 pt-2">
        {"MIT Research Scientist"}
        <span className="italic font-bold text-zinc-500">
          {" (2015 - current)"}
        </span>
      </span>
      <span className="">
        {"Laboratory for Information and Decision Systems (LIDS)"}
      </span>
      <span className="">
        <span className="font-bold text-zinc-500">{"Research: "}</span>
        <span className="">
          {"Human-robot interaction and machine learning."}
        </span>
      </span>
      <div className="relative w-fullzz pt-8">
        <div className="flex flex-col gap-4">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-25%"] }}
            transition={slideAroundTransition}
          >
            {RESEARCH_ITEMS.slice(0, 5).map((item) => (
              <SlideImage key={item.title} item={item} />
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-25%", "25%"] }}
            transition={slideAroundTransition}
          >
            {RESEARCH_ITEMS.slice(5).map((item) => (
              <SlideImage key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SlideImage = ({ item }: { item: ResearchItem }) => {
  return (
    <figure className="flex min-w-[250px] min-h-[140px]">
      <Image
        key={item.title}
        src={item.imageUrl}
        alt={item.title}
        width={250}
        height={140}
        quality={100}
        className={clsx(
          "relative flex rounded-2xl object-contain",
          "transition-[opacity] duration-300 hover:opacity-80 opacity-10"
        )}
        style={{
          width: 250,
          height: 140,
        }}
        onClick={() => {
          document
            .getElementById("research")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </figure>
  );
};
