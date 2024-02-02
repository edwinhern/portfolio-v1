'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { CONSTANTS } from '@/lib/appConstants';

const BlogSection = () => {
  const { contact, blogs } = CONSTANTS.PORTFOLIO.BLOG;
  const { toast } = useToast();

  function handleCardClick() {
    toast({ title: `coming soon!` });
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7">
      <Card className="cardAnimation col-span-full md:col-span-4" onClick={handleCardClick}>
        <CardHeader className="px-4">
          <CardTitle className="text-lg font-bold">{contact.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-4">
          <div className="text-sm text-muted-foreground">{contact.content}</div>
        </CardContent>
      </Card>

      <Card href={'/blog'} className="cardAnimation col-span-full md:col-span-3" role="button">
        <CardHeader className="px-4">
          <CardTitle className="text-lg font-bold">{blogs.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-4">
          <div className="text-sm text-muted-foreground">{blogs.content}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSection;
