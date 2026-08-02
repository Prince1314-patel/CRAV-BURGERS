export default function SkylineDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35">
        <rect x="40" y="20" width="14" height="55" />
        <polygon points="33,20 61,20 47,4" />
        <circle cx="160" cy="50" r="26" />
        <line x1="160" y1="24" x2="160" y2="76" />
        <line x1="134" y1="50" x2="186" y2="50" />
        <rect x="230" y="40" width="10" height="35" />
        <rect x="300" y="40" width="10" height="35" />
        <line x1="240" y1="45" x2="300" y2="45" />
        <line x1="240" y1="60" x2="300" y2="60" />
        <path d="M600 75 L600 30 Q615 15 630 30 L630 75" />
        <path d="M760 75 L760 45 Q780 15 800 45 L800 75" />
        <rect x="745" y="60" width="8" height="15" />
        <rect x="807" y="60" width="8" height="15" />
        <rect x="950" y="20" width="10" height="55" />
        <circle cx="955" cy="15" r="6" />
      </g>
    </svg>
  );
}
