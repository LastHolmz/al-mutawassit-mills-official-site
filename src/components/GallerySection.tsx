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
  {
    id: 1,
    title: 'سفن شحن وبواخر توريد',
    category: 'shipping',
    image: galleryShipping,
  },
  {
    id: 2,
    title: 'صوامع تخزين الحبوب',
    category: 'equipment',
    image: gallerySilos,
  },
  {
    id: 3,
    title: 'خط إنتاج الأعلاف',
    category: 'products',
    image: galleryFeedLine,
  },
  {
    id: 4,
    title: 'معدات الطحن',
    category: 'milling',
    image: galleryMilling,
  },
  {
    id: 5,
    title: 'مستودعات وتجهيزات',
    category: 'equipment',
    image: galleryWarehouse,
  },
  {
    id: 6,
    title: 'تغليف وتعبئة',
    category: 'products',
    image: galleryPackaging,
  },
  {
    id: 7,
    title: 'حاويات الشحن',
    category: 'shipping',
    image: galleryContainers,
  },
  {
    id: 8,
    title: 'منشأة صناعية',
    category: 'equipment',
    image: galleryFacility,
  },
  {
    id: 9,
    title: 'حبوب ومواد خام',
    category: 'products',
    image: galleryGrain,
  },
  {
    id: 10,
    title: 'آلات الطحن الصناعي',
    category: 'milling',
    image: galleryRollers,
  },
  {
    id: 11,
    title: 'شحن وتوزيع',
    category: 'shipping',
    image: galleryTrucks,
  },
  {
    id: 12,
    title: 'خطوط الإنتاج',
    category: 'milling',
    image: galleryConveyor,
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm mb-4">
            معرض الصور
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لمحة عن أعمالنا ومنشآتنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نستعرض جوانب من عملياتنا ومرافقنا في مجال صناعة الأعلاف والمطاحن
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-secondary border border-border'
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
              className="group relative aspect-square rounded-lg overflow-hidden card-premium animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 right-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-primary-foreground font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
