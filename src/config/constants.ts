export const NAME = "Isaac Aguilar";

export const JOB_TITLE = "Software Engineer & Full Stack Developer";

export const DEFAULT_SUBJECT = "New Portfolio Contact";

export const CONTACT_FORM_MAX_LENGTHS = {
  fullName: 100,
  email: 254,
  subject: 150,
  message: 2000,
} as const;

export const CONTACT_FORM_MIN_LENGTHS = {
  fullName: 2,
  message: 10,
} as const;

export const site = {
  title: `${NAME} | ${JOB_TITLE}`,
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
    href: "/#home",
    label: "Home",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
] as const;
