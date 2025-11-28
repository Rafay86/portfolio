import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Freelance AI & Automation Developer",
        company: "Remote (Saudi Client)",
        period: "Aug 2025 – Present",
        description: [
            "Built RAG chatbots for confidential document Q&A using LangChain and OpenAI APIs.",
            "Automated workflows in n8n for data extraction and report scheduling.",
            "Delivered secure, on-premise AI automation solutions."
        ]
    },
    {
        title: "Data Science Intern",
        company: "AI Variant",
        period: "Oct 2024 – Jul 2025",
        description: [
            "Built AQI forecasting web app with Streamlit/HTML/CSS reaching around 90% prediction accuracy.",
            "Developed predictive algorithms, improved model accuracy, and worked in an Agile cross-functional team."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
                        <span className="text-accent-blue mr-4">03.</span> Experience
                        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l-2 border-gray-700 hover:border-accent-blue transition-colors"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-accent-blue"></div>

                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <p className="text-accent-purple font-mono mb-4">{exp.company} | {exp.period}</p>

                                <ul className="list-disc list-inside space-y-2 text-gray-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
