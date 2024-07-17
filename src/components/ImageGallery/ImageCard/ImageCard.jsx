import css from "./imageCardStyle.module.css";

const ImageCard = ({ image }) => {
  if (!image || !image.urls || !image.urls.small) {
    return <>No image found</>;
  }

  return (
    <img
      className={css.imgCard}
      src={image.urls.small}
      alt={image.alt_description}
    />
  );
};

export default ImageCard;
