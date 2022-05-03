import { Stack, Typography } from '@mui/material';
import Lottie from 'react-lottie'
import FoodsAnimation from '../../assets/cake.json'

export const IntroMessage: React.FC = () => {
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
          fontSize: '4rem',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >Confeitaria com amor</Typography>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Lottie options={defaultOptions}
          height={150}
          width={150}
        />
      </Stack>
    </Stack>
  )
}
