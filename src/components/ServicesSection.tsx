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
    <section id="services" className="py-24 bg-section-gradient">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدمات متكاملة في صناعة الأعلاف والمطاحن
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التي تغطي جميع مراحل الإنتاج والتوريد
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium p-8 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="text-accent font-medium text-sm hover:underline transition-all"
              >
                اطلب تفاصيل ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
