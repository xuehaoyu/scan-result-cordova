import React from 'react'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  return (
    <div className='not-page'>
      <h1>找不到该页面</h1>
    </div>
  )
}
export default Index
