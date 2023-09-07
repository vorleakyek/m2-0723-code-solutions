export default function HotButton({ onClick, className, text }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
