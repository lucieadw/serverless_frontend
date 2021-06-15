import api, { Category, Product } from '@/api'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  emits: ['click'], // sorgt dafür dass der Shop an dem ProductCard tag ein onClick hat und man dann dort eine Fuktion aufrufen kann
  props: {
    onClick: Function,
    product: { type: Object as PropType<Product>, required: true }
  },
  setup (props, { emit }) {
    function increaseAmount () {
      api.increaseProductAmount(props.product.category, props.product.productId)
    }
    const image = computed(() => '/img/' + (props.product.picture || 'monstera.jpeg'))
    return () => <div class="col-md-4">
      <section class="panel">
        <div class="pro-img-box">
          <img src={image.value} alt="Kein Bild" />
          <button onClick={increaseAmount} class="btn adtocart">
            <i class="fa fa-shopping-cart"></i>
          </button>
        </div>
        <div class="panel-body text-center">
          <h4>
            <button onClick={() => emit('click', props.product)} class="btn btn-link pro-title">
              {props.product.name}
            </button>
          </h4>
          <p class="price">{props.product.price}€</p>
        </div>
      </section>
    </div>
  }
})
