import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

export default function SideMenu({ heading, items, isActive, onClick }) {
  const [showItems, setShowItems] = useState(false);

  const displayShade = isActive ? 'overlay dim' : 'overlay light';
  const displayPanel = isActive ? 'menu-panel open' : 'menu-panel close';
  const displayIcon = isActive ? 'hidden' : '';

  const listItem = items.map((item, index) => (
    <li key={index} className="menu-item">
      <a href="#" onClick={handleClick}>
        {item}
      </a>
    </li>
  ));

  function handleClick() {
    onClick();
    showItems ? setShowItems(false) : setShowItems(true);
  }

  return (
    <div>
      <div className="flex">
        <div className={displayIcon}>
          <FaBars className="menu-icon" onClick={handleClick} />
        </div>
      </div>

      <div>
        <div className={displayShade} onClick={handleClick}></div>
        <div className={displayPanel}>
          {showItems && (
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
