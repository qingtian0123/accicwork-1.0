"use client";

import React, { useState } from "react";

interface CordOption {
  id: number;
  name: string;
  type: string;
  thickness: string;
  length: string;
  color: string;
  price: number;
  description: string;
}

interface Bead {
  id: number;
  category: string;
  name: string;
  price: number;
  color: string;
  size: string;
  holeSize: string;
  meaning: string;
  image: string;
}

const CORD_OPTIONS: CordOption[] = [
  { id: 1, name: "Stainless Steel Wire", type: "Non-elastic", thickness: "0.45mm", length: "18cm", color: "Silver/Gold/Rose Gold", price: 2.50, description: "Durable, holds heavy beads. Clasp required." },
  { id: 2, name: "Crystal Elastic Cord", type: "Elastic (TPU)", thickness: "0.5mm", length: "18cm", color: "Clear Transparent", price: 1.00, description: "Stretch fit, no clasp needed. Best for 8mm beads." },
  { id: 3, name: "Snake Chain Base", type: "Chain", thickness: "3.0mm", color: "Gold/Rose Gold/Silver", length: "18cm", price: 3.50, description: "Pandora-style. Only fits large-hole beads (≥3.5mm)." },
];

const BEADS_DATA: Bead[] = [
  // Glass / Lampwork (4)
  { id: 1, category: "Lampwork", name: "Crackle Glass", price: 1.52, color: "Ice Blue", size: "8mm", holeSize: "1.0mm", meaning: "Inner light — clarity through chaos", image: "/beads/crackle.svg" },
  { id: 2, category: "Lampwork", name: "Two-tone Gradient", price: 1.10, color: "Rose & Cream", size: "8mm", holeSize: "1.0mm", meaning: "Duality — embracing change gracefully", image: "/beads/gradient.svg" },
  { id: 3, category: "Lampwork", name: "Floral Lampwork", price: 2.80, color: "Blush Pink", size: "10mm", holeSize: "1.2mm", meaning: "Blossoming — growth in every season", image: "/beads/floral.svg" },
  { id: 4, category: "Lampwork", name: "Abstract Art Glass", price: 3.20, color: "Morandi Mix", size: "10mm", holeSize: "1.2mm", meaning: "Expression — your story, your canvas", image: "/beads/abstract.svg" },

  // Ceramic (4)
  { id: 5, category: "Ceramic", name: "Morandi Faceted", price: 1.25, color: "Sage Green", size: "8mm", holeSize: "1.0mm", meaning: "Stillness — grounded in nature", image: "/beads/sage.svg" },
  { id: 6, category: "Ceramic", name: "Pastel Square", price: 1.90, color: "Dusty Rose", size: "8mm", holeSize: "1.0mm", meaning: "Soft strength — femininity is power", image: "/beads/rose.svg" },
  { id: 7, category: "Ceramic", name: "Cream Matte Round", price: 1.60, color: "Warm Cream", size: "8mm", holeSize: "1.0mm", meaning: "Warmth — the comfort of home", image: "/beads/cream.svg" },
  { id: 8, category: "Ceramic", name: "Sand Textured", price: 1.45, color: "Desert Sand", size: "10mm", holeSize: "1.2mm", meaning: "Resilience — shaped by wind and time", image: "/beads/sand.svg" },

  // Natural Stone (4)
  { id: 9, category: "Stone", name: "Natural Amethyst", price: 2.10, color: "Violet", size: "8mm", holeSize: "1.0mm", meaning: "Peace — calming the mind, opening the spirit", image: "/beads/amethyst.svg" },
  { id: 10, category: "Stone", name: "Rose Quartz", price: 1.80, color: "Soft Pink", size: "8mm", holeSize: "1.0mm", meaning: "Love — self-love is the first love", image: "/beads/quartz.svg" },
  { id: 11, category: "Stone", name: "Turquoise", price: 2.50, color: "Ocean Blue", size: "8mm", holeSize: "1.0mm", meaning: "Protection — a shield of ancient wisdom", image: "/beads/turquoise.svg" },
  { id: 12, category: "Stone", name: "Natural Agate", price: 0.80, color: "Earth Brown", size: "8mm", holeSize: "1.0mm", meaning: "Balance — harmony between strength and softness", image: "/beads/agate.svg" },

  // Gold / Metal (4)
  { id: 13, category: "Gold", name: "14k GF Pumpkin Spacer", price: 0.45, color: "Gold", size: "4mm", holeSize: "1.0mm", meaning: "Luxury pause — breathing room between stories", image: "/beads/pumpkin.svg" },
  { id: 14, category: "Gold", name: "14k GF Rondelle", price: 0.35, color: "Gold", size: "3mm", holeSize: "1.0mm", meaning: "Golden thread — connection between chapters", image: "/beads/rondelle.svg" },
  { id: 15, category: "Gold", name: "14k GF Hollow Round", price: 0.55, color: "Rose Gold", size: "6mm", holeSize: "1.0mm", meaning: "Elegance — lightness is its own luxury", image: "/beads/hollow.svg" },
  { id: 16, category: "Gold", name: "Sterling Silver Cube", price: 0.40, color: "Silver", size: "4mm", holeSize: "1.0mm", meaning: "Clarity — precision in intention", image: "/beads/cube.svg" },

  // Alphabet (4)
  { id: 17, category: "Alphabet", name: "Letter A", price: 0.20, color: "White + Gold A", size: "6mm", holeSize: "0.8mm", meaning: "A — Amor, Aura, Adventure", image: "/beads/letter-a.svg" },
  { id: 18, category: "Alphabet", name: "Letter L", price: 0.20, color: "White + Gold L", size: "6mm", holeSize: "0.8mm", meaning: "L — Love, Light, Lumina", image: "/beads/letter-l.svg" },
  { id: 19, category: "Alphabet", name: "Heart Symbol", price: 0.25, color: "Blush + Gold ♥", size: "6mm", holeSize: "0.8mm", meaning: "♥ — The universal language", image: "/beads/heart.svg" },
  { id: 20, category: "Alphabet", name: "Star Symbol", price: 0.25, color: "Cream + Gold ★", size: "6mm", holeSize: "0.8mm", meaning: "★ — Shine your own light", image: "/beads/star.svg" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Lampwork: "#B8D4E3",
  Ceramic: "#D4C4B5",
  Stone: "#C9B8A8",
  Gold: "#E8D5A8",
  Alphabet: "#E5DDD5",
};

const CATEGORY_LABELS: Record<string, string> = {
  Lampwork: "Art Glass",
  Ceramic: "Ceramic",
  Stone: "Crystal & Stone",
  Gold: "14k Gold & Silver",
  Alphabet: "Letters & Symbols",
};

export default function DIYEditor() {
  const [selectedCord, setSelectedCord] = useState<CordOption>(CORD_OPTIONS[1]);
  const [selectedSlots, setSelectedSlots] = useState<(Bead | null)[]>(new Array(16).fill(null));
  const [activeSlot, setActiveSlot] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [hoveredBead, setHoveredBead] = useState<Bead | null>(null);

  const filteredBeads = activeCategory === "All" ? BEADS_DATA : BEADS_DATA.filter(b => b.category === activeCategory);

  const handleBeadClick = (bead: Bead) => {
    if (activeSlot !== null) {
      const newSlots = [...selectedSlots];
      newSlots[activeSlot] = bead;
      setSelectedSlots(newSlots);
      const nextEmpty = newSlots.findIndex((s, i) => i > activeSlot && s === null);
      setActiveSlot(nextEmpty !== -1 ? nextEmpty : newSlots.findIndex(s => s === null));
    }
  };

  const clearSlot = (index: number) => {
    const newSlots = [...selectedSlots];
    newSlots[index] = null;
    setSelectedSlots(newSlots);
    setActiveSlot(index);
  };

  const braceletPrice = selectedSlots.reduce((acc, s) => acc + (s?.price || 0), 0) + selectedCord.price;
  const beadCount = selectedSlots.filter(s => s !== null).length;

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl px-6">
      {/* Canvas */}
      <div className="flex-1 flex flex-col items-center bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-8 min-h-[560px]">
        <div className="flex items-center justify-between w-full mb-6">
          <h2 className="text-[13px] tracking-[0.3em] uppercase text-[#7D7870]">Your Creation</h2>
          <span className="text-[10px] text-[#D4CFC7] tracking-wider">
            {beadCount} beads &middot; {selectedCord.name} ({selectedCord.thickness})
          </span>
        </div>

        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
          {/* Cord visualization */}
          <div className={`absolute inset-0 rounded-full
            ${selectedCord.type === "Chain" ? "border-[3px] border-[#E8D5A8]" : "border-[1px] border-[#D4CFC7]"}
            ${selectedCord.type === "Elastic (TPU)" ? "opacity-40" : "opacity-25"}
          `}></div>

          {selectedSlots.map((slot, i) => {
            const totalSlots = selectedSlots.length;
            const angle = (i / totalSlots) * 2 * Math.PI - Math.PI / 2;
            const radius = selectedCord.type === "Chain" ? 130 : 140;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const slotSize = slot?.size === "10mm" ? "w-12 h-12" : slot?.size === "4mm" || slot?.size === "3mm" ? "w-7 h-7" : "w-10 h-10";

            return (
              <div
                key={i}
                onClick={() => setActiveSlot(i)}
                className={`absolute ${slotSize} rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center
                  ${activeSlot === i ? 'ring-2 ring-[#C4B5A5] ring-offset-3 ring-offset-white' : 'hover:scale-110'}
                  ${slot ? '' : 'bg-[#F5F3EF] border border-dashed border-[#D4CFC7]'}
                `}
                style={{
                  transform: `translate(${x - (slotSize.includes('12') ? 24 : slotSize.includes('7') ? 14 : 20)}px, ${y - (slotSize.includes('12') ? 24 : slotSize.includes('7') ? 14 : 20)}px)`,
                }}
              >
                {slot ? (
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden shadow-sm cursor-pointer"
                    style={{ backgroundColor: CATEGORY_COLORS[slot.category] || '#F5F3EF' }}
                    onClick={(e) => { e.stopPropagation(); clearSlot(i); }}
                    title={`${slot.name} — ${slot.meaning} (Click to remove)`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[8px] text-[#5A5A5A] font-medium text-center leading-tight px-1">
                        {slot.name.split(' ').slice(-1)[0]}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-[9px] text-[#D4CFC7]">{i + 1}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Meaning display */}
        {showMeaning && hoveredBead && (
          <div className="mt-8 text-center transition-opacity duration-300">
            <p className="text-[12px] text-[#7D7870] italic">&ldquo;{hoveredBead.meaning}&rdquo;</p>
            <p className="text-[10px] text-[#D4CFC7] mt-1">{hoveredBead.name} &middot; {hoveredBead.size} &middot; hole {hoveredBead.holeSize}</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-[10px] text-[#A69F96]">Click bead to add &middot; Click on bracelet to remove</p>
          <div className="mt-4 flex gap-3 justify-center">
            <button className="px-8 py-3 bg-[#C4B5A5] text-white rounded-full text-[11px] tracking-[0.2em] uppercase hover:bg-[#B8A99A] transition-colors shadow-sm">
              Add to Cart &mdash; \${braceletPrice.toFixed(2)}
            </button>
            <button
              onClick={() => { setSelectedSlots(new Array(16).fill(null)); setActiveSlot(0); }}
              className="px-6 py-3 border border-[#D4CFC7] text-[#A69F96] rounded-full text-[11px] tracking-[0.2em] uppercase hover:bg-[#F5F3EF] transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Selection Panel */}
      <div className="w-full lg:w-[380px] flex flex-col gap-4">
        {/* Cord Selection */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870] mb-4">Choose Your Cord</h3>
          <div className="space-y-2">
            {CORD_OPTIONS.map((cord) => (
              <div
                key={cord.id}
                onClick={() => setSelectedCord(cord)}
                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border
                  ${selectedCord.id === cord.id ? 'border-[#C4B5A5] bg-[#F5F3EF]' : 'border-transparent hover:border-[#EBE8E2]'}
                `}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[12px] text-[#3A3A3A] font-medium">{cord.name}</span>
                    <span className="text-[10px] text-[#A69F96] ml-2">{cord.thickness} &middot; {cord.length}</span>
                  </div>
                  <span className="text-[11px] text-[#C4B5A5]">\${cord.price.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#A69F96] mt-1">{cord.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870]">Select Beads</h3>
            <button
              onClick={() => setShowMeaning(!showMeaning)}
              className={`text-[9px] tracking-wider uppercase px-3 py-1 rounded-full border transition-colors
                ${showMeaning ? 'border-[#C4B5A5] text-[#C4B5A5]' : 'border-[#EBE8E2] text-[#D4CFC7]'}
              `}
            >
              {showMeaning ? "Meaning ON" : "Meaning OFF"}
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1 mb-4 overflow-x-auto">
            {["All", ...Object.keys(CATEGORY_LABELS)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap transition-colors
                  ${activeCategory === cat ? 'bg-[#C4B5A5] text-white' : 'bg-[#F5F3EF] text-[#A69F96] hover:bg-[#EBE8E2]'}
                `}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>

          {/* Bead grid */}
          <div className="grid grid-cols-5 gap-2 max-h-[420px] overflow-y-auto pr-1">
            {filteredBeads.map((bead) => (
              <div
                key={bead.id}
                onClick={() => handleBeadClick(bead)}
                onMouseEnter={() => setHoveredBead(bead)}
                onMouseLeave={() => setHoveredBead(null)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`w-[52px] h-[52px] rounded-xl overflow-hidden border transition-all duration-200 shadow-sm
                    ${hoveredBead?.id === bead.id ? 'border-[#C4B5A5] scale-105' : 'border-transparent hover:border-[#EBE8E2]'}
                  `}
                  style={{ backgroundColor: CATEGORY_COLORS[bead.category] || '#F5F3EF' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[7px] text-[#5A5A5A] font-medium text-center leading-tight px-0.5">
                      {bead.name}
                    </span>
                  </div>
                </div>
                <span className="text-[8px] mt-1 text-[#A69F96]">
                  {bead.size} &middot; \${bead.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Intention note */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870] mb-3">Your Intention</h3>
          <p className="text-[11px] text-[#8C8478] leading-relaxed italic">
            Each bead you choose carries a meaning. Together, they form your daily ritual — a quiet reminder worn on your wrist. What story will yours tell?
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {selectedSlots.filter(s => s).map((s, i) => (
              <span key={i} className="text-[8px] px-2 py-0.5 rounded-full bg-[#F5F3EF] text-[#7D7870] border border-[#EBE8E2]">
                {s?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}