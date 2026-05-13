import { CartProvider } from '@/context/CartContext';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Shop from '@/sections/Shop';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';
import CartDrawer from '@/sections/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Features />
          <Shop />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
