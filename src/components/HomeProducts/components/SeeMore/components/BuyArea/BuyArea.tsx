import { Stack, Typography } from '@mui/material'

export interface BuyAreaProps {
  price: number
  finishOrder: () => void
}

export const BuyArea: React.FC<BuyAreaProps> = ({ price, finishOrder }) => {

  return (
    <>
      <Stack
        mt={4}
        width='90%'
        padding={2}
        direction='row'
        borderRadius={5}
        alignItems='center'
        justifyContent='space-between'
        boxShadow='0 0 10px rgba(0,0,0,.15)'
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <Typography sx={{
          fontSize: '18px',
          fontWeight: 'bold',
        }}>R$ {price.toFixed(2)}</Typography>
        <Stack
          padding={1}
          color='#FFF'
          onClick={finishOrder}
          bgcolor='rgba(255,66,70,.75)'
          sx={{ borderRadius: '10px', cursor:'pointer' }}
        >
          <Typography sx={{
            fontSize: '18px',
            fontWeight: 'bold',
          }}>Comprar</Typography>
        </Stack>
      </Stack>
    </>
  )
}
