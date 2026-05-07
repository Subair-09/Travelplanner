import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe, GraduationCap, MapPin, BookOpen, User, Search, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { name: 'Universities', href: '/universities', icon: GraduationCap },
  { name: 'Destinations', href: '/destinations', icon: MapPin },
  { name: 'Programs', href: '/programs', icon: BookOpen },
  { name: 'Admissions', href: '/admissions', icon: Globe },
  { name: 'Blog', href: '/blog', icon: Search },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-navy-dark/95 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold tracking-tight text-white">
            TRAVEL<span className="text-gold">PLANNER</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-[12px] uppercase tracking-[2px] font-bold text-white/80 hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="/admissions" 
            className="btn-gold !py-2 !px-8 !text-[12px]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-lg",
            scrolled ? "text-navy" : "text-navy md:text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-lg font-medium text-navy hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} className="text-gold" />
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href="/admissions"
                  className="w-full text-center py-4 rounded-sm btn-gold !text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
