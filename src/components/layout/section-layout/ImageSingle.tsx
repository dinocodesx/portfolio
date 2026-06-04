import { Lightbox } from "@/components/layout/section-layout/Lightbox";
import { OverflowSection } from "@/components/layout/section-layout/SectionLayout";
import { useState } from "react";

interface SingleImageProps {
  imageSrc: string;
  alt: string;
}

/**
 * A single centered image that overflows the text container.
 */
export function ImageSingle({ imageSrc, alt }: SingleImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <OverflowSection>
      <div className="space-y-4">
        <div
          className="w-full aspect-16/8 bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="text-white/30 text-[13px] italic font-serif text-center">
          {alt}
        </p>
      </div>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={imageSrc}
        alt={alt}
      />
    </OverflowSection>
  );
}
