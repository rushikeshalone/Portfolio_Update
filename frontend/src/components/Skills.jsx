import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';

const DEFAULT = {
    Frontend: [
        { name: 'React.js', proficiency: 95 }, { name: 'JavaScript (ES6+)', proficiency: 95 },
        { name: 'TypeScript', proficiency: 85 }, { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Redux Toolkit', proficiency: 88 }, { name: 'Chart.js', proficiency: 85 },
    ],
    Backend: [
        { name: 'Node.js', proficiency: 92 }, { name: 'Express.js', proficiency: 90 },
        { name: 'ASP.NET Core (C#)', proficiency: 85 }, { name: 'RESTful APIs', proficiency: 95 },
        { name: 'SSE & WebSockets', proficiency: 80 },
    ],
    Database: [
        { name: 'SQL Server', proficiency: 90 }, { name: 'MySQL', proficiency: 88 },
        { name: 'MongoDB', proficiency: 85 }, { name: 'Pinecone (Vector DB)', proficiency: 82 },
    ],
    'AI & NLP': [
        { name: 'RAG Architecture', proficiency: 90 }, { name: 'Ollama LLM', proficiency: 88 },
        { name: 'Prompt Engineering', proficiency: 85 }, { name: 'Semantic Search', proficiency: 82 },
    ],
};

const CATEGORY_ICONS = { Frontend: '🎨', Backend: '⚙️', Database: '🗄️', 'AI & NLP': '🤖', Tools: '🛠️' };

export default function Skills() {
    const [skills, setSkills] = useState(DEFAULT);
    const [activeTab, setActiveTab] = useState('Frontend');

    useEffect(() => {
        api.get('/skills').then(r => {
            if (r.data && Object.keys(r.data).length) setSkills(r.data);
        }).catch(() => { });
    }, []);

    const categories = Object.keys(skills);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="section-tag">My Skills</div>
                    <h1 className="section-title">Technical Expertise</h1>
                    <p className="text-slate-400 text-lg">Specialized in Full Stack Development & AI-driven solutions.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300 border ${activeTab === cat
                                    ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                                    : 'border-white/10 text-slate-400 hover:border-indigo-500/50 hover:text-white'
                                }`}
                        >
                            <span>{CATEGORY_ICONS[cat] || '💡'}</span>{cat}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(skills[activeTab] || []).map((skill, i) => (
                        <motion.div
                            key={`${activeTab}-${skill.name}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            className="glass-card p-5 hover:!-translate-y-0"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-heading font-semibold text-slate-200">{skill.name}</span>
                                <span className="font-code text-sm text-cyan-400">{skill.proficiency}%</span>
                            </div>
                            <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                <motion.div
                                    className="skill-bar"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.proficiency}%` }}
                                    transition={{ duration: 1.2, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
