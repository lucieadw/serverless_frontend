import { Product } from '@/api'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product>, required: true }
  },
  setup (props) {
    const image = computed(() => props.product.picture || require('@/assets/monstera.jpeg'))
    return () => <div class="col-md-4">
      <section class="panel">
        <div class="pro-img-box">
          <img src={image.value} alt="Kein Bild" />
          <a href="#" class="adtocart">
            <i class="fa fa-shopping-cart"></i>
          </a>
        </div>
        <div class="panel-body text-center">
          <h4>
            <a href="#" class="pro-title">
              {props.product.name}
            </a>
          </h4>
          <p class="price">{props.product.price}€</p>
        </div>
      </section>
    </div>
  }
})
