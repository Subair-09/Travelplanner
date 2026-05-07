import * as React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Globe, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-navy text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12 md:space-y-16">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-[3px] mb-8 border border-gold/20"
              >
                <MessageSquare size={16} /> Get In Touch
              </motion.div>
              <h1 className="text-4xl md:text-8xl font-display font-semibold text-white mb-8 italic leading-tight md:leading-none">
                We'd love to <br className="hidden md:block" /> <span className="text-gold">hear from you.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate leading-relaxed max-w-md italic">
                Strategic guidance is only a conversation away. Our elite team is ready to provide clarity for your global academic goals.
              </p>
            </div>

            <div className="space-y-10">
              <ContactInfoItem icon={Phone} title="Direct Line" content="+1 (234) 567-890" />
              <ContactInfoItem icon={Mail} title="Digital Liaison" content="concierge@travelplanner.com" />
              <ContactInfoItem icon={MapPin} title="Global HQ" content="123 Global Avenue, Toronto, Canada" />
            </div>

            <div className="pt-8">
              <p className="text-[10px] font-black text-slate uppercase tracking-[4px] mb-6">Digital Presence</p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate hover:bg-gold hover:text-navy transition-all shadow-xl">
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 md:p-12 rounded-sm border-gold/20 relative"
          >
            <div className="absolute top-0 left-0 w-32 h-1 bg-gold"></div>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-gold mb-3 uppercase tracking-[3px]">Full Name</label>
                  <input type="text" placeholder="ALEXANDER VANCE" className="w-full px-6 py-5 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/20 focus:border-gold focus:outline-none transition-all tracking-widest text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gold mb-3 uppercase tracking-[3px]">Email Address</label>
                  <input type="email" placeholder="vance@prestige.com" className="w-full px-6 py-5 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/20 focus:border-gold focus:outline-none transition-all tracking-widest text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gold mb-3 uppercase tracking-[3px]">Consultation Type</label>
                <div className="relative">
                  <select className="w-full px-6 py-5 rounded-sm bg-navy-dark border border-white/10 text-white focus:border-gold focus:outline-none transition-all appearance-none italic text-sm tracking-wide">
                    <option className="bg-navy-dark">Tier 1 University Admission</option>
                    <option className="bg-navy-dark">Strategic Visa Advisory</option>
                    <option className="bg-navy-dark">Merit-Based Scholarships</option>
                    <option className="bg-navy-dark">Corporate Partnership</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gold mb-3 uppercase tracking-[3px]">Message Inquiry</label>
                <textarea rows={5} placeholder="Describe your academic aspirations..." className="w-full px-6 py-5 rounded-sm bg-navy-dark border border-white/10 text-white placeholder:text-slate/20 focus:border-gold focus:outline-none transition-all resize-none italic text-sm"></textarea>
              </div>
              <button className="w-full py-6 rounded-sm btn-gold flex items-center justify-center gap-4 group uppercase tracking-[4px] text-xs font-black shadow-2xl shadow-gold/10">
                Dispatch Inquiry <Send size={20} className="group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 md:mt-32 h-[300px] md:h-[500px] rounded-sm overflow-hidden border border-white/10">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.5728956975!2d-79.51814144347717!3d43.71815525547055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323557dd83d5166a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1715071800000!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div className="flex gap-4 md:gap-8 items-start group">
      <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all shadow-xl">
        <Icon size={24} className="md:w-8 md:h-8" />
      </div>
      <div className="min-w-0">
        <h3 className="text-[10px] font-black text-slate uppercase tracking-[3px] mb-2">{title}</h3>
        <p className="text-xl md:text-3xl font-display text-white italic group-hover:text-gold transition-colors break-words">{content}</p>
      </div>
    </div>
  );
}
