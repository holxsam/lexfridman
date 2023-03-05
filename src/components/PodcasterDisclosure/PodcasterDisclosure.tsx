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
import Image from "next/image";
import { Fragment, ReactNode } from "react";
import { SAMPLE_GUESTS } from "./data";

export const PodcasterDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-red-500 animate-gradient-x">
          {"Conversations"}
        </span>
      </span>
      <span className="flex flex-col text-xl text-zinc-500 font-medium">
        {
          "Conversations about the nature of intelligence, consciousness, love, and power."
        }
      </span>
      <span className="flex flex-col text-base text-zinc-500">
        <span className="font-bold text-zinc-100">{"Featuring:"}</span>
        <span className="">
          {SAMPLE_GUESTS.map((guest) => (
            <Fragment key={guest.name}>
              <Link
                target="_blank"
                key={guest.name}
                href={guest.videoUrl}
                className="inline text-base hover:underline focus-visible:underline"
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
      {/* <div className="flex">
        {SAMPLE_GUESTS.slice(0, 5).map((guest) => (
          <Image
            key={guest.name}
            alt={"A conversation with " + guest.name}
            src={guest.thumbnail}
            width={320}
            height={180}
            quality={100}
            className={clsx("flex object-contain w-full h-full")}
          />
        ))}
      </div> */}
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

const getId = (link: string) => link.slice(link.indexOf("=") + 1);
const getThumbnailLink = (videoUrl: string) =>
  `https://img.youtube.com/vi/${getId(videoUrl)}/maxresdefault.jpg`;
