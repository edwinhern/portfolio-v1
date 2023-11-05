import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogData } from "@/data";

const BlogSection = () => {
  const { contact, blogs } = blogData;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7">
      <Card className="cardAnimation col-span-full md:col-span-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">{contact.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">{contact.content}</div>
        </CardContent>
      </Card>

      <Card
        href={"/blog"}
        className="cardAnimation col-span-full md:col-span-3"
        role="button"
      >
        <CardHeader>
          <CardTitle className="text-lg font-bold">{blogs.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">{blogs.content}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSection;
