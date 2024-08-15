import s from "./ImageCard.module.css";

const ImageCard = ({ photo, handleOpenModal }) => {
  return (
    <div>
      <img
        className={s.img}
        onClick={() => handleOpenModal(photo)}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
