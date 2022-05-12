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
    description: 'São bolos com recheios mais comuns (como brigadeiro, ninho e beijinho) e possuem preços mais em conta ✨',
    name: 'Bolos com recheios tradicionais',
    fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
  }, {
    url: bolo2,
    hasObs: true,
    price: [12.5, 17.75, 22.5],
    name: 'Bolos com recheios especiais',
    additionalPhotos: [bolo5, bolo4, bolo3],
    fillingsOptions: ['Brigadeiro com morango*', 'Ninho com morango*', 'Creme belga com abacaxi*', 'Brigadeiro meio amargo', 'Oreo', 'Amendoim', 'Maracujá', 'Maracujá com brigadeiro*', 'Maracujá com brigadeiro branco*', 'Ninho com geleia de morango*', 'Creme belga com morango*', 'Ninho com Nutella*', 'Mousse de Nutella', 'Ganache meio amarga', 'Prestígio (brigadeiro com beijinho)*', 'Cappuccino'],
    description: 'São bolos com recheios mais gourmets e possuem opções de escolhas maiores! Além disso, alguns têm adicionais de frutas frescas ou geleias ☺️',
  }, {
    url: bolo4,
    name: 'Bolos com recheios mais que especiais',
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo5, bolo4, bolo3],
    fillingsOptions: ['Red Velvet com recheio de cream cheese', 'Massa branca ou chocolate com recheio de nozes.'],
    description: 'São bolos gourmets que já possuem massa e recheios combinados, como o red velvet com cream cheese 🥰',
  }, {
    url: bolo3,
    name: 'Naked cake',
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo2, bolo3],
    fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
    description: 'São bolos conhecidos por não possuírem cobertura, tendo massa e recheio aparentes. Na maioria, o topo de bolo é composto por frutas ou docinhos 😊',
  }, {
    url: bolo1,
    price: [12.5, 17.75, 22.5],
    additionalPhotos: [bolo2, bolo3],
    name: 'Flork cake (bolo meme)',
    fillingsOptions: ['Brigadeiro','Beijinho (coco)' ,'Brigadeiro branco','Ninho', 'Doce de leite.'],
    description: 'São os famosos bolos divertidos, pois possuem desenhos de meme e frases engraçadas escolhidas pelo próprio cliente 😍',
  }]
