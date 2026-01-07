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
    <section id="why-us" className="py-28 section-royal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4 tracking-wide">
            مميزاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            لماذا تختار شركة المتوسط؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نلتزم بتقديم خدمات متميزة تلبي احتياجات عملائنا في قطاع الأعلاف والمطاحن
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-royal w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-600/40 transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
