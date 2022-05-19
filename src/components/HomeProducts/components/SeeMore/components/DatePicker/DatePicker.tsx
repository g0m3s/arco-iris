import { SetStateAction } from 'react'
import { Stack, Typography } from '@mui/material'

export interface DatePickerProps {
  selectedDate: string
  setSelectedDate: (value: SetStateAction<string>) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, setSelectedDate }) => {
  return (
    <Stack mt={3} width='100%'>
      <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .8 }} mb={1.5} textAlign='left'>Dia da entrega:</Typography>
      <input
        type='date'
        style={{
          padding: 16,
          width: '85vw',
          height: '50px',
          border: 'none',
          borderRadius: 16,
          backgroundColor: 'rgba(0,0,0,.1)',
          boxShadow: '0 0 10px rgba(0,0,0,.15)'
        }}
        onChange={(e) => setSelectedDate(e.target.value)}
        value={selectedDate || new Date().toISOString().split('T')[0]}
      />
    </Stack>
  )
}
