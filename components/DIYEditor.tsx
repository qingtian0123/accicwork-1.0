"use client";

import React, { useState, useMemo } from "react";
import { BEADS, CORDS, CATEGORIES, type Bead, type CategoryKey } from "@/data/beads-catalog";

export default function DIYEditor() {
  const [selectedCord, setSelectedCord] = useState(CORDS[1]);
  const [selectedSlots, setSelectedSlots] = useState<(Bead | null)[]>(new Array(16).fill(null));
  const [activeSlot, setActiveSlot] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [hoveredBead, setHoveredBead] = useState<Bead | null>(null);

  const filteredBeads = useMemo(() => {
    let list = activeCategory === "All" ? BEADS : BEADS.filter(b => b.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.color.toLowerCase().includes(q) ||
        b.aesthetic.toLowerCase().includes(q) ||
        b.meaning.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

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
            const sizeNum = parseInt(slot?.size || "8");
            const slotSize = sizeNum >= 12 ? "w-12 h-12" : sizeNum >= 10 ? "w-11 h-11" : sizeNum >= 8 ? "w-10 h-10" : sizeNum >= 6 ? "w-8 h-8" : "w-7 h-7";
            const offset = sizeNum >= 12 ? 24 : sizeNum >= 10 ? 22 : sizeNum >= 8 ? 20 : sizeNum >= 6 ? 16 : 14;
            const catColor = slot ? CATEGORIES[slot.category as CategoryKey]?.color : "#F5F3EF";

            return (
              <div
                key={i}
                onClick={() => setActiveSlot(i)}
                className={`absolute ${slotSize} rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center
                  ${activeSlot === i ? 'ring-2 ring-[#C4B5A5] ring-offset-3 ring-offset-white' : 'hover:scale-110'}
                  ${slot ? '' : 'bg-[#F5F3EF] border border-dashed border-[#D4CFC7]'}
                `}
                style={{ transform: `translate(${x - offset}px, ${y - offset}px)` }}
              >
                {slot ? (
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden shadow-sm cursor-pointer"
                    style={{ backgroundColor: catColor }}
                    onClick={(e) => { e.stopPropagation(); clearSlot(i); }}
                    title={`${slot.name} — ${slot.meaning} (Click to remove)`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[7px] text-[#5A5A5A] font-medium text-center leading-tight px-0.5">
                        {slot.name.split(' ')[0]}
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

        {showMeaning && hoveredBead && (
          <div className="mt-8 text-center transition-opacity duration-300">
            <p className="text-[12px] text-[#7D7870] italic">&ldquo;{hoveredBead.meaning}&rdquo;</p>
            <p className="text-[10px] text-[#D4CFC7] mt-1">
              {hoveredBead.name} &middot; {hoveredBead.aesthetic} &middot; hole {hoveredBead.holeSize}
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-[10px] text-[#A69F96]">Click bead to add &middot; Click on bracelet to remove</p>
          <div className="mt-4 flex gap-3 justify-center">
            <button className="px-8 py-3 bg-[#C4B5A5] text-white rounded-full text-[11px] tracking-[0.2em] uppercase hover:bg-[#B8A99A] transition-colors shadow-sm">
              Add to Cart &mdash; ${braceletPrice.toFixed(2)}
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
      <div className="w-full lg:w-[400px] flex flex-col gap-4">
        {/* Cord Selection */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870] mb-4">Choose Your Cord</h3>
          <div className="space-y-2">
            {CORDS.map((cord) => (
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
                  <span className="text-[11px] text-[#C4B5A5]">${cord.price.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#A69F96] mt-1">{cord.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bead selection */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870]">
              {BEADS.length} Beads
            </h3>
            <button
              onClick={() => setShowMeaning(!showMeaning)}
              className={`text-[9px] tracking-wider uppercase px-3 py-1 rounded-full border transition-colors
                ${showMeaning ? 'border-[#C4B5A5] text-[#C4B5A5]' : 'border-[#EBE8E2] text-[#D4CFC7]'}
              `}
            >
              {showMeaning ? "Meaning ON" : "Meaning OFF"}
            </button>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by name, color, vibe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-3 px-3 py-2 text-[11px] text-[#5A5A5A] bg-[#F5F3EF] border border-[#EBE8E2] rounded-lg focus:outline-none focus:border-[#C4B5A5] placeholder:text-[#D4CFC7]"
          />

          {/* Category tabs */}
          <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap transition-colors
                ${activeCategory === "All" ? 'bg-[#C4B5A5] text-white' : 'bg-[#F5F3EF] text-[#A69F96] hover:bg-[#EBE8E2]'}
              `}
            >
              All ({BEADS.length})
            </button>
            {(Object.keys(CATEGORIES) as CategoryKey[]).map((cat) => {
              const count = BEADS.filter(b => b.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap transition-colors
                    ${activeCategory === cat ? 'bg-[#C4B5A5] text-white' : 'bg-[#F5F3EF] text-[#A69F96] hover:bg-[#EBE8E2]'}
                  `}
                >
                  {CATEGORIES[cat].label} ({count})
                </button>
              );
            })}
          </div>

          {/* Bead grid */}
          <div className="grid grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
            {filteredBeads.map((bead) => {
              const catColor = CATEGORIES[bead.category as CategoryKey]?.color || "#F5F3EF";
              return (
                <div
                  key={bead.id}
                  onClick={() => handleBeadClick(bead)}
                  onMouseEnter={() => setHoveredBead(bead)}
                  onMouseLeave={() => setHoveredBead(null)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  <div
                    className={`relative w-[52px] h-[52px] rounded-xl overflow-hidden border transition-all duration-200 shadow-sm
                      ${hoveredBead?.id === bead.id ? 'border-[#C4B5A5] scale-105' : 'border-transparent hover:border-[#EBE8E2]'}
                    `}
                    style={{ backgroundColor: catColor }}
                  >
                    <div className="w-full h-full flex items-center justify-center px-0.5">
                      <span className="text-[7px] text-[#5A5A5A] font-medium text-center leading-tight">
                        {bead.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                    {bead.trending && (
                      <span className="absolute top-0 right-0 text-[6px] bg-[#E8B4B8] text-white px-1 rounded-bl">HOT</span>
                    )}
                    {bead.bestseller && !bead.trending && (
                      <span className="absolute top-0 right-0 text-[6px] bg-[#C4B5A5] text-white px-1 rounded-bl">★</span>
                    )}
                  </div>
                  <span className="text-[8px] mt-1 text-[#A69F96]">
                    {bead.size} &middot; ${bead.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
            {filteredBeads.length === 0 && (
              <div className="col-span-5 text-center py-8 text-[11px] text-[#A69F96]">
                No beads match your search
              </div>
            )}
          </div>
        </div>

        {/* Intention note */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#EBE8E2] p-5">
          <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#7D7870] mb-3">Your Intention</h3>
          <p className="text-[11px] text-[#8C8478] leading-relaxed italic">
            Each bead carries a meaning. Together, they form your daily ritual — a quiet reminder worn on your wrist.
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {selectedSlots.filter(s => s).map((s, i) => (
              <span key={i} className="text-[8px] px-2 py-0.5 rounded-full bg-[#F5F3EF] text-[#7D7870] border border-[#EBE8E2]">
                {s?.name.split(' ')[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
