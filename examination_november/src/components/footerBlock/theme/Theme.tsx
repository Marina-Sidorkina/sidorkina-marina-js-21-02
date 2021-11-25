import React from 'react';
import './Theme.scss';
import { Switch } from 'antd';

const Theme = () => (
  <div className="theme">
    <span className="theme__text">Темная тема</span>
    <Switch
      className="theme__toggle"
      onChange={(switched: boolean) => { console.log(switched); }}
    />
  </div>
);

export default Theme;
