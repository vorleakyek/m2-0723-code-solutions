export default function Header({ header, onShow }) {
  return (
    <div className="header" onClick={onShow}>
      {header}
    </div>
  );
}
