import { Stack, SxProps, Typography } from '@mui/material'

export interface DoughTypeAreaProps {
  selectedProductSize: number
  setSelectedProductSize: (size: number) => void
}

export const DoughTypeArea: React.FC<DoughTypeAreaProps> = ({ selectedProductSize, setSelectedProductSize }) => {

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
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Escolha a massa:</Typography>
      <Stack alignItems='center' width='100%'>
        <Stack spacing={2} alignItems='center' justifyContent='space-between' width='95%'>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(0)}
            color={selectedProductSize === 0 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 0 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Chocolate</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(1)}
            color={selectedProductSize === 1 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 1 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Red velvet</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(2)}
            color={selectedProductSize === 2 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 2 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Branca</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(3)}
            color={selectedProductSize === 3 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 3 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Baunilha</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
