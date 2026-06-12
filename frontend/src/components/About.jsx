import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import api from '../api/axios';
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

export default function About() {
    const [about, setAbout] = useState(null);
    useEffect(() => {
        api.get('/about').then(r => setAbout(r.data)).catch(() => { });
    }, []);

    const info = about || {
        name: 'RUSHIKESH N ALONE',
        title: 'Full Stack Developer & AI Engineer',
        bio: 'Full Stack Developer with 3+ years of experience building scalable banking dashboards and financial reconciliation systems. Specialized in integrating Generative AI (Ollama, RAG) with React and Node.js. Adept at real-time data streaming and high-volume transaction processing.',
        github_url: 'https://github.com/rushikeshalone',
        linkedin_url: 'https://linkedin.com/in/rushikesh-alone',
        email: 'rushikeshaloneit@gmail.com',
        location: 'Nagpur, India',
        years_experience: 3,
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div {...fadeUp(0)} className="mb-16">
                    <div className="section-tag">About Me</div>
                    <h1 className="section-title">Who I Am</h1>
                    <p className="text-slate-400 text-lg">A developer focused on intelligent banking and financial solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    <motion.div {...fadeUp(0.2)} className="lg:col-span-2 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-[#0a0a1f] flex items-center justify-center text-8xl">
                                    👨‍💻
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-4 bg-[#0a0a1f] border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-slate-300 text-xs">Available for hire</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(0.35)} className="lg:col-span-3 space-y-6">
                        <div>
                            <h2 className="font-heading font-bold text-3xl mb-1">
                                Hi, I'm <span className="gradient-text">{info.name}</span>
                            </h2>
                            <p className="text-cyan-400 font-medium text-lg">{info.title}</p>
                        </div>
                        <p className="text-slate-400 leading-relaxed">{info.bio}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { icon: '📍', val: info.location },
                                { icon: '📧', val: info.email },
                                { icon: '💼', val: `${info.years_experience}+ Years Experience` },
                                { icon: '🎓', val: 'B.E. Computer Science' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                                    <span>{item.icon}</span><span>{item.val}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a href={info.github_url} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-5">
                                GitHub
                            </a>
                            <a href={info.linkedin_url} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-5">
                                LinkedIn
                            </a>
                            <Link to="/projects" className="btn-primary text-sm py-2 px-5">
                                View Projects →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
