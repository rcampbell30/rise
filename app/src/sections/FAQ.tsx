import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-subtitle mb-4 block">FAQs</span>
            <h2 className="section-title mb-6">Frequently Asked<br /><span style={{ color: '#d4a373' }}>Questions</span></h2>
            <p className="text-gray-600 leading-relaxed max-w-md">Common questions about seat lift cushions, affiliate links, and checking suitability before buying.</p>
            <div className="mt-8">
              <a href="#affiliate-disclosure" className="inline-flex items-center gap-2 text-[#d4a373] font-medium hover:underline">
                Read the disclosure
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-lg text-gray-900 pr-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#d4a373] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
