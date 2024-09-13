export interface ModalContent {
  description: string;
  likes: number;
  url: string;
  user: string;
  userPhoto: string;
  modalImage: {
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    alt_description: string;
  };
}
