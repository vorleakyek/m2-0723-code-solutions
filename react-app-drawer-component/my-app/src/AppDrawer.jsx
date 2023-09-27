import { useState } from 'react';
import SideMenu from './SideMenu';

export default function AppDrawer({ heading, items }) {
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <SideMenu
      heading={heading}
      items={items}
      isActive={isActive}
      onClick={toggleIsActive}
    />
  );
}
