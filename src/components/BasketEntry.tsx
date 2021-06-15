import api, { BasketProduct } from '@/api'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  emits: ['change'],
  props: {
    onChange: { type: Function as PropType<(a: BasketProduct) => void> },
    basketProduct: { type: Object as PropType<BasketProduct>, required: true }
  },
  setup (props, { emit }) {
    function increaseAmount () {
      emit('change', { category: props.basketProduct.category, productId: props.basketProduct.productId, amount: props.basketProduct.amount + 1 })
    }
    function decreaseAmount () {
      emit('change', { category: props.basketProduct.category, productId: props.basketProduct.productId, amount: props.basketProduct.amount - 1 })
    }
    function deleteEntry () {
      emit('change', { category: props.basketProduct.category, productId: props.basketProduct.productId, amount: 0 })
    }
    return () => <div class="basket-list-entry row">
      <div class="col-md-3">
        {props.basketProduct.name}
      </div>
      <div class="col-md-3">
        {Math.round(((props.basketProduct.price * props.basketProduct.amount) + Number.EPSILON) * 100) / 100}€
      </div>
      <div class="col-md-3">
        <button onClick={decreaseAmount} class="fa fa-minus"></button>
        {props.basketProduct.amount}
        <button onClick={increaseAmount} class="fa fa-plus"></button>
      </div>
      <div class="col-md-3">
        <button onClick={deleteEntry} class="fa fa-trash"></button>
      </div>
    </div>
  }
})
