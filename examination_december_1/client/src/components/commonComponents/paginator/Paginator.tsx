import React, { useContext } from 'react';
import { Pagination } from 'antd';
import styles from './Paginator.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { IPaginatorProps } from './@types/paginator';

const Paginator = (props: IPaginatorProps) => {
  const {
    perPage, onPageChange, current, total, modal
  } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <Pagination
      className={
        `${modal ? `${styles.paginator} ${styles.paginator_modal}` : styles.paginator}
        ${themeContext.darkTheme ? styles.paginator_dark : ''}`
      }
      simple
      showQuickJumper
      pageSize={perPage}
      total={total}
      current={current}
      onChange={onPageChange}
    />
  );
};

Paginator.defaultProps = {
  modal: false
};

export default Paginator;
