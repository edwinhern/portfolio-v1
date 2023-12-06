"use client";

import ContentBody from "@/components/content/ContentBody";
import ContentLayout from "@/components/content/ContentLayout";
import ContentContext, { defaultContentTypes } from "@/contexts/ContentContext";
import { PostWithDetails } from "@/sanity/types";

interface ContentParentProps {
  contentData: PostWithDetails;
  contentType: "blog" | "project";
}

const ContentParent = ({ contentData, contentType }: ContentParentProps) => {
  const metaData = { title: contentData.title, slug: contentData.slug };

  return (
    <ContentContext.Provider
      value={{ contentType, contentTypes: defaultContentTypes }}
    >
      <ContentLayout metadata={metaData}>
        <ContentBody post={contentData} />
      </ContentLayout>
    </ContentContext.Provider>
  );
};

export default ContentParent;
