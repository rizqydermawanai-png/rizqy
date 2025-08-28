import React from 'react';

const SectionTitle = ({ children }) => (
    <div className="text-center mb-12">
        <h2 className="font-serif text-3xl font-bold text-[#4E342E] relative inline-block">
            {children}
            <span className="block w-16 h-1 bg-[#6D4C41] mx-auto mt-4"></span>
        </h2>
    </div>
);

export default SectionTitle;
