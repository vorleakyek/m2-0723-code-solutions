export default function Indicators({ count, currentIndex, onCustomClick }) {
  const labels = [];
  for (let i = 0; i < count; i++) {
    labels.push(i);
  }

  const buttons = labels.map((label, index) => (
    <button
      key={label}
      className={index === currentIndex ? 'btn active' : 'btn'}
      onClick={() => onCustomClick(index)}>
      {label}
    </button>
  ));

  return <>{buttons}</>;
}
