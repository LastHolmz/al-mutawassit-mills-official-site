import { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroShipping from '@/assets/hero-shipping.jpg';
import heroMilling from '@/assets/hero-milling.jpg';
import heroWarehouse from '@/assets/hero-warehouse.jpg';

const slides = [
  {
    id: 1,
    headline: 'حلول متكاملة لصناعة الأعلاف والمطاحن في طبرق',
    subtext: 'نلتزم بالجودة والتنظيم وسلاسة التوريد لتلبية احتياجات السوق',
    image: heroShipping,
  },
  {
    id: 2,
    headline: 'توريد وتصنيع بأعلى معايير الجودة',
    subtext: 'نقدم خدمات متكاملة في مجال الأعلاف والمطاحن مع الالتزام بالمواعيد',
    image: heroMilling,
  },
  {
    id: 3,
    headline: 'خبرة تشغيلية في القطاع الصناعي',
    subtext: 'نعمل على تطوير منظومة عمل متكاملة لخدمة عملائنا',
    image: heroWarehouse,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 hero-overlay" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="section-container">
              <div className="max-w-3xl">
                <h2
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight ${
                    index === currentSlide ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  {slide.headline}
                </h2>
                <p
                  className={`text-lg md:text-xl text-primary-foreground/80 mb-10 ${
                    index === currentSlide ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: '0.4s' }}
                >
                  {slide.subtext}
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    index === currentSlide ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <Button
                    onClick={scrollToContact}
                    className="gold-button text-lg px-8 py-6"
                  >
                    <MessageSquare className="w-5 h-5 ml-2" />
                    اطلب استشارة
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
                    asChild
                  >
                    <a href="tel:0913228522">
                      <Phone className="w-5 h-5 ml-2" />
                      تواصل عبر الهاتف
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="الشريحة السابقة"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="الشريحة التالية"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent w-8'
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-primary-foreground/60 text-sm hidden md:block">
        <span className="animate-float inline-block">↓ اسحب للأسفل</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
