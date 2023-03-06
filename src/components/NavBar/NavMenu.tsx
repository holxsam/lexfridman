"use client";

import { Popover } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { NavMenuButton } from "./NavMenuButton";

export type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const NavMenu = ({ links }: { links: NavItem[] }) => {
  return (
    <Popover as={Fragment}>
      {({ close }) => (
        <>
          <NavMenuButton />
          <Popover.Panel static>
            {({ open }) => (
              <ul
                className={clsx(
                  "flex min-h-min transition-[transform_opacity] duration-300",
                  // styles for mobile:
                  "flex-col gap-0 w-full absolute top-0 left-0 pt-16 pb-2 bg-black/80 backdrop-blur-[2px] shadow-lg",
                  // styles for desktop:
                  "sm:flex-row sm:items-center sm:gap-4 sm:w-auto sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none",
                  // on mobile show list depending on open:
                  open
                    ? "visible opacity-100 translate-y-0"
                    : "[visibility:hidden] opacity-0 -translate-y-1/2",
                  // on desktop ALWAYS show the list:
                  "sm:visible sm:scale-y-100 sm:opacity-100 sm:translate-y-0"
                )}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "relative capitalize font-medium text-sm",
                        // styles for mobile:
                        "pl-4 pr-8 h-12 flex items-center justify-end",
                        // styles for desktop:
                        "sm:pl-0 sm:pr-0 sm:h-auto sm:hover:bg-transparent hover:text-zinc-100 hover:underline text-zinc-400"
                      )}
                      onClick={close}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
