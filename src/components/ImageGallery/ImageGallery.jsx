import ImageCard from "./ImageCard/ImageCard";
import css from "./imageStyle.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageUl}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image.urls.small)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
