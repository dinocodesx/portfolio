import { ContentChapter, TextSection } from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";

export function Disclaimer() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-12">
      <SEO
        title="Disclaimer | Debarshee Chakraborty"
        description="Official disclaimer regarding open source contributions and professional status."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <SidebarLink />

        <div>
          <ContentChapter title="Disclaimer">
            <TextSection>
              I'm not a professional open source developer but I am working on
              open source projects for learning Go and DevOps and to contribute
              to the developer community.
            </TextSection>
          </ContentChapter>
        </div>
      </div>
    </PageLayout>
  );
}
