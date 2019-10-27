import React from 'react';
import Menu from './Menu/Menu.component';
import './Sidebar.style.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-wrapper">
      <div className="logo">
        <a href="/" className="simple-text">
          Excel Play
        </a>
      </div>
      <Menu />
    </div>
    <div className="sidebar-background" />
  </div>
);

export default Sidebar;
