import { ArchiveLayout, ContentListItem } from "@/components/layout";
import { TALKS_DATA } from "@/data";
import { Calendar, MapPin } from "lucide-react";

export function Talks() {
  return (
    <ArchiveLayout
      title="Talks"
      description="Public speaking and workshops exploring Machine Learning, GenAI, and technical best practices."
      seoTitle="Talks | Debarshee Chakraborty"
      seoDescription="Public speaking and workshops by Debarshee Chakraborty."
    >
      {TALKS_DATA.map((talk) => (
        <ContentListItem
          key={talk.id}
          title={talk.title}
          subtitle={talk.event}
          description={talk.description}
          link={talk.link}
          actionLabel="Check it out"
          meta={[
            { icon: <Calendar className="w-3 h-3" />, text: talk.date },
            { icon: <MapPin className="w-3 h-3" />, text: talk.location },
          ]}
        />
      ))}
    </ArchiveLayout>
  );
}
