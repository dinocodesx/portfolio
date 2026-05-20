import { OverflowSection } from "./SectionLayout";

interface SingleImageProps {
  imageSrc: string;
  alt: string;
}

/**
 * A single centered image that overflows the text container.
 */
export function ImageSingle({ imageSrc, alt }: SingleImageProps) {
  return (
    <OverflowSection>
      <div className="w-full aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative">
        <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white/5 pointer-events-none italic font-serif">
          {alt}
        </div>
      </div>
    </OverflowSection>
  );
}
