import React from 'react';
import PC from './PC.component';
import Mobile from './Mobile.component';
import './Menu.style.scss';

const Menu = () => (
  <div className="menu">
    <Mobile />
    <PC />
  </div>
);

export default Menu;
