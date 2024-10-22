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

type FlickrImgInSet = {
  id: number;
  title: string;
  thumbUrl: string;
  largeUrl: string;
}
