import { Item } from '../types/item'

import Especial1 from '../assets/especial/1.jpeg'
import Especial2 from '../assets/especial/2.jpeg'
import Especial3 from '../assets/especial/3.jpeg'
import Especial4 from '../assets/especial/4.jpeg'
import Especial5 from '../assets/especial/5.jpeg'

import Tradicional1 from '../assets/tradicional/1.jpeg'
import Tradicional2 from '../assets/tradicional/2.jpeg'
import Tradicional3 from '../assets/tradicional/3.jpeg'
import Tradicional4 from '../assets/tradicional/4.jpeg'
import Tradicional5 from '../assets/tradicional/5.jpeg'

import MaisQueEspecial1 from '../assets/maisQueEspecial/1.jpeg'
import MaisQueEspecial2 from '../assets/maisQueEspecial/2.jpeg'
import MaisQueEspecial3 from '../assets/maisQueEspecial/3.jpeg'
import MaisQueEspecial4 from '../assets/maisQueEspecial/4.jpeg'
import MaisQueEspecial5 from '../assets/maisQueEspecial/5.jpeg'


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
