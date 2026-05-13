import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { products } from '@/data';
import type { Product } from '@/types';

export default function Shop() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const { addToCart } = useCart();

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

  const handleAddToCart = (product: Product) => {
    const selectedColor = selectedColors[product.id] || product.colors[0];
    addToCart(product, 1, selectedColor);
    setAddedProducts((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

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
    <section
      id="shop"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-subtitle mb-4 block transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Featured Collection
          </span>
          <h2
            className={`section-title transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Products That{' '}
            <span style={{ color: '#d4a373' }}>Transform</span>
            <br />Your Day
          </h2>
          <p
            className={`text-gray-600 mt-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Discover our range of elegant mobility solutions designed to enhance
            your independence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-[#f9f5f0] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f5ebe0] to-[#e9d5c5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-[#bc6c25] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Save £{product.originalPrice - product.price}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Price */}
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-xl text-gray-900"
                    style={{ fontFamily: 'Bodoni Moda, serif' }}
                  >
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-medium text-[#d4a373]">
                      £{product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">
                        £{product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Color Selection */}
                {product.colors.length > 1 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Color</p>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => selectColor(product.id, color)}
                          className={`w-6 h-6 rounded-full ${getColorClass(
                            color
                          )} border-2 transition-all ${
                            (selectedColors[product.id] || product.colors[0]) ===
                            color
                              ? 'border-gray-900 scale-110'
                              : 'border-transparent hover:scale-105'
                          }`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-[#d4a373]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full flex items-center justify-center gap-2 transition-all duration-300 ${
                    addedProducts.has(product.id)
                      ? 'bg-green-500 hover:bg-green-500'
                      : 'btn-primary'
                  }`}
                  disabled={addedProducts.has(product.id)}
                >
                  {addedProducts.has(product.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="inline-flex items-center gap-2 text-[#d4a373] font-medium hover:gap-4 transition-all group">
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
