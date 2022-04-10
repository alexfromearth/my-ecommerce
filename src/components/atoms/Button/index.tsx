import { useState } from 'react';

import { isNonNullable } from '../../../helpers';
import ButtonArrow, { ArrowDirection } from './ButtonArrow';
import { ButtonSize, StyledButton } from './styled';

interface IProps {
  size?: ButtonSize;
  arrow?: ArrowDirection;
  color?: ButtonColor;
}

export enum ButtonColor {
  DEFAULT,
  PRIMARY,
  SECONDARY,
}

const Button: React.FunctionComponent<IProps> = ({
  children,
  size,
  arrow,
  color,
}) => {
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleHover = () => {
    setHoveredButton(true);
  };

  const handleBlur = () => {
    setHoveredButton(false);
  };

  const renderWithArrows = (arrowDirection: ArrowDirection) =>
    arrowDirection === ArrowDirection.LEFT ? (
      <>
        <ButtonArrow
          direction={arrowDirection}
          color={color}
          hover={hoveredButton}
        />
        {children}
      </>
    ) : (
      <>
        {children}
        <ButtonArrow
          direction={arrowDirection}
          color={color}
          hover={hoveredButton}
        />
      </>
    );

  return (
    <StyledButton
      size={size}
      color={color}
      onMouseOver={handleHover}
      onMouseOut={handleBlur}
    >
      {isNonNullable(arrow) ? renderWithArrows(arrow) : children}
    </StyledButton>
  );
};

export default Button;
