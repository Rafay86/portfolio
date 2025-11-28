import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Blog Application",
        description: "Scalable full-stack blog with RESTful APIs and secure auth, optimized for performance and uptime.",
        tech: ["Python", "Django", "SQL", "HTML/CSS"],
        github: "https://github.com/Rafay86/Blog-app",
        external: "https://github.com/Rafay86/Blog-app"
    },
    {
        title: "Air Quality Index Prediction",
        description: "AQI prediction app with improved accuracy via advanced tuning, cross-validation on multiple datasets, and strong UX.",
        tech: ["Flask", "ML", "HTML/CSS"],
        github: "https://github.com/Rafay86/AQI-prediction",
        external: "https://github.com/Rafay86/AQI-prediction"
    },
    {
        title: "AI Automation Suite",
        description: "A comprehensive suite of automation tools for data extraction and reporting using n8n and OpenAI.",
        tech: ["n8n", "OpenAI API", "Python"],
        github: "#",
        external: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
                        <span className="text-accent-blue mr-4">04.</span> Projects
                        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-accent-blue/30 group"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-accent-blue text-4xl">
                                        {/* Folder Icon or similar could go here */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                                        <a href={project.external} className="text-gray-400 hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono text-accent-purple">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
