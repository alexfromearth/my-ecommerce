import styled, { css } from 'styled-components';
import { ButtonColor } from './index';

export enum ButtonSize {
  S,
  L,
  XL,
}

interface IStyledButton {
  size: ButtonSize;
  color?: ButtonColor;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case ButtonColor.DEFAULT:
      return css`
        border: 2px solid #92c064;
        background-color: #ffffff;

        &:hover {
          background-color: #6a983c;
          color: #ffffff;
        }
      `;
    case ButtonColor.PRIMARY:
      return css`
        background-color: #6a983c;
        border: 2px solid #92c064;
        color: #ffffff;
      `;
    case ButtonColor.SECONDARY:
      return css`
        border: none;
        background-color: #f5f5f5;
      `;
  }
};

const getButtonPadding = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.S:
      return css`
        padding: 8px;
      `;
    case ButtonSize.L:
      return css`
        padding: 12px 16px;
      `;
    case ButtonSize.XL:
      return css`
        padding: 18px 48px;
      `;
  }
};

export const StyledButton = styled.button.attrs<IStyledButton>(
  ({ color = ButtonColor.DEFAULT, size = ButtonSize.S }) => ({
    color,
    size,
  })
)<IStyledButton>`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 12px;
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
  color: #000000;
  transition: background-color 0.3s ease-in-out;
  ${({ size }) => getButtonPadding(size)};
  ${({ color }) => getButtonColor(color)}
`;
