import { notFound } from 'next/navigation';

import ProjectListParent from '@/components/project/ProjectListParent';
import { fetchAllProjects } from '@/sanity/lib/sanityFetch';

export const runtime = 'edge';

export default async function ProjectPostsPage() {
  const projects = await fetchAllProjects();

  if (projects.length === 0) {
    return notFound();
  }

  return <ProjectListParent projects={projects} />;
}
