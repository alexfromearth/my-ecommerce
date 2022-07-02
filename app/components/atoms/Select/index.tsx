import { useCallback, useEffect, useRef, useState } from 'react';

import { isNonNullable } from 'helpers';

import SelectArrow from '../Icon/SelectArrow';
import SelectOption, { IOption } from './SelectOption';
import { Placeholder, SelectArrowWrapper, SelectDropdown, StyledSelect } from './styled';

interface IProps {
  options: IOption[];
  placeholder?: string;
  value: IOption | null;
  onChange(option: IOption): void;
}

const Select: React.FunctionComponent<IProps> = ({ options, placeholder, value, onChange }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as any)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleOptionSelect = (option: IOption) => {
    onChange(option);

    setShowDropdown(false);
  };

  const toggleDropdownMenu = () => {
    setShowDropdown(prev => !prev);
  };

  const renderSelectOptions = useCallback(() => {
    if (isNonNullable(value)) {
      return value.label;
    }

    return <Placeholder>{placeholder}</Placeholder>;
  }, [value, placeholder]);

  return (
    <div ref={selectRef}>
      <StyledSelect onClick={toggleDropdownMenu}>
        {renderSelectOptions()}
        <SelectArrowWrapper>
          <SelectArrow />
        </SelectArrowWrapper>
      </StyledSelect>
      {showDropdown && (
        <SelectDropdown>
          {options.map(option => (
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
