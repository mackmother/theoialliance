import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  download?: boolean | string;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary CTA - Glass button with glowing gradient border (Mangeo style)
  primary:
    "btn-gradient-border text-white font-semibold backdrop-blur-md focus:ring-primary-500 hover:-translate-y-0.5",
  // Secondary - Glass/transparent with subtle border (Mangeo style)
  secondary:
    "bg-white/[0.03] text-white border border-white/20 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/30 focus:ring-white/50",
  // Ghost - Subtle text only
  ghost:
    "text-white/70 hover:text-white hover:bg-white/5 focus:ring-white/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  external = false,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#141318] disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download === true ? "" : download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
