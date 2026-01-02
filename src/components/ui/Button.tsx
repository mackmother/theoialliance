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
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary CTA - Warm Orange with glow
  primary:
    "bg-primary-500 text-white font-bold hover:bg-primary-400 focus:ring-primary-500 shadow-[0_0_20px_rgba(255,107,53,0.4),0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5),0_8px_25px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
  // Secondary - Glass with purple tint
  secondary:
    "bg-secondary-500/10 text-dark-50 border border-secondary-500/30 backdrop-blur-sm hover:bg-secondary-500/20 hover:border-secondary-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] focus:ring-secondary-500",
  // Ghost - Subtle
  ghost:
    "text-dark-300 hover:text-dark-100 hover:bg-white/5 focus:ring-dark-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
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
