import { AppBar, Stack, Toolbar } from '@mui/material'
import LogoArcoIris from '../../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          zIndex: 200,
          paddingY: 1,
          backgroundColor: '#b0d4dc',
        }}
      >
        <Toolbar
          sx={{
            height: 70,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img src={LogoArcoIris} height='100%' alt='logo arco iris' />
        </Toolbar>
      </AppBar>
      <Stack height='10px' bgcolor='#f3e38c' ></Stack>
      <Stack height='10px' bgcolor='#EC9954' ></Stack>
      <Stack height='10px' bgcolor='#2596be' ></Stack>
    </>
  )
}
