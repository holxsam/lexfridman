"use client";

import clsx from "clsx";
import { Menu, Popover } from "@headlessui/react";
import { IconMenu, IconX } from "@tabler/icons-react";

export const NavMenuButton = () => {
  return (
    <Popover.Button
      className={clsx(
        "outline-none appearance-none",
        "focus-visible:ring-1 focus-visible:ring-neutral-900",
        "rounded-xl w-10 aspect-square grid place-items-center sm:hidden hover:text-primary-500 ring-current",
        "hover:bg-primary-900/50 hover:text-primary-100"
      )}
    >
      {({ open }) => (open ? <IconX /> : <IconMenu />)}
    </Popover.Button>
  );
};
