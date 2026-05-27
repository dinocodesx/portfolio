import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { Socials } from "@/components/portfolio/Socials";
import { itemVariants } from "@/constants/animations";
import { SOCIAL_LINKS } from "@/data";
import { motion } from "motion/react";

export function Social() {
  return (
    <>
      {/* Background Layer */}
      <div
        className="fixed inset-0 z-0 bg-[url('https://baos70mga7.ufs.sh/f/FIOeDmU4bLHBXtNXKZBRmfCro19wuz75cQ2IDsi4ZAjUkgKy')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <PageLayout maxWidth="max-w-md">
          <SEO
            title="Connect | Debarshee Chakraborty"
            description="Connect with Debarshee Chakraborty on GitHub, LinkedIn, Twitter, and more. Let's build something extraordinary together."
          />
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <img
              src="https://github.com/dinocodesx.png"
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto border border-white/10 object-cover"
            />
            <div className="space-y-1">
              <h1 className="text-white font-medium text-xl">
                Debarshee Chakraborty
              </h1>
              <p className="text-sm opacity-50">Software Engineer</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <Socials key={link.id} {...link} />
            ))}
          </motion.div>
        </PageLayout>
      </div>
    </>
  );
}
