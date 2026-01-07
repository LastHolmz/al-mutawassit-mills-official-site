import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="card-premium p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            موقعنا على الخريطة
          </h2>
          <p className="text-muted-foreground mb-6">طبرق – ليبيا</p>
          
          {/* Map Embed */}
          <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8!2d23.9!3d32.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA0JzEyLjAiTiAyM8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sly!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة المتوسط"
            />
          </div>
          
          <Button asChild className="gold-button px-8">
            <a
              href="https://maps.app.goo.gl/HCdUfBTuxbAeuSF17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              فتح في خرائط Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
