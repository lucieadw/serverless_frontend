import api, { BasketProduct, Category } from '@/api'
import BasketEntry from '@/components/BasketEntry'
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({

  setup () {
    const basket = ref()
    const basketProducts = ref<BasketProduct[]>([])
    watchEffect(async () => {
      if (api.jwtToken.value) {
        basket.value = await api.getBasket()
        basketProducts.value = basket.value.products
      } else {
        basket.value = undefined
      }
    })

    async function onChange (product: BasketProduct) {
      basketProducts.value = (await api.updateBasket(product.category, product.productId, product.amount)).products
    }
    return () => <>
      <div class="basket-list">
        <h3>Warenkorb Übersicht</h3>
        <div>
          {(basketProducts.value.map(p => <BasketEntry onChange={onChange} basketProduct={p} />))}
        </div>
      </div>
    </>
  }
})
