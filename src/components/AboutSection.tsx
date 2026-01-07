import { Building2, FileCheck, Banknote } from 'lucide-react';
import aboutFacility from '@/assets/about-facility.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 section-royal relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-accent font-semibold text-sm mb-4 tracking-wide">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              شركة المتوسط لصناعة الأعلاف و المطاحن
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              نعمل في مجال صناعة الأعلاف وعمليات الطحن في مدينة طبرق، ليبيا. نلتزم بتقديم خدمات متكاملة تشمل التوريد والتصنيع والتعبئة، مع التركيز على الجودة والتنظيم في جميع مراحل العمل.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              نسعى إلى بناء علاقات مهنية قائمة على الوضوح والالتزام، ونعمل على تطوير أعمالنا باستمرار لتلبية احتياجات السوق المحلي.
            </p>

            {/* Official Data Card */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="icon-royal p-2 rounded-lg">
                  <FileCheck className="w-5 h-5 text-accent" />
                </div>
                البيانات الرسمية
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-royal-800/30">
                  <Building2 className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">رقم الترخيص:</span>
                    <span className="text-foreground font-semibold mr-2">1830</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-royal-800/30">
                  <FileCheck className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">رقم القيد بالسجل التجاري:</span>
                    <span className="text-foreground font-semibold mr-2">2272</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-royal-800/30">
                  <Banknote className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">رأس المال:</span>
                    <span className="text-foreground font-semibold mr-2">30,000,000 د.ل</span>
                    <span className="text-muted-foreground text-xs block mt-1">(ثلاثون مليون دينار ليبي)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={aboutFacility}
                  alt="منشأة صناعية - شركة المتوسط"
                  className="w-full h-full object-cover"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-royal-950/20" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-royal-500/20 to-transparent rounded-xl blur-xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 border border-royal-500/20 rounded-xl" />
              
              {/* Glass info overlay */}
              <div className="absolute bottom-6 right-6 left-6 glass-subtle p-4 rounded-lg">
                <p className="text-foreground/90 text-sm font-medium">
                  منشآت حديثة ومتطورة في طبرق
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
