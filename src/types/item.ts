export interface Item {
  url: string
  name: string
  hasObs?: boolean
  description: string
  additionalPhotos?: string[]
  fillingsOptions?: string[] //
  price: [number, number, number]
}

export enum ItemSize {
  SMALL = 35,
  MEDIUM = 40,
  LARGE = 45
}
