import React, { useState, useEffect } from 'react'
import { CommonPopup } from '@/components'
import { Input, Button, TextArea, Toast } from 'antd-mobile'
import axios from '@/model/axios'
import './index.scss'

interface IProps {
  visible: boolean,
  onClose: () => void;
}

const ScanPage: React.FC<IProps> = (props: IProps) => {
  const { visible, onClose } = props
  const [uid, setUid] = useState<string>('207046219')
  const getToken = async () => {
    if (!uid) {
      Toast.show({
        icon: 'fail',
        content: '输入uid'
      })
      return
    }
    const userInfo = '/sheepApi/v1/game/user_info'
    const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjcyNDYsIm5iZiI6MTY2MzIyNTA0NiwiaWF0IjoxNjYzMjIzMjQ2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzU0MzAxNCwiZGVidWciOiIiLCJsYW5nIjoiIn0.5qpiRRjxwUmN1U8Qst8dFBMWMQyWi26DcfTgHIITZds'
    const res = await axios.get(`${userInfo}`, {
      params: {
        uid,
        t,
        'content-type': 'application/json'
      }
    })
    const data = res.data.data
    const loginUrl = '/sheepApi/v1/user/login_oppo'
    const loginRes = await axios.post(loginUrl, {
      uid: data.wx_open_id,
      avatar: 1,
      nick_name: 1,
      sex: 1,
      t,
      'content-type': 'application/json'
    })
    console.log('loginRes_____', res, loginRes)
    // 'https://cat-match.easygame2021.com/sheep/v1/game/update_user_skin?skin=10&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ2ODg2ODAsIm5iZiI6MTY2MzU4NjQ4MCwiaWF0IjoxNjYzNTg0NjgwLCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjoyMDcwNDYyMTksImRlYnVnIjoiIiwibGFuZyI6IiJ9.b9ETb4sGSDYEMC2YOpcc6TMOSCBykBVDky3EnTP5a7o'
  }
  return (
    <CommonPopup
      className='sheep-modal'
      visible={visible}
      footer={null}
      title='羊了个羊'
      onClose={onClose}
    >
      <div className='sheep-modal-body'>
        <div>
          <Input type='text' placeholder='输入UID' value={uid} onChange={(e: any) => {
            setUid(e)
          }} />
          <Button onClick={() => {
            getToken()
          }}>获取TOKEN</Button>
        </div>
        <div>
          <TextArea></TextArea>
        </div>
      </div>
    </CommonPopup>
  )
}
export default ScanPage
