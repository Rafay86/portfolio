import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Languages": ["Python", "C++/C", "Java", "JavaScript", "SQL", "HTML/CSS"],
    "Databases": ["MySQL", "MongoDB"],
    "Frameworks": ["Django", "Flask", "Streamlit", "Tailwind CSS"],
    "Tools": ["Git", "GitHub", "Linux", "Jupyter", "VS Code", "Power BI", "Excel"],
    "Core": ["OOP", "Data Analysis", "Machine Learning", "Automation"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-primary/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
                        <span className="text-accent-blue mr-4">02.</span> Skills
                        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 p-6 rounded-lg border border-white/5 hover:border-accent-blue/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-accent-purple mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-primary rounded-full text-sm text-gray-300 border border-white/10 hover:text-accent-blue hover:border-accent-blue/50 transition-all"
                                        >
                                            {skill}
                                        </span>
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

export default Skills;
