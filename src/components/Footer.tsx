import { Mail, Phone, MapPin, Building2, FileCheck, Banknote } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-lg">م</span>
              </div>
              <h3 className="font-bold text-lg">شركة المتوسط</h3>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              شركة متخصصة في صناعة الأعلاف وعمليات الطحن في مدينة طبرق، ليبيا. نلتزم بالجودة والتنظيم في جميع خدماتنا.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', href: '#hero' },
                { label: 'من نحن', href: '#about' },
                { label: 'المعرض', href: '#gallery' },
                { label: 'لماذا نحن', href: '#why-us' },
                { label: 'خدماتنا', href: '#services' },
                { label: 'تواصل معنا', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="text-primary-foreground/70">
                  <p>0913228522</p>
                  <p>0925999597</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@mutawassit-mills.ly" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@mutawassit-mills.ly
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">طبرق – ليبيا</span>
              </li>
            </ul>
          </div>

          {/* Official Data */}
          <div>
            <h3 className="font-bold text-lg mb-6">البيانات الرسمية</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-accent shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <span>رقم الترخيص: </span>
                  <span className="text-primary-foreground">1830</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FileCheck className="w-4 h-4 text-accent shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <span>رقم القيد: </span>
                  <span className="text-primary-foreground">2272</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Banknote className="w-4 h-4 text-accent shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <span>رأس المال: </span>
                  <span className="text-primary-foreground">30,000,000 د.ل</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              حقوق النشر © {currentYear} شركة المتوسط لصناعة الأعلاف و المطاحن
            </p>
            <p>
              Design by <a href="https://mnfd.ly" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">mnfd.ly</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
