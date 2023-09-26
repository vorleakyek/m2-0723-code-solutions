import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { useState } from 'react';

export default function SearchableList({ items }) {
  const [search, setSearch] = useState('');

  return (
    <div className="content-wrapper">
      <SearchBar
        onCustomChange={(text) => {
          setSearch(text);
        }}
        input={search}
      />
      <SearchResult items={items} keywords={search} />
    </div>
  );
}
