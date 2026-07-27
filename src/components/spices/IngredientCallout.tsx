import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function IngredientCallout({
  title,
  copy,
  image,
  alt,
  reverse = false,
  delay = 0,
}: {
  title: string;
  copy: string;
  image: string;
  alt: string;
  reverse?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12 ${
        reverse ? "sm:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border-2 border-ink">
        <Image src={image} alt={alt} fill sizes="(min-width: 640px) 460px, 90vw" className="object-cover" />
      </div>
      <div>
        <h3 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          {copy}
        </p>
      </div>
    </Reveal>
  );
}
