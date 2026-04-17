import { useState, useEffect } from "react";

/**
 * Displays the current IST (Kolkata) time on hover, otherwise shows the year.
 * Used in the Portfolio page footer.
 */
export function FooterTime() {
  const [time, setTime] = useState<string>("");
  const [isHoveringTime, setIsHoveringTime] = useState(false);

  useEffect(() => {
    const updateKolkataTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setTime(formatter.format(now));
    };

    updateKolkataTime();
    const interval = setInterval(updateKolkataTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center gap-2 cursor-help transition-all duration-300"
      onMouseEnter={() => setIsHoveringTime(true)}
      onMouseLeave={() => setIsHoveringTime(false)}
    >
      <span className="tabular-nums">
        {isHoveringTime ? `${time} IST` : "2026"}
      </span>
      <div className="w-3 h-3 border border-current rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-current rounded-full" />
      </div>
    </div>
  );
}
