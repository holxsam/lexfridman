"use client";

import clsx from "clsx";
import { Menu, Popover } from "@headlessui/react";
import { NavLink } from "./NavLink";

export type NavItem = {
  label: string;
  href: string;
};

type NavListProps = {
  links: NavItem[];
};

export const NavList = ({ links }: NavListProps) => {
  return (
    <Popover.Panel static>
      {({ open }) => (
        <ul
          className={clsx(
            "flex min-h-min shadow-lg transition-[transform_opacity] duration-300",
            // styles for mobile:
            "flex-col gap-0 w-full absolute top-16 left-0 bg-white/90 backdrop-blur-md py-2",
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
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      )}
    </Popover.Panel>
  );
};
