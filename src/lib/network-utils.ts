import { Metadata } from 'next';

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

export const seoConfig: Metadata = {
  title: 'Edwin H - Full Stack Developer Portfolio',
  creator: '@edwinhern',
  metadataBase: new URL(baseUrl as string),
  description:
    'Edwin H, a proficient full-stack developer, showcases his front-end and back-end development projects and professional experience in his portfolio.',
  openGraph: {
    url: 'https://www.edwinhern-portfolio.com/',
    title: 'Edwin H - Full Stack Developer Portfolio',
    description: "Explore Edwin H's projects and learn about his journey and skills as a full-stack developer.",
    images: [
      {
        url: '/me.png',
        width: 1080,
        height: 920,
        alt: 'Edwin H Portfolio',
        type: 'image/png',
      },
    ],
    siteName: 'Edwin H Portfolio',
  },
  twitter: {
    creator: '@edwinhern',
    site: '@edwinhern-portfolio',
    card: 'summary_large_image',
    images: 'https://edwinhern.com/_next/image?url=%2Fme.png&w=1080&q=75',
    title: 'Edwin H - Full Stack Developer Portfolio',
    description: "Explore Edwin H's projects and learn about his journey and skills as a full-stack developer.",
  },
};
