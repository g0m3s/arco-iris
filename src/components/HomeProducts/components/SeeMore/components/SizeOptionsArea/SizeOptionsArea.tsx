import { Stack, SxProps, Typography } from '@mui/material'

export interface SizeOptionsAreaProps {
  selectedProductSize: number
  setSelectedProductSize: (size: number) => void
}

export const SizeOptionsArea: React.FC<SizeOptionsAreaProps> = ({ selectedProductSize, setSelectedProductSize }) => {

  const sizeOptionStyles: SxProps = {
    padding: 2,
    width: '20px',
    height: '20px',
    borderRadius: 5,
    cursor:'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,.15)'
  }

  return (
    <Stack mt={3} width='100%'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Quantidade de fatias:</Typography>
      <Stack alignItems='center' width='100%'>
        <Stack alignItems='center' direction='row' justifyContent='space-between' width='95%'>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(0)}
            color={selectedProductSize === 0 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 0 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>35</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(1)}
            color={selectedProductSize === 1 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 1 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>40</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(2)}
            color={selectedProductSize === 2 ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize === 2 ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>45</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
