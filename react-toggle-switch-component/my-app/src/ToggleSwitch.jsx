export default function ToggleSwitch({ onClick, className, text }) {
  return (
    <div className="flex">
      <div onClick={onClick} className={className}>
        <div className="circle"></div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
