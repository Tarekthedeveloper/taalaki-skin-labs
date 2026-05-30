import React, { useState } from 'react';
import imgObsidian from '../assets/prod-obsidian.jpg';
import imgGlaze from '../assets/prod-glaze.jpg';
import imgCream from '../assets/prod-cream.jpg';
import imgPowder from '../assets/prod-powder.jpg';
import imgPhyto from '../assets/prod-phyto.jpg';
import imgImperial from '../assets/prod-imperial.jpg';
import imgHydraluxe from '../assets/prod-hydraluxe.jpg';
import imgBalm from '../assets/prod-balm.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: '24K Gold Obsidian Concentrate',
    category: 'skincare',
    price: 85.00,
    size: '30ml',
    description: 'Cell-rejuvenating fluid infused with real colloidal gold and volcanic botanical extracts.',
    image: imgObsidian
  },
  {
    id: 2,
    name: 'Satin Velvet Luxury Lip Glaze',
    category: 'makeup',
    price: 32.00,
    size: '6.5ml',
    description: 'Ultra-pigmented satin lip lacquer delivering high-definition moisture and deep contour hold.',
    image: imgGlaze
  },
  {
    id: 3,
    name: 'Absolute Hydration Moisture Cream',
    category: 'skincare',
    price: 64.00,
    size: '50ml',
    description: 'Deep-lipid repair matrix built to lock moisture down into the dermis layers for up to 48 hours.',
    image: imgCream
  },
  {
    id: 4,
    name: 'Sovereign Luminous Pressed Powder',
    category: 'makeup',
    price: 48.00,
    size: '10g',
    description: 'Finely milled micro-particles that effortlessly airbrush away shine while maintaining skin luminosity.',
    image: imgPowder
  },
  {
    id: 5,
    name: 'Phyto-Luminous Restorative Oil',
    category: 'skincare',
    price: 92.00,
    size: '45ml',
    description: 'Cold-pressed botanical lipids synthesized to target redness and optimize nighttime skin equilibrium.',
    image: imgPhyto
  },
  {
    id: 6,
    name: 'Imperial Eye-Lift Bio-Serum',
    category: 'skincare',
    price: 110.00,
    size: '15ml',
    description: 'High-potency multi-peptide treatment designed to instantly smooth fine dynamic facial contours.',
    image: imgImperial
  },
  {
    id: 7,
    name: 'Hydra-Luxe Hydrating Complex',
    category: 'skincare',
    price: 72.00,
    size: '50ml',
    description: 'Lightweight cloud-gel moisturizer engineered for rapid skin assimilation and immediate pore refinement.',
    image: imgHydraluxe
  },
  {
    id: 8,
    name: 'Volcanic Mineral Sculpting Balm',
    category: 'makeup',
    price: 54.00,
    size: '15g',
    description: 'An ultra-blendable cream-to-powder structural balm designed to trace and elevate natural bone architecture.',
    image: imgBalm
  }
];

export default function Products({ setCartCount }) {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const next = [...prev, product];
      setCartCount(next.length);
      return next;
    });
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(prev => {
      const next = prev.filter((_, idx) => idx !== indexToRemove);
      setCartCount(next.length);
      return next;
    });
  };

  const cartSubtotal = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeUp text-left">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">The Apothecary Catalog</h2>
        <p className="text-luxury-gold text-xs uppercase tracking-widest">Filter dynamic collections with instant local invoice math.</p>
      </div>

      {/* Dynamic Filter Tabs */}
      <div className="flex justify-center space-x-4 mb-12 text-[10px] font-bold uppercase tracking-widest">
        {['all', 'skincare', 'makeup'].map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-6 py-2.5 rounded-lg border transition-all ${
              filter === c
                ? 'bg-luxury-gold text-luxury-black-950 border-transparent font-bold shadow-lg shadow-luxury-gold/10'
                : 'bg-luxury-black-900 text-stone-400 border-luxury-black-800 hover:border-luxury-gold/40'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Content Split Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Products Grid Layout */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-luxury-gold/20 transition-all group">
              <div>
                {/* Real Photo Visual Wrapper */}
                <div className="aspect-[4/3] w-full bg-luxury-black-950 relative overflow-hidden border-b border-luxury-black-800">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-400 bg-luxury-black-950/80 px-2 py-0.5 rounded backdrop-blur-sm border border-luxury-black-800">
                    {p.size}
                  </span>
                </div>

                <div className="p-6 pb-0">
                  <span className="text-[9px] uppercase text-luxury-gold tracking-widest block mb-1 font-bold">{p.category}</span>
                  <h3 className="text-white font-bold text-base tracking-wide group-hover:text-luxury-gold transition-colors">{p.name}</h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed mt-2 line-clamp-2">{p.description}</p>
                </div>
              </div>

              <div className="p-6 pt-4 mt-4 flex justify-between items-center border-t border-luxury-black-800 bg-luxury-black-950/20">
                <span className="font-serif text-stone-200 font-bold text-lg">${p.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(p)}
                  className="bg-luxury-black-800 text-luxury-gold border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-black-950 hover:border-transparent transition-all px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-md"
                >
                  Acquire Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Interactive Invoice System */}
        <div className="bg-luxury-black-900 border border-luxury-black-800 p-6 rounded-xl shadow-2xl sticky top-24">
          <h3 className="text-white font-bold text-lg border-b border-luxury-black-800 pb-3 mb-4 tracking-wide flex justify-between items-center">
            <span>Shopping Bag</span>
            <span className="bg-luxury-gold/10 text-luxury-gold font-mono text-xs px-2.5 py-0.5 rounded-full border border-luxury-gold/20">
              {cart.length}
            </span>
          </h3>

          {cart.length > 0 ? (
            <div className="space-y-4">
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs bg-luxury-black-950 p-2.5 rounded border border-luxury-black-800 group/item">
                    <div className="flex items-center space-x-3">
                      <img src={item.image} alt="" className="w-8 h-8 object-cover rounded border border-luxury-black-800" />
                      <div className="text-left">
                        <span className="text-stone-300 font-medium block truncate max-w-[120px]">{item.name}</span>
                        <span className="text-[9px] text-stone-500 font-mono">{item.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-luxury-gold font-mono font-bold">${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => handleRemoveFromCart(i)}
                        className="text-stone-600 hover:text-red-400 text-[10px] font-sans px-1 transition-colors"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-luxury-black-800 pt-4 text-[10px] uppercase tracking-widest space-y-2 text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-stone-200">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-white font-bold pt-2 border-t border-dashed border-luxury-black-700">
                  <span>Gross Invoice:</span>
                  <span className="text-luxury-gold font-mono">${cartSubtotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-luxury-gold text-luxury-black-950 text-[10px] uppercase tracking-widest font-bold py-3.5 rounded-lg shadow-lg hover:bg-white hover:scale-[1.01] transition-all">
                Secure Checkout
              </button>
            </div>
          ) : (
            <p className="text-stone-500 py-12 text-center text-xs font-light tracking-wide">
              Your selected reagent bundle is empty.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}