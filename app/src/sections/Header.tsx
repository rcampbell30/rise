export default function Header() {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why Rise', href: '#why-rise' },
    { name: 'Products', href: '#shop' },
    { name: 'Guides', href: '#guides' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm py-3">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-serif text-gray-900"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            Rise
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#d4a373] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#guides"
            className="inline-flex items-center justify-center rounded-full bg-[#d4a373] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#bc6c25]"
          >
            View guides
          </a>
        </div>
      </div>
    </header>
  );
}
