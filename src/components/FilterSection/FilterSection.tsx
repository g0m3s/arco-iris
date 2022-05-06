import whatsapp from '../../assets/whatsapp.svg'
import instagram from '../../assets/instagram.svg'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Avatar, Link, Stack, Typography } from '@mui/material'

export const FilterSection: React.FC = () => {

  const isMobile = useIsMobile()

  return (
    <Stack mb={3} paddingY={1} width='100vw' alignItems='flex-end'>
      <Stack
        spacing={2}
        paddingY={1}
        paddingX={3}
        color='#FFF'
        direction='row'
        bgcolor='#EC9954'
        alignItems='center'
        justifyContent='flex-end'
        sx={{
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
        boxShadow='0px 0px 10px rgba(0, 0, 0, 0.2)'
      >
        <Typography mr={isMobile ? 2 : 5}>{isMobile ? 'Entre em contato:' : 'Entre em contato conosco:'}</Typography>

        <Link href='https://api.whatsapp.com/send?phone=5522999224130' target='_blank'>
          <Avatar sx={{ height: '25px', width: '25px' }} src={whatsapp} />
        </Link>
        <Typography>|</Typography>
        <Link href='https://www.instagram.com/arcoirissdoceria/' target='_blank'>
          <Avatar sx={{ height: '25px', width: '25px' }} src={instagram} />
        </Link>
      </Stack>
    </Stack>
  )
}
