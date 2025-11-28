import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 bg-primary text-center text-gray-500 text-sm font-mono">
            <p>
                Designed & Built by <span className="text-accent-blue">MD Rafay Ahmed</span>
            </p>
            <p className="mt-2 text-xs">
                © {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
