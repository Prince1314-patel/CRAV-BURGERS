import type { Metadata } from "next";
import CategoryNav from "@/components/menu/CategoryNav";
import MenuCategorySection from "@/components/menu/MenuCategorySection";
import { menuCategories } from "@/content/menu";

export const metadata: Metadata = {
  title: "Full Menu | Street Bites",
  description:
    "Browse the full Street Bites menu: chaat, momos, curries, dosa, burgers, drinks and more, freshly made in Wolverhampton.",
};

export default function MenuPage() {
  return (
    <>
      <div className="border-b border-maroon/10 bg-cream py-14 text-center sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-black tracking-tight text-ink">
            Taste of Street Culture
          </h1>
        </div>
      </div>

      <CategoryNav categories={menuCategories} />

      {menuCategories.map((category, index) => (
        <MenuCategorySection key={category.slug} category={category} index={index} />
      ))}
    </>
  );
}
