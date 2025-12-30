import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "raised" | "gradient" | "dots" | "grid";
  spacing?: "sm" | "md" | "lg";
  divider?: boolean; // Show gradient divider at top
}

const backgroundStyles = {
  default: "bg-dark-950",
  raised: "bg-dark-900",
  gradient: "bg-section-gradient",
  dots: "bg-dots bg-dark-900",
  grid: "bg-grid bg-dark-950",
};

const spacingStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20 lg:py-24",
  lg: "py-20 md:py-24 lg:py-28",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  background = "default",
  spacing = "md",
  divider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${spacingStyles[spacing]} ${backgroundStyles[background]} ${className}`}
    >
      {divider && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-lg h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
