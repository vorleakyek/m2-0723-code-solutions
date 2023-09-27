import { FaBars } from 'react-icons/fa6';

export default function SideMenu({ heading, items, isActive, onClick }) {
  const displayShade = isActive ? 'overlay dim' : 'overlay light';
  const displayPanel = isActive ? 'menu-panel open' : 'menu-panel close';
  const displayIcon = isActive ? 'hidden' : '';

  const listItem = items.map((item, index) => (
    <li key={index} className="menu-item">
      <a href="#" onClick={onClick}>
        {item}
      </a>
    </li>
  ));

  return (
    <div>
      <div className="flex">
        <div className={displayIcon}>
          <FaBars className="menu-icon" onClick={onClick} />
        </div>
      </div>

      <div>
        <div className={displayShade} onClick={onClick}></div>
        <div className={displayPanel}>
          {isActive && (
            <div>
              <h2 className="menu-heading">{heading}</h2>
              <nav>
                <ul className="items-wrapper">{listItem}</ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
