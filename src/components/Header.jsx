import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Notification from './Notification';

const activeStyle = {
  color: 'purple',
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/shoes">
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/details">
              Details
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Notification />
      </div>
    </header>
  );
}
