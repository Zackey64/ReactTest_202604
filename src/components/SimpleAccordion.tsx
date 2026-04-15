'use client';

import { useState, ReactNode } from 'react';

interface SimpleAccordionProps {
  title: string;
  children: ReactNode;
}

const SimpleAccordion = ({ title, children }: SimpleAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

    return(

        <div>
            <button
             onClick={() => setIsOpen(!isOpen)}
             className="flex justify-between items-center w-full">

                <span>{title}</span>
                <span className={`transition-transform duration-300
                     ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>

            </button>

            <div
             className={`overflow-hidden transition-all duration-300 ease-in-out
                 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'
                 }`}
            >
                {children}
                </div>
        </div>

    );
};


export default SimpleAccordion;