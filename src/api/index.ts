const baseUrl = 'https://89ji866ymg.execute-api.eu-central-1.amazonaws.com/dev'

export enum Category {
  Plants = 'plant',
  Flowers = 'flower',
  Edibles = 'edible'
}

export interface Product {
  category: Category
  productId: string
  name: string
  description: string
  price: number
  stock: number
  picture: string
}
export default {
  async getCategory (c: Category): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/' + c)
    return reponse.json()
  }
}
