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
    <footer className="relative">
      {/* Gradient top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-royal-500/30 to-transparent" />
      
      <div className="bg-royal-950/95 backdrop-blur-sm">
        <div className="section-container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center border border-royal-400/30">
                  <span className="text-foreground font-bold text-lg">م</span>
                </div>
                <h3 className="font-bold text-lg text-foreground">شركة المتوسط</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                شركة متخصصة في صناعة الأعلاف وعمليات الطحن في مدينة طبرق، ليبيا. نلتزم بالجودة والتنظيم في جميع خدماتنا.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg text-foreground mb-6">روابط سريعة</h3>
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
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg text-foreground mb-6">التواصل</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-muted-foreground">
                    <p>0913228522</p>
                    <p>0925999597</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:info@mutawassit-mills.ly" className="text-muted-foreground hover:text-accent transition-colors">
                    info@mutawassit-mills.ly
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-muted-foreground">طبرق – ليبيا</span>
                </li>
              </ul>
            </div>

            {/* Official Data */}
            <div>
              <h3 className="font-bold text-lg text-foreground mb-6">البيانات الرسمية</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-accent shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">رقم الترخيص: </span>
                    <span className="text-foreground font-medium">1830</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-4 h-4 text-accent shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">رقم القيد: </span>
                    <span className="text-foreground font-medium">2272</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Banknote className="w-4 h-4 text-accent shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">رأس المال: </span>
                    <span className="text-foreground font-medium">30,000,000 د.ل</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-700/30">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-muted-foreground">
                حقوق النشر © {currentYear} شركة المتوسط لصناعة الأعلاف و المطاحن
              </p>
              <p className="text-muted-foreground/60">
                Design by <a href="https://mnfd.ly" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">mnfd.ly</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
