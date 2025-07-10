import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string | null;
  gradient: string;
  accentColor: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: any;
  gradient: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "jaeung.jang@gmail.com",
    href: "mailto:jaeung.jang@gmail.com",
    gradient: "from-red-500 to-orange-500",
    accentColor: "text-red-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jaeung-jang",
    href: "https://linkedin.com/in/jaeung-jang",
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "text-blue-400"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/JaeungJayJang",
    href: "https://github.com/JaeungJayJang",
    gradient: "from-purple-500 to-pink-500",
    accentColor: "text-purple-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
    gradient: "from-green-500 to-emerald-500",
    accentColor: "text-green-400"
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/JaeungJayJang",
    icon: Github,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jaeung-jang",
    icon: Linkedin,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Email",
    href: "mailto:jaeung.jang@gmail.com",
    icon: Mail,
    gradient: "from-red-500 to-orange-500"
  },
];

export const contactContent = {
  title: "Get In Touch",
  subtitle: "I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!",
  connectTitle: "Let's Connect",
  connectDescription: "Whether you're looking for a software engineer to join your team, have a project in mind, or want to discuss the latest in tech and biotech, I'd love to hear from you. I'm particularly interested in opportunities that involve innovative technology, meaningful impact, and collaborative teams.",
  formTitle: "Quick Contact"
};
