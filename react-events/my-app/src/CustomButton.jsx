export default function CustomButton({ text, color, onCustomClick }) {
  return (
    <button className={color} onClick={onCustomClick}>
      {text}
    </button>
  );
}
