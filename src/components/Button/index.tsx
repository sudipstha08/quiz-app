import React, { FC, ReactNode } from 'react'
interface IProps {
  children: ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
  disabled?: boolean
  value?: any
}

const Button: FC<IProps> = ({
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
