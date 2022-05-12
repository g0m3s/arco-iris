import { Stack, Typography } from '@mui/material'

export interface NameAndDescriptionProps {
  name: string
  hasObs?: boolean
  description: string
  fillingsOptions: string[]
}

export const NameAndDescription: React.FC<NameAndDescriptionProps> = ({ name, description, fillingsOptions, hasObs }) => {
  return (
    <Stack width='100%'>
      <Typography mb={1} sx={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }} className='gradientText'>{name}</Typography>
      <Stack>
        {/* <Typography sx={{ color: 'rgba(0,0,0,.3)', }}>Opções de recheios: </Typography> */}
        {fillingsOptions && fillingsOptions.map((option, index) => (
          <Typography ml={.5} sx={{ color: 'rgba(0,0,0,.3)', display: 'flex' }}> ✨ <Typography ml={.5} sx={{ fontWeight: 'bold' }}> {option}</Typography></Typography>
        ))}
      </Stack>
      {hasObs && <Typography mt={1} sx={{ color: 'rgba(0,0,0,.5)', opacity: .5, fontSize: '14px' }}>* bolos com recheios já combinados</Typography>}
      {/* <Typography mt={2} sx={{ color: 'rgba(0,0,0,.3)', textIndent: '1.5em', textAlign: 'justify' }}>{description}</Typography> */}
    </Stack>
  )
}
