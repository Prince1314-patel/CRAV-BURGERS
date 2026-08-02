import type { MenuCategory } from "@/content/menu";

export default function CategoryNav({ categories }: { categories: MenuCategory[] }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[89px] z-30 overflow-x-auto border-b border-maroon/15 bg-cream/95 px-6 py-3 backdrop-blur-sm sm:top-[101px] sm:px-8 lg:px-12"
    >
      <ul className="flex w-max gap-2 sm:gap-3">
        {categories.map((category) => (
          <li key={category.slug}>
            <a
              href={`#${category.slug}`}
              className="block whitespace-nowrap rounded-full border border-maroon/20 px-4 py-1.5 font-body text-xs font-semibold tracking-[0.05em] text-ink/70 uppercase transition-colors hover:border-maroon hover:text-maroon"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
