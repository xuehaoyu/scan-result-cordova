import React, { useState } from 'react'
import { ScanCodeOutline } from 'antd-mobile-icons'
import { ScanModal } from 'components'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  const [scanVisble, setScanVisble] = useState<boolean>(false)
  return (
    <div className='home-page'>
      <div className='feature-list'>
        <div className='feature-item' onClick={() => {
          setScanVisble(true)
        }}>
          <ScanCodeOutline />
        </div>
      </div>
      <ScanModal visible={scanVisble} onClose={() => setScanVisble(false)}></ScanModal>
    </div>
  )
}
export default Index
