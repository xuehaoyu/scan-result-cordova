import React from 'react'
import { Badge } from 'antd-mobile'
import {
  AppOutline,
  AppstoreOutline,
  ShopbagOutline,
  UserOutline
} from 'antd-mobile-icons'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot
    },
    {
      key: 'work',
      title: '办公',
      icon: <ShopbagOutline />,
      badge: '5'
    },
    {
      key: 'game',
      title: '娱乐',
      icon: <AppstoreOutline />
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />
    }
  ]

  return (
    <div className='layout-page'>
      待开放...
    </div>
  )
}
export default Index
