import api, { Product } from '@/api'
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  setup () {
    const products = ref<Product[]>([])
    onBeforeMount(async () => {
      products.value = await api.getFlowers()
    })
    return () => <div class="flowers">
      <ul>{products.value.map(p => <li>{p.name}</li>)}</ul>
    </div>
  }
})
