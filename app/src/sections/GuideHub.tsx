import { ArrowRight, Bath, Bed, Footprints, HandHeart } from 'lucide-react';

const guides = [
  {
    icon: Bath,
    title: 'Bathroom safety',
    summary: 'Small changes in the bathroom can make daily routines feel steadier and less stressful. Start with grip, stepping, sitting, and reaching before choosing products.',
    checks: ['Non-slip mats', 'Grab rails', 'Shower stools', 'Raised toilet seats'],
    amazonUrl: 'https://www.amazon.co.uk/s?k=bathroom+safety+aids+mobility',
  },
  {
    icon: Footprints,
    title: 'Walking aids',
    summary: 'Walking aids should match the person, the floor surface, and the reason support is needed. Comfort, height, grip, and stability matter more than looks alone.',
    checks: ['Walking sticks', 'Rollators', 'Ferrules', 'Handle comfort'],
    amazonUrl: 'https://www.amazon.co.uk/s?k=walking+aids+for+adults',
  },
  {
    icon: Bed,
    title: 'Bedroom support',
    summary: 'Bedroom aids can help with getting in and out of bed, sitting up, reaching essentials, and feeling more confident during night-time movement.',
    checks: ['Bed rails', 'Bed steps', 'Over-bed tables', 'Motion lights'],
    amazonUrl: 'https://www.amazon.co.uk/s?k=bedroom+mobility+aids',
  },
  {
    icon: HandHeart,
    title: 'Daily living products',
    summary: 'The best daily living aids often solve tiny frustrations: opening jars, reaching shelves, holding cutlery, or carrying items safely around the home.',
    checks: ['Reachers', 'Jar openers', 'Adaptive cutlery', 'Carrying aids'],
    amazonUrl: 'https://www.amazon.co.uk/s?k=daily+living+aids+mobility',
  },
];

export default function GuideHub() {
  return (
    <section id="guides" className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-subtitle mb-4 block">Practical Guides</span>
          <h2 className="section-title mb-6">
            More Ways to Support
            <br />
            <span style={{ color: '#d4a373' }}>Independence at Home</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            These starter guides turn Rise from a single-product page into a broader home-independence resource. The links currently open plain Amazon UK searches until the domain and affiliate account are ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <article key={guide.title} className="rounded-3xl border border-[#eadfd5] bg-[#f9f5f0] p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#d4a373]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{guide.summary}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-7">
                  {guide.checks.map((check) => (
                    <div key={check} className="rounded-xl bg-white px-4 py-3 text-sm text-gray-600 border border-[#eadfd5]">
                      {check}
                    </div>
                  ))}
                </div>

                <a
                  href={guide.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d4a373] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#bc6c25]"
                  aria-label={`View temporary Amazon UK search for ${guide.title}`}
                >
                  View current Amazon options
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
