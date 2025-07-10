export interface NavigationItem {
  name: string;
  href: string;
}

export interface QuickLink {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const quickLinks: QuickLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Jaeung Jang",
  title: "Jaeung Jang | Software Engineer",
  description: "Software Engineer passionate about building innovative solutions at the intersection of technology and healthcare.",
  tagline: "Building the future, one commit at a time",
  location: "Virginia, United States",
  email: "wodndckato@gmail.com",
  github: "https://github.com/JaeungJayJang",
  linkedin: "https://linkedin.com/in/jaeung-jang",
  website: "https://jang.jaeung.com"
};
