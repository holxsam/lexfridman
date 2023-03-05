import clsx from "clsx";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { NavItem, NavMenu } from "./NavMenu";

const links: NavItem[] = [
  { label: "Deep Learning", href: "https://deeplearning.mit.edu/", icon: null },
  { label: "Podcast", href: "https://lexfridman.com/podcast", icon: null },
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
