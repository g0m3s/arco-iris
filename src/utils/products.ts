import { Item } from '../types/item'
import bolo1 from '../assets/bolo1.png'
import bolo2 from '../assets/bolo2.png'
import bolo3 from '../assets/bolo3.png'
import bolo4 from '../assets/bolo4.png'
import bolo5 from '../assets/bolo5.png'

export const products: Item[] = [
  {
    url: bolo1,
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo2, bolo3],
    name: 'Chocolate com geleia de morango e amendoim',
    description: 'Fatia bem generosa de massa de chocolate Recheio de brigadeiro com geleia de morango e amendoim',
  }, {
    url: bolo2,
    name: 'Bentô cakes',
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo5, bolo4, bolo3],
    description: 'Inspirado nas decorações dos “bentô cakes”, o famoso bolo meme tem feito sucesso e aqui não podia faltar também, né?! 🤣',
  }, {
    url: bolo4,
    name: 'Bolo de Chocolate',
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo5, bolo4, bolo3],
    description: 'Para as rosetas, delicadeza. Rosas maiores em cima e menores para o acabamento da parte de baixo do bolo 🌺 Entre as rosas maiores, folhas 🍀 Essas folhinhas foram feitas com um bico chamado “bico folha” e as cores foram pensadas para combinar entre si e trazerem leveza ao bolo.',
  }, {
    url: bolo3,
    name: 'Naked cake',
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo2, bolo3],
    description: 'E tem novidade quentinha no ar!! 🥳 Naked cake, mais conhecido como bolo sem cobertura, é uma ótima opção para uma mesa de aniversário (principalmente de adulto). Sua versatilidade combina com qualquer decoração de festa! 😍',
  }, {
    url: bolo1,
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo2, bolo3],
    name: 'Chocolate com geleia de morango e amendoim',
    description: 'Fatia bem generosa de massa de chocolate Recheio de brigadeiro com geleia de morango e amendoim',
  }, {
    url: bolo2,
    name: 'Bentô cakes',
    additionalPhotos: [bolo5, bolo4, bolo3],
    price: [12.5, 17.75, 22.5],
    description: 'Inspirado nas decorações dos “bentô cakes”, o famoso bolo meme tem feito sucesso e aqui não podia faltar também, né?! 🤣',
  }, {
    url: bolo5,
    name: 'Bolo de abacaxi 🍍 e creme belga ',
    price: [12.5, 17.75, 22.5],
    description: 'Já ouviu falar na técnica do “Drip Cake”? O drip cake são essas “gotinhas” que dão um charme na cobertura do bolo ✨ É uma técnica delicada, o ponto da cobertura tem que estar bem certinho para não ter o risco de escorrer. É uma das técnicas que adoro fazer 🥰',
  }, {
    url: bolo4,
    name: 'Bolo de Chocolate',
    price: [12.5, 17.75, 22.5],
    description: 'Para as rosetas, delicadeza. Rosas maiores em cima e menores para o acabamento da parte de baixo do bolo 🌺 Entre as rosas maiores, folhas 🍀 Essas folhinhas foram feitas com um bico chamado “bico folha” e as cores foram pensadas para combinar entre si e trazerem leveza ao bolo.',
  }]
