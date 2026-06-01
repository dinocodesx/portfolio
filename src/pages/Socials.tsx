import { SEO } from "@/components/layout/SEO";
import { Socials } from "@/components/portfolio/Socials";
import { containerVariants, itemVariants } from "@/constants/animations";
import { SOCIAL_LINKS } from "@/data";
import { motion } from "motion/react";

export function Social() {
  return (
    <div className="min-h-screen bg-[#F3F3F1] py-10 px-4 flex justify-center items-center font-sans">
      <SEO
        title="Connect | Debarshee Chakraborty"
        description="Connect with Debarshee Chakraborty on GitHub, LinkedIn, Twitter, and more. Let's build something extraordinary together."
      />
      <div className="w-full max-w-120 bg-linear-to-br from-[#1a1a1a] to-[#3a3a3a] rounded-[36px] shadow-2xl overflow-hidden flex flex-col min-h-205 relative border border-white/5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-8 py-16 space-y-10"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="relative inline-block">
              <img
                src="https://github.com/dinocodesx.png"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/10 object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-white font-bold text-lg tracking-tight">
                @dinocodesx
              </h1>
              <p className="text-white/70 text-[13px] font-medium max-w-70 mx-auto leading-relaxed">
                Software Engineer
                <br />
                Building things for the web.
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="space-y-4 pb-12">
            {SOCIAL_LINKS.map((link) => (
              <Socials key={link.id} {...link} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
