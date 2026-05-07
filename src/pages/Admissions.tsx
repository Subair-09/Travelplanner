import * as React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, FileText, Globe, Star, CheckCircle2, LayoutList, GraduationCap, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { SCHOLARSHIPS } from '../mockData';

export function Admissions() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy text-sm font-bold tracking-widest uppercase"
            >
              <ClipboardCheck size={16} /> Admission Lifecycle
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-navy font-display">Your Fast Track <br /> To <span className="text-gold italic">Global Education</span></h1>
            <p className="text-xl text-gray-500 leading-relaxed italic">
              Navigating global admissions can be daunting. We’ve streamlined the process to make it transparent, predictable, and successful.
            </p>
            <div className="flex gap-4">
              <a href="#consultation" className="px-8 py-4 rounded-xl gold-gradient text-white font-bold hover:scale-105 transition-transform">
                Start My Application
              </a>
              <button className="px-8 py-4 rounded-xl border border-gray-100 bg-white text-navy font-bold hover:bg-gray-50 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="h-48 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" /></div>
                 <div className="h-64 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" /></div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="h-64 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" /></div>
                 <div className="h-48 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" /></div>
               </div>
             </div>
          </div>
        </div>

        {/* Process Steps */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy font-display mb-4 italic">Our 4-Step Success Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From shortlisting to departure, we are with you every step of the way.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep number="01" title="Discovery" desc="Detailed profile analysis and university shortlisting based on goals." />
            <ProcessStep number="02" title="Preparation" desc="Help with SOPs, LORs, and English proficiency coaching (IELTS/TOEFL)." />
            <ProcessStep number="03" title="Application" desc="Meticulous filing of applications to maximize admission chances." />
            <ProcessStep number="04" title="Visa & Departure" desc="Expert visa documentation, interview prep, and pre-departure briefings." />
          </div>
        </section>

        {/* Scholarships */}
        <section className="bg-cream rounded-[4rem] p-12 md:p-20 mb-32 border border-gold/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} /> Merit Based Funding
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy font-display mb-8">Scholarships & <br /> Financial Support</h2>
            <p className="text-xl text-gray-500 mb-12 italic">We help you unlock funded opportunities to make your dream education affordable.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {SCHOLARSHIPS.map((scholar, i) => (
                <motion.div 
                  key={scholar.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-[2rem] border border-gold/10 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <GraduationCap size={24} />
                    </div>
                    <span className="px-3 py-1 bg-navy text-white text-[10px] font-bold uppercase rounded-full">{scholar.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2 font-display">{scholar.title}</h3>
                  <p className="text-gold font-bold text-sm mb-4 italic truncate">{scholar.provider}</p>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{scholar.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Value</p>
                      <p className="font-bold text-navy">{scholar.amount}</p>
                    </div>
                    <button className="text-navy font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Check Eligibility <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation" className="max-w-4xl mx-auto bg-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-4xl font-bold font-display italic mb-4">Book Your Free Consultation</h2>
            <p className="text-white/60">Our experts are ready to map out your study abroad journey.</p>
          </div>
          
          <form className="relative z-10 grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
            <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
            <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
            <select className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold appearance-none">
              <option className="text-navy">Select Destination</option>
              <option className="text-navy">Canada</option>
              <option className="text-navy">Germany</option>
              <option className="text-navy">UK</option>
              <option className="text-navy">USA</option>
            </select>
            <div className="md:col-span-2">
              <button className="w-full py-5 rounded-xl gold-gradient text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                Book My Session <MessageSquare size={20} />
              </button>
            </div>
          </form>
          
          <div className="relative z-10 mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs uppercase font-bold tracking-widest">Certified Partners</span>
            <div className="flex gap-4">
               {/* Mock Partner Logos */}
               <div className="w-10 h-10 rounded bg-white/20" />
               <div className="w-10 h-10 rounded bg-white/20" />
               <div className="w-10 h-10 rounded bg-white/20" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="space-y-6">
       <div className="text-6xl font-black text-navy/5 font-display mb-[-30px] ml-4">{number}</div>
       <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm relative z-10 hover:shadow-xl transition-all h-full">
         <h3 className="text-2xl font-bold text-navy font-display italic mb-4">{title}</h3>
         <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
       </div>
    </div>
  );
}
