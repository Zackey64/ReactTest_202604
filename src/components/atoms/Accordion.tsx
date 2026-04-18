"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from 'react';

// 状態を共有するためのContext
const AccordionContext = createContext({ isOpen: false, toggle: () => {} });

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}


// 1. Accordion（親）
export const Accordion = ({ children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className={cn("", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// 2. AccordionSummary（タイトル部分）
export const A_Summary = ({ children, className }: AccordionProps) => {
  const { isOpen, toggle } = useContext(AccordionContext);
  return (
    <div
      onClick={toggle}
      className={cn("cursor-pointer hover:bg-gray-50 select-none", className)}
    >
      {children}
    </div>
  );
};

// 3. AccordionDetails（中身部分）
export const A_Details = ({ children, className }: AccordionProps) => {
  const { isOpen } = useContext(AccordionContext);
  return (
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <div className={cn("", className)}>
        {children}
      </div>
    </div>
  );
};