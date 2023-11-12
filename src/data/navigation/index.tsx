import { Cpu, LibraryBig, UserSquare2 } from "lucide-react";

export const menuData = {
  header: {
    title: "Home",
    description:
      "Modern & concise portfolio showcasing projects, blogs, and contact details.",
    href: "/",
  },
  items: [
    {
      title: "Projects",
      description: "A collection of my best works and projects.",
      href: "/projects",
      icon: <Cpu size={18} />,
    },
    {
      title: "Blog",
      description: "Thoughts, insights, and articles on various topics.",
      href: "/blog",
      icon: <LibraryBig size={18} />,
    },
    {
      title: "Contact",
      description:
        "Reach out to me for collaborations, questions, or just to say hi.",
      href: "/contact",
      icon: <UserSquare2 size={18} />,
    },
  ],
};
