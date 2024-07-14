const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Search images" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
