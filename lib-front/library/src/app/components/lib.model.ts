export interface Book {
  id: number,
  nome: string,
  author?: string
}

export interface Author {
  id: number,
  nome: string,
  book?: string
}
