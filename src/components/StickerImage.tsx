import Image from "next/image";
import clsx from "clsx";

export default function StickerImage({
  src,
  alt,
  size = 140,
  tilt = -6,
  className,
  priority,
}: {
  src: string;
  alt: string;
  size?: number;
  tilt?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={clsx("animate-float drop-shadow-[0_18px_24px_rgba(27,27,27,0.35)]", className)}
      style={{ ["--tilt" as string]: `${tilt}deg`, width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
