"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { SOCIAL_MEDIA } from "./data";

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

export const SocialMedia = () => {
  return (
    <section className="flex w-full min-h-[500px] py-16 bg-gradient-to-b from-[#101010] to-zinc-900">
      <div className="pack-content flex flex-col items-center justify-center">
        <p className="flex flex-col">
          <span className="font-extrabold text-3xl sm:text-4xl text-center">
            {"Connect with me"}
          </span>
          <span className="font-medium text-2xl text-center text-zinc-500">
            {"@lexfridman on all platforms"}
          </span>
        </p>
        <motion.ul
          className="flex justify-center flex-wrap gap-4 pt-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
        >
          {SOCIAL_MEDIA.map((item, i) => (
            <li key={item.label}>
              <Link
                target="_blank"
                href={item.link}
                legacyBehavior // so that we can render our custom a tag
                passHref // so that our custom a tag has the href for accessibility
              >
                <motion.a
                  target="_blank"
                  custom={i}
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{ scale: 1.1 }}
                  whileFocus={{ scale: 1.1 }}
                  className={clsx(
                    "flex flex-col items-center justify-center rounded-2xl min-w-[100px] aspect-square shadow-lg",
                    item.linkClassname
                  )}
                >
                  <span className="">{item.icon}</span>
                  <span className="text-sm font-bold">{item.label}</span>
                </motion.a>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
