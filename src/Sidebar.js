import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
//import { bubble as Menu } from 'react-burger-menu';
import { elastic as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu right >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About 
      </a>
    </Menu>
  );
};

