"use client";
import Image from "next/image";
import { RESEARCH_ITEMS } from "./data";
import Link from "next/link";
import clsx from "clsx";
import { IconBrandYoutube, IconFileText } from "@tabler/icons-react";

export const Research = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex pack-content">
        <h2
          id="research"
          className="text-2xl sm:text-4xl font-bold scroll-mt-12"
        >
          {"Research · Publications"}
        </h2>
      </div>

      <div className="flex gap-10 pack-content">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-8 gap-y-16">
          {RESEARCH_ITEMS.map((item) => (
            <li
              id={item.title}
              className="flex flex-col gap-4 min-w-[320px] scroll-mt-8 rounded-2xl"
              key={item.title}
            >
              <Link
                target="_blank"
                href={item.videoUrl || item.paperUrl}
                className="group/img-link relative flex overflow-hidden w-full rounded-xl"
              >
                <Image
                  alt=""
                  src={item.imageUrl}
                  width={250}
                  height={180}
                  quality={100}
                  className={clsx(
                    "flex object-contain w-full h-full transition-[transform] duration-200 ease-linear",
                    "scale-100 group-hover/img-link:scale-150 group-focus-within/img-link:scale-150"
                  )}
                />
                <div
                  className={clsx(
                    "absolute bottom-0 flex justify-end items-center gap-2 w-full h-1/4 px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                    "font-bold transition-[transform] duration-200 ease-linear",
                    "translate-y-16 group-hover/img-link:translate-y-0"
                  )}
                >
                  {item.videoUrl ? (
                    <IconBrandYoutube size={20} />
                  ) : (
                    <IconFileText size={20} />
                  )}
                  {item.videoUrl ? "Link to video" : "Link to paper"}
                </div>
              </Link>
              <ul className="flex items-center gap-4">
                {item.paperUrl && (
                  <li className="">
                    <Link
                      target="_blank"
                      href={item.paperUrl}
                      className="font-medium text-sm hover:underline focus-visible:underline text-zinc-500 hover:text-zinc-50 focus-visible:text-zinc-50"
                    >
                      {"Paper"}
                    </Link>
                  </li>
                )}
                {item.videoUrl && (
                  <li className="">
                    <Link
                      target="_blank"
                      href={item.videoUrl}
                      className="font-medium text-sm hover:underline focus-visible:underline text-zinc-500 hover:text-zinc-50 focus-visible:text-zinc-50"
                    >
                      {"Video"}
                    </Link>
                  </li>
                )}
                {item.websiteUrl && (
                  <li className="">
                    <Link
                      target="_blank"
                      href={item.websiteUrl}
                      className="font-medium text-sm hover:underline focus-visible:underline text-zinc-500 hover:text-zinc-50 focus-visible:text-zinc-50"
                    >
                      {"Website"}
                    </Link>
                  </li>
                )}
                <li className="ml-auto">
                  <Link
                    target="_blank"
                    href={item.googleScholarUrl}
                    className="font-medium text-sm hover:underline focus-visible:underline text-zinc-500 hover:text-zinc-50 focus-visible:text-zinc-50"
                  >
                    {"Scholar"}
                  </Link>
                </li>
                <li className="font-bold text-sm">
                  <button
                    type="button"
                    className="rounded-full h-8 px-3 bg-blue-700/30 text-blue-500 hover:bg-blue-500/30 focus-visible:bg-blue-500/30"
                  >
                    {"BibTex"}
                  </button>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-medium">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
          <li className="min-w-[100px] h-2 opacity-0"></li>
        </ul>
      </div>
    </div>
  );
};
