import { Product } from '@/api'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product>, required: true }
  },
  setup (props) {
    const image = computed(() => '/img/' + (props.product.picture || 'monstera.jpeg'))
    return () => <section class="popup-panel">
      <div class="popup-img">
        <img src={image.value} alt="Kein Bild" />
      </div>
      <div class="popup-info">
        <h3>{props.product.name}</h3>
        <p class="description">{props.product.description}</p>
        <p class="price">{props.product.price}€</p>
        <a class="adtocart">
          <i class="fa fa-shopping-cart"></i>
        </a>
      </div>
    </section>
  }
})
