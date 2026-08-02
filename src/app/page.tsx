import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OrderOnline from "@/components/home/OrderOnline";
import MenuTeaser from "@/components/home/MenuTeaser";
import Gallery from "@/components/home/Gallery";
import LocationHours from "@/components/home/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuTeaser />
      <WhyChooseUs />
      <Gallery />
      <OrderOnline />
      <LocationHours />
    </>
  );
}
