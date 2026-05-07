import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Globe, Compass, ArrowRight, ArrowLeft, Sun, DollarSign, Briefcase, Home, Info, Plane } from 'lucide-react';
import { DESTINATIONS } from '../mockData';
import { cn } from '../lib/utils';

export function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const selectedDest = DESTINATIONS.find(d => d.id === selectedId);

  if (selectedDest) {
    return <DestinationDetail destination={selectedDest} onBack={() => setSearchParams({})} />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-[3px] mb-8 border border-gold/20"
          >
            <Compass size={16} /> Global Explorer
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-display font-semibold text-white mb-8">Study <span className="text-gold italic">Destinations</span></h1>
          <p className="text-xl text-slate max-w-2xl mx-auto italic">Explore countries offering world-class education, vibrant student life, and incredible global career opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DESTINATIONS.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-[550px] rounded-sm overflow-hidden cursor-pointer border border-white/10"
              onClick={() => setSearchParams({ id: dest.id })}
            >
              <img src={dest.image} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={dest.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <h3 className="text-5xl font-display font-bold text-white italic mb-6 leading-none">{dest.name}</h3>
                <p className="text-slate text-sm mb-8 line-clamp-2 italic leading-relaxed">"{dest.description}"</p>
                <div className="flex items-center gap-3 text-gold font-black uppercase tracking-[3px] text-xs">
                  Discover Country <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationDetail({ destination, onBack }: { destination: any; onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24 pt-24 bg-navy text-white min-h-screen"
    >
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <img src={destination.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20 w-full">
          <button onClick={onBack} className="inline-flex items-center gap-3 text-gold font-bold text-xs uppercase tracking-widest mb-10 hover:text-white transition-colors">
            <ArrowLeft size={20} /> Back to Locations
          </button>
          <h1 className="text-6xl md:text-9xl font-display font-semibold text-white italic leading-none mb-6">{destination.name}</h1>
          <p className="text-2xl text-slate max-w-3xl italic leading-relaxed">"{destination.description}"</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <div className="glass-card p-12 rounded-sm border-white/5 grid md:grid-cols-2 gap-12">
              <InfoItem icon={Plane} title="Visa Requirements" content={destination.visaRequirements} />
              <InfoItem icon={DollarSign} title="Cost of Living" content={destination.costOfLiving} />
              <InfoItem icon={Sun} title="Climate Conditions" content={destination.weather} />
              <InfoItem icon={MapPin} title="Recommended Cities" content={destination.popularCities.join(', ')} />
            </div>

            <section className="space-y-12">
               <div className="glass-card p-12 rounded-sm bg-gold text-navy space-y-8">
                 <h2 className="text-[10px] uppercase tracking-[4px] font-black text-navy/60 flex items-center gap-4">
                   <Globe size={24} /> Living & Culture
                 </h2>
                 <p className="text-2xl font-display italic leading-[1.4] ">"{destination.lifestyle}"</p>
               </div>

               <div className="grid md:grid-cols-2 gap-10">
                 <div className="glass-card p-10 rounded-sm space-y-6 border-white/5 hover:border-gold/20 transition-all">
                   <div className="p-4 rounded-sm bg-gold/10 text-gold w-fit">
                    <Briefcase size={28} />
                   </div>
                   <h3 className="text-2xl font-display text-white italic">Work Opportunities</h3>
                   <p className="text-slate italic leading-relaxed text-sm">{destination.workOpportunities}</p>
                 </div>
                 <div className="glass-card p-10 rounded-sm space-y-6 border-white/5 hover:border-gold/20 transition-all">
                   <div className="p-4 rounded-sm bg-gold/10 text-gold w-fit">
                    <Home size={28} />
                   </div>
                   <h3 className="text-2xl font-display text-white italic">Accommodation</h3>
                   <p className="text-slate italic leading-relaxed text-sm">{destination.accommodation}</p>
                 </div>
               </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-12">
            <div className="glass-card p-12 rounded-sm border-gold/20 sticky top-32">
              <h3 className="text-3xl font-display text-white italic mb-4">Talk to a <span className="text-gold italic">Consultant</span></h3>
              <p className="text-slate text-sm italic mb-10 leading-relaxed">Not sure if {destination.name} is the right fit? Our specialist advisors provide tailored guidance for your specific academic profile.</p>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full px-6 py-4 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/40 focus:outline-none focus:border-gold text-sm tracking-wide"
                />
                <button className="btn-gold w-full flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                  Request Expert Callback
                </button>
              </div>
              <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-2 border-navy" alt="User" />
                  ))}
                </div>
                <div>
                  <p className="text-xs text-white font-bold uppercase tracking-widest leading-none mb-1">450+ Assisted</p>
                  <p className="text-[10px] text-slate uppercase tracking-widest">for {destination.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoItem({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/10">
        <Icon size={28} />
      </div>
      <div className="space-y-1">
        <h4 className="text-[10px] font-black uppercase tracking-[2px] text-gold">{title}</h4>
        <p className="text-slate text-sm italic leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
