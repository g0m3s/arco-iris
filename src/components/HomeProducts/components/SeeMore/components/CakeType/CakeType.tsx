import { Stack, SxProps, Typography } from '@mui/material'

interface DoughTypeAreaProps {
  selectedCakeType: number
  setSelectedCakeType: (size: number) => void
}

export const CakeType: React.FC<DoughTypeAreaProps> = ({ selectedCakeType, setSelectedCakeType }) => {

  const sizeOptionStyles: SxProps = {
    padding: 2,
    width: '100%',
    height: '20px',
    borderRadius: 3,
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,.15)'
  }

  return (
    <Stack mt={3} width='100%'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Tipo de bolo:</Typography>
      <Stack alignItems='center' width='100%'>
        <Stack spacing={2} alignItems='center' justifyContent='space-between' width='95%'>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedCakeType(0)}
            color={selectedCakeType === 0 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedCakeType === 0 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Comum</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedCakeType(1)}
            color={selectedCakeType === 1 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedCakeType === 1 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Naked cake</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedCakeType(2)}
            color={selectedCakeType === 2 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedCakeType === 2 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Flork cake (bolo meme)</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
