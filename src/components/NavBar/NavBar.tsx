import clsx from "clsx";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
// import { NavItem } from "./NavList";
import { NavItem, NavMenu } from "./NavMenu";

import { IconBrandYoutube, IconBrandTwitter } from "@tabler/icons-react";

const links: NavItem[] = [
  { label: "Deep Learning", href: "/", icon: null },
  { label: "Podcast", href: "/", icon: null },
  // {
  //   label: "Youtube",
  //   href: "/",
  //   icon: <IconBrandYoutube size={24} className="text-red-500" />,
  // },
  // {
  //   label: "Twitter",
  //   href: "/",
  //   icon: <IconBrandTwitter size={20} className="text-sky-500" />,
  // },
];

export const NavBar = () => {
  return (
    <div className={clsx("h-16 bg-transparent")}>
      <div className="flex justify-between items-center pack-content h-full">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="flex gap-0 sm:gap-4 h-min">
          <NavMenu links={links} />
        </nav>
      </div>
    </div>
  );
};
