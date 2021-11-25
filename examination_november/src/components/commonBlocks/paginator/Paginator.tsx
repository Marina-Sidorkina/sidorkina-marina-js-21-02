import React from 'react';
import './Paginator.scss';
import { Pagination } from 'antd';

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

  return (
    <Pagination
      className={modal ? 'paginator paginator_modal' : 'paginator'}
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
