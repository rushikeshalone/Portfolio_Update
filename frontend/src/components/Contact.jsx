import { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import api from '../api/axios';

const INIT = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(INIT);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) { toast.error('Please fill required fields.'); return; }
        setLoading(true);
        try {
            await api.post('/contact', form);
            toast.success("Message sent! I'll get back to you soon 🚀");
            setForm(INIT);
        } catch (err) {
            toast.error(err?.response?.data?.error || 'Something went wrong. Try again.');
        } finally { setLoading(false); }
    };

    const contacts = [
        { icon: '📧', title: 'Email', value: 'rushikesha@email.com', href: 'mailto:rushikesha@email.com' },
        { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/rushikesha', href: 'https://linkedin.com/in/rushikesha' },
        { icon: '🐙', title: 'GitHub', value: 'github.com/rushikesha', href: 'https://github.com/rushikesha' },
        { icon: '📍', title: 'Location', value: 'India 🇮🇳', href: null },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <Toaster position="top-right" toastOptions={{ style: { background: '#0a0a1f', color: '#f1f5f9', border: '1px solid rgba(99,102,241,0.3)' } }} />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                    <div className="section-tag">Get In Touch</div>
                    <h1 className="section-title">Let's Work Together</h1>
                    <p className="text-slate-400 text-lg">Have a project in mind? I'd love to hear about it.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div>
                            <h2 className="font-heading font-bold text-2xl mb-2">Say <span className="gradient-text">Hello</span> 👋</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I'm open to full-time roles and freelance opportunities. My inbox is always open!
                            </p>
                        </div>
                        <div className="space-y-3">
                            {contacts.map(c => (
                                <div key={c.title} className="glass-card p-4 flex items-center gap-3 hover:!-translate-y-0">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-0.5">{c.title}</div>
                                        {c.href
                                            ? <a href={c.href} target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">{c.value}</a>
                                            : <span className="text-sm text-slate-300">{c.value}</span>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} noValidate className="glass-card p-8 space-y-5 hover:!transform-none">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Name *</label>
                                    <input name="name" type="text" placeholder="Your name" required
                                        value={form.name} onChange={handleChange} className="form-input-base" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email *</label>
                                    <input name="email" type="email" placeholder="your@email.com" required
                                        value={form.email} onChange={handleChange} className="form-input-base" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                                <input name="subject" type="text" placeholder="Project inquiry, collaboration..."
                                    value={form.subject} onChange={handleChange} className="form-input-base" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1.5">Message *</label>
                                <textarea name="message" rows={5} placeholder="Tell me about your project..."
                                    value={form.message} onChange={handleChange} className="form-input-base resize-none" required />
                            </div>

                            <motion.button
                                type="submit" disabled={loading}
                                className="w-full btn-primary justify-center py-3.5 text-sm"
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? 'Sending... ⏳' : 'Send Message 🚀'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
