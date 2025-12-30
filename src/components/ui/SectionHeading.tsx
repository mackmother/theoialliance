import { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
