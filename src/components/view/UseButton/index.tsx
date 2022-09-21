import React, { FC } from 'react'
import './index.scss'

interface IProps {
  onClick?: (e: any) => void;
  disable?: boolean;
  children: any;
}

const UseButton: FC<IProps> = (props: IProps) => {
  const { children, onClick, disable } = props
  return (
    <div
      className={`common-use-btn ${disable ? 'disable' : ''}`}
      onClick={(e: any) => {
        if (disable) return
        onClick && onClick(e)
      }}
    >
      <div className='common-use-btn-body'>{children}</div>
    </div>
  )
}

export default UseButton
