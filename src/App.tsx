import React, { useState, useEffect } from 'react';
import ScanClient from './scan';
import './App.css';

interface IProps { }

const App: React.FC<IProps> = (props: IProps) => {
  const [scanClient] = useState<ScanClient>(
    new ScanClient(undefined, {
      width: 300,
      height: 300,
      positionX: (window.innerWidth - 300) / 2,
      positionY: (window.innerHeight - 300) / 2,
    }),
  );
  const [scaning, setScaning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const onScanResult = async (result: any) => {
    scanClient.destroy();
    setScaning(false);
    if (!result) return;
    const { data } = result;
    if (!data) return;
    setScanResult(data)
  };

  const closeScan = () => {
    scanClient.destroy();
    setScaning(false);
  }

  const startScan = () => {
    setTimeout(async () => {
      try {
        setScaning(true);
        const result = await scanClient.scan();
        await onScanResult(result);
      } catch (e) {
        setScaning(false);
        scanClient.destroy();
      }
    }, 0);
  };

  useEffect(() => {
    return () => {
      closeScan()
    }
  })

  return (
    <div className='app-page'>
      <div
        className="scan-body"
      >
        <div
          className="scan-area"
        >
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
  );
};
export default App
