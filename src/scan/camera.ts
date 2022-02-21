export default class CameraScanner {
  private static resolve: any
  private static errorNotify: any
  private static status = 'hide'
  private static type = 'camera'

  /**
   * 扫码
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static scan (params: any, resolve: any, reject: any, errorNotify?: (str: string, res: any) => void): void {
    this.resolve = resolve
    this.errorNotify = errorNotify
    if (!window.QRScanner) return
    if (this.status === 'hide') {
      window.QRScanner.scan(this.scanComplete, params)
      window.QRScanner.show(() => {
        this.status = 'show'
      })
    } else {
      window.QRScanner.scan(this.scanComplete, params)
    }
  }

  /**
   * 销毁
   */
  static destroy (): void {
    if (this.status === 'show') {
      window.QRScanner && window.QRScanner.destroy(() => {
        this.status = 'hide'
      })
    }
  }

  /**
   * 扫码结束
   */
  private static scanComplete (err: any, content: any) {
    if (err) {
      window.QRScanner.getStatus((status: any) => {
        if (!status.authorized) {
          CameraScanner.errorNotify(CameraScanner.type, 'unauthorized')
          return
        }
        CameraScanner.errorNotify(CameraScanner.type, err)
      })
    } else {
      CameraScanner.resolve({ data: content, type: CameraScanner.type })
    }
  }
}
