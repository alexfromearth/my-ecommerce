import styled, { css } from 'styled-components'
import { ButtonSize } from './index'

interface IStyledButton {
  size: ButtonSize
}

const getButtonPadding = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.S:
      return css`
        padding: 8px;
      `
    case ButtonSize.L:
      return css`
        padding: 12px 16px;
      `
    case ButtonSize.XL:
      return css`
        padding: 18px 48px;
      `
  }
}

export const Button = styled.button<IStyledButton>`
  border: 2px solid #92c064;
  border-radius: 12px;
  padding: 12px;
  font-size: 15px;
  color: #000000;
  line-height: 22px;
  font-weight: bold;
  ${({ size }) => getButtonPadding(size)}
`
