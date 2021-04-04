import React, { useCallback, useEffect, useRef, useState } from 'react';
import SelectOption, { IOption } from './SelectOption';
import { isNonNullable, isNullable } from '../../../helpers';
import SelectArrow from '../Icon/SelectArrow';

import {
  Placeholder,
  SelectArrowWrapper,
  SelectDropdown,
  StyledSelect,
} from './styled';

interface IProps {
  options: IOption[];
  placeholder?: string;
}

const Select: React.FunctionComponent<IProps> = ({ options, placeholder }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<IOption>(
    isNullable(placeholder) && options.length ? options[0] : null
  );
  const selectRef = useRef<HTMLDivElement>();

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as any)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleOptionSelect = useCallback((option: IOption) => {
    setSelectedOption(option);
    setShowDropdown(false);
  }, []);

  const toggleDropdownMenu = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div ref={selectRef}>
      <StyledSelect onClick={toggleDropdownMenu}>
        {isNonNullable(selectedOption) ? (
          selectedOption.label
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
        <SelectArrowWrapper>
          <SelectArrow />
        </SelectArrowWrapper>
      </StyledSelect>
      {showDropdown && (
        <SelectDropdown>
          {options.map((option) => (
            <SelectOption
              key={`${option.label}-${option.value}`}
              option={option}
              handleOptionSelect={handleOptionSelect}
            />
          ))}
        </SelectDropdown>
      )}
    </div>
  );
};
export default Select;
