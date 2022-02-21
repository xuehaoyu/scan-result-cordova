import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import './App.css'

interface IProps { }

const App: React.FC<IProps> = (props: IProps) => {
  const elements: any = useRoutes(routes)
  return (
    <>
      {elements}
    </>
  )
}
export default App
