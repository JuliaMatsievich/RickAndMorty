export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectOptionContentProps {
  option: ISelectOption;
  size: 'big' | 'small';
}
