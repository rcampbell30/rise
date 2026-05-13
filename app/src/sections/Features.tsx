import { Shield, Search, Heart, BadgeCheck, Home, Gift } from 'lucide-react';

const features = [
  { icon: Search, title: 'Clear Buying Guides', description: 'Simple checks for size, chair fit, weight limit, and return terms' },
  { icon: Heart, title: 'Dignity First', description: 'Helpful products without patronising language' },
  { icon: Shield, title: 'Suitability Checks', description: 'Prompts to check whether a product is right before buying' },
  { icon: BadgeCheck, title: 'Affiliate Transparency', description: 'Paid links are disclosed before you leave Rise' },
  { icon: Home, title: 'Home Friendly', description: 'Products chosen with everyday living spaces in mind' },
  { icon: Gift, title: 'Family Buying Help', description: 'Useful for adult children, carers, and relatives comparing options' },
];

export default function Features() {
  return (
    <section id="why-rise" className="py-24 lg:py-32 bg-[#f9f5f0]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-subtitle mb-4 block">Why Choose Rise</span>
          <h2 className="section-title">Dignified <span style={{ color: '#d4a373' }}>Mobility</span><br />Buying Guidance</h2>
          <p className="text-gray-600 mt-4">Rise helps you compare independence products with clear buying checks and transparent retailer links.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-[#d4a373]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4a373] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#d4a373] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Bodoni Moda, serif' }}>{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
