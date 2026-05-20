import { Calendar, Clock } from "lucide-react";
import { ArchiveLayout, ContentListItem } from "../components/layout";
import { BLOGS_DATA } from "../data";

export function Blogs() {
  return (
    <ArchiveLayout
      title="Blogs"
      description="Deep dives into backend systems, machine learning, and software engineering."
      seoTitle="Blogs | Debarshee Chakraborty"
      seoDescription="Reading list and technical blog posts by Debarshee Chakraborty."
    >
      {BLOGS_DATA.map((blog) => (
        <ContentListItem
          key={blog.id}
          title={blog.title}
          description={blog.excerpt}
          link={blog.link}
          actionLabel="Read more"
          meta={[
            { icon: <Calendar className="w-3 h-3" />, text: blog.date },
            { icon: <Clock className="w-3 h-3" />, text: blog.readTime },
          ]}
        />
      ))}
    </ArchiveLayout>
  );
}
