import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";

const UI_DATA = {
  apps: [
    {
      title: "LLM Mobile Chat App",
      description: "A fluid ai chat interface designed using semantic.",
      link: "/mobile-chat",
    },
  ],
  components: [
    {
      title: "LLM Chat Input",
      description: "A simple text entry field for LLM chat apps.",
      link: "/chat-input",
    },
    {
      title: "Sidebar",
      description: "A structural navigation component for managing.",
      link: "/sidebar",
    },
    {
      title: "Checkout",
      description: "A Stripe inspired cart checkout interface.",
      link: "/checkout",
    },
    {
      title: "MultiPage Form",
      description: "A simple form for collecting structured data.",
      link: "/multipage-form",
    },
  ],
  elements: [
    {
      title: "Buttons",
      description: "8 button variations for all your UI needs.",
      link: "/button",
    },
    {
      title: "Dropdown",
      description: "Smooth dropdown menu with animated transitions.",
      link: "/dropdown",
    },
    {
      title: "Chats",
      description: "Clean chat interface with animated bubbles.",
      link: "/chat",
    },
    {
      title: "Command Palette",
      description: "A powerful modal search and action tool built in.",
      link: "/command-palette",
    },
  ],
};

export function UI() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Index
            </Link>
          </motion.div>

          <div className="space-y-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-xl">UI</h1>
              <p className="text-white/40 text-lg">
                Collection of UI components for building LLM chat apps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {/* Motion Column */}
              <motion.div variants={itemVariants} className="space-y-12">
                <h2 className="text-white/40 text-sm font-medium">App UIs</h2>
                <div className="space-y-10">
                  {UI_DATA.apps.map((item, i) => (
                    <Link
                      to={item.link}
                      key={i}
                      className="space-y-2 group cursor-pointer block"
                    >
                      <h3 className="text-white font-medium group-hover:underline underline-offset-4 decoration-white/30">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-[14px] leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* CSS Column */}
              <motion.div variants={itemVariants} className="space-y-12">
                <h2 className="text-white/40 text-sm font-medium">
                  Components
                </h2>
                <div className="space-y-10">
                  {UI_DATA.components.map((item, i) => (
                    <Link
                      to={item.link}
                      key={i}
                      className="space-y-2 group cursor-pointer block"
                    >
                      <h3 className="text-white font-medium group-hover:underline underline-offset-4 decoration-white/30">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-[14px] leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Interaction Column */}
              <motion.div variants={itemVariants} className="space-y-12">
                <h2 className="text-white/40 text-sm font-medium">Elements</h2>
                <div className="space-y-10">
                  {UI_DATA.elements.map((item, i) => (
                    <Link
                      to={item.link}
                      key={i}
                      className="space-y-2 group cursor-pointer block"
                    >
                      <h3 className="text-white font-medium group-hover:underline underline-offset-4 decoration-white/30">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-[14px] leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
