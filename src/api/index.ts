import { Auth } from 'aws-amplify'
import { computed, ref } from 'vue'

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

const baseUrl = 'https://112q6cfx42.execute-api.eu-central-1.amazonaws.com/prod'

Auth.configure({
  // REQUIRED - Amazon Cognito Region
  region: 'eu-central-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'eu-central-1_0Dju4JJZe',
  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: '67s8pg2kkbbhhcrdl2nb0dm46i'
})

const userInfo = ref<UserInfo>()
const isSignedIn = computed(() => userInfo.value !== undefined)

// wenn keine session da (also nicht eingeloggt dann wird das promise nie aufgeöst (.then))
Auth.currentSession().then(sess => (userInfo.value = { username: sess.getIdToken().payload.email }))

export default {
  async signIn (username: string, password: string): Promise<void> {
    let user = await Auth.signIn(username, password)
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      user = await Auth.completeNewPassword(user, password)
    }
    userInfo.value = { username: user.attributes.email }
  },
  async signOut (): Promise<void> {
    await Auth.signOut()
    userInfo.value = undefined
  },
  async getCategory (c: Category): Promise<Product[]> {
    const reponse = await fetch(`${baseUrl}/products/${c}`)
    return reponse.json()
  },
  async getBasket (): Promise<Basket> {
    const response = await fetch(`${baseUrl}/basket`, {
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() }
    })
    return response.json()
  },
  async updateBasket (category: Category, productId: string, amount: number): Promise<Basket> {
    const response = await fetch(`${baseUrl}/basket/update`, {
      method: 'put',
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() },
      body: JSON.stringify({ category, productId, amount })
    })
    return response.json()
  },
  async increaseProductAmount (category: Category, productId: string): Promise<void> {
    await fetch(`${baseUrl}/basket/add`, {
      method: 'put',
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() },
      body: JSON.stringify({ category, productId })
    })
  },
  async getOrders (): Promise<Order[]> {
    const response = await fetch(`${baseUrl}/orders`, {
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() }
    })
    return response.json()
  },
  async cancelOrder (order: Order): Promise<void> {
    const response = await fetch(`${baseUrl}/orders/${order.orderNo}`, {
      method: 'delete',
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() }
    })
    return response.json()
  },
  async createOrderRequest (orderBody: OrderBody): Promise<void> {
    await fetch(`${baseUrl}/orders`, {
      method: 'post',
      headers: { Authorization: (await Auth.currentSession()).getAccessToken().getJwtToken() },
      body: JSON.stringify({
        name: orderBody.name,
        email: userInfo.value?.username,
        street: orderBody.street,
        housenr: orderBody.housenr,
        postcode: orderBody.postcode,
        city: orderBody.city,
        products: orderBody.products
      })
    })
  },
  userInfo,
  isSignedIn
}
