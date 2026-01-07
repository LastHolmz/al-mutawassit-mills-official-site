import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requestType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: 'خطأ في البيانات',
        description: 'يرجى تعبئة جميع الحقول المطلوبة',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'تم إرسال رسالتك بنجاح',
      description: 'سنتواصل معك في أقرب وقت ممكن',
    });
    
    setFormData({ name: '', phone: '', email: '', requestType: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-28 section-royal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4 tracking-wide">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            نسعد بتواصلكم
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            لأي استفسارات أو طلبات، لا تترددوا في التواصل معنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="icon-royal w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">البريد الإلكتروني</h3>
                  <a href="mailto:info@mutawassit-mills.ly" className="text-muted-foreground hover:text-accent transition-colors">
                    info@mutawassit-mills.ly
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="icon-royal w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">أرقام التواصل</h3>
                  <div className="space-y-2">
                    <p className="text-foreground">
                      <span className="font-semibold">0913228522</span>
                      <span className="text-muted-foreground text-sm mr-2">(مفوض الشركة)</span>
                    </p>
                    <p className="text-foreground">
                      <span className="font-semibold">0925999597</span>
                      <span className="text-muted-foreground text-sm mr-2">(نائب الشركة)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="icon-royal w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">الموقع</h3>
                  <p className="text-muted-foreground">طبرق – ليبيا</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://wa.me/218913228522"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل عبر واتساب
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-8">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل <span className="text-destructive">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك الكامل"
                  className="bg-royal-800/50 border-royal-600/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 text-right"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف <span className="text-destructive">*</span>
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="أدخل رقم هاتفك"
                  type="tel"
                  className="bg-royal-800/50 border-royal-600/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 text-right"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني (اختياري)
                </label>
                <Input
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="أدخل بريدك الإلكتروني"
                  type="email"
                  className="bg-royal-800/50 border-royal-600/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 text-right"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  نوع الطلب
                </label>
                <Select
                  value={formData.requestType}
                  onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                >
                  <SelectTrigger className="bg-royal-800/50 border-royal-600/30 text-foreground text-right">
                    <SelectValue placeholder="اختر نوع الطلب" />
                  </SelectTrigger>
                  <SelectContent className="bg-royal-800 border-royal-600/30">
                    <SelectItem value="inquiry">استفسار عام</SelectItem>
                    <SelectItem value="partnership">طلب تعاون</SelectItem>
                    <SelectItem value="quote">طلب عرض</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الرسالة <span className="text-destructive">*</span>
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  className="bg-royal-800/50 border-royal-600/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 text-right resize-none"
                />
              </div>

              <Button
                type="submit"
                className="btn-royal w-full py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    <Send className="w-5 h-5 ml-2" />
                    إرسال
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
