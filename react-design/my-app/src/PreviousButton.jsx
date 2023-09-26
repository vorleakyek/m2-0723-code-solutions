export default function PreviousButton({ onCustomClick }) {
  return (
    <div>
      <button onClick={onCustomClick} className="btn">
        Prev
      </button>
    </div>
  );
}
