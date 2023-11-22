import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <form>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        onClick={(e) => setSearch(e.target.previousSibling.value)}
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
