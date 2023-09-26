export default function NextButton({ onCustomClick }) {
  return (
    <div>
      <button onClick={onCustomClick} className="btn">
        Next
      </button>
    </div>
  );
}
