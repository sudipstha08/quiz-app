import React, { FC, ReactNode } from 'react'
interface IProps {
  children: ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
}

const Button: FC<IProps> = ({ children, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export { Button }
