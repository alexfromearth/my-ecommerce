import CloseIcon from '../Icon/Close';
import { IOption } from './SelectOption';
import { CloseIconWrapper, StyledSelectTag, StyledSelectTagWrapper } from './styled';

interface IProps {
  option: IOption;
  handleDelete?(option: IOption): void;
}

const SelectTag: React.FunctionComponent<IProps> = ({ option, handleDelete }) => (
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

export default SelectTag;
