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

export interface IPromoProps {
  title: string;
  message: string;
}

export interface ICategoryProps {
  id: string;
  title: string;
  message: string;
  href: string;
}

export interface ICategoriesProps {
  categories: ICategoryProps[];
}
