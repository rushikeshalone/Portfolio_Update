import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';

const EMOJIS = ['🤖', '📈', '🍕', '🍞'];
const FALLBACK = [
    { id: 1, title: 'Bank ChatBot – Conversational AI', description: 'Production-grade RAG system using Ollama & Pinecone. Conversational agent for banking operations with multi-turn history and RBI regulatory grounding.', tech_stack: ['React.js', 'Node.js', 'Ollama', 'Pinecone', 'JWT', 'Redis'], github_url: 'https://github.com/rushikeshalone', live_url: null, featured: true },
    { id: 2, title: 'FinTech – Reconciliation SaaS', description: 'Multi-tenant financial reconciliation dashboard for 10+ enterprise clients. Auto-matching logic for 10K+ transactions daily.', tech_stack: ['React.js', 'Node.js', 'SQL Server', 'Chart.js', 'Tailwind CSS'], github_url: 'https://github.com/rushikeshalone', live_url: null, featured: true },
    { id: 3, title: 'Restaurant Management System', description: 'Full-stack POS platform with real-time table management, QR menu ordering, and kitchen order tracking via WebSockets.', tech_stack: ['React.js', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'JWT', 'Tailwind'], github_url: 'https://github.com/rushikeshalone', live_url: 'https://restorent-management-zeta.vercel.app/', featured: true },
    { id: 4, title: 'Lovely Bakers', description: 'Responsive, SEO-friendly business website for local bakery engagement.', tech_stack: ['React.js', 'CSS3', 'Git'], github_url: 'https://github.com/rushikeshalone', live_url: null, featured: false },
];

export default function Projects() {
    const [projects, setProjects] = useState(FALLBACK);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        api.get('/projects').then(r => { if (r.data?.length) setProjects(r.data); }).catch(() => { });
    }, []);

    const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech_stack || []))].slice(0, 9);
    const filtered = filter === 'All' ? projects : projects.filter(p => p.tech_stack?.includes(filter));

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12"
                >
                    <div className="section-tag">My Work</div>
                    <h1 className="section-title">Featured Projects</h1>
                    <p className="text-slate-400 text-lg">Intelligent systems and enterprise-grade solutions.</p>
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {allTechs.map(t => (
                        <button key={t} onClick={() => setFilter(t)}
                            className={`px-4 py-1.5 rounded-full text-xs font-heading font-medium transition-all duration-200 border ${filter === t ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-white/10 text-slate-400 hover:border-indigo-500/40'
                                }`}
                        >{t}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="glass-card hover:!transform-none flex flex-col overflow-hidden"
                        >
                            <div className="relative h-44 bg-gradient-to-br from-indigo-900/40 to-cyan-900/20 flex items-center justify-center">
                                {project.featured && (
                                    <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                        ⭐ Featured
                                    </span>
                                )}
                                <span className="text-6xl filter drop-shadow-lg">{EMOJIS[i % EMOJIS.length]}</span>
                            </div>

                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-heading font-bold text-lg text-slate-100 mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {(project.tech_stack || []).map(t => <span key={t} className="tech-badge">{t}</span>)}
                                </div>
                                <div className="flex gap-2">
                                    <a href={project.github_url} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-indigo-500/50 transition-all">
                                        Code
                                    </a>
                                    {project.live_url && (
                                        <a href={project.live_url} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 hover:bg-indigo-500/20 transition-all">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
