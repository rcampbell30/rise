import { Bath, Footprints, Bed, Utensils } from 'lucide-react';

const nextGuides = [
  { icon: Bath, title: 'Bathroom safety' },
  { icon: Footprints, title: 'Walking aids' },
  { icon: Bed, title: 'Bedroom support' },
  { icon: Utensils, title: 'Daily living products' },
];

export default function ComingNext() {
  return (
    <section className="py-20 lg:py-24 bg-[#f9f5f0]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-subtitle mb-4 block">Coming Next</span>
          <h2 className="section-title mb-6">
            More Practical
            <br />
            <span style={{ color: '#d4a373' }}>Home Independence Guides</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Rise will expand into practical guides for the parts of the home where independence matters most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nextGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.title} className="bg-white rounded-2xl p-6 text-center border border-[#eadfd5] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#d4a373]" />
                </div>
                <h3 className="text-lg text-gray-900" style={{ fontFamily: 'Bodoni Moda, serif' }}>{guide.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
