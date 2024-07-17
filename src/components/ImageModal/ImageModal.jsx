import ReactModal from "react-modal";
import css from "./modal.module.css";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      /*  appElement={document.getElementById("root")}*/
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img className={css.imgModal} src={imageUrl} alt="Large Image" />
    </ReactModal>
  );
};

export default ImageModal;
