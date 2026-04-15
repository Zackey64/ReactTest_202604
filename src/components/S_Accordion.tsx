"use client";
import React, { useState, createContext, useContext } from 'react';

// 状態を共有するためのContext
const AccordionContext = createContext({ isOpen: false, toggle: () => {} });

// 1. Accordion（親）
export const S_Accordion = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className="overflow-hidden">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// 2. AccordionSummary（タイトル部分）
export const S_Summary = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, toggle } = useContext(AccordionContext);
  return (
    <div
      onClick={toggle}
      className="cursor-pointer hover:bg-gray-50 select-none"
    >
      {children}
    </div>
  );
};

// 3. AccordionDetails（中身部分）
export const S_Details = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useContext(AccordionContext);
  return (
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {children}
    </div>
  );
};