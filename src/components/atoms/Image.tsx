import Image from 'next/image';
import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'auto';
}

export const SetImage: React.FC<ImageProps> = ({ 
  src, 
  alt="", 
  className, 
  aspectRatio = 'video' 
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    auto: 'aspect-auto'
  };

  return (
    <div className={cn( "relative overflow-hidden",aspectClasses[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-auto object-cover"
        sizes=""
      />
    </div>
  );
};