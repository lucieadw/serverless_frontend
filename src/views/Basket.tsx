import api from '@/api'
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  setup () {
    return () => <>
      <div class="basket-list"><h3>Warenkorb Übersicht</h3></div>
      <div>{api.getBasket()}</div>
    </>
  }
})
