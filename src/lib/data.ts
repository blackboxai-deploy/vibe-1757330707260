import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cleansers',
    name: 'Cleansers',
    description: 'Gentle cleansers for all skin types',
    image: 'https://placehold.co/400x300?text=Luxurious+cream+cleanser+bottle+with+natural+botanical+ingredients',
    productCount: 12
  },
  {
    id: 'moisturizers',
    name: 'Moisturizers',
    description: 'Hydrating creams and lotions',
    image: 'https://placehold.co/400x300?text=Premium+moisturizer+jar+with+elegant+minimalist+packaging',
    productCount: 18
  },
  {
    id: 'serums',
    name: 'Serums',
    description: 'Targeted treatment serums',
    image: 'https://placehold.co/400x300?text=Sophisticated+serum+dropper+bottle+with+scientific+precision',
    productCount: 15
  },
  {
    id: 'sunscreens',
    name: 'Sun Protection',
    description: 'Daily sun protection essentials',
    image: 'https://placehold.co/400x300?text=Modern+sunscreen+tube+with+beach+and+UV+protection+theme',
    productCount: 8
  }
];

export const products: Product[] = [
  // Cleansers
  {
    id: 'cleanser-1',
    name: 'Gentle Foaming Cleanser',
    description: 'A mild, sulfate-free cleanser that removes makeup and impurities without stripping the skin.',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://placehold.co/500x500?text=Elegant+foaming+cleanser+pump+bottle+with+spa+like+design',
    category: 'cleansers',
    inStock: true,
    rating: 4.5,
    reviews: 127,
    benefits: ['Removes makeup', 'Gentle on skin', 'Sulfate-free'],
    skinType: ['Normal', 'Sensitive', 'Dry']
  },
  {
    id: 'cleanser-2',
    name: 'Purifying Clay Cleanser',
    description: 'Deep-cleansing clay formula that detoxifies pores and controls excess oil.',
    price: 32.00,
    image: 'https://placehold.co/500x500?text=Sophisticated+clay+cleanser+tube+with+natural+earth+tones',
    category: 'cleansers',
    inStock: true,
    rating: 4.3,
    reviews: 89,
    benefits: ['Deep cleansing', 'Oil control', 'Pore refining'],
    skinType: ['Oily', 'Combination']
  },
  {
    id: 'cleanser-3',
    name: 'Micellar Water',
    description: 'No-rinse micellar water that gently removes makeup and cleanses skin in one step.',
    price: 18.50,
    image: 'https://placehold.co/500x500?text=Clean+micellar+water+bottle+with+fresh+modern+minimalist+design',
    category: 'cleansers',
    inStock: true,
    rating: 4.7,
    reviews: 203,
    benefits: ['No-rinse formula', 'Makeup removal', 'Travel-friendly'],
    skinType: ['All skin types']
  },

  // Moisturizers
  {
    id: 'moisturizer-1',
    name: 'Hydrating Day Cream',
    description: 'Lightweight daily moisturizer with hyaluronic acid and SPF 15 protection.',
    price: 42.00,
    originalPrice: 48.00,
    image: 'https://placehold.co/500x500?text=Premium+day+cream+jar+with+elegant+white+and+gold+packaging',
    category: 'moisturizers',
    inStock: true,
    rating: 4.6,
    reviews: 156,
    benefits: ['24-hour hydration', 'SPF protection', 'Anti-aging'],
    skinType: ['Normal', 'Dry', 'Mature']
  },
  {
    id: 'moisturizer-2',
    name: 'Night Repair Cream',
    description: 'Rich, nourishing night cream with peptides and retinol for overnight skin renewal.',
    price: 56.00,
    image: 'https://placehold.co/500x500?text=Luxurious+night+cream+jar+with+sophisticated+dark+packaging',
    category: 'moisturizers',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    benefits: ['Overnight repair', 'Anti-aging', 'Firming'],
    skinType: ['Mature', 'Normal', 'Dry']
  },
  {
    id: 'moisturizer-3',
    name: 'Oil-Free Gel Moisturizer',
    description: 'Lightweight, oil-free gel that hydrates without clogging pores.',
    price: 28.00,
    image: 'https://placehold.co/500x500?text=Fresh+gel+moisturizer+pump+with+clean+aqua+blue+design',
    category: 'moisturizers',
    inStock: true,
    rating: 4.4,
    reviews: 142,
    benefits: ['Oil-free', 'Non-comedogenic', 'Lightweight'],
    skinType: ['Oily', 'Combination', 'Acne-prone']
  },

  // Serums
  {
    id: 'serum-1',
    name: 'Vitamin C Brightening Serum',
    description: 'Potent 20% vitamin C serum that brightens skin and reduces dark spots.',
    price: 68.00,
    originalPrice: 75.00,
    image: 'https://placehold.co/500x500?text=Premium+vitamin+C+serum+dropper+bottle+with+orange+accents',
    category: 'serums',
    inStock: true,
    rating: 4.7,
    reviews: 234,
    benefits: ['Brightening', 'Dark spot reduction', 'Antioxidant protection'],
    skinType: ['All skin types']
  },
  {
    id: 'serum-2',
    name: 'Hyaluronic Acid Serum',
    description: 'Intense hydration serum with multiple molecular weights of hyaluronic acid.',
    price: 45.00,
    image: 'https://placehold.co/500x500?text=Elegant+hyaluronic+acid+serum+with+clear+glass+dropper+bottle',
    category: 'serums',
    inStock: true,
    rating: 4.9,
    reviews: 312,
    benefits: ['Deep hydration', 'Plumping effect', 'All-day moisture'],
    skinType: ['Dry', 'Dehydrated', 'Mature']
  },
  {
    id: 'serum-3',
    name: 'Retinol Anti-Aging Serum',
    description: 'Gentle retinol serum that reduces fine lines and improves skin texture.',
    price: 52.00,
    image: 'https://placehold.co/500x500?text=Sophisticated+retinol+serum+bottle+with+medical+grade+packaging',
    category: 'serums',
    inStock: true,
    rating: 4.5,
    reviews: 87,
    benefits: ['Anti-aging', 'Texture improvement', 'Fine line reduction'],
    skinType: ['Mature', 'Normal']
  },

  // Sunscreens
  {
    id: 'sunscreen-1',
    name: 'Broad Spectrum SPF 50',
    description: 'Lightweight, non-greasy sunscreen with zinc oxide and titanium dioxide.',
    price: 35.00,
    image: 'https://placehold.co/500x500?text=Modern+sunscreen+tube+with+beach+and+sun+protection+design',
    category: 'sunscreens',
    inStock: true,
    rating: 4.6,
    reviews: 178,
    benefits: ['Broad spectrum', 'Water resistant', 'Non-comedogenic'],
    skinType: ['All skin types']
  },
  {
    id: 'sunscreen-2',
    name: 'Tinted Moisturizer SPF 30',
    description: 'Multi-tasking tinted moisturizer with broad spectrum sun protection.',
    price: 38.00,
    originalPrice: 42.00,
    image: 'https://placehold.co/500x500?text=Elegant+tinted+moisturizer+with+natural+coverage+and+SPF',
    category: 'sunscreens',
    inStock: true,
    rating: 4.4,
    reviews: 156,
    benefits: ['Tinted coverage', 'Moisturizing', 'SPF protection'],
    skinType: ['Normal', 'Dry', 'Mature']
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.originalPrice).slice(0, 6);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};