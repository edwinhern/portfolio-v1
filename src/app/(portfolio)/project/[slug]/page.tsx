import { fetchProjectPostBySlug, fetchProjectPostSlugs } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleDetailsInitializer } from '@/components/article/ArticleDetails/ArticleDetails';
import { seoConfig } from '@/lib/networkUtils';

export const runtime = 'edge';

type ProjectPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: ProjectPostPageProps): Promise<Metadata> {
  const project = await fetchProjectPostBySlug(slug);

  const projectTitle = project?.title ?? 'Project Title';
  const projectTopic = project?.categories ? project.categories.join(' ') : 'Project Topic';
  return {
    ...seoConfig,
    description: `Read the project post titled "${project?.title}" by Edwin H to dive into ${projectTopic}.`,
    openGraph: {
      ...seoConfig.openGraph,
      description: `Edwin H elaborates on ${projectTopic} in his project post titled "${projectTitle}".`,
      title: `Project: ${projectTitle} - Edwin H - Portfolio`,
    },
    title: `Project: ${projectTitle} - Edwin H - Portfolio`,
  };
}

export async function generateStaticParams() {
  const slugs = await fetchProjectPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPostPage({ params }: ProjectPostPageProps) {
  const project = await fetchProjectPostBySlug(params.slug);

  if (!project) {
    return notFound();
  }
  return <ArticleDetailsInitializer article={project} />;
}
