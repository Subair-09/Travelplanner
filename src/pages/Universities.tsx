import * as React from 'react';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, GraduationCap, MapPin, Star, X, ChevronRight, CheckCircle2, Bookmark, Globe, ArrowLeft, BookOpen } from 'lucide-react';
import { UNIVERSITIES } from '../mockData';
import { formatCurrency, cn } from '../lib/utils';
import { DegreeLevel } from '../types';

export function Universities() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedUniId = searchParams.get('id');

  const [search, setSearch] = useState('');
  const [countryFilter, setCountryFilter] = useState('All');
  const [degreeFilter, setDegreeFilter] = useState<DegreeLevel | 'All'>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const countries = useMemo(() => ['All', ...Array.from(new Set(UNIVERSITIES.map(u => u.country)))], []);
  const degrees: (DegreeLevel | 'All')[] = ['All', 'Undergraduate', 'Postgraduate', 'MBA', 'Doctorate', 'Diploma', 'Nursing'];

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter(u => {
      const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || 
                          u.programs.some(p => p.toLowerCase().includes(search.toLowerCase()));
      const matchCountry = countryFilter === 'All' || u.country === countryFilter;
      const matchDegree = degreeFilter === 'All' || u.degreeLevels.includes(degreeFilter as DegreeLevel);
      return matchSearch && matchCountry && matchDegree;
    }).sort((a, b) => (b.isPartner ? 1 : 0) - (a.isPartner ? 1 : 0));
  }, [search, countryFilter, degreeFilter]);

  const selectedUni = useMemo(() => 
    UNIVERSITIES.find(u => u.id === selectedUniId), [selectedUniId]
  );

  if (selectedUni) {
    return <UniversityDetail university={selectedUni} onBack={() => setSearchParams({})} />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
            Discover Your <span className="text-gold italic">Future</span>
          </h1>
          <p className="text-xl text-slate max-w-2xl italic">
            Find world-class universities that match your aspirations. Use our refined filters to narrow down your study abroad dream.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold" size={24} />
            <input 
              type="text"
              placeholder="Search by university name or program..."
              className="w-full pl-16 pr-6 py-6 rounded-sm bg-navy-light border border-white/10 text-white placeholder:text-slate/40 focus:outline-none focus:border-gold transition-all text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-8 py-6 rounded-sm glass-card flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-navy transition-all lg:hidden"
            >
              <Filter size={20} /> Filters
            </button>
            <div className="hidden lg:flex gap-4">
              <select 
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="px-8 py-6 rounded-sm bg-navy-light border border-white/10 font-bold text-xs uppercase tracking-widest text-white focus:outline-none focus:border-gold cursor-pointer"
              >
                {countries.map(c => <option key={c} value={c} className="bg-navy">{c}</option>)}
              </select>
              <select 
                value={degreeFilter}
                onChange={(e) => setDegreeFilter(e.target.value as any)}
                className="px-8 py-6 rounded-sm bg-navy-light border border-white/10 font-bold text-xs uppercase tracking-widest text-white focus:outline-none focus:border-gold cursor-pointer"
              >
                {degrees.map(d => <option key={d} value={d} className="bg-navy">{d}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredUniversities.map((uni, i) => (
            <motion.div 
              key={uni.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group glass-card rounded-sm overflow-hidden relative hover:border-gold/30 transition-all cursor-pointer"
              onClick={() => setSearchParams({ id: uni.id })}
            >
              <div className="relative h-64">
                <img src={uni.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={uni.name} />
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="px-4 py-2 bg-navy/80 backdrop-blur rounded-full text-[10px] font-black uppercase tracking-widest text-gold flex items-center gap-2 border border-gold/20">
                    <MapPin size={12} /> {uni.country}
                  </div>
                  {uni.isPartner && (
                    <div className="px-4 py-2 bg-amber-500/90 backdrop-blur rounded-sm text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 border border-amber-400/50">
                      <GraduationCap size={12} /> Partnership
                    </div>
                  )}
                </div>
                {uni.scholarshipAvailable && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gold/90 text-navy rounded-sm text-[10px] font-black uppercase tracking-widest">
                    Scholarship
                  </div>
                )}
              </div>
              <div className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <img src={uni.logo} className="w-16 h-16 rounded-sm object-cover border border-white/10" alt={uni.name} />
                  <div>
                    <h3 className="text-2xl font-display text-white italic line-clamp-1">{uni.name}</h3>
                    <p className="text-xs text-slate font-bold uppercase tracking-widest">{uni.city}, {uni.country}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate">Tuition (Est.)</span>
                    <span className="text-gold font-display text-xl italic leading-none">{formatCurrency(uni.tuitionRange.min)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 3).map(p => (
                      <span key={p} className="px-3 py-1 bg-white/5 border border-white/10 text-slate rounded-full text-[10px] uppercase font-bold tracking-widest group-hover:text-gold transition-colors">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  className="w-full btn-gold !py-4 flex items-center justify-center gap-3"
                >
                  View Institution <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-32 glass-card rounded-sm border-dashed border-white/10">
            <GraduationCap size={64} className="mx-auto text-white/5 mb-8" />
            <h3 className="text-3xl font-display text-white italic mb-4">No Institutions Found</h3>
            <p className="text-slate italic">Try adjusting your filters or search criteria.</p>
            <button 
              onClick={() => { setSearch(''); setCountryFilter('All'); setDegreeFilter('All'); }}
              className="mt-10 text-gold font-bold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white hover:border-white transition-all"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function UniversityDetail({ university, onBack }: { university: any; onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-navy-dark min-h-screen text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-gold font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Search results
        </button>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10">
              <img src={university.image} className="w-full h-full object-cover" alt={university.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end md:items-center gap-8">
                <img src={university.logo} className="w-24 h-24 rounded-sm border-[6px] border-white/10 object-cover bg-navy shadow-2xl" alt="logo" />
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-5xl md:text-7xl font-display text-white italic leading-none">{university.name}</h1>
                    {university.isPartner && (
                      <span className="px-4 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[3px] rounded-sm hidden md:block">
                        Official Partner
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-gold italic flex items-center gap-3">
                    <MapPin size={24} /> {university.city}, {university.country}
                  </p>
                </div>
              </div>
            </div>

            <section className="glass-card p-12 rounded-sm border-white/5">
              <h2 className="text-[10px] uppercase tracking-[4px] font-black text-gold mb-8">About University</h2>
              <p className="text-xl text-slate leading-relaxed italic">"{university.description}"</p>
            </section>

            <section className="space-y-10">
              <h2 className="text-4xl font-display text-white italic">Programs <span className="text-gold italic">Offered</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {university.programs.map((program: string, i: number) => (
                  <div key={i} className="p-6 rounded-sm glass-card border-white/5 flex items-center gap-4 hover:border-gold/20 transition-all">
                    <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center text-navy shadow-lg">
                      <BookOpen size={24} />
                    </div>
                    <span className="font-bold text-white uppercase tracking-widest text-xs">{program}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-4xl font-display text-white italic">Admission Requirements</h2>
              <div className="space-y-4">
                {university.requirements.map((req: string, i: number) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-sm bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-gold mt-1 shrink-0" size={24} />
                    <span className="text-lg text-slate italic leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="glass-card p-12 rounded-sm border-gold/20 space-y-10">
              <h3 className="text-3xl font-display text-white italic">Institutional <span className="text-gold italic">Data</span></h3>
              <div className="space-y-6">
                <DataRow label="Global Academic Ranking" value={`#${university.ranking}`} />
                <DataRow label="Estimated Annual Tuition" value={`${formatCurrency(university.tuitionRange.min)}+`} />
                <DataRow label="Funding Availability" value={university.scholarshipAvailable ? 'Fully Funded' : 'Private Only'} />
                {university.isPartner && <DataRow label="Partnership Status" value="Institutional Ally" />}
              </div>
              <div className="space-y-4 pt-6">
                <button className="btn-gold w-full flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                  Apply for Admission <ChevronRight size={16} />
                </button>
                <button className="btn-outline w-full uppercase tracking-widest text-xs">
                  Book Consultation
                </button>
              </div>
            </div>

            <div className="glass-card p-10 rounded-sm bg-gold text-navy space-y-6">
              <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center text-gold">
                <Globe size={28} />
              </div>
              <div>
                <h4 className="font-display text-2xl italic leading-tight mb-4">Admissions Concierge</h4>
                <p className="text-sm font-medium leading-relaxed mb-6">Our expert counselors can help you with the application process for this university.</p>
                <a href="#" className="font-black uppercase tracking-widest text-xs border-b-2 border-navy pb-1">
                  Connect Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-end border-b border-white/10 pb-4">
      <span className="text-[10px] uppercase tracking-widest font-bold text-slate max-w-[120px] leading-tight">{label}</span>
      <span className="font-display text-2xl italic text-gold leading-none">{value}</span>
    </div>
  );
}
