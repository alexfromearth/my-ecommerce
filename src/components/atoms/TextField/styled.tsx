import styled from 'styled-components';

export const StyledTextFieldWrapper = styled.div`
  display: flex;
  height: 42px;
  width: 320px;
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 11px 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  background-color: inherit;
  border: none;
  &:focus {
    outline: none;
  }
`;
