import { Stack, Typography } from '@mui/material'

export const FilterSection: React.FC = () => {

  return (
    <Stack mb={3} paddingY={1} width='100vw' alignItems='end'>
      <Stack
        spacing={2}
        padding={1}
        color='#FFF'
        direction='row'
        bgcolor= '#EC9954'
        alignItems='center'
        justifyContent='end'
        sx={{
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
        boxShadow= '0px 0px 10px rgba(0, 0, 0, 0.2)'
      >
        <Typography mr={5}>Filtrar por:</Typography>

        <Typography sx={{ fontWeight: '700', cursor: 'pointer' }}>Bolos</Typography>
        <Typography>|</Typography>
        <Typography sx={{ fontWeight: '700', cursor: 'pointer' }}>Itens de confeitaria</Typography>
      </Stack>
    </Stack>
  )
}
