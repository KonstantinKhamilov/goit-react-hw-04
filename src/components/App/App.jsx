import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));

const App = () => {
  const [query, setQuery] = useState(""); // Состояние для поискового запроса
  const [images, setImages] = useState([]); // Состояние для списка картинок
  const [loading, setLoading] = useState(false); // Состояние для индикатора загрузки
  const [error, setError] = useState(null); // Состояние для сообщения об ошибке
  const [modalImage, setModalImage] = useState(null); // Состояние для модального окна
  const [page, setPage] = useState(1); // Состояние для текущей страницы

  useEffect(() => {
    if (query) {
      // Выполняем запрос к Unsplash API при изменении запроса
      setLoading(true);
      setError(null);

      axios
        .get(`https://api.unsplash.com/search/photos`, {
          params: {
            query,
            per_page: 20, // Количество картинок на странице
            client_id: "MUHR81zwB14-qxtCXLv0_E-vdiyE1jdDNCAskPgwJL0", // Замените на свой ключ
            page,
          },
        })
        .then((response) => {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
        })
        .catch((error) => {
          setError("Oops! Something went wrong. Please try again later.");
          console.error(error); // добавляем вывод ошибки в консоль
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery || !newQuery.trim().split(" ").length) {
      setError("Please enter a valid search query.");
      return;
    }
    setQuery(newQuery);
    setError(null);
    setPage(1); // Сбрасываем номер страницы при изменении запроса
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы на 1 при нажатии на кнопку "Загрузить еще"
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="app">
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && (
        <LoadMoreBtn
          onClick={handleLoadMore}
          page={page}
          totalPages={Math.ceil(images.length / 20)}
        />
      )}
      {modalImage && (
        <ImageModal
          isOpen={true}
          onRequestClose={handleCloseModal}
          imageUrl={modalImage}
        />
      )}
    </div>
  );
};

export default App;
