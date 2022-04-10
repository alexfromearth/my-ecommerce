import { IOption } from './SelectOption';
import CloseIcon from '../Icon/Close';

import {
  CloseIconWrapper,
  StyledSelectTag,
  StyledSelectTagWrapper,
} from './styled';

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
