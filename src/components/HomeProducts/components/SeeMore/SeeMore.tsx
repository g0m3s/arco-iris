import { Item } from '~/types/item'
import { Drawer, Stack } from '@mui/material'
import ArrowLeft from '../../../../assets/arrowLeft.png'

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
          bgcolor: 'rgba(132, 108, 140, .9)'
        }
      }}
    >
      <Stack position='relative' height='25vh' bgcolor='rgba(132, 108, 140, .9)'>
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
        sx={{
          height: '75vh',
          bgcolor: '#FFF',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
        }}>

      </Stack>
    </Drawer >
  )
}
