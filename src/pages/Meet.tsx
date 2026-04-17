import { useEffect } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { containerVariants, itemVariants } from "../constants/animations";
import { SEO } from "../components/ui/SEO";

export function Meet() {
  useEffect(() => {
    // Redirect to Google Meet after a tiny delay for a smooth experience
    const timeout = setTimeout(() => {
      window.location.href = "https://meet.google.com/fah-jykb-hzo";
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <SEO 
        title="Joining Meeting... | Debarshee Chakraborty"
        description="Redirecting you to Google Meet for a scheduled meeting with Debarshee Chakraborty."
      />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center space-y-4"
      >
        <motion.div variants={itemVariants}>
          <Loader2 className="w-8 h-8 text-white/60 animate-spin" />
        </motion.div>
        <motion.div variants={itemVariants} className="space-y-1 text-center">
          <h1 className="text-white font-medium text-lg">Joining Meeting...</h1>
          <p className="text-[13px] text-white/50">
            Redirecting you to Google Meet
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
}
