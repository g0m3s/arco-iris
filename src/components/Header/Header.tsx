import { AppBar, Stack, Toolbar, Typography } from "@mui/material"

export const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          zIndex: 200,
          paddingY: 1,
          backgroundColor: 'transparent',
        }}
      >
        <Toolbar
          sx={{
            height: 70,
            display: 'flex',
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: 'red' }} className='gradient-text'>Header aqui</Typography>
        </Toolbar>
      </AppBar>
      <Stack height='10px' bgcolor='#f3e38c' ></Stack>
      <Stack height='10px' bgcolor='#EC9954' ></Stack>
      <Stack height='10px' bgcolor='#2596be' ></Stack>
    </>
  )
}
