import { useCallback, useEffect, useRef, useState } from 'react';

import { isNonNullable } from 'helpers';

import SelectArrow from '../Icon/SelectArrow';
import SelectOption, { IOption } from './SelectOption';
import { Placeholder, SelectArrowWrapper, SelectDropdown, StyledSelect } from './styled';

interface IProps {
  options: IOption[];
  placeholder?: string;
}

const Select: React.FunctionComponent<IProps> = ({ options, placeholder }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<IOption | null>(null);

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

  const handleOptionSelect = useCallback(
    (option: IOption) => {
      setSelectedOptions(option);

      setShowDropdown(false);
    },
    [selectedOptions, setShowDropdown, setSelectedOptions]
  );

  const toggleDropdownMenu = () => {
    setShowDropdown(prev => !prev);
  };

  const renderSelectOptions = useCallback(() => {
    if (isNonNullable(selectedOptions)) {
      return selectedOptions.label;
    }

    return <Placeholder>{placeholder}</Placeholder>;
  }, [selectedOptions, placeholder]);

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
