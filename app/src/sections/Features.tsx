import { useEffect, useRef, useState } from 'react';
import { Truck, RefreshCw, Shield, Headphones, Lock, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on all orders over £50',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Shop with confidence - easy returns',
  },
  {
    icon: Shield,
    title: '3-Year Warranty',
    description: 'Every product built to last',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Friendly help when you need it',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your data is always protected',
  },
  {
    icon: Gift,
    title: 'Gift Vouchers',
    description: 'Share independence with loved ones',
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#f9f5f0]">
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
            Why Choose Us
          </span>
          <h2
            className={`section-title transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            The Rise{' '}
            <span style={{ color: '#d4a373' }}>Difference</span>
          </h2>
          <p
            className={`text-gray-600 mt-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Every product is designed with purpose, crafted with care, and backed
            by our commitment to your independence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#d4a373]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4a373] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#d4a373] group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3
                  className="text-xl text-gray-900 mb-2"
                  style={{ fontFamily: 'Bodoni Moda, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
