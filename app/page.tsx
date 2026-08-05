import Hero from "@/components/home/Hero";
import StatBand from "@/components/home/StatBand";
import PhotoHighlights from "@/components/home/PhotoHighlights";
import WhyDifferent from "@/components/home/WhyDifferent";
import PatrolsSection from "@/components/home/PatrolsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <PhotoHighlights />
      <WhyDifferent />
      <PatrolsSection />
      <TestimonialSection />
      <CtaBand />
    </>
  );
}
