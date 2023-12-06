import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { LiveQuery } from "next-sanity/preview/live-query";

import ProjectIndexPage from "@/components/pages/project";
import ProjectListLivePreview from "@/components/project/DynamicProjectList";
import { fetchAllProjectsQuery } from "@/sanity/lib/queries";
import { fetchAllProjects } from "@/sanity/lib/sanityFetch";

export const runtime = "edge";

export default async function ProjectPostsPage() {
  const projects = await fetchAllProjects();

  if (projects.length === 0) {
    return notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={fetchAllProjectsQuery}
      initialData={projects}
      as={ProjectListLivePreview}
    >
      <ProjectIndexPage projects={projects} />
    </LiveQuery>
  );
}
