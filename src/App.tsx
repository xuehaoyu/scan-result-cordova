import React, { useEffect, useState } from 'react';
import ScanClient from './scan';
import './App.css';

interface IProps { }

const App: React.FC<IProps> = (props: IProps) => {
  const [scanClient] = useState<ScanClient>(
    new ScanClient(undefined, {
      width: 320,
      height: 320,
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
    startScan();
  }, []);

  return (
    <div className='app-page'>
      <div
        className="scan-body"
      >
        {scaning ? <span>等待扫码中...</span> : <span onClick={() => {
          if (scaning) return;
          startScan()
        }}>点击重新扫码</span>}
        <div
          className="scan-area"
        >
          {scanResult && scanResult}
        </div>
      </div>
    </div>
  );
};
export default App
