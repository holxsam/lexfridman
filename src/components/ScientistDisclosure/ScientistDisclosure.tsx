"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion, Transition } from "framer-motion";
import { ResearchItem, RESEARCH_ITEMS } from "../Research/data";

const slideAroundTransition: Transition = {
  repeat: Infinity,
  repeatType: "reverse",
  duration: 20,
  ease: "linear",
};

export const ScientistDisclosure = () => {
  return (
    <div className="relative flex flex-col h-full w-full rounded-3xl">
      <span className="flex flex-col">
        <span className="text-[clamp(40px,5vw,60px)] [line-height:1] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-500 to-purple-500 animate-gradient-x">
          {"Lex Fridman"}
        </span>
        <span className="font-medium text-xl text-zinc-500">
          {"Pronounced /freed·man/"}
        </span>
      </span>
      <span className="whitespace-nowrap text-zinc-200 pt-4">
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
      <div className="relative w-full pt-8">
        <motion.div
          className="absolute flex flex-col gap-4"
          initial={{ x: "50%", opacity: 0 }}
          animate={{
            x: "0%",
            opacity: 1,
            transition: { delay: 0.2, bounce: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-10%"] }}
            transition={slideAroundTransition}
          >
            {RESEARCH_ITEMS.slice(0, 5).map((item) => (
              <SlideImage key={item.title} item={item} />
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-25%", "10%"] }}
            transition={slideAroundTransition}
          >
            {RESEARCH_ITEMS.slice(5).map((item) => (
              <SlideImage key={item.title} item={item} />
            ))}
          </motion.div>
        </motion.div>
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
          const id = item.title;
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </figure>
  );
};
