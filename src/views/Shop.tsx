import api, { Category, Product } from '@/api'
import DetailProduct from '@/components/DetailProduct'
import ProductCard from '@/components/ProductCard'
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'

const productsPerPage = 12

export default defineComponent({
  props: {
    category: { type: String as PropType<Category>, required: true }
  },
  setup (props) {
    const allProducts = ref<Product[]>([])
    const page = ref<number>(0)
    const activeProduct = ref<Product>({} as Product)
    const pageCount = computed<number>(() => allProducts.value.length / productsPerPage)
    const products = computed(() => allProducts.value.slice(page.value * productsPerPage, page.value * productsPerPage + productsPerPage))

    watchEffect(async () => (allProducts.value = await api.getCategory(props.category)))

    function renderPagination () {
      const options = []
      for (let index = 0; index < pageCount.value; index++) {
        options.push(<option value={index}>{index + 1}</option>)
      }
      return <ul class="pagination justify-content-end">
        <li class="page-item"><button class="page-link" onClick={() => (page.value--)} disabled={page.value === 0}><i class="fa fa-angle-left"></i></button></li>
        <li class="page-item"><select v-model={page.value} class="page-link">{options}</select></li>
        <li class="page-item"><button class="page-link" onClick={() => (page.value++)} disabled={page.value === pageCount.value - 1}><i class="fa fa-angle-right"></i></button></li>
      </ul>
    }

    return () => <div class="container shop">
      <div class="row mt-4">
        <div class="col-3">
          <div class="card shop__category">
            <div class="card-header">
              Kategorie
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><router-link to="/shop/plant">Pflanzen</router-link></li>
              <li class="list-group-item"><router-link to="/shop/edible">Kräuter &amp; Gemüse</router-link></li>
              <li class="list-group-item"><router-link to="/shop/flower">Blumen</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <div class="row">
            {renderPagination()}
          </div>
          <div class="row g-3">
            <DetailProduct product={activeProduct.value}></DetailProduct>
            {products.value.map(p => <ProductCard onClick={() => (activeProduct.value = p)} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  }
})
