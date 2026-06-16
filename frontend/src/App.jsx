import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAgent from './components/ChatAgent';
import ClientMarquee from './components/ClientMarquee';
import './index.css';

function PageLoader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510]"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="font-heading font-bold text-5xl md:text-6xl gradient-text mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &lt;R /&gt;
      </motion.div>
      <motion.p
        className="font-code text-slate-500 text-sm mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Initializing creative space...
      </motion.p>
      <div className="w-48 h-1 bg-white/[0.08] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 loader-bar" />
      </div>
    </motion.div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function AppContent({ loading, setLoading }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" onDone={() => setLoading(false)} />
      ) : (
        <div key="app" className="relative">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/"
                  element={<PageWrapper><Hero />
                    <ClientMarquee />
                  </PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <ChatAgent />
        </div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
}
