"use client";
import Image from "next/image";
import { RESEARCH_ITEMS } from "./data";
import Link from "next/link";
import clsx from "clsx";
import {
  IconBrandYoutube,
  IconCheck,
  IconCopy,
  IconFileText,
} from "@tabler/icons-react";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { motion } from "framer-motion";

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
                    "scale-100 group-hover/img-link:scale-125 group-focus-within/img-link:scale-125"
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
                    <IconBrandYoutube size={24} />
                  ) : (
                    <IconFileText size={24} />
                  )}
                  {item.videoUrl ? "Link to video" : "Link to paper"}
                </div>
              </Link>
              <ul className="flex items-center gap-4">
                {item.paperUrl && (
                  <li>
                    <StyledLink href={item.paperUrl} label="Paper" />
                  </li>
                )}
                {item.videoUrl && (
                  <li>
                    <StyledLink href={item.videoUrl} label="Video" />
                  </li>
                )}
                {item.websiteUrl && (
                  <li>
                    <StyledLink href={item.websiteUrl} label="Website" />
                  </li>
                )}
                <li className="ml-auto">
                  <StyledLink href={item.googleScholarUrl} label="Scholar" />
                </li>
                <li>
                  <BibTex text={item.cite} />
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

type BibTexProps = {
  text: string;
};

const BibTex = ({ text }: BibTexProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((v) => !v);

  return (
    <>
      <button
        type="button"
        className="rounded-full h-8 px-3 bg-blue-700/30 text-blue-500 hover:bg-blue-500/30 focus-visible:bg-blue-500/30 font-bold text-sm"
        onClick={toggleModal}
      >
        {"BibTex"}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-4 rounded-2xl p-8 bg-zinc-900/90 backdrop-blur w-full min-w-[320px] shadow border border-white/5">
          <p className="w-full text-sm text-zinc-500 font-medium">{text}</p>
          <CopyToClipboardButton text={text} />
        </div>
      </Modal>
    </>
  );
};

const CopyToClipboardButton = ({ text }: BibTexProps) => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className="flex justify-center items-center gap-2 rounded-full h-12 px-3 uppercase font-bold bg-blue-900/50 text-blue-500 hover:bg-blue-700/50 focus-visible:bg-blue-700/50 appearance-none outline-none focus-visible:ring-1 focus-visible:ring-white"
      onClick={copyText}
    >
      <span className="relative w-6 h-6">
        {copied && (
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute inset-0"
          >
            <IconCheck stroke={3} />
          </motion.span>
        )}
        {!copied && (
          <span className="absolute inset-0">
            <IconCopy />
          </span>
        )}
      </span>
      <span className="">{copied ? "copied" : "copy"}</span>
    </motion.button>
  );
};

type StyledLinkProps = {
  href: string;
  label: string;
};

const StyledLink = ({ href, label }: StyledLinkProps) => (
  <Link
    target="_blank"
    href={href}
    className="font-medium text-sm hover:underline focus-visible:underline text-zinc-500 hover:text-zinc-50 focus-visible:text-zinc-50"
  >
    {label}
  </Link>
);
