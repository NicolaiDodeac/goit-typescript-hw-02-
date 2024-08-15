import ImageCard from "../ImageCard/ImageCard";
// import s from "./ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ photos, handleOpenModal }) => {
  console.log(photos);

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} handleOpenModal={handleOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
