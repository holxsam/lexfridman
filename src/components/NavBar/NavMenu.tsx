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
                  "flex min-h-min shadow-lg transition-[transform_opacity] duration-300",
                  // styles for mobile:
                  "flex-col gap-0 w-full absolute top-16 left-0 bg-zinc-900/90  py-2",
                  // styles for desktop:
                  "sm:flex-row sm:items-center sm:gap-4 sm:w-auto sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:dark:bg-transparent sm:py-0 sm:shadow-none",
                  // on mobile show list depending on open:
                  open
                    ? "visible scale-y-100zz opacity-100"
                    : "[visibility:hidden] scale-y-0zz opacity-0",
                  // on desktop ALWAYS show the list:
                  "sm:visible sm:scale-y-100 sm:opacity-100"
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
