"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BEADS, CATEGORIES, type CategoryKey, type Bead } from "@/data/beads-catalog";

type SortKey = "trending" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("trending");
  const [filter, setFilter] = useState<"all" | "trending" | "bestseller" | "new">("all");
  const [selectedBead, setSelectedBead] = useState<Bead | null>(null);

  const filtered = useMemo(() => {
    let list = activeCategory === "All" ? [...BEADS] : BEADS.filter(b => b.category === activeCategory);
    if (filter === "trending") list = list.filter(b => b.trending);
    if (filter === "bestseller") list = list.filter(b => b.bestseller);
    if (filter === "new") list = list.filter(b => b.newArrival);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.color.toLowerCase().includes(q) ||
        b.aesthetic.toLowerCase().includes(q) ||
        b.meaning.toLowerCase().includes(q) ||
        b.subcategory.toLowerCase().includes(q)
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => Number(!!b.trending) - Number(!!a.trending));
    return list;
  }, [activeCategory, search, sort, filter]);

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      {/* Nav */}
      <nav className="w-full py-6 px-8 flex items-center justify-between border-b border-[#EBE8E2] bg-white/50 backdrop-blur sticky top-0 z-30">
        <Link href="/" className="text-[14px] tracking-[0.3em] uppercase text-[#3A3A3A] font-light">
          Lumina Beads
        </Link>
        <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-[#7D7870]">
          <Link href="/" className="hover:text-[#3A3A3A] transition-colors">Design</Link>
          <Link href="/shop" className="text-[#3A3A3A] border-b border-[#C4B5A5]">Shop All ({BEADS.length})</Link>
          <Link href="/" className="hover:text-[#3A3A3A] transition-colors">Story</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="w-full py-12 text-center px-6">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#B8A99A] mb-3">
          The Collection
        </p>
        <h1 className="text-4xl font-extralight tracking-[0.15em] uppercase text-[#3A3A3A] mb-3">
          100 Beads, Infinite Stories
        </h1>
        <p className="text-[#8C8478] text-sm tracking-wide max-w-2xl mx-auto leading-relaxed">
          Hand-curated from global trends — every bead carries a meaning, an aesthetic, and a moment.<br/>
          From Coquette bows to Quiet Luxury heishi, find what whispers to you.
        </p>
      </header>

      {/* Filters */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-2xl border border-[#EBE8E2] p-5 space-y-4">
          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <input
              type="text"
              placeholder="Search beads, colors, aesthetics, meanings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-[12px] text-[#3A3A3A] bg-[#F5F3EF] border border-[#EBE8E2] rounded-full focus:outline-none focus:border-[#C4B5A5] placeholder:text-[#A69F96]"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="px-4 py-2.5 text-[11px] tracking-wider uppercase text-[#5A5A5A] bg-[#F5F3EF] border border-[#EBE8E2] rounded-full focus:outline-none cursor-pointer"
            >
              <option value="trending">Trending First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {/* Quick filters */}
          <div className="flex gap-2 flex-wrap">
            {([
              { key: "all", label: `All ${BEADS.length}` },
              { key: "trending", label: `Trending ${BEADS.filter(b => b.trending).length}` },
              { key: "bestseller", label: `Bestsellers ${BEADS.filter(b => b.bestseller).length}` },
            ] as const).map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full transition-colors
                  ${filter === f.key ? 'bg-[#3A3A3A] text-white' : 'bg-[#F5F3EF] text-[#7D7870] hover:bg-[#EBE8E2]'}
                `}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Category tabs */}
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full transition-colors
                ${activeCategory === "All" ? 'bg-[#C4B5A5] text-white' : 'bg-white border border-[#EBE8E2] text-[#7D7870] hover:border-[#C4B5A5]'}
              `}
            >
              All Categories
            </button>
            {(Object.keys(CATEGORIES) as CategoryKey[]).map((cat) => {
              const count = BEADS.filter(b => b.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5
                    ${activeCategory === cat ? 'bg-[#C4B5A5] text-white' : 'bg-white border border-[#EBE8E2] text-[#7D7870] hover:border-[#C4B5A5]'}
                  `}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CATEGORIES[cat].color }}></span>
                  {CATEGORIES[cat].label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-4 flex justify-between items-center text-[11px] text-[#A69F96] tracking-wider uppercase">
          <span>Showing {filtered.length} of {BEADS.length} beads</span>
          <Link href="/" className="text-[#C4B5A5] hover:text-[#3A3A3A] transition-colors">
            ← Back to Design Studio
          </Link>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#A69F96] text-sm">
            No beads match your filters. Try clearing the search.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((bead) => {
              const catColor = CATEGORIES[bead.category as CategoryKey]?.color || "#F5F3EF";
              return (
                <div
                  key={bead.id}
                  onClick={() => setSelectedBead(bead)}
                  className="group bg-white rounded-2xl border border-[#EBE8E2] p-3 cursor-pointer hover:shadow-md hover:border-[#C4B5A5] transition-all duration-200"
                >
                  <div
                    className="relative aspect-square rounded-xl overflow-hidden mb-3 flex items-center justify-center"
                    style={{ backgroundColor: catColor }}
                  >
                    <div className="text-center px-3">
                      <div className="text-[10px] text-[#5A5A5A] font-medium leading-tight">
                        {bead.name.split(' ').slice(0, -1).join(' ')}
                      </div>
                      <div className="text-[9px] text-[#7D7870] mt-1 italic">{bead.size}</div>
                    </div>
                    {bead.trending && (
                      <span className="absolute top-2 right-2 text-[8px] bg-[#E8B4B8] text-white px-2 py-0.5 rounded-full tracking-wider">HOT</span>
                    )}
                    {bead.bestseller && !bead.trending && (
                      <span className="absolute top-2 right-2 text-[8px] bg-[#C4B5A5] text-white px-2 py-0.5 rounded-full tracking-wider">★ BEST</span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[11px] text-[#3A3A3A] font-medium leading-tight line-clamp-2 min-h-[28px]">
                      {bead.name}
                    </h3>
                    <p className="text-[9px] text-[#A69F96] tracking-wider uppercase">
                      {bead.aesthetic}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[12px] text-[#3A3A3A] font-medium">${bead.price.toFixed(2)}</span>
                      <span className="text-[8px] text-[#A69F96]">hole {bead.holeSize}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Detail Modal */}
      {selectedBead && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedBead(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="aspect-square flex items-center justify-center p-12"
                style={{ backgroundColor: CATEGORIES[selectedBead.category as CategoryKey]?.color }}
              >
                <div className="text-center">
                  <div className="text-[14px] text-[#3A3A3A] font-light">{selectedBead.name}</div>
                  <div className="text-[11px] text-[#5A5A5A] mt-2 italic">{selectedBead.size}</div>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8A99A]">
                    {CATEGORIES[selectedBead.category as CategoryKey]?.label}
                  </span>
                  {selectedBead.trending && <span className="text-[8px] bg-[#E8B4B8] text-white px-2 py-0.5 rounded-full">HOT</span>}
                </div>
                <h2 className="text-xl font-light text-[#3A3A3A] mb-2">{selectedBead.name}</h2>
                <p className="text-[12px] text-[#7D7870] italic mb-4">&ldquo;{selectedBead.meaning}&rdquo;</p>

                <div className="space-y-2 text-[11px] text-[#5A5A5A] mb-6">
                  <div className="flex justify-between border-b border-[#EBE8E2] pb-1">
                    <span className="text-[#A69F96]">Aesthetic</span>
                    <span>{selectedBead.aesthetic}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE8E2] pb-1">
                    <span className="text-[#A69F96]">Color</span>
                    <span>{selectedBead.color}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE8E2] pb-1">
                    <span className="text-[#A69F96]">Size</span>
                    <span>{selectedBead.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE8E2] pb-1">
                    <span className="text-[#A69F96]">Hole</span>
                    <span>{selectedBead.holeSize}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE8E2] pb-1">
                    <span className="text-[#A69F96]">Subcategory</span>
                    <span>{selectedBead.subcategory}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-light text-[#3A3A3A]">${selectedBead.price.toFixed(2)}</span>
                  <Link
                    href="/"
                    className="px-6 py-2.5 bg-[#C4B5A5] text-white rounded-full text-[10px] tracking-[0.2em] uppercase hover:bg-[#B8A99A] transition-colors"
                  >
                    Add to Design
                  </Link>
                </div>
                <button
                  onClick={() => setSelectedBead(null)}
                  className="mt-3 text-[9px] tracking-wider uppercase text-[#A69F96] hover:text-[#3A3A3A] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#EBE8E2] text-center">
        <p className="text-[10px] text-[#D4CFC7] tracking-widest uppercase italic mb-2">
          Wear Your Intention &middot; Carry Your Calm
        </p>
        <p className="text-[9px] text-[#C4B5A5] tracking-wider">
          {BEADS.length} curated beads &middot; Refreshed daily &middot; Worldwide shipping
        </p>
      </footer>
    </div>
  );
}
