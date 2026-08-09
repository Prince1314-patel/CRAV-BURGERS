import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import JourneyMap from "@/components/home/JourneyMap";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OrderOnline from "@/components/home/OrderOnline";
import Gallery from "@/components/home/Gallery";
import LocationHours from "@/components/home/LocationHours";
import CartProgressStrip from "@/components/three/CartProgressStripLoader";

export default function Home() {
  return (
    <>
      <CartProgressStrip />
      <Hero />
      <Story />
      <JourneyMap />
      <WhyChooseUs />
      <Gallery />
      <OrderOnline />
      <LocationHours />
    </>
  );
}
