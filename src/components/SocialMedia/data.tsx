import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandPatreon,
  IconBrandTwitter,
  IconBrandYoutube,
  IconSchool,
} from "@tabler/icons-react";

const iconProps = {
  size: 48,
};

export const SOCIAL_MEDIA = [
  {
    label: "Twitter",
    link: "https://twitter.com/LexFridman",
    icon: <IconBrandTwitter {...iconProps} className="" />,
    linkClassname: "bg-gradient-to-r from-sky-400 to-blue-400",
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/lexfridman",
    icon: <IconBrandYoutube {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-red-500 to-rose-600",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/lexfridman/",
    icon: <IconBrandLinkedin {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-sky-600 to-sky-800",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/lexfridman/",
    icon: <IconBrandInstagram {...iconProps} />,
    linkClassname:
      "bg-gradient-to-bl from-fuchsia-500 via-red-500 to-yellow-500",
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/lexfridman",
    icon: <IconBrandFacebook {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    label: "Medium",
    link: "https://medium.com/@lexfridman",
    icon: <IconBrandMedium {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-white to-zinc-200 text-zinc-900",
  },
  {
    label: "Scholar",
    link: "https://scholar.google.com/citations?user=wZH_N7cAAAAJ&hl=en&oi=sra",
    icon: <IconSchool {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-blue-500 to-blue-400",
  },
  {
    label: "Patreon",
    link: "https://www.patreon.com/lexfridman",
    icon: <IconBrandPatreon {...iconProps} />,
    linkClassname: "bg-gradient-to-r from-rose-500 to-orange-400",
  },
];
