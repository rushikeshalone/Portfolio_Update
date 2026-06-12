import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Updated Portfolio knowledge base for Rushikesh Alone ─────────────────────
const KB = {
    greeting: ["Hi! I'm Rushikesh's AI assistant. Ask me about his RAG projects, FinTech experience, or general skills!", "Hello! I'm here to help you learn about Rushikesh N Alone. What would you like to know?"],
    skills: "Rushikesh has a robust technical background:\n🎨 **Frontend**: React.js, Redux Toolkit, Tailwind CSS, Chart.js\n⚙️ **Backend**: Node.js, Express, ASP.NET Core (C#), SSE, WebSockets\n🗄️ **Database**: SQL Server, MongoDB, Pinecone (Vector DB), Redis\n🤖 **AI**: RAG Architecture, Ollama LLM, Prompt Engineering, Semantic Search",
    projects: "His featured work includes:\n🤖 **Bank ChatBot** — A production-grade RAG system with Ollama & Pinecone for RBI/AML querying.\n📈 **FinTech SaaS** — Multi-tenant reconciliation platform for enterprise clients.\n🍕 **Restaurant POS** — Real-time table management & QR ordering (React, Node, Socket.io).\n🍞 **Lovely Bakers** — Responsive business website.",
    experience: "Rushikesh has **3+ years of experience**. He currently works at **Trust Fintech Limited** as a Software Developer, focusing on AI-powered banking systems, AML compliance, and real-time financial dashboards.",
    contact: "Reach Rushikesh at:\n📧 Email: rushikeshaloneit@gmail.com\n💼 LinkedIn: linkedin.com/in/rushikesh-alone\n🐙 GitHub: github.com/rushikeshalone\n📍 Nagpur, India",
    about: "Rushikesh N Alone is a Full Stack Developer & AI Engineer with 3+ years of experience. He specializes in building intelligent banking systems using RAG models and real-time financial reconciliation engines.",
    availability: "Yes, Rushikesh is currently **open to new opportunities**! You can contact him directly or check out his work on the Projects page. 🚀",
    stack: "His core stack includes:\n- **Frontend**: React (TS/JS) + Tailwind\n- **Backend**: Node.js + Express / ASP.NET Core\n- **Database**: SQL Server / MySQL / Pinecone\n- **AI**: Ollama & RAG frameworks",
    default: "I can tell you about Rushikesh's **AI research (RAG)**, **FinTech experience**, **projects**, or his **skill set**. What interests you? 😊",
};

function getReply(msg) {
    const m = msg.toLowerCase();
    if (m.match(/hi|hello|hey|howdy|greet/)) return KB.greeting[Math.floor(Math.random() * KB.greeting.length)];
    if (m.match(/skill|tech|know|language|framework|stack|use/)) return KB.skills;
    if (m.match(/project|built|app|work|portfolio|bank|fintech|restaurant|bakery/)) return KB.projects;
    if (m.match(/experience|job|work|career|history|year|trust|fintech/)) return KB.experience;
    if (m.match(/contact|reach|email|linkedin|github|hire|available|free/)) return KB.contact;
    if (m.match(/about|who|yourself|tell me|rushikesh/)) return KB.about;
    if (m.match(/available|open|hire|job|position|role/)) return KB.availability;
    if (m.match(/stack|tools|deploy|hosting|railway|vercel|ollama|rag|pinecone/)) return KB.stack;
    return KB.default;
}

function TypingDots() {
    return (
        <div className="flex items-center gap-1 px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-indigo-400 dot-1" />
            <div className="w-2 h-2 rounded-full bg-indigo-400 dot-2" />
            <div className="w-2 h-2 rounded-full bg-indigo-400 dot-3" />
        </div>
    );
}

function parseMarkdown(text) {
    return text.split('\n').map((line, i) => {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
            <span key={i}>
                {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-indigo-300 font-semibold">{p}</strong> : p)}
                {'\n'}
            </span>
        );
    });
}

const QUICK_QUESTIONS = [
    'What are your skills?',
    'Tell me about RAG projects',
    'Professional experience?',
    'Are you available?',
];

export default function ChatAgent() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'agent', text: "Hi! I'm Rushikesh's AI assistant 👋\nI can tell you about his AI focus (RAG), FinTech experience, or his projects!" }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    const sendMessage = (text) => {
        const msg = (text || input).trim();
        if (!msg) return;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: msg }]);
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            setMessages(prev => [...prev, { role: 'agent', text: getReply(msg) }]);
        }, 800 + Math.random() * 500);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        className="fixed bottom-24 right-5 sm:right-6 z-50 w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm flex flex-col"
                        style={{ maxHeight: '520px' }}
                    >
                        <div className="flex flex-col h-full bg-[#0d0d24] border border-indigo-500/20 rounded-3xl shadow-2xl shadow-indigo-900/40 overflow-hidden">
                            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/20 border-b border-white/[0.07]">
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-base">🤖</div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d0d24]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-heading font-semibold text-sm text-slate-100">Rushikesh Al (Assistant)</p>
                                    <p className="text-xs text-emerald-400">Online · Ask about RAG/FinTech</p>
                                </div>
                                <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-slate-400">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-600/30" style={{ minHeight: '240px', maxHeight: '320px' }}>
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} chat-msg-in`}>
                                        {msg.role === 'agent' && <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs mr-2 mt-1 flex-shrink-0">🤖</div>}
                                        <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-md' : 'bg-white/[0.05] border border-white/[0.06] text-slate-300 rounded-bl-md'}`}>{msg.role === 'agent' ? parseMarkdown(msg.text) : msg.text}</div>
                                    </div>
                                ))}
                                {typing && (
                                    <div className="flex justify-start">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs mr-2 mt-1">🤖</div>
                                        <div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-md"><TypingDots /></div>
                                    </div>
                                )}
                                <div ref={bottomRef} />
                            </div>

                            {messages.length <= 1 && (
                                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                                    {QUICK_QUESTIONS.map(q => (
                                        <button key={q} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 transition-all font-medium">{q}</button>
                                    ))}
                                </div>
                            )}

                            <div className="px-4 py-3 border-t border-white/[0.06] bg-[#0a0a1f]/60">
                                <div className="flex items-end gap-2">
                                    <textarea ref={inputRef} rows={1} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask about RAG, Node.js, FinTech..." className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 resize-none transition-all" style={{ minHeight: '40px', maxHeight: '90px' }} />
                                    <motion.button whileTap={{ scale: 0.92 }} onClick={() => sendMessage()} disabled={!input.trim() || typing} className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg disabled:opacity-40 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" /></svg></motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button onClick={() => setOpen(o => !o)} className="fixed bottom-5 right-5 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform" animate={open ? {} : { scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} aria-label="Open chat assistant">
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></motion.svg>
                    ) : (
                        <motion.span key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-2xl">🤖</motion.span>
                    )}
                </AnimatePresence>
                {!open && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#050510] animate-pulse" />}
            </motion.button>
        </>
    );
}
