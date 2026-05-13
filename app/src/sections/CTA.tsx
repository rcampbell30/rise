import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
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

  const scrollToShop = () => {
    const element = document.querySelector('#shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-[#d4a373] via-[#dda15e] to-[#bc6c25] overflow-hidden relative"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white/5 animate-float-slow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl text-white mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ fontFamily: 'Bodoni Moda, serif' }}
            >
              Ready to Transform
              <br />
              Your Daily Life?
            </h2>
            <p
              className={`text-white/90 text-lg mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Join thousands who have discovered the freedom of independent
              living with Rise. Start your 30-day trial today.
            </p>
            <div
              className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Button
                onClick={scrollToShop}
                className="bg-white text-[#d4a373] hover:bg-gray-100 px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="tel:+441234567890"
                className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/20 blur-3xl scale-150 rounded-full" />
              
              {/* Product */}
              <img
                src="/product-hero.png"
                alt="Rise Seat Lift Cushion"
                className="relative w-full max-w-md animate-float drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.2))',
                }}
              />

              {/* Price Tag */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="text-sm text-gray-500">30-Day Trial</p>
                <p className="text-2xl font-serif text-gray-900">
                  Risk-Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
