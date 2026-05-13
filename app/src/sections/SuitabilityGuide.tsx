import { Check, AlertTriangle } from 'lucide-react';

const usefulFor = [
  'People who find standing from chairs harder than before',
  'Adult children comparing simple support options for parents',
  'People who want discreet aids that blend into the home',
  'Anyone comparing lower-cost options before larger furniture changes',
];

const notBestFor = [
  'People with serious falls risk without professional guidance',
  'Chairs that are unstable, very soft, very low, or badly shaped',
  'Anyone needing powered lift support',
  'Anyone recovering from surgery without professional advice',
];

export default function SuitabilityGuide() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-subtitle mb-4 block">Suitability Guide</span>
          <h2 className="section-title mb-6">
            Best For /
            <br />
            <span style={{ color: '#d4a373' }}>Not Best For</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            A trustworthy guide should say when a product may help and when it may not be the right first step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-[#f9f5f0] p-8 border border-[#eadfd5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Check className="w-6 h-6 text-[#d4a373]" />
              </div>
              <h3 className="text-2xl text-gray-900" style={{ fontFamily: 'Bodoni Moda, serif' }}>May be useful for</h3>
            </div>
            <ul className="space-y-4">
              {usefulFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                  <Check className="w-5 h-5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-[#eadfd5] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#f9f5f0] flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-6 h-6 text-[#bc6c25]" />
              </div>
              <h3 className="text-2xl text-gray-900" style={{ fontFamily: 'Bodoni Moda, serif' }}>May not be suitable for</h3>
            </div>
            <ul className="space-y-4">
              {notBestFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                  <AlertTriangle className="w-5 h-5 text-[#bc6c25] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
