import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { itemVariants } from "@/constants/animations";
import { motion } from "motion/react";

interface ArchiveLayoutProps {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  children: React.ReactNode;
}

/**
 * A shared layout for "listing" pages like Blogs and Talks.
 * Handles SEO, Sidebar, and Page Header.
 */
export function ArchiveLayout({
  title,
  description,
  seoTitle,
  seoDescription,
  children,
}: ArchiveLayoutProps) {
  return (
    <PageLayout maxWidth="max-w-3xl">
      <SEO title={seoTitle} description={seoDescription} />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        <div className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">{title}</h1>
            {description && (
              <p className="text-white/40 text-sm max-w-xl">{description}</p>
            )}
          </motion.div>

          {/* Content List */}
          <div className="space-y-16">{children}</div>
        </div>
      </div>
    </PageLayout>
  );
}
