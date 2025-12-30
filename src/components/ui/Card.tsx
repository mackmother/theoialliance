interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  id?: string;
}

export function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={`
        bg-dark-900/80 border border-white/[0.05] rounded-xl relative overflow-hidden
        ${hover ? "transition-all duration-300 ease-out hover:border-white/[0.1] hover:bg-dark-900 hover:shadow-xl hover:shadow-black/40" : ""}
        ${gradient ? "gradient-border" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
