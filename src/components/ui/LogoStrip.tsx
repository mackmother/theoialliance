import Image from "next/image";

interface Logo {
  name: string;
  url?: string;
  className?: string;
}

interface LogoStripProps {
  logos: Logo[];
  className?: string;
  grayscale?: boolean;
}

function PlaceholderLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-4 py-2 rounded bg-dark-800/50 border border-dark-700/50">
      <span className="text-sm font-medium text-dark-400">{name}</span>
    </div>
  );
}

export function LogoStrip({
  logos,
  className = "",
  grayscale = true,
}: LogoStripProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 ${className}`}
    >
      {logos.map((logo) =>
        logo.url ? (
          <div
            key={logo.name}
            className={`relative h-8 md:h-10 ${grayscale ? "opacity-60 hover:opacity-100 grayscale hover:grayscale-0" : ""} transition-all duration-200`}
          >
            <Image
              src={logo.url}
              alt={logo.name}
              height={40}
              width={120}
              className="h-full w-auto object-contain"
              unoptimized
            />
          </div>
        ) : (
          <PlaceholderLogo key={logo.name} name={logo.name} />
        )
      )}
    </div>
  );
}
