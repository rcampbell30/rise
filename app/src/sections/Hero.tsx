import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f9f5f0] via-[#fdf8f3] to-[#f5ebe0]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#d4a373]/10" />
        <div className="absolute bottom-40 left-20 w-20 h-20 rounded-full bg-[#dda15e]/15" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#bc6c25]/10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
          <div className="max-w-xl">
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-[#d4a373] font-semibold mb-6">Rise Mobility Guide</span>
            <h1 className="font-readable-heading">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.05] mb-2">Independence</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.05] mb-2">Without</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#d4a373]">Compromise</span>
            </h1>
            <p className="text-lg text-gray-600 mt-8 mb-10 leading-relaxed max-w-md">Compare practical mobility aids that support standing, sitting, and everyday movement at home without making the decision feel clinical, rushed, or patronising.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary flex items-center gap-2 text-base">
                <a href="#shop">Compare products <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <a href="#faq" className="btn-secondary flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Read safety notes
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12 text-sm text-gray-600">
              <span>Buying guidance</span>
              <span>Suitability first</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-radial from-[#d4a373]/20 via-transparent to-transparent blur-3xl scale-150" />
              <img src="/product-hero.png" alt="Seat lift cushion example" className="relative w-full h-auto drop-shadow-2xl" />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Guide price from</p>
                <p className="text-2xl font-semibold text-gray-900">£89</p>
              </div>
              <div className="absolute top-10 -right-4 bg-[#d4a373] text-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium">Affiliate disclosed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
