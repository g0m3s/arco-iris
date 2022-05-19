import { Stack, Typography } from '@mui/material'

export const PaymentObs: React.FC = () => {
  return (
    <Stack mt={3}>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .5, fontSize: '13px', textAlign: 'center' }}>
        * 50% do pagamento deve ser efetuado no momento da compra e 50% no momento da entrega.
      </Typography>
    </Stack>
  )
}
