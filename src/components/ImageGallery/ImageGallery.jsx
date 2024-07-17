import ImageCard from "./ImageCard/ImageCard";
import css from "./imageStyle.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || !Array.isArray(images)) {
    return <div>No images found</div>;
  }

  return (
    <ul className={css.imageUl}>
      {images.map((image) => (
        <li
          className={css.imageLi}
          key={image.id}
          onClick={() => onImageClick(image.urls.small)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
