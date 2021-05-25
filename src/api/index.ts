const baseUrl = 'https://89ji866ymg.execute-api.eu-central-1.amazonaws.com/dev'

export interface Product {
  category: string
  productId: string
  name: string
  description: string
  price: number
  stock: number
  picture: string
}
export default {
  async getPlants (): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/plant')
    return reponse.json()
  },
  async getFlowers (): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/flower')
    return reponse.json()
  },
  async getEdibles (): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/edible')
    return reponse.json()
  }
}
