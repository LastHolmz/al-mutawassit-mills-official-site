import { Shield, MessageCircle, Truck, Award, Clock, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'التزام بالمعايير التشغيلية',
    description: 'نعمل وفق إجراءات منظمة لضمان سير العمل بكفاءة وجودة عالية',
  },
  {
    icon: MessageCircle,
    title: 'وضوح في الإجراءات والتواصل',
    description: 'نحرص على الشفافية في جميع تعاملاتنا وسهولة التواصل مع عملائنا',
  },
  {
    icon: Truck,
    title: 'تنظيم في التوريد والاستلام',
    description: 'نظام متكامل لإدارة سلسلة التوريد من البداية حتى التسليم',
  },
  {
    icon: Award,
    title: 'تركيز على الجودة والتحسين المستمر',
    description: 'نسعى دائماً لتطوير خدماتنا والارتقاء بمستوى الأداء',
  },
  {
    icon: Clock,
    title: 'استجابة سريعة للاحتياجات',
    description: 'فريق عمل جاهز للتعامل مع متطلبات العملاء بفعالية وسرعة',
  },
  {
    icon: Wrench,
    title: 'خبرة تشغيلية في المجال',
    description: 'معرفة عملية بتفاصيل صناعة الأعلاف وعمليات الطحن',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4">
            مميزاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لماذا تختار شركة المتوسط؟
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            نلتزم بتقديم خدمات متميزة تلبي احتياجات عملائنا في قطاع الأعلاف والمطاحن
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
