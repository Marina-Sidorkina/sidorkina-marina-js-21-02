export interface IPaginatorProps {
  perPage: number | undefined;
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  modal?: boolean;
}
