export interface Product {
  id: number
  nombre: string
  precio: number
  categoria: string
  categoriaId: number
  stock: number
}

export interface Category {
  id: number
  nombre: string
}

export type Action = {
  boleand: true | false
}