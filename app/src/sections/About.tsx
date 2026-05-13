import { Check, ArrowRight } from 'lucide-react';

export default function About() {
  const features = [
    'Dignified language and independence-first positioning',
    'Practical product checks before retailer clicks',
    'Clear affiliate disclosure with no fake store claims',
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/about-lifestyle.jpg" alt="Couple at home comparing independence products" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d4a373] rounded-3xl -z-10" />
            <div className="absolute -bottom-8 -left-4 lg:left-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#d4a373]/10 flex items-center justify-center">
                  <span className="text-2xl text-[#d4a373]" style={{ fontFamily: 'Bodoni Moda, serif' }}>3</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Core Checks</p>
                  <p className="text-sm text-gray-500">Fit, safety, dignity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="section-subtitle mb-4 block">About Rise</span>
            <h2 className="section-title mb-6">Practical Support,<br /><span style={{ color: '#d4a373' }}>Without the Stigma</span></h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">Rise helps older adults, carers, and families compare mobility products that support everyday independence at home. The aim is simple: useful products, clear buying checks, and language that does not make people feel old before their time.</p>
              <p className="text-gray-600 leading-relaxed">Rise is a guide and affiliate site, so final prices, stock, warranties, delivery, and returns are handled by the retailer you choose.</p>
            </div>
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#d4a373]/10 flex items-center justify-center group-hover:bg-[#d4a373]/20 transition-colors">
                    <Check className="w-4 h-4 text-[#d4a373]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <a href="#shop" className="inline-flex items-center gap-2 text-[#d4a373] font-medium hover:gap-4 transition-all group">
              View the first product guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
