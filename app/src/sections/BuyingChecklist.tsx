import { CheckCircle2 } from 'lucide-react';

const checklist = [
  'Chair compatibility',
  'Weight capacity',
  'Seat height',
  'Non-slip base',
  'Washable cover',
  'Return policy',
  'Reviews from similar users',
  'Professional advice if there is pain, recovery, frailty, or falls risk',
];

export default function BuyingChecklist() {
  return (
    <section className="py-24 lg:py-32 bg-[#f9f5f0]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-subtitle mb-4 block">Buying Checklist</span>
          <h2 className="section-title mb-6">
            Seat Lift Cushion
            <br />
            <span style={{ color: '#d4a373' }}>Checks Before Buying</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Do not buy only because a cushion looks comfortable. Check whether it suits the person, the chair, and the reason they need help standing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {checklist.map((item) => (
            <div key={item} className="bg-white rounded-2xl p-6 shadow-sm border border-[#eadfd5] hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#d4a373]/10 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6 text-[#d4a373]" />
              </div>
              <h3 className="text-lg text-gray-900 leading-snug" style={{ fontFamily: 'Bodoni Moda, serif' }}>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
