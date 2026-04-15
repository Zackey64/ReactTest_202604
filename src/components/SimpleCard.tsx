'use client';

import { useState, ReactNode } from 'react';

interface SimpleCardProps {
  w: number;
  h: number;
  children: ReactNode;
}

const SimpleCard = ({ w=10, h=10, children }: SimpleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

    return(

        <div className={`w-${w} h-${h}`}>
            <div className="border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden">
                {children}
            </div>
        </div>

    );
};

export default SimpleCard;