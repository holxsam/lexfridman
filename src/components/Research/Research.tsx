"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef, ReactNode, useRef } from "react";
import { RESEARCH_ITEMS } from "./data";
import Link from "next/link";
import clsx from "clsx";
import {
  IconBrandYoutube,
  IconExternalLink,
  IconFileText,
  IconLetterB,
  IconSchool,
} from "@tabler/icons-react";

const DraggableList = forwardRef<HTMLUListElement, { children: ReactNode }>(
  function DraggableList({ children }, ref) {
    const containerRef = useRef<HTMLDivElement>(null!);

    return (
      <div
        ref={containerRef}
        className="relative flex w-full max-w-min cursor-move"
      >
        <motion.ul
          ref={ref}
          className="flex gap-3"
          drag="x"
          dragConstraints={containerRef}
        >
          {children}
        </motion.ul>
      </div>
    );
  }
);

export const Research = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex pack-content">
        <h2 className="text-4xl font-bold">{"Research & Publications"}</h2>
      </div>

      <div className=" overflow-x-auto custom-scrollbar-tiny no-scrollbar pb-8">
        <div className="flex gap-10 pack-content">
          {RESEARCH_ITEMS.map((item) => (
            <li
              className={clsx(
                "flex flex-col gap-4 min-w-[320px]",
                "bg-neutral-100zz"
                // "bg-gradient-to-b from-neutral-100 to-white"
                // "shadow-lg"
              )}
              key={item.title}
            >
              {/* <div className="flex flex-row-reverse gap-4 p-4zz">
                <figure className="flex overflow-hidden">
                  <Image
                    alt=""
                    src={item.imageUrl}
                    width={250}
                    height={250}
                    quality={100}
                    className="rounded-xl border border-black/10"
                  />
                </figure>
                <ul className="flex flex-col justify-center rounded-xl flex-1 pl-2 items-endzz bg-gradient-to-rzz from-neutral-100 to-white text-neutral-700 bg-neutral-100">
         
                  <li className="font-boldz text-sm text-red-500zz">
                    <Link href="/" className="flex items-center gap-1">
                      <IconFileText size={16} />
                      Paper
                    </Link>
                  </li>
                  <li className="font-boldz text-sm text-blue-500zz">
                    <Link href="/" className="flex items-center gap-1">
                      <IconBrandYoutube size={16} />
                      Video
                    </Link>
                  </li>
                  <li className="font-boldz text-sm text-emerald-500zz">
                    <Link href="/" className="flex items-center gap-1">
                      <IconExternalLink size={16} />
                      Website
                    </Link>
                  </li>
                  <li className="font-boldz text-sm text-emerald-500zz">
                    <Link href="/" className="flex items-center gap-1">
                      <IconSchool size={16} />
                      Scholar
                    </Link>
                  </li>
                  <li className="font-boldz text-sm text-blue-500zz">
                    <Link href="/" className="flex items-center gap-1">
                      <IconLetterB size={16} />
                      Bibtex
                    </Link>
                  </li>
                </ul>
              </div> */}

              <figure className="flex overflow-hidden w-full h-[250px]zz">
                <Image
                  alt=""
                  src={item.imageUrl}
                  width={250}
                  height={180}
                  quality={100}
                  className="flex rounded-xl border border-black/10 object-contain w-full h-full"
                />
              </figure>

              <div className="flex flex-col gap-1 p-4zz">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.summary}</p>
              </div>
              {/* <div className="flex-1 flex"> */}
              <ul className="flex gap-4 flex-1 items-end">
                <li className="font-bold text-sm">
                  <Link href="/" className="text-neutral-500">
                    Paper
                  </Link>
                </li>
                <li className="font-bold text-sm">
                  <Link href="/" className="text-neutral-500">
                    Video
                  </Link>
                </li>
                <li className="font-bold text-sm">
                  <Link href="/" className="text-neutral-500">
                    Website
                  </Link>
                </li>
                <li className="font-bold text-sm">
                  <Link href="/" className="text-neutral-500">
                    Scholar
                  </Link>
                </li>
                <li className="font-bold text-sm">Bibtex</li>
              </ul>
              {/* <ul className="flex gap-4">
                  <li className="font-bold text-sm">
                    <Link href="/">Scholar</Link>
                  </li>
                  <li className="font-bold text-sm">Bibtex</li>
                </ul> */}
              {/* </div> */}
            </li>
          ))}
          <li className="min-w-[100px] h-2 opacity-0"></li>
        </div>
      </div>
    </div>
  );
};
