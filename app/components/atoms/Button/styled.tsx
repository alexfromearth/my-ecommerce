import styled, { css } from 'styled-components';

export enum ButtonSize {
  S,
  L,
  XL,
}

export enum ButtonColor {
  DEFAULT,
  PRIMARY,
  SECONDARY,
}

interface IStyledButton {
  size: ButtonSize;
  color: ButtonColor;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
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

    case ButtonColor.DEFAULT:
    default:
      return css`
        border: 2px solid #92c064;
        background-color: #ffffff;

        &:hover {
          background-color: #6a983c;
          color: #ffffff;
        }
      `;
  }
};

const getButtonPadding = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.L:
      return css`
        padding: 12px 16px;
      `;
    case ButtonSize.XL:
      return css`
        padding: 18px 48px;
      `;
    case ButtonSize.S:
    default:
      return css`
        padding: 8px;
      `;
  }
};

export const StyledButton = styled.button.attrs<IStyledButton>(
  ({ color = ButtonColor.DEFAULT, size = ButtonSize.S }) => ({
    color,
    size,
  })
)<any>`
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
