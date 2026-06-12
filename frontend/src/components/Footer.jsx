export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { href: 'https://github.com/rushikesha', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg> },
        { href: 'https://linkedin.com/in/rushikesha', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
        { href: 'mailto:rushikesha@email.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> },
    ];

    return (
        <footer className="bg-[#041026] text-slate-200 border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Branding + short bio */}
                <div className="space-y-3">
                    <div className="text-2xl font-heading font-bold text-white">&lt;R /&gt;</div>
                    <p className="text-slate-300 text-sm max-w-sm">Rushikesh — Full Stack Developer building reliable, production-grade applications with React, Node.js and AI/ML tooling. Open to freelance and full-time roles.</p>
                    <div className="flex items-center gap-3 mt-3">
                        {socials.map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={`social-${i}`} className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.06] text-slate-200 transition">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="text-sm text-slate-300 uppercase tracking-wider mb-3">Quick Links</h4>
                    <ul className="flex flex-col gap-2">
                        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(l => (
                            <li key={l}>
                                <a href={`#${l.toLowerCase()}`} className="text-slate-300 hover:text-white transition">{l}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & CTA */}
                <div className="flex flex-col items-start md:items-end">
                    <h4 className="text-sm text-slate-300 uppercase tracking-wider mb-3">Get in touch</h4>
                    <div className="text-sm text-slate-300 mb-3">Email: <a href="mailto:rushikeshaloneit@gmail.com" className="text-white hover:underline">rushikeshaloneit@gmail.com</a></div>
                    <div className="text-sm text-slate-300 mb-4">Location: Nagpur, India</div>

                    <a href="/contact" className="btn-hire inline-flex px-4 py-2.5 rounded-full">Hire Me</a>
                </div>

                {/* Footer bottom */}
                <div className="md:col-span-3 mt-6 border-t border-white/[0.03] pt-6 text-center">
                    <p className="text-xs text-slate-400">© {year} Rushikesh · Built with React, Node.js & MySQL</p>
                </div>
            </div>
        </footer>
    );
}
