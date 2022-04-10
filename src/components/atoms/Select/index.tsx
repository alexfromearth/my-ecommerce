import { useCallback, useEffect, useRef, useState } from 'react';
import SelectOption, { IOption } from './SelectOption';
import { isNonNullable } from '../../../helpers';
import SelectArrow from '../Icon/SelectArrow';
import SelectTag from './SelectTag';

import {
  Placeholder,
  SelectArrowWrapper,
  SelectDropdown,
  StyledSelect,
} from './styled';

interface IProps {
  options: IOption[];
  placeholder?: string;
  multy?: boolean;
}

const Select: React.FunctionComponent<IProps> = ({
  options,
  placeholder,
  multy = false,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<IOption | IOption[]>(
    multy ? [] : null
  );
  const selectRef = useRef<HTMLDivElement>();

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as any)) {
      setShowDropdown(false);
    }
  };

  const handleSelectedTagDelete = useCallback(
    (option: IOption) => {
      if (multy) {
        setSelectedOptions((prevSelectedOptions: IOption[]) =>
          prevSelectedOptions.filter(
            ({ label, value }) =>
              label !== option.label && value !== option.value
          )
        );
      }
    },
    [selectedOptions, setSelectedOptions]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleOptionSelect = useCallback(
    (option: IOption) => {
      if (multy && Array.isArray(selectedOptions)) {
        const isAlreadyInOptions = selectedOptions.some(
          ({ label, value }) => option.label === label && option.value === value
        );
        if (!isAlreadyInOptions) {
          setSelectedOptions((prevSelectedOptions: IOption[]) => [
            ...prevSelectedOptions,
            option,
          ]);
        }
      } else {
        setSelectedOptions(option);
      }
      setShowDropdown(false);
    },
    [selectedOptions, setShowDropdown, setSelectedOptions, multy]
  );

  const toggleDropdownMenu = () => {
    setShowDropdown((prev) => !prev);
  };

  const renderSelectOptions = useCallback(() => {
    {
      isNonNullable(selectedOptions) && !Array.isArray(selectedOptions) ? (
        selectedOptions.label
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      );
    }
    if (isNonNullable(selectedOptions)) {
      if (Array.isArray(selectedOptions)) {
        return selectedOptions.map((option) => (
          <SelectTag
            key={`${option.value}-${option.label}`}
            option={option}
            handleDelete={handleSelectedTagDelete}
          />
        ));
      }
      return selectedOptions.label;
    } else {
      return <Placeholder>{placeholder}</Placeholder>;
    }
  }, [selectedOptions, placeholder, handleSelectedTagDelete]);

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
