import DIYEditor from "@/components/DIYEditor";
import Link from "next/link";
import { BEADS, CATEGORIES, type CategoryKey } from "@/data/beads-catalog";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F5F3EF]">
      {/* Nav */}
      <nav className="w-full py-6 px-8 flex items-center justify-between border-b border-[#EBE8E2]">
        <Link href="/" className="text-[14px] tracking-[0.3em] uppercase text-[#3A3A3A] font-light">
          Lumina Beads
        </Link>
        <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-[#7D7870]">
          <Link href="/" className="text-[#3A3A3A] border-b border-[#C4B5A5]">Design</Link>
          <Link href="/shop" className="hover:text-[#3A3A3A] transition-colors">Shop All ({BEADS.length})</Link>
          <a href="#story" className="hover:text-[#3A3A3A] transition-colors">Story</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="w-full py-16 flex flex-col items-center">
        <p className="text-[11px] tracking-[0.5em] uppercase text-[#B8A99A] mb-4">
          {BEADS.length} Trending Beads &middot; Refreshed Daily &middot; Worldwide
        </p>
        <h1 className="text-5xl font-extralight tracking-[0.25em] uppercase text-[#3A3A3A] mb-4">
          Lumina Beads
        </h1>
        <p className="text-[#8C8478] text-base tracking-wide max-w-md text-center leading-relaxed">
          Wear your intention. Carry your calm.<br/>
          Design a bracelet that tells <em>your</em> story — one bead at a time.
        </p>
        <Link
          href="/shop"
          className="mt-8 px-8 py-3 border border-[#C4B5A5] text-[#7D7870] rounded-full text-[10px] tracking-[0.3em] uppercase hover:bg-[#C4B5A5] hover:text-white transition-all"
        >
          Browse All {BEADS.length} Beads →
        </Link>
      </header>

      {/* Value Props */}
      <section className="w-full max-w-4xl grid grid-cols-3 gap-8 px-6 pb-12 text-center">
        <div className="flex flex-col items-center">
          <span className="text-[#C4B5A5] text-2xl mb-2">&#9671;</span>
          <h3 className="text-[13px] tracking-widest uppercase text-[#7D7870] mb-1">Real Materials</h3>
          <p className="text-[11px] text-[#A69F96] leading-relaxed">
            0.45mm stainless steel wire.<br/>8mm genuine stone beads.<br/>What you see is what you get.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#C4B5A5] text-2xl mb-2">&#10047;</span>
          <h3 className="text-[13px] tracking-widest uppercase text-[#7D7870] mb-1">Intentional Design</h3>
          <p className="text-[11px] text-[#A69F96] leading-relaxed">
            Every crystal carries energy.<br/>Every color holds meaning.<br/>Your bracelet, your ritual.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#C4B5A5] text-2xl mb-2">&#10023;</span>
          <h3 className="text-[13px] tracking-widest uppercase text-[#7D7870] mb-1">Artisan Crafted</h3>
          <p className="text-[11px] text-[#A69F96] leading-relaxed">
            Hand-strung with care.<br/>Waterproof & adventure-ready.<br/>Made to last, made for you.
          </p>
        </div>
      </section>

      {/* Main Editor */}
      <main className="w-full max-w-7xl flex flex-col items-center pb-12">
        <DIYEditor />
      </main>

      {/* Categories overview */}
      <section className="w-full max-w-6xl px-6 pb-16">
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#B8A99A] mb-2">Curated From Global Trends</p>
          <h2 className="text-2xl font-extralight tracking-[0.15em] uppercase text-[#3A3A3A]">
            8 Categories &middot; {BEADS.length} Beads
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.keys(CATEGORIES) as CategoryKey[]).map((cat) => {
            const count = BEADS.filter(b => b.category === cat).length;
            const trending = BEADS.filter(b => b.category === cat && b.trending).length;
            return (
              <Link
                key={cat}
                href={`/shop?cat=${cat}`}
                className="group bg-white rounded-2xl border border-[#EBE8E2] p-5 hover:border-[#C4B5A5] hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full mb-3 flex items-center justify-center"
                  style={{ backgroundColor: CATEGORIES[cat].color }}
                ></div>
                <h3 className="text-[13px] text-[#3A3A3A] font-medium mb-1">{CATEGORIES[cat].label}</h3>
                <p className="text-[10px] text-[#A69F96]">
                  {count} beads
                  {trending > 0 && <span className="text-[#E8B4B8] ml-2">· {trending} hot</span>}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-[#3A3A3A] text-white rounded-full text-[10px] tracking-[0.3em] uppercase hover:bg-[#5A5A5A] transition-colors"
          >
            Shop the Full Collection
          </Link>
        </div>
      </section>

      {/* Specs Section */}
      <section className="w-full max-w-4xl px-6 pb-16">
        <div className="bg-white rounded-3xl border border-[#EBE8E2] p-8">
          <h2 className="text-[13px] tracking-widest uppercase text-[#7D7870] mb-6 text-center">
            What Goes Into Your Bracelet
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-[#B8A99A] mb-3">Cord & Wire</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">Stainless Steel Wire (coated)</span>
                  <span className="text-[11px] text-[#A69F96]">0.45mm &middot; 50m roll</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">Crystal Elastic Cord (TPU)</span>
                  <span className="text-[11px] text-[#A69F96]">0.5mm &middot; 5m pack</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">Snake Chain Base (copper-plated)</span>
                  <span className="text-[11px] text-[#A69F96]">3mm &middot; 18cm length</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-[#5A5A5A]">Nylon Fishing Line</span>
                  <span className="text-[11px] text-[#A69F96]">0.2mm &middot; 100m roll</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-[#B8A99A] mb-3">Bead Sizes</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">6mm beads</span>
                  <span className="text-[11px] text-[#A69F96]">hole &ge; 0.8mm &middot; 20 per bracelet</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">8mm beads</span>
                  <span className="text-[11px] text-[#A69F96]">hole &ge; 1.0mm &middot; 16 per bracelet</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#EBE8E2] pb-2">
                  <span className="text-[12px] text-[#5A5A5A]">10mm beads</span>
                  <span className="text-[11px] text-[#A69F96]">hole &ge; 1.2mm &middot; 13 per bracelet</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-[#5A5A5A]">Pandora-style large hole</span>
                  <span className="text-[11px] text-[#A69F96]">hole &ge; 3.5mm &middot; snake chain only</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-[10px] text-[#D4CFC7] mt-6 italic">
            Standard bracelet inner circumference: 18cm (7&quot;) &middot; Adjustable clasp included &middot; All materials sourced from certified 1688 suppliers
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#EBE8E2] text-center">
        <p className="text-[10px] text-[#D4CFC7] tracking-widest uppercase italic mb-2">
          Wear Your Intention &middot; Carry Your Calm
        </p>
        <p className="text-[9px] text-[#C4B5A5] tracking-wider">
          Ethically Sourced &middot; Worldwide Shipping &middot; Waterproof &amp; Adventure-Ready
        </p>
      </footer>
    </div>
  );
}