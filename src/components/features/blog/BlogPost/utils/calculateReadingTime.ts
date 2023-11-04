export const calculateReadingTime = (data: any[]): string => {
  const wordsPerMinute = 200;

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  let totalWords = 0;
  for (const block of data) {
    if (block._type === "block" && block.style === "normal") {
      block.children.forEach((child: any) => {
        totalWords += countWords(child.text);
      });
    }
  }

  const readingTime = Math.ceil(totalWords / wordsPerMinute);

  return `${readingTime} min read`;
};
