import './App.css'
import React from 'react'
import { Header, HomeProducts, IntroMessage } from './components'

export const App: React.FC = () => {
  
  return (
    <div className='App'>
      <Header />
      <IntroMessage />
      <HomeProducts />
    </div>
  )
}

export default App
