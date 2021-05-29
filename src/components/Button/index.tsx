import React, { FC } from 'react'
import { ButtonProps } from '../../interfaces/button'

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  value,
}) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        value={value}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export { Button }
