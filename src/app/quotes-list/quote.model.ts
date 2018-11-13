 export interface Author {
  died: string;
  born: string;
  profession: string;
  intro: string;
  name: string;
  id: string;
}

export interface Quote {
  shareCount: number;
  likeCount: number;
  viewCount: number;
  topics: string[];
  author: Author;
  quote: string;
  id: string;
}
