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
                  "flex-col gap-0 w-full absolute top-16 left-0 bg-white/90 backdrop-blur-mdzz py-2",
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
                        "relative capitalize  text-neutral-700zz font-medium text-sm",
                        // styles for mobile:
                        "pl-4 pr-8 h-12 flex items-center justify-end",
                        // selected ? "bg-primary-900/50 text-primary-100" : "bg-transparent",
                        // styles for desktop:
                        "sm:pl-0 sm:pr-0 sm:h-auto sm:hover:bg-transparent sm:hover:text-neutral-500 sm:hover:underline text-zinc-400"
                        // link.label === "Youtube"
                        //   ? "text-red-500"
                        //   : link.label === "Twitter"
                        //   ? "text-sky-500"
                        //   : "text-neutral-900"
                      )}
                      // onClick={close}
                    >
                      {/* {link.icon && <span className="mr-1">{link.icon}</span>} */}
                      {link.label}
                      {/* {selected && (
                      <motion.span
                        layoutId="nav-link"
                        className="absolute -bottom-1 w-full h-[2px] bg-neutral-400 hidden sm:block"
                      />
                    )} */}
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
