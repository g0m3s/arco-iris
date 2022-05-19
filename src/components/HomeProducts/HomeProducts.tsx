import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Item } from '~/types/item'
import { SeeMore } from './components/SeeMore'
import { products } from '../../utils/products'
import { useIsMobile } from '../../hooks/useIsMobile'


export const HomeProducts: React.FC = () => {
  const isMobile = useIsMobile()
  const [selectedItem, setSelectedItem] = useState<Item>()
  const [seeMoreModalIsOpen, setSeeMoreModalIsOpen] = useState<boolean>(false)

  return (
    <Stack width='100vw' alignItems='center' mb={5}>
      <Stack
        width='100vw'
        flexWrap='wrap'
        justifyContent='center'
        direction={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? 'center' : 'unset'}
      >
        {products.map((product, index) => (
          <Stack
            sx={{
              padding: 3,
              borderRadius: 5,
              cursor: 'pointer',
              margin: isMobile ? 0 : 1,
              marginBottom: isMobile ? 3 : 0,
              width: isMobile ? '75vw' : '19vw',
              minHeight: isMobile ? '60vh' : 'auto',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
            key={index}
            onClick={() => {
              setSelectedItem(product)
              setSeeMoreModalIsOpen(true)
            }}
            justifyContent='space-between'
          >
            <Stack alignItems='center'>
              <Stack
                maxWidth='180px'
                overflow='hidden'
                maxHeight='180px'
                borderRadius='50%'
                alignItems='center'
                justifyContent='center'
              >
                <img
                  width='100%'
                  alt='product'
                  src={product.url}
                />
              </Stack>
              <Typography
                marginY={1.5}
                variant='body2'
                className='gradientText'
                sx={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                {product.name}
              </Typography>
              <Typography sx={{ color: 'rgba(0,0,0,.3)', textIndent: '1.2em', textAlign: 'justify' }}>{product.description}</Typography>
            </Stack>

            {product.price && (
              <Stack sx={{ fontSize: '18px', fontWeight: 'bold', }} mt={1}>
                <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                  Preço (P):
                  <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price[0].toFixed(2)}</Typography>
                </Typography>
                <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                  Preço (M):
                  <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price[1].toFixed(2)}</Typography>
                </Typography>
                <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                  Preço (G):
                  <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price[2].toFixed(2)}</Typography>
                </Typography>
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
      {selectedItem && <SeeMore isOpen={seeMoreModalIsOpen} item={selectedItem} onClose={() => setSeeMoreModalIsOpen(false)} />}
    </Stack>
  )
}
