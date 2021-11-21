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

const Paginator = (props: IPaginatorProps) => (
  <Pagination
    className={props.modal ? 'paginator paginator_modal' : 'paginator'}
    simple
    defaultPageSize={props.perPage}
    defaultCurrent={props.current}
    total={props.total}
    onChange={props.onPageChange}
  />
);

Paginator.defaultProps = {
  modal: false
};

export default Paginator;
