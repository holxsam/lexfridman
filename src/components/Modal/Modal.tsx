"use client";

import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const close = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={close} className="relative">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px]"
        aria-hidden="true"
      />
      {/* The actual panel */}
      <div className="fixed inset-0 grid place-items-center">
        <Dialog.Panel className={clsx("relative flex flex-col", "w-min h-min")}>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
