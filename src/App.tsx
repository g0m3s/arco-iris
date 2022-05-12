import './App.css'
import React from 'react'
import { Stack } from '@mui/material'
import { Header, HomeProducts, IntroMessage, FilterSection, Warnings } from './components'

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
      <Warnings />
    </Stack>
  )
}

export default App
