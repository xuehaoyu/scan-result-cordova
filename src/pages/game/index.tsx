import React, { useState } from 'react'
import { Badge } from 'antd-mobile'
import { SheepModal } from '@/components'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  const [sheepVisible, setSheepVisible] = useState<boolean>(false)
  return (
    <div className='game-page'>
      <div className='feature-list'>
        <div className='feature-item' onClick={() => {
          setSheepVisible(true)
        }}>🐑</div>
      </div>
      <SheepModal visible={sheepVisible} onClose={() => setSheepVisible(false)}></SheepModal>
    </div>
  )
}
export default Index
