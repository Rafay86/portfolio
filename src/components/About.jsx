import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                        <span className="text-accent-blue mr-4">01.</span> About Me
                        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2 text-gray-400 leading-relaxed text-lg">
                            <p className="mb-6">
                                Hello! My name is <span className="text-accent-blue">Rafay</span> and I enjoy creating things that live on the internet.
                                My interest in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
                            </p>
                            <p className="mb-6">
                                Fast-forward to today, and I've had the privilege of working at an <span className="text-accent-purple">AI startup</span>,
                                a <span className="text-accent-purple">huge corporation</span>, and a <span className="text-accent-purple">student-led design studio</span>.
                                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                            </p>
                            <p>
                                I hold a BE in Computer Science from <span className="text-accent-blue">Khaja Bandanawaz University</span>,
                                where I focused on Data Structures, Databases, and Machine Learning.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent-blue rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                            <div className="relative bg-gray-800 rounded overflow-hidden">
                                <img
                                    src="/profile.png"
                                    alt="MD Rafay Ahmed"
                                    className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
