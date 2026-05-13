import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToShop = () => {
    const element = document.querySelector('#shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f9f5f0] via-[#fdf8f3] to-[#f5ebe0]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Organic flowing lines */}
        <svg
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path
            d="M400 100C550 100 650 250 650 400C650 550 550 700 400 700C250 700 150 550 150 400C150 250 250 100 400 100Z"
            stroke="#d4a373"
            strokeWidth="1"
            fill="none"
            className="animate-pulse-soft"
          />
          <path
            d="M400 200C500 200 570 300 570 400C570 500 500 600 400 600C300 600 230 500 230 400C230 300 300 200 400 200Z"
            stroke="#dda15e"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Floating shapes */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#d4a373]/10 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-40 left-20 w-20 h-20 rounded-full bg-[#dda15e]/15 animate-float-slow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#bc6c25]/10 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-[#d4a373] font-medium mb-6">
                Welcome to Rise
              </span>
            </div>

            {/* Title */}
            <h1
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-2"
                style={{ fontFamily: 'Bodoni Moda, serif' }}
              >
                Independence
              </span>
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-2"
                style={{ fontFamily: 'Bodoni Moda, serif' }}
              >
                Without
              </span>
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
                style={{ fontFamily: 'Bodoni Moda, serif', color: '#d4a373' }}
              >
                Compromise
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg text-gray-600 mt-8 mb-10 leading-relaxed max-w-md transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Elegant mobility solutions designed to enhance your daily life with
              dignity and grace. Rise effortlessly from any chair — no batteries,
              no installation, no medical stigma.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <Button
                onClick={scrollToShop}
                className="btn-primary flex items-center gap-2 text-base"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Button>
              <button className="btn-secondary flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Our Story
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className={`flex items-center gap-8 mt-12 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#d4a373]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#d4a373]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">30-Day Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#d4a373]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#d4a373]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">3-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* Product Stage */}
            <div className="relative w-full max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-[#d4a373]/20 via-transparent to-transparent blur-3xl scale-150" />

              {/* Product Image */}
              <div className="relative animate-float">
                <img
                  src="/product-hero.png"
                  alt="Rise Seat Lift Cushion"
                  className="w-full h-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.15))',
                  }}
                />
              </div>

              {/* Floating price tag */}
              <div
                className={`absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <p className="text-sm text-gray-500 mb-1">Starting from</p>
                <p className="text-2xl font-serif text-gray-900">
                  £<span style={{ fontFamily: 'Bodoni Moda, serif' }}>89</span>
                </p>
              </div>

              {/* Floating feature badge */}
              <div
                className={`absolute top-10 -right-4 bg-[#d4a373] text-white rounded-full px-4 py-2 shadow-lg transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <span className="text-sm font-medium">No Batteries Needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
