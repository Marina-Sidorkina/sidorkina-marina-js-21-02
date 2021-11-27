import React from 'react';
import './NavigationUsersIcon.scss';

interface INavigationUsersIcon {
  dark: boolean | undefined;
}

const NavigationUsersIcon = (props: INavigationUsersIcon) => {
  const { dark } = props;

  return (
    <svg
      className={`${dark
        ? 'navigation__svg navigation__svg_users navigation__svg_users_dark'
        : 'navigation__svg navigation__svg_users'}`}
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
  );
};

export default NavigationUsersIcon;
