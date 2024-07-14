import ImageCard from "./ImageCard/ImageCard";
import css from "./imageStyle.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageUl}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
