import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.quack.lol", // replace this with your deployed domain
  author: "duckodas",
  desc: "quack.lol's blog is more than just a blog; it's a monthly diary that unfolds my daily experiences, shares updates about relationships, family, school, and, in essence, provides a glimpse into the broader spectrum of life's adventures and challenges.",
  title: "quack.lol blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/duckodas",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/micasniebuhr/",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/duckodas",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:micasniebuhr@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/duckodas",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@duckodas",
    linkTitle: `${SITE.title} on TikTok`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://quack.lol",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/duckodas/",
    linkTitle: `${SITE.title} on Steam`,
    active: true,
  },
];
