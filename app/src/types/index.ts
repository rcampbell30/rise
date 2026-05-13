export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  features: string[];
  inStock: boolean;
  affiliateUrl: string;
  retailer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
