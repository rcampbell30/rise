import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#d4a373] via-[#dda15e] to-[#bc6c25] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              Ready to Compare<br />Practical Support?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto lg:mx-0">Start with the seat lift cushion guide, then check retailer details carefully before buying. Rise helps you compare; retailers handle final pricing, delivery, warranties, and returns.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-white text-[#d4a373] hover:bg-gray-100 px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <a href="#shop">View guide <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <a href="#faq" className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10">
                <ShieldCheck className="w-4 h-4" /> Safety notes
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-3xl scale-150 rounded-full" />
              <img src="/product-hero.png" alt="Seat lift cushion example" className="relative w-full max-w-md drop-shadow-2xl" />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="text-sm text-gray-500">Buying guide</p>
                <p className="text-2xl font-serif text-gray-900">Suitability First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
