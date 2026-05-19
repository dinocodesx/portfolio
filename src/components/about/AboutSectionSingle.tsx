import { AboutOverflow } from "./SectionWrapper";

interface SingleImageProps {
  imageSrc: string;
  alt: string;
}

/**
 * A single centered image that overflows the text container.
 */
export function AboutImageSingle({ imageSrc, alt }: SingleImageProps) {
  return (
    <AboutOverflow>
      <div className="w-full aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white/5 pointer-events-none italic font-serif">
          {alt}
        </div>
      </div>
    </AboutOverflow>
  );
}
