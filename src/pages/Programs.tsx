import * as React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Zap, Briefcase, Clock, DollarSign, ArrowRight, Star } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { DegreeLevel } from '../types';

const PROGRAM_CATEGORIES = [
  { name: 'Undergraduate', icon: GraduationCap, count: 850, desc: 'Bachelor degrees across all major disciplines.' },
  { name: 'Postgraduate', icon: BookOpen, count: 1200, desc: 'Master and Specialist programs for career advancement.' },
  { name: 'MBA', icon: Briefcase, count: 320, desc: 'Elite Business Administration programs for leaders.' },
  { name: 'Nursing', icon: Zap, count: 150, desc: 'Highly sought-after healthcare and clinical programs.' },
];

export function Programs() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Star size={16} /> World-Class Curriculum
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold text-navy font-display mb-6">Choose Your <span className="text-gold">Academic Path</span></h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl italic">Explore thousands of programs across top global universities. Whether you're starting your career or looking to specialize, we have the right fit.</p>
        </header>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PROGRAM_CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform">
                <cat.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-display italic">{cat.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{cat.desc}</p>
              <div className="flex justify-between items-center text-gold font-bold">
                <span>{cat.count}+ Programs</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Programs List */}
        <section className="space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-display italic">Most Popular Programs</h2>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full bg-navy text-white text-sm font-bold">Recommended</button>
              <button className="px-6 py-2 rounded-full bg-gray-50 text-gray-400 text-sm font-bold hover:bg-gray-100">Top Rated</button>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { name: 'Aerospace Engineering with Management', uni: 'University of Hertfordshire', duration: '1 Year', price: 16500, career: 'Spacecraft Systems, Aviation Lead', isPartner: true },
              { name: 'Nursing & Healthcare Practice', uni: 'University of Worcester', duration: '3 Years', price: 14000, career: 'Registered Nurse, Clinical Lead', isPartner: true },
              { name: 'M.Sc Computer Science & AI', uni: 'University of Toronto', duration: '2 Years', price: 45000, career: 'Lead AI Engineer, Data Scientist', isPartner: false },
              { name: 'MBA Global Management', uni: 'Harvard University', duration: '18 Months', price: 85000, career: 'CFO, Management Consultant', isPartner: false },
              { name: 'B.Eng Mechanical Engineering', uni: 'TU Munich', duration: '3.5 Years', price: 0, career: 'Automotive Designer, Systems Engineer', isPartner: false }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
              >
                <div className="space-y-2 w-full lg:w-1/3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-navy mb-1 italic group-hover:text-gold transition-colors">{prog.name}</h3>
                    {prog.isPartner && (
                      <span className="px-3 py-1 bg-amber-500 text-white text-[8px] font-black uppercase tracking-widest rounded-sm shrink-0">
                        Partner
                      </span>
                    )}
                  </div>
                  <p className="text-gold font-bold text-sm tracking-wide uppercase italic">{prog.uni}</p>
                </div>

                <div className="flex flex-wrap gap-6 md:gap-8 w-full lg:w-1/2">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                       <Clock size={18} />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold text-gray-400">Duration</p>
                       <p className="font-bold text-navy">{prog.duration}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                       <DollarSign size={18} />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold text-gray-400">Tuition (Est)</p>
                       <p className="font-bold text-navy">{prog.price > 0 ? formatCurrency(prog.price) : 'No Tuition'}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                       <Briefcase size={18} />
                     </div>
                     <div className="max-w-[150px]">
                       <p className="text-[10px] uppercase font-bold text-gray-400">Career Outlook</p>
                       <p className="font-bold text-navy truncate">{prog.career}</p>
                     </div>
                   </div>
                </div>

                <button className="w-full lg:w-auto px-8 py-4 rounded-xl border border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all whitespace-nowrap">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
