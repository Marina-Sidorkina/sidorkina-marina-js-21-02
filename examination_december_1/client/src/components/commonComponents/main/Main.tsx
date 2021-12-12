import React from 'react';
import styles from './Main.module.scss';

const Main = (props: { children: React.ReactChild | React.ReactFragment | null | undefined; }) => (
  <main className={styles.main}>
    <div className={styles.container}>
      { props.children }
    </div>
  </main>
);

export default Main;
