export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  description: string;
  material: string;
  metalType: string;
  weight?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
    productCount: 156,
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    productCount: 234,
  },
  {
    id: "pendants",
    name: "Pendants",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    productCount: 189,
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    productCount: 145,
  },
  {
    id: "anklets",
    name: "Anklets",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    productCount: 78,
  },
  {
    id: "mens",
    name: "Men's Jewellery",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
    productCount: 92,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Eternal Love Diamond Ring",
    price: 24999,
    originalPrice: 32999,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop",
    ],
    category: "rings",
    subcategory: "engagement",
    rating: 4.8,
    reviews: 234,
    description: "An exquisite diamond ring featuring a brilliant-cut center stone, symbolizing eternal love and commitment. Crafted with precision and passion.",
    material: "18K White Gold with Diamond",
    metalType: "Gold",
    weight: "3.2g",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Rose Petal Drop Earrings",
    price: 8999,
    originalPrice: 11999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    category: "earrings",
    rating: 4.6,
    reviews: 189,
    description: "Delicate rose-inspired drop earrings that capture the essence of timeless beauty. Perfect for special occasions.",
    material: "925 Sterling Silver with Rose Gold Plating",
    metalType: "Silver",
    weight: "4.5g",
    isNew: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Celestial Moon Pendant",
    price: 12999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    category: "pendants",
    rating: 4.9,
    reviews: 312,
    description: "A mesmerizing crescent moon pendant adorned with sparkling crystals. Chain included.",
    material: "14K Gold with Cubic Zirconia",
    metalType: "Gold",
    weight: "2.8g",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Infinity Love Bracelet",
    price: 6499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
    category: "bracelets",
    rating: 4.7,
    reviews: 156,
    description: "An elegant infinity bracelet representing endless love and connection. Adjustable chain.",
    material: "Sterling Silver with Gold Accents",
    metalType: "Silver",
    weight: "5.2g",
    inStock: true,
  },
  {
    id: "5",
    name: "Heritage Gold Anklet",
    price: 4999,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
    category: "anklets",
    rating: 4.5,
    reviews: 89,
    description: "Traditional anklet with modern elegance. Features delicate charms and adjustable length.",
    material: "Gold Plated Brass",
    metalType: "Gold",
    weight: "6.1g",
    isNew: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Royal Crest Men's Ring",
    price: 15999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop",
    category: "mens",
    rating: 4.8,
    reviews: 145,
    description: "A bold statement ring for the modern gentleman. Features intricate detailing and premium finish.",
    material: "Stainless Steel with Black Onyx",
    metalType: "Steel",
    weight: "8.5g",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "7",
    name: "Vintage Pearl Stud Earrings",
    price: 3999,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
    category: "earrings",
    rating: 4.4,
    reviews: 267,
    description: "Classic freshwater pearl studs set in sterling silver. Timeless elegance for every occasion.",
    material: "Sterling Silver with Freshwater Pearls",
    metalType: "Silver",
    weight: "2.4g",
    inStock: true,
  },
  {
    id: "8",
    name: "Diamond Tennis Bracelet",
    price: 45999,
    originalPrice: 55999,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
    category: "bracelets",
    rating: 4.9,
    reviews: 78,
    description: "Luxurious tennis bracelet featuring brilliant-cut diamonds in a classic setting.",
    material: "18K White Gold with Diamonds",
    metalType: "Gold",
    weight: "12.3g",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "9",
    name: "Minimalist Bar Pendant",
    price: 2499,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop",
    category: "pendants",
    rating: 4.3,
    reviews: 198,
    description: "Sleek and modern bar pendant. Perfect for layering or wearing solo.",
    material: "14K Gold Vermeil",
    metalType: "Gold",
    weight: "1.8g",
    inStock: true,
  },
  {
    id: "10",
    name: "Sapphire Halo Ring",
    price: 35999,
    originalPrice: 42999,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop",
    category: "rings",
    rating: 4.8,
    reviews: 156,
    description: "Stunning blue sapphire surrounded by a halo of brilliant diamonds.",
    material: "18K White Gold with Sapphire & Diamonds",
    metalType: "Gold",
    weight: "4.1g",
    isNew: true,
    inStock: true,
  },
  {
    id: "11",
    name: "Bohemian Charm Anklet",
    price: 1999,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
    category: "anklets",
    rating: 4.2,
    reviews: 134,
    description: "Free-spirited anklet with multiple charms and beads. Adjustable design.",
    material: "Gold Plated with Semi-precious Stones",
    metalType: "Gold",
    weight: "4.2g",
    inStock: true,
  },
  {
    id: "12",
    name: "Executive Men's Chain",
    price: 18999,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop",
    category: "mens",
    rating: 4.6,
    reviews: 112,
    description: "Sophisticated chain for the discerning gentleman. Classic Cuban link design.",
    material: "Sterling Silver with Rhodium Plating",
    metalType: "Silver",
    weight: "25g",
    inStock: true,
  },
];

export const bestSellers = products.filter((p) => p.isBestSeller);
export const newArrivals = products.filter((p) => p.isNew);
export const underPrice = products.filter((p) => p.price < 5000);
