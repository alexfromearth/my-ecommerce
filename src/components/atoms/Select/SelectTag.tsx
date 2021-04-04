import React from 'react';
import { IOption } from './SelectOption';
import {
  CloseIconWrapper,
  StyledSelectTag,
  StyledSelectTagWrapper,
} from './styled';
import CloseIcon from '../Icon/Close';

interface IProps {
  option: IOption;
  handleDelete?(option: IOption): void;
}

const SelectTag: React.FunctionComponent<IProps> = ({
  option,
  handleDelete,
}) => {
  return (
    <StyledSelectTagWrapper>
      <StyledSelectTag>
        {option.label}
        {handleDelete && (
          <CloseIconWrapper onClick={() => handleDelete(option)}>
            <CloseIcon />
          </CloseIconWrapper>
        )}
      </StyledSelectTag>
    </StyledSelectTagWrapper>
  );
};

export default SelectTag;
