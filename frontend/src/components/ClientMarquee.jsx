import { motion } from "framer-motion";
import gaonkari from "../assets/Images/Media.jpg";
import lovely from "../assets/Images/Aboutimage.jpg";

const clients = [
    {
        name: "Gaonkari Restaurant",
        description:
            "Designed and developed a modern restaurant website with responsive UI, menu showcase, gallery, and customer engagement features.",
        image: gaonkari,
        link: "https://restorent-management-zeta.vercel.app/",
    },
    {
        name: "Lovely Bakers",
        description:
            "Created a premium bakery website with product showcase, branding elements, and mobile-friendly customer experience.",
        image: lovely,
        link: "https://www.lovelysbakerstreet.com/",
    },
];

export default function ClientSection() {
    return (
        <section
            id="clients"
            className="relative py-16 px-6 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 uppercase tracking-[0.4em] text-xs"
                    >
                        Trusted Clients
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-3 text-3xl md:text-5xl font-bold text-white"
                    >
                        Businesses I've
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Worked With
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-slate-400 max-w-xl mx-auto"
                    >
                        Helping local businesses establish a strong digital
                        presence with modern and scalable web solutions.
                    </motion.p>
                </div>

                {/* Client Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -6 }}
                            className="group relative h-[320px] overflow-hidden rounded-3xl border border-white/10"
                        >
                            {/* Background Image */}
                            <img
                                src={client.image}
                                alt={client.name}
                                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-500" />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Border Glow */}
                            <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/40 rounded-3xl transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 text-xs mb-4">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                    Client Project
                                </span>

                                <h3 className="text-3xl font-bold text-white mb-2">
                                    {client.name}
                                </h3>

                                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                                    {client.description}
                                </p>

                                <a
                                    href={client.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:scale-105 transition-all duration-300">
                                        View Project
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}