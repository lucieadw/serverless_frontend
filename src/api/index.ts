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
  category: string
  productId: string
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
  async getCategory (c: Category): Promise<Product[]> {
    const reponse = await fetch(baseUrl + '/products/' + c)
    return reponse.json()
  },
  async getBasekt (): Promise<Basket> {
    const response = await fetch(baseUrl + '/basket', {
      headers: { Authorization: jwtToken.value }
    })
    return response.json()
  }
}
