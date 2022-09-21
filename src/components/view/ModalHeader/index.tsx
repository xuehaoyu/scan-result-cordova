import React, { FC } from 'react'
import { CloseOutline } from 'antd-mobile-icons'
import './index.scss'

interface IProps {
  title: string;
  des?: any;
  onClose?: () => void;
  extra?: any;
}

const ModalHeader: FC<IProps> = (props: IProps) => {
  const { title, des, extra, onClose } = props
  return (
    <div className='live-modal-header'>
      <div className='left'>{onClose && <CloseOutline onClick={onClose}></CloseOutline>}</div>
      <div className='center'>
        <div className='title'>{title}</div>
        {des && <div className='des'>{des}</div>}
      </div>
      {extra && <div className='extra'>{extra}</div>}
    </div>
  )
}

export default ModalHeader
