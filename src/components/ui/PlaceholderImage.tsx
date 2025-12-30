interface PlaceholderImageProps {
  width?: number;
  height?: number;
  label?: string;
  className?: string;
}

export function PlaceholderImage({
  width = 800,
  height = 450,
  label = "Screenshot",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`
        relative bg-dark-800 border border-dark-700 rounded-lg overflow-hidden
        flex items-center justify-center
        ${className}
      `}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent" />
      <div className="text-center p-4">
        <svg
          className="w-12 h-12 mx-auto text-dark-600 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm text-dark-500">{label}</span>
      </div>
    </div>
  );
}
