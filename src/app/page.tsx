import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OrderOnline from "@/components/home/OrderOnline";
import MenuTeaser from "@/components/home/MenuTeaser";
import Gallery from "@/components/home/Gallery";
import Team from "@/components/home/Team";
import LocationHours from "@/components/home/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OrderOnline />
      <MenuTeaser />
      <Gallery />
      <Team />
      <LocationHours />
    </>
  );
}
