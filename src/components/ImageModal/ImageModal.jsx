import ReactModal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Large Image" />
    </ReactModal>
  );
};

export default ImageModal;
