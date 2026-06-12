import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [location]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/90 backdrop-blur-2xl border-b border-white/[0.08]' : ''
            }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="font-heading font-bold text-2xl gradient-text">
                        &lt;R /&gt;
                    </NavLink>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <NavLink to="/contact" className="hidden md:inline-flex btn-hire text-sm px-5 py-2">
                        Hire Me
                    </NavLink>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="md:hidden flex flex-col gap-1.5 p-2 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden border-t border-white/[0.06]"
                        >
                            <div className="py-4 flex flex-col gap-1">
                                {navItems.map(item => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-b border-white/[0.05] ${isActive ? 'text-white bg-indigo-500/10' : 'text-slate-400 hover:text-white'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                                <NavLink to="/contact" className="btn-hire mt-2 justify-center text-sm py-2.5">
                                    Hire Me
                                </NavLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
