import api, { Product } from '@/api'
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  setup () {
    const products = ref<Product[]>([])
    onBeforeMount(async () => {
      products.value = await api.getEdibles()
    })
    return () => <div class="edibles">
      <ul>{products.value.map(p => <li>{p.name}</li>)}</ul>
    </div>
  }
})
