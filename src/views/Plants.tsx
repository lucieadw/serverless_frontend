import api, { Product } from '@/api'
import ProductCard from '@/components/ProductCard'
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  setup () {
    const products = ref<Product[]>([])
    onBeforeMount(async () => {
      products.value = await api.getPlants()
    })
    return () => <div class="plants">
      {products.value.map(p => <ProductCard><prob>{p.name}</prob></ProductCard>)}
    </div>
  }
})
