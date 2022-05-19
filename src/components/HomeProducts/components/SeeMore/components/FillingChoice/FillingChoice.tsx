import { SetStateAction } from 'react'
import { Stack, Typography } from '@mui/material'

interface FillingChoiceProps {
  setSelectedFilling: (value: SetStateAction<string>) => void
}

export const FillingChoice: React.FC<FillingChoiceProps> = ({ setSelectedFilling }) => {

  return (
    <Stack mt={3} width='100%'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Escolha seu recheio:</Typography>
      <textarea
        rows={5}
        id='story'
        name='story'
        style={{
          padding: 16,
          border: 'none',
          borderRadius: 16,
          backgroundColor: 'rgba(0,0,0,.1)',
          boxShadow: '0 0 10px rgba(0,0,0,.15)'
        }}
        onChange={(e) => setSelectedFilling(e.target.value)}
        placeholder='(*) Digite aqui até duas opções de recheio, exceto quando este já for combinado'
      />
    </Stack>
  )
}
