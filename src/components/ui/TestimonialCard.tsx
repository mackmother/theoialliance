import Image from "next/image";

interface TestimonialCardProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export function TestimonialCard({ imageUrl, alt, className = "" }: TestimonialCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        width={400}
        height={500}
        className="w-full h-auto"
        unoptimized
      />
    </div>
  );
}
