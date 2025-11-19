import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
        </motion.div>

        <div className="relative space-y-16">
          {/* Continuous Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-8 -translate-x-1/2 top-0 w-3 h-3 bg-black border border-blue-500/50 rounded-full group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-300 z-20 box-content ring-4 ring-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                <span className="hidden md:inline text-gray-600">•</span>
                <h4 className="text-xl text-gray-400 font-medium">{exp.company}</h4>
                <span className="md:ml-auto text-sm font-mono text-blue-400/80 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start md:self-auto">
                  {exp.period}
                </span>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-300"
              >
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 opacity-60"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;