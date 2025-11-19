import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-7 md:p-12 text-center relative overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>

           <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Let's Work Together</h2>
           <p className="text-gray-300 mb-10 max-w-xl mx-auto relative z-10">
             I'm currently available for freelance projects and full-time roles. 
             If you're interested in building something extraordinary, let's chat.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
             <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center">
               <Mail className="w-6 h-6 text-blue-400 mb-3" />
               <span className="text-sm text-gray-400">Email</span>
               <span className="text-white font-medium">{PERSONAL_INFO.email}</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center">
               <MapPin className="w-6 h-6 text-purple-400 mb-3" />
               <span className="text-sm text-gray-400">Location</span>
               <span className="text-white font-medium">Jersey City, NJ</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center">
               <Calendar className="w-6 h-6 text-pink-400 mb-3" />
               <span className="text-sm text-gray-400">Availability</span>
               <span className="text-white font-medium">Immediate</span>
             </div>
           </div>

           <a 
             href={`mailto:${PERSONAL_INFO.email}`}
             className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/25 relative z-10"
           >
             Say Hello
           </a>
        </div>

        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Anudeep Thummalapalli. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
