import { Stack, Typography } from '@mui/material'

export const Warnings: React.FC = () => {

  return (
    <Stack mb={3} spacing={1} width='90vw'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '14px' }}>
        * Bolos P: 15cm de diâmetro por 10cm de altura. Serve de 15 a 18 pessoas.
      </Typography>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '14px' }}>
        * Bolos M: 20cm de diâmetro por 10cm de altura. Serve de 25 a 28 pessoas.
      </Typography>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', fontSize: '14px' }}>
        * Bolos G: 26cm de diâmetro por 10cm de altura. Serve de 40 a 45 pessoas.
      </Typography>
    </Stack>
  )
}
