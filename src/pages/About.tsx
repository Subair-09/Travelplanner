import * as React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-gold/10 text-gold font-black text-[10px] tracking-[4px] uppercase border border-gold/20">
              Legacy & Story
            </div>
            <h1 className="text-4xl md:text-8xl font-display font-semibold text-white leading-tight uppercase">
              Empowering <span className="text-gold">Dreams</span> <br /> 
              Across <span className="text-white font-display">Borders.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate leading-relaxed italic font-light">
              "Travelplanner is more than a consultancy; it's a bridge between local aspirations and global prestige."
            </p>
            <p className="text-lg text-slate/70 leading-relaxed max-w-xl">
              Founded in 2012, our mission has been to demystify the complex landscape of international education. We provide high-caliber, strategic guidance to students aiming for world-renowned institutions.
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-6">
              <div className="border-l-2 border-gold pl-4 md:pl-6">
                <h4 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">12+</h4>
                <p className="text-[10px] text-slate font-black uppercase tracking-[2px]">Years of Expertise</p>
              </div>
              <div className="border-l-2 border-gold pl-4 md:pl-6">
                <h4 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">150+</h4>
                <p className="text-[10px] text-slate font-black uppercase tracking-[2px]">Global Partnerships</p>
              </div>
            </div>
          </motion.div>
          <div className="relative group">
            <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 transform group-hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Team" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-sm border-gold/30 hidden md:block">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-sm gold-gradient flex items-center justify-center text-navy shadow-lg">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-white leading-none">Global Excellence</h4>
                  <p className="text-[10px] text-slate font-black uppercase tracking-[2px] mt-2">Awarded #1 Consultancy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision/Mission */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 text-center md:text-left">
          <div className="p-10 md:p-16 rounded-sm glass-card border-white/5 space-y-8 group hover:border-gold/30 transition-all">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold transition-all group-hover:text-navy mx-auto md:mx-0">
              <Target className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-white">Our Mission</h2>
            <p className="text-slate text-lg md:text-xl leading-relaxed italic">
              "To revolutionize the international education process through transparency, ethics, and unparalleled strategic insight."
            </p>
          </div>
          <div className="p-10 md:p-16 rounded-sm glass-card border-white/5 bg-gold text-navy space-y-8 group hover:shadow-2xl transition-all">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-navy/10 border border-navy/10 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all mx-auto md:mx-0">
              <Eye className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-navy">Our Vision</h2>
            <p className="text-navy text-lg md:text-xl leading-relaxed font-bold">
              To be the definitive global standard for study abroad advisory, empowering the next generation of academic leaders.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-16 md:mb-20">The <span className="text-gold">Travelplanner</span> Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <WhyCard 
              icon={ShieldCheck} 
              title="Verified Experts" 
              desc="Certified counselors with doctoral-level insight into global admissions." 
            />
            <WhyCard 
              icon={Users} 
              title="Individual Centric" 
              desc="We craft personalized trajectories based on unique psychological profiles." 
            />
            <WhyCard 
              icon={Award} 
              title="Exceptional Yield" 
              desc="Maintaining an industry-leading 98% admission and visa success rate." 
            />
            <WhyCard 
              icon={TrendingUp} 
              title="Infinite Future" 
              desc="Choosing programs calibrated for long-term career returns and ROI." 
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="p-8 md:p-12 rounded-sm glass-card border-white/5 hover:border-gold/30 transition-all space-y-6 md:space-y-8 group">
      <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:gold-gradient group-hover:text-navy transition-all mx-auto">
        <Icon size={28} />
      </div>
      <h3 className="text-xl md:text-2xl font-display text-white">{title}</h3>
      <p className="text-slate text-sm leading-relaxed italic">"{desc}"</p>
    </div>
  );
}
