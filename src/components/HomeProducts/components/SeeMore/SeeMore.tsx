import { Item } from '~/types/item'
import ArrowLeft from '../../../../assets/arrowLeft.png'
import { Drawer, Stack, Typography } from '@mui/material'

export interface SeeMoreModalProps {
  item: Item
  isOpen: boolean
  onClose: () => void
}

export const SeeMore: React.FC<SeeMoreModalProps> = ({ item, isOpen, onClose }) => {

  return (
    <Drawer
      variant='temporary'
      anchor='bottom'
      open={isOpen}
      PaperProps={{
        sx: {
          height: '100vh',
          bgcolor: 'rgb(248,204,212)'
          // bgcolor: 'rgba(132, 108, 140, .75)'
        }
      }}
    >
      <Stack position='relative' height='20vh' bgcolor='rgb(248,204,212)'>
        <Stack onClick={onClose} mt={4} ml={2} width='100vw'>
          <img
            width='25px'
            height='25px'
            src={ArrowLeft}
            alt={item.name}
            style={{ filter: 'invert(100%)' }}
          />
        </Stack>
        <Stack position='absolute' top='100%' left='50%' sx={{ transform: 'translate(-50%, -50%)' }}>
          <img
            width='200px'
            height='200px'
            src={item.url}
            alt={item.name}
            style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,.3)' }}
          />
        </Stack>
      </Stack>
      <Stack
        alignItems='center'
        sx={{
          height: '80vh',
          bgcolor: '#FFF',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
        }}>
        <Stack width='85vw' alignItems='center' mt='125px'>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
          }} className='gradientText'>{item.name}</Typography>
          <Typography mt={2} sx={{ color: 'rgba(0,0,0,.3)', opacity: .8, textIndent: '1.5em' }}>{item.description}</Typography>

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
              }}>R$ {item.price.toFixed(2)}</Typography>
            <Stack
              padding={1}
              color='#FFF'
              bgcolor='rgba(255,66,70,.75)'
              sx={{ borderRadius: '10px' }}
            >
              <Typography sx={{
                fontSize: '18px',
                fontWeight: 'bold',
              }}>Comprar</Typography>
            </Stack>
          </Stack>
          {/* <Stack
            mt={4}
            className='secondaryButton'
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Adicionar ao carrinho
          </Stack> */}
        </Stack>
      </Stack>
    </Drawer >
  )
}
