import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <GallerySection />
        <WhyUsSection />
        <ServicesSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
