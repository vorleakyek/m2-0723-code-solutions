import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { useState } from 'react';

export default function SearchableList({ items }) {
  const [search, setSearch] = useState('');

  function searchInput(text) {
    setSearch(text);
  }

  return (
    <div className="content-wrapper">
      <SearchBar onCustomChange={searchInput} input={search} />
      <SearchResult items={items} keywords={search} />
    </div>
  );
}
