import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import LearnAnywhereSection from "@/components/LearnAnywhereSection";
import TrustedSection from "@/components/TrustedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import MasterSection from "@/components/MasterSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <LearnAnywhereSection />
      <TrustedSection />
      <TestimonialsSection />
      <BenefitsSection />
      <MasterSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
