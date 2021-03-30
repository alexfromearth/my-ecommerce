import React from 'react'
import { Button } from './styled'
import Arrow, { ArrowDirection } from '../Icon/Arrow'

export enum ButtonSize {
  S,
  L,
  XL,
}

interface IProps {
  size?: ButtonSize
  arrow?: ArrowDirection
}

const MainButton: React.FunctionComponent<IProps> = ({
  children,
  size,
  arrow,
}) => {
  const renderWithArrows = (arrowDirection: ArrowDirection) => {
    return arrowDirection === ArrowDirection.LEFT ? (
      <>
        <Arrow direction={arrowDirection} />
        {children}
      </>
    ) : (
      <>
        {children}
        <Arrow direction={arrowDirection} />
      </>
    )
  }

  return (
    <Button size={size}>
      {arrow ? renderWithArrows(arrow) : { children }}
    </Button>
  )
}

export default MainButton
