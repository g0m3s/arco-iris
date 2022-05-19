
import { useState } from 'react'
import { Item } from '~/types/item'
import { useSnackbar } from 'notistack'
import { Drawer, Stack } from '@mui/material'
import {
  BuyArea,
  CakeType,
  PaymentObs,
  DatePicker,
  TopOfModal,
  DoughTypeArea,
  TopOptionArea,
  FillingChoice,
  SizeOptionsArea,
  AdditionalPhotos,
  NameAndDescription,
} from './components'

export interface SeeMoreModalProps {
  item: Item
  isOpen: boolean
  onClose: () => void
}

export const SeeMore: React.FC<SeeMoreModalProps> = ({ item, isOpen, onClose }) => {

  const { enqueueSnackbar } = useSnackbar()
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [withTopOption, setwithTopOption] = useState<boolean>(false)
  const [selectedFilling, setSelectedFilling] = useState<string>('')
  const [selectedCakeType, setSelectedCakeType] = useState<number>(0)
  const [selectedProductSize, setSelectedProductSize] = useState<number>(0)
  const [selectedProductDough, setSelectedProductDough] = useState<number>(0)

  const sizeByIndex = () => {
    switch (selectedProductSize) {
      case 0:
        return 'P'
      case 1:
        return 'M'
      case 2:
        return 'G'
    }
  }

  const getDough = () => {
    switch (selectedProductDough) {
      case 0:
        return 'Chocolate'
      case 1:
        return 'Red velvet'
      case 2:
        return 'Branca'
      case 3:
        return 'Baunilha'
    }
  }

  const getCakeType = () => {
    switch (selectedCakeType) {
      case 0:
        return 'Comum'
      case 1:
        return 'Naked cake'
      case 2:
        return 'Flork cake'
    }
  }

  const finishOrder = () => {

    if (!selectedFilling) {
      return enqueueSnackbar('Você precisa preencher a opção de recheio!.', {
        variant: 'warning',
        autoHideDuration: 3500
      })
    }

    const message = `Olá, gostaria de pedir um bolo *${item.name}* - *${getCakeType()}* com recheio *${selectedFilling}* e massa *${getDough()}* no tamanho *${sizeByIndex()}* ${withTopOption ? `com topo personalizado.` : '.'} Para o dia *${selectedDate || new Date().toISOString().split('T')[0]}*.
    \n \n Endereço: `

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
        <TopOfModal onClose={onClose} url={item.url} name={item.name} />
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
            <FillingChoice setSelectedFilling={setSelectedFilling} />
            <SizeOptionsArea selectedProductSize={selectedProductSize} setSelectedProductSize={setSelectedProductSize} />
            <CakeType selectedCakeType={selectedCakeType} setSelectedCakeType={setSelectedCakeType} />
            <DoughTypeArea selectedProductSize={selectedProductDough} setSelectedProductSize={setSelectedProductDough} />
            <TopOptionArea selectedProductSize={withTopOption} setSelectedProductSize={setwithTopOption} />
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <BuyArea finishOrder={finishOrder} price={item.price[selectedProductSize]} />
            <PaymentObs />
          </Stack>
        </Stack>
      </Stack >
    </Drawer >
  )
}
