import { Metadata } from 'next';

export const seoConfig: Metadata = {
  creator: '@edwinhern',
  description:
    'Edwin H, a proficient full-stack developer, showcases his front-end and back-end development projects and professional experience in his portfolio.',
  metadataBase: new URL('https://edwinhern.com'),
  openGraph: {
    description: "Explore Edwin H's projects and learn about his journey and skills as a full-stack developer.",
    images: [
      {
        alt: 'Edwin H Portfolio',
        height: 920,
        type: 'image/png',
        url: '/me.png',
        width: 1080,
      },
    ],
    siteName: 'Edwin H Portfolio',
    title: 'Edwin H - Full Stack Developer Portfolio',
    url: 'https://www.edwinhern-portfolio.com/',
  },
  title: 'Edwin H - Full Stack Developer Portfolio',
  twitter: {
    card: 'summary_large_image',
    creator: '@edwinhern',
    description: "Explore Edwin H's projects and learn about his journey and skills as a full-stack developer.",
    images: 'https://edwinhern.com/_next/image?url=%2Fme.png&w=1080&q=75',
    site: '@edwinhern-portfolio',
    title: 'Edwin H - Full Stack Developer Portfolio',
  },
};
