"use client";

import clsx from "clsx";
import { Popover } from "@headlessui/react";
import { IconMenu, IconX } from "@tabler/icons-react";

export const NavMenuButton = () => {
  return (
    <Popover.Button
      className={clsx(
        "z-10 relative outline-none appearance-none",
        "rounded-xl w-10 aspect-square grid place-items-center sm:hidden hover:text-primary-500 ring-current",
        "focus-visible:bg-zinc-800 hover:bg-zinc-800 hover:text-white"
      )}
    >
      {({ open }) => (open ? <IconX /> : <IconMenu />)}
    </Popover.Button>
  );
};
