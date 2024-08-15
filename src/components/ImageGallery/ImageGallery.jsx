import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, handleOpenModal }) => {
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
