import React from "react";
import { motion } from "motion/react";
import { Menu, Search, Plus, ChevronRight } from "lucide-react";

const AIChatHistory: React.FC<{ onSelectChat: () => void }> = ({
  onSelectChat,
}) => {
  const chats = [
    { id: 1, title: "Motivation letter template", time: "1 hour ago" },
    { id: 2, title: "Weekly dinner planning", time: "21 hours ago" },
    { id: 3, title: "Seven-day healthy meal plan", time: "21 hours ago" },
    { id: 4, title: "Birthday surprise ideas", time: "Yesterday" },
    { id: 5, title: "React motion tutorial", time: "2 days ago" },
    { id: 6, title: "Travel itinerary for Japan", time: "1 week ago" },
    { id: 7, title: "Home workout routine", time: "1 week ago" },
    { id: 8, title: "Budgeting spreadsheet tips", time: "2 weeks ago" },
    { id: 9, title: "Best hiking trails nearby", time: "2 weeks ago" },
    { id: 10, title: "JavaScript closure explanation", time: "3 weeks ago" },
    { id: 11, title: "Gift ideas for coworkers", time: "1 month ago" },
    { id: 12, title: "Morning meditation guide", time: "1 month ago" },
    { id: 13, title: "Project proposal draft", time: "1 month ago" },
    { id: 14, title: "Gardening for beginners", time: "2 months ago" },
    { id: 15, title: "Interview prep questions", time: "2 months ago" },
    { id: 16, title: "Car maintenance checklist", time: "3 months ago" },
    { id: 17, title: "Book recommendations 2024", time: "3 months ago" },
    { id: 18, title: "Learning Python roadmap", time: "4 months ago" },
    { id: 19, title: "Apartment hunting notes", time: "5 months ago" },
    { id: 20, title: "New Year's resolutions", time: "1 year ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-[#0a0a0b] flex flex-col"
    >
      {/* Header */}
      <div className="pt-12 pb-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Menu className="w-4 h-4" />
          </button>
          <h2 className="text-white text-sm font-semibold tracking-tight">
            Chats
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-[#0055ff] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 active:scale-90 transition-transform">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 scrollbar-hide">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex justify-between items-center group cursor-pointer active:opacity-60 transition-opacity py-1"
            onClick={onSelectChat}
          >
            <div className="space-y-0.5">
              <h3 className="text-white text-[13px] font-medium leading-tight">
                {chat.title}
              </h3>
              <p className="text-white/30 text-[11px]">{chat.time}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIChatHistory;
