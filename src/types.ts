export interface ServiceItem {
  id: string;
  title: string;
  category: 'construction' | 'consulting' | 'realestate';
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface RenovationPair {
  id: string;
  title: string;
  location: string;
  scope: string;
  beforeDesc: string;
  afterDesc: string;
  structuralUpgrade: string;
  imageUrlBefore: string;
  imageUrlAfter: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  serviceType: string;
  comment: string;
  date: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'engineering' | 'legal' | 'renovation';
}
