"use client";
import { IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LEXFRIDMAN from "../../../public/lexfridmancrop.png";
// Lex Fridman
// -Scientist
// -Teacher
// -Podcaster
// -Human

type SectionType = {
  id: string;
  label: string;
};

const sections: SectionType[] = [
  { id: "scientist", label: "Scientist" },
  { id: "teacher", label: "Teacher" },
  { id: "podcaster", label: "Podcaster" },
  { id: "human", label: "Human" },
];

const trackerClass = "hero-tracker";

export const HeroSection = () => {
  const [section, setSection] = useState(-1);

  const sectionSelected = section >= 0 && section <= 3;

  return (
    <section className="relative bg-neutral-100zz h-[700px]">
      <div className="-z-10 absolute inset-0 -top-16 overflow-hiddenzz borderzzorder-red-500">
        <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%] borderzzborder-red-500">
          <div className="scale-[calc(16/9)] md:scale-100">
            <div
              className={clsx(
                "flex aspect-square items-center md:aspect-video transition-[opacity] duration-500",
                sectionSelected ? "opacity-20" : "opacity-40"
              )}
            >
              <iframe
                className="w-full h-full pointer-events-none"
                width="426"
                height="240"
                // src="https://www.youtube.com/embed/Khf-N2f8T78?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"
                src="https://www.youtube.com/embed/sY8aFSY2zv4?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* <div className="absolute -inset-px bg-black/50"></div> */}
          <div className="absolute -inset-px bg-gradient-to-b from-transparent via-zinc-900/50zz via-transparent to-zinc-900"></div>
          <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-zinc-900/50zz via-transparent to-zinc-900 lg:block"></div>
        </div>
      </div>
      <div className="pack-content flex gap-16 h-full w-full">
        <div className="flex flex-col justify-center h-full">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              className={clsx(
                "flex gap-2 outline-none appearance-none",
                trackerClass
              )}
              onFocus={(e) => setSection(i)}
              onBlur={(e) => {
                if (!e.relatedTarget?.classList.contains(trackerClass))
                  setSection(-1);
              }}
            >
              {section === i && (
                <motion.span
                  initial={{ x: 50, scale: 0.6 }}
                  animate={{ x: 0, scale: 0.6, opacity: 1 }}
                  exit={sectionSelected ? { x: -50 } : undefined}
                  layoutId="hero-dot"
                  className="h-full aspect-square bg-zinc-50 rounded-full"
                ></motion.span>
              )}
              <motion.span
                layout
                className={clsx(
                  "font-extrabold uppercase text-[clamp(40px,10vw,72px)] [line-height:1] transition-[color] duration-500",
                  section === i
                    ? "text-zinc-50"
                    : section === -1
                    ? "text-zinc-50"
                    : "text-zinc-700/80"
                )}
              >
                {sec.label}
              </motion.span>
            </button>
          ))}
        </div>
        <div className="flex h-full w-full bg-red-500"></div>
        {/* <div className="flex justify-center items-end h-full w-full">
          <Image
            src={LEXFRIDMAN}
            className="opacity-40zz"
            alt="picture of lex fridman"
            width={300}
            height={300}
            quality={100}
          />
        </div> */}
      </div>
    </section>
  );
};
