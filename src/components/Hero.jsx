import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent-blue/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent-blue font-mono text-lg mb-4">Hi, my name is</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        MD Rafay Ahmed
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-8">
                        I build <span className="text-accent-purple">intelligent systems</span>.
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
                        Freelance AI & Automation Developer and Data Scientist. I specialize in building
                        data-driven web applications and automating complex workflows to solve real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="px-8 py-3 rounded border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all cursor-pointer font-mono"
                    >
                        View Projects
                    </Link>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1thtVKzgbHhXlnnUQ7DXdtJBTeTc7sLac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded bg-accent-purple text-white hover:bg-accent-purple/90 transition-all font-mono shadow-[0_0_15px_rgba(188,19,254,0.5)] hover:shadow-[0_0_25px_rgba(188,19,254,0.7)]"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-gray-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
