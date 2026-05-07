export type DegreeLevel = 'Undergraduate' | 'Postgraduate' | 'MBA' | 'Doctorate' | 'Diploma' | 'Nursing';

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  logo: string;
  image: string;
  description: string;
  tuitionRange: { min: number; max: number };
  programs: string[];
  degreeLevels: DegreeLevel[];
  ranking: number;
  scholarshipAvailable: boolean;
  isPartner?: boolean;
  requirements: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  visaRequirements: string;
  costOfLiving: string;
  popularCities: string[];
  weather: string;
  lifestyle: string;
  workOpportunities: string;
  accommodation: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Study Abroad Tips' | 'Visa Guides' | 'Scholarships' | 'Student Stories' | 'Travel Tips';
  author: string;
  date: string;
  image: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  type: 'Full' | 'Partial' | 'Merit-based';
  deadline: string;
  description: string;
  eligibility: string[];
}

export interface UserApplication {
  id: string;
  userId: string;
  universityId: string;
  program: string;
  status: 'Pending' | 'Reviewing' | 'Accepted' | 'Rejected';
  dateApplied: string;
  documents: { name: string; url: string }[];
}
