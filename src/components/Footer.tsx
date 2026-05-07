import * as React from 'react';
import { Globe, Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="logo text-2xl font-display font-bold">
              TRAVEL<span className="text-gold">PLANNER</span>
            </div>
            <p className="text-slate text-sm leading-relaxed max-w-xs">
              Direct admission partnerships with 500+ Ivy League and Russell Group universities worldwide. Secure your global future today.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest font-bold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li><a href="/universities" className="hover:text-white transition-colors">Find Universities</a></li>
              <li><a href="/destinations" className="hover:text-white transition-colors">Explore Countries</a></li>
              <li><a href="/scholarships" className="hover:text-white transition-colors">Scholarship Finder</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Latest Articles</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest font-bold text-gold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Visa Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admission Assistance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accommodation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest font-bold text-gold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>hello@travelplanner.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span>123 Global Avenue, Toronto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stat Bar */}
        <div className="border-t border-white/10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <div className="text-3xl font-display font-bold text-gold">12,400+</div>
            <div className="text-[11px] uppercase tracking-widest text-slate font-bold">Students Placed</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-display font-bold text-gold">48</div>
            <div className="text-[11px] uppercase tracking-widest text-slate font-bold">Partner Countries</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-display font-bold text-gold">$18M</div>
            <div className="text-[11px] uppercase tracking-widest text-slate font-bold">Scholarships Secured</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-display font-bold text-gold">98.2%</div>
            <div className="text-[11px] uppercase tracking-widest text-slate font-bold">Visa Success Rate</div>
          </div>
        </div>
      </div>
      <div className="bg-navy-dark py-6 border-t border-white/5 text-center px-4">
        <p className="text-[11px] uppercase tracking-[3px] text-white/20">© 2024 Travelplanner. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
