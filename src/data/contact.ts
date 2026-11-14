
export interface ContactInfo {
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  name: string;
  href: string;
}

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "wodndckato@gmail.com",
    href: "mailto:wodndckato@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jaeung-jang",
    href: "https://linkedin.com/in/jaeung-jang",
  },
  {
    label: "GitHub",
    value: "github.com/JaeungJayJang",
    href: "https://github.com/JaeungJayJang",
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/JaeungJayJang",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jaeung-jang",
  },
  {
    name: "Email",
    href: "mailto:wodndckato@gmail.com",
  },
];

export const contactContent = {
  title: "Get In Touch",
  subtitle: "I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!",
  connectTitle: "Let's Connect",
  connectDescription: "Whether you're looking for a software engineer to join your team, have a project in mind, or want to discuss the latest in tech and biotech, I'd love to hear from you. I'm particularly interested in opportunities that involve innovative technology, meaningful impact, and collaborative teams.",
  formTitle: "Quick Contact"
};
