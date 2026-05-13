import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import WhyThisMatters from '@/sections/WhyThisMatters';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Shop from '@/sections/Shop';
import BuyingChecklist from '@/sections/BuyingChecklist';
import SuitabilityGuide from '@/sections/SuitabilityGuide';
import FAQ from '@/sections/FAQ';
import ComingNext from '@/sections/ComingNext';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyThisMatters />
        <About />
        <Features />
        <Shop />
        <BuyingChecklist />
        <SuitabilityGuide />
        <FAQ />
        <ComingNext />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
