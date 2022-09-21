import React, { useState, useEffect } from 'react'
import { CommonPopup } from '@/components'
import { Input } from 'antd-mobile'
import './index.scss'

interface IProps {
  visible: boolean,
  onClose: () => void;
}

const ScanPage: React.FC<IProps> = (props: IProps) => {
  const { visible, onClose } = props
  const [uid, setUid] = useState<string>('')
  return (
    <CommonPopup
      className='sheep-modal'
      visible={visible}
      footer={null}
      title='羊了个羊'
      onClose={onClose}
    >
      <div className='sheep-modal-body'>
          <Input type='text' placeholder='输入UID' />
      </div>
    </CommonPopup>
  )
}
export default ScanPage
