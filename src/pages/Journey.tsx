import { ContentChapter, TextSection } from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";

export function Journey() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="Journey | Debarshee Chakraborty"
        description="Learn more about Debarshee Chakraborty, a Software Engineer focused on distributed systems and low-level design."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Modular Sections */}
        <div className="space-y-16">
          <ContentChapter title="Comming Soon...">
            <TextSection>.</TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
