export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-[#111111] flex items-center justify-center overflow-hidden relative">
      {/* Full viewport grid background */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-3">
        {/* Top-left corner */}
        <div className="relative border-r border-b border-white/10"></div>

        {/* Top-left-center */}
        <div className="relative border-r border-b border-white/10"></div>

        {/* Top-center */}
        <div className="relative border-r border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-white/10"></div>
        </div>

        {/* Top-right-center */}
        <div className="relative border-r border-b border-white/10"></div>

        {/* Top-right corner */}
        <div className="relative border-b border-white/10"></div>

        {/* Middle-left */}
        <div className="relative border-r border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10"></div>
        </div>

        {/* Center cell - contains the text - spans 3 columns */}
        <div className="relative border-r border-b border-white/10 flex items-center justify-center col-span-3">
          <h1
            className="text-white tracking-wider leading-none select-none lowercase text-center whitespace-nowrap font-bold"
            style={{
              fontSize: "clamp(2rem, 15vh, 8rem)",
              fontFamily:
                '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
              letterSpacing: "0.002em",
            }}
          >
            <span className="text-blue-600">@</span>
            dinocodesx.
          </h1>
        </div>

        {/* Middle-right */}
        <div className="relative border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10"></div>
        </div>

        {/* Bottom-left corner */}
        <div className="relative border-r border-white/10"></div>

        {/* Bottom-left-center */}
        <div className="relative border-r border-white/10"></div>

        {/* Bottom-center */}
        <div className="relative border-r border-white/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-white/10"></div>
        </div>

        {/* Bottom-right-center */}
        <div className="relative border-r border-white/10"></div>

        {/* Bottom-right corner */}
        <div className="relative border-white/10"></div>
      </div>
    </section>
  );
}
