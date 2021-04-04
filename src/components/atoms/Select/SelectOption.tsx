import React from 'react';
import { StyledSelectOption } from './styled';

export interface IOption {
  label: string;
  value: string;
}

interface IProps {
  option: IOption;
  handleOptionSelect?(option: IOption): void;
}

const SelectOption: React.FunctionComponent<IProps> = ({
  option,
  handleOptionSelect,
}) => {
  return (
    <StyledSelectOption onClick={() => handleOptionSelect(option)}>
      {option.label}
    </StyledSelectOption>
  );
};

export default SelectOption;
