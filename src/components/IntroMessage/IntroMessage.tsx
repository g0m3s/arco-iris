import Lottie from 'react-lottie'
import { Stack, Typography } from '@mui/material'
import { useIsMobile } from '../../hooks/useIsMobile'
import FoodsAnimation from '../../assets/cake.json'

export const IntroMessage: React.FC = () => {

  const isMobile = useIsMobile()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FoodsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      sx={{ width: '100vw' }}
    >
      <Typography
        variant='h2'
        className='animatedText'
        sx={{
          cursor: 'pointer',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: isMobile ? '1.6rem' : '4rem',
        }}
      >Confeitaria com amor</Typography>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Lottie options={defaultOptions}
          height={isMobile ? 100 : 150}
          width={isMobile ? 100 : 150}
        />
      </Stack>
    </Stack>
  )
}
