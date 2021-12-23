import { AxiosResponse } from 'axios';
import { DEFAULT_IMAGE } from '../constants/components';

export const getExpirationDate = () => {
  const expires = new Date();
  expires.setTime(expires.getTime() + 31536000000);
  return expires.toUTCString();
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\\.$?*|{}\\(\\)\\[\]\\\\/\\+^])/g, '\\$1')}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (response: AxiosResponse <any, any>) => {
  document.cookie = `id=${response.data.data.id}; path=/; expires=${getExpirationDate()}`;
  document.cookie = `picture=${response.data.data.picture
  || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
  document.cookie = `name=${response.data.data.firstName}; path=/; expires=${getExpirationDate()}`;
};

export const resetCookie = () => {
  document.cookie = 'id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'picture=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const updateCookie = (response: AxiosResponse <any, any>) => {
  document.cookie = `picture=${response.data.data.picture
  || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
  document.cookie = `name=${response.data.data.firstName}; path=/; expires=${getExpirationDate()}`;
};
