type Skill = {
  id: number;
  name: string;
  experience?: number;
}

type Position = {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  url?: string;
}