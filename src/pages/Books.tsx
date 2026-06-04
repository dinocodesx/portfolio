import { ArchiveLayout, ContentListItem } from "@/components/layout";
import { BOOKS_DATA } from "@/data";
import { User } from "lucide-react";

export function Books() {
  return (
    <ArchiveLayout
      title="Books"
      description="My reading list and library of books that have shaped my engineering and thinking."
      seoTitle="Books | Debarshee Chakraborty"
      seoDescription="A curated list of books read and recommended by Debarshee Chakraborty."
    >
      {BOOKS_DATA.map((book) => (
        <ContentListItem
          key={book.id}
          title={book.title}
          description={book.description}
          link={book.link}
          actionLabel="View book"
          meta={[
            { icon: <User className="w-3 h-3" />, text: book.authors },
          ]}
        />
      ))}
    </ArchiveLayout>
  );
}
