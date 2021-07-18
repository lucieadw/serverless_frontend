export enum Category {
  Plants = 'plant',
  Flowers = 'flower',
  Edibles = 'edible'
}
export enum OrderStatus {
  OutOfStock = 'OutOfStock',
  Canceled = 'Canceled',
  Confirmed = 'Confirmed'
}

export interface Product {
  category: Category
  productId: string
  name: string
  description: string
  price: number
  picture: string
}

export interface BasketProduct extends Product {
  amount: number
}

export interface Basket {
  userId: string
  products: BasketProduct[];
}

export interface UserInfo {
  username: string
}

export interface Order {
  userId: string
  orderNo: string
  name: string
  email: string
  street: string
  housenr: string
  postcode: string
  city: string
  products: BasketProduct[]
  sum: number
  orderStatus: OrderStatus
}

export interface OrderBody {
  name: string
  street: string
  housenr: string
  postcode: string
  city: string
  products: BasketProduct[]
}

const baseUrl = 'https://k577d65461.execute-api.eu-central-1.amazonaws.com/prod'
const testId = 'fe-test'

export default {
  async getCategory (c: Category): Promise<Product[]> {
    const reponse = await fetch(`${baseUrl}/products/${c}`)
    return reponse.json()
  },
  async getBasket (): Promise<Basket> {
    const response = await fetch(`${baseUrl}/baskets/${testId}`)
    return response.json()
  },
  async updateBasket (category: Category, productId: string, amount: number): Promise<Basket> {
    const response = await fetch(`${baseUrl}/baskets/${testId}/update`, {
      method: 'put',
      body: JSON.stringify({ category, productId, amount })
    })
    return response.json()
  },
  async increaseProductAmount (category: Category, productId: string): Promise<void> {
    await fetch(`${baseUrl}/baskets/${testId}/add`, {
      method: 'put',
      body: JSON.stringify({ category, productId })
    })
  },
  async getOrders (): Promise<Order[]> {
    const response = await fetch(`${baseUrl}/orders/${testId}`)
    return response.json()
  },
  async cancelOrder (order: Order): Promise<void> {
    const response = await fetch(`${baseUrl}/orders/${testId}/${order.orderNo}`, { method: 'delete' })
    return response.json()
  },
  async createOrderRequest (orderBody: OrderBody): Promise<void> {
    await fetch(`${baseUrl}/orders/${testId}`, {
      method: 'post',
      body: JSON.stringify({
        name: orderBody.name,
        email: 'test@test.de',
        street: orderBody.street,
        housenr: orderBody.housenr,
        postcode: orderBody.postcode,
        city: orderBody.city,
        products: orderBody.products
      })
    })
  }
}
