import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';

const FALLBACK = [{
    id: 1,
    company: 'Trust Fintech Limited',
    role: 'Software Developer (Full Stack & AI)',
    location: 'Nagpur, India',
    start_date: '2023-02-01',
    is_current: true,
    description: 'Architected production-grade RAG applications, built embedding pipelines for 500+ documents, and developed NLP-to-SQL query engines. Developed AML monitoring modules processing 100K+ financial transactions daily with rule-based and threshold detection.',
    tech_used: ['React.js', 'Node.js', 'C#', 'ASP.NET Core', 'Ollama', 'Pinecone', 'SQL Server', 'SSE'],
}];

function fmtDate(d, isCurrent) {
    if (isCurrent) return 'Present';
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Experience() {
    const [experience, setExperience] = useState(FALLBACK);
    useEffect(() => {
        api.get('/experience').then(r => {
            if (r.data?.length) {
                setExperience(r.data.map(exp => ({
                    ...exp,
                    tech_used: typeof exp.tech_used === 'string' ? JSON.parse(exp.tech_used) : exp.tech_used
                })));
            }
        }).catch(() => { });
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16"
                >
                    <div className="section-tag">My Journey</div>
                    <h1 className="section-title">Experience</h1>
                    <p className="text-slate-400 text-lg">Where I've worked and what I've built.</p>
                </motion.div>

                <div className="relative pl-8 border-l-2 border-gradient-to-b from-indigo-500 to-transparent"
                    style={{ borderImage: 'linear-gradient(to bottom, #6366f1, #06b6d4, transparent) 1' }}>
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`relative mb-12 last:mb-0`}
                        >
                            <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 border-2 border-[#050510] shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

                            <div className="glass-card p-6 hover:!-translate-y-0">
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-slate-100 flex items-center gap-2">
                                            {exp.role}
                                            {exp.is_current && (
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-cyan-400 mt-1 flex items-center gap-1.5 text-sm">
                                            🏢 {exp.company}
                                            {exp.location && <span className="text-slate-500">· {exp.location}</span>}
                                        </p>
                                    </div>
                                    <span className="font-code text-xs text-slate-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06] whitespace-nowrap">
                                        {fmtDate(exp.start_date)} – {fmtDate(exp.end_date, exp.is_current)}
                                    </span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                                {exp.tech_used?.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech_used.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
