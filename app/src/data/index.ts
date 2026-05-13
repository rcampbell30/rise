import type { Product, BlogPost, Feature } from '@/types';

const amazonSeatLiftSearch = 'https://www.amazon.co.uk/s?k=seat+lift+cushion+mobility';

export const products: Product[] = [
  {
    id: 'rise-cushion-sand',
    name: 'Seat Lift Cushion',
    description: 'A practical seat-assist cushion to compare when standing from armchairs, dining chairs, or sofas has started to feel difficult.',
    price: 89,
    originalPrice: 120,
    image: '/product-hero.png',
    colors: ['Sand', 'Sage', 'Slate'],
    features: [
      'Check weight capacity before buying',
      'Look for a washable cover',
      'Best on stable, supportive chairs',
      'Portable around the home',
      'Useful for families comparing options'
    ],
    inStock: true,
    affiliateUrl: amazonSeatLiftSearch,
    retailer: 'Amazon',
  },
  {
    id: 'rise-cushion-sage',
    name: 'Seat Lift Cushion - Soft Fabric Style',
    description: 'A softer-looking option for buyers who want a mobility aid that blends into the living room rather than looking clinical.',
    price: 89,
    image: '/product-sage.jpg',
    colors: ['Sage'],
    features: [
      'Compare dimensions against your chair',
      'Check the return policy on the retailer site',
      'Look for non-slip base details',
      'Consider ease of cleaning',
      'Check whether the lift level suits the user'
    ],
    inStock: true,
    affiliateUrl: amazonSeatLiftSearch,
    retailer: 'Amazon',
  },
  {
    id: 'rise-cushion-slate',
    name: 'Seat Lift Cushion - Modern Home Style',
    description: 'A discreet darker style for buyers comparing independence products that do not make the home feel medical.',
    price: 89,
    image: '/product-slate.jpg',
    colors: ['Slate'],
    features: [
      'Compare user reviews carefully',
      'Check product measurements',
      'Confirm chair compatibility',
      'Check maximum supported weight',
      'Ask a health professional if unsure'
    ],
    inStock: true,
    affiliateUrl: amazonSeatLiftSearch,
    retailer: 'Amazon',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Choosing the Right Mobility Aid for Your Lifestyle',
    excerpt: 'How to compare mobility products that support independence without compromising on dignity, comfort, or home style.',
    image: '/blog-1.jpg',
    date: 'January 10, 2026',
    category: 'Guide',
  },
  {
    id: '2',
    title: 'Home Safety Tips for Independent Living',
    excerpt: 'Practical buying checks for making a home safer and easier to move around in.',
    image: '/blog-2.jpg',
    date: 'January 5, 2026',
    category: 'Safety',
  },
  {
    id: '3',
    title: 'Seat Lift Cushions: What to Check Before Buying',
    excerpt: 'Weight capacity, chair compatibility, cover material, returns, and safety notes to check before choosing a seat-assist cushion.',
    image: '/about-lifestyle.jpg',
    date: 'December 28, 2025',
    category: 'Buying Guide',
  },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'Clear Buying Guides',
    description: 'Plain-English notes to help families compare products',
    icon: 'search',
  },
  {
    id: '2',
    title: 'Dignity First',
    description: 'Products selected around independence, comfort, and home feel',
    icon: 'heart',
  },
  {
    id: '3',
    title: 'Suitability Checks',
    description: 'Prompts for weight limits, dimensions, safety, and returns',
    icon: 'shield',
  },
];

export const faqs = [
  {
    question: 'What is a seat lift cushion?',
    answer: 'A seat lift cushion is designed to make standing up from a seated position easier. Different products work in different ways, so always check the product description, weight capacity, dimensions, and user reviews before buying.',
  },
  {
    question: 'Will it work with my chair?',
    answer: 'That depends on the chair and the exact cushion. Check the cushion size, the shape and stability of the chair, the seat height, and whether the product is designed for soft sofas, armchairs, or firmer dining chairs.',
  },
  {
    question: 'Is Rise selling these products directly?',
    answer: 'No. Rise is an affiliate-style buying guide. Product buttons may take you to retailers such as Amazon, where prices, availability, returns, and warranties are controlled by the retailer or seller.',
  },
  {
    question: 'Are the product links paid links?',
    answer: 'Some links may be affiliate links. This means Rise may earn a commission from qualifying purchases, at no extra cost to you. Paid links are disclosed so you know when you are leaving Rise for a retailer.',
  },
  {
    question: 'Is this medical advice?',
    answer: 'No. Rise provides general product information and buying prompts only. If a product may affect mobility, falls risk, pain, recovery, or a medical condition, speak to a GP, occupational therapist, physiotherapist, or other qualified professional before buying.',
  },
];
