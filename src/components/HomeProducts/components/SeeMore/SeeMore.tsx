
import { useState } from 'react'
import { Item } from '~/types/item'
import ArrowLeft from '../../../../assets/arrowLeft.png'
import { Drawer, Stack, Typography } from '@mui/material'
import { BuyArea, NameAndDescription, SizeOptionsArea, AdditionalPhotos } from './components'

export interface SeeMoreModalProps {
  item: Item
  isOpen: boolean
  onClose: () => void
}

export const SeeMore: React.FC<SeeMoreModalProps> = ({ item, isOpen, onClose }) => {

  const [note, setNote] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedProductSize, setSelectedProductSize] = useState<number>(0)

  const sizeByIndex = (index: number) => {
    switch (index) {
      case 0:
        return 'P'
      case 1:
        return 'M'
      case 2:
        return 'G'
    }
  }

  const finishOrder = () => {

    const message = `Olá, gostaria de pedir um bolo *${item.name}* no tamanho *${sizeByIndex(selectedProductSize)}* para o dia *${selectedDate || new Date().toISOString().split('T')[0]}*. ${note && `Obs.: *${note}*`} \n \n Endereço: `

    window.open(`https://api.whatsapp.com/send?phone=5522999224130&text=${window.encodeURIComponent(message)}`, '_blank')
  }

  return (
    <Drawer
      variant='persistent'
      ModalProps={{
        keepMounted: true,
      }}
      anchor='bottom'
      open={isOpen}
      PaperProps={{
        sx: {
          zIndex: 5,
          overflowX: 'hidden',
          overflowY: 'scroll',
          bgcolor: 'rgb(248,204,212)',
        }
      }}
    >
      <Stack>

        <Stack position='relative' minHeight='20vh' bgcolor='rgb(248,204,212)'>
          <Stack onClick={onClose} mt={4} ml={2} width='100vw' sx={{ cursor: 'pointer' }}>
            <img
              width='25px'
              height='25px'
              src={ArrowLeft}
              alt={item.name}
              style={{ filter: 'invert(100%)' }}
            />
          </Stack>
          <Stack zIndex={100} position='absolute' top='100%' left='50%' sx={{ transform: 'translate(-50%, -50%)' }}>
            <img
              width='200px'
              height='200px'
              src={item.url}
              alt={item.name}
              style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,.3)' }}
            />
          </Stack>
        </Stack>

        <Stack
          zIndex={10}
          alignItems='center'
          sx={{
            bgcolor: '#FFF',
            paddingBottom: 5,
            minHeight: '80vh',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px',
          }}>
          <Stack width='85vw' alignItems='center' justifyContent='space-between' mt='125px'>
            <NameAndDescription
              name={item.name}
              hasObs={item.hasObs}
              description={item.description}
              fillingsOptions={item.fillingsOptions!}
            />

            {item.additionalPhotos && <AdditionalPhotos photos={item.additionalPhotos} />}

            <Stack mt={3} width='100%'>
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
                onChange={(e) => setNote(e.target.value)}
                placeholder='Adicione aqui informações adicionais (cor, imagem no topo, etc)'
              />
            </Stack>

            <SizeOptionsArea selectedProductSize={selectedProductSize} setSelectedProductSize={setSelectedProductSize} />

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

            <BuyArea finishOrder={finishOrder} price={item.price[selectedProductSize] || 0} />
            <Stack mt={3}>
              <Typography sx={{ color: 'rgba(0,0,0,.5)', opacity: .5, fontSize: '13px', textAlign: 'center' }}>
                * 50% do pagamento deve ser efetuado no momento da compra e 50% no momento da entrega.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

      </Stack >
    </Drawer >
  )
}
