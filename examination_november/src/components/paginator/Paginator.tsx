import React from 'react';
import './Paginator.scss';
import { Pagination } from 'antd';

interface IPaginatorProps {
  perPage: number | undefined;
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Paginator = (props: IPaginatorProps) => (
  <Pagination
    className="paginator"
    simple
    defaultPageSize={props.perPage}
    defaultCurrent={props.current}
    total={props.total}
    onChange={props.onPageChange}
  />
);

export default Paginator;
