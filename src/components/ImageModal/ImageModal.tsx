import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    width: "auto",
    height: "auto",
    maxWidth: "90vw",
    maxHeight: "90vh",
    border: "none",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  modalImage: {
    urls: {
      regular: string;
    } | null;
    alt_description: string;
  } | null;
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalImage,
  isModalOpen,
  handleCloseModal,
}) => {
  if (!modalImage || !modalImage.urls) {
    return null;
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel={modalImage.alt_description || "Image"}
    >
      <img
        src={modalImage.urls.regular}
        alt={modalImage.alt_description || "Image"}
      />
    </Modal>
  );
};

export default ImageModal;
