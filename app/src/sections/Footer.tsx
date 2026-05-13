import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why Rise', href: '#why-rise' },
    { name: 'Products', href: '#shop' },
  ];

  const supportLinks = [
    { name: 'FAQs', href: '#faq' },
    { name: 'Affiliate Disclosure', href: '#affiliate-disclosure' },
    { name: 'Safety Notes', href: '#faq' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>Rise</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Dignified mobility buying guides for people who want practical support at home without being spoken to like they are helpless.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a373] transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-[#d4a373] transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Guidance</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-[#d4a373] transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div id="affiliate-disclosure">
            <h4 className="text-lg font-medium mb-6">Disclosure</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">As an Amazon Associate I earn from qualifying purchases. Product buttons may use paid affiliate links at no extra cost to you.</p>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">Rise provides general buying information only, not medical advice. Speak to a qualified professional if a product may affect falls risk, pain, recovery, or a medical condition.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-[#d4a373]" />
              <span>Contact page coming soon</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Rise Mobility. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#d4a373] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#d4a373] transition-colors">Privacy</a>
              <a href="#affiliate-disclosure" className="hover:text-[#d4a373] transition-colors">Affiliate Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
