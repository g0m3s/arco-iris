import './App.css'
import React from 'react'
import { Header, HomeProducts, IntroMessage, FilterSection } from './components'

export const App: React.FC = () => {
  
  return (
    <div className='App'>
      <Header />
      <IntroMessage />
      <FilterSection />
      <HomeProducts />
    </div>
  )
}

export default App
