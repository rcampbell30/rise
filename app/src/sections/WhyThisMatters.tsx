import { ExternalLink, ShieldCheck, UsersRound, Home } from 'lucide-react';

const stats = [
  {
    icon: UsersRound,
    value: '11 million',
    label: 'people in England are aged 65+',
  },
  {
    icon: Home,
    value: '22 million',
    label: 'people in England are aged 50+',
  },
  {
    icon: ShieldCheck,
    value: 'Falls risk',
    label: 'is one of the biggest threats to independence later in life',
  },
];

export default function WhyThisMatters() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-subtitle mb-4 block">Why This Matters</span>
          <h2 className="section-title mb-6">
            Small Products,
            <br />
            <span style={{ color: '#d4a373' }}>Real Independence Decisions</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Small mobility aids can make everyday movements easier, reduce hesitation around standing or moving, and help people feel more confident at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.value} className="bg-[#f9f5f0] rounded-3xl p-8 shadow-sm border border-[#eadfd5]">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-7 h-7 text-[#d4a373]" />
                </div>
                <p className="text-4xl text-gray-900 mb-3" style={{ fontFamily: 'Bodoni Moda, serif' }}>{stat.value}</p>
                <p className="text-gray-600 leading-relaxed">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-[#eadfd5] bg-white p-6 md:p-8 text-center shadow-sm">
          <p className="text-gray-600 leading-relaxed mb-5">
            Rise does not claim that a cushion or home aid prevents falls. The aim is to help families compare products carefully, ask better questions, and choose support that may suit the person, the chair, and the home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="https://ageing-better.org.uk/our-ageing-population-state-ageing-2025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#bc6c25] hover:underline">
              Centre for Ageing Better
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.kingsfund.org.uk/insight-and-analysis/reports/system-wide-costs-falls-older-people-torbay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#bc6c25] hover:underline">
              The King&apos;s Fund falls report
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
