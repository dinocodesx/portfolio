import { useState } from "react";
import { OverflowSection } from "./SectionLayout";
import { Lightbox } from "./Lightbox";

interface DoubleImageProps {
  image1: { src: string; alt: string };
  image2: { src: string; alt: string };
}

/**
 * Two side-by-side images that overflow the text container.
 */
export function ImageDouble({ image1, image2 }: DoubleImageProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <OverflowSection>
      <div className="grid grid-cols-2 gap-2 md:gap-6">
        <div className="space-y-4">
          <div
            className="aspect-4/5 bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative cursor-pointer"
            onClick={() => setSelectedImage(image1)}
          >
            <img
              src={image1.src}
              alt={image1.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-white/30 text-[13px] italic font-serif text-center px-4">
            {image1.alt}
          </p>
        </div>

        <div className="space-y-4">
          <div
            className="aspect-4/5 bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative cursor-pointer"
            onClick={() => setSelectedImage(image2)}
          >
            <img
              src={image2.src}
              alt={image2.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-white/30 text-[13px] italic font-serif text-center px-4">
            {image2.alt}
          </p>
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
      />
    </OverflowSection>
  );
}
