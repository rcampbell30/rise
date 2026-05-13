import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data';

export default function Shop() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const selectColor = (productId: string, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      Sand: 'bg-[#e9d5c5]',
      Sage: 'bg-[#9caf88]',
      Slate: 'bg-[#6b7280]',
    };
    return colorMap[color] || 'bg-gray-300';
  };

  return (
    <section id="shop" ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`section-subtitle mb-4 block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Product Guide
          </span>
          <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            Practical Aids That <span style={{ color: '#d4a373' }}>Support</span><br />Daily Independence
          </h2>
          <p className={`text-gray-600 mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Compare seat lift cushion options with dignity, suitability, and everyday home use in mind. Product buttons may open paid retailer links.
          </p>
          <p className="mt-5 rounded-2xl bg-[#f9f5f0] px-5 py-4 text-sm text-gray-600 border border-[#eadfd5]">
            Guide prices are examples only. Always check the retailer page for current price, delivery, return terms, and seller details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className={`group bg-[#f9f5f0] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f5ebe0] to-[#e9d5c5]">
                <img src={product.image} alt={`${product.name} example for comparing home mobility support`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#bc6c25] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Compare options
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold leading-tight text-gray-900">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Guide price</p>
                    <p className="text-lg font-medium text-[#d4a373]">£{product.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>

                {product.colors.length > 1 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Style examples</p>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => selectColor(product.id, color)}
                          className={`w-6 h-6 rounded-full ${getColorClass(color)} border-2 transition-all ${(selectedColors[product.id] || product.colors[0]) === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-105'}`}
                          aria-label={`Select ${color} style example for ${product.name}`}
                          type="button"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <ul className="space-y-1 mb-5">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#d4a373]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mb-5 rounded-xl bg-white px-4 py-3 text-xs text-gray-600 border border-[#eadfd5]">
                  Best checked for: chair fit, weight limit, and return policy.
                </p>

                <Button asChild className="w-full flex items-center justify-center gap-2 transition-all duration-300 btn-primary">
                  <a href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" aria-label={`Check ${product.name} price and seller details on ${product.retailer}`}>
                    Check price on {product.retailer}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <p className="mt-3 text-center text-xs text-gray-500">Paid retailer link. Prices and availability may change.</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-sm text-gray-500">More Rise guides are planned for bathroom safety, walking aids, bedroom support, and daily living products.</p>
        </div>
      </div>
    </section>
  );
}
