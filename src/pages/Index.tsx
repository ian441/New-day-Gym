
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import BMICalculator from "@/components/BMICalculator";
import OperatingHours from "@/components/OperatingHours";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <BMICalculator />
    <OperatingHours />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
