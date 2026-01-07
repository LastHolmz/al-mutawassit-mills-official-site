import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  return (
    <section className="py-20 section-darker">
      <div className="section-container">
        <div className="glass-card p-10 text-center max-w-3xl mx-auto">
          <div className="icon-royal w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            موقعنا على الخريطة
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">طبرق – ليبيا</p>
          
          {/* Map Embed */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8 border border-royal-600/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8!2d23.9!3d32.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA0JzEyLjAiTiAyM8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sly!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة المتوسط"
            />
          </div>
          
          <Button asChild className="btn-royal px-10 py-6 text-lg">
            <a
              href="https://maps.app.goo.gl/HCdUfBTuxbAeuSF17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 ml-2" />
              فتح في خرائط Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
