import React from 'react';
import './Paginator.scss';
import { Pagination } from 'antd';

const Paginator = () => (
  <Pagination
    className="paginator"
    simple
    defaultPageSize={4}
    defaultCurrent={1}
    total={50}
    onChange={(page: number) => { console.log(page); }}
  />
);

export default Paginator;
