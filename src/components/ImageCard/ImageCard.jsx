const ImageCard = ({ photo, handleOpenModal }) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal(photo.urls.full, photo.alt_description)}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
