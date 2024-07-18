import { useState } from "react";
import css from "./loadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <button className={css.loadBtn} onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
