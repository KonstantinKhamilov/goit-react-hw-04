import { useState, useEffect } from "react";
import axios from "axios"; // Подключаем библиотеку axios
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState(""); // Состояние для поискового запроса
  const [images, setImages] = useState([]); // Состояние для списка картинок
  const [loading, setLoading] = useState(false); // Состояние для индикатора загрузки
  const [error, setError] = useState(null); // Состояние для сообщения об ошибке
  const [modalImage, setModalImage] = useState(null); // Состояние для модального окна

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
          },
        })
        .then((response) => {
          setImages(response.data.results);
        })
        .catch((error) => {
          setError({messa});
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    // Загрузка дополнительных картинок
    // Реализуйте логику загрузки следующей порции картинок
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
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
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