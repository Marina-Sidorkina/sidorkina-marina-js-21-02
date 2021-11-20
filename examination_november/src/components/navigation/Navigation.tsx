import React from 'react';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item navigation__item_users">
        <svg
          className="navigation__svg navigation__svg_users"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span>Пользователи</span>
      </li>
      <li className="navigation__item navigation__item_posts">
        <svg
          className="navigation__svg navigation__svg_posts"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 0 96 96"
        >
          <path
            d="M84 24v48c0 3.312-2.688 6-6 6h-63c0 3.312 2.688 6 6
          6h63c3.312 0 6-2.688 6-6v-48c0-3.312-2.688-6-6-6zM81
          69v-48c0-3.312-2.688-6-6-6h-63c-3.312 0-6 2.688-6 6v48c0
          3.312 2.688 6 6 6h63c3.312 0 6-2.688 6-6zM12 21h63v48h-63v-48zM46.881
          51.933l-8.964-9.543-8.967 15.312-6.726-7.029-7.287 15.387h57.165l-12.891-33.735-12.33
          19.608zM24 42c3.312 0 6-2.688 6-6s-2.688-6-6-6-6 2.688-6 6 2.688 6 6 6z"
          />
        </svg>
        <span>Посты</span>
      </li>
    </ul>
  </nav>
);

export default Navigation;
