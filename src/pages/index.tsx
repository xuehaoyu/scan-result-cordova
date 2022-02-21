import React from 'react'
import { SafeArea, TabBar } from 'antd-mobile'
import {
  AppOutline,
  AppstoreOutline,
  ShopbagOutline
} from 'antd-mobile-icons'
import { Outlet, useSearchParams, useNavigate, NavigateFunction } from 'react-router-dom'
import './index.scss'

interface IProps { }

const Index: React.FC<IProps> = (props: IProps) => {
  const params: any = useSearchParams()
  const navigate: NavigateFunction = useNavigate()
  console.log('params_____', params)
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

  return (
    <div className='layout-page'>
      <div className='layout-page-body'>
        <Outlet></Outlet>
      </div>
      <div className='layout-page-footer'>
        <TabBar
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
