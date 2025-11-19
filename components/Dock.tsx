import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FolderGit2, Wrench, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={24} /> },
  { name: 'Experience', path: '/experience', icon: <Briefcase size={24} /> },
  { name: 'Projects', path: '/projects', icon: <FolderGit2 size={24} /> },
  { name: 'Skills', path: '/skills', icon: <Wrench size={24} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={24} /> },
];

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden md:flex items-end gap-2 relative px-2"
    >
      {navLinks.map((link) => (
        <AppIcon mouseX={mouseX} key={link.name} link={link} />
      ))}
    </div>
  );
};

const AppIcon = ({ mouseX, link }: { mouseX: any; link: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} style={{ width }} className="aspect-square w-10 rounded-full bg-gray-400">
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `relative z-10 flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors duration-200 w-full h-full rounded-full ${
            isActive ? 'text-white' : 'text-gray-300'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-link-highlight"
                initial={false}
                animate={{}}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 bg-white/25 backdrop-blur-lg border border-white/30 shadow-xl rounded-full"
              />
            )}
            <span className="relative z-10">{link.icon}</span>
            <span className="relative z-10 text-xs">{link.name}</span>
          </>
        )}
      </NavLink>
    </motion.div>
  );
};

export default Dock;
