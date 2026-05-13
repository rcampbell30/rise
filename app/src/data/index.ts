import type { Product, Testimonial, BlogPost, Feature } from '@/types';

export const products: Product[] = [
  {
    id: 'rise-cushion-sand',
    name: 'Rise Seat Lift Cushion',
    description: 'Self-powered hydropneumatic seat assist that helps you rise effortlessly from any chair. No batteries, no installation, no compromise.',
    price: 89,
    originalPrice: 120,
    image: '/product-hero.png',
    colors: ['Sand', 'Sage', 'Slate'],
    features: [
      'Self-powered - no batteries needed',
      '10cm lift height assistance',
      'Supports up to 150kg',
      'Machine washable cover',
      'Portable - use on any chair'
    ],
    inStock: true,
  },
  {
    id: 'rise-cushion-sage',
    name: 'Rise Seat Lift Cushion - Sage',
    description: 'The same independence-restoring lift cushion in a calming sage green fabric.',
    price: 89,
    image: '/product-sage.jpg',
    colors: ['Sage'],
    features: [
      'Self-powered - no batteries needed',
      '10cm lift height assistance',
      'Supports up to 150kg',
      'Machine washable cover',
      'Portable - use on any chair'
    ],
    inStock: true,
  },
  {
    id: 'rise-cushion-slate',
    name: 'Rise Seat Lift Cushion - Slate',
    description: 'Elegant slate gray finish for modern homes.',
    price: 89,
    image: '/product-slate.jpg',
    colors: ['Slate'],
    features: [
      'Self-powered - no batteries needed',
      '10cm lift height assistance',
      'Supports up to 150kg',
      'Machine washable cover',
      'Portable - use on any chair'
    ],
    inStock: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Rise Customer',
    content: 'Rise has given me back my confidence. I can now get up from my favorite chair without assistance. It looks beautiful in my living room - not like a medical device at all.',
    image: '/testimonial-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Thompson',
    role: 'Rise Customer',
    content: 'The quality is exceptional. It\'s not just a product, it\'s a life changer. I was dreading having to buy one of those ugly lift chairs. Rise was the perfect solution.',
    image: '/testimonial-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Margaret Lewis',
    role: 'Rise Customer',
    content: 'Finally, a mobility solution that looks beautiful in my home. My daughter bought it for me, and I couldn\'t be happier. It\'s discreet, elegant, and works perfectly.',
    image: '/testimonial-3.jpg',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Choosing the Right Mobility Aid for Your Lifestyle',
    excerpt: 'Discover how to select mobility solutions that enhance your independence without compromising on style or comfort.',
    image: '/blog-1.jpg',
    date: 'January 10, 2026',
    category: 'Guide',
  },
  {
    id: '2',
    title: 'Home Safety Tips for Independent Living',
    excerpt: 'Practical advice for creating a safe, accessible home environment that supports your independence.',
    image: '/blog-2.jpg',
    date: 'January 5, 2026',
    category: 'Safety',
  },
  {
    id: '3',
    title: 'The Rise Story: Our Mission',
    excerpt: 'Learn about our journey to create beautiful, dignified mobility solutions for older adults.',
    image: '/about-lifestyle.jpg',
    date: 'December 28, 2025',
    category: 'Story',
  },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'Free Shipping',
    description: 'Free delivery on all orders over £50',
    icon: 'truck',
  },
  {
    id: '2',
    title: '30-Day Returns',
    description: 'Shop with confidence - easy returns',
    icon: 'refresh',
  },
  {
    id: '3',
    title: '3-Year Warranty',
    description: 'Every product built to last',
    icon: 'shield',
  },
  {
    id: '4',
    title: 'Customer Support',
    description: 'Friendly help when you need it',
    icon: 'headphones',
  },
  {
    id: '5',
    title: 'Secure Payments',
    description: 'Your data is always protected',
    icon: 'lock',
  },
  {
    id: '6',
    title: 'Gift Vouchers',
    description: 'Share independence with loved ones',
    icon: 'gift',
  },
];

export const faqs = [
  {
    question: 'How does the Rise cushion work?',
    answer: 'The Rise cushion uses a self-powered hydropneumatic mechanism. As you sit down, your weight compresses the internal spring system. When you\'re ready to stand, the stored energy gently assists you upward by up to 10cm - making it much easier to rise from seated positions.',
  },
  {
    question: 'Will it work with my chair?',
    answer: 'Rise works with most standard armchairs, sofas, and dining chairs. The cushion is 43×43cm and works best on chairs with a flat or slightly curved seat surface. If you\'re unsure, contact our team and we\'ll help you check compatibility.',
  },
  {
    question: 'Is it medical equipment?',
    answer: 'No, Rise is a wellness product designed for comfort and convenience. It\'s not classified as medical equipment, which means no prescriptions, no insurance paperwork - just order and enjoy greater independence.',
  },
  {
    question: 'How much weight can it support?',
    answer: 'The standard Rise cushion supports up to 150kg (23.5 stone). We also offer an XL version that supports up to 180kg (28 stone) for those who need extra capacity.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day trial period. If Rise doesn\'t transform your daily life, simply return it for a full refund. We want you to be completely satisfied with your purchase.',
  },
];
