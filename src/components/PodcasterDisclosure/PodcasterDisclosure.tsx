"use client";
import {
  IconBrandApplePodcast,
  IconBrandSpotify,
  IconRss,
  IconBrandYoutube,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Fragment, ReactNode } from "react";
import { SAMPLE_GUESTS } from "./data";
import { motion } from "framer-motion";

export const PodcasterDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-red-500 animate-gradient-x">
          {"Conversations"}
        </span>
      </span>
      <span className="flex flex-col text-xl text-zinc-50 font-semibold">
        {
          "Conversations about the nature of intelligence, consciousness, love, and power."
        }
      </span>
      <span className="flex flex-col text-zinc-500">
        <span className="text-lg font-bold text-zinc-300">{"Featuring"}</span>
        <span className="text-sm">
          {SAMPLE_GUESTS.map((guest) => (
            <Fragment key={guest.name}>
              <Link
                target="_blank"
                key={guest.name}
                href={guest.videoUrl}
                className="hover:underline focus-visible:underline hover:text-white focus-visible:text-white"
              >
                {guest.name}
              </Link>
              {", "}
            </Fragment>
          ))}
          {"and more."}
        </span>
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PODCASTS.map((props) => (
          <LinkTag key={props.label} {...props} />
        ))}
      </div>
      <div className="relative">
        <FloatingCollage />
      </div>
    </div>
  );
};

type LinkTagProp = {
  link: string;
  icon: ReactNode;
  actionLabel: string;
  label: string;
  twGradient: string;
};

const LinkTag = ({
  link,
  icon,
  actionLabel,
  label,
  twGradient,
}: LinkTagProp) => {
  return (
    <Link className="flex gap-2" target="_blank" href={link}>
      <span
        className={clsx(
          "grid place-items-center rounded-xl min-w-[64px] aspect-square",
          twGradient
        )}
      >
        {icon}
      </span>
      <span className="flex flex-col justify-center">
        <span className="text-sm font-medium text-zinc-500">{actionLabel}</span>
        <span className="text-2xl font-bold whitespace-nowrap">{label}</span>
      </span>
    </Link>
  );
};

const FloatingCollage = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: "-150%",
        opacity: 1,
        transition: { delay: 0.2, bounce: 1 },
      }}
      exit={{ x: "100%", opacity: 0 }}
      className="absolute inset-0 flex flex-col pt-4"
    >
      <div className="flex flex-col gap-4">
        <motion.div
          // key={i}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeatType: "reverse",
            repeat: Infinity,
          }}
          className="flex gap-4"
        >
          {SAMPLE_GUESTS.map((item) => (
            <Link
              key={item.name}
              href={item.videoUrl}
              target="_blank"
              className="flex min-w-[375px] min-h-[210px]"
            >
              <Image
                // key={item.title}
                src={item.thumbnail}
                alt={item.name}
                width={375}
                height={210}
                quality={100}
                className={clsx(
                  "relative flex rounded-2xl object-contain",
                  "transition-[opacity] duration-300 hover:opacity-80 opacity-10"
                )}
                style={{
                  width: 375,
                  height: 210,
                }}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const PODCASTS: LinkTagProp[] = [
  {
    link: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL",
    icon: <IconBrandSpotify size={36} />,
    actionLabel: "Listen on",
    label: "Spotify",
    twGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  {
    link: "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
    icon: <IconBrandApplePodcast size={36} />,
    actionLabel: "Listen on",
    label: "Apple Podcast",
    twGradient: "bg-gradient-to-r from-purple-400 to-fuchsia-500",
  },
  {
    link: "https://www.youtube.com/@lexfridman/featured",
    icon: <IconBrandYoutube size={36} />,
    actionLabel: "Listen on",
    label: "Youtube",
    twGradient: "bg-gradient-to-r from-red-400 to-rose-500",
  },
  {
    link: "https://lexfridman.com/feed/podcast/",
    icon: <IconRss size={36} stroke={3} />,
    actionLabel: "Subscribe via",
    label: "RSS Feed",
    twGradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
];

const getId = (link: string) => link.slice(link.indexOf("=") + 1);
const getThumbnailLink = (videoUrl: string) =>
  `https://img.youtube.com/vi/${getId(videoUrl)}/maxresdefault.jpg`;
