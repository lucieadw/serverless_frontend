import api, { Product } from '@/api'
import { defineComponent, computed, PropType, ref } from 'vue'

export default defineComponent({
  emits: ['click'], // sorgt dafür dass der Shop an dem ProductCard tag ein onClick hat und man dann dort eine Fuktion aufrufen kann
  props: {
    onClick: Function,
    product: { type: Object as PropType<Product>, required: true }
  },
  setup (props, { emit }) {
    const addedItem = ref(false)
    function onIncreaseAmount () {
      api.increaseProductAmount(props.product.category, props.product.productId)
      addedItem.value = true
    }
    const image = computed(() => '/img/' + (props.product.picture || 'monstera.jpeg'))
    return () => <div class="col-4">
      <div class="card shop__product">
        <img src={image.value} class="card-img-top"/>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{props.product.name}</h5>
          <p class="card-text mb-auto">{props.product.price}€</p>
          {!addedItem.value && <button onClick={onIncreaseAmount} class="btn btn-dark mb-1"><i class="fa fa-shopping-cart"></i></button>}
          {addedItem.value && <button onClick={onIncreaseAmount} class="btn btn-dark mb-1" disabled={true}><i class="fa fa-check"></i> Hinzugefügt</button>}
          <button onClick={() => emit('click', props.product)} class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
            Details
          </button>
        </div>
      </div>
    </div>
  }
})
