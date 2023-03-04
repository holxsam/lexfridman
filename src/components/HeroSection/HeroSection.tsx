"use client";
import { IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  Transition,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import LEXFRIDMAN from "../../../public/lexfridmancrop.png";
import { PodcasterDisclosure } from "../PodcasterDisclosure/PodcasterDisclosure";
import { ResearchItem, RESEARCH_ITEMS } from "../Research/data";
import { ScientistDisclosure } from "../ScientistDisclosure/ScientistDisclosure";
import { TeacherDisclosure } from "../TeacherDisclosure/TeacherDisclosure";

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

const Orb = ({
  delay = 0,
  className,
}: {
  delay: number;
  className: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ opacity: [0.05, 0.1] }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay,
      }}
    />
  );
};

const animProps: AnimationProps = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

/**
 * 

Podcast
a collage of the guest he’s talked to

Human
show videos of lex playing guitar
show videos of lex black belt

 */

export const HeroSection = () => {
  const ref = useRef(document.body);

  const { scrollY } = useScroll({ container: ref });
  const y = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const [section, setSection] = useState(-1);
  const sectionSelected = section >= 0 && section <= 3;

  return (
    <section className="-z-10 relative flex flex-col justify-center h-min min-h-[calc(100vh-4rem)]">
      <div className="-z-10 absolute inset-0 -top-16">
        <motion.div
          className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]"
          style={{ y, opacity }}
        >
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
                src="https://www.youtube.com/embed/4dC_nRYIDZU?&autoplay=1&mute=1&muted=1&controls=0&showinfo=0&modestbranding=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="absolute -inset-[3px] bg-gradient-to-b from-transparent via-zinc-900/50 zzvia-transparent to-zinc-900"></div>
          <div className="absolute -inset-[3px] hidden bg-gradient-to-l from-transparent via-zinc-900/50 zzvia-transparent to-zinc-900 lg:block"></div>
        </motion.div>

        <div className="z-10 absolute inset-0">
          <Orb
            delay={3}
            className="-z-10 w-[400px] h-72 rounded-full blur-3xl bg-blue-500 bg-gradient-to-rzz from-blue-500 to-yellow-500 opacity-5 absolute  -bottom-16 left-[40%]"
          />
          <Orb
            delay={2}
            className="-z-10 w-52 h-52 rounded-full blur-3xl bg-yellow-500 bg-gradient-to-rzz from-blue-500 to-yellow-500 opacity-5 absolute  -bottom-16 left-[65%]"
          />
          <Orb
            delay={1.5}
            className="-z-10 w-[400px] h-52 rounded-full blur-3xl bg-green-500 bg-gradient-to-rzz from-blue-500 to-green-500 opacity-5 absolute bottom-0 -right-32"
          />
        </div>
      </div>
      <div className="pack-content flex items-center h-full w-full">
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center h-min w-full">
          <div className="z-10 relative flex flex-col">
            <Orb
              delay={0}
              className="-z-10 w-60 h-60 rounded-full blur-3xl bg-yellow-500 opacity-10 absolute top-[-10%] left-[-10%]"
            />
            <Orb
              delay={1}
              className="-z-10 w-96 h-72 rounded-full blur-3xl bg-pink-500 opacity-5 absolute top-[50%] left-[10%]"
            />
            {sections.map((sec, i) => (
              <button
                key={sec.id}
                className={clsx(
                  "flex gap-2 outline-none appearance-none",
                  trackerClass
                )}
                onFocus={(e) => setSection(i)}
                onBlur={(e) => {
                  if (!e.relatedTarget?.classList.contains(trackerClass)) {
                  }
                  // setSection(-1);
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
          <div className="z-0 relative flex flex-col w-full min-h-[500px]">
            <AnimatePresence>
              <motion.div
                key={section}
                {...animProps}
                className="absolute flex w-full h-full"
              >
                {section === 0 && <ScientistDisclosure />}
                {section === 1 && <TeacherDisclosure />}
                {section === 2 && <PodcasterDisclosure />}
                {section === 3 && (
                  <div className=" w-full bg-yellow-500 rounded-3xl">four</div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
