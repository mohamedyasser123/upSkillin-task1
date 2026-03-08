import React from 'react';

const DECORATIONS = [
    { id: 'tl', position: '-top-2 left-2 rotate-135' },
    { id: 'tr', position: '-top-2 right-2 -rotate-135' },
    { id: 'bl', position: '-bottom-2 left-2 -rotate-135' },
    { id: 'br', position: '-bottom-2 right-2 rotate-135' },
];

const SectionTitle = ({ title, textColor = "#6D91EE" }) => {
    return (
        <div className="relative inline-block text-center mb-16 px-12 py-4">
            {DECORATIONS.map((dec) => (
                <span
                    key={dec.id}
                    className={`absolute w-10 h-[2px] transform ${dec.position}`}
                    style={{ backgroundColor: textColor }}
                />
            ))}

            <h2 className="text-4xl md:text-5xl font-[900] tracking-wide" style={{ color: textColor }}>
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
