import { Stack, Typography } from '@mui/material'
import { useIsMobile } from '../../hooks/useIsMobile'

export const FilterSection: React.FC = () => {

  const isMobile = useIsMobile()

  return (
    <Stack mb={3} paddingY={1} width='100vw' alignItems='flex-end'>
      <Stack
        spacing={2}
        paddingY={1}
        paddingX={3}
        color='#FFF'
        direction='row'
        bgcolor= '#EC9954'
        alignItems='center'
        justifyContent='flex-end'
        sx={{
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
        boxShadow= '0px 0px 10px rgba(0, 0, 0, 0.2)'
      >
        <Typography mr={isMobile ? 2 : 5}>{isMobile ? 'Filtro:' : 'Filtrar por:'}</Typography>

        <Typography sx={{ fontWeight: '700', cursor: 'pointer' }}>Bolos</Typography>
        <Typography>|</Typography>
        <Typography sx={{ fontWeight: '700', cursor: 'pointer' }}>Itens de confeitaria</Typography>
      </Stack>
    </Stack>
  )
}
