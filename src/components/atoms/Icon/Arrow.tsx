import React from 'react'

export enum ArrowDirection {
  LEFT,
  RIGHT,
}

interface IProps {
  direction?: ArrowDirection
}

const Arrow: React.FunctionComponent<IProps> = (direction) => {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === ArrowDirection.LEFT ? (
          <path
            d="M9.46658 5.31339L6.72658 8.05338C6.60241 8.17829 6.53271 8.34726 6.53271 8.52338C6.53271 8.69951 6.60241 8.86848 6.72658 8.99338L9.39324 11.6601"
            stroke="#6A983C"
          />
        ) : (
          <path
            d="M6.5332 11.6867L9.2732 8.94669C9.39737 8.82178 9.46706 8.65282 9.46706 8.47669C9.46706 8.30057 9.39737 8.1316 9.2732 8.00669L6.60654 5.34003"
            stroke="#6A983C"
          />
        )}
      </svg>
    </>
  )
}

export default Arrow
