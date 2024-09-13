import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Photo } from "../../../services/unsplashAPI.types";

interface ImageGalleryProps {
  photos: Photo[];
  handleOpenModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  handleOpenModal,
}) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} className={s.galleryItem}>
          <ImageCard photo={photo} handleOpenModal={handleOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
