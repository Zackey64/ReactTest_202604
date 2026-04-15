"use client";
import React, { useState, createContext, useContext } from 'react';


// 1
export const S_Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="border-gray-200 border rounded-xl overflow-hidden">
        {children}
        </div>
    </div>
  );
};

