import React from "react";
import { Photo } from "../../../services/unsplashAPI.types";

interface ImageCardProps {
  photo: Photo;
  handleOpenModal: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, handleOpenModal }) => {
  return (
    <div onClick={() => handleOpenModal(photo)}>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default ImageCard;
