import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-accent-blue font-mono mb-4">05. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:mohdrafay86@gmail.com" // Replace with actual email
                        className="inline-block px-8 py-4 border border-accent-blue text-accent-blue rounded hover:bg-accent-blue/10 transition-all font-mono text-lg mb-20"
                    >
                        Say Hello
                    </a>

                    <div className="flex justify-center space-x-8 mb-8">
                        <a href="https://github.com/Rafay86" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/md-rafay-ahmed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue hover:-translate-y-1 transition-all">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:mohdrafay86@gmail.com" className="text-gray-400 hover:text-accent-purple hover:-translate-y-1 transition-all">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
