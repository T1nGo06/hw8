import React, { useState } from 'react';
import "./index.css";

function Accordion({ title, defaultOpen = false, children }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="custom-accordion">
            <div 
                className="accordion-header" 
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span>{title}</span>
                <span className={`accordion-toggle ${isOpen ? 'is-open' : ''}`}>
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Accordion;
