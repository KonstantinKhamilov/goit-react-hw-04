import css from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query || !query.trim().split(" ").length) {
      // Вывод ошибки
      alert("Please enter a valid search query.");
      return;
    }
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <button type="submit" className={css.searchbutton}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Search images"
        className={css.input}
      />
    </form>
  );
};

export default SearchBar;
