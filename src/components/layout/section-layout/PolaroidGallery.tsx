import { useState } from "react";
import { OverflowSection } from "./SectionLayout";
import { Lightbox } from "./Lightbox";

interface PolaroidItem {
  src: string;
  caption: string;
}

interface PolaroidGalleryProps {
  items: PolaroidItem[];
}

/**
 * A gallery of polaroid-style images that overflows the text container.
 * Mimics a natural, scattered look with slight rotations and shadows.
 * Fixed to a single row with 4 columns.
 */
export function PolaroidGallery({ items }: PolaroidGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<PolaroidItem | null>(null);

  return (
    <OverflowSection>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 px-4">
        {items.map((item, index) => {
          // Predefined rotations for a natural "scattered" feel
          const rotations = [
            "-rotate-[2deg]",
            "rotate-[1.5deg]",
            "-rotate-[1deg]",
            "rotate-[2deg]",
            "-rotate-[1.5deg]",
          ];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={index}
              className={`bg-white p-2 md:p-2 pb-4 md:pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-black/5 relative ${rotation} inline-block cursor-zoom-in`}
              onClick={() => setSelectedImage(item)}
            >
              {/* Pin / Dot at the top */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/10 rounded-full" />

              {/* Image Container */}
              <div className="w-full aspect-square overflow-hidden bg-gray-100 border border-black/5">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
                />
              </div>

              {/* Caption */}
              <div className="mt-2 md:mt-3 text-center">
                <p className="text-black/70 text-[10px] md:text-[12px] font-serif italic tracking-tight leading-tight px-1">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        alt={selectedImage?.caption || ""}
      />
    </OverflowSection>
  );
}
