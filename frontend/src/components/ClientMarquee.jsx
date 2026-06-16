import { motion } from "framer-motion";
import gaonkari from "../assets/Images/Media.jpg";
import lovely from "../assets/Images/Aboutimage.jpg";


const clients = [
    {
        name: "Gaonkari Restaurant",
        description: "Restaurant Management & Digital Presence",
        logo: gaonkari,
    },
    {
        name: "Lovely Bakers",
        description: "Bakery Business Website & Branding",
        logo: lovely,
    },
];

export default function ClientSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
                        Trusted Clients
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        Businesses I've Worked With
                    </h2>

                    <p className="text-slate-400 mt-4">
                        Helping local businesses grow through modern web solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
              "
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            <div className="relative z-10">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 w-auto object-contain mb-6"
                                />

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {client.name}
                                </h3>

                                <p className="text-slate-400">
                                    {client.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}