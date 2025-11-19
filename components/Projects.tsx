import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
          </motion.div>
          
          <motion.a 
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group"
          >
            View all on GitHub 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-90"></div>
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 relative z-20 -mt-20 flex-1 flex flex-col">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/10 rounded-md border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;