import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold font-mono text-white">
                    &lt;Rafay /&gt;
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-gray-300 hover:text-accent-blue cursor-pointer transition-colors font-medium"
                            activeClass="text-accent-blue"
                            spy={true}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://github.com/Rafay86" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/md-rafay-ahmed" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-blue transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-gray-300 hover:text-accent-blue font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-6 mt-8">
                            <a href="https://github.com/Rafay86" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://linkedin.com/in/md-rafay-ahmed" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-blue">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
