import { Building2, FileCheck, Banknote } from 'lucide-react';
import aboutFacility from '@/assets/about-facility.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-gradient">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-accent font-semibold text-sm mb-4">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              شركة المتوسط لصناعة الأعلاف و المطاحن
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              نعمل في مجال صناعة الأعلاف وعمليات الطحن في مدينة طبرق، ليبيا. نلتزم بتقديم خدمات متكاملة تشمل التوريد والتصنيع والتعبئة، مع التركيز على الجودة والتنظيم في جميع مراحل العمل.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نسعى إلى بناء علاقات مهنية قائمة على الوضوح والالتزام، ونعمل على تطوير أعمالنا باستمرار لتلبية احتياجات السوق المحلي.
            </p>

            {/* Official Data Card */}
            <div className="card-premium p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-accent" />
                البيانات الرسمية
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-muted-foreground text-sm">رقم الترخيص:</span>
                    <span className="text-foreground font-semibold mr-2">1830</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-muted-foreground text-sm">رقم القيد بالسجل التجاري:</span>
                    <span className="text-foreground font-semibold mr-2">2272</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-muted-foreground text-sm">رأس المال:</span>
                    <span className="text-foreground font-semibold mr-2">30,000,000 د.ل</span>
                    <span className="text-muted-foreground text-xs">(ثلاثون مليون دينار ليبي)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={aboutFacility}
                  alt="منشأة صناعية - شركة المتوسط"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
