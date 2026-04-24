"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Bead {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const BEADS_DATA: Bead[] = [
  { id: 1, category: "Lampwork", name: "Crackle Glass", price: 1.52, image: "https://cbu01.alicdn.com/img/ibank/O1CN01fU6z1S1fU6z1S1fU6z1S_!!0-0-common.jpg", description: "High crackle effect." },
  { id: 2, category: "Lampwork", name: "Two-tone Ice", price: 1.10, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Gradient colors." },
  { id: 3, category: "Ceramic", name: "Morandi Spacer", price: 1.25, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Matte finish." },
  { id: 4, category: "Ceramic", name: "Pastel Square", price: 1.90, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Creamy texture." },
  { id: 5, category: "Stone", name: "Natural Agate", price: 0.50, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Natural banding." },
  { id: 6, category: "Gold", name: "14k GF Pumpkin", price: 0.22, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Luxury feel." },
  { id: 7, category: "Alphabet", name: "Square Letter", price: 0.20, image: "https://cbu01.alicdn.com/img/ibank/O1CN01O1CN01O1CN01_!!0-0-common.jpg", description: "Elegant gold." },
];

export default function DIYEditor() {
  const [selectedSlots, setSelectedSlots] = useState<(Bead | null)[]>(new Array(20).fill(null));
  const [activeSlot, setActiveSlot] = useState<number | null>(0);

  const handleBeadClick = (bead: Bead) => {
    if (activeSlot !== null) {
      const newSlots = [...selectedSlots];
      newSlots[activeSlot] = bead;
      setSelectedSlots(newSlots);
      // Auto move to next slot
      setActiveSlot((activeSlot + 1) % 20);
    }
  };

  const clearSlot = (index: number) => {
    const newSlots = [...selectedSlots];
    newSlots[index] = null;
    setSelectedSlots(newSlots);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl p-6">
      {/* Canvas Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-8 min-h-[500px]">
        <h2 className="text-xl font-light tracking-widest mb-12 uppercase text-[#7D7870]">Your Creation</h2>
        
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Circular Cord */}
          <div className="absolute inset-0 border-[1px] border-[#D4CFC7] rounded-full opacity-30"></div>
          
          {/* Slots */}
          {selectedSlots.map((slot, i) => {
            const angle = (i / 20) * 2 * Math.PI - Math.PI / 2;
            const x = 140 * Math.cos(angle);
            const y = 140 * Math.sin(angle);
            
            return (
              <div
                key={i}
                onClick={() => setActiveSlot(i)}
                className={`absolute w-10 h-10 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center
                  ${activeSlot === i ? 'ring-2 ring-accent ring-offset-4' : 'hover:scale-110'}
                  ${slot ? 'bg-transparent' : 'bg-[#F5F3EF] border border-dashed border-[#D4CFC7]'}
                `}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {slot ? (
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm" onClick={(e) => {
                    if (e.shiftKey) { e.stopPropagation(); clearSlot(i); }
                  }}>
                    <img src={slot.image} alt={slot.name} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <span className="text-[10px] text-[#D4CFC7]">{i + 1}</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#A69F96] italic">Tip: Click a bead to add, Shift+Click to remove</p>
          <div className="mt-4 flex gap-4">
            <button className="px-8 py-3 bg-accent text-white rounded-full text-sm tracking-widest uppercase hover:bg-[#C0BAAF] transition-colors">
              Add to Cart - ${selectedSlots.reduce((acc, s) => acc + (s?.price || 0), 0).toFixed(2)}
            </button>
            <button 
              onClick={() => setSelectedSlots(new Array(20).fill(null))}
              className="px-8 py-3 border border-accent text-accent rounded-full text-sm tracking-widest uppercase hover:bg-[#F5F3EF] transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Selection Area */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-6">
          <h3 className="text-lg font-light tracking-wide mb-6">Select Beads</h3>
          <div className="grid grid-cols-4 gap-3 max-h-[600px] overflow-y-auto pr-2">
            {BEADS_DATA.map((bead) => (
              <div 
                key={bead.id}
                onClick={() => handleBeadClick(bead)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#F5F3EF] border border-transparent group-hover:border-accent transition-all duration-200 shadow-sm">
                  <img src={bead.image} alt={bead.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] mt-2 text-[#7D7870] opacity-0 group-hover:opacity-100 transition-opacity truncate w-full text-center">
                  {bead.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-6">
          <h3 className="text-sm font-medium mb-4">Daily Trend</h3>
          <p className="text-xs text-[#7D7870] leading-relaxed">
            Our daily algorithm has selected 20 trending beads from 1688 based on global demand and high-end aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}
