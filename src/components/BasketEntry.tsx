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
    return () => <tr>
      <td>
        {props.basketProduct.name}
      </td>
      <td>
        <div class="btn-group me-2">
          <button onClick={decreaseAmount} class="btn btn-outline-dark" disabled={props.basketProduct.amount === 1}><i class="fa fa-minus"></i></button>
          <div class="btn btn-outline-dark">{props.basketProduct.amount}</div>
          <button onClick={increaseAmount} class="btn btn-outline-dark"><i class="fa fa-plus"></i></button>
        </div>
        <button onClick={deleteEntry} class="btn btn-outline-dark"><i class="fa fa-trash"></i></button>
      </td>
      <td class="text-end">
        {props.basketProduct.price.toFixed(2)} €
      </td>
      <td class="text-end">
        {(props.basketProduct.price * props.basketProduct.amount).toFixed(2)} €
      </td>
    </tr>
  }
})
