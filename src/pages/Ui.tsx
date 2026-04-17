import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { UICategoryColumn } from "../components/ui/UICategoryColumn";

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
      title: "Sidebar Architectures",
      description: "A structural navigation component for managing.",
      link: "/sidebar",
    },
    {
      title: "Checkout Flow",
      description: "A Stripe inspired cart checkout interface.",
      link: "/checkout",
    },
    {
      title: "User Onboarding",
      description: "A simple form for collecting structured data.",
      link: "/multipage-form",
    },
  ],
  elements: [
    {
      title: "Button Varieties",
      description: "8 button variations for all your UI needs.",
      link: "/button",
    },
    {
      title: "Dropdown Patterns",
      description: "Smooth dropdown menu with animated transitions.",
      link: "/dropdown",
    },
    {
      title: "Chat Bubbles",
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
    <PageLayout maxWidth="max-w-4xl" className="space-y-16">
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
            <UICategoryColumn heading="App UIs" items={UI_DATA.apps} />
            <UICategoryColumn heading="Components" items={UI_DATA.components} />
            <UICategoryColumn heading="Elements" items={UI_DATA.elements} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
