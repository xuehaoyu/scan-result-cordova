import React from 'react'
import './index.scss'

interface IProps {
  children: any
}

const CommonPage: React.FC<IProps> = (props: IProps) => {
  return (
    <div className='common-page'>
      {props.children}
    </div>
  )
}
export default CommonPage
