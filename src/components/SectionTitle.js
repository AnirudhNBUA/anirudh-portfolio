import React from 'react';

const SectionTitle = ({ children, icon: Icon }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center flex items-center justify-center gap-3">
        <Icon className="w-8 h-8 text-cyan-400" />
        {children}
    </h2>
);

export default SectionTitle;
