import React from 'react';
import './Main.scss';

const Main = (props: { children: React.ReactChild | React.ReactFragment | null | undefined; }) => (
  <main className="main">
    <div className="main__container">
      { props.children }
    </div>
  </main>
);

export default Main;
