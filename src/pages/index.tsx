import React, { useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  AppstoreOutline,
  ShopbagOutline
} from 'antd-mobile-icons'
import { Outlet, useNavigate, NavigateFunction } from 'react-router-dom'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  const matchs = document.location.pathname.match(/^\/([^/]*)\/?/)
  const pathState = matchs ? matchs[1] : ''
  const navigate: NavigateFunction = useNavigate()

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: 'work',
      title: '办公',
      icon: <ShopbagOutline />
    },
    {
      key: 'game',
      title: '娱乐',
      icon: <AppstoreOutline />
    }
  ]

  useEffect(() => {
    if (!pathState) {
      navigate('/home')
    }
  }, [])

  return (
    <div className='layout-page'>
      <div className='layout-page-body'>
        <Outlet></Outlet>
      </div>
      <div className='layout-page-footer'>
        <TabBar
          activeKey={pathState}
          onChange={(val: any) => {
            navigate(`/${val}`)
          }}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
export default Index
