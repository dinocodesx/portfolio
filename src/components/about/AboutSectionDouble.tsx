import { AboutOverflow } from "./SectionWrapper";

interface DoubleImageProps {
  image1: { src: string; alt: string };
  image2: { src: string; alt: string };
}

/**
 * Two side-by-side images that overflow the text container.
 */
export function AboutImageDouble({ image1, image2 }: DoubleImageProps) {
  return (
    <AboutOverflow>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative">
          <img 
            src={image1.src} 
            alt={image1.alt} 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/5 pointer-events-none italic font-serif text-xs">
            {image1.alt}
          </div>
        </div>
        <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative">
          <img 
            src={image2.src} 
            alt={image2.alt} 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/5 pointer-events-none italic font-serif text-xs">
            {image2.alt}
          </div>
        </div>
      </div>
    </AboutOverflow>
  );
}
