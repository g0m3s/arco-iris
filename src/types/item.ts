export interface Item {
  url: string,
  name: string
  description: string
  additionalPhotos?: string[]
  price: [number, number, number]
}

export enum ItemSize {
  SMALL = 35,
  MEDIUM = 40,
  LARGE = 45
}
