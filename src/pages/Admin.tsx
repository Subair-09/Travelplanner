import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, FileText, BarChart3, Plus, Edit, Trash2, Search, CheckCircle, XCircle, Clock } from 'lucide-react';
import { UNIVERSITIES, BLOG_POSTS } from '../mockData';
import { cn } from '../lib/utils';

export function Admin() {
  const [activeMenu, setActiveMenu] = useState<'users' | 'universities' | 'blogs'>('users');

  return (
    <div className="pt-20 min-h-screen bg-navy flex flex-col lg:flex-row">
      <aside className="lg:w-80 bg-navy-dark border-r border-white/5 p-8 flex flex-col gap-10">
        <h2 className="text-xl font-display font-bold italic text-gold tracking-tight">Admin Portal</h2>
        <nav className="space-y-3">
          <SidebarMenuButton 
            active={activeMenu === 'users'} 
            onClick={() => setActiveMenu('users')} 
            icon={Users} 
            label="Applications" 
          />
          <SidebarMenuButton 
            active={activeMenu === 'universities'} 
            onClick={() => setActiveMenu('universities')} 
            icon={GraduationCap} 
            label="Universities" 
          />
          <SidebarMenuButton 
            active={activeMenu === 'blogs'} 
            onClick={() => setActiveMenu('blogs')} 
            icon={FileText} 
            label="Articles" 
          />
        </nav>
      </aside>

      <main className="flex-grow p-8 md:p-16 bg-navy overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
           <h1 className="text-4xl font-display text-white">Management <span className="text-gold italic">Hub</span></h1>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 btn-gold !py-3 !px-6 !text-xs !tracking-widest">
                 <Plus size={16} /> Add New Item
              </button>
           </div>
        </header>

        <AnimatePresence mode="wait">
          {activeMenu === 'users' && (
            <motion.div key="users" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <ApplicationsTable />
            </motion.div>
          )}
          {activeMenu === 'universities' && (
            <motion.div key="universities" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <ItemsList items={UNIVERSITIES} title="Universities" />
            </motion.div>
          )}
          {activeMenu === 'blogs' && (
            <motion.div key="blogs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <ItemsList items={BLOG_POSTS} title="Articles" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function SidebarMenuButton({ active, onClick, icon: Icon, label }: any) {
  return (
    <button 
      onClick={onClick} 
      className={cn(
        "w-full flex items-center gap-4 p-4 rounded-sm transition-all font-bold text-[10px] uppercase tracking-[3px]", 
        active ? 'bg-gold text-navy shadow-lg shadow-gold/20' : 'text-slate hover:bg-white/5'
      )}
    >
      <Icon size={18} /> {label}
    </button>
  );
}

function ApplicationsTable() {
  const apps = [
    { name: 'Alice Smith', university: 'University of Toronto', status: 'Pending', date: '2024-05-01' },
    { name: 'Bob Wilson', university: 'Oxford University', status: 'Approved', date: '2024-04-28' },
    { name: 'Charlie Davis', university: 'Harvard University', status: 'Rejected', date: '2024-04-25' },
  ];

  return (
    <div className="glass-card rounded-sm overflow-hidden overflow-x-auto">
       <table className="w-full text-left">
         <thead className="bg-white/5 border-b border-white/5">
           <tr>
             <th className="p-6 font-bold text-gold uppercase text-[10px] tracking-[3px]">Student</th>
             <th className="p-6 font-bold text-gold uppercase text-[10px] tracking-[3px]">University</th>
             <th className="p-6 font-bold text-gold uppercase text-[10px] tracking-[3px]">Date</th>
             <th className="p-6 font-bold text-gold uppercase text-[10px] tracking-[3px]">Status</th>
             <th className="p-6 font-bold text-gold uppercase text-[10px] tracking-[3px]">Action</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-white/5">
           {apps.map((app, i) => (
             <tr key={i} className="hover:bg-white/[0.02] transition-colors">
               <td className="p-6">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-navy font-bold text-[10px]">
                     {app.name[0]}
                   </div>
                   <span className="font-bold text-white text-sm tracking-wide">{app.name}</span>
                 </div>
               </td>
               <td className="p-6 text-slate text-sm italic">{app.university}</td>
               <td className="p-6 text-slate text-xs font-mono">{app.date}</td>
               <td className="p-6">
                 <span className={`px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest border ${
                   app.status === 'Approved' ? 'border-green-500/50 text-green-400 bg-green-500/5' :
                   app.status === 'Rejected' ? 'border-red-500/50 text-red-400 bg-red-500/5' : 
                   'border-orange-500/50 text-orange-400 bg-orange-500/5'
                 }`}>
                   {app.status}
                 </span>
               </td>
               <td className="p-6">
                 <div className="flex gap-3">
                   <button className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all"><CheckCircle size={16} /></button>
                   <button className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all"><XCircle size={16} /></button>
                 </div>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
    </div>
  );
}

function ItemsList({ items, title }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item: any, i: number) => (
        <div key={i} className="glass-card p-8 rounded-sm flex items-center justify-between group hover:border-gold/30 transition-all">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-sm bg-navy-dark border border-white/10 flex items-center justify-center font-display text-2xl italic text-gold">
                 {item.name ? item.name[0] : item.title[0]}
              </div>
              <div className="max-w-[180px] space-y-1">
                 <p className="font-display text-lg text-white italic truncate">{item.name || item.title}</p>
                 <p className="text-[10px] text-slate font-black uppercase tracking-[2px]">{item.country || item.category}</p>
              </div>
           </div>
           <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-3 rounded-sm bg-white/5 text-slate hover:text-gold transition-colors"><Edit size={16} /></button>
              <button className="p-3 rounded-sm bg-white/5 text-slate hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
           </div>
        </div>
      ))}
    </div>
  );
}
