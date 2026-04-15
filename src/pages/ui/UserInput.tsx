import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Plus,
  Send,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

const models = ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3"];

export function UserInput() {
  const [inputValue, setInputValue] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4o");
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar / Back Link */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-3xl tracking-tight">
                LLM Chat Input
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                From the "Ambient Intelligence" series. This interface explores
                the <span className="text-white">ergonomics of chat</span> in
                high-density environments. The goal was to minimize cognitive
                load while maximizing the utility of secondary actions like file
                attachments and model switching.
              </p>
              <p>
                The input area uses a{" "}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] text-white/80">
                  mix-blend-mode
                </code>{" "}
                for the active state indicator, ensuring that the interface
                remains legible across various background depths. The "flying"
                send icon provides a subtle affordance for the primary action.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-16/10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12"
            >
              <div className="w-full max-w-2xl space-y-4">
                {/* Chat Input Component */}
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl focus-within:border-white/20 transition-colors">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask anything..."
                    className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/20 resize-none min-h-25 text-[15px] leading-relaxed"
                  />

                  <div className="flex items-center justify-between mt-4">
                    {/* Bottom Left: Plus Button */}
                    <div className="relative">
                      <button
                        onClick={() => setShowFileOptions(!showFileOptions)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all border border-white/5"
                      >
                        <Plus
                          className={`w-4 h-4 transition-transform duration-300 ${showFileOptions ? "rotate-45" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {showFileOptions && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: -8, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute bottom-full left-0 mb-2 bg-[#1A1A1A] border border-white/10 rounded-xl p-1 shadow-2xl flex flex-col min-w-40 z-50 overflow-hidden"
                          >
                            <button className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors w-full text-left whitespace-nowrap">
                              <ImageIcon className="w-4 h-4 opacity-50" />
                              Upload Image
                            </button>
                            <div className="h-px bg-white/5 w-full" />
                            <button className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors w-full text-left whitespace-nowrap">
                              <FileText className="w-4 h-4 opacity-50" />
                              Add Document
                            </button>
                            <div className="h-px bg-white/5 w-full" />
                            <button className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 text-[13px] text-white/60 hover:text-white transition-colors w-full text-left whitespace-nowrap">
                              <LinkIcon className="w-4 h-4 opacity-50" />
                              Paste Link
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Right: Model Dropdown & Send Button */}
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setShowModelDropdown(!showModelDropdown)
                          }
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[12px] text-white/40 hover:text-white transition-all border border-white/5"
                        >
                          {selectedModel}
                          <ChevronDown className="w-3 h-3" />
                        </button>

                        <AnimatePresence>
                          {showModelDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: -8, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute bottom-full right-0 mb-2 bg-[#1A1A1A] border border-white/10 rounded-xl p-1.5 shadow-2xl flex flex-col gap-1 min-w-40 z-50"
                            >
                              {models.map((model) => (
                                <button
                                  key={model}
                                  onClick={() => {
                                    setSelectedModel(model);
                                    setShowModelDropdown(false);
                                  }}
                                  className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-[13px] transition-colors ${selectedModel === model ? "text-white bg-white/5" : "text-white/40 hover:text-white"}`}
                                >
                                  {model}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <button
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${inputValue.trim() ? "bg-white text-black" : "bg-white/5 text-white/20"}`}
                      >
                        <Send className="w-5 h-5 -rotate-12 -translate-x-px translate-y-px" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
