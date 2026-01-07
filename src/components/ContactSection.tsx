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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'تم إرسال رسالتك بنجاح',
      description: 'سنتواصل معك في أقرب وقت ممكن',
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      requestType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نسعد بتواصلكم
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            لأي استفسارات أو طلبات، لا تترددوا في التواصل معنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:info@mutawassit-mills.ly" className="text-muted-foreground hover:text-accent transition-colors">
                    info@mutawassit-mills.ly
                  </a>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">أرقام التواصل</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">0913228522</span>
                      <span className="text-sm mr-2">(مفوض الشركة)</span>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">0925999597</span>
                      <span className="text-sm mr-2">(نائب الشركة)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">الموقع</h3>
                  <p className="text-muted-foreground">طبرق – ليبيا</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg"
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
          <div className="card-premium p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل <span className="text-destructive">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك الكامل"
                  className="text-right"
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
                  className="text-right"
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
                  className="text-right"
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
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع الطلب" />
                  </SelectTrigger>
                  <SelectContent>
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
                  className="text-right resize-none"
                />
              </div>

              <Button
                type="submit"
                className="gold-button w-full py-6 text-lg"
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
