import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'products': return <Products setCartCount={setCartCount} />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxury-black-950 text-stone-300 font-sans selection:bg-luxury-gold/30">
      {/* Navigation matching your layout structure */}
      <nav className="bg-luxury-black-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-luxury-black-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Left side: Branding/Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-serif text-luxury-black-950 font-bold text-xs shadow-lg">T</div>
            <span className="text-xl font-bold tracking-wider text-luxury-gold uppercase">TAALAKI</span>
          </div>

          {/* Middle: English Links */}
          <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-widest">
            <button onClick={() => setCurrentPage('home')} className={`pb-1 border-b-2 transition-all ${currentPage === 'home' ? 'border-luxury-gold text-luxury-gold' : 'border-transparent text-stone-400 hover:text-white'}`}>Home</button>
            <button onClick={() => setCurrentPage('products')} className={`pb-1 border-b-2 transition-all ${currentPage === 'products' ? 'border-luxury-gold text-luxury-gold' : 'border-transparent text-stone-400 hover:text-white'}`}>Products</button>
            <button onClick={() => setCurrentPage('about')} className={`pb-1 border-b-2 transition-all ${currentPage === 'about' ? 'border-luxury-gold text-luxury-gold' : 'border-transparent text-stone-400 hover:text-white'}`}>About Us</button>
            <button onClick={() => setCurrentPage('contact')} className={`pb-1 border-b-2 transition-all ${currentPage === 'contact' ? 'border-luxury-gold text-luxury-gold' : 'border-transparent text-stone-400 hover:text-white'}`}>Contact Us</button>
          </div>

          {/* Right side: Interactive System Utilities */}
          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={() => setCurrentPage('products')}>
              <span className="text-xl">👜</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-luxury-gold text-luxury-black-950 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="md:hidden text-xl text-luxury-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-black-900 border-t border-luxury-black-800 px-6 py-4 space-y-3 flex flex-col text-xs uppercase tracking-widest">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="text-left py-2 text-stone-300 hover:text-luxury-gold border-b border-luxury-black-800">Home</button>
            <button onClick={() => { setCurrentPage('products'); setIsMenuOpen(false); }} className="text-left py-2 text-stone-300 hover:text-luxury-gold border-b border-luxury-black-800">Products</button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="text-left py-2 text-stone-300 hover:text-luxury-gold border-b border-luxury-black-800">Categories</button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="text-left py-2 text-stone-300 hover:text-luxury-gold">Offers</button>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-luxury-black-950 text-stone-600 py-10 text-center text-[10px] tracking-widest uppercase border-t border-luxury-black-900">
        <p>© 2026 TAALAKI PRESTIGE SKIN LABS. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;