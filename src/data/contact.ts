import { Mail, Linkedin, Github, LucideIcon } from "lucide-react";
import { themeGradients, themeText } from "./app-themes";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  gradient: string;
  accentColor: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "wodndckato@gmail.com",
    href: "mailto:wodndckato@gmail.com",
    gradient: themeGradients.warm,
    accentColor: themeText.error
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jaeung-jang",
    href: "https://linkedin.com/in/jaeung-jang",
    gradient: themeGradients.cool,
    accentColor: themeText.primary
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/JaeungJayJang",
    href: "https://github.com/JaeungJayJang",
    gradient: themeGradients.secondary,
    accentColor: themeText.secondary
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/JaeungJayJang",
    icon: Github,
    gradient: themeGradients.secondary
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jaeung-jang",
    icon: Linkedin,
    gradient: themeGradients.cool
  },
  {
    name: "Email",
    href: "mailto:wodndckato@gmail.com",
    icon: Mail,
    gradient: themeGradients.warm
  },
];

export const contactContent = {
  title: "Get In Touch",
  subtitle: "I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!",
  connectTitle: "Let's Connect",
  connectDescription: "Whether you're looking for a software engineer to join your team, have a project in mind, or want to discuss the latest in tech and biotech, I'd love to hear from you. I'm particularly interested in opportunities that involve innovative technology, meaningful impact, and collaborative teams.",
  formTitle: "Quick Contact"
};
