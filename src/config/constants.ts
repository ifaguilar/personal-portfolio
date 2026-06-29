export const SITE = {
  title: "Isaac Aguilar | Software Engineer & Full Stack Developer",
  description:
    "Portfolio and projects by Isaac Aguilar." /* TODO: Improve this description */,
  socialImage: "/og-image.png",
} as const;

export const projectLinkLabels = {
  github: "GitHub",
  website: "Website",
} as const;

export const navItems = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
] as const;
