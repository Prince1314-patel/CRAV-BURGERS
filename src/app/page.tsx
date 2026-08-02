import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OrderOnline from "@/components/home/OrderOnline";
import Gallery from "@/components/home/Gallery";
import LocationHours from "@/components/home/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <WhyChooseUs />
      <Gallery />
      <OrderOnline />
      <LocationHours />
    </>
  );
}
