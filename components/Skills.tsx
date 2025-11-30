import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A comprehensive toolbelt honed over years of architectural challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className="glass-panel p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent hover:bg-white/10 border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5 flex items-center gap-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-300 group">
                    <CheckCircle2 className="w-4 h-4 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                    <span className="group-hover:text-white transition-colors font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative Footer Element */}
        <div className="mt-24 p-10 rounded-3xl bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
               <Zap size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Currently Exploring</h4>
              <p className="text-gray-400">Experimenting with Google Agentic Development Kit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;