import { Cpu, Home, LibraryBig, UserSquare2 } from 'lucide-react';

const ICON_SIZE = 18;

export const CONSTANTS = {
  NAVIGATION: [
    {
      title: 'Home',
      description: 'Modern & concise portfolio showcasing projects, blogs, and contact details.',
      href: '/',
      icon: <Home size={ICON_SIZE} />,
    },
    {
      title: 'Projects',
      description: 'A collection of my best works and projects.',
      href: '/project',
      icon: <Cpu size={ICON_SIZE} />,
    },
    {
      title: 'Blog',
      description: 'Thoughts, insights, and articles on various topics.',
      href: '/blog',
      icon: <LibraryBig size={ICON_SIZE} />,
    },
    {
      title: 'Contact',
      description: 'Reach out to me for collaborations, questions, or just to say hi.',
      href: '/contact',
      icon: <UserSquare2 size={ICON_SIZE} />,
      comingSoon: true,
    },
  ],

  PORTFOLIO: {
    ABOUT_ME: [
      {
        src: '/me.png',
        alt: 'Portrait of me',
        title: 'My Story',
        description: 'Discover my journey in the tech world',
      },
      {
        src: '/jobs/tesla.png',
        alt: 'Tesla Icon',
        title: 'Tesla',
        description: 'Click to explore my internship and full-time experience',
      },
      {
        src: '/jobs/jpmorgan-chase.png',
        alt: 'JPMorgan Chase & Co. Icon',
        title: 'JPMorgan Chase & Co.',
        description: 'Click to see my internship journey at Chase',
      },
      {
        src: '/jobs/seo-tech.png',
        alt: 'SEO Tech Developer Icon',
        title: 'SEO Tech Internship',
        description: 'Where my tech journey began',
      },
    ],
    BLOG: {
      contact: {
        title: 'Contact Me',
        content: "Let's collaborate on the next big thing",
      },
      blogs: {
        title: 'Blogs',
        content: 'Explore my tech thoughts on Medium',
      },
    },
  },
};
