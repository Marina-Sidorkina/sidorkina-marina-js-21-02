import React, { useContext } from 'react';
import './Paginator.scss';
import { Pagination } from 'antd';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface IPaginatorProps {
  perPage: number | undefined;
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  modal?: boolean;
}

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
