import LogoArcoIris from '../../assets/logo.png'
import { AppBar, Stack, Toolbar } from '@mui/material'

export const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          zIndex: 5,
          backgroundColor: '#FFF',
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
        <Stack height='10px' bgcolor='#f3e38c' ></Stack>
        <Stack height='10px' bgcolor='#EC9954' ></Stack>
        <Stack height='10px' bgcolor='#2596be' ></Stack>
      </AppBar>
    </>
  )
}
