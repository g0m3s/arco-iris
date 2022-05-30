import { Item } from '../types/item'

const Tradicional1 = 'https://i.ibb.co/ZW1pfdk/1.jpg'
const Tradicional2 = 'https://i.ibb.co/7Vkv2T0/2.jpg'
const Tradicional3 = 'https://i.ibb.co/9GYDS5G/3.jpg'
const Tradicional4 = 'https://i.ibb.co/qxf0TD8/4.jpg'
const Tradicional5 = 'https://i.ibb.co/Xtm33vG/5.jpg'

const Especial1 = 'https://i.ibb.co/dQ7cc9Y/1.jpg'
const Especial2 = 'https://i.ibb.co/sp4gCQW/2.jpg'
const Especial3 = 'https://i.ibb.co/j6SDpd8/3.jpg'
const Especial4 = 'https://i.ibb.co/RhVWS9L/4.jpg'
const Especial5 = 'https://i.ibb.co/F5kNcX0/5.jpg'

const MaisQueEspecial1 = 'https://i.ibb.co/0XwsTWJ/1.jpg'
const MaisQueEspecial2 = 'https://i.ibb.co/GJptgLW/2.jpg'
const MaisQueEspecial3 = 'https://i.ibb.co/7WPdByD/3.jpg'
const MaisQueEspecial4 = 'https://i.ibb.co/XZr5t19/4.jpg'
const MaisQueEspecial5 = 'https://i.ibb.co/w63f7js/5.jpg'

export const products: Item[] = [
  {
    url: Tradicional1,
    price: [80.00, 145.00, 215.00],
    additionalPhotos: [Tradicional1, Tradicional2, Tradicional3, Tradicional4, Tradicional5],
    name: 'Bolos com recheios tradicionais',
    description: 'São bolos com recheios mais comuns (como brigadeiro, ninho e beijinho) e possuem preços mais em conta ✨',
    fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
  }, {
    url: Especial1,
    hasObs: true,
    price: [90.00, 155.00, 225.00],
    name: 'Bolos com recheios especiais',
    additionalPhotos: [Especial1, Especial2, Especial3, Especial4, Especial5],
    fillingsOptions: ['Brigadeiro com morango*', 'Ninho com morango*', 'Creme belga com abacaxi*', 'Brigadeiro meio amargo', 'Oreo', 'Amendoim', 'Maracujá', 'Maracujá com brigadeiro*', 'Maracujá com brigadeiro branco*', 'Ninho com geleia de morango*', 'Creme belga com morango*', 'Ninho com Nutella*', 'Mousse de Nutella', 'Ganache meio amarga', 'Prestígio (brigadeiro com beijinho)*', 'Cappuccino'],
    description: 'São bolos com recheios mais gourmets e possuem opções de escolhas maiores! Além disso, alguns têm adicionais de frutas frescas ou geleias ☺️',
  }, {
    url: MaisQueEspecial1,
    name: 'Bolos com recheios mais que especiais',
    price: [120.00, 210.00, 310.00],
    additionalPhotos: [MaisQueEspecial1, MaisQueEspecial2, MaisQueEspecial3, MaisQueEspecial4, MaisQueEspecial5],
    fillingsOptions: ['Red Velvet com recheio de cream cheese', 'Massa branca ou chocolate com recheio de nozes.'],
    description: 'São bolos gourmets que já possuem massa e recheios combinados, como o red velvet com cream cheese 🥰',
  }, 
  // {
  //   url: bolo3,
  //   name: 'Naked cake',
  //   additionalPhotos: [bolo2, bolo3],
  //   fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
  //   description: 'São bolos conhecidos por não possuírem cobertura, tendo massa e recheio aparentes. Na maioria, o topo de bolo é composto por frutas ou docinhos 😊',
  // }, {
  //   url: bolo1,
  //   additionalPhotos: [bolo2, bolo3],
  //   name: 'Flork cake (bolo meme)',
  //   fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
  //   description: 'São os famosos bolos divertidos, pois possuem desenhos de meme e frases engraçadas escolhidas pelo próprio cliente 😍',
  // }
]
