import { useState } from "react";

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
    <button
      className="load-more-btn"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
