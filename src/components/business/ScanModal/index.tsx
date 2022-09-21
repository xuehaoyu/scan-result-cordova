import React, { useState, useEffect } from 'react'
import ScanClient from '@/scan'
import { CommonPopup } from 'components'
import './index.scss'

interface IProps {
  visible: boolean,
  onClose: () => void;
}

const ScanPage: React.FC<IProps> = (props: IProps) => {
  const { visible, onClose } = props
  const [scanClient] = useState<ScanClient>(
    new ScanClient(undefined, {
      width: 300,
      height: 300,
      positionX: (window.innerWidth - 300) / 2,
      positionY: (window.innerHeight - 152) / 2
    })
  )
  const [scaning, setScaning] = useState<boolean>(false)
  const [scanResult, setScanResult] = useState<any>(null)

  const onScanResult = async (result: any) => {
    scanClient.destroy()
    setScaning(false)
    if (!result) return
    const { data } = result
    if (!data) return
    setScanResult(data)
  }

  const closeScan = () => {
    scanClient.destroy()
    setScaning(false)
  }

  const startScan = () => {
    setTimeout(async () => {
      try {
        setScaning(true)
        const result = await scanClient.scan()
        await onScanResult(result)
      } catch (e) {
        setScaning(false)
        scanClient.destroy()
      }
    }, 0)
  }

  useEffect(() => {
    if (!visible) {
      closeScan()
    } else {
      setScanResult(null)
    }
  }, [visible])
  return (
    <CommonPopup
      className='scan-modal'
      visible={visible}
      footer={null}
      title='扫码'
      onClose={onClose}
    >
      <div className='scan-modal-body'>
        <div className='scan-body'>
          <div className='scan-area'>
            {scanResult && scanResult}
          </div>
        </div>
        <div className='restart-btn' onClick={() => {
          if (scaning) {
            closeScan()
          } else {
            startScan()
          }
        }}>{scaning ? '结束扫码' : '开始扫码'}</div>
      </div>
    </CommonPopup>
  )
}
export default ScanPage
