import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onCustomChange, input }) {
  function handleChange(e) {
    const { value } = e.target;
    onCustomChange(value);
  }

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        id="search"
        name="search"
        value={input}
        onChange={handleChange}
        placeholder="Search"
        className="search-input"
      />
    </div>
  );
}
