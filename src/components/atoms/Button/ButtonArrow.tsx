import { ButtonColor } from './index';

export enum ArrowDirection {
  LEFT,
  RIGHT,
}

interface IProps {
  color?: ButtonColor;
  direction?: ArrowDirection;
  hover?: boolean;
}

const getArrowColor = (color: ButtonColor): string => {
  switch (color) {
    case ButtonColor.DEFAULT:
      return '#6A983C';
    case ButtonColor.PRIMARY:
      return '#FFFFFF';
    case ButtonColor.SECONDARY:
      return '#000000';
    default:
      return '#6A983C';
  }
};

const ButtonArrow: React.FunctionComponent<IProps> = ({
  direction,
  color = ButtonColor.DEFAULT,
  hover,
}) => {
  const newColor = getArrowColor(color);

  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginRight: direction === ArrowDirection.LEFT ? '8px' : undefined,
        marginLeft: direction === ArrowDirection.RIGHT ? '8px' : undefined,
      }}
    >
      {direction === ArrowDirection.LEFT && (
        <path
          d="M9.46658 5.31339L6.72658 8.05338C6.60241 8.17829 6.53271 8.34726 6.53271 8.52338C6.53271 8.69951 6.60241 8.86848 6.72658 8.99338L9.39324 11.6601"
          stroke={hover && color === ButtonColor.DEFAULT ? '#FFFFFF' : newColor}
        />
      )}
      {direction === ArrowDirection.RIGHT && (
        <path
          d="M6.5332 11.6867L9.2732 8.94669C9.39737 8.82178 9.46706 8.65282 9.46706 8.47669C9.46706 8.30057 9.39737 8.1316 9.2732 8.00669L6.60654 5.34003"
          stroke={hover && color === ButtonColor.DEFAULT ? '#FFFFFF' : newColor}
        />
      )}
    </svg>
  );
};

export default ButtonArrow;
