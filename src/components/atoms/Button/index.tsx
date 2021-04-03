import React, { useState } from 'react';
import Arrow, { ArrowDirection } from '../Icon/Arrow';
import { isNonNullable } from '../../../helpers';

import { ButtonSize, StyledButton } from './styled';

interface IProps {
  size?: ButtonSize;
  arrow?: ArrowDirection;
  color?: ButtonColor;
}

export enum ButtonColor {
  DEFAULT,
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

  const renderWithArrows = (arrowDirection: ArrowDirection) => {
    return arrowDirection === ArrowDirection.LEFT ? (
      <>
        <Arrow direction={arrowDirection} color={color} hover={hoveredButton} />
        {children}
      </>
    ) : (
      <>
        {children}
        <Arrow direction={arrowDirection} color={color} hover={hoveredButton} />
      </>
    );
  };

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
