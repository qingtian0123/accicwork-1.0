import DIYEditor from "@/components/DIYEditor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F5F3EF]">
      {/* Header */}
      <header className="w-full py-12 flex flex-col items-center">
        <h1 className="text-4xl font-extralight tracking-[0.3em] uppercase text-[#3A3A3A] mb-2">
          Lumina Beads
        </h1>
        <p className="text-[#A69F96] text-sm tracking-widest uppercase">
          Curated Daily • Crafted by You
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl flex flex-col items-center pb-24">
        <DIYEditor />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#EBE8E2] text-center">
        <p className="text-[10px] text-[#D4CFC7] tracking-widest uppercase italic">
          High-end Aesthetic • Worldwide Shipping • Ethical Sourcing
        </p>
      </footer>
    </div>
  );
}
