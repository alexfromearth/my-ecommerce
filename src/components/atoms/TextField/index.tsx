import React, { useRef } from 'react';
import { StyledInput, StyledTextFieldWrapper } from './styled';
import MailIcon from '../Icon/Mail';

interface IOwnProps {
  type?: 'password' | 'text';
  icon?: {
    direction: 'left' | 'right';
    iconType?: any;
  };
}

type IProps = IOwnProps & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FunctionComponent<IProps> = ({ icon, ...props }) => {
  const inputRef = useRef<HTMLInputElement>();

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
