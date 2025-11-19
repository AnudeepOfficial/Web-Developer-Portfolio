import React, { useEffect, useState } from "react";
import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    MapPin,
    Instagram,
    Facebook,
    Mail,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { motion } from "framer-motion";

const TypingTitles: React.FC = () => {
    const titles = [
        "UI Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Web Developer",
        "AI Enthusiast",
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const handle = setInterval(() => setBlink((b) => !b), 500);
        return () => clearInterval(handle);
    }, []);

    useEffect(() => {
        if (isDeleting) {
            if (subIndex === 0) {
                setIsDeleting(false);
                setIndex((i) => (i + 1) % titles.length);
            } else {
                const timeout = setTimeout(() => setSubIndex((s) => s - 1), 60);
                return () => clearTimeout(timeout);
            }
        } else {
            if (subIndex === titles[index].length) {
                const timeout = setTimeout(() => setIsDeleting(true), 1200);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(
                    () => setSubIndex((s) => s + 1),
                    120
                );
                return () => clearTimeout(timeout);
            }
        }
    }, [subIndex, index, isDeleting]);

    return (
        <span>
            {titles[index].slice(0, subIndex)}
            <span
                className={`inline-block ml-1 w-1 ${
                    blink ? "bg-white" : "bg-transparent"
                }`}
            >
                &nbsp;
            </span>
        </span>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pb-24 overflow-hidden bg-[#050505]">
            {/* Background Ambient Effects */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen pointer-events-none"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Text */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                                Open to new opportunities
                            </span>
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                {PERSONAL_INFO.name}
                            </span>
                        </h2>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                            {/* <span className="block">Building the Modern Web applications</span> */}
                            <span className="block text-gray-300 text-2xl mt-2">
                                I am a
                                <span className="inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-semibold">
                                    <TypingTitles />
                                </span>
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-400 max-w-xl mb-6">
                            {PERSONAL_INFO.about}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6"
                        >
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="group relative px-6 py-3 rounded-full bg-white text-black font-semibold text-base overflow-hidden transition-transform active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects{" "}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2 group">
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />{" "}
                                Download CV
                            </button>
                        </motion.div>

                        <div className="flex items-center gap-6 mb-2">
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-4 h-4 text-white/80" />
                                <span className="text-sm">
                                    Jersey City, NJ, USA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex items-center justify-center">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                            {/* Replace the src with your professional image in /public or an external URL */}
                            <img
                                src="/profile.jpg"
                                alt="Anudeep Thummalapalli"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className=" mt-20 flex items-center justify-center gap-8 opacity-60"
                >
                    <p className="hover:text-white hover:scale-110 transition-all text-3xl">
                        Connect with me
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-6 flex items-center justify-center gap-8 opacity-60"
                >
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600">
                        <Mail size={30} />
                    </a>
                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400"
                    >
                        <Linkedin size={30} />
                    </a>
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                    >
                        <Github size={30} />
                    </a>
                    
                    <a href="#" className="hover:text-pink-400">
                        <Instagram size={30} />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        <Facebook size={30} />
                    </a>
                    
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
