import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'تواصل معنا', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">م</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                شركة المتوسط
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                لصناعة الأعلاف و المطاحن
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="gold-button px-6"
            >
              <Phone className="w-4 h-4 ml-2" />
              اتصل الآن
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-right px-4 py-3 text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="gold-button w-full"
                >
                  <Phone className="w-4 h-4 ml-2" />
                  اتصل الآن
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
