import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, GraduationCap, FileText, Sparkles, Settings, LogOut, Bell, Clock, CheckCircle2, ChevronRight, Upload, BrainCircuit, Trophy } from 'lucide-react';
import { UNIVERSITIES } from '../mockData';
import { getUniversityRecommendation } from '../services/geminiService';
import { cn } from '../lib/utils';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'documents' | 'ai-helper'>('overview');
  const [pref, setPref] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetRecs = async () => {
    if (!pref) return;
    setLoading(true);
    const recs = await getUniversityRecommendation(pref);
    setRecommendations(recs);
    setLoading(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-navy-dark flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-80 bg-navy border-r border-white/10 p-8 flex flex-col gap-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center">
            <LayoutDashboard className="text-navy" size={20} />
          </div>
          <span className="font-bold text-xl font-display text-white italic tracking-tight">Hub</span>
        </div>

        <nav className="flex-grow space-y-3">
          <SidebarLink active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={LayoutDashboard} label="Overview" />
          <SidebarLink active={activeTab === 'applications'} onClick={() => setActiveTab('applications')} icon={CheckCircle2} label="My Applications" />
          <SidebarLink active={activeTab === 'documents'} onClick={() => setActiveTab('documents')} icon={FileText} label="Documents" />
          <SidebarLink active={activeTab === 'ai-helper'} onClick={() => setActiveTab('ai-helper')} icon={BrainCircuit} label="AI Advisor" />
        </nav>

        <div className="pt-8 border-t border-white/10">
          <SidebarLink active={false} onClick={() => {}} icon={Settings} label="Settings" />
          <SidebarLink active={false} onClick={() => {}} icon={LogOut} label="Log Out" color="text-red-400" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-16 overflow-y-auto bg-navy-dark">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-display text-white mb-2">Welcome back, <span className="text-gold italic">John!</span> 👋</h1>
            <p className="text-slate italic font-medium">Track your progress and discover new opportunities.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-4 rounded-sm glass-card text-white relative hover:bg-white/10 transition-all">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-gold rounded-full" />
            </button>
            <div className="flex items-center gap-4 px-5 py-3 glass-card rounded-sm border-gold/20">
              <img src="https://i.pravatar.cc/100" className="w-10 h-10 rounded-sm object-cover border border-white/10 shadow-lg" alt="profile" />
              <div className="hidden sm:block">
                <p className="font-bold text-sm text-white leading-none mb-1 uppercase tracking-widest">John Doe</p>
                <p className="text-[10px] text-gold font-bold uppercase tracking-widest">Premium Student</p>
              </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'applications' && <ApplicationsTab />}
          {activeTab === 'documents' && <DocumentsTab />}
          {activeTab === 'ai-helper' && (
            <AIHelperTab 
              pref={pref} 
              setPref={setPref} 
              onGetRecs={handleGetRecs} 
              loading={loading} 
              recs={recommendations} 
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function SidebarLink({ active, onClick, icon: Icon, label, color }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-4 py-4 rounded-sm transition-all font-bold text-xs uppercase tracking-[2px]",
        active ? "bg-gold text-navy shadow-lg shadow-gold/20" : cn("text-slate hover:bg-white/5", color)
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
      {active && <motion.div layoutId="tab-pill" className="ml-auto w-1 h-4 bg-navy/20 rounded-full" />}
    </button>
  );
}

function OverviewTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard label="Applied Universities" value="3" icon={GraduationCap} trend="+1 this month" />
        <StatCard label="Scholarships Matched" value="12" icon={Trophy} trend="4 new matches" />
        <StatCard label="Document Readiness" value="85%" icon={FileText} trend="Update needed" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="glass-card p-10 rounded-sm">
          <h3 className="text-2xl font-display text-white italic mb-8">Recent Applications</h3>
          <div className="space-y-6">
            <ApplicationRow name="University of Toronto" status="Processing" date="Mar 12, 2024" />
            <ApplicationRow name="TU Munich" status="Accepted" date="Feb 28, 2024" />
            <ApplicationRow name="Oxford University" status="Waitlisted" date="Jan 15, 2024" />
          </div>
        </div>
        <div className="glass-card p-10 rounded-sm bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col justify-center items-center text-center space-y-8">
           <div className="w-24 h-24 rounded-sm gold-gradient flex items-center justify-center text-navy shadow-2xl shadow-gold/10">
             <BrainCircuit size={48} />
           </div>
           <div className="space-y-4">
             <h3 className="text-2xl font-display text-white italic">Intelligent Recommendations</h3>
             <p className="text-slate text-sm max-w-xs leading-relaxed italic">"Let our AI find the best universities for you based on your GPA, budget, and career goals."</p>
           </div>
           <button className="btn-gold !px-10">Try AI Advisor</button>
        </div>
      </div>
    </motion.div>
  );
}

