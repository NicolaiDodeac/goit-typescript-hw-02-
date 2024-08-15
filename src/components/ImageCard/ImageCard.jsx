import s from "./ImageCard.module.css";
import { Heart } from "lucide-react";
const ImageCard = ({ photo, handleOpenModal }) => {
  return (
    <div>
      <img
        className={s.img}
        onClick={() => handleOpenModal(photo)}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
      <p className={s.likes}>
        <Heart className={s.like} /> {photo.likes} | Created at:
        {photo.created_at}
      </p>
    </div>
  );
};

export default ImageCard;
