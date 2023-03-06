"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LECTURES } from "./data";

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
        <span className="text-xl italic text-zinc-400 font-medium">
          {"16 video lectures from 2017-2020"}
        </span>
        <span className="text-base text-zinc-500">
          {
            "Featuring Lex Fridman, Andrew Trask, Vivienne Sze, and Vladimir Vapnik."
          }
        </span>
      </span>
      <span className="flex flex-col text-3xl ">
        <span className="font-bold">{"Self-Driving Cars"}</span>
        <span className="text-xl italic text-zinc-400 font-medium">
          {"10 video lectures from 2019"}
        </span>
        <span className="text-base text-zinc-500">
          {
            "Featuring Lex Fridman, Drago Anguelov, Oliver Cameron, Karl Iagnemma, Sacha Arnoud, Emilio Frazzoli, Sterling Anderson, Chris Gerdes, and Sertac Karaman."
          }
        </span>
      </span>
      <div className="relative">
        <FloatingCollage />
      </div>
    </div>
  );
};

const ROWS = 2;
const ITEMS_PER_ROW = Math.floor(LECTURES.length / ROWS);
const ITEMS = [...Array(ROWS).keys()].map((i) =>
  LECTURES.slice(i * ITEMS_PER_ROW, i * ITEMS_PER_ROW + ITEMS_PER_ROW)
);

const FloatingCollage = () => {
  return (
    <motion.div
      initial={{ x: "-300%", opacity: 0 }}
      animate={{
        x: "-200%",
        opacity: 1,
        transition: { delay: 0.2, bounce: 1 },
      }}
      exit={{ x: "-300%", opacity: 0 }}
      className="absolute inset-0 flex flex-col"
    >
      <div className="flex flex-col gap-4">
        {ITEMS.map((row, i) => (
          <motion.div
            key={i}
            animate={{ x: i % 2 === 0 ? ["-100%", "0%"] : ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeatType: "reverse",
              repeat: Infinity,
            }}
            className="flex gap-4"
          >
            {row.map((item) => (
              <Link
                key={item.title + item.sectionyear}
                href={item.video}
                target="_blank"
                className="flex min-w-[250px] min-h-[140px]"
              >
                <Image
                  // key={item.title}
                  src={item.thumbnail}
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
                />
              </Link>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
