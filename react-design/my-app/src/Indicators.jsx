export default function Indicators({ count, currentIndex }) {
  const labels = [];
  for (let i = 0; i < count; i++) {
    labels.push(i);
  }

  const buttons = labels.map((label, index) => (
    <button
      key={index}
      className={index === currentIndex ? 'btn active' : 'btn'}>
      {label}
    </button>
  ));

  return <>{buttons}</>;
}
