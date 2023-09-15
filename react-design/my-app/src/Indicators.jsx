export default function Indicators({ listItems }) {
  const indexes = listItems.map((item) => (
    <button key={listItems.indexOf(item)} className="btn">
      {listItems.indexOf(item)}
    </button>
  ));
  return <>{indexes}</>;
}
