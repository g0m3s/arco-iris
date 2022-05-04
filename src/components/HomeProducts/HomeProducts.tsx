import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Item } from '~/types/item'
import bolo1 from '../../assets/bolo1.png'
import bolo2 from '../../assets/bolo2.png'
import bolo3 from '../../assets/bolo3.png'
import bolo4 from '../../assets/bolo4.png'
import bolo5 from '../../assets/bolo5.png'
import { SeeMore } from './components/SeeMore'


export const HomeProducts: React.FC = () => {
  const isMobile = useIsMobile()
  const [selectedItem, setSelectedItem] = useState<Item>()
  const [seeMoreModalIsOpen, setSeeMoreModalIsOpen] = useState<boolean>(false)

  const products: Item[] = [
    {
      url: bolo1,
      name: 'Chocolate com geleia de morango e amendoim',
      price: 0,
      description: 'Fatia bem generosa de massa de chocolate Recheio de brigadeiro com geleia de morango e amendoim',
    }, {
      url: bolo2,
      name: 'Bentô cakes',
      price: 0,
      description: 'Inspirado nas decorações dos “bentô cakes”, o famoso bolo meme tem feito sucesso e aqui não podia faltar também, né?! 🤣',
    }, {
      url: bolo4,
      name: 'Bolo de Chocolate',
      price: 10.00,
      description: 'Para as rosetas, delicadeza. Rosas maiores em cima e menores para o acabamento da parte de baixo do bolo 🌺 Entre as rosas maiores, folhas 🍀 Essas folhinhas foram feitas com um bico chamado “bico folha” e as cores foram pensadas para combinar entre si e trazerem leveza ao bolo.',
    }, {
      url: bolo3,
      name: 'Naked cake',
      price: 4.20,
      description: 'E tem novidade quentinha no ar!! 🥳 Naked cake, mais conhecido como bolo sem cobertura, é uma ótima opção para uma mesa de aniversário (principalmente de adulto). Sua versatilidade combina com qualquer decoração de festa! 😍',
    }, {
      url: bolo1,
      name: 'Chocolate com geleia de morango e amendoim',
      price: 0,
      description: 'Fatia bem generosa de massa de chocolate Recheio de brigadeiro com geleia de morango e amendoim',
    }, {
      url: bolo2,
      name: 'Bentô cakes',
      price: 0,
      description: 'Inspirado nas decorações dos “bentô cakes”, o famoso bolo meme tem feito sucesso e aqui não podia faltar também, né?! 🤣',
    }, {
      url: bolo5,
      name: 'Bolo de abacaxi 🍍 e creme belga ',
      price: 0,
      description: 'Já ouviu falar na técnica do “Drip Cake”? O drip cake são essas “gotinhas” que dão um charme na cobertura do bolo ✨ É uma técnica delicada, o ponto da cobertura tem que estar bem certinho para não ter o risco de escorrer. É uma das técnicas que adoro fazer 🥰',
    }, {
      url: bolo4,
      name: 'Bolo de Chocolate',
      price: 10.00,
      description: 'Para as rosetas, delicadeza. Rosas maiores em cima e menores para o acabamento da parte de baixo do bolo 🌺 Entre as rosas maiores, folhas 🍀 Essas folhinhas foram feitas com um bico chamado “bico folha” e as cores foram pensadas para combinar entre si e trazerem leveza ao bolo.',
    }]

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
              <img
                width='180px'
                alt='product'
                height='180px'
                style={{ borderRadius: '50%' }}
                src={product.url}
              />
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
              <Typography sx={{ color: 'rgba(0,0,0,.3)', opacity: .5 }}>{product.description}</Typography>
            </Stack>

            <Stack sx={{ fontSize: '18px', fontWeight: 'bold', }} mt={1}>
              <Typography display='flex' alignItems='center' sx={{ fontSize: '16px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                Categoria: Bolos
              </Typography>
              <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                Preço (P):
                <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price.toFixed(2)}</Typography>
              </Typography>
              <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                Preço (M):
                <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price.toFixed(2)}</Typography>
              </Typography>
              <Typography display='flex' alignItems='center' sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: 'rgba(0,0,0,.3)' }}>
                Preço (G):
                <Typography ml={.5} sx={{ fontSize: '18px', fontWeight: 'bold', fontShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} color='rgba(37, 150, 190, .75)'> R$ {product.price.toFixed(2)}</Typography>
              </Typography>

            </Stack>
          </Stack>
        ))}
      </Stack>
      {selectedItem && <SeeMore isOpen={seeMoreModalIsOpen} item={selectedItem} onClose={()=>setSeeMoreModalIsOpen(false)} />}
    </Stack>
  )
}