function AIHelperTab({ pref, setPref, onGetRecs, loading, recs }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
      <div className="glass-card p-12 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BrainCircuit size={160} />
        </div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center text-navy">
             <BrainCircuit size={24} />
          </div>
          <h2 className="text-3xl font-display text-white italic">AI University Advisor</h2>
        </div>
        <div className="space-y-8 relative z-10">
          <div>
            <label className="block text-[10px] uppercase font-black text-gold mb-6 tracking-[3px]">What are your ambitions?</label>
            <textarea 
              value={pref}
              onChange={(e) => setPref(e.target.value)}
              placeholder="Example: I want to study Computer Science in Canada. My budget is $30,000/yr and I have a 3.8 GPA. I prefer cities with good tech job markets..."
              rows={5}
              className="w-full px-8 py-6 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/40 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-lg leading-relaxed"
            />
          </div>
          <button 
            onClick={onGetRecs}
            disabled={loading || !pref}
            className="btn-gold w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? <Clock className="animate-spin" /> : <Sparkles size={20} />}
            {loading ? "Analyzing Opportunities..." : "Generate My Recommendations"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {recs.map((rec: any, i: number) => {
          const uni = UNIVERSITIES.find(u => u.id === rec.universityId);
          if (!uni) return null;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-sm relative group overflow-hidden hover:border-gold/30 transition-all"
            >
               <div className="absolute top-0 right-0 p-4 bg-gold text-navy font-black text-[10px] tracking-widest uppercase">
                 {Math.round(rec.matchScore * 100)}% Match
               </div>
               <div className="flex items-center gap-4 mb-8">
                 <img src={uni.logo} className="w-14 h-14 rounded-sm object-cover border border-white/10" alt="" />
                 <h4 className="font-display text-xl text-white italic leading-tight">{uni.name}</h4>
               </div>
               <p className="text-slate text-sm italic mb-8 leading-relaxed">"{rec.reason}"</p>
               <button className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                 View Program <ChevronRight size={16} />
               </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Sub-components
function StatCard({ label, value, icon: Icon, trend }: any) {
  return (
    <div className="glass-card p-8 rounded-sm space-y-6 group hover:translate-y-[-4px] transition-all">
      <div className="flex justify-between items-start">
        <div className="p-4 rounded-sm bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-all">
          <Icon size={28} />
        </div>
        <span className="text-[10px] font-black text-slate bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest">{trend}</span>
      </div>
      <div>
        <div className="text-4xl font-display font-bold text-white mb-1">{value}</div>
        <div className="text-[11px] uppercase tracking-[3px] text-slate font-bold">{label}</div>
      </div>
    </div>
  );
}

function ApplicationRow({ name, status, date }: any) {
  const statusColors: any = {
    'Processing': 'border-blue-500/50 text-blue-400',
    'Accepted': 'border-gold text-gold',
    'Waitlisted': 'border-orange-500/50 text-orange-400',
  };
  return (
    <div className="flex items-center justify-between p-6 rounded-sm bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-sm bg-navy-dark border border-white/10 flex items-center justify-center text-gold font-display text-xl italic shadow-Inner shadow-navy-dark">
          {name[0]}
        </div>
        <div>
          <p className="font-bold text-white uppercase tracking-widest text-xs mb-1 truncate max-w-[150px]">{name}</p>
          <p className="text-[10px] text-slate font-bold uppercase tracking-widest">{date}</p>
        </div>
      </div>
      <span className={cn("px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest border", statusColors[status])}>
        {status}
      </span>
    </div>
  );
}

function ApplicationsTab() {
  return <div className="p-20 text-center text-gray-400 italic">No detailed applications found. Submit your first one!</div>;
}

function DocumentsTab() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {['IELTS Certificate', 'High School Transcript', 'Passport Copy', 'Personal Statement'].map((doc, i) => (
        <div key={i} className="p-8 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center space-y-4 hover:border-gold transition-colors group cursor-pointer">
           <Upload className="text-gray-300 group-hover:text-gold transition-colors" size={40} />
           <h4 className="font-bold text-navy">{doc}</h4>
           <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
        </div>
      ))}
    </div>
  );
}
