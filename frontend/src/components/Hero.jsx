import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D';

const Terminal = () => {
    const [text, setText] = useState('');
    const fullText = `{
  "experience": "3+ Years",
  "domains": ["FinTech", "Banking", "AI"],
  "core": "React · Node.js · C#",
  "ai_stack": "Ollama · RAG · Pinecone",
  "cloud": "Railway · Vercel · Docker",
  "status": "open_to_opportunities"
}`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 15);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-2xl bg-[#0d0d24] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-code text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-slate-500 text-xs tracking-widest uppercase">bash — 80x24</div>
                <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-[280px] overflow-hidden leading-relaxed">
                <div className="flex gap-2 mb-4">
                    <span className="text-emerald-400">~/rushikesh</span>
                    <span className="text-slate-400">cat profile.json</span>
                </div>

                <pre className="text-slate-300">
                    {text.split('\n').map((line, i) => {
                        // Very simple syntax highlighting for the JSON
                        const parts = line.split(':');
                        if (parts.length > 1) {
                            return (
                                <div key={i} className="flex">
                                    <span className="text-cyan-400">{parts[0]}</span>:
                                    <span className="text-amber-400">{parts.slice(1).join(':')}</span>
                                </div>
                            );
                        }
                        return <div key={i}>{line}</div>;
                    })}
                    <span className="inline-block w-2 h-5 bg-indigo-500 ml-1 translate-y-1 animate-pulse" />
                </pre>

                {text.length >= fullText.length && (
                    <div className="flex gap-2 mt-4">
                        <span className="text-emerald-400">~/rushikesh</span>
                        <span className="inline-block w-2 h-5 bg-indigo-500 ml-1 translate-y-1 animate-pulse" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="section-tag"
                        >
                            Available for new projects
                        </motion.div>
                        <h1 className="font-heading font-bold text-5xl md:text-7xl">
                            Building <span className="gradient-text">Intelligent</span> Systems
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                            Hello, I'm <span className="text-white font-semibold">Rushikesh Alone</span>.
                            A Full Stack Developer specializing in Generative AI (RAG), Fintech systems, and high-performance web applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/projects" className="btn-primary flex items-center gap-3 group">
                            View My Work
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Get In Touch
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4 grayscale opacity-50">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">3+</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest">Years Exp</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">10+</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest">Enterprise Clients</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">500+</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest">Docs Processed</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    {/* Right column: restore Terminal (visible always) */}
                    <div className="w-full max-w-2xl">
                        <Terminal />
                    </div>

                    {/* Floating UI Element (small, solid color card) */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-10 -right-6 glass-card p-3 flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-lg">🚀</div>
                        <div>
                            <div className="text-[10px] text-slate-300 uppercase font-bold tracking-tighter">Current Stack</div>
                            <div className="text-xs text-slate-100 font-semibold">React · Node · AI</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Particles (from before) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 hidden sm:block">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle bg-indigo-400"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${15 + Math.random() * 20}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
