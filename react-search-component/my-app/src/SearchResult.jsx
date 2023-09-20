export default function SearchResult({ items, keywords }) {
  const defaultDisplay = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const itemFiltered = items.filter((item) =>
    item.toLowerCase().includes(keywords.toLowerCase())
  );
  const resultDisplay = itemFiltered.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const noMatchDisplay = 'No items match the filter';

  const listResult = returnList();

  function returnList() {
    let result = null;
    if (keywords === '') {
      result = <ul>{defaultDisplay}</ul>;
    } else {
      if (itemFiltered.length === 0) {
        result = <p>{noMatchDisplay}</p>;
      } else {
        result = <ul>{resultDisplay}</ul>;
      }
    }
    return result;
  }

  return <div>{listResult}</div>;
}
