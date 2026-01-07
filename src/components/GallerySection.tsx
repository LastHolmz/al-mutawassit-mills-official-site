import { useState } from 'react';
import galleryShipping from '@/assets/gallery-shipping-1.jpg';
import gallerySilos from '@/assets/gallery-silos.jpg';
import galleryFeedLine from '@/assets/gallery-feed-line.jpg';
import galleryMilling from '@/assets/gallery-milling.jpg';
import galleryWarehouse from '@/assets/gallery-warehouse.jpg';
import galleryPackaging from '@/assets/gallery-packaging.jpg';
import galleryContainers from '@/assets/gallery-containers.jpg';
import galleryFacility from '@/assets/gallery-facility.jpg';
import galleryGrain from '@/assets/gallery-grain.jpg';
import galleryRollers from '@/assets/gallery-rollers.jpg';
import galleryTrucks from '@/assets/gallery-trucks.jpg';
import galleryConveyor from '@/assets/gallery-conveyor.jpg';

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'shipping', label: 'الشحن والتوريد' },
  { id: 'equipment', label: 'معدات ومرافق' },
  { id: 'products', label: 'منتجات وأعلاف' },
  { id: 'milling', label: 'عمليات الطحن' },
];

const galleryItems = [
  { id: 1, title: 'سفن شحن وبواخر توريد', category: 'shipping', image: galleryShipping },
  { id: 2, title: 'صوامع تخزين الحبوب', category: 'equipment', image: gallerySilos },
  { id: 3, title: 'خط إنتاج الأعلاف', category: 'products', image: galleryFeedLine },
  { id: 4, title: 'معدات الطحن', category: 'milling', image: galleryMilling },
  { id: 5, title: 'مستودعات وتجهيزات', category: 'equipment', image: galleryWarehouse },
  { id: 6, title: 'تغليف وتعبئة', category: 'products', image: galleryPackaging },
  { id: 7, title: 'حاويات الشحن', category: 'shipping', image: galleryContainers },
  { id: 8, title: 'منشأة صناعية', category: 'equipment', image: galleryFacility },
  { id: 9, title: 'حبوب ومواد خام', category: 'products', image: galleryGrain },
  { id: 10, title: 'آلات الطحن الصناعي', category: 'milling', image: galleryRollers },
  { id: 11, title: 'شحن وتوزيع', category: 'shipping', image: galleryTrucks },
  { id: 12, title: 'خطوط الإنتاج', category: 'milling', image: galleryConveyor },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 section-darker relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm mb-4 tracking-wide">
            معرض الصور
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            لمحة عن أعمالنا ومنشآتنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نستعرض جوانب من عملياتنا ومرافقنا في مجال صناعة الأعلاف والمطاحن
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'btn-royal'
                  : 'glass-subtle text-foreground/70 hover:text-foreground hover:bg-royal-700/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Dark green tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-royal-900/30 to-royal-800/10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Title - smooth appear on hover */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-foreground font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-accent rounded-full" />
                </div>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-royal-500/0 group-hover:border-royal-500/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
