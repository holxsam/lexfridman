"use client";

import {
  IconBrandYoutube,
  IconPlayerPlay,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BLACK_BELT from "../../../public/lex-blackbelt.gif";
import GUITAR from "../../../public/lex-guitar.gif";

const PREVIEWS: GifPreviewProps[] = [
  {
    image: GUITAR,
    alt: "lex playing the song sldkfj sldkj",
    link: "https://www.youtube.com/watch?v=Khf-N2f8T78",
  },
  {
    image: BLACK_BELT,
    alt: "lex giving a speech about his blackbelt",
    link: "https://www.youtube.com/watch?v=bCA54RIkpTo",
  },
];

export const HumanDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500  to-orange-500 animate-gradient-x">
          {"Enjoyment"}
        </span>
      </span>
      <span className="flex flex-col text-xl text-zinc-50 font-medium">
        {
          "In my free time, I enjoy playing the guitar and piano and practicing jiu jitsu and judo."
        }
      </span>

      <motion.div
        initial={{ y: "150%", opacity: 0 }}
        animate={{
          y: "0%",
          opacity: 1,
          transition: { delay: 0.2, bounce: 1 },
        }}
        exit={{ y: "150%", opacity: 0 }}
        className="flex flex-col items-center sm:items-start gap-4"
      >
        {PREVIEWS.map((gif) => (
          <GifPreview key={gif.alt} {...gif} />
        ))}
      </motion.div>
    </div>
  );
};

type GifPreviewProps = {
  image: StaticImageData;
  alt?: string;
  link: string;
};

const GifPreview = ({ image, alt = "", link }: GifPreviewProps) => {
  return (
    <Link
      className="overflow-hidden rounded-2xl group/gif relative max-w-md w-full"
      target="_blank"
      href={link}
    >
      <Image
        alt={alt}
        src={image}
        quality={100}
        className={clsx(
          "flex object-contain w-full h-full",
          "transition-[filter,transform] duration-200 ease-linear scale-100 group-hover/gif:scale-150 group-focus/gif:scale-150"
        )}
      />
      <div
        className={clsx(
          "absolute inset-0",
          "transition-[background-color] duration-200 ease-linear bg-zinc-900/0 group-hover/gif:bg-zinc-900/80 group-focus/gif:bg-zinc-900/80"
        )}
      ></div>
      <div
        className={clsx(
          "absolute inset-0 grid place-items-center",
          "transition-[transform] duration-200 ease-linear translate-y-full group-hover/gif:translate-y-0 group-focus/gif:translate-y-0"
        )}
      >
        <div className="grid place-items-center w-1/2 h-1/2">
          <IconPlayerPlayFilled size={48} />
        </div>
        <div className="absolute bottom-2 text-base font-bold">
          Watch on Youtube
        </div>
      </div>
    </Link>
  );
};
