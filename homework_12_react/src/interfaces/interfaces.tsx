export interface IFilterProps {
  legend: string;
  items: IFilterData[];
}

export interface IFilterData {
  id: string;
  name: string;
}

export interface IFormItems {
  id: string;
  legend: string;
  items: IFilterData[];
}

export interface IFormProps {
  filters: IFormItems[]
}
