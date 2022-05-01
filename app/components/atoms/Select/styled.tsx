import styled from 'styled-components';

export const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 21px;
  border: 1px solid #d1d1d1;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 11px 16px;
`;

export const Placeholder = styled.div`
  color: #a9a9a9;
`;

export const SelectArrowWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 13px;
`;

export const SelectDropdown = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;

export const StyledSelectOption = styled.div`
  height: 15px;
  background-color: #f9f9f9;
  border-top: 1px solid #d1d1d1;
  padding: 11px 16px;
  cursor: pointer;

  &:hover {
    background-color: #dedede;
  }

  &:first-child {
    border-top: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const StyledSelectTagWrapper = styled.div`
  display: inline-block;
`;

export const StyledSelectTag = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background: #f4f8ec;
  border-radius: 12px;
  color: #6a983c;
  padding: 2px 10px;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
`;
