
import Camera from './camera';

interface CameraOptions {
  width: number,
  height: number,
  positionX: number;
  positionY: number;
}

export default class ScanClient {
  private static bleAddress: string;
  private types: string[];
  private cameraOptions: CameraOptions;
  private promise: any;
  private timeout: any;

  /**
   * 扫码初始化
   * @param errorNotify 错误回调
   * @param types 指定扫码枪类型
   */
  constructor(bleAddress?: string, cameraOptions?: CameraOptions, types?: string[]) {
    if (!types || !types.length) {
      types = ['camera'];
    }
    ScanClient.bleAddress = bleAddress || ScanClient.bleAddress || '';
    this.types = types;
    this.cameraOptions = cameraOptions as any;
  }

  /**
   * 扫码
   */
  scan(errorNotify?: (str: string, res: any) => void): Promise<{ data: string, type: 'bluetooth' | 'camera' | 'hid' } | undefined> {
    return new Promise((resolve, reject) => {
      this.promise = { resolve, reject };
      this.timeout = setTimeout(() => reject(new Error('scan timeout')), 300000); // 5分钟扫描超时
      if (~this.types.indexOf('camera')) {
        Camera.scan(this.cameraOptions, resolve, reject, errorNotify);
      }
    });
  }

  /**
   * 销毁
   */
  destroy(): void {
    this.promise && this.promise.resolve('');
    clearTimeout(this.timeout);
    if (~this.types.indexOf('camera')) {
      Camera.destroy();
    }
  }
}
