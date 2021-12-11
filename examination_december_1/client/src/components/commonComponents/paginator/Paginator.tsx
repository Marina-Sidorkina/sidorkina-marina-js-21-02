import React, { useContext } from 'react';
import './Paginator.scss';
import { Pagination } from 'antd';
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
        `${modal
          ? 'paginator paginator_modal'
          : 'paginator'} ${themeContext.darkTheme ? 'paginator_dark' : ''}`
      }
      simple
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
