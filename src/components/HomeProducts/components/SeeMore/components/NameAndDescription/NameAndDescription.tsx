import { Typography } from '@mui/material'

export interface NameAndDescriptionProps {
  name: string
  description: string
}

export const NameAndDescription: React.FC<NameAndDescriptionProps> = ({ name, description }) => {
  return (
    <>
      <Typography sx={{
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }} className='gradientText'>{name}</Typography>
      <Typography mt={2} sx={{ color: 'rgba(0,0,0,.3)', textIndent: '1.5em' }}>{description}</Typography>
    </>
  )
}
