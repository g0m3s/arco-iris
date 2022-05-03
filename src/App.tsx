import './App.css'
import React from 'react'
import { Stack } from '@mui/material'
import { Header, HomeProducts, IntroMessage, FilterSection } from './components'

export const App: React.FC = () => {

  return (
    <Stack
      minHeight='100vh'
      alignItems='center'
      sx={{
        overflowX: 'hidden'
      }}
    >
      <Header />
      <IntroMessage />
      <FilterSection />
      <HomeProducts />
    </Stack>
  )
}

export default App
