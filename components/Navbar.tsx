import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Home,
    Briefcase,
    FolderGit2,
    Wrench,
    Mail,
    FileText,
    MessageSquare,
    MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: "Home", path: "/", Icon: Home },
        { name: "Experience", path: "/experience", Icon: Briefcase },
        { name: "Skills", path: "/skills", Icon: Wrench },
        { name: "Projects", path: "/projects", Icon: FolderGit2 },
        { name: "Contact", path: "/contact", Icon: Mail },
        { name: "Resume", path: "/resume", Icon: FileText },
    ];
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    return (
        <div
            className="fixed bottom-2 left-0 right-0 z-50 flex justify-center"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
            <nav
                className={`transition-all duration-300 ease-in-out py-2 w-full md:w-auto px-2`}
            >
                <div
                    className={`w-full md:mx-auto md:inline-flex md:w-auto flex items-center rounded-full transition-all duration-300 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl relative `}
                >
                    <div className="flex items-center justify-between h-[60px] w-full">
                        {/* <NavLink to="/" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AT.
            </NavLink> */}

                        <div
                            ref={navRef}
                            className="hidden md:flex items-center gap-2 relative"
                        >
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `relative z-10 flex flex-col items-center gap-1 text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-full min-w-[96px] ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-300"
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
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30,
                                                    }}
                                                    className="absolute inset-0 bg-white/25 backdrop-blur-lg border border-white/30 shadow-xl rounded-full"
                                                />
                                            )}
                                            <span className="relative z-10">
                                                <link.Icon className="w-5 h-5" />
                                            </span>
                                            <span className="relative z-10">
                                                {link.name}
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile chat button centered above the floating bar */}
                        <button
                            onClick={() => window.dispatchEvent(new Event('toggleChat'))}
                            title="Chat"
                            aria-label="Open chat"
                            className="md:hidden absolute -top-12 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <MessageSquare className="text-white w-6 h-6" />
                        </button>

                        <div className="flex md:hidden items-center w-full">
                            <div className="flex w-full items-center gap-2">
                                {/** show only first 4 items on mobile, plus a More button for the rest **/}
                                {navLinks.slice(0, 4).map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        title={link.name}
                                        aria-label={link.name}
                                        className={({ isActive }) =>
                                            `relative z-10 flex-1 flex flex-col items-center justify-center transition-colors duration-200 h-14 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-gray-300"
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
                                                            type: "spring",
                                                            stiffness: 350,
                                                            damping: 30,
                                                        }}
                                                        className="absolute left-1/2 -translate-x-1/2 w-auto px-3 h-12 min-w-[84px] md:inset-0 md:left-0 md:translate-x-0 md:w-auto md:h-auto z-0 bg-white/25 backdrop-blur-lg border border-white/30 shadow-xl rounded-full"
                                                    />
                                                )}
                                                <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center rounded-full">
                                                    <link.Icon className="w-6 h-6 md:w-9 md:h-9" />
                                                </div>
                                                <span className="text-[13px]">
                                                    {link.name}
                                                </span>
                                            </>
                                        )}
                                    </NavLink>
                                ))}

                                {/** More button - shows remaining links */}
                                {navLinks.length > 4 && (
                                    <div className="relative flex-1 flex items-center justify-center">
                                        <button
                                            onClick={() =>
                                                setIsMoreOpen((prev) => !prev)
                                            }
                                            title="More"
                                            aria-label="More menu"
                                            className="w-14 h-14 flex flex-col items-center justify-center rounded-full text-gray-300 hover:text-white"
                                        >
                                            <MoreHorizontal className="w-6 h-6" />
                                            <span className="text-[13px]">
                                                More
                                            </span>
                                        </button>

                                        {isMoreOpen && (
                                            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-56 bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                                                {navLinks
                                                    .slice(4)
                                                    .map((link) => (
                                                        <NavLink
                                                            key={link.name}
                                                            to={link.path}
                                                            onClick={() =>
                                                                setIsMoreOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="flex items-center gap-3 py-2 px-2 rounded hover:bg-white/5"
                                                        >
                                                            <link.Icon className="w-5 h-5 text-gray-200" />
                                                            <span className="text-sm text-gray-200">
                                                                {link.name}
                                                            </span>
                                                        </NavLink>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
