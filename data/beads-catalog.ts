// 100 trending beads catalog — sourced from 1688, Etsy, Amazon, TikTok Shop & Pinterest research (2025-2026)
// Targeting Western women aged 18-40, hybrid intention + aesthetic positioning

export interface Bead {
  id: number;
  category: string;
  subcategory: string;
  name: string;
  price: number;
  color: string;
  size: string;
  holeSize: string;
  meaning: string;
  aesthetic: string; // e.g. "Coquette", "Quiet Luxury"
  trending?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  image: string;
}

export const CATEGORIES = {
  Crystal: { label: "Crystal & Gemstone", color: "#C9B8A8", count: 0 },
  Glass: { label: "Art Glass & Lampwork", color: "#B8D4E3", count: 0 },
  Pearl: { label: "Pearls", color: "#F0EBE0", count: 0 },
  Ceramic: { label: "Ceramic & Porcelain", color: "#D4C4B5", count: 0 },
  Metal: { label: "14k Gold & Silver", color: "#E8D5A8", count: 0 },
  Charm: { label: "Charms & Symbols", color: "#E8C4C8", count: 0 },
  Letter: { label: "Letters & Words", color: "#E5DDD5", count: 0 },
  Novelty: { label: "Novelty & Trend", color: "#D8C8E0", count: 0 },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const BEADS: Bead[] = [
  // ============ CRYSTAL & GEMSTONE (20) ============
  { id: 1, category: "Crystal", subcategory: "Quartz", name: "Rose Quartz Round 8mm", price: 2.20, color: "Soft Pink", size: "8mm", holeSize: "1.0mm", meaning: "Self-love is the first love", aesthetic: "Clean Girl", bestseller: true, image: "/beads/rose-quartz.svg" },
  { id: 2, category: "Crystal", subcategory: "Quartz", name: "Smoky Quartz Faceted 8mm", price: 2.40, color: "Smoky Brown", size: "8mm", holeSize: "1.0mm", meaning: "Release what no longer serves", aesthetic: "Quiet Luxury", image: "/beads/smoky-quartz.svg" },
  { id: 3, category: "Crystal", subcategory: "Amethyst", name: "Amethyst Faceted Rondelle 6mm", price: 2.80, color: "Violet", size: "6mm", holeSize: "0.8mm", meaning: "Calming the mind, opening the spirit", aesthetic: "Witchy", trending: true, image: "/beads/amethyst.svg" },
  { id: 4, category: "Crystal", subcategory: "Amethyst", name: "Ametrine Equilibrium 8mm", price: 3.20, color: "Lavender × Honey", size: "8mm", holeSize: "1.0mm", meaning: "Balance — masculine & feminine in one", aesthetic: "Spiritual", trending: true, image: "/beads/ametrine.svg" },
  { id: 5, category: "Crystal", subcategory: "Tiger Eye", name: "Tiger's Eye Heishi Disc 4mm", price: 1.80, color: "Honey Brown", size: "4×2mm", holeSize: "0.8mm", meaning: "Courage, focus, prosperity", aesthetic: "Quiet Luxury", trending: true, image: "/beads/tigereye-heishi.svg" },
  { id: 6, category: "Crystal", subcategory: "Tiger Eye", name: "Tiger Eye Matte Round 8mm", price: 1.90, color: "Matte Bronze", size: "8mm", holeSize: "1.0mm", meaning: "Grounded confidence", aesthetic: "Minimalist", image: "/beads/tigereye-matte.svg" },
  { id: 7, category: "Crystal", subcategory: "Moonstone", name: "Rainbow Moonstone AAA 6mm", price: 4.50, color: "Iridescent White", size: "6mm", holeSize: "0.8mm", meaning: "New beginnings, intuition", aesthetic: "Celestial", bestseller: true, image: "/beads/moonstone.svg" },
  { id: 8, category: "Crystal", subcategory: "Moonstone", name: "Peach Moonstone Faceted 6mm", price: 3.80, color: "Peach Glow", size: "6mm", holeSize: "0.8mm", meaning: "Gentle nurturing energy", aesthetic: "Soft Girl", image: "/beads/peach-moonstone.svg" },
  { id: 9, category: "Crystal", subcategory: "Labradorite", name: "Labradorite Blue Flash 6mm", price: 3.50, color: "Steel Blue Flash", size: "6mm", holeSize: "0.8mm", meaning: "Magic in the mundane", aesthetic: "Celestial", trending: true, image: "/beads/labradorite.svg" },
  { id: 10, category: "Crystal", subcategory: "Lapis", name: "Lapis Lazuli Micro 3mm", price: 2.20, color: "Royal Blue × Gold", size: "3mm", holeSize: "0.5mm", meaning: "Truth, inner vision, royalty", aesthetic: "Quiet Luxury", trending: true, image: "/beads/lapis.svg" },
  { id: 11, category: "Crystal", subcategory: "Turquoise", name: "Raw Turquoise Nugget 10mm", price: 3.20, color: "Robin's Egg Blue", size: "10mm", holeSize: "1.2mm", meaning: "Health, protection, voice", aesthetic: "Coastal Cowgirl", image: "/beads/turquoise-nugget.svg" },
  { id: 12, category: "Crystal", subcategory: "Turquoise", name: "Howlite Dyed Turquoise 8mm", price: 1.40, color: "Aqua Blue", size: "8mm", holeSize: "1.0mm", meaning: "Calm communication", aesthetic: "Boho", image: "/beads/howlite.svg" },
  { id: 13, category: "Crystal", subcategory: "Onyx", name: "Matte Black Onyx Round 10mm", price: 2.60, color: "Jet Black", size: "10mm", holeSize: "1.2mm", meaning: "Strength, grounding, protection", aesthetic: "Mob Wife", trending: true, image: "/beads/onyx-matte.svg" },
  { id: 14, category: "Crystal", subcategory: "Onyx", name: "Black Onyx Faceted 6mm", price: 1.80, color: "Glossy Black", size: "6mm", holeSize: "0.8mm", meaning: "Power & focus", aesthetic: "Goth Glam", image: "/beads/onyx-faceted.svg" },
  { id: 15, category: "Crystal", subcategory: "Carnelian", name: "Carnelian Sunset Heishi 6mm", price: 2.10, color: "Burnt Orange", size: "6mm", holeSize: "0.8mm", meaning: "Creativity, vitality, motivation", aesthetic: "Mediterranean", trending: true, image: "/beads/carnelian.svg" },
  { id: 16, category: "Crystal", subcategory: "Citrine", name: "Citrine Faceted Round 8mm", price: 2.80, color: "Honey Yellow", size: "8mm", holeSize: "1.0mm", meaning: "Manifest abundance", aesthetic: "Spiritual", image: "/beads/citrine.svg" },
  { id: 17, category: "Crystal", subcategory: "Aventurine", name: "Green Aventurine Clover 10mm", price: 2.40, color: "Forest Green", size: "10mm", holeSize: "1.2mm", meaning: "Lucky in love & life", aesthetic: "Lucky Charms", trending: true, image: "/beads/aventurine-clover.svg" },
  { id: 18, category: "Crystal", subcategory: "Agate", name: "Moss Agate Smooth 6mm", price: 1.80, color: "Moss Green", size: "6mm", holeSize: "0.8mm", meaning: "Growth, abundance, new earth", aesthetic: "Cottagecore", trending: true, image: "/beads/moss-agate.svg" },
  { id: 19, category: "Crystal", subcategory: "Aquamarine", name: "Aquamarine Mini Faceted 4mm", price: 2.60, color: "Sea Glass", size: "4mm", holeSize: "0.6mm", meaning: "Serenity of the sea", aesthetic: "Mermaidcore", image: "/beads/aquamarine.svg" },
  { id: 20, category: "Crystal", subcategory: "Garnet", name: "Garnet Faceted Round 6mm", price: 2.40, color: "Deep Wine", size: "6mm", holeSize: "0.8mm", meaning: "Passion & devotion", aesthetic: "Mob Wife", image: "/beads/garnet.svg" },

  // ============ ART GLASS & LAMPWORK (15) ============
  { id: 21, category: "Glass", subcategory: "Murano", name: "Murano Floral Lampwork 10mm", price: 2.80, color: "Blush Garden", size: "10mm", holeSize: "1.2mm", meaning: "Blossom in every season", aesthetic: "Cottagecore", bestseller: true, image: "/beads/murano-floral.svg" },
  { id: 22, category: "Glass", subcategory: "Murano", name: "Iridescent AB Heart 10mm", price: 1.90, color: "Opal Pink", size: "10mm", holeSize: "1.0mm", meaning: "Self-love & emotional openness", aesthetic: "Coquette", trending: true, image: "/beads/iridescent-heart.svg" },
  { id: 23, category: "Glass", subcategory: "Millefiori", name: "Millefiori Mosaic Round 8mm", price: 1.20, color: "Multi-color", size: "8mm", holeSize: "1.0mm", meaning: "A thousand small joys", aesthetic: "Y2K Retro", image: "/beads/millefiori.svg" },
  { id: 24, category: "Glass", subcategory: "Czech", name: "Czech Bell Flower Frosted 8mm", price: 0.80, color: "Frosted Pastel", size: "8mm", holeSize: "1.0mm", meaning: "Gentle awakening", aesthetic: "Cottagecore", image: "/beads/czech-bell.svg" },
  { id: 25, category: "Glass", subcategory: "Lampwork", name: "Lampwork Mini Mushroom 12mm", price: 1.80, color: "Red & Cream", size: "12mm", holeSize: "1.2mm", meaning: "Magic in the mundane", aesthetic: "Cottagecore", trending: true, image: "/beads/mushroom.svg" },
  { id: 26, category: "Glass", subcategory: "Lampwork", name: "Lampwork Strawberry 10mm", price: 1.60, color: "Strawberry Red", size: "10mm", holeSize: "1.0mm", meaning: "Sweetness of summer", aesthetic: "Tomato Girl", image: "/beads/strawberry.svg" },
  { id: 27, category: "Glass", subcategory: "Lampwork", name: "Glass Cherry Pendant 12mm", price: 2.10, color: "Crimson + Green", size: "12mm", holeSize: "1.2mm", meaning: "Youthful sweetness", aesthetic: "Tomato Girl", trending: true, image: "/beads/cherry.svg" },
  { id: 28, category: "Glass", subcategory: "Evil Eye", name: "Turkish Evil Eye Round 8mm", price: 0.50, color: "Cobalt Blue", size: "8mm", holeSize: "1.0mm", meaning: "Protection from negativity", aesthetic: "Mediterranean", bestseller: true, image: "/beads/evil-eye.svg" },
  { id: 29, category: "Glass", subcategory: "Evil Eye", name: "Mini Evil Eye Heishi 5mm", price: 0.80, color: "Mixed Blues", size: "5mm", holeSize: "0.8mm", meaning: "Daily protection", aesthetic: "Boho", image: "/beads/evil-eye-mini.svg" },
  { id: 30, category: "Glass", subcategory: "Crackle", name: "Crackle Glass Ice 8mm", price: 0.60, color: "Ice Blue", size: "8mm", holeSize: "1.0mm", meaning: "Clarity through chaos", aesthetic: "Minimalist", image: "/beads/crackle.svg" },
  { id: 31, category: "Glass", subcategory: "Crystal", name: "Aurora Teardrop 8mm", price: 1.40, color: "Iridescent Clear", size: "8mm", holeSize: "1.0mm", meaning: "Light from within", aesthetic: "Mermaidcore", image: "/beads/aurora-teardrop.svg" },
  { id: 32, category: "Glass", subcategory: "Dichroic", name: "Dichroic Galaxy Bead 10mm", price: 1.80, color: "Galaxy Purple", size: "10mm", holeSize: "1.0mm", meaning: "You contain the cosmos", aesthetic: "Celestial", image: "/beads/dichroic.svg" },
  { id: 33, category: "Glass", subcategory: "Foil", name: "Gold Foil Glass 8mm", price: 1.20, color: "Gold Flecked", size: "8mm", holeSize: "1.0mm", meaning: "Inner gold", aesthetic: "Quiet Luxury", image: "/beads/gold-foil.svg" },
  { id: 34, category: "Glass", subcategory: "Cat Eye", name: "Cat Eye Glass 6mm", price: 0.40, color: "Mauve", size: "6mm", holeSize: "0.8mm", meaning: "See in the dark", aesthetic: "Y2K", image: "/beads/cat-eye.svg" },
  { id: 35, category: "Glass", subcategory: "Lampwork", name: "Glass Fish Frosted 12mm", price: 1.90, color: "Seafoam", size: "12mm", holeSize: "1.2mm", meaning: "Fluidity & abundance", aesthetic: "Mermaidcore", image: "/beads/glass-fish.svg" },

  // ============ PEARLS (10) ============
  { id: 36, category: "Pearl", subcategory: "Baroque", name: "Baroque Freshwater 12mm", price: 4.80, color: "Creamy White", size: "12mm", holeSize: "0.8mm", meaning: "Wisdom from imperfection", aesthetic: "Quiet Luxury", bestseller: true, image: "/beads/baroque-pearl.svg" },
  { id: 37, category: "Pearl", subcategory: "Baroque", name: "Tahitian Baroque 14mm", price: 6.50, color: "Peacock Black", size: "14mm", holeSize: "1.0mm", meaning: "Mystery of the sea", aesthetic: "Mermaidcore", image: "/beads/tahitian.svg" },
  { id: 38, category: "Pearl", subcategory: "Keshi", name: "Keshi Petal Pearl 10mm", price: 3.20, color: "Silver White", size: "10mm", holeSize: "0.8mm", meaning: "Organic beauty", aesthetic: "Artisanal", trending: true, image: "/beads/keshi.svg" },
  { id: 39, category: "Pearl", subcategory: "Round", name: "Akoya-Style Round 6mm", price: 1.80, color: "Pure White", size: "6mm", holeSize: "0.8mm", meaning: "Timeless grace", aesthetic: "Preppy", image: "/beads/akoya.svg" },
  { id: 40, category: "Pearl", subcategory: "Round", name: "Mallorca Pearl 6mm", price: 1.20, color: "Champagne Cream", size: "6mm", holeSize: "0.8mm", meaning: "Effortless elegance", aesthetic: "Clean Girl", image: "/beads/mallorca.svg" },
  { id: 41, category: "Pearl", subcategory: "Rice", name: "Rice Pearl White 5mm", price: 0.80, color: "Off-White", size: "5×7mm", holeSize: "0.6mm", meaning: "Quiet beauty", aesthetic: "Coquette", image: "/beads/rice-pearl.svg" },
  { id: 42, category: "Pearl", subcategory: "Coin", name: "Coin Pearl Flat 12mm", price: 2.80, color: "Ivory", size: "12mm", holeSize: "0.8mm", meaning: "Wholeness in stillness", aesthetic: "Quiet Luxury", image: "/beads/coin-pearl.svg" },
  { id: 43, category: "Pearl", subcategory: "Mini", name: "Seed Pearl Mini 3mm", price: 0.60, color: "White", size: "3mm", holeSize: "0.5mm", meaning: "Smallest joys matter", aesthetic: "Coquette", trending: true, image: "/beads/seed-pearl.svg" },
  { id: 44, category: "Pearl", subcategory: "Color", name: "Lavender Freshwater 7mm", price: 2.20, color: "Soft Lavender", size: "7mm", holeSize: "0.8mm", meaning: "Dreamlike calm", aesthetic: "Soft Girl", image: "/beads/lavender-pearl.svg" },
  { id: 45, category: "Pearl", subcategory: "Color", name: "Peach Freshwater 7mm", price: 2.20, color: "Blush Peach", size: "7mm", holeSize: "0.8mm", meaning: "Tender warmth", aesthetic: "Coquette", image: "/beads/peach-pearl.svg" },

  // ============ CERAMIC & PORCELAIN (10) ============
  { id: 46, category: "Ceramic", subcategory: "Chinoiserie", name: "Chinoiserie Blue & White 10mm", price: 1.20, color: "Cobalt × White", size: "10mm", holeSize: "1.5mm", meaning: "Heritage & timeless elegance", aesthetic: "Grandmillennial", bestseller: true, image: "/beads/chinoiserie.svg" },
  { id: 47, category: "Ceramic", subcategory: "Chinoiserie", name: "Azulejo Tile Round 10mm", price: 1.40, color: "Cobalt Pattern", size: "10mm", holeSize: "1.5mm", meaning: "Mediterranean heritage", aesthetic: "Tomato Girl", trending: true, image: "/beads/azulejo.svg" },
  { id: 48, category: "Ceramic", subcategory: "Cloisonne", name: "Cloisonné Floral Enamel 13mm", price: 2.40, color: "Multi Enamel", size: "13mm", holeSize: "1.5mm", meaning: "Crafted with patience", aesthetic: "Vintage Luxury", image: "/beads/cloisonne.svg" },
  { id: 49, category: "Ceramic", subcategory: "Painted", name: "Hand-Painted Rose 10mm", price: 1.60, color: "Cream + Rose", size: "10mm", holeSize: "1.0mm", meaning: "Garden of memories", aesthetic: "Cottagecore", image: "/beads/painted-rose.svg" },
  { id: 50, category: "Ceramic", subcategory: "Painted", name: "Amalfi Lemon 12mm", price: 1.80, color: "Lemon Yellow", size: "12mm", holeSize: "1.2mm", meaning: "Zest for life", aesthetic: "Tomato Girl", trending: true, image: "/beads/amalfi-lemon.svg" },
  { id: 51, category: "Ceramic", subcategory: "Matte", name: "Morandi Sage Matte 8mm", price: 1.10, color: "Sage Green", size: "8mm", holeSize: "1.0mm", meaning: "Stillness in nature", aesthetic: "Quiet Luxury", image: "/beads/sage-matte.svg" },
  { id: 52, category: "Ceramic", subcategory: "Matte", name: "Dusty Rose Matte 8mm", price: 1.10, color: "Dusty Rose", size: "8mm", holeSize: "1.0mm", meaning: "Femininity is power", aesthetic: "Soft Girl", image: "/beads/dusty-rose.svg" },
  { id: 53, category: "Ceramic", subcategory: "Matte", name: "Warm Cream Round 8mm", price: 1.10, color: "Warm Cream", size: "8mm", holeSize: "1.0mm", meaning: "The comfort of home", aesthetic: "Minimalist", image: "/beads/warm-cream.svg" },
  { id: 54, category: "Ceramic", subcategory: "Ribbon", name: "Petite Ceramic Bow 8mm", price: 1.40, color: "Cream + Gold", size: "8mm", holeSize: "1.0mm", meaning: "The gift of self", aesthetic: "Coquette", trending: true, image: "/beads/ceramic-bow.svg" },
  { id: 55, category: "Ceramic", subcategory: "Lucky", name: "Lucky Cat Maneki-neko 10mm", price: 1.80, color: "White + Red + Gold", size: "10mm", holeSize: "1.0mm", meaning: "Welcoming wealth", aesthetic: "Lucky Charms", trending: true, image: "/beads/lucky-cat.svg" },

  // ============ 14K GOLD & SILVER (15) ============
  { id: 56, category: "Metal", subcategory: "Gold Spacer", name: "14k GF Smooth Round 4mm", price: 0.80, color: "14k Gold", size: "4mm", holeSize: "1.0mm", meaning: "Pause between intentions", aesthetic: "Clean Girl", bestseller: true, image: "/beads/gold-round.svg" },
  { id: 57, category: "Metal", subcategory: "Gold Spacer", name: "14k GF Pumpkin Spacer 5mm", price: 0.90, color: "14k Gold", size: "5mm", holeSize: "1.0mm", meaning: "Texture in the everyday", aesthetic: "Quiet Luxury", trending: true, image: "/beads/pumpkin-spacer.svg" },
  { id: 58, category: "Metal", subcategory: "Gold Spacer", name: "14k GF Rondelle 3mm", price: 0.60, color: "14k Gold", size: "3mm", holeSize: "0.8mm", meaning: "Golden thread between chapters", aesthetic: "Minimalist", image: "/beads/gold-rondelle.svg" },
  { id: 59, category: "Metal", subcategory: "Gold Spacer", name: "14k GF Hollow Round 6mm", price: 1.10, color: "14k Gold", size: "6mm", holeSize: "1.0mm", meaning: "Lightness as luxury", aesthetic: "Quiet Luxury", image: "/beads/gold-hollow.svg" },
  { id: 60, category: "Metal", subcategory: "Gold Spacer", name: "14k GF Stardust 4mm", price: 1.20, color: "Sparkly Gold", size: "4mm", holeSize: "0.8mm", meaning: "Born of stars", aesthetic: "Celestial", image: "/beads/gold-stardust.svg" },
  { id: 61, category: "Metal", subcategory: "Gold Plated", name: "Chunky Gold Nugget 12mm", price: 2.40, color: "Yellow Gold", size: "12mm", holeSize: "1.5mm", meaning: "Unapologetic presence", aesthetic: "Mob Wife", trending: true, image: "/beads/gold-nugget.svg" },
  { id: 62, category: "Metal", subcategory: "Gold Plated", name: "Bubble Letter Initial 10mm", price: 3.20, color: "High-Shine Gold", size: "10mm", holeSize: "2.0mm", meaning: "Identity, celebrated", aesthetic: "Y2K", trending: true, image: "/beads/bubble-letter.svg" },
  { id: 63, category: "Metal", subcategory: "Gold Plated", name: "Gold Disc Initial 10mm", price: 2.80, color: "14K Gold", size: "10mm", holeSize: "1.5mm", meaning: "Stamp of self", aesthetic: "Personalized", image: "/beads/gold-disc.svg" },
  { id: 64, category: "Metal", subcategory: "Silver", name: "Sterling Silver Heishi 3mm", price: 0.90, color: "Sterling Silver", size: "3mm", holeSize: "0.8mm", meaning: "Precision in intention", aesthetic: "Modern", image: "/beads/silver-heishi.svg" },
  { id: 65, category: "Metal", subcategory: "Silver", name: "Sterling Cube 4mm", price: 1.20, color: "Sterling Silver", size: "4mm", holeSize: "1.0mm", meaning: "Clarity & angles", aesthetic: "Minimalist", image: "/beads/silver-cube.svg" },
  { id: 66, category: "Metal", subcategory: "Silver", name: "Navajo Burnished Silver 8mm", price: 2.10, color: "Antique Silver", size: "8mm", holeSize: "1.2mm", meaning: "Resilient spirit", aesthetic: "Coastal Cowgirl", image: "/beads/navajo-silver.svg" },
  { id: 67, category: "Metal", subcategory: "Rose Gold", name: "Rose Gold Round 4mm", price: 0.90, color: "Rose Gold", size: "4mm", holeSize: "1.0mm", meaning: "Soft warmth", aesthetic: "Coquette", image: "/beads/rose-gold.svg" },
  { id: 68, category: "Metal", subcategory: "Rose Gold", name: "Rose Gold Heart 8mm", price: 1.60, color: "Rose Gold", size: "8mm", holeSize: "1.0mm", meaning: "Tender love", aesthetic: "Coquette", image: "/beads/rose-gold-heart.svg" },
  { id: 69, category: "Metal", subcategory: "CZ", name: "CZ Pavé Disco Ball 8mm", price: 2.80, color: "Diamond CZ", size: "8mm", holeSize: "1.0mm", meaning: "Inner sparkle", aesthetic: "Quiet Luxury", trending: true, image: "/beads/cz-disco.svg" },
  { id: 70, category: "Metal", subcategory: "CZ", name: "Pavé Heart Charm 8mm", price: 2.40, color: "CZ + Gold", size: "8mm", holeSize: "1.0mm", meaning: "Love that sparkles", aesthetic: "Y2K", image: "/beads/cz-heart.svg" },

  // ============ CHARMS & SYMBOLS (10) ============
  { id: 71, category: "Charm", subcategory: "Animal", name: "Enamel Butterfly Charm 10mm", price: 0.80, color: "Electric Blue", size: "10mm", holeSize: "1.2mm", meaning: "Transformation & freedom", aesthetic: "Y2K Indie Sleaze", trending: true, image: "/beads/butterfly-blue.svg" },
  { id: 72, category: "Charm", subcategory: "Animal", name: "Pink Enamel Butterfly 10mm", price: 0.80, color: "Hot Pink", size: "10mm", holeSize: "1.2mm", meaning: "Joyful metamorphosis", aesthetic: "Coquette", image: "/beads/butterfly-pink.svg" },
  { id: 73, category: "Charm", subcategory: "Heart", name: "Red Acrylic Heart 10mm", price: 0.20, color: "Translucent Red", size: "10mm", holeSize: "1.5mm", meaning: "Worn on your sleeve", aesthetic: "Coquette", trending: true, image: "/beads/red-heart.svg" },
  { id: 74, category: "Charm", subcategory: "Heart", name: "Pink Crystal Heart 14mm", price: 0.90, color: "Soft Pink", size: "14mm", holeSize: "1.5mm", meaning: "Open-hearted", aesthetic: "Coquette", image: "/beads/pink-heart.svg" },
  { id: 75, category: "Charm", subcategory: "Star", name: "Gold Star Charm 8mm", price: 0.60, color: "Gold", size: "8mm", holeSize: "1.0mm", meaning: "Shine your own light", aesthetic: "Celestial", image: "/beads/gold-star.svg" },
  { id: 76, category: "Charm", subcategory: "Smiley", name: "Yellow Smiley Face 10mm", price: 0.30, color: "Sunshine Yellow", size: "10mm", holeSize: "1.5mm", meaning: "Spread joy", aesthetic: "Y2K Preppy", bestseller: true, image: "/beads/smiley.svg" },
  { id: 77, category: "Charm", subcategory: "Religious", name: "Saint Medallion Silver 8mm", price: 1.40, color: "Antique Silver", size: "8mm", holeSize: "1.0mm", meaning: "Divine protection", aesthetic: "Devotional", trending: true, image: "/beads/saint.svg" },
  { id: 78, category: "Charm", subcategory: "Zodiac", name: "Zodiac Coin Wood 12mm", price: 1.20, color: "Natural Wood", size: "12mm", holeSize: "1.5mm", meaning: "Aligned with the stars", aesthetic: "Spiritual", trending: true, image: "/beads/zodiac.svg" },
  { id: 79, category: "Charm", subcategory: "Lucky", name: "Mushroom Charm Glass 12mm", price: 1.20, color: "Red Cap White", size: "12mm", holeSize: "1.2mm", meaning: "Magic everywhere", aesthetic: "Cottagecore", image: "/beads/mushroom-charm.svg" },
  { id: 80, category: "Charm", subcategory: "Flower", name: "Daisy Enamel 10mm", price: 0.60, color: "White + Gold", size: "10mm", holeSize: "1.2mm", meaning: "Innocence & purity", aesthetic: "Cottagecore", image: "/beads/daisy.svg" },

  // ============ LETTERS & WORDS (10) ============
  { id: 81, category: "Letter", subcategory: "Alphabet", name: "Letter A — Frosted Cube 7mm", price: 0.10, color: "White + Black", size: "7mm", holeSize: "3.0mm", meaning: "Amor, Aura, Adventure", aesthetic: "Intention", bestseller: true, image: "/beads/letter-a.svg" },
  { id: 82, category: "Letter", subcategory: "Alphabet", name: "Letter B — Frosted Cube 7mm", price: 0.10, color: "White + Black", size: "7mm", holeSize: "3.0mm", meaning: "Bloom, Brave, Believe", aesthetic: "Intention", image: "/beads/letter-b.svg" },
  { id: 83, category: "Letter", subcategory: "Alphabet", name: "Letter L — Frosted Cube 7mm", price: 0.10, color: "White + Black", size: "7mm", holeSize: "3.0mm", meaning: "Love, Light, Lumina", aesthetic: "Intention", image: "/beads/letter-l.svg" },
  { id: 84, category: "Letter", subcategory: "Alphabet", name: "Letter M — Frosted Cube 7mm", price: 0.10, color: "White + Black", size: "7mm", holeSize: "3.0mm", meaning: "Magic, Muse, Mantra", aesthetic: "Intention", image: "/beads/letter-m.svg" },
  { id: 85, category: "Letter", subcategory: "Alphabet", name: "Letter S — Frosted Cube 7mm", price: 0.10, color: "White + Black", size: "7mm", holeSize: "3.0mm", meaning: "Soul, Soft, Stardust", aesthetic: "Intention", image: "/beads/letter-s.svg" },
  { id: 86, category: "Letter", subcategory: "Word", name: "Word 'CALM' Set", price: 0.40, color: "Cream + Black", size: "7mm", holeSize: "3.0mm", meaning: "Wear your peace", aesthetic: "Intention", trending: true, image: "/beads/word-calm.svg" },
  { id: 87, category: "Letter", subcategory: "Word", name: "Word 'LOVE' Set", price: 0.40, color: "Cream + Black", size: "7mm", holeSize: "3.0mm", meaning: "Universal language", aesthetic: "Intention", image: "/beads/word-love.svg" },
  { id: 88, category: "Letter", subcategory: "Word", name: "Word 'MUSE' Set", price: 0.40, color: "Cream + Black", size: "7mm", holeSize: "3.0mm", meaning: "You inspire", aesthetic: "Intention", image: "/beads/word-muse.svg" },
  { id: 89, category: "Letter", subcategory: "Symbol", name: "Heart Symbol Cube ♥", price: 0.20, color: "Blush + Gold", size: "7mm", holeSize: "3.0mm", meaning: "Wordless love", aesthetic: "Coquette", image: "/beads/symbol-heart.svg" },
  { id: 90, category: "Letter", subcategory: "Symbol", name: "Star Symbol Cube ★", price: 0.20, color: "Cream + Gold", size: "7mm", holeSize: "3.0mm", meaning: "Make a wish", aesthetic: "Celestial", image: "/beads/symbol-star.svg" },

  // ============ NOVELTY & TREND (10) ============
  { id: 91, category: "Novelty", subcategory: "Polymer Clay", name: "Polymer Clay Heishi Mix 6mm", price: 0.30, color: "Pastel Mix", size: "6mm", holeSize: "2.0mm", meaning: "Layered moments", aesthetic: "Y2K Preppy", bestseller: true, image: "/beads/clay-heishi.svg" },
  { id: 92, category: "Novelty", subcategory: "Polymer Clay", name: "Polymer Clay Fruit Slice", price: 0.20, color: "Lemon/Watermelon", size: "8mm", holeSize: "1.0mm", meaning: "Fruits of joy", aesthetic: "Y2K", image: "/beads/clay-fruit.svg" },
  { id: 93, category: "Novelty", subcategory: "Resin", name: "Resin Flower w/ Gold Foil 10mm", price: 0.80, color: "Cream + Gold", size: "10mm", holeSize: "1.2mm", meaning: "Frozen blossom", aesthetic: "Soft Luxury", trending: true, image: "/beads/resin-flower.svg" },
  { id: 94, category: "Novelty", subcategory: "Resin", name: "Leopard Print Resin 14mm", price: 1.20, color: "Amber + Black", size: "14mm", holeSize: "1.5mm", meaning: "Wild intuition", aesthetic: "Mob Wife", trending: true, image: "/beads/leopard.svg" },
  { id: 95, category: "Novelty", subcategory: "Acrylic", name: "Frosted Pastel Bow 12mm", price: 0.90, color: "Baby Pink", size: "12×15mm", holeSize: "1.5mm", meaning: "Femininity, gracefully", aesthetic: "Coquette Balletcore", trending: true, image: "/beads/pastel-bow.svg" },
  { id: 96, category: "Novelty", subcategory: "Acrylic", name: "Mood Color-Change 6mm", price: 0.60, color: "Thermo-Reactive", size: "6mm", holeSize: "1.0mm", meaning: "Vibe check", aesthetic: "90s Nostalgia", image: "/beads/mood.svg" },
  { id: 97, category: "Novelty", subcategory: "Wood", name: "Sandalwood Engraved Star 6mm", price: 0.50, color: "Walnut Wood", size: "6mm", holeSize: "1.0mm", meaning: "Earth-connected", aesthetic: "Coastal Cowgirl", image: "/beads/wood-star.svg" },
  { id: 98, category: "Novelty", subcategory: "Shell", name: "Abalone Shell Heishi 6mm", price: 0.90, color: "Iridescent Shell", size: "6mm", holeSize: "1.0mm", meaning: "Ocean's emotional balance", aesthetic: "Mermaidcore", trending: true, image: "/beads/abalone.svg" },
  { id: 99, category: "Novelty", subcategory: "Glitter", name: "Glitter Crystal 6mm", price: 0.40, color: "Rainbow Prism", size: "6mm", holeSize: "1.0mm", meaning: "High-vibration joy", aesthetic: "Dopamine", image: "/beads/glitter.svg" },
  { id: 100, category: "Novelty", subcategory: "Acrylic", name: "Chunky Link Matte 14mm", price: 0.80, color: "Matte Cream", size: "14mm", holeSize: "2.0mm", meaning: "Bold but soft", aesthetic: "Modern Gen Z", image: "/beads/chunky-link.svg" },
];

// Helper getters
export const getBeadsByCategory = (cat: string) =>
  cat === "All" ? BEADS : BEADS.filter(b => b.category === cat);

export const getTrending = () => BEADS.filter(b => b.trending);
export const getBestsellers = () => BEADS.filter(b => b.bestseller);
export const getCategoryCount = (cat: string) =>
  cat === "All" ? BEADS.length : BEADS.filter(b => b.category === cat).length;

export const CORDS = [
  { id: 1, name: "Stainless Steel Wire", type: "Non-elastic", thickness: "0.45mm", length: "18cm", color: "Silver/Gold/Rose Gold", price: 2.50, description: "Durable, holds heavy beads. Clasp required." },
  { id: 2, name: "Crystal Elastic Cord", type: "Elastic (TPU)", thickness: "0.5mm", length: "18cm", color: "Clear Transparent", price: 1.00, description: "Stretch fit, no clasp needed. Best for 8mm beads." },
  { id: 3, name: "Snake Chain Base", type: "Chain", thickness: "3.0mm", length: "18cm", color: "Gold/Rose Gold/Silver", price: 3.50, description: "Pandora-style. Only fits large-hole beads (≥2mm)." },
];
