export interface ILoginFormProps {
  isLoading: boolean;
  authorize: Function;
  updateInputValue: Function;
  inputValue: string;
  hideLoading: Function;
  error: any;
  resetError: Function;
}
