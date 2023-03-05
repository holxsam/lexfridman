"use client";
import clsx from "clsx";
import { useHasMounted } from "@/hooks/useHasMounted";
import { Tab } from "@headlessui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HumanDisclosure } from "../HumanDisclosure/HumanDisclosure";
import { PodcasterDisclosure } from "../PodcasterDisclosure/PodcasterDisclosure";
import { ScientistDisclosure } from "../ScientistDisclosure/ScientistDisclosure";
import { TeacherDisclosure } from "../TeacherDisclosure/TeacherDisclosure";
import {
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";

const DURATION = 5000;

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

const animProps: AnimationProps = {
  initial: { x: "100%", opacity: 0, filter: "blur(10px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: "-25%", opacity: 0, filter: "blur(10px)" },
};

export const HeroSection = () => {
  const [section, setSection] = useState(0);
  const [pauseSlider, setPauseSlider] = useState(false);
  const sectionSelected = section >= 0 && section <= 3;
  const mounted = useHasMounted();

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(() => {}, 0);

    if (!pauseSlider) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSection((v) => (v + 1) % sections.length);
      }, DURATION);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [section, pauseSlider]);

  return (
    <section className="-z-10 relative flex flex-col min-h-[calc(100vh-4rem)] mb-96 sm:mb-64 md:mb-40 lg:mb-0">
      <MountedPlayback />
      <div className="pack-content flex flex-col justify-center flex-1">
        <div className="flex flex-col pb-16">
          <button
            type="button"
            onClick={() => setPauseSlider((v) => !v)}
            className="w-full flex flex-col text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
          >
            <span className="flex gap-1 items-center ml-1 font-extralight text-sm uppercase">
              <span className="">
                {pauseSlider ? (
                  <IconPlayerPlayFilled size={16} />
                ) : (
                  <IconPlayerStopFilled size={16} />
                )}
              </span>
              <span className="">
                {pauseSlider
                  ? "stopped · click to autoplay"
                  : "autoplaying · click to stop"}
              </span>
            </span>
            <TimerLine
              section={section}
              duration={DURATION}
              paused={pauseSlider}
            />
          </button>
        </div>
        {/* 
          Using grid here instead of flex to solve two issues:
            1. On mobile, the two main containers are stacked on top of each other. 
               For some reason this causes h-full to not work on dot, there on mobile the dot disappears.
               This only happens if we use flex-col. So we switch to grid and manage the rows/cols with grid.
            2. When the dot pushes "podcaster" to the right, the flex container would grow to accomodate for the new width.
               This causes a small but very noticeable jank when animating between panels. Using grid also solves this issue.
        */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
          <Tab.Group vertical selectedIndex={section} onChange={setSection}>
            <Tab.List className="z-10 relative flex flex-col focus-within:ring-1 focus-within:focus-visible:ring-white/50 ring-white/0">
              <Orb
                delay={0}
                className="-z-10 absolute top-[-10%] left-[-10%] w-60 h-60 rounded-full blur-3xl bg-yellow-500 opacity-10"
              />
              <Orb
                delay={1}
                className="-z-10 absolute top-[50%] left-[10%] w-96 h-72 rounded-full blur-3xl bg-pink-500 opacity-5"
              />
              {sections.map((sec, i) => (
                <Tab
                  key={sec.id}
                  className="flex outline-none appearance-none zzfocus-visible:underline"
                >
                  {section === i && (
                    <motion.span
                      initial={{ scale: 0.6, x: mounted ? 50 : 0 }}
                      animate={{ scale: 0.6, x: 0 }}
                      layoutId="hero-dot"
                      className="h-full aspect-square bg-zinc-50 rounded-full"
                    />
                  )}
                  <motion.span
                    layout
                    className={clsx(
                      "font-extrabold w-min uppercase text-[clamp(40px,10vw,72px)] [line-height:1] transition-[color] duration-500",
                      section === i
                        ? "text-zinc-50"
                        : section === -1
                        ? "text-zinc-50"
                        : "text-zinc-700/80"
                    )}
                  >
                    {sec.label}
                  </motion.span>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="z-0 relative flex flex-col">
              <AnimatePresence>
                <motion.div
                  key={section}
                  {...animProps}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                  className="absolute flex w-full h-full"
                >
                  <Tab.Panel static tabIndex={-1}>
                    {section === 0 && <ScientistDisclosure />}
                  </Tab.Panel>
                  <Tab.Panel static tabIndex={-1}>
                    {section === 1 && <TeacherDisclosure />}
                  </Tab.Panel>
                  <Tab.Panel static tabIndex={-1}>
                    {section === 2 && <PodcasterDisclosure />}
                  </Tab.Panel>
                  <Tab.Panel static tabIndex={-1}>
                    {section === 3 && <HumanDisclosure />}
                  </Tab.Panel>
                </motion.div>
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

const MountedPlayback = () => {
  const mounted = useHasMounted();
  if (!mounted) return <></>;
  return <BackgroundPlayback />;
};

const BackgroundPlayback = () => {
  const scrollRef = useRef<HTMLElement>(null!);
  const { scrollY } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });
  const y = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useLayoutEffect(() => {
    scrollRef.current = document.body;
  }, []);

  return (
    <div className="-z-10 absolute inset-0 -top-16">
      <motion.div
        className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]"
        style={{ y, opacity }}
      >
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video transition-[opacity] opacity-40">
            <iframe
              tabIndex={-1}
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
          className="absolute -bottom-16 left-[40%] w-[400px] h-72 rounded-full blur-3xl bg-blue-500 opacity-5 "
        />
        <Orb
          delay={2}
          className="absolute -bottom-16 left-[65%] w-52 h-52 rounded-full blur-3xl bg-yellow-500 opacity-5 "
        />
        <Orb
          delay={1.5}
          className="absolute bottom-0 -right-32w-[400px] h-52 rounded-full blur-3xl bg-green-500 opacity-5"
        />
      </div>
    </div>
  );
};

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

const TimerLine = ({
  section,
  duration,
  paused,
}: {
  section: number;
  duration: number;
  paused: boolean;
}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    if (!paused) {
      controls.set({ width: "0%" });
      controls.start({
        width: "100%",
        transition: { ease: "linear", duration: duration / 1000 },
      });
    } else {
      controls.stop();
      controls.start({
        width: "0%",
        transition: { ease: "linear", duration: 0.2 },
      });
    }
  }, [section, duration, paused]);

  return (
    <div className="w-full h-px bg-white/5">
      <motion.div className="h-full bg-zinc-700/80" animate={controls} />
    </div>
  );
};
