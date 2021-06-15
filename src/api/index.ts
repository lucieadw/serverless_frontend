import { Auth } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { ref } from 'vue'

const baseUrl = 'https://89ji866ymg.execute-api.eu-central-1.amazonaws.com/dev'

Auth.configure({
  // REQUIRED - Amazon Cognito Region
  region: 'eu-central-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'eu-central-1_vyUSmnSNn',
  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: '1b428hghvf9o93goev3pqj132a'
})

const jwtToken = ref('')

// wenn keine session da (also nicht eingeloggt dann wird das promise nie aufgeöst (.then))
Auth.currentSession().then(sess => (jwtToken.value = sess.getAccessToken().getJwtToken()))

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

export interface BasketProduct {
  category: Category
  productId: string
  name: string
  description: string
  price: number
  stock: number
  picture: string
  amount: number
}

export interface Basket {
  userId: string
  products: BasketProduct[];
}

export default {
  async signIn (username: string, password: string): Promise<void> {
    const user: CognitoUser = await Auth.signIn(username, password)
    jwtToken.value = user.getSignInUserSession()?.getAccessToken().getJwtToken() ?? ''
  },
  async signOut (): Promise<void> {
    await Auth.signOut()
    jwtToken.value = ''
  },
  async getCategory (c: Category): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/' + c)
    return reponse.json()
  },
  async getBasket (): Promise<Basket> {
    const response = await fetch(baseUrl + '/basket', {
      headers: { Authorization: jwtToken.value }
    })
    return response.json()
  },
  async updateBasket (category: Category, productId: string, amount: number): Promise<Basket> {
    const response = await fetch(baseUrl + '/basket/update', {
      method: 'put',
      headers: { Authorization: jwtToken.value },
      body: JSON.stringify({ category, productId, amount })
    })
    return response.json()
  },
  async increaseProductAmount (category: Category, productId: string): Promise<void> {
    await fetch(baseUrl + '/basket/add', {
      method: 'put',
      headers: { Authorization: jwtToken.value },
      body: JSON.stringify({ category, productId })
    })
  },
  jwtToken
}
