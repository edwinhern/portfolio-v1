import { Badge } from "@/components/ui/badge";

import styles from "./styles/BlogList.module.css";

interface BlogTagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const BlogTagFilter: React.FC<BlogTagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => {
  return (
    <div
      className={`animate-fade-in ${styles["no-scrollbar"]} flex flex-nowrap gap-2 overflow-x-auto`}
    >
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Badge
            className="flex-shrink-0"
            key={tag}
            variant={isSelected ? "secondary" : "default"}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};

export default BlogTagFilter;
