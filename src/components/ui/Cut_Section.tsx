export default function CutSection() {
  return (
    <div className="w-full h-24 relative bg-[#111111] border-t border-b border-white/10">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.05) 20px,
            rgba(255, 255, 255, 0.05) 21px
          )`,
        }}
      ></div>
    </div>
  );
}
