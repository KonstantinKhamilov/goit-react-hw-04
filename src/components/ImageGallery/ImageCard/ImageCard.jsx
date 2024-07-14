import css from "./imageCardStyle.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imageCard}>
      <img src={image.urls.small} alt={image.alt_description} />
      <div className={css.overlay} onClick={() => onClick(image.urls.full)}>
        <span>View larger</span>
      </div>
    </div>
  );
};

export default ImageCard;
