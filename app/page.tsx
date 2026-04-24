import DIYEditor from "@/components/DIYEditor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F5F3EF]">
      {/* Hero */}
      <header className="w-full py-16 flex flex-col items-center">
        <p className="text-[11px] tracking-[0.5em] uppercase text-[#B8A99A] mb-4">
          Healing Crystals &middot; Artisan Glass &middot; 14k Gold
        </p>
        <h1 className="text-5xl font-extralight tracking-[0.25em] uppercase text-[#3A3A3A] mb-4">
          Lumina Beads
        </h1>
        <p className="text-[#8C8478] text-base tracking-wide max-w-md text-center leading-relaxed">
          Wear your intention. Carry your calm.<br/>
          Design a bracelet that tells <em>your</em> story — one bead at a time.
        </p>
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