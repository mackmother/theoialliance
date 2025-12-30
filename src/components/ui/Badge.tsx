interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30 shadow-sm shadow-brand-500/10 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
