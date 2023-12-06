import ProjectListParent from "@/components/project/ProjectListParent";
import { ProjectPost } from "@/sanity/types";

const ProjectIndexPage = ({ projects = [] }: { projects: ProjectPost[] }) => {
  return <ProjectListParent projects={projects} />;
};

export default ProjectIndexPage;
