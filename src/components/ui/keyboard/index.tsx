import { useState, useEffect } from "react";
import { Keyboard } from "./Keyboard";
import { UiShowcaseLayout } from "../../layout/UiShowcaseLayout";
import { shortcuts } from "../../../data/shortcuts";

export function KeyboardCraft() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key);
    };
    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <UiShowcaseLayout
      title="Keyboard Craft"
      date="May 21, 2026"
      description="A high-fidelity, interactive MacBook-style keyboard component. It uses a unit-based flex system for precise alignment and responds to physical hardware input in real-time."
    >
      <div className="w-full max-w-4xl mx-auto py-12">
        <Keyboard shortcuts={shortcuts} activeKey={activeKey} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="text-white font-medium italic font-serif text-lg">Real-time Feedback</h3>
            <p className="text-white/40 leading-relaxed">
              The component listens for global keyboard events and maps them to the visual representation. It handles special keys like Command, Option, Control, and arrow keys with specific display symbols.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-medium italic font-serif text-lg">Unit-based Layout</h3>
            <p className="text-white/40 leading-relaxed">
              Instead of fixed widths, it uses a relative unit system for each row, ensuring perfect staggering and alignment across different screen sizes while maintaining the authentic MacBook island-key aesthetic.
            </p>
          </div>
        </div>
      </div>
    </UiShowcaseLayout>
  );
}
