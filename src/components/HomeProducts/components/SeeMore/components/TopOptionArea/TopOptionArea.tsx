import { Stack, SxProps, Typography } from '@mui/material'

export interface TopOptionAreaProps {
  selectedProductSize: boolean
  setSelectedProductSize: (choice: boolean) => void
}

export const TopOptionArea: React.FC<TopOptionAreaProps> = ({ selectedProductSize, setSelectedProductSize }) => {

  const sizeOptionStyles: SxProps = {
    padding: 2,
    width: '30%',
    height: '20px',
    borderRadius: 3,
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,.15)'
  }

  return (
    <Stack mt={3} width='100%'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Adicionar topo personalizado:</Typography>
      <Stack alignItems='center' width='100%'>
        <Stack spacing={2} direction='row' alignItems='center' justifyContent='space-between' width='100%'>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(false)}
            color={!selectedProductSize ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={!selectedProductSize ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Não</Typography>
          </Stack>
          <Stack
            sx={sizeOptionStyles}
            onClick={() => setSelectedProductSize(true)}
            color={selectedProductSize ? '#FFF' : 'rgba(0,0,0,.5)'}
            bgcolor={selectedProductSize ? 'rgb(248,204,212)' : '#FFF'}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>Sim</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
