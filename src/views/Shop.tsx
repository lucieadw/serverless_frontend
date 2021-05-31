import api, { Category, Product } from '@/api'
import DetailProduct from '@/components/DetailProduct'
import ProductCard from '@/components/ProductCard'
import { computed, defineComponent, ref, watchEffect } from 'vue'

const productsPerPage = 12

export default defineComponent({
  setup () {
    const category = ref<Category>(Category.Plants)
    const allProducts = ref<Product[]>([])
    const page = ref<number>(0)
    const activeProduct = ref<Product | undefined>()
    const pageCount = computed<number>(() => allProducts.value.length / productsPerPage)
    const products = computed(() => allProducts.value.slice(page.value * productsPerPage, page.value * productsPerPage + productsPerPage))

    watchEffect(async () => (allProducts.value = await api.getCategory(category.value)))

    function renderPageControls () {
      const options = []
      for (let index = 0; index < pageCount.value; index++) {
        options.push(<option value={index}>{index + 1}</option>)
      }
      return <>
        <button onClick={() => (page.value--)} class="btn btn-default" disabled={page.value === 0}><i class="fa fa-angle-left"></i></button>
        <select v-model={page.value} class="btn btn-default">{options}</select>
        <button onClick={() => (page.value++)} class="btn btn-default" disabled={page.value === pageCount.value - 1}><i class="fa fa-angle-right"></i></button>
      </>
    }

    return () => <div class="container plants">
      <div class="col-md-3 category-nav">
        <section class="panel">
          <header class="panel-heading">Kategorie</header>
          <div class="panel-body">
            <ul class="nav prod-cat">
              <li>
                <button
                  onClick={() => (category.value = Category.Plants)}
                  class={{ btn: true, 'btn-link': true, active: category.value === Category.Plants }}
                >
                  <i class="fa fa-angle-right"></i> Pflanzen
                </button>
              </li>
              <li>
                <button
                  onClick={() => (category.value = Category.Edibles)}
                  class={{ btn: true, 'btn-link': true, active: category.value === Category.Edibles }}
                >
                  <i class="fa fa-angle-right"></i> Kräuter &amp; Gemüse
                </button>
              </li>
              <li>
                <button
                  onClick={() => (category.value = Category.Flowers)}
                  class={{ btn: true, 'btn-link': true, active: category.value === Category.Flowers }}
                >
                  <i class="fa fa-angle-right"></i> Blumen
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="col-md-9">
        <section class="panel">
          <div class="panel-body">
            <div class="pull-right btn-group">
              {renderPageControls()}
            </div>
          </div>
        </section>
        {activeProduct.value &&
          <div class='popup'>
            <div class='popup_inner'>
              <DetailProduct product={activeProduct.value}></DetailProduct>
              <button class="btn btn-link btn-close" onClick={() => (activeProduct.value = undefined)}>
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>}
        <div class="row product-list">
          {products.value.map(p => <ProductCard onClick={() => (activeProduct.value = p)} product={p} />)}
        </div>
      </div>
    </div>
  }
})
