import api, { Category, Product } from '@/api'
import ProductCard from '@/components/ProductCard'
import { computed, defineComponent, ref, watchEffect } from 'vue'

const productsPerPage = 12

export default defineComponent({
  setup () {
    const category = ref<Category>(Category.Plants)
    const allProducts = ref<Product[]>([])
    const page = ref<number>(0)
    const pageCount = computed<number>(() => allProducts.value.length / productsPerPage)
    const products = computed(() => allProducts.value.slice(page.value * productsPerPage, page.value * productsPerPage + productsPerPage))

    watchEffect(async () => (allProducts.value = await api.getCategory(category.value)))

    function renderPageButtons () {
      const buttons = []
      for (let index = 0; index < pageCount.value; index++) {
        buttons.push(<li><button onClick={() => (page.value = index)} class="btn btn-default">{index + 1}</button></li>)
      }
      return buttons
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
            <div class="pull-right">
              <ul class="pagination pagination-sm pro-page-list">
                {renderPageButtons()}
              </ul>
            </div>
          </div>
        </section>
        <div class="row product-list">
          {products.value.map(p => <ProductCard product={p} />)}
        </div>
      </div>
    </div>
  }
})
