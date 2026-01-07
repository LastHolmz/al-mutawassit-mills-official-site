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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-royal-950/70 via-royal-900/60 to-royal-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-950/80 via-transparent to-royal-950/40" />
          
          {/* Subtle light effect */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-royal-400/5 to-transparent blur-3xl" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="section-container">
              {/* Glass content panel */}
              <div 
                className={`max-w-3xl hero-glass p-8 md:p-12 rounded-xl ${
                  index === currentSlide ? 'animate-fade-in' : ''
                }`}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                  style={{ animationDelay: '0.2s' }}
                >
                  {slide.headline}
                </h2>
                <p
                  className="text-lg md:text-xl text-foreground/70 mb-10"
                  style={{ animationDelay: '0.4s' }}
                >
                  {slide.subtext}
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  style={{ animationDelay: '0.6s' }}
                >
                  <Button
                    onClick={scrollToContact}
                    className="btn-royal text-lg px-8 py-6"
                  >
                    <MessageSquare className="w-5 h-5 ml-2" />
                    اطلب استشارة
                  </Button>
                  <Button
                    className="btn-outline-royal text-lg px-8 py-6"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-subtle text-foreground hover:bg-royal-700/40 transition-all duration-300 hover:scale-105"
        aria-label="الشريحة السابقة"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-subtle text-foreground hover:bg-royal-700/40 transition-all duration-300 hover:scale-105"
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
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-accent w-10'
                : 'bg-foreground/30 w-2 hover:bg-foreground/50'
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-foreground/50 text-sm hidden md:block">
        <span className="animate-float inline-block">↓ اسحب للأسفل</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
