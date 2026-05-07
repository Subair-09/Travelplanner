import * as React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../mockData';

export function Blog() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-[3px] mb-4 border border-gold/20"
          >
            <BookOpen size={16} /> Intellectual Hub
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-semibold text-white italic leading-tight">
            Travelplanner <span className="text-gold italic">Insights</span>
          </h1>
          <p className="text-xl text-slate max-w-2xl mx-auto italic font-light italic">
            "Strategic intelligence for the modern academic explorer. Student stories, and global news that shape your trajectory."
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative h-[600px] rounded-sm overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
          >
            <img src={BLOG_POSTS[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="Featured" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-16 w-full">
              <div className="flex items-center gap-6 text-gold mb-8 font-black uppercase tracking-[3px] text-[10px]">
                <span className="bg-gold text-navy px-4 py-1 rounded-sm">{BLOG_POSTS[0].category}</span>
                <span className="flex items-center gap-2 border-b border-gold/20 pb-1"><Clock size={16} /> 5 MIN READ</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 max-w-4xl leading-[1.1] italic">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-slate text-xl mb-10 max-w-3xl line-clamp-2 italic leading-relaxed">
                "{BLOG_POSTS[0].excerpt}"
              </p>
              <div className="flex items-center gap-6">
                <img src="https://i.pravatar.cc/100?u=sarah" className="w-16 h-16 rounded-sm border-2 border-gold/30 object-cover" alt="author" />
                <div>
                  <p className="text-white font-bold text-lg leading-none mb-2">{BLOG_POSTS[0].author}</p>
                  <p className="text-slate/50 text-[10px] font-black uppercase tracking-widest">{BLOG_POSTS[0].date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 border-b border-white/5 pb-12">
          <div className="flex gap-6 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar">
            {['All Articles', 'Visa Guides', 'Scholarships', 'Study Tips', 'Global News'].map((cat, i) => (
              <button 
                key={i}
                className={`px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-[3px] whitespace-nowrap transition-all ${i === 0 ? 'bg-gold text-navy shadow-xl shadow-gold/20' : 'bg-white/5 text-slate border border-white/10 hover:border-gold hover:text-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH THE ARCHIVE..." 
              className="w-full pl-16 pr-6 py-5 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/20 focus:outline-none focus:border-gold transition-all tracking-widest text-xs font-black"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-sm overflow-hidden border-white/5 hover:border-gold/30 transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={post.title} />
                <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur px-4 py-2 rounded-sm text-[10px] font-black tracking-widest uppercase text-gold border border-gold/20">
                  {post.category}
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex items-center gap-3 text-[10px] text-slate font-black uppercase tracking-widest leading-none border-b border-white/5 pb-4">
                   <Calendar size={14} className="text-gold" /> {post.date}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white italic leading-tight group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate line-clamp-3 text-sm leading-relaxed italic italic font-light">
                  "{post.excerpt}"
                </p>
                <div className="pt-8 flex justify-between items-center border-t border-white/5">
                   <div className="flex items-center gap-3">
                     <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none mb-1">{post.author}</span>
                   </div>
                   <button className="text-gold font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group-hover:gap-5 transition-all">
                     View Article <ArrowRight size={16} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-32">
           <button className="btn-outline w-fit px-16 !text-xs !font-black !tracking-[5px]">
             ACCESS ARCHIVE
           </button>
        </div>
      </div>
    </div>
  );
}
