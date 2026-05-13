import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Shop from '@/sections/Shop';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Shop />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
