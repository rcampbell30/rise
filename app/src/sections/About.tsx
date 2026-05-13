import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function About() {
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

  const features = [
    'Ergonomic Design Principles',
    'Premium Quality Materials',
    'User-Centered Development',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-lifestyle.jpg"
                alt="Elderly couple enjoying independent living"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Decorative frame */}
            <div
              className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d4a373] rounded-3xl -z-10 transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            />

            {/* Stats Card */}
            <div
              className={`absolute -bottom-8 -left-4 lg:left-8 bg-white rounded-2xl shadow-xl p-6 transition-all duration-700 delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#d4a373]/10 flex items-center justify-center">
                  <span
                    className="text-2xl text-[#d4a373]"
                    style={{ fontFamily: 'Bodoni Moda, serif' }}
                  >
                    10K+
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Happy Customers</p>
                  <p className="text-sm text-gray-500">Across the UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-subtitle mb-4 block">About Us</span>
            </div>

            {/* Title */}
            <h2
              className={`section-title mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Crafting Comfort,
              <br />
              <span style={{ color: '#d4a373' }}>Restoring Confidence</span>
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 mb-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-gray-600 leading-relaxed">
                At Rise, we believe that mobility solutions should enhance your
                life, not define it. Our products blend innovative engineering
                with elegant design to provide the support you need while
                preserving the dignity you deserve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand the emotional journey of adapting to changing
                mobility needs. That&apos;s why we&apos;ve created solutions that look
                beautiful in your home and work seamlessly with your existing
                furniture — no medical equipment stigma, no compromises.
              </p>
            </div>

            {/* Features List */}
            <div
              className={`space-y-4 mb-10 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#d4a373]/10 flex items-center justify-center group-hover:bg-[#d4a373]/20 transition-colors">
                    <Check className="w-4 h-4 text-[#d4a373]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#d4a373] font-medium hover:gap-4 transition-all group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
