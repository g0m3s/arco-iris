import { Stack } from '@mui/material'
import ArrowLeft from '../../../../../../assets/arrowLeft.png'

interface TopOfModalProps {
  url: string
  name: string
  onClose: () => void
}

export const TopOfModal: React.FC<TopOfModalProps> = ({ onClose, name, url }) => {
  return (
    <Stack position='relative' minHeight='20vh' bgcolor='rgb(248,204,212)'>
      <Stack onClick={onClose} mt={4} ml={2} width='100vw' sx={{ cursor: 'pointer' }}>
        <img
          alt={name}
          width='25px'
          height='25px'
          src={ArrowLeft}
          style={{ filter: 'invert(100%)' }}
        />
      </Stack>
      <Stack
        left='50%'
        top='100%'
        zIndex={100}
        maxWidth='200px'
        maxHeight='200px'
        overflow='hidden'
        borderRadius='50%'
        alignItems='center'
        position='absolute'
        justifyContent='center'
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <img
          src={url}
          alt={name}
          width='100%'
          style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,.3)' }}
        />
      </Stack>
    </Stack>
  )
}
