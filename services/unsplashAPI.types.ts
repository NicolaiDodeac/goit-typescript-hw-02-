export interface Response {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface Photo {
  id: string;
  description: string;
  urls: Urls;
  likes: number;
  user: User;
  alt_description: string;
}

export interface Urls {
  small: string;
  regular: string;
  raw: string;
  full: string;
  thumb: string;
}

export interface User {
  name: string;
  profile_image: { small: string };
}
