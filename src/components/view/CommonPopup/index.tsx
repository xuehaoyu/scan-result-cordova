import React, { FC } from 'react'
import { Popup } from 'antd-mobile'
import { ModalHeader, UseButton } from '@/components'
import './index.scss'

interface IProps {
  className?: string;
  position?: 'bottom' | 'top' | 'left' | 'right';
  visible: boolean;
  footer?: any;
  title?: string;
  des?: any;
  okText?: string;
  onClose?: () => void;
  onOk?: () => void;
  children: any;
}

const LivePopup: FC<IProps> = (props: IProps) => {
  const { position, className, visible, title, des, onClose, footer, onOk, okText, children } = props
  return (
    <Popup className={`live-popup ${className || ''}`} visible={visible} destroyOnClose position={position}>
      <div className='live-popup-body'>
        <div className='live-popup-header'>
          <ModalHeader title={title || ''} des={des} onClose={onClose}></ModalHeader>
        </div>
        <div className='live-popup-con'>{children}</div>
        <div className='live-popup-footer'>
          {footer === null
            ? ''
            : footer || (
              <UseButton
                onClick={() => {
                  onOk && onOk()
                }}
              >
                <span>{okText || '确认'}</span>
              </UseButton>
            )}
        </div>
      </div>
    </Popup>
  )
}

export default LivePopup
