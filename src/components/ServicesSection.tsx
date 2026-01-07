import { Factory, Cog, Package, BoxSelect, Truck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: 'تصنيع الأعلاف',
    description: 'إنتاج أعلاف متنوعة وفق معايير الجودة لتلبية احتياجات القطاع الحيواني',
  },
  {
    icon: Cog,
    title: 'عمليات الطحن',
    description: 'خدمات طحن الحبوب والمواد الخام بأحدث المعدات والتقنيات',
  },
  {
    icon: Package,
    title: 'توريد المواد الخام',
    description: 'توفير وتوريد المواد الأولية اللازمة لصناعة الأعلاف',
  },
  {
    icon: BoxSelect,
    title: 'التعبئة والتغليف',
    description: 'خدمات تعبئة وتغليف المنتجات بأحجام مختلفة تناسب الاحتياجات',
  },
  {
    icon: Truck,
    title: 'الخدمات اللوجستية',
    description: 'إدارة النقل والتوزيع لضمان وصول المنتجات في الوقت المحدد',
  },
  {
    icon: HeadphonesIcon,
    title: 'الدعم والمتابعة',
    description: 'متابعة مستمرة ودعم فني لضمان رضا العملاء',
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 section-darker relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-royal-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4 tracking-wide">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            خدمات متكاملة في صناعة الأعلاف والمطاحن
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نقدم مجموعة شاملة من الخدمات التي تغطي جميع مراحل الإنتاج والتوريد
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-royal w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-600/40 transition-colors duration-500">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="text-accent font-medium text-sm hover:text-accent/80 transition-colors group/link inline-flex items-center gap-2"
              >
                اطلب تفاصيل
                <span className="inline-block transition-transform group-hover/link:-translate-x-1">←</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
