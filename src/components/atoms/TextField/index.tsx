import { useRef } from 'react';

import MailIcon from '../Icon/Mail';
import { StyledInput, StyledTextFieldWrapper } from './styled';

interface IOwnProps {
  type?: 'password' | 'text';
  icon?: {
    direction: 'left' | 'right';
    iconType?: any;
  };
}

type IProps = IOwnProps & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FunctionComponent<IProps> = ({ icon, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  return (
    <StyledTextFieldWrapper onClick={handleInputFocus}>
      {icon?.direction === 'left' && <MailIcon />}
      <StyledInput {...props} ref={inputRef} />
      {icon?.direction === 'right' && <MailIcon />}
    </StyledTextFieldWrapper>
  );
};

export default TextField;
