import * as React from 'react';
import { motion } from 'motion/react';
import { Search, GraduationCap, Globe, BookOpen, ArrowRight, Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import { UNIVERSITIES, DESTINATIONS, BLOG_POSTS } from '../mockData';
import { formatCurrency } from '../lib/utils';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="University students studying together"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 space-y-10"
          >
            <h1 className="text-6xl md:text-8xl font-display font-semibold leading-[1.1] text-white">
              Plan Your Study <br /> <span className="text-gold italic">Abroad Journey</span> <br /> With Ease
            </h1>
            <p className="text-xl text-slate max-w-lg leading-relaxed">
              Empowering ambitious students to access world-class education through personalized consultancy, scholarship matching, and seamless visa processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/universities" className="btn-gold">
                Explore Universities
              </a>
              <a href="/admissions" className="btn-outline">
                Consultation
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-2/5 grid grid-cols-1 gap-6 w-full"
          >
            <div className="glass-card p-10 relative group hover:border-gold/30 transition-all">
              <div className="absolute top-4 right-4 gold-gradient text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                New Feature
              </div>
              <div className="space-y-4">
                <p className="text-gold text-[10px] uppercase tracking-[3px] font-bold">Intelligent Matching</p>
                <h3 className="text-2xl font-display text-white italic">AI Scholarship Finder</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Our proprietary algorithm matches your academic profile with over $2.5B in global funding opportunities.
                </p>
                <div className="flex gap-2 pt-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase">Fully Funded</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase">Merit-Based</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 bg-gold text-navy group border-transparent">
              <div className="space-y-4">
                <p className="text-navy/60 text-[10px] uppercase tracking-[3px] font-bold">Ready to Start?</p>
                <h3 className="text-2xl font-display italic">2024 Fall Intake Open</h3>
                <p className="text-navy/80 text-sm font-medium leading-relaxed">
                  Final application deadline for premium partner universities is approaching. Secure your spot now.
                </p>
                <div className="pt-6">
                  <span className="font-black text-sm uppercase tracking-widest border-b-2 border-navy cursor-pointer">Apply Now →</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-cream border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Recognized by Leading Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-all">
            <Globe className="w-32 h-12" />
            <BookOpen className="w-32 h-12" />
            <GraduationCap className="w-32 h-12" />
            <Star className="w-32 h-12" />
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Featured Universities</h2>
              <p className="text-lg text-gray-500 max-w-xl">Start your academic journey at top-ranked world institutions with our proven guidance.</p>
            </div>
            <a href="/universities" className="flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all">
              View All Universities <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UNIVERSITIES.slice(0, 3).map((uni, i) => (
              <motion.div 
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <img src={uni.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={uni.name} />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-navy">
                    {uni.country}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">{uni.name}</h3>
                    <div className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-bold">#{uni.ranking} World</div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen size={16} className="text-gold" />
                      <span>{uni.programs.slice(0, 3).join(', ')}...</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Star size={16} className="text-gold" />
                      <span>Tuition: {formatCurrency(uni.tuitionRange.min)} - {formatCurrency(uni.tuitionRange.max)}/yr</span>
                    </div>
                  </div>
                  <a href={`/universities?id=${uni.id}`} className="w-full py-3 rounded-xl border border-gold/20 text-gold font-bold flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-white transition-all">
                    View Details <ChevronRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Destinations */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Popular Destinations</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Discover iconic student destinations around the globe with rich cultures and top education systems.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest, i) => (
              <motion.div 
                key={dest.id}
                whileHover={{ y: -10 }}
                className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {dest.description}
                  </p>
                  <a href={`/destinations?id=${dest.id}`} className="inline-flex items-center gap-2 text-gold font-bold">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">Expert Guidance For Your <span className="text-gold">Global Future</span></h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Travelplanner is more than an agency. We are your dedicated pathfinders, helping you navigate the complexities of international admissions and visa processes.
            </p>
            <div className="space-y-4">
              {[
                "Certified Education Consultants",
                "98% Success Rate in Visa Processing",
                "Partnerships with 150+ Top Universities",
                "Transparent & Merit-Based Guidance"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-semibold text-navy">{feature}</span>
                </div>
              ))}
            </div>
            <a href="/about" className="inline-block px-8 py-4 rounded-xl bg-navy text-white font-bold hover:scale-105 transition-transform">
              Learn More About Us
            </a>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="rounded-2xl h-80 object-cover mt-8" alt="Students" />
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="rounded-2xl h-80 object-cover" alt="Campus Life" />
          </div>
        </div>
      </section>

    </div>
  );
}
