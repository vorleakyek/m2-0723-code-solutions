export default function Content({ content, isActive }) {
  return <>{isActive && <div className="content">{content}</div>}</>;
}
