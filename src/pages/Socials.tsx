import { motion } from "motion/react";
import { itemVariants } from "../constants/animations";
import { SOCIAL_LINKS } from "../constants/data";
import { Socials } from "../components/Socials";
import { PageLayout } from "../components/ui/PageLayout";
import { SEO } from "../components/ui/SEO";

export function Social() {
  return (
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
  );
}
