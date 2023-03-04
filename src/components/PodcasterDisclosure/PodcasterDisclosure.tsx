"use client";
import {
  IconBrandApplePodcast,
  IconBrandSpotify,
  IconRss,
  IconBrandPatreon,
  IconBrandYoutube,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

const PODCASTS: LinkTagProp[] = [
  {
    link: "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
    icon: <IconBrandApplePodcast size={36} />,
    actionLabel: "Listen on",
    label: "Apple Podcast",
    twGradient: "bg-gradient-to-r from-purple-400 to-fuchsia-500",
  },
  {
    link: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL",
    icon: <IconBrandSpotify size={36} />,
    actionLabel: "Listen on",
    label: "Spotify",
    twGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
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

export const PodcasterDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-red-500 animate-gradient-x">
          {"Conversations"}
        </span>
      </span>
      <span className="flex flex-col text-3xl text-zinc-500 font-bold">
        {
          "Conversations about the nature of intelligence, consciousness, love, and power."
        }
      </span>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PODCASTS.map((props) => (
          <LinkTag key={props.label} {...props} />
        ))}
        {/* <Link
          className="flex gap-2"
          href="https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584"
        >
          <span className="grid place-items-center rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-500 h-16 w-16 ">
            <IconBrandApplePodcast size={36} />
          </span>
          <span className="flex flex-col justify-center">
            <span className="text-sm text-zinc-500">Listen on</span>
            <span className="text-2xl font-bold">Apple Podcast</span>
          </span>
        </Link>
        <Link
          className="flex gap-2"
          href="https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL"
        >
          <span className="grid place-items-center rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 h-16 w-16 ">
            <IconBrandSpotify size={36} />
          </span>
          <span className="flex flex-col justify-center">
            <span className="text-sm text-zinc-500">Listen on</span>
            <span className="text-2xl font-bold">Spotify</span>
          </span>
        </Link>
        <Link
          className="flex gap-2"
          href="https://www.youtube.com/@lexfridman/featured"
        >
          <span className="grid place-items-center rounded-xl bg-gradient-to-r from-red-400 to-rose-500 h-16 w-16 ">
            <IconBrandYoutube size={36} />
          </span>
          <span className="flex flex-col justify-center">
            <span className="text-sm text-zinc-500">Listen on</span>
            <span className="text-2xl font-bold">Youtube</span>
          </span>
        </Link>
        <Link
          className="flex gap-2"
          href="https://lexfridman.com/feed/podcast/"
        >
          <span className="grid place-items-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 h-16 w-16 ">
            <IconRss size={36} stroke={3} />
          </span>
          <span className="flex flex-col justify-center">
            <span className="text-sm text-zinc-500">Subscribe via</span>
            <span className="text-2xl font-bold">RSS Feed</span>
          </span>
        </Link> */}
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
    <Link className="flex gap-2" href={link}>
      <span
        className={clsx(
          "grid place-items-center rounded-xl h-16 w-16",
          twGradient
        )}
      >
        {icon}
      </span>
      <span className="flex flex-col justify-center">
        <span className="text-sm font-medium text-zinc-500">{actionLabel}</span>
        <span className="text-2xl font-bold">{label}</span>
      </span>
    </Link>
  );
};
